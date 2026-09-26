import React from 'react';

// Westhill Interiors - New Season New Look (Interior Fitout)
export const PosterWesthillFitout: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/5] bg-[#F7F5F0] text-[#1E1E24] overflow-hidden select-none p-5 flex flex-col justify-between shadow-2xl rounded-sm ${className}`}>
      {/* Top Header & Logo */}
      <div className="flex items-center justify-between border-b border-[#D6CEBE] pb-3">
        <div className="flex items-center gap-2">
          {/* Westhill geometric mark */}
          <svg className="w-6 h-6 text-[#A05C38]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2L18 8v8l-6 3.8L6 16V8l6-3.8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] text-[#33302A] leading-tight">WESTHILL</div>
            <div className="text-[7px] tracking-[0.3em] text-[#7C7567] uppercase">Interiors & Architecture</div>
          </div>
        </div>
        <div className="text-[8px] font-mono tracking-widest text-[#8F8778] uppercase border border-[#D6CEBE] px-1.5 py-0.5 rounded-sm">
          Collection 2024
        </div>
      </div>

      {/* Main Visual: Scandinavian Architectural Interior Living Room */}
      <div className="relative my-3 flex-1 rounded border border-[#E3DDD1] bg-[#ECE6DA] overflow-hidden flex flex-col items-center justify-center p-3">
        {/* Subtle Room Render in SVG */}
        <svg className="w-full h-full" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wall background with ambient gradient */}
          <rect width="400" height="320" fill="#E8E1D5" />
          {/* Sunlight beam from window */}
          <polygon points="0,0 140,0 260,320 0,320" fill="rgba(255,255,255,0.4)" />
          {/* Flooring */}
          <polygon points="0,220 400,220 400,320 0,320" fill="#D2C3B0" />
          {/* Floor planks */}
          <line x1="60" y1="220" x2="20" y2="320" stroke="#C0B09A" strokeWidth="1" />
          <line x1="140" y1="220" x2="110" y2="320" stroke="#C0B09A" strokeWidth="1" />
          <line x1="220" y1="220" x2="210" y2="320" stroke="#C0B09A" strokeWidth="1" />
          <line x1="300" y1="220" x2="310" y2="320" stroke="#C0B09A" strokeWidth="1" />
          <line x1="370" y1="220" x2="390" y2="320" stroke="#C0B09A" strokeWidth="1" />

          {/* Wall Art Frame */}
          <rect x="50" y="45" width="70" height="90" fill="#F4EEE4" stroke="#8E7E6B" strokeWidth="3" />
          <circle cx="85" cy="85" r="18" fill="#B35D39" opacity="0.8" />
          <path d="M60 115 C75 95, 95 105, 110 90" stroke="#2B3A2F" strokeWidth="2" fill="none" />

          {/* Minimalist Floor Lamp */}
          <line x1="330" y1="60" x2="330" y2="245" stroke="#2B2620" strokeWidth="3" />
          <path d="M310 65 L350 65 L340 45 L320 45 Z" fill="#D4A373" stroke="#2B2620" strokeWidth="1.5" />
          <ellipse cx="330" cy="245" rx="14" ry="4" fill="#2B2620" />

          {/* Modern Scandinavian Sofa */}
          <rect x="130" y="140" width="170" height="45" rx="6" fill="#889083" />
          <rect x="120" y="165" width="190" height="40" rx="8" fill="#757E70" />
          <rect x="110" y="155" width="20" height="45" rx="5" fill="#646C5F" />
          <rect x="290" y="155" width="20" height="45" rx="5" fill="#646C5F" />
          {/* Pillows */}
          <rect x="135" y="155" width="30" height="25" rx="4" fill="#C86D51" transform="rotate(-6 135 155)" />
          <rect x="255" y="155" width="30" height="25" rx="4" fill="#E2C99F" transform="rotate(8 255 155)" />
          {/* Sofa Legs */}
          <line x1="135" y1="205" x2="130" y2="230" stroke="#3D3227" strokeWidth="3" strokeLinecap="round" />
          <line x1="285" y1="205" x2="290" y2="230" stroke="#3D3227" strokeWidth="3" strokeLinecap="round" />

          {/* Coffee Table with Ceramic Vase */}
          <ellipse cx="205" cy="240" rx="45" ry="14" fill="#E4D5C3" stroke="#A99580" strokeWidth="1.5" />
          <line x1="175" y1="244" x2="170" y2="265" stroke="#3D3227" strokeWidth="2.5" />
          <line x1="235" y1="244" x2="240" y2="265" stroke="#3D3227" strokeWidth="2.5" />
          {/* Vase & Foliage */}
          <ellipse cx="205" cy="235" rx="7" ry="9" fill="#B35D39" />
          <path d="M205 226 Q195 210 185 205" stroke="#2B3A2F" strokeWidth="1.5" fill="none" />
          <path d="M205 226 Q215 205 225 200" stroke="#2B3A2F" strokeWidth="1.5" fill="none" />
          <ellipse cx="185" cy="205" rx="4" ry="2" fill="#3D503C" transform="rotate(-30 185 205)" />
          <ellipse cx="225" cy="200" rx="4" ry="2" fill="#3D503C" transform="rotate(25 225 200)" />

          {/* Large Monstera / Fiddle Leaf Plant in Clay Pot */}
          <rect x="25" y="180" width="32" height="40" rx="4" fill="#9C5D41" />
          <ellipse cx="41" cy="180" rx="16" ry="6" fill="#7A442E" />
          <path d="M41 180 Q30 150 15 130" stroke="#253526" strokeWidth="3" fill="none" />
          <ellipse cx="15" cy="125" rx="14" ry="9" fill="#2D442F" transform="rotate(-20 15 125)" />
          <path d="M41 180 Q45 140 55 120" stroke="#253526" strokeWidth="3" fill="none" />
          <ellipse cx="58" cy="115" rx="16" ry="10" fill="#38523A" transform="rotate(25 58 115)" />
          <path d="M41 180 Q38 155 35 145" stroke="#253526" strokeWidth="2" fill="none" />
          <ellipse cx="33" cy="142" rx="12" ry="7" fill="#283A29" transform="rotate(-10 33 142)" />
        </svg>

        {/* Floating Typography Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D4CBBF] px-3 py-2 shadow-sm rounded-sm">
          <div className="text-[8px] font-semibold tracking-wider text-[#A05C38] uppercase">New Season</div>
          <div className="text-xs font-bold tracking-tight text-[#1A1815] font-display">NEW LOOK</div>
        </div>
      </div>

      {/* Poster Headline */}
      <div className="mb-2">
        <div className="text-[15px] font-black tracking-tight text-[#1E1C18] uppercase font-display leading-tight">
          INTERIOR FITOUT
        </div>
        <div className="text-[9px] text-[#6E6759] font-medium tracking-wide">
          Tailored Architectural Living & Commercial Fitouts
        </div>
      </div>

      {/* Contact Strip */}
      <div className="bg-[#1C1D21] text-[#F4F4F0] p-2.5 rounded flex items-center justify-between text-[7.5px] leading-tight">
        <div>
          <div className="font-semibold text-[#F5A623] uppercase tracking-wider text-[7px]">Contact Us Today</div>
          <div className="opacity-90 font-mono mt-0.5">+91 7989 082 551 · contact@westhill.com</div>
        </div>
        <div className="text-right opacity-75 font-mono">
          <div>Sector 63, Noida</div>
          <div>Delhi NCR, India</div>
        </div>
      </div>
    </div>
  );
};

