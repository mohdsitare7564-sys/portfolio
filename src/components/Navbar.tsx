import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Sparkles, Train, Briefcase, ChevronRight } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenDeck?: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md border-b-2 border-black py-2.5 shadow-md text-black'
          : 'bg-[#FAF7F0]/80 backdrop-blur-sm border-b border-black/20 py-3.5 text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Fixed Header Name & Professional Brand Badge */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            {/* AA Railway Monogram Icon */}
            <div className="w-8 h-8 rounded-lg bg-[#821919] text-[#FFD200] flex items-center justify-center font-black font-mono text-sm shadow-md border-2 border-black group-hover:scale-105 transition-transform">
              AA
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                {/* Header Name */}
                <span className="text-base sm:text-xl font-black tracking-wider text-black font-railway uppercase leading-none group-hover:text-[#821919] transition-colors">
                  {designerProfile.name}
                </span>

                {/* Available for hire pulse pill */}
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-800 text-[10px] font-mono font-bold leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE FOR HIRE
                </span>
              </div>

              {/* Subtitle / Station Tag */}
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-600 tracking-wide uppercase leading-tight mt-0.5">
                PORTFOLIOPUR EXPRESS · SENIOR VISUAL & BRAND DESIGNER
              </span>
            </div>
          </a>

          {/* RIGHT: Fixed Professional Action Button (Hire Me) */}
          <div className="flex items-center gap-3">
            {/* Pro Level Fixed Hire Me Button */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg font-mono font-black text-xs uppercase text-white bg-gradient-to-r from-[#821919] via-[#A01E1E] to-[#821919] hover:from-[#9B1C1C] hover:to-[#B82525] border-2 border-black shadow-[0_4px_12px_rgba(130,25,25,0.35)] hover:shadow-[0_6px_18px_rgba(130,25,25,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 overflow-hidden cursor-pointer"
              aria-label="Hire Me"
            >
              {/* Subtle shining light flare background effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

              <Sparkles className="w-4 h-4 text-[#FFD200] group-hover:rotate-12 group-hover:scale-110 transition-transform" />
              <span className="tracking-wider text-white">HIRE ME</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#FFD200] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile menu hamburger toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white border-2 border-black text-black hover:bg-[#FFD200] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Expanded Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#FAF7F0] border-2 border-black rounded-xl shadow-2xl space-y-2.5 font-mono text-xs animate-in slide-in-from-top-2 duration-200">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pb-1 border-b border-black/10">
              Station Direct Navigation
            </div>
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              00 · Start / Hero (आरंभ)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              01 · About (परिचय)
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              02 · Social Media (डिजिटल धाम)
            </a>
            <a
              href="#packaging"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              03 · Packaging (पैकेजिंगगढ़)
            </a>
            <a
              href="#creativesar"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              04 · Creatives (क्रिएटिवसर)
            </a>
            <a
              href="#ai-videos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              05 · AI Video Ads (चलचित्र गढ़)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 rounded hover:bg-[#FFD200] text-zinc-800 font-bold uppercase transition-colors"
            >
              06 · Contact (संपर्क)
            </a>

            <div className="pt-2 border-t border-black/20 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-center bg-[#821919] text-white border-2 border-black rounded font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFD200]" />
                <span>Hire Me</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
