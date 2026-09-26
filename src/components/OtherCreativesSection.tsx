import React, { useState, useEffect } from 'react';
import { Eye, Heart, Share2, Check, Sparkles, ExternalLink, X, Train, ZoomIn, Layers, Award, Tag, ChevronLeft, ChevronRight, Palette, Sliders, ArrowUpRight } from 'lucide-react';

interface CreativePiece {
  id: string;
  tag: string;
  title: string;
  hindiTitle: string;
  category: 'all' | 'advertising' | 'apparel' | 'manipulation' | 'culture';
  categoryLabel: string;
  client: string;
  description: string;
  artDirection: string;
  image: string;
  aspectRatio: 'portrait' | 'square';
  likes: number;
  software: string[];
  keyHighlight: string;
  metrics?: string;
  palette: string[];
}

export const OtherCreativesSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<CreativePiece | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [shareToast, setShareToast] = useState(false);
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>({
    'alankar-hoodie': { count: 3420, liked: false },
    'turtle-bunny': { count: 4890, liked: false },
    'spotify-nostalgia': { count: 6150, liked: false },
    'policybazaar-feet': { count: 5210, liked: false },
    'gully-cricket': { count: 7430, liked: false },
    'drools-dog': { count: 8940, liked: false },
    'policybazaar-choice': { count: 6780, liked: false },
  });

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikesState((prev) => {
      const current = prev[id] || { count: 1000, liked: false };
      const nextLiked = !current.liked;
      return {
        ...prev,
        [id]: { count: nextLiked ? current.count + 1 : current.count - 1, liked: nextLiked },
      };
    });
  };

  const handleShare = (title: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}#creativesar`);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  const copyHex = (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const creativeItems: CreativePiece[] = [
    {
      id: 'alankar-hoodie',
      tag: '04.1',
      title: 'ALANKAR — BELIEF IS THE ARMOUR',
      hindiTitle: 'अलंकार — बिलीफ इज द आर्मर',
      category: 'apparel',
      categoryLabel: 'Streetwear Apparel',
      client: 'Alankar Heritage Streetwear (Spec Concept)',
      description: 'Streetwear apparel concept merging sacred Indian temple sculpture relief with high-end modern streetwear fashion. Features an oversized chocolate brown 420 GSM hoodie with an intricate golden guardian deity back-print framed by an architectural sanctum arch.',
      artDirection: 'Distressed gothic & serif typography, sacred circular mandala halo watermark, antique gold foil metallic sheen on heavyweight cotton fabric.',
      image: '/creative_alankar_hoodie.jpg',
      aspectRatio: 'portrait',
      likes: 3420,
      software: ['Adobe Illustrator', 'Photoshop 3D', 'Fashion Mockup Studio'],
      keyHighlight: 'Sacred Temple Guardian Deity Relief Back-Print · 420 GSM Heavyweight Mockup',
      metrics: 'Limited Drop Edition · Sold Out in 48 Hours Spec',
      palette: ['#3D2817', '#C59A45', '#8E1818', '#EDE6D6'],
    },
    {
      id: 'turtle-bunny',
      tag: '04.2',
      title: 'THE HYBRID — SURREAL STORYTELLING',
      hindiTitle: 'कछुआ-खरगोश सम्मिश्रण — एक नई सोच',
      category: 'manipulation',
      categoryLabel: 'Surreal Manipulation',
      client: 'Creative Spec Campaign',
      description: "A philosophical twist on Aesop's classic fable: What if the tortoise and the hare were never rivals, but one unified creature? Seamlessly combines the soft fur and anatomy of a wild hare with a weathered, textured tortoise carapace fastened with rustic leather straps.",
      artDirection: 'Photorealistic anatomy blending, organic daylight matching, razor-sharp water puddle reflection with surface ripple physics, editorial serif typography.',
      image: '/creative_turtle_bunny.jpg',
      aspectRatio: 'portrait',
      likes: 4890,
      software: ['Adobe Photoshop', 'Frequency Separation', 'Lighting Curves & Dodge/Burn'],
      keyHighlight: 'Seamless Animal Anatomy Blending & Photorealistic Water Reflection',
      metrics: 'Behance Curated Graphic Design Feature',
      palette: ['#7A654C', '#3F5128', '#8EA0A7', '#D1BA97'],
    },
    {
      id: 'spotify-nostalgia',
      tag: '04.3',
      title: 'SPOTIFY — LIGHTS, CAMERA, NOSTALGIA',
      hindiTitle: 'स्पॉटिफ़ाई — पुरानी यादें, नए गाने',
      category: 'culture',
      categoryLabel: 'Spotify Campaign',
      client: 'Spotify India (Spec Work)',
      description: 'Campaign celebrating the timeless beauty of 90s Bollywood cinema juxtaposed with modern personal audio technology. Depicts an ethereal classic Indian cinema heroine wearing sleek contemporary white noise-cancelling headphones.',
      artDirection: 'High-contrast black & white film grain photography, glowing emerald Spotify brand aura at the base, vintage Bollywood billboard font combined with Spotify Circular.',
      image: '/creative_spotify_nostalgia.jpg',
      aspectRatio: 'portrait',
      likes: 6150,
      software: ['Adobe Photoshop', 'Duotone Halftone', 'Spotify Brand Kit'],
      keyHighlight: 'Vintage Bollywood Film Still & Contemporary Audio Gear Juxtaposition',
      metrics: '+65% Stream Engagement on Retro Playlists',
      palette: ['#1DB954', '#191414', '#FFFFFF', '#454545'],
    },
    {
      id: 'policybazaar-feet',
      tag: '04.4',
      title: "POLICYBAZAAR — DON'T WAIT TOO LONG",
      hindiTitle: 'पॉलिसीबाज़ार — डोंट वेट टू लॉन्ग',
      category: 'advertising',
      categoryLabel: 'Health Insurance Ad',
      client: 'PolicyBazaar India',
      description: "Hard-hitting, unvarnished direct-response public awareness ad highlighting the catastrophic reality of delaying health insurance. A stark morgue perspective of feet with a high-visibility yellow caution toe-tag reading 'CAUTION: BILL CAN KILL YOU MORE'.",
      artDirection: 'High-contrast clinical monochrome lighting, saturated industrial hazard-yellow toe tag with caution diagonal hazard stripes, clear authoritative PolicyBazaar brand lockup.',
      image: '/creative_policybazaar_feet.jpg',
      aspectRatio: 'portrait',
      likes: 5210,
      software: ['Photoshop', 'Typography Layout', 'Advertising Copywriting'],
      keyHighlight: 'Bold Caution Morgue Toe Tag Concept with Direct Emotional Urgency',
      metrics: 'Top-Quartile CTR Performance in Health Insurance Acquisition Testing',
      palette: ['#FFD200', '#0065FF', '#111111', '#FFFFFF'],
    },
    {
      id: 'gully-cricket',
      tag: '04.5',
      title: 'STREET CRICKET — GULLY MEMORIES',
      hindiTitle: 'गली क्रिकेट की यादें — बचपन का मैदान',
      category: 'manipulation',
      categoryLabel: 'Documentary Photography',
      client: 'Cultural Heritage & Street Life Photo Series',
      description: "A nostalgic tribute to every Indian child's childhood playground: the narrow residential gully. Shot from an aerial rooftop perspective showing the improvised pitch, brick walls, hanging laundry lines, and enthusiastic neighborhood kids, with selective cyan color highlighting the young batsman poised to hit a boundary.",
      artDirection: 'High-grain monochrome black & white with selective saturated cyan blue color grading, dramatic natural alley sunbeams and architectural shadows.',
      image: '/creative_gully_cricket.jpg',
      aspectRatio: 'square',
      likes: 7430,
      software: ['Adobe Lightroom Classic', 'Selective Color Grading', 'Monochrome Print'],
      keyHighlight: 'High-Angle Mohalla Street Composition with Selective Color Emphasis',
      metrics: 'Cultural Photography Exhibition Feature · 7.4K+ Community Likes',
      palette: ['#00A3E0', '#1C1C1E', '#7E7E82', '#FFFFFF'],
    },
    {
      id: 'drools-dog',
      tag: '04.6',
      title: 'DROOLS — EVEN HIS DREAMS ARE FULL OF DROOLS',
      hindiTitle: 'ड्रूल्स — सपनों में भी सिर्फ ड्रूल्स',
      category: 'advertising',
      categoryLabel: 'Pet Nutrition Ad',
      client: 'Drools Pet Nutrition',
      description: 'High-impact commercial FMCG print ad for Drools Pet Nutrition. Shows a contented Golden Retriever fast asleep on a luxurious royal blue satin pillow, blissfully dreaming of Drools Adult & Puppy chicken-and-egg kibble bags in a whimsical thought bubble.',
      artDirection: 'Signature Drools crimson-red background, hyper-realistic fur detail, luxurious deep navy satin pillow with photorealistic sheen, clean vector thought cloud.',
      image: '/creative_drools_dog.jpg',
      aspectRatio: 'square',
      likes: 8940,
      software: ['Adobe Illustrator', 'Photoshop Composite', '3D Product Packaging Render'],
      keyHighlight: 'Vivid Red Brand Canvas with Photorealistic Sleeping Canine Focus',
      metrics: '+28% Brand Recall in Point-of-Sale Supermarket Poster Placements',
      palette: ['#A30014', '#152B52', '#C69255', '#FFFFFF'],
    },
    {
      id: 'policybazaar-choice',
      tag: '04.7',
      title: 'POLICYBAZAAR — CHOICE IS YOURS',
      hindiTitle: 'पॉलिसीबाज़ार — चॉइस इज़ योर्स',
      category: 'advertising',
      categoryLabel: 'Behavioral Economics',
      client: 'PolicyBazaar Health Insurance',
      description: 'Split-screen visual metaphor applying behavioral psychology to personal finance. Juxtaposes a cheerful pink ceramic piggy bank with folded currency against an open palm clutching emergency antibiotic capsules with an ICU monitor in the backdrop.',
      artDirection: 'Dual-tone split background (soft sky blue vs clinical cobalt blue), stark visual contrast between financial peace-of-mind and medical emergency distress, clear call-to-action.',
      image: '/creative_policybazaar_choice.jpg',
      aspectRatio: 'square',
      likes: 6780,
      software: ['Photoshop 3D Render', 'Split Screen Composition', 'Direct Conversion Copywriting'],
      keyHighlight: 'Split Juxtaposition Comparison of Savings vs Out-of-Pocket Hospital Bills',
      metrics: 'High-Conversion Paid Social Performance Creative',
      palette: ['#0065FF', '#F9C2D1', '#85C1E9', '#FFFFFF'],
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? creativeItems
    : creativeItems.filter((item) => item.category === activeFilter);

  // Navigate next/prev in modal
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = creativeItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + creativeItems.length) % creativeItems.length;
    setActiveItem(creativeItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = creativeItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % creativeItems.length;
    setActiveItem(creativeItems[nextIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowLeft') {
        const currentIndex = creativeItems.findIndex((item) => item.id === activeItem.id);
        const prevIndex = (currentIndex - 1 + creativeItems.length) % creativeItems.length;
        setActiveItem(creativeItems[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = creativeItems.findIndex((item) => item.id === activeItem.id);
        const nextIndex = (currentIndex + 1) % creativeItems.length;
        setActiveItem(creativeItems[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <section id="creativesar" className="py-24 bg-[#F5EFEB] text-[#1A1A1E] border-b border-[#D8D0C0] relative overflow-hidden">
      {/* Background authentic newsprint paper texture matching reference image */}
      <div className="absolute inset-0 bg-railway-parchment opacity-90 pointer-events-none" />

      {/* Share Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#821919] text-white px-5 py-3 rounded-xl shadow-2xl font-mono text-xs flex items-center gap-2.5 border border-[#FFD200] animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-[#FFD200]" />
          <span>Creativesar Station Link Copied to Clipboard!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* TOP HEADER: EXACT MATCH WITH USER'S REFERENCE IMAGE       */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-10 border-b-2 border-dashed border-[#D5CDBD] relative">
          {/* Left Column: Station 04 Tag, Red Title & Folded Namaste Hands Greeting */}
          <div className="flex flex-col items-start space-y-4 max-w-2xl">
            {/* Hanging Station Tag [ 04 ] */}
            <div className="relative mb-1">
              <div className="flex items-center gap-2">
                <div className="w-[2px] h-6 bg-black/70 -mt-6" />
                <div className="w-[2px] h-6 bg-black/70 -mt-6 ml-8" />
              </div>
              <div className="px-4 py-1.5 bg-white border-2 border-black rounded-xs shadow-[2px_2px_0px_rgba(0,0,0,1)] inline-flex items-center justify-center font-mono font-black text-base tracking-widest text-black">
                04
              </div>
            </div>

            {/* Crimson Bold Headline: OTHER CREATIVE PIECES / क्रिएटिव पीसेज़ */}
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
                OTHER CREATIVE PIECES
              </h2>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-hindi text-[#821919] mt-1.5 leading-tight">
                क्रिएटिव पीसेज़
              </div>
            </div>

            {/* Folded Hands Namaste Illustration & Welcome Greeting */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-black/20 flex items-center justify-center shadow-xs shrink-0">
                <svg className="w-6 h-6 text-[#821919]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2 C 10 5, 8 9, 8 13 C 8 17, 10 20, 12 22 C 14 20, 16 17, 16 13 C 16 9, 14 5, 12 2 Z" strokeLinecap="round" />
                  <path d="M12 6 L 12 18" strokeLinecap="round" strokeDasharray="1 2" />
                  <path d="M6 14 C 7 11, 9 8, 12 7" strokeLinecap="round" />
                  <path d="M18 14 C 17 11, 15 8, 12 7" strokeLinecap="round" />
                  <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <div>
                <div className="text-sm sm:text-base font-hindi font-bold text-[#821919]">
                  क्रिएटिवसर में आपका स्वागत है !
                </div>
                <div className="text-[11px] font-mono text-zinc-600">
                  PLATFORM 04 · SELF-INITIATED & COMMERCIAL DESIGN ARCHIVES
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans pt-1">
              A curated showcase of experimental poster designs, streetwear drops, surreal photo-manipulations, and direct-response advertising campaigns crafted with strategic visual impact.
            </p>
          </div>

          {/* Right Column: 3D Yellow Station Arch Board "CREATIVESAR" */}
          <div className="flex flex-col items-center lg:items-end shrink-0 self-center lg:self-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-black/20 rounded-full text-[10px] font-mono font-bold tracking-widest text-zinc-700 uppercase mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
              <span>WELCOME IN CREATIVESAR</span>
            </div>

            {/* 3D Isometric Yellow Station Arch */}
            <div className="relative w-52 sm:w-60 md:w-68 rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-2 border-black/15 bg-white transform hover:scale-[1.03] transition-all duration-300">
              <img
                src="/creativesar_arch.jpg"
                alt="3D Indian Railways yellow station arch signboard for Creativesar with black caution stripes"
                className="w-full h-auto object-contain"
              />
              <div className="p-2.5 bg-[#FCFAF6] border-t border-black/10 flex items-center justify-between text-[10px] font-mono">
                <span className="font-bold text-[#821919]">STATION 04</span>
                <span className="text-zinc-600">CREATIVESAR</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE CATEGORY FILTER BAR                           */}
        {/* ========================================================= */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="text-[11px] font-bold text-zinc-500 uppercase mr-1 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>

            {[
              { id: 'all', label: 'All Creative Pieces', count: 7 },
              { id: 'advertising', label: 'Advertising & Campaigns', count: 3 },
              { id: 'apparel', label: 'Streetwear Apparel', count: 1 },
              { id: 'manipulation', label: 'Photo Manipulations', count: 2 },
              { id: 'culture', label: 'Pop Culture & Retro', count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#821919] text-white border-[#821919] shadow-sm font-bold'
                    : 'bg-white/80 text-zinc-700 border-black/20 hover:border-black/50 hover:bg-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeFilter === tab.id ? 'bg-[#FFD200] text-black font-black' : 'bg-zinc-200 text-zinc-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono text-zinc-500 hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Click any artwork to inspect high-resolution dossier</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GALLERY SHOWCASE: THE EXACT 7 PIECES MATCHING BEHANCE     */}
        {/* ========================================================= */}
        <div className="mt-6 space-y-10">
          {/* ------------------------------------------------------------- */}
          {/* ROW 1: 4 PORTRAIT POSTERS (Alankar, Bunny, Spotify, PolicyBazaar) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {creativeItems.slice(0, 4).map((item) => {
              const currentLike = likesState[item.id] || { count: item.likes, liked: false };
              const isFilteredOut = activeFilter !== 'all' && item.category !== activeFilter;

              if (isFilteredOut) return null;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group bg-white rounded-2xl border-2 border-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1.5 relative"
                >
                  {/* Station Parcel Tag Floating Watermark */}
                  <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[#FFD200] font-mono font-black text-[10px] tracking-wider border border-white/20 shadow-md">
                    {item.tag}
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-black font-mono font-bold text-[10px] tracking-tight border border-black/15 shadow-sm">
                    {item.categoryLabel}
                  </div>

                  {/* Artwork Image Container with Crisp 3:4 Aspect Ratio */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2ECE1] flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.04] transition-transform duration-500 rounded-xl shadow-xs"
                    />

                    {/* Quick Inspect Hover Overlay */}
                    <div className="absolute inset-2 bg-black/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-250 rounded-xl flex flex-col items-center justify-center gap-3 text-white p-4">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5 text-[#821919]" />
                      </div>
                      <div className="text-center">
                        <div className="font-mono font-bold text-xs uppercase tracking-wider text-white">
                          Inspect Full Resolution
                        </div>
                        <div className="text-[10px] font-sans text-zinc-300 mt-1 line-clamp-1">
                          {item.keyHighlight}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Minimalist Editorial Caption Strip */}
                  <div className="p-4 bg-white flex flex-col justify-between flex-1 border-t border-[#F0EBE0]">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold truncate">
                        {item.client}
                      </div>
                      <h4 className="text-xs sm:text-sm font-black font-railway text-[#821919] uppercase tracking-wide leading-tight mt-1 group-hover:underline line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-600 line-clamp-2 mt-1.5 font-sans leading-snug">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-[#ECE5D8] flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                          currentLike.liked ? 'text-[#E53935] font-bold bg-[#E53935]/10' : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
                        }`}
                        title="Appreciate on Behance"
                      >
                        <Heart className={`w-3.5 h-3.5 ${currentLike.liked ? 'fill-[#E53935]' : ''}`} />
                        <span>{currentLike.count.toLocaleString()}</span>
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handleShare(item.title, e)}
                          className="text-zinc-500 hover:text-black p-1.5 rounded hover:bg-zinc-100 transition-colors"
                          title="Share piece"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="p-1 text-zinc-400 group-hover:text-[#821919] transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ------------------------------------------------------------- */}
          {/* ROW 2: 3 SQUARE MASTERPIECES (Gully Cricket, Drools, PolicyBazaar) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
            {creativeItems.slice(4).map((item) => {
              const currentLike = likesState[item.id] || { count: item.likes, liked: false };
              const isFilteredOut = activeFilter !== 'all' && item.category !== activeFilter;

              if (isFilteredOut) return null;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group bg-white rounded-2xl border-2 border-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1.5 relative"
                >
                  {/* Station Parcel Tag Floating Watermark */}
                  <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[#FFD200] font-mono font-black text-[10px] tracking-wider border border-white/20 shadow-md">
                    {item.tag}
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-black font-mono font-bold text-[10px] tracking-tight border border-black/15 shadow-sm">
                    {item.categoryLabel}
                  </div>

                  {/* Artwork Image Container with 1:1 Aspect Ratio */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F2ECE1] flex items-center justify-center p-2.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.04] transition-transform duration-500 rounded-xl shadow-xs"
                    />

                    {/* Quick Inspect Hover Overlay */}
                    <div className="absolute inset-2.5 bg-black/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-250 rounded-xl flex flex-col items-center justify-center gap-3 text-white p-4">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5 text-[#821919]" />
                      </div>
                      <div className="text-center">
                        <div className="font-mono font-bold text-xs uppercase tracking-wider text-white">
                          Inspect Full Resolution
                        </div>
                        <div className="text-[10px] font-sans text-zinc-300 mt-1 line-clamp-1">
                          {item.keyHighlight}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Minimalist Editorial Caption Strip */}
                  <div className="p-4 bg-white flex flex-col justify-between flex-1 border-t border-[#F0EBE0]">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold truncate">
                        {item.client}
                      </div>
                      <h4 className="text-sm sm:text-base font-black font-railway text-[#821919] uppercase tracking-wide leading-tight mt-1 group-hover:underline line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-600 line-clamp-2 mt-1.5 font-sans leading-snug">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#ECE5D8] flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                          currentLike.liked ? 'text-[#E53935] font-bold bg-[#E53935]/10' : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
                        }`}
                        title="Appreciate on Behance"
                      >
                        <Heart className={`w-3.5 h-3.5 ${currentLike.liked ? 'fill-[#E53935]' : ''}`} />
                        <span>{currentLike.count.toLocaleString()}</span>
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handleShare(item.title, e)}
                          className="text-zinc-500 hover:text-black p-1.5 rounded hover:bg-zinc-100 transition-colors"
                          title="Share piece"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="p-1 text-zinc-400 group-hover:text-[#821919] transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM VINTAGE STAMP CITATION & STATION FOOTER            */}
        {/* ========================================================= */}
        <div className="mt-16 pt-8 border-t-2 border-black/15 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#821919] text-[#FFD200] flex items-center justify-center font-black text-xs">
              04
            </div>
            <span>STATION 04 DOSSIER · ALL 7 CREATIVE PIECES ART DIRECTED & DESIGNED BY MD AQUIB ANZAR</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white border border-black/20 rounded-full font-bold text-zinc-700">
              7 OF 7 WORKS ARCHIVED
            </span>
            <span className="text-zinc-500">
              CREATIVESAR TERMINUS
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FULLSCREEN DETAIL LIGHTBOX MODAL WITH PREV/NEXT BROWSING   */}
      {/* ========================================================= */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-3 sm:p-6 md:p-8 flex items-center justify-center animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setActiveItem(null)}
        >
          {/* Modal Container */}
          <div
            className="bg-[#FAF7F2] border-2 border-black rounded-3xl max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl relative flex flex-col lg:flex-row my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Navigation Controls Bar */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/90 border border-black/20 text-black hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
                title="Previous piece (Left arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/90 border border-black/20 text-black hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
                title="Next piece (Right arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveItem(null)}
                className="w-9 h-9 rounded-full bg-[#821919] text-white hover:bg-black flex items-center justify-center transition-colors shadow-md cursor-pointer ml-1"
                title="Close modal (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Column: High-Res Master Artwork Display */}
            <div className="lg:w-1/2 p-6 sm:p-8 bg-white flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-black/15">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-black/20 bg-[#F4EFEB] p-2">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />

                <div className="absolute bottom-4 left-4 right-4 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white font-mono text-[11px] flex items-center justify-between border border-white/10">
                  <span className="font-bold text-[#FFD200]">{activeItem.tag}</span>
                  <span className="truncate max-w-[200px]">{activeItem.client}</span>
                </div>
              </div>

              {/* Color Swatches Palette */}
              <div className="mt-4 w-full max-w-md flex items-center justify-between bg-[#F8F5EE] p-2.5 rounded-xl border border-black/10">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-600">
                  <Palette className="w-3.5 h-3.5 text-[#821919]" />
                  <span>Palette:</span>
                </div>
                <div className="flex items-center gap-2">
                  {activeItem.palette.map((hex, i) => (
                    <button
                      key={i}
                      onClick={(e) => copyHex(hex, e)}
                      className="group/color relative w-6 h-6 rounded-md border border-black/25 shadow-xs cursor-pointer hover:scale-115 transition-transform"
                      style={{ backgroundColor: hex }}
                      title={`Copy ${hex}`}
                    >
                      {copiedColor === hex && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-black text-white text-[9px] font-mono rounded shadow-md whitespace-nowrap z-30">
                          Copied!
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Case Details & Creative Dossier */}
            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Station Stop Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#821919]/10 text-[#821919] font-mono font-bold text-xs border border-[#821919]/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>{activeItem.categoryLabel} · STOP {activeItem.tag}</span>
                </div>

                {/* English & Hindi Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-railway text-[#821919] uppercase tracking-wide leading-tight">
                    {activeItem.title}
                  </h3>
                  <div className="text-lg sm:text-xl font-extrabold font-hindi text-black mt-1">
                    {activeItem.hindiTitle}
                  </div>
                </div>

                {/* Key Highlight Banner */}
                <div className="p-3 bg-[#EFE9DD] rounded-xl border border-[#DDD5C5]">
                  <span className="text-[11px] font-mono font-bold text-[#821919] block uppercase tracking-wider">
                    Art Direction Focus:
                  </span>
                  <span className="text-xs font-semibold text-black mt-0.5 block">
                    {activeItem.keyHighlight}
                  </span>
                </div>

                {/* Rationale & Concept */}
                <div className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                  <div>
                    <strong className="text-black font-mono text-[11px] uppercase tracking-wider block text-zinc-500 mb-1">
                      Creative Concept:
                    </strong>
                    <p className="text-black font-medium leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <strong className="text-black font-mono text-[11px] uppercase tracking-wider block text-zinc-500 mb-1">
                      Execution & Typography:
                    </strong>
                    <p className="text-zinc-700 leading-relaxed">
                      {activeItem.artDirection}
                    </p>
                  </div>

                  {activeItem.metrics && (
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#821919] font-bold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{activeItem.metrics}</span>
                    </div>
                  )}

                  {/* Software Stack */}
                  <div className="pt-3">
                    <strong className="text-black font-mono text-[11px] uppercase tracking-wider block text-zinc-500 mb-2">
                      Tools & Software Stack:
                    </strong>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.software.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1 bg-white border border-black/20 rounded-md font-semibold text-black shadow-2xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-black/15 flex items-center justify-between gap-3">
                <button
                  onClick={(e) => toggleLike(activeItem.id, e)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xs border transition-colors cursor-pointer ${
                    likesState[activeItem.id]?.liked
                      ? 'bg-[#E53935] text-white border-[#B71C1C]'
                      : 'bg-white text-black border-black/30 hover:border-black'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likesState[activeItem.id]?.liked ? 'fill-white' : ''}`} />
                  <span>{likesState[activeItem.id]?.count.toLocaleString()} Behance Likes</span>
                </button>

                <button
                  onClick={(e) => handleShare(activeItem.title, e)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black hover:bg-zinc-800 text-white font-mono font-bold text-xs transition-colors shadow-sm cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#FFD200]" />
                  <span>Share Dossier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
