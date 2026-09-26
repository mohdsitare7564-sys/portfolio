import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, MessageSquare, Image as ImageIcon, PenTool, Sparkles, Train, FileCode, Heart } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';
import { RailwayTrackJourney } from './RailwayTrackJourney';

interface AboutSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectCategory }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [visualMode, setVisualMode] = useState<'train' | 'sketch' | 'photo'>('train');
  const [greetingLang, setGreetingLang] = useState<'hindi' | 'urdu' | 'english'>('hindi');

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const greetings = {
    hindi: 'नमस्ते......',
    urdu: 'آداب......',
    english: 'Hello......',
  };

  return (
    <section id="about" className="py-20 bg-[#F4EFEB] text-[#1A1A1E] border-b border-[#D8D0C0] relative overflow-hidden">
      {/* Subtle vintage newsprint / sketchbook paper texture */}
      <div className="absolute inset-0 bg-railway-parchment opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb & Status */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-black/15">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#821919] uppercase tracking-widest">
            <Train className="w-4 h-4 text-[#821919]" />
            <span>PASSENGER PROFILE & CREATIVE DOSSIER</span>
            <span className="text-zinc-400">·</span>
            <span className="text-zinc-700">PORTFOLIOPUR JN.</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Greeting Language Switcher */}
            <div className="inline-flex rounded-lg bg-white/80 p-0.5 border border-[#DDD5C5] text-xs font-mono">
              <button
                onClick={() => setGreetingLang('hindi')}
                className={`px-2 py-0.5 rounded ${greetingLang === 'hindi' ? 'bg-[#821919] text-white font-bold' : 'text-zinc-600 hover:text-black'}`}
              >
                नमस्ते
              </button>
              <button
                onClick={() => setGreetingLang('urdu')}
                className={`px-2 py-0.5 rounded ${greetingLang === 'urdu' ? 'bg-[#821919] text-white font-bold' : 'text-zinc-600 hover:text-black'}`}
              >
                آداب
              </button>
              <button
                onClick={() => setGreetingLang('english')}
                className={`px-2 py-0.5 rounded ${greetingLang === 'english' ? 'bg-[#821919] text-white font-bold' : 'text-zinc-600 hover:text-black'}`}
              >
                Hello
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Spread Matching the Middle Section of Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (5 Cols): Iconic Train Scene Halftone Photo Collage */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-2 border-black/80 relative">
              {/* Top View Mode Switcher Pills */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#ECE5D8] flex-wrap gap-2">
                <span className="text-[11px] font-mono font-bold text-zinc-600 uppercase">
                  Visual Frame
                </span>

                <div className="inline-flex rounded-lg bg-[#EFE9DD] p-0.5 border border-[#DDD5C5] text-xs">
                  <button
                    onClick={() => setVisualMode('train')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                      visualMode === 'train'
                        ? 'bg-black text-[#FFD200] font-bold shadow-xs'
                        : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    <Train className="w-3 h-3" />
                    <span>Train Scene</span>
                  </button>
                  <button
                    onClick={() => setVisualMode('sketch')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                      visualMode === 'sketch'
                        ? 'bg-black text-white font-bold shadow-xs'
                        : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    <PenTool className="w-3 h-3" />
                    <span>Sketch</span>
                  </button>
                  <button
                    onClick={() => setVisualMode('photo')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                      visualMode === 'photo'
                        ? 'bg-black text-white font-bold shadow-xs'
                        : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Photo</span>
                  </button>
                </div>
              </div>

              {/* Main Artwork Canvas */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#EAE3D2] border border-black/40 shadow-inner group">
                {visualMode === 'train' ? (
                  <>
                    <img
                      src="/ddlj_train_scene.jpg"
                      alt="Halftone print photograph of iconic Bollywood Indian Railways train scene with girl running in festive dress reaching to train door"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Stenciled Retro Meme Badge Matching Reference Image */}
                    <div className="absolute bottom-4 left-3 right-3 bg-black/85 backdrop-blur-xs p-3 rounded-lg border-2 border-[#FFD200] text-center shadow-lg transform transition-all group-hover:translate-y-[-2px]">
                      <div className="text-[#FFD200] text-sm sm:text-base font-extrabold font-hindi leading-tight drop-shadow-sm">
                        जा अकिब जा! जीले अपनी जिंदगी...
                      </div>
                      <div className="text-white text-xs sm:text-sm font-black font-railway uppercase tracking-wider mt-0.5">
                        पर पहले <span className="text-[#FFD200] underline decoration-[#E53935] decoration-2">FILE TO SAVE KAR JA</span>!
                      </div>
                    </div>
                  </>
                ) : visualMode === 'sketch' ? (
                  <img
                    src="/designer_sketch_portrait.jpg"
                    alt="Graphite pencil sketch portrait of designer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src="/designer_original_photo.jpg"
                    alt="Original photo portrait of designer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>

              {/* Footnote Caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-600 px-1">
                <span>DILWALE DESIGN LE JAYENGE</span>
                <span className="font-bold text-black">EDITION 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Bio & 6-Grid Information Sheet Matching Reference Image */}
          <div className="lg:col-span-7 space-y-6">
            {/* Big Greeting Headline */}
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-hindi text-[#821919] leading-none drop-shadow-xs">
                {greetings[greetingLang]}
              </h2>

              {/* Bio Narrative Paragraphs */}
              <div className="mt-4 space-y-2 text-[#2D2E33] text-sm sm:text-base leading-relaxed font-sans font-medium text-balance">
                <p>
                  I am <strong className="text-black font-bold font-railway text-lg tracking-wide uppercase">{designerProfile.name}</strong>, as a human being I love train journeys and using music as a tonic to keep me going.
                </p>
                <p className="text-zinc-700 text-sm sm:text-base">
                  For me design is a way to understand people, their behaviour & most important their problems through design. I believe the phrase <span className="font-bold text-[#821919] bg-[#821919]/10 px-1.5 py-0.5 rounded font-mono">“I am still learning”</span> because learning is a neverending process and this helps me to expand my skillset & found opportunities that helps me to grow both as a professional & as a human being.
                </p>
              </div>
            </div>

            {/* STRUCTURED INFORMATION GRID */}
            <div className="pt-2 border-t-2 border-black/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6">
                {/* 1. SKILLS */}
                <div className="space-y-1">
                  <div className="text-sm font-black font-railway tracking-wider text-[#821919] uppercase">
                    SKILLS
                  </div>
                  <ul className="text-xs text-zinc-800 space-y-0.5">
                    <li className="font-semibold text-black">Adobe Photoshop</li>
                    <li className="font-semibold text-black">Adobe Illustrator</li>
                    <li>Adobe Premiere Pro</li>
                    <li>Adobe After Effects / Figma</li>
                    <li>AI Tools & Firefly</li>
                  </ul>
                </div>

                {/* 2. EXPERIENCE */}
                <div className="space-y-1">
                  <div className="text-sm font-black font-railway tracking-wider text-[#821919] uppercase">
                    EXPERIENCE
                  </div>
                  <div className="text-xs text-zinc-800 leading-snug">
                    <p className="font-semibold text-black">Lead Graphic Designer</p>
                    <p className="text-zinc-600">Khan Global Studies (KGS)</p>
                  </div>
                  <div className="text-xs text-zinc-800 leading-snug pt-1">
                    <p className="font-semibold text-black">Freelance Creative</p>
                    <p className="text-zinc-600">Brand & Social Media Specialist</p>
                  </div>
                </div>

                {/* 3. SOFT SKILLS */}
                <div className="space-y-1">
                  <div className="text-sm font-black font-railway tracking-wider text-[#821919] uppercase">
                    SOFT SKILLS
                  </div>
                  <ul className="text-xs text-zinc-800 space-y-0.5">
                    <li>Conceptualisation</li>
                    <li>Research & Analysis</li>
                    <li>Visual Storytelling</li>
                    <li>Teamwork and Reliability</li>
                    <li>Clear Communication</li>
                  </ul>
                </div>

                {/* 4. INTERESTS */}
                <div className="space-y-1 pt-2 sm:pt-4 border-t border-black/10 sm:border-t-0">
                  <div className="text-sm font-black font-railway tracking-wider text-[#821919] uppercase">
                    INTERESTS
                  </div>
                  <ul className="text-xs text-zinc-800 space-y-0.5">
                    <li>Reading</li>
                    <li>Sketching & Typography</li>
                    <li>Train Journeys & Travel</li>
                    <li>Music & Acoustics</li>
                    <li>Filmmaking</li>
                  </ul>
                </div>

                {/* 5. LANGUAGES */}
                <div className="space-y-1 pt-2 sm:pt-4 border-t border-black/10 sm:border-t-0">
                  <div className="text-sm font-black font-railway tracking-wider text-[#821919] uppercase">
                    LANGUAGES
                  </div>
                  <ul className="text-xs text-zinc-800 space-y-0.5">
                    <li className="font-semibold text-black">Hindi (Native)</li>
                    <li className="font-semibold text-black">English (Professional)</li>
                    <li className="font-semibold text-black">Urdu (Proficient)</li>
                    <li className="text-zinc-600">and basic Punjabi</li>
                  </ul>
                </div>

                {/* 6. CREATIVE FOCUS */}
                <div className="space-y-1 pt-2 sm:pt-4 border-t border-black/10 sm:border-t-0">
                  <div className="text-sm font-black font-railway tracking-wider text-[#821919] uppercase">
                    CREATIVE FOCUS
                  </div>
                  <ul className="text-xs text-zinc-800 space-y-0.5">
                    <li className="font-semibold text-black">Brand Identity Systems</li>
                    <li className="font-semibold text-black">Social Media Advertising</li>
                    <li>Marketing Campaign Posters</li>
                    <li>Vector Illustrations</li>
                    <li className="text-zinc-600">New Delhi · Remote Worldwide</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Ticket / Contact Row on Paper */}
            <div className="pt-4 border-t border-black/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${designerProfile.phone}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-black/30 hover:border-black text-xs font-mono font-bold text-black transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#821919]" />
                  <span>{designerProfile.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${designerProfile.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-black/30 hover:border-black text-xs font-mono font-bold text-black transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#821919]" />
                  <span>{designerProfile.email}</span>
                </a>
              </div>

              <a
                href={designerProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-sm transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: "WHAT'S INSIDE अंदर क्या है ?" INTERACTIVE RAILWAY TRACK MAP */}
        <RailwayTrackJourney onSelectStation={onSelectCategory} />
      </div>
    </section>
  );
};
