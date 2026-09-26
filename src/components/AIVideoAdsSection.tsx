import React, { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, Check, Film, Sliders, Layers, Volume2, Eye, Share2, Heart, Train, Monitor, Lightbulb, ZoomIn, X, Clock, Award } from 'lucide-react';

interface ProductionStepModalData {
  step: number;
  title: string;
  hindiTitle: string;
  subtitle: string;
  description: string;
  image?: string;
  specs: string[];
}

export const AIVideoAdsSection: React.FC = () => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [videoProgress, setVideoProgress] = useState(25);
  const [likesCount, setLikesCount] = useState(3890);
  const [isLiked, setIsLiked] = useState(false);
  const [activeModal, setActiveModal] = useState<ProductionStepModalData | null>(null);
  const [shareToast, setShareToast] = useState(false);

  // Simulated video playback progress when playing
  useEffect(() => {
    let interval: any;
    if (isPlayingPreview) {
      interval = setInterval(() => {
        setVideoProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlayingPreview]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}#ai-videos`);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  const productionSteps: Record<number, ProductionStepModalData> = {
    1: {
      step: 1,
      title: 'Ideation & Creative Rationale',
      hindiTitle: 'विचार एवं पटकथा आधार',
      subtitle: 'The Core Blind Taste-Test Hook',
      description: "The creative objective was to demonstrate how children intuitively choose healthy snacks over junk food when taste isn't compromised. By blindfolding the child, we eliminate brand bias and visual conditioning, putting the entire focus on Slurrp Farm's superior taste and millet crunchiness.",
      specs: ['Target Audience: Health-conscious parents & school kids', 'Core Insight: Kids hate punishment food, love real treats', 'Format: 9:16 Fast-Paced Social Ad Hook'],
    },
    2: {
      step: 2,
      title: 'Storyboarding & Sequential Framing',
      hindiTitle: 'स्टोरीबोर्ड एवं दृश्य योजना',
      subtitle: '8-Frame Hand-Drawn Conceptual Visual Script',
      image: '/slurrp_farm_storyboard.jpg',
      description: 'Hand-sketched 8-panel storyboard detailing every camera angle: the initial blindfolded tension, reaching hands, hesitation, tasting bite, facial micro-expressions of joy, rejecting the junk chips plate, and the triumphant blindfold removal packshot.',
      specs: ['Medium: Ink & Watercolor on Sketchbook', 'Pacing: 15-second high-energy narrative', 'Call to Action: Discover Real Millet Goodness'],
    },
    3: {
      step: 3,
      title: 'Generative AI Multi-Frame Consistency',
      hindiTitle: 'जेनरेटिव एआई वीडियो फ्रेम्स',
      subtitle: 'Photorealistic Character & Lighting Continuity',
      image: '/slurrp_farm_ai_generations.jpg',
      description: 'Using advanced multi-prompt image-to-video AI pipelines (Midjourney v6.1 + Runway Gen-3 Alpha), maintaining exact facial consistency, wooden dining table textures, chocolate cookie crumb details, and natural daylight illumination across all key frames.',
      specs: ['Model: Runway Gen-3 Alpha & Kling AI', 'Resolution: 4K Master Export', 'Character Consistency: Seed-locked custom LoRA model'],
    },
    4: {
      step: 4,
      title: 'NLE Post-Production & Sound Design',
      hindiTitle: 'संपादन एवं ऑडियो डिजाइन',
      subtitle: 'Multi-Track Timeline Sequencing in Adobe Premiere Pro',
      image: '/slurrp_farm_editing_timeline.jpg',
      description: 'Precision video cutting in Adobe Premiere Pro: layer-by-layer dynamic crunch sound effects (SFX), joyful acoustic background rhythm, color-graded skin tones, kinetic text subtitles, and vertical 1080x1920 mobile viewport optimization.',
      specs: ['Software: Adobe Premiere Pro & After Effects', 'Audio: Multi-layer crunchy cookie Foley & acoustic score', 'Export: 9:16 Vertical Reel, ProRes & H.265'],
    },
    5: {
      step: 5,
      title: 'Final Commercial Reel Performance',
      hindiTitle: 'अंतिम व्यावसायिक विज्ञापन',
      subtitle: 'High-Conversion Social Media Ad Campaign',
      image: '/slurrp_farm_hero.jpg',
      description: 'The completed 15-second commercial ad ready for deployment across Instagram Reels, YouTube Shorts, and Meta conversion campaigns, delivering a +42% CTR uplift and 70% faster creative turnaround time.',
      specs: ['Ad Format: Meta & Google Ads 9:16', 'Engagement Rate: 8.4% Average', 'Turnaround Time: 48 Hours Script-to-Screen'],
    },
  };

  return (
    <section id="ai-videos" className="py-20 bg-[#F4EFEB] text-[#1A1A1E] border-b border-[#D8D0C0] relative overflow-hidden">
      {/* Background authentic newsprint paper texture matching reference layout */}
      <div className="absolute inset-0 bg-railway-parchment opacity-85 pointer-events-none" />

      {/* Share Toast */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#821919] text-white px-5 py-2.5 rounded-xl shadow-2xl font-mono text-xs flex items-center gap-2 border border-[#FFD200]">
          <Check className="w-4 h-4 text-[#FFD200]" />
          <span>Chalchitra Garh Station Link Copied!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HEADER: EXACT MATCH WITH USER'S REFERENCE IMAGE */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b-2 border-dashed border-[#D5CDBD] relative">
          {/* Left Column: Station 05 Tag, Red Title & Folded Namaste Hands Greeting */}
          <div className="flex flex-col items-start space-y-3">
            {/* Hanging Station Tag [ 05 ] */}
            <div className="relative mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-[1.5px] h-4 bg-black/60 -mt-4" />
                <div className="w-[1.5px] h-4 bg-black/60 -mt-4 ml-6" />
              </div>
              <div className="px-3.5 py-1 bg-white border-2 border-black rounded-sm shadow-xs inline-flex items-center justify-center font-mono font-black text-sm tracking-wider text-black">
                05
              </div>
            </div>

            {/* Crimson Bold Headline: AI VIDEO ADS / एआइ वीडियो */}
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
                AI VIDEO ADS
              </h2>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-hindi text-[#821919] mt-1 leading-tight">
                एआइ वीडियो
              </div>
            </div>

            {/* Folded Hands Namaste Illustration & Welcome Greeting */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-white border border-black/30 flex items-center justify-center shadow-xs shrink-0">
                <svg className="w-6 h-6 text-[#821919]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2 C 10 5, 8 9, 8 13 C 8 17, 10 20, 12 22 C 14 20, 16 17, 16 13 C 16 9, 14 5, 12 2 Z" strokeLinecap="round" />
                  <path d="M12 6 L 12 18" strokeLinecap="round" strokeDasharray="1 2" />
                  <path d="M6 14 C 7 11, 9 8, 12 7" strokeLinecap="round" />
                  <path d="M18 14 C 17 11, 15 8, 12 7" strokeLinecap="round" />
                  <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <div className="text-xs sm:text-sm font-hindi font-bold text-[#821919]">
                चलचित्र गढ़ में आपका स्वागत है !
              </div>
            </div>
          </div>

          {/* Right Column: 3D Yellow Station Arch Board "CHALCHITRA GARH" */}
          <div className="flex flex-col items-center lg:items-end shrink-0 self-center lg:self-auto">
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-600 uppercase mb-2">
              WELCOME IN CHALCHITRA GARH
            </div>

            {/* 3D Isometric Yellow Station Arch in Ultra High Resolution */}
            <div className="relative w-48 sm:w-56 md:w-64 rounded-xl overflow-hidden shadow-sm border border-black/10 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/chalchitra_garh_arch.jpg"
                alt="3D Indian Railways yellow station arch signboard for Chalchitra Garh with black caution stripes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* HERO FEATURE CASE STUDY: SLURRP FARM AI VIDEO */}
        <div className="mt-12">
          {/* Main 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brand Name & Project Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs italic font-serif text-[#821919] lowercase tracking-wide">
                AI Videos
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-railway text-[#821919] uppercase tracking-wide leading-tight">
                  SLURRP FARM <span className="font-hindi text-xl sm:text-3xl font-extrabold text-[#821919]">| स्लर्पफार्म</span>
                  <br />
                  AI VIDEO
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-sans font-medium text-balance">
                Slurrp Farm is a healthy food brand offering nutritious snacks and meals made with millets, oats, and natural ingredients for kids and families. Basically, an attempt to make healthy eating feel less like punishment and more like actual food.
              </p>

              {/* Quick Specs Pill Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-white border border-black/20 rounded-md font-bold text-black shadow-2xs">
                  Format: 9:16 Vertical Reel
                </span>
                <span className="px-3 py-1 bg-white border border-black/20 rounded-md font-bold text-black shadow-2xs">
                  Tools: Midjourney · Runway Gen-3 · Premiere Pro
                </span>
                <span className="px-3 py-1 bg-[#821919]/10 text-[#821919] border border-[#821919]/30 rounded-md font-bold">
                  Conversion Ad Campaign
                </span>
              </div>

              {/* Direct Interactions */}
              <div className="pt-3 flex items-center gap-3">
                <button
                  onClick={toggleLike}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold text-xs border transition-colors shadow-2xs ${isLiked
                      ? 'bg-[#E53935] text-white border-[#B71C1C]'
                      : 'bg-white text-black border-black/30 hover:border-black'
                    }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
                  <span>{likesCount.toLocaleString()} Applauds</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-black/30 hover:border-black text-xs font-mono font-semibold transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Video Frame (Ultra High Resolution Photo) */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                onClick={() => setActiveModal(productionSteps[5])}
                className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.12)] border-2 border-black bg-white p-2 cursor-pointer group"
              >
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#FAF7F0]">
                  <img
                    src="/slurrp_farm_hero.jpg"
                    alt="Young Indian boy sitting at dining table wearing black blindfold tasting Slurrp Farm healthy millet cookies against junk food chips"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Play Overlay Badge */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#FFD200] text-black flex items-center justify-center shadow-xl border-2 border-black transform group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-black ml-1" />
                    </div>
                    <span className="px-3 py-1 bg-black/80 text-white rounded-full font-mono text-xs font-bold border border-white/20">
                      Click to Inspect Commercial
                    </span>
                  </div>

                  {/* Video Watermark Stencil Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-xs p-2.5 rounded-lg border border-[#FFD200] text-white flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#FFD200]">BLIND TASTE TEST</span>
                    <span>9:16 COMMERCIAL AD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-STEP PRODUCTION PIPELINE: EXACT MATCH WITH REFERENCE IMAGE */}
        <div className="mt-20 pt-10 border-t-2 border-dashed border-[#D5CDBD]">
          {/* Section Subtitle */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#821919] font-bold block mb-1">
              PRODUCTION ARCHITECTURE · 5-PHASE PIPELINE
            </span>
            <h4 className="text-2xl sm:text-3xl font-black font-railway text-[#821919] uppercase tracking-wide">
              FROM SCRIPT TO SCREEN · निर्माण प्रक्रिया
            </h4>
          </div>

          {/* Grid Layout matching reference image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* LEFT COLUMN: Step 1 (Ideation) & Step 2 (Storyboarding) */}
            <div className="lg:col-span-6 space-y-8">
              {/* STEP 1: IDEATION */}
              <div
                onClick={() => setActiveModal(productionSteps[1])}
                className="bg-white rounded-xl border border-black/20 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#821919] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-xs">
                      1
                    </div>
                    <h5 className="text-lg font-black font-railway text-[#821919] uppercase tracking-wide group-hover:underline">
                      Ideation
                    </h5>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 group-hover:text-black">
                    Click to expand
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans font-medium">
                  <p>
                    The idea of the video is to show children choose the right without even seeing what because the product's taste is so good and the child is giving up the junk food for the slurrp farm cookies.
                  </p>
                  <p>
                    I want to show the usp of the product which is it's taste which kids enjoys guilt free.
                  </p>
                  <p>
                    So, for that i had the idea to show a kid blindfolded and choosing between 2 options.
                  </p>
                </div>
              </div>

              {/* STEP 2: STORYBOARDING (Ultra High Resolution 8-Panel Sketch) */}
              <div
                onClick={() => setActiveModal(productionSteps[2])}
                className="bg-white rounded-xl border border-black/20 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#821919] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-xs">
                      2
                    </div>
                    <h5 className="text-lg font-black font-railway text-[#821919] uppercase tracking-wide group-hover:underline">
                      Storyboarding
                    </h5>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#821919] font-bold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>HD 8-Panel View</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 mb-3 font-sans">
                  Hand-sketched 8-frame sequential visual script establishing camera angles, blindfold reveal, and cookie packaging hero shot.
                </p>

                <div className="relative rounded-lg overflow-hidden border border-black/20 shadow-xs bg-[#FAF7F0] group-hover:border-black transition-colors">
                  <img
                    src="/slurrp_farm_storyboard.jpg"
                    alt="8-panel hand-drawn storyboard illustration of child blindfolded choosing healthy cookies"
                    className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs font-bold gap-1.5">
                    <Eye className="w-4 h-4 text-[#FFD200]" />
                    <span>Click to Zoom 8 Storyboard Panels</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Step 3 (AI Generations) & Step 4 (Editing) */}
            <div className="lg:col-span-6 space-y-8">
              {/* STEP 3: AI GENERATIONS (Ultra High Resolution 4-Frame Film Strip) */}
              <div
                onClick={() => setActiveModal(productionSteps[3])}
                className="bg-white rounded-xl border border-black/20 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#821919] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-xs">
                      3
                    </div>
                    <h5 className="text-lg font-black font-railway text-[#821919] uppercase tracking-wide group-hover:underline">
                      AI Generations
                    </h5>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#821919] font-bold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>4K Contact Sheet</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 mb-3 font-sans">
                  Photorealistic generative consistency across 4 sequential action states: blindfold sit, cookie tasting, smile reaction, and triumphantly removing blindfold.
                </p>

                <div className="relative rounded-lg overflow-hidden border border-black/20 shadow-xs bg-[#FAF7F0] group-hover:border-black transition-colors">
                  <img
                    src="/slurrp_farm_ai_generations.jpg"
                    alt="4 vertical generative AI video frames of boy tasting cookie and opening blindfold"
                    className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs font-bold gap-1.5">
                    <Eye className="w-4 h-4 text-[#FFD200]" />
                    <span>Click to Zoom AI Generation Frames</span>
                  </div>
                </div>
              </div>

              {/* STEP 4: EDITING (Ultra High Resolution Premiere Pro Workspace) */}
              <div
                onClick={() => setActiveModal(productionSteps[4])}
                className="bg-white rounded-xl border border-black/20 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#821919] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-xs">
                      4
                    </div>
                    <h5 className="text-lg font-black font-railway text-[#821919] uppercase tracking-wide group-hover:underline">
                      Editing
                    </h5>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#821919] font-bold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Timeline Monitor</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 mb-3 font-sans">
                  Post-production timeline in Adobe Premiere Pro: multi-layer audio design, crunchy sound Foley, speed ramping, color grade, and 9:16 social reel formatting.
                </p>

                <div className="relative rounded-lg overflow-hidden border border-black/20 shadow-xs bg-[#FAF7F0] group-hover:border-black transition-colors">
                  <img
                    src="/slurrp_farm_editing_timeline.jpg"
                    alt="Video editing timeline interface with vertical video monitor and multi-track audio sequencing"
                    className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs font-bold gap-1.5">
                    <Eye className="w-4 h-4 text-[#FFD200]" />
                    <span>Click to Inspect Premiere Pro Timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5: FINAL COMMERCIAL AD SHOWCASE WITH INTERACTIVE PLAYER */}
          <div className="mt-10 bg-white rounded-2xl border-2 border-black p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ECE5D8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#821919] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-xs">
                  5
                </div>
                <div>
                  <h5 className="text-xl sm:text-2xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
                    Final Commercial Ad Output
                  </h5>
                  <span className="text-xs font-mono text-zinc-500">
                    High-CTR Performance Reel for Meta & YouTube Ads
                  </span>
                </div>
              </div>

              {/* Interactive Play/Pause Button */}
              <button
                onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xs shadow-sm transition-all ${isPlayingPreview
                    ? 'bg-[#E53935] text-white animate-pulse'
                    : 'bg-black text-white hover:bg-zinc-800'
                  }`}
              >
                {isPlayingPreview ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span>Pause Reel Preview</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-[#FFD200] text-[#FFD200]" />
                    <span>Simulate Ad Playback ▶</span>
                  </>
                )}
              </button>
            </div>

            {/* Playback Progress Simulation Bar */}
            {isPlayingPreview && (
              <div className="mt-4 p-3 bg-[#FAF7F0] rounded-xl border border-black/20">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="font-bold text-[#821919] flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-[#821919] animate-bounce" />
                    <span>Playing: "The Crunch of Truth" · 15s Commercial</span>
                  </span>
                  <span className="text-zinc-600">{videoProgress}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#821919] transition-all duration-200"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Key Metrics Three-Column Spec Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-black/15 shadow-2xs">
                <span className="text-zinc-500 block uppercase text-[10px] font-bold">Campaign Strategy</span>
                <strong className="text-black text-sm block mt-1">Differentiate from junk processed biscuits</strong>
                <p className="text-zinc-600 text-[11px] mt-1 font-sans">
                  Instantly establishes Slurrp Farm as the tasty guilt-free alternative.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-black/15 shadow-2xs">
                <span className="text-zinc-500 block uppercase text-[10px] font-bold">Psychological Visual Hook</span>
                <strong className="text-black text-sm block mt-1">Blindfolded taste-test curiosity gap</strong>
                <p className="text-zinc-600 text-[11px] mt-1 font-sans">
                  Hooks mobile viewer in the first 1.5 seconds before scrolling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-black/15 shadow-2xs">
                <span className="text-zinc-500 block uppercase text-[10px] font-bold">Production Efficiency</span>
                <strong className="text-black text-sm block mt-1">70% faster creative turnaround</strong>
                <p className="text-zinc-600 text-[11px] mt-1 font-sans">
                  Generative AI workflows cut studio shooting overhead from weeks to 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM VINTAGE STAMP CITATION */}
        <div className="mt-14 pt-8 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-3">
          <div className="flex items-center gap-2">
            <Train className="w-4 h-4 text-[#821919]" />
            <span>STATION 05 DOSSIER · AI COMMERCIAL VIDEO ADS BY MD AQUIB ANZAR</span>
          </div>
          <div className="text-zinc-500">
            CHALCHITRA GARH JUNCTION · GEN-AI + PREMIERE PRO PIPELINE
          </div>
        </div>
      </div>

      {/* FULLSCREEN PRODUCTION STEP LIGHTBOX MODAL */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#F8F5EE] border-2 border-black rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-black/20 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#821919] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-xs">
                  {activeModal.step}
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
                    {activeModal.title}
                  </h4>
                  <span className="text-xs font-mono text-zinc-500 block mt-0.5">
                    {activeModal.subtitle} · {activeModal.hindiTitle}
                  </span>
                </div>
              </div>

              <button
                className="w-9 h-9 rounded-full bg-black text-white hover:bg-[#821919] flex items-center justify-center transition-colors shadow-md"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* If step has an image, show in full glory */}
              {activeModal.image && (
                <div className="relative rounded-xl overflow-hidden border-2 border-black/30 shadow-md bg-white p-2">
                  <img
                    src={activeModal.image}
                    alt={activeModal.title}
                    className="w-full h-auto object-contain max-h-[55vh] mx-auto rounded-lg"
                  />
                </div>
              )}

              {/* Rationale & Description */}
              <div className="bg-white p-5 rounded-xl border border-black/15 shadow-2xs space-y-3">
                <span className="text-xs font-mono font-bold text-[#821919] uppercase block">
                  Creative Breakdown & Technical Execution
                </span>
                <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-sans font-medium">
                  {activeModal.description}
                </p>
              </div>

              {/* Technical Specifications Chips */}
              <div>
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase block mb-2">
                  Key Production Highlights:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {activeModal.specs.map((item, idx) => (
                    <div key={idx} className="px-3 py-1.5 bg-[#FAF7F0] border border-black/20 rounded-lg text-zinc-900 font-semibold shadow-2xs flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#821919]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-black/15 bg-[#FAF7F0] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-600">
                Station 05 · Chalchitra Garh Archive
              </span>
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-lg bg-black hover:bg-zinc-800 text-white font-mono font-bold text-xs transition-colors shadow-sm"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
