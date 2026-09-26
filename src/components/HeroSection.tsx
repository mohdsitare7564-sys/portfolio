import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowDown, Presentation, Send, Sparkles, Train, Compass, Check } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenDeck?: () => void;
  onExploreWork: () => void;
  onHireMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onHireMe,
}) => {
  const [isPlayingHorn, setIsPlayingHorn] = useState(false);
  const [hornNotice, setHornNotice] = useState<string | null>(null);

  // Synthesize authentic Indian Railways two-tone diesel train horn via Web Audio API
  const playTrainHorn = () => {
    try {
      setIsPlayingHorn(true);
      setHornNotice('🚆 पो-पो... Portfoliopur Express Arriving at Platform 1!');
      setTimeout(() => setHornNotice(null), 3000);

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) {
        setIsPlayingHorn(false);
        return;
      }
      const audioCtx = new AudioContextClass();
      const now = audioCtx.currentTime;

      // Authentic Indian Railways WAP-7 / WDM-3D dual-tone horn chords (~311Hz, 370Hz, 466Hz)
      const tones = [
        { freq: 311.13, gain: 0.12 },
        { freq: 369.99, gain: 0.14 },
        { freq: 466.16, gain: 0.09 },
      ];

      tones.forEach(({ freq, gain: targetGain }) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);

        // Low-pass filter for realistic brass acoustic body
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);

        // Envelope: quick attack, sustained blast, gradual release
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(targetGain, now + 0.08);
        gain.gain.setValueAtTime(targetGain, now + 0.7);
        gain.gain.linearRampToValueAtTime(0, now + 1.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 1.15);
      });

      setTimeout(() => setIsPlayingHorn(false), 1200);
    } catch (e) {
      console.warn('Audio horn playback not allowed without user interaction:', e);
      setIsPlayingHorn(false);
    }
  };

  const scrollToWhatsInside = () => {
    const el = document.getElementById('whats-inside');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const aboutEl = document.getElementById('about');
      if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-center items-center overflow-hidden border-b border-[#D8D0C0] bg-[#F4EFEB]">
      {/* Background: Authentic Vintage Architectural Sketch of Indian Railway Platform */}
      <div className="absolute inset-0 z-0">
        <img
          src="/portfoliopur_station_bg.jpg"
          alt="Vintage Indian Railway station platform architectural pencil sketch illustration with Victorian arches and Northern Railway train"
          className="w-full h-full object-cover object-center opacity-85 select-none"
        />
        {/* Soft paper texture & parchment tint gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFEB]/30 via-transparent to-[#F4EFEB] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#F4EFEB]/20 to-[#EFE7DC]/60 pointer-events-none" />
      </div>

      {/* Hanging side station board (Top Left on Platform Truss) */}
      <div className="hidden lg:block absolute top-28 left-8 xl:left-14 z-20 transform -rotate-1 hover:rotate-0 transition-transform">
        <div className="bg-[#FAF7F0] border-2 border-black rounded-md p-3 shadow-md text-center min-w-[130px] relative">
          {/* Hanging chain links */}
          <div className="absolute -top-6 left-4 w-[2px] h-6 bg-black" />
          <div className="absolute -top-6 right-4 w-[2px] h-6 bg-black" />

          <div className="text-[13px] font-bold font-hindi text-black leading-tight">
            पोर्टफोलियोपुर
          </div>
          <div className="text-[12px] font-black font-railway tracking-wider text-black uppercase leading-tight">
            PORTFOLIOPUR
          </div>
          <div className="text-[11px] font-serif text-black leading-tight pt-0.5">
            پورٹفولیور
          </div>
          <div className="mt-1.5 pt-1 border-t border-black/30 flex items-center justify-between text-[9px] font-mono text-zinc-700">
            <span>उ.रे.</span>
            <span>PL. 1</span>
          </div>
        </div>
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
        {/* Top Railway Control Bar (Sound & Name Toggle) */}
        <div className="flex items-center gap-3 mb-6 flex-wrap justify-center">
          {/* Train Horn Sound Button */}
          <button
            onClick={playTrainHorn}
            disabled={isPlayingHorn}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all shadow-sm ${
              isPlayingHorn
                ? 'bg-[#E53935] text-white border-[#B71C1C] animate-pulse'
                : 'bg-white/90 hover:bg-white text-zinc-800 border-[#D5CDBD] hover:border-black'
            }`}
            title="Click to blow authentic Indian Railway diesel locomotive horn"
          >
            {isPlayingHorn ? <Volume2 className="w-3.5 h-3.5 animate-spin" /> : <Volume2 className="w-3.5 h-3.5 text-[#E53935]" />}
            <span>{isPlayingHorn ? 'HORN BLOWING...' : 'PLAY STATION HORN 🔊'}</span>
          </button>

          {/* Northern Railway Station Identification Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D5CDBD] text-xs font-mono font-bold text-zinc-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E53935]" />
            <span>NORTHERN RAILWAY · उ.रे. · PLATFORM 1</span>
          </div>
        </div>

        {/* Horn Audio Feedback Notification */}
        {hornNotice && (
          <div className="mb-4 px-4 py-1.5 rounded-full bg-[#E53935] text-white text-xs font-bold font-mono tracking-wide shadow-lg animate-bounce flex items-center gap-2">
            <Train className="w-3.5 h-3.5" />
            <span>{hornNotice}</span>
          </div>
        )}

        {/* THE ICONIC INDIAN RAILWAYS YELLOW STATION BOARD (Centered Masterpiece) */}
        <div className="relative w-full max-w-3xl my-2">
          {/* Two Vertical Support Pillars on left and right */}
          <div className="relative flex justify-between items-stretch">
            {/* Left Pillar */}
            <div className="w-5 sm:w-7 md:w-8 flex flex-col items-center shrink-0">
              {/* Pointed Spearhead / Arched Top Finial */}
              <div className="w-0 h-0 border-l-[10px] sm:border-l-[14px] md:border-l-[16px] border-l-transparent border-r-[10px] sm:border-r-[14px] md:border-r-[16px] border-r-transparent border-b-[20px] sm:border-b-[26px] border-b-[#FFD200] drop-shadow-sm" />
              {/* Pillar Body (Yellow Steel Girder with Industrial Rivets) */}
              <div className="w-full flex-1 bg-[#FFD200] border-2 border-black flex flex-col justify-between py-4 items-center shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                {/* Base Caution Black & Yellow Diagonal Stripes */}
                <div className="w-full h-12 bg-[repeating-linear-gradient(45deg,#000_0,#000_6px,#FFD200_6px,#FFD200_12px)] border-t-2 border-black" />
              </div>
            </div>

            {/* Central Yellow Station Signboard Panel */}
            <div className="flex-1 mx-2 sm:mx-3 my-auto">
              <div className="relative bg-[#FFD200] border-[3px] sm:border-[4px] border-black rounded-lg sm:rounded-xl p-5 sm:p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.25)] text-center overflow-hidden">
                {/* Board Bolt Screws in 4 Corners */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full border border-black/80 bg-black/40" />
                <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border border-black/80 bg-black/40" />
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full border border-black/80 bg-black/40" />
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full border border-black/80 bg-black/40" />

                {/* Top Corner Railway Code Stencils */}
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-extrabold text-black/70 mb-1 px-1">
                  <span>उ.रे. / NR</span>
                  <span className="tracking-widest uppercase">TERMINUS OF CREATIVE DESIGN</span>
                  <span>MSL: +1080M</span>
                </div>

                {/* Primary Station Title: "PORTFOLIOPUR" */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-railway tracking-tight text-black uppercase leading-none select-text drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  PORTFOLIOPUR
                </h1>

                {/* Hindi Devanagari Title: "पोर्टफोलियोपुर" */}
                <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-hindi text-black tracking-normal mt-1 sm:mt-2 leading-tight">
                  पोर्टफोलियोपुर
                </div>

                {/* Urdu Station Subtitle */}
                <div className="text-sm sm:text-base font-serif text-black/80 leading-none mt-1">
                  پورٹفولیور
                </div>

                {/* Crisp Black Dividing Rail Line */}
                <div className="relative my-3 sm:my-4">
                  <div className="h-[2px] sm:h-[3px] bg-black w-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black transform rotate-45" />
                </div>

                {/* Bottom Spec Sub-strip: GRAPHIC DESIGN | NAME | YEAR */}
                <div className="flex items-center justify-between font-mono font-bold text-xs sm:text-base md:text-lg text-black px-1 sm:px-2">
                  <span className="uppercase tracking-wider">GRAPHIC DESIGN</span>
                  <span className="hidden sm:inline-block text-xs uppercase px-2.5 py-0.5 bg-black text-[#FFD200] rounded font-bold tracking-wider">
                    MD AQUIB ANZAR
                  </span>
                  <span className="tracking-wider">2026</span>
                </div>
              </div>
            </div>

            {/* Right Pillar */}
            <div className="w-5 sm:w-7 md:w-8 flex flex-col items-center shrink-0">
              {/* Pointed Spearhead / Arched Top Finial */}
              <div className="w-0 h-0 border-l-[10px] sm:border-l-[14px] md:border-l-[16px] border-l-transparent border-r-[10px] sm:border-r-[14px] md:border-r-[16px] border-r-transparent border-b-[20px] sm:border-b-[26px] border-b-[#FFD200] drop-shadow-sm" />
              {/* Pillar Body */}
              <div className="w-full flex-1 bg-[#FFD200] border-2 border-black flex flex-col justify-between py-4 items-center shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                {/* Base Caution Black & Yellow Stripes */}
                <div className="w-full h-12 bg-[repeating-linear-gradient(45deg,#000_0,#000_6px,#FFD200_6px,#FFD200_12px)] border-t-2 border-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline / Subtitle below the board */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#2A2B30] font-medium text-center max-w-2xl font-sans">
          Welcome to <span className="font-bold text-black">Portfoliopur Junction</span> — The curated creative junction of brand identities, high-conversion marketing posters, vector artwork, and digital advertising.
        </p>

        {/* Interactive Railway Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Scroll to What's Inside & Route Map */}
          <button
            onClick={scrollToWhatsInside}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#821919] hover:bg-[#6c1414] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4 text-[#FED500]" />
            <span>WHAT'S INSIDE अंदर क्या है ?</span>
            <ArrowDown className="w-4 h-4 text-white/80" />
          </button>

          {/* Explore Works on Platform 1 */}
          <button
            onClick={onExploreWork}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Train className="w-4 h-4 text-[#FED500]" />
            <span>Platform 1: Selected Works</span>
          </button>


          {/* Direct Ticket Booking / Contact */}
          <button
            onClick={onHireMe}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFD200] hover:bg-[#ffc800] border-2 border-black text-black font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Ticket Counter: Hire Me</span>
          </button>
        </div>

        {/* Railway Platform Status Strip */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-mono text-zinc-700 bg-white/70 backdrop-blur-xs px-4 py-2 rounded-full border border-[#D5CDBD] shadow-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-600 -ml-3.5" />
            <span className="font-semibold text-black">Express Status: On Time</span>
          </div>
          <span className="text-zinc-400">|</span>
          <div>New Delhi · Remote Worldwide</div>
          <span className="text-zinc-400 hidden sm:inline">|</span>
          <div className="hidden sm:block text-black font-medium">180+ Creative Assets Delivered</div>
        </div>
      </div>
    </section>
  );
};