// Apna Service Company - Grow Your Business
export const PosterApnaService: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/5] bg-gradient-to-b from-[#F0F8FF] via-[#E8F4F8] to-[#D8EDF5] text-[#0A2540] overflow-hidden select-none p-4 flex flex-col justify-between shadow-2xl rounded-sm ${className}`}>
      {/* Top Brand Bar */}
      <div className="flex items-center justify-between">
        {/* Logo: Apna Service Company */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <span className="text-lg font-black tracking-tighter text-[#00A896]">ap</span>
            <span className="text-lg font-black tracking-tighter text-[#028090]">na</span>
          </div>
          <div className="border-l border-[#A0C4D9] pl-1.5 leading-none">
            <div className="text-[7.5px] font-bold tracking-wider text-[#0A2540] uppercase">SERVICE</div>
            <div className="text-[6.5px] font-medium tracking-widest text-[#00A896] uppercase">COMPANY</div>
          </div>
        </div>

        {/* Call Us Badge */}
        <div className="bg-[#03045E] text-white px-2.5 py-1 rounded-sm shadow-sm flex items-center gap-1.5">
          <svg className="w-3 h-3 text-[#00B4D8]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.59 3.68a1 1 0 01-.24 1.02l-2.23 2.09z" />
          </svg>
          <div>
            <div className="text-[6px] uppercase tracking-wider text-[#90E0EF]">CALL US NOW</div>
            <div className="text-[8px] font-bold font-mono tracking-tight">+91 704 231 7991</div>
          </div>
        </div>
      </div>

      {/* Main Campaign Title */}
      <div className="my-1.5">
        <div className="text-[17px] font-black tracking-tight text-[#03045E] font-display uppercase leading-none">
          Grow Your Business
        </div>
        <div className="text-[8px] font-semibold text-[#0077B6] tracking-wide mt-0.5">
          ALL-IN-ONE MONTHLY DIGITAL CREATIVE PACK
        </div>
      </div>

      {/* Visual Content: Circular Consultant Graphic & Value List */}
      <div className="relative flex-1 bg-white/90 backdrop-blur rounded-lg p-2.5 border border-[#BEE3F8] flex items-center justify-between gap-2 shadow-sm overflow-hidden">
        {/* Background graphic swirls */}
        <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#90E0EF]/30 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-[#00B4D8]/20 rounded-full blur-lg pointer-events-none" />

        {/* Offer Details */}
        <div className="z-10 flex-1 space-y-1.5">
          <div className="inline-block bg-[#0077B6] text-white text-[7px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
            WE ARE OFFERING
          </div>

          <div className="space-y-1">
            <div className="flex items-start gap-1">
              <span className="text-[#00B4D8] font-bold text-[9px] mt-[-1px]">✓</span>
              <div className="text-[8px] font-bold text-[#03045E] leading-tight">
                8 On-Demand Designs
                <span className="block text-[6.5px] font-normal text-[#5A6E7F]">in every Month</span>
              </div>
            </div>

            <div className="flex items-start gap-1">
              <span className="text-[#00B4D8] font-bold text-[9px] mt-[-1px]">✓</span>
              <div className="text-[8px] font-bold text-[#03045E] leading-tight">
                2 Video Ads (15-30s)
                <span className="block text-[6.5px] font-normal text-[#5A6E7F]">in every Month</span>
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[7.5px] text-[#8898AA] line-through font-mono">Our Price ₹2999/-</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-[#E0F7FA] border border-[#00B4D8] text-[#0077B6] px-2 py-0.5 rounded font-black text-[9px]">
              <span className="text-[6.5px] uppercase font-bold text-[#03045E]">OFFER PRICE</span>
              <span className="text-[#0077B6] text-[10.5px]">₹1199/-</span>
              <span className="text-[6px] font-medium text-[#5A6E7F]">/ Monthly</span>
            </div>
          </div>
        </div>

        {/* Circular Business Executive Graphic */}
        <div className="z-10 w-24 h-24 rounded-full border-2 border-[#00B4D8] p-0.5 bg-gradient-to-tr from-[#0077B6] to-[#90E0EF] shadow-md shrink-0 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            {/* Background disc */}
            <circle cx="50" cy="50" r="48" fill="#EBF8FF" />
            {/* City silhouette backdrop */}
            <rect x="20" y="35" width="10" height="40" fill="#BEE3F8" opacity="0.6" />
            <rect x="32" y="25" width="12" height="50" fill="#90E0EF" opacity="0.5" />
            <rect x="60" y="30" width="14" height="45" fill="#BEE3F8" opacity="0.6" />
            {/* Stylized Executive Character */}
            <circle cx="50" cy="38" r="14" fill="#E0A985" />
            {/* Hair */}
            <path d="M38 34 C38 24, 62 24, 62 34 C58 28, 42 28, 38 34 Z" fill="#2C241D" />
            {/* Suit & Shirt */}
            <path d="M30 78 L36 54 L64 54 L70 78 Z" fill="#0077B6" />
            <polygon points="44,54 50,68 56,54" fill="#FFFFFF" />
            <polygon points="48,58 50,72 52,58" fill="#D90429" />
            {/* Thumbs up badge */}
            <circle cx="72" cy="66" r="10" fill="#03045E" />
            <text x="72" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">★</text>
          </svg>
        </div>
      </div>

      {/* Address & Web Contact Footer */}
      <div className="bg-[#03045E] text-white p-2 rounded text-[7px] space-y-0.5 mt-1.5 leading-tight">
        <div className="flex items-center justify-between text-[6.5px] text-[#90E0EF]">
          <span>Email: hello@apnaservicecompany.com</span>
          <span>Website: www.apnaservicecompany.com</span>
        </div>
        <div className="text-[6.5px] opacity-80 text-white/90">
          Add: 110, 1st Floor, Okhla Phase-1, Above Mahindra Showroom, New Delhi-110020
        </div>
      </div>
    </div>
  );
};

// Westhill Interiors - Bespoken Furniture
export const PosterWesthillBespoke: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/5] bg-[#F4F1EA] text-[#24211D] overflow-hidden select-none p-5 flex flex-col justify-between shadow-2xl rounded-sm ${className}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#DCD5C6] pb-3">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#8C6D4F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2L18 8v8l-6 3.8L6 16V8l6-3.8z" />
          </svg>
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] text-[#292520] leading-tight">WESTHILL</div>
            <div className="text-[7px] tracking-[0.25em] text-[#8C8373] uppercase">Interiors</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[14px] font-bold tracking-tight text-[#1F1C18] font-display uppercase leading-none">
            BESPOKEN
          </div>
          <div className="text-[9px] tracking-[0.3em] font-medium text-[#7D6B58] uppercase">
            FURNITURE
          </div>
        </div>
      </div>

      {/* Main Furniture Showcase Vector Layout */}
      <div className="relative my-3 flex-1 rounded border border-[#E0D7C7] bg-[#E9E3D6] overflow-hidden flex flex-col justify-center items-center p-3">
        <svg className="w-full h-full" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wall texture */}
          <rect width="400" height="320" fill="#EAE4D8" />
          {/* Floor */}
          <polygon points="0,215 400,215 400,320 0,320" fill="#D9CBB7" />
          <line x1="0" y1="215" x2="400" y2="215" stroke="#C4B49E" strokeWidth="1.5" />

          {/* Wall Frames with Abstract Art */}
          <rect x="70" y="35" width="55" height="75" fill="#FAF6EE" stroke="#4A3F35" strokeWidth="2.5" />
          <circle cx="97" cy="70" r="14" fill="#B27C56" />
          <rect x="140" y="45" width="45" height="60" fill="#FAF6EE" stroke="#4A3F35" strokeWidth="2.5" />
          <line x1="145" y1="90" x2="180" y2="60" stroke="#2B3A2F" strokeWidth="2" />
          <rect x="200" y="30" width="65" height="85" fill="#FAF6EE" stroke="#4A3F35" strokeWidth="2.5" />
          <path d="M210 95 Q232 50 255 95" fill="#758A73" />

          {/* Luxury Pendant Lamp hanging from ceiling */}
          <line x1="320" y1="0" x2="320" y2="100" stroke="#3A3026" strokeWidth="2" />
          <ellipse cx="320" cy="105" rx="20" ry="10" fill="#C59B27" />
          <path d="M305 105 L335 105 L345 130 L295 130 Z" fill="#E6C86E" opacity="0.9" />
          <polygon points="295,130 345,130 380,240 260,240" fill="rgba(255,235,160,0.2)" />

          {/* Bespoke Curved Luxury Sofa */}
          <path d="M70 170 Q200 155 330 170 L340 215 Q200 225 60 215 Z" fill="#2E3F32" />
          <path d="M80 180 Q200 170 320 180 L325 210 Q200 218 75 210 Z" fill="#3D5342" />
          {/* Cushion accents */}
          <rect x="100" y="172" width="28" height="24" rx="4" fill="#D4A373" transform="rotate(-8 100 172)" />
          <rect x="270" y="172" width="28" height="24" rx="4" fill="#E5D3B3" transform="rotate(10 270 172)" />

          {/* Solid Walnut Coffee Table */}
          <rect x="145" y="225" width="110" height="20" rx="3" fill="#583E26" />
          <line x1="160" y1="245" x2="155" y2="270" stroke="#3D2917" strokeWidth="4" />
          <line x1="240" y1="245" x2="245" y2="270" stroke="#3D2917" strokeWidth="4" />
          {/* Books and Ceramic Plate on table */}
          <rect x="165" y="221" width="24" height="4" fill="#E8D8C8" />
          <rect x="167" y="217" width="20" height="4" fill="#9C5A3C" />
          <ellipse cx="225" cy="223" rx="12" ry="3" fill="#D3C7B5" />

          {/* Luxury Wool Rug */}
          <ellipse cx="200" cy="265" rx="140" ry="25" fill="#C9BDAA" stroke="#B0A089" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Studio Lighting Spec Badge */}
        <div className="absolute bottom-4 right-4 bg-[#231F1A] text-[#F5F2EB] px-2.5 py-1 rounded text-[7.5px] font-mono tracking-wider">
          HANDCRAFTED TEAK & VELVET
        </div>
      </div>

      {/* Tagline */}
      <div className="mb-2">
        <div className="text-[10px] font-bold text-[#2A2621] uppercase tracking-wider">
          Custom Designed to Suit Your Space & Soul
        </div>
        <div className="text-[8px] text-[#7A7162]">
          Crafted with sustainably sourced hardwoods and Italian upholstery textiles.
        </div>
      </div>

      {/* Contact Strip */}
      <div className="bg-[#1C1A17] text-[#F7F5F0] p-2.5 rounded flex items-center justify-between text-[7.5px]">
        <div>
          <div className="text-[#E6C86E] font-bold text-[7px] uppercase tracking-widest">Connect with our Studio</div>
          <div className="font-mono mt-0.5 opacity-90">+91 7989 082 551 · studio@westhill.design</div>
        </div>
        <div className="text-right font-mono opacity-80">
          <div>Visit Showroom</div>
          <div>Delhi · NCR</div>
        </div>
      </div>
    </div>
  );
};

