import React, { useState, useEffect } from 'react';
import { Presentation, Mail, Menu, X, ArrowUpRight, Train } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenDeck: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md border-b-2 border-black py-2.5 shadow-sm text-black'
          : 'bg-transparent py-4 text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Station Pin */}
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <div className="w-7 h-7 rounded bg-[#821919] text-[#FFD200] flex items-center justify-center font-black font-mono text-xs shadow-xs border border-black">
              AA
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-wider text-black font-railway uppercase block leading-none group-hover:text-[#821919] transition-colors">
                {designerProfile.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-600 block leading-tight">
                PORTFOLIOPUR EXPRESS · उ.रे.
              </span>
            </div>
          </a>

          {/* Clean Railway Station Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
            <a
              href="#about"
              className="hover:text-[#821919] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              01 · About (परिचय)
            </a>
            <a
              href="#projects"
              className="hover:text-[#821919] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              02 · Social Media (डिजिटल धाम)
            </a>
            <a
              href="#packaging"
              className="hover:text-[#821919] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              03 · Packaging (पैकेजिंगगढ़)
            </a>
            <a
              href="#creativesar"
              className="hover:text-[#821919] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              04 · Creatives (क्रिएटिवसर)
            </a>
            <a
              href="#ai-videos"
              className="hover:text-[#821919] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              05 · AI Video Ads (चलचित्र गढ़)
            </a>
            <a
              href="#contact"
              className="hover:text-[#821919] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              Contact (संपर्क)
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenDeck}
              className="px-3 py-1.5 text-xs font-mono font-bold text-black bg-white border border-black/30 hover:border-black rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
              title="View presentation deck mode"
            >
              <Presentation className="w-3.5 h-3.5 text-[#821919]" />
              <span>Slide Deck</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 text-xs font-mono font-black text-white bg-[#821919] hover:bg-[#6c1414] rounded-lg transition-all flex items-center gap-1.5 shadow-xs border border-black/40"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFD200]" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white border border-black/30 text-black hover:border-black transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#FAF7F0] border-2 border-black rounded-xl shadow-xl space-y-3 font-mono text-xs">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-800 hover:text-[#821919] font-bold"
            >
              01 · About (परिचय)
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-800 hover:text-[#821919] font-bold"
            >
              02 · Social Media (डिजिटल धाम)
            </a>
            <a
              href="#packaging"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-800 hover:text-[#821919] font-bold"
            >
              03 · Packaging (पैकेजिंगगढ़)
            </a>
            <a
              href="#creativesar"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-800 hover:text-[#821919] font-bold"
            >
              04 · Creative Pieces (क्रिएटिवसर)
            </a>
            <a
              href="#ai-videos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-800 hover:text-[#821919] font-bold"
            >
              05 · AI Video Ads (चलचित्र गढ़)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-800 hover:text-[#821919] font-bold"
            >
              Contact · Ticket Booking
            </a>

            <div className="pt-2 border-t border-black/20 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeck();
                }}
                className="flex-1 py-2 text-center bg-white border border-black/30 rounded font-bold"
              >
                Slide Deck
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex-1 py-2 text-center bg-[#821919] text-white rounded font-bold"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
