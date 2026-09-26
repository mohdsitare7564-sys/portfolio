import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Sparkles, Train, ExternalLink, Check, Eye } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

interface BrandPost {
  id: string;
  title: string;
  origin: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  likes: number;
  tags: string[];
  imageUrl?: string;
}

interface BrandRow {
  id: string;
  name: string;
  handle: string;
  rowNumber: string;
  campaignImage: string;
  subtitle: string;
  isIndividualImages?: boolean;
  posts: BrandPost[];
}

const brandCollections: BrandRow[] = [
  {
    id: 'nitya-advisors',
    name: 'NITYA ADVISORS',
    handle: 'nitya.advisors',
    rowNumber: '01',
    subtitle: 'social media design',
    campaignImage: '/campaign_nitya_advisors.jpg',
    posts: [
      {
        id: 'nitya-1',
        title: 'Scale the Peak of Tax Season',
        origin: 'top-left',
        likes: 4230,
        tags: ['Tax Season', 'Corporate ITR', 'Wealth Advisory'],
      },
      {
        id: 'nitya-2',
        title: 'Effortless ITR Filing Deadline',
        origin: 'top-right',
        likes: 3890,
        tags: ['Deadline Alert', 'Finance Guide', 'Consultation'],
      },
      {
        id: 'nitya-3',
        title: '10 Days Left Countdown Alert',
        origin: 'bottom-left',
        likes: 6120,
        tags: ['Urgent Countdown', 'Alarm Clock 3D', 'High-CTR Ad'],
      },
      {
        id: 'nitya-4',
        title: 'Tax Strategy of Genius — Einstein',
        origin: 'bottom-right',
        likes: 5480,
        tags: ['Blueprint Concept', '5 Smart Ways', 'Tax Planning'],
      },
    ],
  },
  {
    id: 'max-protein',
    name: 'MAX PROTEIN',
    handle: 'maxprotein.india',
    rowNumber: '02',
    subtitle: 'social media design',
    campaignImage: '/campaign_max_protein.jpg',
    posts: [
      {
        id: 'max-1',
        title: 'Snacking Bhi Healthy Ho Sakti Hai',
        origin: 'top-left',
        likes: 7840,
        tags: ['Fitness Nutrition', 'Gym Snack', 'Snacking Reform'],
      },
      {
        id: 'max-2',
        title: 'Celebrate Festivities the Healthy Way',
        origin: 'top-right',
        likes: 5920,
        tags: ['Festive Sweets', 'Family Dining', 'Protein Treats'],
      },
      {
        id: 'max-3',
        title: 'Post-Workout Healthy Kitchen Prep',
        origin: 'bottom-left',
        likes: 4830,
        tags: ['Post-Workout', 'Clean Ingredients', 'Chef Craft'],
      },
      {
        id: 'max-4',
        title: 'Luxury Festive Gift Hamper',
        origin: 'bottom-right',
        likes: 6710,
        tags: ['Gift Hamper', 'Packaging Mockup', 'Festival Joy'],
      },
    ],
  },
  {
    id: 'acer-electric',
    name: 'ACER ELECTRIC',
    handle: 'acer.electric.ev',
    rowNumber: '03',
    subtitle: 'social media design',
    campaignImage: '/campaign_acer_electric.jpg',
    posts: [
      {
        id: 'acer-1',
        title: 'Embrace the Wild — Snow Adventure EV',
        origin: 'top-left',
        likes: 6450,
        tags: ['EV Adventure', 'Snow Terrain', 'Humorous Penguin'],
      },
      {
        id: 'acer-2',
        title: 'Built for the Long Ride — E-Bicycle',
        origin: 'top-right',
        likes: 5120,
        tags: ['Electric Bicycle', 'Scenic Mountain', '120km Range'],
      },
      {
        id: 'acer-3',
        title: 'Happy Diwali Family EV Celebrations',
        origin: 'bottom-left',
        likes: 8310,
        tags: ['Diwali Marigold', 'Eco-Friendly', 'Family Mobility'],
      },
      {
        id: 'acer-4',
        title: 'City Nights Reimagined — Urban Scooter',
        origin: 'bottom-right',
        likes: 7150,
        tags: ['Night City Lights', 'Futuristic Headlamp', 'Style & Power'],
      },
    ],
  },
  {
    id: 'grannyways',
    name: 'GRANNYWAYS',
    handle: 'grannyways.pure',
    rowNumber: '04',
    subtitle: 'social media design',
    campaignImage: '/campaign_grannyways.jpg',
    posts: [
      {
        id: 'granny-1',
        title: 'Pure & Authentic Desi Cow Ghee',
        origin: 'top-left',
        likes: 5320,
        tags: ['Pure Cow Ghee', 'Kitchen Table', 'Aromatic Jar'],
      },
      {
        id: 'granny-2',
        title: 'Rely on Pure Taste — Hot Ghee Roti',
        origin: 'top-right',
        likes: 6490,
        tags: ['Nostalgic Roti', 'Kid Joy', 'Desi Goodness'],
      },
      {
        id: 'granny-3',
        title: "Nature's Finest Aroma & Brass Spoon",
        origin: 'bottom-left',
        likes: 4780,
        tags: ['Culinary Pour', 'Ayurvedic Spices', 'Pure Golden Ghee'],
      },
      {
        id: 'granny-4',
        title: 'Made with Love from Happy Cows',
        origin: 'bottom-right',
        likes: 9140,
        tags: ['Green Pasture', 'Desi Gir Cow', 'Farm Direct'],
      },
    ],
  },
  {
    id: 'kgs-teaching',
    name: 'KHAN GLOBAL STUDIES (KGS)',
    handle: 'khanglobalstudies.official',
    rowNumber: '05',
    subtitle: 'edtech campaign posters',
    campaignImage: '',
    isIndividualImages: true,
    posts: [
      {
        id: 'kgs-bpsc-tre',
        title: 'BPSC TRE 4.0 Class (1-5) Launch',
        origin: 'top-left',
        likes: 5820,
        imageUrl: '/kgs_bpsc_tre.jpg',
        tags: ['EdTech Mega Admission', 'Khan Sir', 'Price Anchor Badge'],
      },
      {
        id: 'kgs-jagrata-ssc',
        title: 'जगराता (Jagrata) SSC CGL 12H Marathon',
        origin: 'top-right',
        likes: 8430,
        imageUrl: '/kgs_jagrata_ssc.jpg',
        tags: ['12-Hour Overnight Live', '3D Gold Devnagari', 'Fire Ember FX'],
      },
      {
        id: 'kgs-sbi-clerk',
        title: 'SBI Clerk Prelims Admit Card Alert',
        origin: 'bottom-left',
        likes: 4910,
        imageUrl: '/kgs_sbi_clerk.jpg',
        tags: ['3D Admit Card Pass', 'QR Code Scan', 'Corporate Blue'],
      },
      {
        id: 'kgs-ias-asuse',
        title: 'KGS IAS — ASUSE Survey Insights',
        origin: 'bottom-right',
        likes: 6340,
        imageUrl: '/kgs_ias_asuse.jpg',
        tags: ['UPSC Infographic', 'Ashoka Emblem', 'Data Timeline'],
      },
    ],
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [activeBrandFilter, setActiveBrandFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [shareToast, setShareToast] = useState<string | null>(null);

  // Maintain interactive likes per post
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    brandCollections.forEach((brand) => {
      brand.posts.forEach((p) => {
        initial[p.id] = { count: p.likes, liked: false };
      });
    });
    return initial;
  });

  const [savedState, setSavedState] = useState<Record<string, boolean>>({});

  const toggleLike = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikesState((prev) => {
      const current = prev[postId] || { count: 0, liked: false };
      const nextLiked = !current.liked;
      const nextCount = nextLiked ? current.count + 1 : current.count - 1;
      return {
        ...prev,
        [postId]: { count: nextCount, liked: nextLiked },
      };
    });
  };

  const toggleSave = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedState((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleShare = (postTitle: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setShareToast(`Link copied: ${postTitle}`);
    setTimeout(() => setShareToast(null), 2500);
  };

  // Helper for quadrant transformation
  const getQuadrantStyle = (origin: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
    switch (origin) {
      case 'top-left':
        return { transform: 'scale(2.02)', transformOrigin: '0% 0%' };
      case 'top-right':
        return { transform: 'scale(2.02)', transformOrigin: '100% 0%' };
      case 'bottom-left':
        return { transform: 'scale(2.02)', transformOrigin: '0% 100%' };
      case 'bottom-right':
        return { transform: 'scale(2.02)', transformOrigin: '100% 100%' };
      default:
        return { transform: 'scale(1)', transformOrigin: 'center' };
    }
  };

  const filteredBrands = activeBrandFilter === 'all'
    ? brandCollections
    : brandCollections.filter((b) => b.id === activeBrandFilter);

  return (
    <section id="projects" className="py-20 bg-[#F4EFEB] text-[#1A1A1E] border-b border-[#D8D0C0] relative overflow-hidden">
      {/* Background authentic newsprint paper texture matching reference image */}
      <div className="absolute inset-0 bg-railway-parchment opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HEADER: EXACT MATCH WITH THE REFERENCE IMAGE */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b-2 border-dashed border-[#D5CDBD] relative">
          {/* Left Column: Station 02 Tag, Red Title & Folded Namaste Hands Greeting */}
          <div className="flex flex-col items-start space-y-3">
            {/* Hanging Station Tag [ 02 ] */}
            <div className="relative mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-[1.5px] h-4 bg-black/60 -mt-4" />
                <div className="w-[1.5px] h-4 bg-black/60 -mt-4 ml-6" />
              </div>
              <div className="px-3.5 py-1 bg-white border-2 border-black rounded-sm shadow-xs inline-flex items-center justify-center font-mono font-black text-sm tracking-wider text-black">
                02
              </div>
            </div>

            {/* Red Bold Headline: SOCIAL MEDIA DESIGN / सोशल मीडिया डिज़ाइन */}
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
                SOCIAL MEDIA DESIGN
              </h2>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-hindi text-[#821919] mt-1 leading-tight">
                सोशल मीडिया डिज़ाइन
              </div>
            </div>

            {/* Folded Hands Namaste Illustration & Welcome Greeting */}
            <div className="flex items-center gap-3 pt-2">
              {/* Hand-drawn Folded Namaste Icon */}
              <div className="w-10 h-10 rounded-full bg-white border border-black/30 flex items-center justify-center shadow-xs shrink-0">
                <svg className="w-6 h-6 text-[#821919]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {/* Classical Indian Anjali Mudra / Folded Namaste Hands */}
                  <path d="M12 2 C 10 5, 8 9, 8 13 C 8 17, 10 20, 12 22 C 14 20, 16 17, 16 13 C 16 9, 14 5, 12 2 Z" strokeLinecap="round" />
                  <path d="M12 6 L 12 18" strokeLinecap="round" strokeDasharray="1 2" />
                  <path d="M6 14 C 7 11, 9 8, 12 7" strokeLinecap="round" />
                  <path d="M18 14 C 17 11, 15 8, 12 7" strokeLinecap="round" />
                  <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <div className="text-xs sm:text-sm font-hindi font-bold text-[#821919]">
                डिजिटल धाम में आपका स्वागत है!
              </div>
            </div>
          </div>

          {/* Right Column: 3D Yellow Station Arch Board "DIGITAL DHAM" */}
          <div className="flex flex-col items-center lg:items-end shrink-0 self-center lg:self-auto">
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-600 uppercase mb-2">
              WELCOME IN DIGITAL DHAM
            </div>

            {/* 3D Isometric Yellow Station Arch */}
            <div className="relative w-48 sm:w-56 md:w-64 rounded-xl overflow-hidden shadow-sm border border-black/10 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/digital_dham_arch.jpg"
                alt="3D Indian Railways yellow station arch signboard for Digital Dham with black caution stripes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quick Brand Filter Tabs */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveBrandFilter('all')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                activeBrandFilter === 'all'
                  ? 'bg-[#821919] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-zinc-700 border border-black/20'
              }`}
            >
              All Brands (सम्पूर्ण)
            </button>
            {brandCollections.map((brand) => (
              <button
                key={`tab-${brand.id}`}
                onClick={() => setActiveBrandFilter(brand.id)}
                className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                  activeBrandFilter === brand.id
                    ? 'bg-[#821919] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-zinc-700 border border-black/20'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-zinc-600">
            Total Showcases: <strong className="text-black">{filteredBrands.length} Campaigns</strong>
          </div>
        </div>

        {/* THE 4 BRAND SHOWCASE ROWS MATCHING REFERENCE IMAGE */}
        <div className="mt-12 space-y-16">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="relative">
              {/* Brand Header: "social media design" + Brand Title in Crimson + Thin Dividing Line */}
              <div className="mb-6">
                <div className="text-xs italic font-serif text-[#821919] lowercase tracking-wide mb-0.5">
                  {brand.subtitle}
                </div>
                <div className="flex items-baseline justify-between border-b border-[#821919]/40 pb-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-railway text-[#821919] uppercase tracking-wide">
                    {brand.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    Row {brand.rowNumber} · @{brand.handle}
                  </span>
                </div>
              </div>

              {/* 4 Instagram-Style Mockup Cards in a Responsive Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {brand.posts.map((post, idx) => {
                  const currentLike = likesState[post.id] || { count: post.likes, liked: false };
                  const isSaved = !!savedState[post.id];

                  return (
                    <div
                      key={post.id}
                      className="bg-white rounded-xl border border-black/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col overflow-hidden group"
                    >
                      {/* Instagram Card Top Bar */}
                      <div className="p-3 border-b border-[#F0EBE0] flex items-center justify-between bg-[#FCFAF6]">
                        <div className="flex items-center gap-2 truncate">
                          {/* Mini Logo Avatar */}
                          <div className="w-6 h-6 rounded-full bg-[#821919] text-[#FFD200] flex items-center justify-center font-bold text-[10px] shrink-0 font-mono shadow-2xs">
                            {brand.name.charAt(0)}
                          </div>
                          <div className="truncate">
                            <span className="text-[11px] font-bold text-black font-sans truncate block leading-tight">
                              {brand.handle}
                            </span>
                          </div>
                        </div>

                        {/* Top 3-Dots Menu */}
                        <button
                          onClick={() => handleShare(post.title)}
                          className="text-zinc-400 hover:text-black p-1 transition-colors"
                          title="Share post"
                        >
                          <MoreHorizontal className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Poster Visual Frame */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFEAE1] border-b border-[#F0EBE0]">
                        {brand.isIndividualImages && post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full relative overflow-hidden">
                            <img
                              src={brand.campaignImage}
                              alt={`${brand.name} - ${post.title}`}
                              style={getQuadrantStyle(post.origin)}
                              className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[2.08]"
                            />
                          </div>
                        )}

                        {/* Hover Overlay with Inspect Button */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-4">
                          <button
                            onClick={() => {
                              // Find matching project or open full preview
                              const matched = projects.find(p => p.id === post.id) || projects[0];
                              setSelectedProject({
                                ...matched,
                                title: `${brand.name} — ${post.title}`,
                                subtitle: brand.subtitle,
                                imageUrl: post.imageUrl || brand.campaignImage,
                              });
                            }}
                            className="px-3 py-1.5 bg-white text-black font-bold text-xs rounded-lg shadow-lg flex items-center gap-1.5 transform hover:scale-105 transition-transform"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View HD Poster</span>
                          </button>
                        </div>
                      </div>

                      {/* Instagram Card Bottom Bar: Like, Comment, Share, Bookmark */}
                      <div className="p-3 bg-white flex flex-col justify-between flex-1">
                        <div className="flex items-center justify-between pb-1.5">
                          <div className="flex items-center gap-3">
                            {/* Like Heart */}
                            <button
                              onClick={(e) => toggleLike(post.id, e)}
                              className="transform active:scale-125 transition-transform"
                              title="Like post"
                            >
                              <Heart
                                className={`w-4 h-4 transition-colors ${
                                  currentLike.liked
                                    ? 'fill-[#E53935] text-[#E53935]'
                                    : 'text-zinc-700 hover:text-black'
                                }`}
                              />
                            </button>

                            {/* Comment */}
                            <button
                              onClick={() => handleShare(post.title)}
                              className="text-zinc-700 hover:text-black transition-colors"
                              title="Comment"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </button>

                            {/* Share */}
                            <button
                              onClick={(e) => handleShare(post.title, e)}
                              className="text-zinc-700 hover:text-black transition-colors"
                              title="Share"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Bookmark */}
                          <button
                            onClick={(e) => toggleSave(post.id, e)}
                            className="text-zinc-700 hover:text-black transition-colors"
                            title="Save"
                          >
                            <Bookmark
                              className={`w-4 h-4 ${
                                isSaved ? 'fill-black text-black' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {/* Likes Count & Caption */}
                        <div className="space-y-1">
                          <div className="text-[11px] font-bold text-black font-sans">
                            {currentLike.count.toLocaleString()} likes
                          </div>

                          <div className="text-xs text-zinc-800 line-clamp-1">
                            <span className="font-bold text-black mr-1">{brand.handle}</span>
                            <span>{post.title}</span>
                          </div>

                          {/* Tag Chips */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {post.tags.slice(0, 2).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#F2EDE2] text-zinc-700 border border-[#E0D8CB]"
                              >
                                #{tag.replace(/\s+/g, '')}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Row Page Index Marker in Bottom Right (matching 01, 02, 03, 04 in reference) */}
              <div className="mt-4 flex justify-end">
                <span className="font-mono text-xs font-bold text-zinc-400">
                  {brand.rowNumber}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Toast Feedback */}
        {shareToast && (
          <div className="fixed bottom-8 right-8 z-50 px-4 py-2.5 rounded-xl bg-black text-[#FFD200] text-xs font-mono font-bold shadow-2xl flex items-center gap-2 animate-bounce border border-[#FFD200]">
            <Check className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>{shareToast}</span>
          </div>
        )}

        {/* Project Modal Preview */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onLike={(id) => toggleLike(id)}
            isLiked={likesState[selectedProject.id]?.liked || false}
            likeCount={likesState[selectedProject.id]?.count || 5000}
          />
        )}
      </div>
    </section>
  );
};