// Pulse / Nexar Brand Identity System
export const PosterPulseIdentity: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/5] bg-[#0E1015] text-white p-5 flex flex-col justify-between rounded-sm shadow-2xl border border-white/10 ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="text-xs font-mono text-[#F5A623] tracking-widest uppercase">
          Brand Identity Guidelines
        </div>
        <div className="text-[9px] font-mono text-zinc-400">PROJECT ID: NX-2024</div>
      </div>

      {/* Geometric Golden Ratio Construction Mark */}
      <div className="relative my-4 flex-1 flex flex-col items-center justify-center bg-[#13161F] rounded border border-white/5 p-4 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 240" fill="none">
          {/* Construction Circles & Grid Lines */}
          <circle cx="150" cy="120" r="90" stroke="rgba(245,166,35,0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="150" cy="120" r="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx="150" cy="120" r="30" stroke="rgba(245,166,35,0.3)" strokeWidth="1" />
          <line x1="30" y1="120" x2="270" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="150" y1="10" x2="150" y2="230" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="60" y1="30" x2="240" y2="210" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />

          {/* Primary Vector Geometric Logo Mark */}
          <path d="M120 75 L180 75 L150 120 Z" fill="#F5A623" />
          <path d="M150 120 L210 165 L150 165 Z" fill="#FFFFFF" />
          <path d="M150 120 L90 165 L150 165 Z" fill="#FFC107" opacity="0.8" />
          <circle cx="150" cy="120" r="8" fill="#0E1015" stroke="#F5A623" strokeWidth="3" />

          {/* Measurement Callouts */}
          <text x="210" y="80" fill="#F5A623" fontSize="8" fontFamily="monospace">Ø 1.618</text>
          <text x="80" y="195" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">x-height = 48pt</text>
        </svg>

        <div className="text-center mt-2">
          <div className="text-sm font-bold tracking-wider font-display uppercase">NEXAR STUDIO</div>
          <div className="text-[8px] font-mono text-zinc-400">Modular Geometric Logomark</div>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
        <div className="bg-[#F5A623] h-7 rounded flex items-end p-1 text-[7px] font-mono text-black font-bold">#F5A623</div>
        <div className="bg-[#FFC107] h-7 rounded flex items-end p-1 text-[7px] font-mono text-black font-bold">#FFC107</div>
        <div className="bg-[#242836] h-7 rounded flex items-end p-1 text-[7px] font-mono text-white">#242836</div>
        <div className="bg-[#FFFFFF] h-7 rounded flex items-end p-1 text-[7px] font-mono text-black font-bold">#FFFFFF</div>
      </div>
    </div>
  );
};

