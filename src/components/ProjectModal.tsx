import React, { useState } from 'react';
import { X, Heart, Share2, Copy, Check, ExternalLink, Sparkles, Palette, Type, Layers } from 'lucide-react';
import { Project } from '../types';
import {
  PosterWesthillFitout,
  PosterApnaService,
  PosterWesthillBespoke,
  PosterPulseIdentity,
  PosterUrbanVector,
  PosterBrutalistType,
} from './ArtworkRenders';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onLike: (id: string) => void;
  isLiked: boolean;
  likeCount: number;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onLike,
  isLiked,
  likeCount,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!project) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Render proper artwork component
  const renderArtwork = () => {
    if (project.imageUrl) {
      return (
        <div className="w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/60 flex items-center justify-center p-2">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      );
    }
    switch (project.posterKey) {
      case 'westhill-fitout':
        return <PosterWesthillFitout className="w-full max-w-md mx-auto" />;
      case 'apna-service':
        return <PosterApnaService className="w-full max-w-md mx-auto" />;
      case 'westhill-bespoke':
        return <PosterWesthillBespoke className="w-full max-w-md mx-auto" />;
      case 'pulse-identity':
        return <PosterPulseIdentity className="w-full max-w-md mx-auto" />;
      case 'urban-vector':
        return <PosterUrbanVector className="w-full max-w-md mx-auto" />;
      case 'brutalist-type':
        return <PosterBrutalistType className="w-full max-w-md mx-auto" />;
      default:
        return <PosterWesthillFitout className="w-full max-w-md mx-auto" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-[#10121A] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161924]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#F5A623] uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-zinc-500" aria-hidden="true">·</span>
            <span className="text-xs font-mono text-zinc-400">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5 text-xs"
              title="Share project link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Big Poster Layout View */}
          <div className="lg:col-span-6 bg-[#090A0D] p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
            {renderArtwork()}

            {/* Poster Quick Info */}
            <div className="w-full mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Format: {project.aspectRatio}</span>
              <button
                onClick={() => onLike(project.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                  isLiked
                    ? 'bg-rose-500/10 border-rose-500/40 text-rose-400 font-bold'
                    : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{likeCount.toLocaleString()} Likes</span>
              </button>
            </div>
          </div>

          {/* Right Column: Project Details, Strategy, Typography & Swatches */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                {project.title}
              </h2>
              <div className="text-sm text-[#F5A623] font-medium mt-1">
                Client: {project.client}
              </div>
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Creative Overview
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Design Highlights & Visual Decisions</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#F5A623] font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Tools Used */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Software Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="text-xs font-mono text-zinc-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette breakdown with 1-click copy */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Color Palette (Click to Copy HEX)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {project.colorPalette.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => handleCopyHex(col.hex)}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-left hover:border-white/30 transition-all group"
                  >
                    <div
                      className="w-full h-8 rounded-lg mb-1.5 shadow-sm border border-black/20"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div className="text-[10px] font-mono text-white group-hover:text-[#F5A623] flex items-center justify-between">
                      <span>{col.hex}</span>
                      {copiedHex === col.hex ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                      )}
                    </div>
                    <div className="text-[9px] text-zinc-400 truncate">{col.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Typography Stack</span>
              </div>
              <div className="text-xs font-mono text-zinc-200 bg-white/5 p-3 rounded-xl border border-white/10">
                {project.typography}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
