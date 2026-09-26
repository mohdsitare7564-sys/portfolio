import React, { useState } from 'react';
import { Train, ExternalLink } from 'lucide-react';

export interface StationData {
  id: string;
  number: string;
  title: string;
  hindiTitle: string;
  categoryKey: string;
  position: 'top' | 'bottom'; // whether label & box are above or below the track
  x: number; // coordinate along SVG path
  trackY: number; // y coordinate on track
  boxY: number; // y coordinate of station box
}

export const stationsList: StationData[] = [
  {
    id: 'station-01',
    number: '01',
    title: 'CAMPAIGN DESIGN',
    hindiTitle: 'अभियान डिज़ाइन',
    categoryKey: 'marketing',
    position: 'top',
    x: 195,
    trackY: 90,
    boxY: 42,
  },
  {
    id: 'station-02',
    number: '02',
    title: 'SOCIAL MEDIA DESIGN',
    hindiTitle: 'सोशल मीडिया डिज़ाइन',
    categoryKey: 'social',
    position: 'bottom',
    x: 235,
    trackY: 295,
    boxY: 335,
  },
  {
    id: 'station-03',
    number: '03',
    title: 'PACKAGING DESIGN',
    hindiTitle: 'पैकेजिंग डिज़ाइन',
    categoryKey: 'packaging',
    position: 'top',
    x: 450,
    trackY: 120,
    boxY: 72,
  },
  {
    id: 'station-04',
    number: '04',
    title: 'CREATIVE PIECES',
    hindiTitle: 'क्रिएटिव पीसेज़',
    categoryKey: 'creative',
    position: 'bottom',
    x: 640,
    trackY: 295,
    boxY: 335,
  },
  {
    id: 'station-05',
    number: '05',
    title: 'AI VIDEO ADS',
    hindiTitle: 'एआई वीडियो विज्ञापन',
    categoryKey: 'ai-video',
    position: 'top',
    x: 820,
    trackY: 120,
    boxY: 72,
  },
  {
    id: 'station-06',
    number: '06',
    title: 'BRAND IDENTITY DESIGN',
    hindiTitle: 'ब्रांड पहचान डिज़ाइन',
    categoryKey: 'branding',
    position: 'bottom',
    x: 935,
    trackY: 260,
    boxY: 300,
  },
];

interface RailwayTrackJourneyProps {
  onSelectStation?: (categoryKey: string) => void;
}