// Urban Bloom - Botanical Vector Illustration
export const PosterUrbanVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/5] bg-[#0A1A24] text-white p-5 flex flex-col justify-between rounded-sm shadow-2xl border border-white/10 ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="text-xs font-bold text-[#FFB703] font-display uppercase tracking-widest">
          Urban Bloom Series
        </div>
        <div className="text-[8px] font-mono text-cyan-300">100% Vector Art</div>
      </div>

      <div className="relative my-3 flex-1 bg-[#07131B] rounded border border-white/5 flex items-center justify-center p-4 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 240" fill="none">
          {/* Sunburst rays */}
          <circle cx="150" cy="120" r="70" fill="url(#sun-grad)" opacity="0.3" />
          <defs>
            <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FB8500" />
              <stop offset="100%" stopColor="#0A1A24" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Botanical curves with anchor points */}
          <path d="M150 210 Q140 140 90 90 Q120 70 150 120" fill="#219EBC" opacity="0.8" />
          <path d="M150 210 Q160 140 210 90 Q180 70 150 120" fill="#FFB703" opacity="0.8" />
          <path d="M150 210 Q150 120 150 50" stroke="#8ECAE6" strokeWidth="3" strokeLinecap="round" />

          {/* Leaves with vector nodes */}
          <path d="M150 120 C110 110, 100 80, 120 60 C140 80, 140 100, 150 120 Z" fill="#FB8500" />
          <path d="M150 100 C190 90, 200 60, 180 40 C160 60, 160 80, 150 100 Z" fill="#023047" stroke="#FFB703" strokeWidth="2" />

          {/* Stylized vector anchors */}
          <circle cx="150" cy="50" r="3.5" fill="#FFFFFF" stroke="#FB8500" strokeWidth="2" />
          <circle cx="120" cy="60" r="3" fill="#FFFFFF" stroke="#00B4D8" strokeWidth="2" />
          <circle cx="180" cy="40" r="3" fill="#FFFFFF" stroke="#FFB703" strokeWidth="2" />
        </svg>
      </div>

      <div className="text-[8px] font-mono text-zinc-400 flex items-center justify-between">
        <span>Adobe Illustrator Vector Curve</span>
        <span>CMYK 300 DPI Screen Print</span>
      </div>
    </div>
  );
};

