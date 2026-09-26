import React, { useState } from 'react';
import { Package, Sparkles, Layers, Eye, Check, ExternalLink, ChevronRight, Palette, Type, Compass, Heart, Share2 } from 'lucide-react';

export const PackagingSection: React.FC = () => {
  const [activeFlavor, setActiveFlavor] = useState<'rajasthan' | 'mp' | 'gujarat'>('rajasthan');
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [likedCount, setLikedCount] = useState(1420);
  const [isLiked, setIsLiked] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const flavors = {
    rajasthan: {
      name: 'Rajasthani Bajra Sticks',
      hindi: 'राजस्थानी बाजरा स्टिक्स',
      color: '#E52E2D',
      colorName: 'Vermillion Red',
      state: 'Rajasthan',
      millet: 'Pearl Millet (Bajra)',
      spice: 'Desi Mathania Chilli & Hing',
      tasteProfile: 'Crispy, smoky, earthy, high dietary fiber',
    },
    mp: {
      name: 'MP Wheat Crisps',
      hindi: 'मध्य प्रदेश गेहूं क्रिस्प्स',
      color: '#1E5BB8',
      colorName: 'Cobalt Blue',
      state: 'Madhya Pradesh',
      millet: 'Sharbati Wheat & Jowar',
      spice: 'Malwa Jeeravan & Roasted Cumin',
      tasteProfile: 'Light, crunchy, tang-infused zesty kick',
    },
    gujarat: {
      name: 'Gujarat Khakhra Bites',
      hindi: 'गुजरात खाखरा बाइट्स',
      color: '#7DA137',
      colorName: 'Olive Herb Green',
      state: 'Gujarat',
      millet: 'Ragi & Fenugreek (Methi)',
      spice: 'Aromatic Kasuri Methi & White Sesame',
      tasteProfile: 'Flaky wafer-thin, savory, roasted goodness',
    },
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikedCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}#packaging`);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  return (
    <section id="packaging" className="py-20 bg-[#F4EFEB] text-[#1A1A1E] border-b border-[#D8D0C0] relative overflow-hidden">
      {/* Vintage Newsprint Paper Grit Background matching the reference layout */}
      <div className="absolute inset-0 bg-railway-parchment opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HEADER: EXACT MATCH WITH THE REFERENCE IMAGE */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b-2 border-dashed border-[#D5CDBD] relative">
          {/* Left Column: Station 03 Tag, Red Title & Folded Namaste Hands Greeting */}
          <div className="flex flex-col items-start space-y-3">
            {/* Hanging Station Tag [ 03 ] */}
            <div className="relative mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-[1.5px] h-4 bg-black/60 -mt-4" />
                <div className="w-[1.5px] h-4 bg-black/60 -mt-4 ml-6" />
              </div>
              <div className="px-3.5 py-1 bg-white border-2 border-black rounded-sm shadow-xs inline-flex items-center justify-center font-mono font-black text-sm tracking-wider text-black">
                03
              </div>
            </div>

            {/* Crimson Bold Headline: PACKAGING DESIGNS / पैकेजिंग डिज़ाइन */}
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
                PACKAGING DESIGNS
              </h2>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-hindi text-[#821919] mt-1 leading-tight">
                पैकेजिंग डिज़ाइन
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
                पैकेजिंग गढ़ में आपका स्वागत है!
              </div>
            </div>
          </div>

          {/* Right Column: 3D Yellow Station Arch Board "PACKAGING GARH" */}
          <div className="flex flex-col items-center lg:items-end shrink-0 self-center lg:self-auto">
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-600 uppercase mb-2">
              WELCOME IN PACKAGING GARH
            </div>

            {/* 3D Isometric Yellow Station Arch */}
            <div className="relative w-48 sm:w-56 md:w-64 rounded-xl overflow-hidden shadow-sm border border-black/10 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/packaging_garh_arch.jpg"
                alt="3D Indian Railways yellow station arch signboard for Packaging Garh with black caution stripes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* HERO FEATURE CASE STUDY: KAANCHI CO. PACKAGING DESIGN */}
        <div className="mt-12">
          {/* Main 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brand Name & Project Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs italic font-serif text-[#821919] lowercase tracking-wide">
                Packaging design
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-railway text-[#821919] uppercase tracking-wide leading-tight">
                  KAANCHI CO. <br className="hidden sm:inline" />
                  PACKAGING DESIGN <span className="font-hindi text-xl sm:text-3xl font-extrabold text-[#821919]">| पैकेजिंग डिज़ाइन</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-sans font-medium text-balance">
                Kaanchi Co. is a healthy millet snack brand that makes snacks with Indian millets. They make snacks with millets that are eaten in India from a very long time, they need like desi flavours.
              </p>

              {/* State-Wise Flavor Switcher Pill */}
              <div className="pt-2">
                <div className="text-[11px] font-mono font-bold text-zinc-600 uppercase mb-2">
                  Interactive Flavor Variations:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFlavor('rajasthan')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      activeFlavor === 'rajasthan'
                        ? 'bg-[#E52E2D] text-white shadow-md'
                        : 'bg-white border border-black/20 text-zinc-700 hover:text-black'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E52E2D] border border-white" />
                    <span>Rajasthan (Bajra)</span>
                  </button>

                  <button
                    onClick={() => setActiveFlavor('mp')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      activeFlavor === 'mp'
                        ? 'bg-[#1E5BB8] text-white shadow-md'
                        : 'bg-white border border-black/20 text-zinc-700 hover:text-black'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E5BB8] border border-white" />
                    <span>MP (Wheat Crisps)</span>
                  </button>

                  <button
                    onClick={() => setActiveFlavor('gujarat')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      activeFlavor === 'gujarat'
                        ? 'bg-[#7DA137] text-white shadow-md'
                        : 'bg-white border border-black/20 text-zinc-700 hover:text-black'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7DA137] border border-white" />
                    <span>Gujarat (Khakhra)</span>
                  </button>
                </div>
              </div>

              {/* Active Flavor Flavor Profile Card */}
              <div className="p-3.5 rounded-xl bg-white border border-black/15 shadow-xs text-xs space-y-1 font-mono">
                <div className="flex justify-between items-center text-zinc-500 text-[10px]">
                  <span>REGIONAL PROVENANCE</span>
                  <span className="font-bold text-black uppercase">{flavors[activeFlavor].state}</span>
                </div>
                <div className="font-bold text-black text-sm">
                  {flavors[activeFlavor].name} · <span className="font-hindi">{flavors[activeFlavor].hindi}</span>
                </div>
                <div className="text-zinc-700">
                  <strong className="text-black">Ingredients:</strong> {flavors[activeFlavor].millet} with {flavors[activeFlavor].spice}
                </div>
              </div>

              {/* Social Action Bar */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleLike}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-black/20 text-xs font-mono font-bold hover:border-black transition-colors"
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-zinc-600'}`} />
                  <span>{likedCount} Applauds</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-black/20 text-xs font-mono font-bold hover:border-black transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Share Case Study</span>
                </button>
              </div>
            </div>

            {/* Right Column: Woman holding the Red Snack Pouch (Exact Match with Image) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-2 border-black/70 bg-white group">
                <img
                  src="/kaanchi_hero_pouch.jpg"
                  alt="Young Indian woman happily holding red standup snack pouch of Kaanchi Co. Rajasthani Bajra Sticks"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                />

                {/* Subtitle Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-xs text-white p-2.5 rounded-lg border border-[#FFD200]/50 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="font-bold text-[#FFD200]">Kaanchi Co.</span>
                    <span className="text-zinc-300 ml-1.5">Rajasthani Bajra Sticks</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">150g Retail Pack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN PROCESS & CASE STUDY SYSTEM (Exact Layout matching reference image) */}
        <div className="mt-16 pt-12 border-t-2 border-dashed border-[#D5CDBD]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left Column: Concept & Typography */}
            <div className="space-y-8">
              {/* Concept Block */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-railway text-[#821919] uppercase tracking-wider mb-2">
                  Concept
                </h4>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-sans text-balance">
                  The bold and minimal look of the packaging is based on the concept of how consumers respond to state-wise different flavours and vibrant colors are used to express the flavour and character of each state.
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans mt-2 text-balance">
                  In every variant of these 3 states of snacks, the map of the state is die-cut into the window, to show the product inside, a kind of moustache-like window that reflects the culinary personality of that state.
                </p>
              </div>

              {/* Typography Block */}
              <div className="pt-4 border-t border-black/15">
                <h4 className="text-lg sm:text-xl font-bold font-railway text-[#821919] uppercase tracking-wider mb-4">
                  Typography
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {/* Primary Typeface */}
                  <div className="p-3 bg-white rounded-lg border border-black/15">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Primary Typeface</div>
                    <div className="text-base sm:text-lg font-black font-hindi text-[#821919] mt-1 leading-tight">
                      अनेक देवनागरी
                    </div>
                    <div className="text-xs font-black font-railway tracking-widest text-[#821919] uppercase">
                      EXPANDED
                    </div>
                  </div>

                  {/* Secondary Typeface */}
                  <div className="p-3 bg-white rounded-lg border border-black/15">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Secondary Typeface</div>
                    <div className="text-base sm:text-lg font-black font-sans text-black mt-1 leading-tight tracking-wider">
                      BALTO
                    </div>
                    <div className="text-[11px] font-mono text-zinc-600">
                      Geometric Sans
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Colors & Explorations */}
            <div className="space-y-8">
              {/* Colors & Typography Block */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-railway text-[#821919] uppercase tracking-wider mb-3">
                  Colors & typography
                </h4>

                {/* 4 Large Color Swatches matching Reference Image */}
                <div className="grid grid-cols-4 gap-2.5">
                  {/* Olive Green */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[4/5] rounded-xl bg-[#7DA137] shadow-sm border border-black/20" />
                    <span className="text-[10px] font-mono font-bold text-zinc-700 mt-1">#7DA137</span>
                    <span className="text-[9px] text-zinc-500">Olive</span>
                  </div>

                  {/* Vermillion Red */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[4/5] rounded-xl bg-[#E52E2D] shadow-sm border border-black/20" />
                    <span className="text-[10px] font-mono font-bold text-zinc-700 mt-1">#E52E2D</span>
                    <span className="text-[9px] text-zinc-500">Red</span>
                  </div>

                  {/* Cobalt Blue */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[4/5] rounded-xl bg-[#1E5BB8] shadow-sm border border-black/20" />
                    <span className="text-[10px] font-mono font-bold text-zinc-700 mt-1">#1E5BB8</span>
                    <span className="text-[9px] text-zinc-500">Blue</span>
                  </div>

                  {/* Pitch Black */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[4/5] rounded-xl bg-[#111111] shadow-sm border border-black/20" />
                    <span className="text-[10px] font-mono font-bold text-zinc-700 mt-1">#111111</span>
                    <span className="text-[9px] text-zinc-500">Black</span>
                  </div>
                </div>
              </div>

              {/* Explorations & Ideation Technical Sketch Block */}
              <div className="pt-4 border-t border-black/15">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg sm:text-xl font-bold font-railway text-[#821919] uppercase tracking-wider">
                    Explorations & ideation
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Dieline Studies</span>
                </div>

                {/* Hand-drawn Technical Dieline Sketch Artwork */}
                <div className="relative rounded-xl overflow-hidden bg-white border border-black/25 shadow-xs group">
                  <img
                    src="/packaging_sketches_ideation.jpg"
                    alt="Hand-drawn architectural pencil sketch diagram of standing snack pouch packaging explorations, dielines, and state map cutouts"
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white rounded text-[9px] font-mono">
                    Fold Lines & Dielines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: MOCKUPS SHOWCASE GRID (Matching Reference Image) */}
        <div className="mt-16 pt-12 border-t-2 border-dashed border-[#D5CDBD]">
          {/* Header */}
          <div className="flex items-baseline justify-between mb-6">
            <h4 className="text-2xl sm:text-3xl font-black font-railway text-[#821919] uppercase tracking-wide">
              Mockups
            </h4>
            <span className="text-xs font-mono text-zinc-500">
              Photorealistic Renders & Lifestyle Applications
            </span>
          </div>

          {/* Large Mockup Showcase Panel */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-black/60 shadow-[0_15px_40px_rgba(0,0,0,0.12)] bg-white group">
            <img
              src="/kaanchi_packaging_mockups.jpg"
              alt="Packaging mockup gallery showing Kaanchi Co. snack pouches on kitchen counter, in café with friends, girl holding collection, and studio podium display"
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
            />

            {/* Subtle bottom info bar */}
            <div className="p-3.5 bg-white/95 border-t border-black/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E52E2D]" />
                <span className="font-bold text-black">Kaanchi Co. Millet Snacks</span>
                <span className="text-zinc-400">·</span>
                <span>Stand-Up Ziplock Pouch Dieline (140x220mm)</span>
              </div>
              <div className="text-[11px] text-zinc-500">
                Designed with Adobe Illustrator & Photoshop
              </div>
            </div>
          </div>
        </div>

        {/* Toast Share Feedback */}
        {shareToast && (
          <div className="fixed bottom-8 right-8 z-50 px-4 py-2.5 rounded-xl bg-black text-[#FFD200] text-xs font-mono font-bold shadow-2xl flex items-center gap-2 animate-bounce border border-[#FFD200]">
            <Check className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>Link copied to Packaging Garh!</span>
          </div>
        )}
      </div>
    </section>
  );
};