export const RailwayTrackJourney: React.FC<RailwayTrackJourneyProps> = ({ onSelectStation }) => {
  const [selectedStationId, setSelectedStationId] = useState<string>('station-02');
  const [hoveredStationId, setHoveredStationId] = useState<string | null>(null);

  const handleStationClick = (station: StationData) => {
    setSelectedStationId(station.id);

    // Audio click feedback
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(540, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.13);
      }
    } catch {
      // Audio fallback
    }

    if (onSelectStation) {
      onSelectStation(station.categoryKey);
    }

    // Scroll to relevant station section
    if (station.categoryKey === 'packaging' || station.number === '03') {
      const el = document.getElementById('packaging');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }

    if (station.categoryKey === 'creative' || station.number === '04') {
      const el = document.getElementById('creativesar');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }

    if (station.categoryKey === 'ai-video' || station.number === '05') {
      const el = document.getElementById('ai-videos');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }

    // Station 01, 02, 06 -> projects / social media
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      setTimeout(() => projectsEl.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  // Authentic SVG Railway Track Loop & Sine Waves (matches reference image media_1790342471154.jpg)
  const trackPath = `
    M 0 220 
    L 90 220 
    C 130 220, 140 160, 150 120 
    C 160 65, 230 65, 240 120 
    C 250 170, 210 225, 150 225 
    C 120 225, 145 295, 230 295 
    C 310 295, 370 120, 450 120 
    C 530 120, 570 295, 640 295 
    C 710 295, 750 120, 820 120 
    C 890 120, 930 260, 1000 260
  `;

  return (
    <div id="whats-inside" className="mt-16 pt-12 border-t-2 border-dashed border-[#D5CDBD] relative">
      {/* Section Header: "WHAT'S INSIDE अंदर क्या है ?" matching reference */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-railway text-[#821919] uppercase tracking-wide leading-none">
              WHAT’S INSIDE
            </h2>
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-hindi text-[#821919] leading-none">
              अंदर क्या है ?
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-mono">
            Interactive Route Map · Click any station to inspect portfolio stops
          </p>
        </div>

        {/* Selected Station Quick Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-black/25 text-xs font-mono font-bold text-black shadow-xs">
          <Train className="w-3.5 h-3.5 text-[#821919]" />
          <span>Stop {stationsList.find((s) => s.id === selectedStationId)?.number} · {stationsList.find((s) => s.id === selectedStationId)?.title}</span>
        </div>
      </div>

      {/* SVG Canvas - Rendered directly on the parchment paper with NO heavy container border */}
      <div className="relative w-full overflow-x-auto pb-4 select-none">
        <div className="min-w-[800px] md:min-w-[950px] relative aspect-[1000/380] w-full">
          <svg
            viewBox="0 0 1000 380"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="track-shadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* 1. Track Bed Ground Shadow */}
            <path
              d={trackPath}
              fill="none"
              stroke="#D6CEBE"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
            />

            {/* 2. Track Wooden Sleepers (Cross-Ties) */}
            <path
              d={trackPath}
              fill="none"
              stroke="#262320"
              strokeWidth="18"
              strokeDasharray="4 11"
              strokeLinecap="butt"
              strokeLinejoin="round"
            />

            {/* 3. Outer Steel Rail Profiles */}
            <path
              d={trackPath}
              fill="none"
              stroke="#111111"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 4. Hollow Center revealing sleepers between rails */}
            <path
              d={trackPath}
              fill="none"
              stroke="#F4EFEB"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 5. Station Leader Lines & Connectors */}
            {stationsList.map((station) => {
              const isSelected = selectedStationId === station.id;
              const isHovered = hoveredStationId === station.id;

              return (
                <g key={`connector-${station.id}`}>
                  {/* Dashed vertical leader line connecting track to station card */}
                  <line
                    x1={station.x}
                    y1={station.trackY}
                    x2={station.x}
                    y2={station.boxY}
                    stroke={isSelected || isHovered ? '#821919' : '#111111'}
                    strokeWidth={isSelected || isHovered ? '2' : '1.5'}
                    strokeDasharray="3 3"
                  />

                  {/* Pin circle at connection point on track */}
                  <circle
                    cx={station.x}
                    cy={station.trackY}
                    r={isSelected || isHovered ? '5' : '3.5'}
                    fill={isSelected || isHovered ? '#FFD200' : '#111111'}
                    stroke="#111111"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}
          </svg>

          {/* 6. HTML Station Boards matching reference layout */}
          {stationsList.map((station) => {
            const isSelected = selectedStationId === station.id;
            const isHovered = hoveredStationId === station.id;

            return (
              <div
                key={station.id}
                style={{
                  left: `${(station.x / 1000) * 100}%`,
                  top: `${(station.boxY / 380) * 100}%`,
                }}
                onClick={() => handleStationClick(station)}
                onMouseEnter={() => setHoveredStationId(station.id)}
                onMouseLeave={() => setHoveredStationId(null)}
                className={`absolute transform -translate-x-1/2 cursor-pointer group z-20 transition-transform duration-200 ${
                  station.position === 'top' ? '-translate-y-full mb-1' : 'translate-y-0 mt-1'
                } ${isSelected ? 'scale-105' : 'hover:scale-105'}`}
              >
                <div className="flex flex-col items-center">
                  {/* For TOP stations: Title is above the box */}
                  {station.position === 'top' && (
                    <div className="text-center mb-1">
                      <span className="text-[12px] md:text-[13px] font-black font-railway text-[#821919] uppercase tracking-wide block whitespace-nowrap drop-shadow-2xs">
                        {station.title}
                      </span>
                    </div>
                  )}

                  {/* Clean Station Number Tag Box [ 01 ] */}
                  <div
                    className={`px-3 py-0.5 rounded-sm border-2 text-xs md:text-sm font-mono font-black shadow-xs transition-colors duration-150 ${
                      isSelected || isHovered
                        ? 'bg-[#FFD200] border-black text-black'
                        : 'bg-white border-black text-black group-hover:bg-[#FFD200]'
                    }`}
                  >
                    {station.number}
                  </div>

                  {/* For BOTTOM stations: Title is below the box */}
                  {station.position === 'bottom' && (
                    <div className="text-center mt-1">
                      <span className="text-[12px] md:text-[13px] font-black font-railway text-[#821919] uppercase tracking-wide block whitespace-nowrap drop-shadow-2xs">
                        {station.title}
                      </span>
                    </div>
                  )}

                  {/* Active Arriving Indicator */}
                  {isSelected && (
                    <div className="mt-1 flex items-center gap-1 bg-[#821919] text-white px-2 py-0.5 rounded text-[9px] font-mono font-bold animate-pulse">
                      <Train className="w-2.5 h-2.5" />
                      <span>STOP</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Station Cards (Fast Tap Grid for Smartphones) */}
      <div className="md:hidden mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {stationsList.map((station) => {
          const isSelected = selectedStationId === station.id;
          return (
            <button
              key={`mobile-${station.id}`}
              onClick={() => handleStationClick(station)}
              className={`p-3 rounded-lg border-2 text-left transition-all ${
                isSelected
                  ? 'bg-[#FFD200] border-black shadow-md'
                  : 'bg-white border-black/40 hover:border-black'
              }`}
            >
              <div className="text-xs font-mono font-bold text-zinc-600 mb-0.5">
                STOP {station.number}
              </div>
              <div className="text-xs font-black font-railway text-[#821919] uppercase leading-tight">
                {station.title}
              </div>
              <div className="text-[10px] font-hindi text-zinc-700 mt-0.5">
                {station.hindiTitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