// Experimental Brutalist Poster
export const PosterBrutalistType: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/5] bg-[#111215] text-[#ECE7DE] p-5 flex flex-col justify-between rounded-sm shadow-2xl border-2 border-[#FFCC00] ${className}`}>
      <div className="flex items-center justify-between border-b-2 border-[#FFCC00] pb-2">
        <div className="text-xs font-black tracking-tight text-[#FFCC00] font-mono">
          INTERNATIONAL TYPOGRAPHY
        </div>
        <div className="text-[9px] font-mono bg-[#FFCC00] text-black px-1.5 py-0.5 font-bold">
          DELHI BIENNIAL
        </div>
      </div>

      <div className="my-3 flex-1 flex flex-col justify-center space-y-1">
        <div className="text-4xl font-black tracking-tighter uppercase font-display leading-[0.85] text-white">
          KINETIC
        </div>
        <div className="text-3xl font-black tracking-widest uppercase font-display leading-[0.85] text-[#FFCC00] ml-4">
          WAVES
        </div>
        <div className="text-4xl font-black tracking-tighter uppercase font-display leading-[0.85] text-white/40">
          DELHI
        </div>
        <div className="text-xl font-mono tracking-widest text-[#FFCC00] mt-2">
          OCTOBER 2024
        </div>
      </div>

      <div className="border-t border-white/20 pt-2 flex items-center justify-between text-[8px] font-mono text-zinc-400">
        <span>GRID 12-COLUMN SWISS</span>
        <span>AQUIB ANZAR DESIGN</span>
      </div>
    </div>
  );
};

