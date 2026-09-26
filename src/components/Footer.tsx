import React from 'react';
import { ArrowUp, Heart, Phone, Mail, Presentation } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-white/10 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Wordmark */}
          <div className="space-y-1 text-center md:text-left">
            <a
              href="#"
              className="text-lg font-black tracking-tight text-white font-display hover:text-[#F5A623] transition-colors"
            >
              {designerProfile.name}
            </a>
            <p className="text-zinc-500 font-mono text-[11px]">
              {designerProfile.title} · New Delhi, India
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-300 font-medium">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={onOpenDeck}
              className="text-[#F5A623] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Slide Deck (6 Slides)</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} {designerProfile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${designerProfile.phone}`}
              className="hover:text-white transition-colors"
            >
              {designerProfile.phoneDisplay}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${designerProfile.email}`}
              className="hover:text-white transition-colors"
            >
              {designerProfile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
