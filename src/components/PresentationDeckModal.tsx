import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Phone,
  Mail,
  Heart,
} from 'lucide-react';
import { designerProfile } from '../data/portfolioData';
import {
  PosterWesthillFitout,
  PosterApnaService,
  PosterWesthillBespoke,
  DesignerPortraitCard,
} from './ArtworkRenders';

interface PresentationDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export const PresentationDeckModal: React.FC<PresentationDeckModalProps> = ({
  isOpen,
  onClose,
  initialSlide = 1,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCurrentSlide(initialSlide);
  }, [initialSlide, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev < 6 ? prev + 1 : 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev > 1 ? prev - 1 : 6));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev < 6 ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : 6));

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Presentation Deck"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none"
    >
      {/* Top Deck Controls Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0C10]/80">
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-[#F5A623] font-display">
            {designerProfile.name.toUpperCase()}
          </div>
          <span className="text-zinc-600">|</span>
          <div className="text-xs font-mono text-zinc-400">
            Slide {currentSlide} of 6
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleFullscreen}
            className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            title="Exit Presentation (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Canvas Container (16:9 presentation aspect ratio) */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        <div className="relative w-full max-w-6xl aspect-[16/9] bg-[#0c0d12] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between">
          {/* SLIDE 1: COVER (PORTFOLIO / AQUIB ANZAR / Graphic designer) */}
          {currentSlide === 1 && (
            <div className="w-full h-full p-8 md:p-14 flex flex-col justify-between bg-topo-pattern relative">
              <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
                {/* Left Side: Bold Title */}
                <div className="md:col-span-7 space-y-4">
                  <div className="font-display font-black uppercase tracking-tighter leading-[0.88]">
                    <div className="text-5xl sm:text-6xl lg:text-7xl text-[#F5A623]">
                      PORT
                    </div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl text-white">
                      FOLIO
                    </div>
                  </div>
                  <div className="pt-4 border-l-4 border-[#F5A623] pl-4">
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-wider">
                      {designerProfile.name}
                    </h2>
                    <p className="text-sm font-mono text-[#F5A623] tracking-widest uppercase">
                      {designerProfile.title}
                    </p>
                  </div>
                </div>

                {/* Right Side: Hand & Toolbar Visual */}
                <div className="md:col-span-5 relative flex items-center justify-center">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-[#141620] border border-white/10 p-6 flex flex-col items-center justify-center shadow-xl">
                    {/* Tool Badges */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#FF9A00]/20 border border-[#FF9A00] flex flex-col items-center justify-center text-[#FF9A00] font-black text-base font-display shadow-lg shadow-[#FF9A00]/20">
                        Ai
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/20 border border-[#31A8FF] flex flex-col items-center justify-center text-[#31A8FF] font-black text-base font-display shadow-lg shadow-[#31A8FF]/20">
                        Ps
                      </div>
                    </div>
                    {/* Stylus & Pen Tool */}
                    <div className="text-center space-y-2">
                      <div className="text-sm font-bold text-white font-display uppercase tracking-wider">
                        Visual Design & Art Direction
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        Vector Illustration · Branding · Posters
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="text-right text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Graphic Designer Portfolio · 2024
              </div>
            </div>
          )}

          {/* SLIDE 2: ABOUT ME */}
          {currentSlide === 2 && (
            <div className="w-full h-full p-8 md:p-14 flex flex-col justify-between bg-[#0E1017] relative">
              <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center gap-10">
                {/* Left Column: Sketchbook Portrait Card */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full max-w-xs rounded-2xl overflow-hidden bg-white p-2.5 shadow-2xl border border-white/20">
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-100">
                      <img
                        src="/designer_sketch_portrait.jpg"
                        alt={designerProfile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-2 text-center text-xs font-mono font-bold text-zinc-900">
                      {designerProfile.name} · Pencil Sketch
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio */}
                <div className="md:col-span-7 space-y-5">
                  <h2 className="text-4xl sm:text-5xl font-black text-[#F5A623] font-display uppercase">
                    About Me
                  </h2>
                  <div className="text-xl sm:text-2xl font-bold text-white font-display">
                    {designerProfile.name} · {designerProfile.title}
                  </div>
                  <div className="space-y-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    <p className="text-white font-medium">
                      {designerProfile.bioIntro}
                    </p>
                    <p>
                      {designerProfile.bioExtended}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span>New Delhi, India</span>
                    <span>·</span>
                    <span>3+ Years Experience</span>
                    <span>·</span>
                    <span className="text-[#F5A623]">Branding & Collaterals</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: SOFTWARE SKILLS */}
          {currentSlide === 3 && (
            <div className="w-full h-full p-8 md:p-14 flex flex-col justify-between bg-[#0A0B0E] relative">
              <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center gap-10">
                {/* Left Column: Skills List */}
                <div className="md:col-span-6 space-y-8">
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-black text-[#F5A623] font-display uppercase leading-tight">
                      Software
                    </h2>
                    <div className="text-4xl sm:text-5xl font-black text-white font-display uppercase">
                      Skills
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-[#FF9A00]/20 border border-[#FF9A00] flex items-center justify-center text-[#FF9A00] font-black text-sm font-display">
                        Ai
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-white font-display">Adobe Illustrator</div>
                        <div className="text-xs text-zinc-400">Vector artwork, pen precision, branding & layouts</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-[#31A8FF]/20 border border-[#31A8FF] flex items-center justify-center text-[#31A8FF] font-black text-sm font-display">
                        Ps
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-white font-display">Adobe Photoshop</div>
                        <div className="text-xs text-zinc-400">Photo manipulation, lighting, color grading & ads</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-[#F24E1E]/20 border border-[#F24E1E] flex items-center justify-center text-[#F24E1E] font-black text-sm font-display">
                        Fg
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-white font-display">Figma</div>
                        <div className="text-xs text-zinc-400">Modern layout grids, prototypes & digital decks</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Creative Workstation Visual */}
                <div className="md:col-span-6 flex items-center justify-center">
                  <div className="w-full max-w-md bg-[#13151F] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center text-2xl font-black font-display">
                      ✦
                    </div>
                    <div className="text-lg font-bold text-white font-display">
                      Creative Studio Workstation
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
                      Combining vector mathematical rigor with atmospheric lighting to deliver print-ready and digital campaign assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: SOCIAL MEDIA POSTER (Page 4 from PDF) */}
          {currentSlide === 4 && (
            <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between bg-[#0B0C10] relative">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#F5A623] font-display uppercase leading-none">
                    Social Media
                  </h2>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
                    Poster
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#261300] border border-[#FF9A00]/40 px-3 py-1 rounded-xl">
                  <span className="w-6 h-6 rounded bg-[#FF9A00] text-black font-black text-xs flex items-center justify-center font-display">
                    Ai
                  </span>
                  <span className="text-xs font-semibold text-[#FFB347]">
                    Adobe illustrator
                  </span>
                </div>
              </div>

              {/* 3 Posters Row (5.8k, 8.4k, 4.9k likes) */}
              <div className="grid grid-cols-3 gap-6 my-auto py-2">
                {/* Poster 1: BPSC TRE 4.0 */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] aspect-[4/5] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/kgs_bpsc_tre.jpg"
                      alt="BPSC TRE 4.0 Batch Launch"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-300 flex items-center gap-1 font-bold">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>5.8k likes</span>
                  </div>
                </div>

                {/* Poster 2: Jagrata SSC CGL */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] aspect-[4/5] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/kgs_jagrata_ssc.jpg"
                      alt="जगराता SSC CGL Marathon"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-300 flex items-center gap-1 font-bold">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>8.4k likes</span>
                  </div>
                </div>

                {/* Poster 3: SBI Clerk */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] aspect-[4/5] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/kgs_sbi_clerk.jpg"
                      alt="SBI Clerk Prelims Admit Card"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-300 flex items-center gap-1 font-bold">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>4.9k likes</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                {designerProfile.name} · Khan Global Studies Campaigns
              </div>
            </div>
          )}

          {/* SLIDE 5: SOCIAL MEDIA POSTER (Page 5 from PDF with 6.3k, 3.7k, 5.8k likes) */}
          {currentSlide === 5 && (
            <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between bg-[#0B0C10] relative">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#F5A623] font-display uppercase leading-none">
                    Social Media
                  </h2>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
                    Poster
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#261300] border border-[#FF9A00]/40 px-3 py-1 rounded-xl">
                  <span className="w-6 h-6 rounded bg-[#FF9A00] text-black font-black text-xs flex items-center justify-center font-display">
                    Ai
                  </span>
                  <span className="text-xs font-semibold text-[#FFB347]">
                    Adobe illustrator & Photoshop
                  </span>
                </div>
              </div>

              {/* 3 Posters Row (6.3k, 3.7k, 5.8k likes) */}
              <div className="grid grid-cols-3 gap-6 my-auto py-2">
                {/* Poster 1: IAS Report */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] aspect-[4/5] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/kgs_ias_asuse.jpg"
                      alt="KGS IAS ASUSE Report"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-300 flex items-center gap-1 font-bold">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span className="text-white">6.3k likes</span>
                  </div>
                </div>

                {/* Poster 2: Judiciary Maxim */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] aspect-[4/5] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/kgs_judiciary_maxim.jpg"
                      alt="KGS Judiciary Maxim of the Day"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-300 flex items-center gap-1 font-bold">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span className="text-white">3.7k likes</span>
                  </div>
                </div>

                {/* Poster 3: Westhill Fitout */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] aspect-[4/5] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
                    <PosterWesthillFitout />
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-300 flex items-center gap-1 font-bold">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span className="text-white">1.8k likes</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                Audience Reach & High Engagement Ad Creatives
              </div>
            </div>
          )}

          {/* SLIDE 6: THANK YOU (Page 6 from PDF) */}
          {currentSlide === 6 && (
            <div className="w-full h-full p-8 md:p-14 flex flex-col justify-between bg-topo-pattern relative">
              {/* Center thank you message */}
              <div className="text-center max-w-2xl mx-auto my-auto space-y-6">
                <div className="inline-block relative">
                  <h2 className="text-6xl sm:text-7xl font-black text-[#F5A623] font-display uppercase tracking-tight">
                    Thankyou
                  </h2>
                  <div className="h-2 w-full bg-[#F5A623] mt-2 rounded-full" />
                </div>

                <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <p className="text-xl sm:text-2xl font-bold text-white font-display">
                    Thank you for visiting my portfolio!
                  </p>
                  <p className="text-balance">
                    Your interest in my work means a lot to me. Whether you’re here to explore my designs, I appreciate your time and attention.
                  </p>
                </div>
              </div>

              {/* Bottom contact bar from Slide 6 */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F5A623]" />
                  <span className="font-bold text-white">{designerProfile.phoneDisplay}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F5A623]" />
                  <span className="font-bold text-white">{designerProfile.email}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Deck Navigation Controller */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#0B0C10]/90">
        <button
          onClick={prevSlide}
          className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        {/* Slide Indicators / Thumbnails */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentSlide(num)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === num
                  ? 'w-8 bg-[#F5A623]'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              title={`Go to slide ${num}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="px-4 py-2 rounded-lg bg-[#F5A623] hover:bg-[#FFB834] text-black font-extrabold text-xs flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