// Dramatic Hero Artwork recreating Page 1 of the PDF!
export const HeroGraphicArtwork: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] md:h-[540px] rounded-2xl overflow-hidden bg-[#0A0B0E] border border-white/10 shadow-2xl flex items-center justify-center p-6">
      {/* Topographic background contour lines */}
      <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="amberGlow" cx="70%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0A0B0E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#amberGlow)" />
        {/* Wavy liquid topography lines */}
        <path d="M-100,100 C150,50 300,250 600,180 C900,110 1100,300 1300,200" stroke="#F5A623" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
        <path d="M-50,200 C200,150 400,350 700,280 C1000,210 1200,400 1400,300" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.12" fill="none" />
        <path d="M-20,320 C250,260 450,460 750,390 C1050,320 1250,510 1450,410" stroke="#F5A623" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
        <path d="M0,420 C300,370 500,570 800,500 C1100,430 1300,620 1500,520" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1" fill="none" />
      </svg>

      {/* Hand & Creative Toolbar Composition */}
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Floating Tool Icons (Adobe Illustrator, Photoshop, Figma, Pen Tool) */}
        <div className="absolute -top-6 -right-2 md:right-4 flex items-center gap-3 animate-pulse">
          {/* Adobe Illustrator badge */}
          <div className="w-12 h-12 rounded-xl bg-[#261300] border-2 border-[#FF9A00] flex flex-col items-center justify-center shadow-lg shadow-[#FF9A00]/20">
            <span className="text-[#FF9A00] font-black text-base font-display">Ai</span>
            <span className="text-[7px] text-[#FFB347] font-mono">Illustrator</span>
          </div>

          {/* Adobe Photoshop badge */}
          <div className="w-12 h-12 rounded-xl bg-[#001D38] border-2 border-[#31A8FF] flex flex-col items-center justify-center shadow-lg shadow-[#31A8FF]/20">
            <span className="text-[#31A8FF] font-black text-base font-display">Ps</span>
            <span className="text-[7px] text-[#90CAF9] font-mono">Photoshop</span>
          </div>

          {/* Figma badge */}
          <div className="w-11 h-11 rounded-xl bg-[#1E1E1E] border border-white/20 flex items-center justify-center shadow-md">
            <div className="grid grid-cols-2 gap-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F24E1E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7262]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#A259FF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#1ABCFE]" />
            </div>
          </div>
        </div>

        {/* Central Visual: Pen Tool Stylus & Floating Tool Palette */}
        <div className="relative w-full max-w-sm flex items-center justify-center py-6">
          {/* Floating Illustrator-style Toolbar bar */}
          <div className="bg-[#181A22]/95 border border-white/20 rounded-xl p-2.5 shadow-2xl backdrop-blur-md flex flex-col gap-2 items-center">
            {/* Tool buttons */}
            <div className="w-8 h-8 rounded bg-[#F5A623] text-black flex items-center justify-center shadow-sm">
              {/* Pen tool icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>

            <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center">
              {/* Type tool */}
              <span className="font-bold text-sm font-display">T</span>
            </div>

            <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center">
              {/* Selection arrow */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2l16 12-8.5 1.5L7 22z" />
              </svg>
            </div>

            <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center">
              {/* Eyedropper */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2l7 7m-9.5-2.5l-9 9a2 2 0 0 0 0 2.828l.672.672a2 2 0 0 0 2.828 0l9-9-3.5-3.5z" />
              </svg>
            </div>

            {/* Color Swatch indicator */}
            <div className="relative w-7 h-7 mt-2">
              <div className="absolute top-0 left-0 w-5 h-5 bg-[#F5A623] border border-black z-10" />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-white border border-black" />
            </div>
          </div>

          {/* Interactive Bezier Curves & Floating Node Points */}
          <div className="flex-1 ml-6 relative">
            <svg className="w-56 h-48" viewBox="0 0 240 200" fill="none">
              {/* S-curve bezier */}
              <path d="M30 150 C 70 30, 160 170, 210 50" stroke="#F5A623" strokeWidth="3" fill="none" />
              {/* Control handles */}
              <line x1="30" y1="150" x2="70" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="70" cy="30" r="4.5" fill="#F5A623" />
              <line x1="210" y1="50" x2="160" y2="170" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="160" cy="170" r="4.5" fill="#F5A623" />

              {/* Anchor points */}
              <rect x="25" y="145" width="10" height="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
              <rect x="205" y="45" width="10" height="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

              {/* Dynamic Coordinate Tag */}
              <rect x="90" y="85" width="80" height="22" rx="4" fill="#181A22" stroke="#F5A623" strokeWidth="1" />
              <text x="130" y="100" fill="#F5A623" fontSize="9" fontFamily="monospace" textAnchor="middle">
                P(x: 180, y: 92)
              </text>
            </svg>
          </div>
        </div>

        {/* Bottom Graphic Designer Seal */}
        <div className="mt-2 flex items-center gap-3 text-xs font-mono text-zinc-400 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>New Delhi, India</span>
          <span>·</span>
          <span className="text-[#F5A623] font-semibold">Ready for Commisions</span>
        </div>
      </div>
    </div>
  );
};

