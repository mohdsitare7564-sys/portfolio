import React from 'react';
import { ArrowUp, Presentation, Train, Mail, Phone, MapPin } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

interface FooterProps {
  onOpenDeck?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Audio Train Whistle / Signal feedback
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(640, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.13);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <footer className="bg-[#FAF7F0] border-t-4 border-black relative overflow-hidden text-black py-12">
      {/* Top Warning Stripe Accent */}
      <div className="absolute top-0 inset-x-0 h-3 bg-repeat-x bg-[linear-gradient(90deg,#821919_0px,#821919_24px,#FFD200_24px,#FFD200_48px)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b-2 border-black/20">
          {/* Station Master Signboard & Monogram */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#821919] text-[#FFD200] flex items-center justify-center font-black font-mono text-base shadow-md border-2 border-black shrink-0">
              AA
            </div>
            <div>
              <a
                href="#hero"
                className="text-xl font-black font-railway tracking-wider text-black uppercase hover:text-[#821919] transition-colors leading-none block"
              >
                {designerProfile.name}
              </a>
              <span className="text-xs font-mono font-bold text-zinc-600 block leading-tight mt-0.5">
                PORTFOLIOPUR EXPRESS · STATION MASTER DIVISION (उ.रे.)
              </span>
            </div>
          </div>

          {/* Station Route Nav Links */}
          <nav aria-label="Footer station links" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-800">
            <a href="#hero" className="hover:text-[#821919] hover:underline transition-colors">
              00 · Start
            </a>
            <a href="#about" className="hover:text-[#821919] hover:underline transition-colors">
              01 · About
            </a>
            <a href="#projects" className="hover:text-[#821919] hover:underline transition-colors">
              02 · Social
            </a>
            <a href="#packaging" className="hover:text-[#821919] hover:underline transition-colors">
              03 · Packaging
            </a>
            <a href="#creativesar" className="hover:text-[#821919] hover:underline transition-colors">
              04 · Creatives
            </a>
            <a href="#ai-videos" className="hover:text-[#821919] hover:underline transition-colors">
              05 · AI Ads
            </a>
            <a href="#contact" className="hover:text-[#821919] hover:underline transition-colors">
              06 · Contact
            </a>
          </nav>

          {/* Return to Origin Button (Scroll to Top) */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-[#821919] text-[#FFD200] border-2 border-black hover:bg-[#9E1F1F] transition-all font-mono font-black text-xs uppercase flex items-center gap-2 shadow-md hover:-translate-y-0.5 cursor-pointer"
            title="Return to Origin (Hero Platform)"
          >
            <Train className="w-4 h-4" />
            <span>RETURN TO ORIGIN (TOP)</span>
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Bottom Station Division Credits & Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-zinc-600">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {designerProfile.name}. PORTFOLIOPUR EXPRESS DIVISION.</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-800">
            <a
              href={`tel:${designerProfile.phone}`}
              className="hover:text-[#821919] transition-colors"
            >
              {designerProfile.phoneDisplay}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${designerProfile.email}`}
              className="hover:text-[#821919] transition-colors"
            >
              {designerProfile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
