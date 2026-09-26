import React, { useState } from 'react';
import {
  PenTool,
  Layers,
  Layout,
  Sparkles,
  CheckCircle2,
  Sliders,
  Eye,
  Command,
  Monitor,
  Printer,
  Zap,
  Maximize2,
  FileCode,
  FolderGit2,
  Wand2,
  Compass,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { softwareSkills, secondaryTools } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number>(0);
  const [inspectMode, setInspectMode] = useState<'render' | 'technical'>('render');
  const [viewLayout, setViewLayout] = useState<'studio' | 'grid'>('studio');

  const currentTool = softwareSkills[activeSkill] || softwareSkills[0];

  return (
    <section id="skills" className="py-24 bg-[#090A0E] relative overflow-hidden select-none">
      {/* Background Graphic Ambience */}
      <div className="absolute inset-0 bg-topo-dense opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: currentTool.badgeColor }}
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: currentTool.badgeColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] tracking-widest uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#F5A623]" />
              <span>// 03 · PROFESSIONAL DESIGN TOOLCHAIN</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display uppercase leading-none">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFD066] to-[#FF9A00]">Mastery</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
              Precision vector craft, commercial photo compositing, and presentation architecture calibrated for high-impact EdTech campaigns and brand identities.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-3 bg-[#11131C] p-1.5 rounded-2xl border border-white/10 self-start lg:self-end">
            <button
              onClick={() => setViewLayout('studio')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                viewLayout === 'studio'
                  ? 'bg-[#F5A623] text-black shadow-lg shadow-[#F5A623]/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Studio Console</span>
            </button>
            <button
              onClick={() => setViewLayout('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                viewLayout === 'grid'
                  ? 'bg-[#F5A623] text-black shadow-lg shadow-[#F5A623]/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Bento Cards</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: STUDIO CONSOLE (INTERACTIVE WORKSPACE SIMULATOR)     */}
        {/* ------------------------------------------------------------- */}
        {viewLayout === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Columns: Software Selector List */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider flex items-center justify-between px-1">
                <span>Select Tool to Inspect</span>
                <span className="text-[#F5A623]">Click card to inspect</span>
              </div>

              {softwareSkills.map((skill, index) => {
                const isActive = activeSkill === index;
                return (
                  <div
                    key={skill.name}
                    onClick={() => {
                      setActiveSkill(index);
                      setInspectMode('render');
                    }}
                    className={`relative p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left overflow-hidden group ${
                      isActive
                        ? 'bg-[#131622] shadow-2xl scale-[1.01]'
                        : 'bg-[#0E1017]/80 hover:bg-[#12141F] border-white/5 hover:border-white/20'
                    }`}
                    style={{
                      borderColor: isActive ? `${skill.badgeColor}80` : undefined,
                      boxShadow: isActive ? `0 12px 30px -10px ${skill.badgeColor}25` : undefined,
                    }}
                  >
                    {/* Glowing active accent bar */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1.5"
                        style={{ backgroundColor: skill.badgeColor }}
                      />
                    )}

                    <div className="flex items-start justify-between gap-4">
                      {/* Left: App Logo Badge & Name */}
                      <div className="flex items-center gap-3.5">
                        <div
                          className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-black text-xl font-display shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundColor: `${skill.badgeColor}18`,
                            borderColor: skill.badgeColor,
                            borderWidth: '2px',
                            color: skill.badgeColor,
                          }}
                        >
                          <span>{skill.iconLabel}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-white font-display group-hover:text-[#F5A623] transition-colors">
                              {skill.name}
                            </h3>
                            {isActive && (
                              <span
                                className="w-2 h-2 rounded-full animate-ping"
                                style={{ backgroundColor: skill.badgeColor }}
                              />
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 font-mono mt-0.5 line-clamp-1">
                            {skill.roleSubtitle || skill.experience}
                          </p>
                        </div>
                      </div>

                      {/* Right: Proficiency Metric */}
                      <div className="text-right shrink-0">
                        <div
                          className="text-2xl font-black font-display tabular-nums"
                          style={{ color: isActive ? skill.badgeColor : '#FFFFFF' }}
                        >
                          {skill.level}%
                        </div>
                        <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                          Mastery
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.badgeColor,
                        }}
                      />
                    </div>

                    {/* Quick Metric & Deliverables */}
                    <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
                        <Flame className="w-3 h-3 text-[#F5A623]" />
                        <span>{skill.deliverablesCount || `${skill.experience}`}</span>
                      </span>
                      <span
                        className="text-[11px] font-mono font-semibold"
                        style={{ color: skill.badgeColor }}
                      >
                        {skill.fileExtension || '.PRO'}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Supporting Toolkit Mini-Bar */}
              <div className="p-4 rounded-2xl bg-[#0E1017]/60 border border-white/5">
                <div className="text-[11px] font-mono uppercase text-zinc-400 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span>Secondary Design Tools</span>
                  </span>
                  <span className="text-zinc-500">4 Active</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {secondaryTools.map((sec) => (
                    <div
                      key={sec.name}
                      className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-all"
                      title={`${sec.name} · ${sec.category}`}
                    >
                      <span
                        className="text-xs font-black font-display"
                        style={{ color: sec.color }}
                      >
                        {sec.icon}
                      </span>
                      <span className="text-[10px] text-zinc-300 font-mono mt-0.5 truncate max-w-full">
                        {sec.name.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Live Studio Console */}
            <div className="lg:col-span-7">
              <div
                className="relative rounded-3xl bg-[#10121A] border transition-all duration-300 shadow-2xl overflow-hidden flex flex-col"
                style={{ borderColor: `${currentTool.badgeColor}40` }}
              >
                {/* Console Chrome Window Titlebar */}
                <div className="px-5 py-3.5 bg-[#0A0B10] border-b border-white/10 flex items-center justify-between">
                  {/* Mac style window controls */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                    <span className="text-xs font-mono text-zinc-400 ml-3 truncate max-w-[200px] sm:max-w-xs">
                      Aquib_Studio / {currentTool.name.replace(/\s+/g, '_')}_Master
                      {currentTool.fileExtension ? currentTool.fileExtension.split('/')[0].trim() : '.art'}
                    </span>
                  </div>

                  {/* Inspector View Mode Toggle Button */}
                  <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setInspectMode('render')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                        inspectMode === 'render'
                          ? 'bg-white/15 text-white shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Artwork
                    </button>
                    <button
                      onClick={() => setInspectMode('technical')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                        inspectMode === 'technical'
                          ? 'bg-white/15 text-white shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Technical
                    </button>
                  </div>
                </div>

                {/* Main Interactive Studio Canvas Preview */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  {/* Software Identity Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${currentTool.badgeColor}20`,
                            color: currentTool.badgeColor,
                            border: `1px solid ${currentTool.badgeColor}40`,
                          }}
                        >
                          {currentTool.roleSubtitle}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          {currentTool.experience}
                        </span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-black text-white font-display mt-2 flex items-center gap-3">
                        <span>{currentTool.name}</span>
                        <span
                          className="text-xs font-mono font-bold px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: `${currentTool.badgeColor}15`,
                            color: currentTool.badgeColor,
                          }}
                        >
                          {currentTool.colorProfile || 'CMYK / sRGB'}
                        </span>
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono text-zinc-400 block">Deliverables</span>
                      <span className="text-base sm:text-lg font-bold text-white font-display">
                        {currentTool.deliverablesCount?.split('&')[0] || '100+ Assets'}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Visual Canvas Demo (Tool Specific) */}
                  <div className="relative w-full aspect-[16/9] min-h-[220px] rounded-2xl bg-[#08090D] border border-white/10 overflow-hidden flex items-center justify-center p-4">
                    {/* Subtle grid pattern background */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Canvas Ruler Marks */}
                    <div className="absolute top-2 left-3 text-[9px] font-mono text-zinc-600 select-none">
                      X: 1080px · Y: 1350px [Scale 100%]
                    </div>
                    <div className="absolute top-2 right-3 text-[9px] font-mono text-zinc-600 select-none">
                      {inspectMode === 'render' ? '● PREVIEW MODE' : '○ WIREFRAME & NODES'}
                    </div>

                    {/* -------------------- 1. ILLUSTRATOR CANVAS -------------------- */}
                    {activeSkill === 0 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {inspectMode === 'render' ? (
                          /* Full Color Geometric Vector Artwork */
                          <div className="flex flex-col items-center justify-center gap-3 text-center">
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                              {/* Geometric logo construction circle */}
                              <div className="absolute inset-0 rounded-full border-2 border-[#FF9A00]/40 animate-pulse" />
                              <div className="absolute inset-3 rounded-full border border-dashed border-[#F5A623]/60 rotate-45" />
                              <div className="absolute inset-6 rounded-2xl bg-gradient-to-tr from-[#FF9A00] to-[#F5A623] shadow-2xl shadow-[#FF9A00]/40 flex items-center justify-center rotate-12">
                                <span className="text-3xl sm:text-4xl font-black text-black font-display -rotate-12">
                                  Ai
                                </span>
                              </div>
                            </div>
                            <div className="text-xs font-mono text-zinc-300">
                              <span className="text-[#FF9A00] font-bold">Vector Construction:</span> Bezier
                              Precision & Curvature Tangents
                            </div>
                          </div>
                        ) : (
                          /* Technical Wireframe Mode (Ctrl+Y) */
                          <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <svg className="w-56 h-36" viewBox="0 0 300 180" fill="none">
                              {/* Coordinate Grid Guides */}
                              <line x1="0" y1="90" x2="300" y2="90" stroke="#FF9A00" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.6" />
                              <line x1="150" y1="0" x2="150" y2="180" stroke="#FF9A00" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.6" />
                              {/* Vector Bezier Curves */}
                              <path d="M40 140 C80 20, 220 20, 260 140" stroke="#00E5FF" strokeWidth="2" fill="none" />
                              <path d="M70 120 C120 50, 180 50, 230 120" stroke="#FF9A00" strokeWidth="1.5" fill="none" />
                              {/* Tangent Handles */}
                              <line x1="80" y1="20" x2="120" y2="20" stroke="#F5A623" strokeWidth="1" />
                              <line x1="220" y1="20" x2="180" y2="20" stroke="#F5A623" strokeWidth="1" />
                              {/* Anchor Nodes (White Squares) */}
                              <rect x="36" y="136" width="8" height="8" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
                              <rect x="76" y="16" width="8" height="8" fill="#FF9A00" stroke="#000000" strokeWidth="1" />
                              <rect x="216" y="16" width="8" height="8" fill="#FF9A00" stroke="#000000" strokeWidth="1" />
                              <rect x="256" y="136" width="8" height="8" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
                              <circle cx="120" cy="20" r="3" fill="#00E5FF" />
                              <circle cx="180" cy="20" r="3" fill="#00E5FF" />
                            </svg>
                            <span className="text-[11px] font-mono text-[#00E5FF] mt-2">
                              Vector Anchor Points & Tangent Handles (Ctrl + Y)
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* -------------------- 2. PHOTOSHOP CANVAS -------------------- */}
                    {activeSkill === 1 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {inspectMode === 'render' ? (
                          /* Commercial Composite Preview */
                          <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-white/10 p-4 bg-gradient-to-br from-[#0B1528] to-[#122340] shadow-xl">
                            <div className="flex items-center justify-between text-[11px] font-mono text-[#31A8FF] mb-2">
                              <span>EdTech Commercial Ad Plate</span>
                              <span>16-Bit ProPhoto</span>
                            </div>
                            <div className="h-20 rounded-lg bg-gradient-to-r from-amber-500/20 via-sky-500/30 to-blue-600/40 border border-sky-400/30 flex items-center justify-around px-4 relative overflow-hidden">
                              <div className="w-10 h-10 rounded-full bg-amber-400/80 blur-md absolute -left-2 top-0" />
                              <span className="text-xs font-bold text-white uppercase tracking-wider relative z-10">
                                Khan Sir Special Batch
                              </span>
                              <span className="px-2 py-1 bg-red-600 text-white font-black text-[10px] rounded relative z-10">
                                40% OFF
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mt-2">
                              <span>Lighting: Scrims & Softboxes</span>
                              <span className="text-emerald-400">Tone Graded</span>
                            </div>
                          </div>
                        ) : (
                          /* Layer Stack Breakdown */
                          <div className="w-full max-w-sm space-y-1.5 font-mono text-[11px]">
                            <div className="p-1.5 rounded bg-sky-950/60 border border-sky-500/40 text-sky-200 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Layers className="w-3 h-3 text-sky-400" />
                                <span>Layer 4: [LUT] Teal & Orange Cinematic</span>
                              </span>
                              <span className="text-[10px] opacity-75">Opacity 85%</span>
                            </div>
                            <div className="p-1.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-200 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                <span>Layer 3: [FX] Rim Light & Glow Flare</span>
                              </span>
                              <span className="text-[10px] opacity-75">Screen</span>
                            </div>
                            <div className="p-1.5 rounded bg-white/5 border border-white/10 text-zinc-200 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Sliders className="w-3 h-3 text-emerald-400" />
                                <span>Layer 2: [Retouch] Frequency Separation</span>
                              </span>
                              <span className="text-[10px] opacity-75">Normal</span>
                            </div>
                            <div className="p-1.5 rounded bg-white/5 border border-white/5 text-zinc-400 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Eye className="w-3 h-3 text-zinc-500" />
                                <span>Layer 1: [Base] Classroom Backdrop Scrim</span>
                              </span>
                              <span className="text-[10px] opacity-75">Multiply</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* -------------------- 3. FIGMA CANVAS -------------------- */}
                    {activeSkill === 2 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {inspectMode === 'render' ? (
                          /* Modern Presentation Slide / Social Component */
                          <div className="w-full max-w-sm p-4 rounded-2xl bg-gradient-to-br from-[#1C131D] to-[#120F16] border border-[#F24E1E]/40 shadow-xl">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-[#F24E1E] text-white flex items-center justify-center text-xs font-black">
                                  Fg
                                </div>
                                <span className="text-xs font-bold text-white">Component: SocialCard</span>
                              </div>
                              <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                                Variant=Active
                              </span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
                              <div className="font-bold text-white mb-1">Presentation Deck Slide</div>
                              <div className="text-[11px] text-zinc-400">
                                Multi-device design tokens & auto-layout spacing kits.
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Auto-Layout Inspect Geometry */
                          <div className="w-full max-w-sm border-2 border-dashed border-[#F24E1E] rounded-xl p-3 font-mono text-[10px] text-zinc-300 relative">
                            <div className="absolute -top-2.5 left-4 bg-[#08090D] px-1.5 text-[#F24E1E] font-bold">
                              Auto-Layout: Vertical ↓ (Gap: 16px, Pad: 24px)
                            </div>
                            <div className="border border-white/20 rounded p-2 mb-2 flex items-center justify-between bg-white/[0.02]">
                              <span>Frame: Header (Hug H)</span>
                              <span className="text-[#F24E1E]">Flex Grow: 1</span>
                            </div>
                            <div className="border border-white/20 rounded p-2 flex items-center justify-between bg-white/[0.02]">
                              <span>Frame: Button CTA (Fixed 48px)</span>
                              <span className="text-[#F24E1E]">Corner Radius: 12px</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Software Detailed Narrative */}
                  <p className="text-xs sm:text-sm text-zinc-300 mt-5 leading-relaxed">
                    {currentTool.description}
                  </p>

                  {/* Signature Hotkeys Strip */}
                  {currentTool.signatureHotkeys && currentTool.signatureHotkeys.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <div className="text-[11px] font-mono uppercase text-zinc-400 mb-2.5 flex items-center gap-1.5">
                        <Command className="w-3 h-3 text-[#F5A623]" />
                        <span>Signature Workflow Hotkeys:</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {currentTool.signatureHotkeys.map((hotkey) => (
                          <div
                            key={hotkey.key}
                            className="p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors"
                          >
                            <kbd
                              className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold inline-block"
                              style={{
                                backgroundColor: `${currentTool.badgeColor}20`,
                                color: currentTool.badgeColor,
                                border: `1px solid ${currentTool.badgeColor}40`,
                              }}
                            >
                              {hotkey.key}
                            </kbd>
                            <span className="block text-[10px] text-zinc-400 mt-1 truncate">
                              {hotkey.action}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specialties Pills Cloud */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {currentTool.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 hover:border-[#F5A623]/40 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VIEW 2: BENTO CARDS (ALL TOOLS SIDE-BY-SIDE OVERVIEW)        */}
        {/* ------------------------------------------------------------- */}
        {viewLayout === 'grid' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {softwareSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-3xl bg-[#11131C] border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
                  style={{
                    boxShadow: `0 10px 30px -15px ${skill.badgeColor}20`,
                  }}
                >
                  <div>
                    {/* Header: Icon & Percent */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl font-display shadow-lg"
                        style={{
                          backgroundColor: `${skill.badgeColor}18`,
                          borderColor: skill.badgeColor,
                          borderWidth: '2px',
                          color: skill.badgeColor,
                        }}
                      >
                        {skill.iconLabel}
                      </div>
                      <div className="text-right">
                        <div
                          className="text-3xl font-black font-display"
                          style={{ color: skill.badgeColor }}
                        >
                          {skill.level}%
                        </div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500">
                          Proficiency
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1 mb-4">
                      {skill.roleSubtitle}
                    </p>

                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.badgeColor,
                        }}
                      />
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      {skill.description}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.specialties.slice(0, 4).map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>{skill.deliverablesCount || skill.experience}</span>
                    <span style={{ color: skill.badgeColor }}>{skill.fileExtension}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Tools Grid */}
            <div className="rounded-3xl bg-[#0F1118] border border-white/10 p-6 md:p-8">
              <h4 className="text-lg font-bold text-white font-display mb-1 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#F5A623]" />
                <span>Supporting & Secondary Creative Toolkit</span>
              </h4>
              <p className="text-xs text-zinc-400 mb-6">
                Specialized production utilities used for offset press, editorial books, and high-speed ideation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {secondaryTools.map((sec) => (
                  <div
                    key={sec.name}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm font-display shrink-0"
                        style={{
                          backgroundColor: `${sec.color}15`,
                          borderColor: sec.color,
                          borderWidth: '1.5px',
                          color: sec.color,
                        }}
                      >
                        {sec.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-display group-hover:text-[#F5A623] transition-colors">
                          {sec.name}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">
                          {sec.category}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM ROW: CREATIVE HYGIENE & PRODUCTION BENCHMARKS         */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#11131C]/90 border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#F5A623]/15 text-[#F5A623] shrink-0">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white font-display">
                300 DPI Pre-Press Ready
              </h5>
              <p className="text-xs text-zinc-400 mt-1">
                CMYK color separations, crop marks, and bleed margins ready for offset & flex printing.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#11131C]/90 border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#31A8FF]/15 text-[#31A8FF] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white font-display">
                Dual Color Calibration
              </h5>
              <p className="text-xs text-zinc-400 mt-1">
                Zero color distortion between digital OLED phone displays and physical printing media.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#11131C]/90 border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#10B981]/15 text-[#10B981] shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white font-display">
                Clean Layer Hierarchy
              </h5>
              <p className="text-xs text-zinc-400 mt-1">
                Fully labeled groups, non-destructive smart objects, and organized source packages.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#11131C]/90 border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#A855F7]/15 text-[#A855F7] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white font-display">
                24-48h Rapid Turnaround
              </h5>
              <p className="text-xs text-zinc-400 mt-1">
                Fast execution on urgent batch admissions, YouTube thumbnails, and marketing launches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