// Designer Portrait Card (recreating Page 2 of the PDF)
export const DesignerPortraitCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-[#15171F] border border-white/15 shadow-2xl">
      {/* Top Browser Window Bar (Red, Yellow, Green dots) */}
      <div className="bg-[#1C1F2B] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-inner" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-inner" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-inner" />
        </div>
        <div className="text-[11px] font-mono text-zinc-400 tracking-wider">
          aquib_anzar_profile.design
        </div>
        <div className="w-4 h-4 text-zinc-500">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        </div>
      </div>

      {/* Main Portrait Artwork in Terracotta Shirt & Lush Botanical Background */}
      <div className="relative aspect-[4/5] bg-gradient-to-b from-[#1A3324] via-[#2D5A3E] to-[#1E261F] overflow-hidden flex flex-col justify-end p-6">
        {/* Lush Green Foliage & Building Backdrop */}
        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 500" fill="none">
          {/* Sky glow */}
          <rect width="400" height="500" fill="#2E4A3B" />
          {/* WalkOn Building brick facade silhouette */}
          <rect x="20" y="240" width="80" height="120" fill="#1C2E24" />
          <text x="30" y="280" fill="#F5A623" opacity="0.6" fontSize="10" fontFamily="sans-serif" fontWeight="bold">WalkOn</text>

          {/* Tropical Tree Foliage Layers */}
          <circle cx="60" cy="100" r="80" fill="#1E3D29" />
          <circle cx="150" cy="70" r="90" fill="#2D5A3C" />
          <circle cx="280" cy="90" r="95" fill="#1F422C" />
          <circle cx="360" cy="120" r="70" fill="#325E42" />

          {/* Palm leaves */}
          <path d="M30 180 Q80 120 140 160" stroke="#417754" strokeWidth="4" fill="none" />
          <path d="M280 180 Q320 110 380 150" stroke="#417754" strokeWidth="4" fill="none" />
        </svg>

        {/* Detailed Designer Portrait Vector Graphic */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <svg className="w-64 h-80 drop-shadow-2xl" viewBox="0 0 260 320" fill="none">
            {/* Terracotta Rust Orange Casual Shirt */}
            <path d="M45 230 C50 180, 85 165, 130 165 C175 165, 210 180, 215 230 L230 320 L30 320 Z" fill="#C86236" />
            {/* Shirt Collar & Buttons */}
            <polygon points="105,165 130,215 155,165 140,165 130,185 120,165" fill="#A84C23" />
            <line x1="130" y1="215" x2="130" y2="320" stroke="#8E3C18" strokeWidth="3" />
            <circle cx="130" cy="245" r="3.5" fill="#E8DCD0" />
            <circle cx="130" cy="285" r="3.5" fill="#E8DCD0" />

            {/* Neck & Chest */}
            <path d="M108 135 L108 175 C108 190, 152 190, 152 175 L152 135 Z" fill="#B87B57" />

            {/* Head & Face */}
            <ellipse cx="130" cy="115" rx="38" ry="46" fill="#C98A64" />

            {/* Hair */}
            <path d="M92 105 C90 65, 120 52, 130 52 C145 52, 170 65, 168 105 C162 75, 150 68, 130 68 C110 68, 98 75, 92 105 Z" fill="#1C1815" />

            {/* Eyebrows & Eyes (Warm, friendly gaze) */}
            <path d="M106 102 Q116 98 123 103" stroke="#1C1815" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M137 103 Q144 98 154 102" stroke="#1C1815" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="115" cy="110" r="3.5" fill="#1C1815" />
            <circle cx="145" cy="110" r="3.5" fill="#1C1815" />

            {/* Nose */}
            <path d="M130 108 L127 124 L134 124" stroke="#A66744" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Trimmed Beard & Smile */}
            <path d="M104 125 C108 158, 152 158, 156 125 C150 145, 110 145, 104 125 Z" fill="#241E1A" />
            <path d="M120 134 Q130 140 140 134" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

            {/* White Frangipani / Jasmine Flower tucked behind ear (as shown in PDF page 2!) */}
            <g transform="translate(162, 112)">
              <circle cx="0" cy="0" r="4" fill="#FFC107" />
              <ellipse cx="0" cy="-8" rx="4" ry="7" fill="#FFFFFF" />
              <ellipse cx="8" cy="-2" rx="7" ry="4" fill="#FFFFFF" />
              <ellipse cx="5" cy="7" rx="5" ry="7" fill="#FFFFFF" />
              <ellipse cx="-5" cy="7" rx="5" ry="7" fill="#FFFFFF" />
              <ellipse cx="-8" cy="-2" rx="7" ry="4" fill="#FFFFFF" />
            </g>
          </svg>
        </div>

        {/* Floating Name Badge */}
        <div className="relative z-20 bg-black/75 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl flex items-center justify-between">
          <div>
            <div className="text-white font-bold text-sm tracking-wide font-display">Aquib Anzar</div>
            <div className="text-[#F5A623] text-xs font-mono">Graphic Designer · New Delhi</div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#F5A623] text-black font-black flex items-center justify-center text-xs">
            3+ Y
          </div>
        </div>
      </div>
    </div>
  );
};
