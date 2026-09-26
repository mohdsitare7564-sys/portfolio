import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ChevronDown, ChevronUp, Navigation } from 'lucide-react';

export interface SectionNode {
  id: string;
  number: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  fraction: number; // 0 to 1 along path length
}

export const SECTIONS: SectionNode[] = [
  {
    id: 'hero',
    number: '00',
    title: 'START',
    hindiTitle: 'आरंभ',
    subtitle: 'Portfoliopur Junction',
    fraction: 0.0,
  },
  {
    id: 'about',
    number: '01',
    title: 'ABOUT',
    hindiTitle: 'परिचय',
    subtitle: 'Bio & Dossier',
    fraction: 0.166,
  },
  {
    id: 'projects',
    number: '02',
    title: 'SOCIAL MEDIA',
    hindiTitle: 'डिजिटल धाम',
    subtitle: 'Posters & Campaigns',
    fraction: 0.333,
  },
  {
    id: 'packaging',
    number: '03',
    title: 'PACKAGING',
    hindiTitle: 'पैकेजिंगगढ़',
    subtitle: 'Packaging Designs',
    fraction: 0.5,
  },
  {
    id: 'creativesar',
    number: '04',
    title: 'CREATIVES',
    hindiTitle: 'क्रिएटिवसर',
    subtitle: '2D/3D Artworks',
    fraction: 0.666,
  },
  {
    id: 'ai-videos',
    number: '05',
    title: 'AI VIDEO ADS',
    hindiTitle: 'चलचित्र गढ़',
    subtitle: 'Slurrp Farm & AI Ads',
    fraction: 0.833,
  },
  {
    id: 'contact',
    number: '06',
    title: 'CONTACT',
    hindiTitle: 'संपर्क',
    subtitle: 'Ticket Booking Hub',
    fraction: 1.0,
  },
];

// Clean, bold, elegant curved track path (viewBox 0 0 100 550)
const BOLD_TRACK_PATH_D = `
  M 50, 25
  C 74, 100   26, 180   50, 275
  C 74, 370   26, 450   50, 525
`;

export const TrailPathNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobileExpanded, setIsMobileExpanded] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Precomputed station coordinates along SVG curve
  const [stationCoords, setStationCoords] = useState<{ [key: string]: { x: number; y: number } }>({});

  const pathRef = useRef<SVGPathElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollProgressRef = useRef<number>(0);
  const smoothProgressRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);

  // Three.js Engine references for 3D Train & Flying Smoke
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    trainGroup: THREE.Group;
    wheels: THREE.Mesh[];
    smokeParticles: { mesh: THREE.Mesh; opacity: number; scale: number; speedY: number; speedZ: number }[];
    prevProgress: number;
    wheelRotation: number;
    isFacingUp: boolean;
  } | null>(null);

  // 1. Calculate Station Coordinates on SVG Path
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    const coords: { [key: string]: { x: number; y: number } } = {};
    SECTIONS.forEach((sec) => {
      const pt = path.getPointAtLength(sec.fraction * totalLength);
      coords[sec.id] = { x: pt.x, y: pt.y };
    });
    setStationCoords(coords);
  }, []);

  // 2. Direct Instant Scroll Synchronization
  useEffect(() => {
    const updatePositionOnScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = totalScrollable > 0 ? window.scrollY / totalScrollable : 0;
      const prog = Math.min(Math.max(rawProgress, 0), 1);
      scrollProgressRef.current = prog;
      setScrollProgress(prog);
    };

    window.addEventListener('scroll', updatePositionOnScroll, { passive: true });
    updatePositionOnScroll();

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', updatePositionOnScroll);
      observer.disconnect();
    };
  }, []);

  // 3. FULL WEBGL 3D LOCOMOTIVE PHYSICS ENGINE (ULTRA-SMOOTH LERP IN BOTH DIRECTIONS)
  useEffect(() => {
    if (!canvasContainerRef.current) return;
    const container = canvasContainerRef.current;
    const width = container.clientWidth || 100;
    const height = container.clientHeight || 550;

    // Create 3D Scene
    const scene = new THREE.Scene();

    // Orthographic Camera aligned 1:1 with SVG coordinate space (0 to 100 X, 0 to 550 Y)
    const camera = new THREE.OrthographicCamera(0, 100, 0, 550, -100, 100);
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffd200, 2.0);
    dirLight.position.set(30, -50, 40);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x821919, 1.0);
    rimLight.position.set(-20, 50, -20);
    scene.add(rimLight);

    // BUILD 3D LOCOMOTIVE ENGINE IN 3D SPACE
    const trainGroup = new THREE.Group();

    // 1. Engine Main Body Hood
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x821919, metalness: 0.7, roughness: 0.3 });
    const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(16, 26, 12), bodyMat);
    bodyMesh.position.z = 6;
    trainGroup.add(bodyMesh);

    // 2. Yellow Chevron Stripe
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffd200, metalness: 0.8 });
    const stripeMesh = new THREE.Mesh(new THREE.BoxGeometry(16.5, 3.5, 12.2), stripeMat);
    stripeMesh.position.z = 5.5;
    trainGroup.add(stripeMesh);

    // 3. Driver's Cabin Roof
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, metalness: 0.6 });
    const cabinMesh = new THREE.Mesh(new THREE.BoxGeometry(15, 10, 10), cabinMat);
    cabinMesh.position.set(0, 7, 11);
    trainGroup.add(cabinMesh);

    // Cockpit Windows (Amber Glow)
    const windowMat = new THREE.MeshStandardMaterial({ color: 0xffd200, emissive: 0xffd200, emissiveIntensity: 1.2 });
    const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(15.2, 4, 6), windowMat);
    windowMesh.position.set(0, 7, 12);
    trainGroup.add(windowMesh);

    // Roof Chimney
    const chimneyMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(2, 2, 6, 16),
      new THREE.MeshStandardMaterial({ color: 0x111111 })
    );
    chimneyMesh.rotation.x = Math.PI / 2;
    chimneyMesh.position.set(0, -7, 14);
    trainGroup.add(chimneyMesh);

    // Front Cowcatcher Plow
    const plowMesh = new THREE.Mesh(
      new THREE.ConeGeometry(8, 6, 4),
      new THREE.MeshStandardMaterial({ color: 0x111111 })
    );
    plowMesh.rotation.x = -Math.PI / 4;
    plowMesh.position.set(0, -14, 3);
    trainGroup.add(plowMesh);

    // Dual Headlights
    const hlMat = new THREE.MeshStandardMaterial({ color: 0xfff4a3, emissive: 0xfff4a3, emissiveIntensity: 2 });
    const hlL = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 1.5, 12), hlMat);
    hlL.position.set(-5, -13, 6);
    trainGroup.add(hlL);

    const hlR = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 1.5, 12), hlMat);
    hlR.position.set(5, -13, 6);
    trainGroup.add(hlR);

    // SPINNING 3D WHEELS (Mechanical wheel rotation)
    const wheels: THREE.Mesh[] = [];
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.9 });
    const wheelGeo = new THREE.CylinderGeometry(3.2, 3.2, 2.2, 16);

    const wheelLocs = [
      [-8.5, -8, 2],
      [8.5, -8, 2],
      [-8.5, 0, 2],
      [8.5, 0, 2],
      [-8.5, 8, 2],
      [8.5, 8, 2],
    ];

    wheelLocs.forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.y = Math.PI / 2;
      wheel.position.set(wx, wy, wz);
      trainGroup.add(wheel);
      wheels.push(wheel);
    });

    scene.add(trainGroup);

    // 3D VOLUMETRIC FLYING SMOKE PARTICLES ("SMOKE IS FLY")
    const smokeParticles: { mesh: THREE.Mesh; opacity: number; scale: number; speedY: number; speedZ: number }[] = [];
    const smokeGeo = new THREE.DodecahedronGeometry(2.5, 1);

    for (let i = 0; i < 22; i++) {
      const smokeMat = new THREE.MeshBasicMaterial({
        color: 0xf5f2eb,
        transparent: true,
        opacity: 0.8,
      });
      const smokeMesh = new THREE.Mesh(smokeGeo, smokeMat);
      scene.add(smokeMesh);
      smokeParticles.push({
        mesh: smokeMesh,
        opacity: Math.random() * 0.7 + 0.3,
        scale: Math.random() * 0.5 + 0.5,
        speedY: -0.8 - Math.random() * 0.5,
        speedZ: 0.4 + Math.random() * 0.3,
      });
    }

    threeRef.current = {
      scene,
      camera,
      renderer,
      trainGroup,
      wheels,
      smokeParticles,
      prevProgress: 0,
      wheelRotation: 0,
      isFacingUp: false,
    };

    // 60FPS 3D LOCOMOTIVE PHYSICS DRIVING RENDER LOOP WITH BUTTER-SMOOTH LERP
    let animId: number;

    const animateLocomotivePhysics = () => {
      if (threeRef.current && pathRef.current) {
        const { scene, camera, renderer, trainGroup, wheels, smokeParticles } = threeRef.current;
        const path = pathRef.current;
        const totalLength = path.getTotalLength();

        // 1. Smooth lerp for scroll progress (0.14 factor for butter-smooth fluid motion in both directions)
        const targetProg = scrollProgressRef.current;
        smoothProgressRef.current += (targetProg - smoothProgressRef.current) * 0.14;
        const currentProg = Math.min(Math.max(smoothProgressRef.current, 0), 1);

        // 2. Compute travel speed delta for orientation and wheel rotation
        const deltaProgress = currentProg - threeRef.current.prevProgress;
        threeRef.current.prevProgress = currentProg;

        // Smooth direction detection threshold
        if (deltaProgress < -0.0003) {
          threeRef.current.isFacingUp = true;
        } else if (deltaProgress > 0.0003) {
          threeRef.current.isFacingUp = false;
        }

        const isFacingUp = threeRef.current.isFacingUp;

        // Extract 2D/3D Path Coordinates along track
        const currentDist = currentProg * totalLength;
        const pt = path.getPointAtLength(currentDist);

        const nextDist = Math.min(currentDist + (isFacingUp ? -2 : 2), totalLength);
        const ptNext = path.getPointAtLength(Math.max(0, nextDist));

        const dx = ptNext.x - pt.x;
        const dy = ptNext.y - pt.y;
        const targetAngleRad = Math.atan2(dy, dx) + Math.PI / 2;

        // Smooth angle lerp for 180° turns so direction flip is butter-smooth!
        let angleDiff = targetAngleRad - currentRotationRef.current;
        angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff)); // Normalize to [-PI, PI]
        currentRotationRef.current += angleDiff * 0.12;

        // Position 3D Train Engine
        trainGroup.position.set(pt.x, pt.y, 10);
        trainGroup.rotation.z = currentRotationRef.current;

        // Mechanical Wheel Spin Physics: Wheels always spin forward in direction of travel
        const travelDist = Math.abs(deltaProgress * totalLength);
        const wheelRadius = 3.2;

        threeRef.current.wheelRotation += travelDist / wheelRadius;
        const currentWheelRot = threeRef.current.wheelRotation;

        wheels.forEach((w) => {
          w.rotation.x = currentWheelRot;
        });

        // Locomotive Body Chugging Vibration
        const speedMagnitude = Math.abs(deltaProgress);
        const chugVibration = Math.sin(Date.now() * 0.04) * 0.8 * (speedMagnitude > 0.0001 ? 1.5 : 0.4);
        trainGroup.position.z = 10 + chugVibration;

        // Centrifugal Body Roll on track curves
        const curveCurvature = (currentRotationRef.current - Math.PI / 2) * 0.4;
        trainGroup.rotation.y = curveCurvature * 0.25;

        // ANIMATE VOLUMETRIC FLYING SMOKE PUFFS ("SMOKE IS FLY")
        smokeParticles.forEach((sp) => {
          const smokeDirectionY = isFacingUp ? 0.8 : -0.8;
          sp.mesh.position.y += smokeDirectionY;
          sp.mesh.position.z += sp.speedZ;
          sp.scale += 0.04;
          (sp.mesh.material as THREE.MeshBasicMaterial).opacity -= 0.02;

          // Reset smoke particles to chimney stack location
          if ((sp.mesh.material as THREE.MeshBasicMaterial).opacity <= 0) {
            const chimneyYOffset = isFacingUp ? 6 : -6;
            sp.mesh.position.set(pt.x + (Math.random() - 0.5) * 3, pt.y + chimneyYOffset, 20);
            sp.scale = 0.5;
            (sp.mesh.material as THREE.MeshBasicMaterial).opacity = 0.8;
          }
        });

        renderer.render(scene, camera);
      }

      animId = requestAnimationFrame(animateLocomotivePhysics);
    };

    animateLocomotivePhysics();

    return () => {
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeId);
  const currentSection = SECTIONS[activeIndex >= 0 ? activeIndex : 0];

  const handleStationClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(360, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.11);
      }
    } catch {
      // Fallback
    }
  };

  const scrollToNext = () => {
    const nextIdx = Math.min(activeIndex + 1, SECTIONS.length - 1);
    handleStationClick(SECTIONS[nextIdx].id);
  };

  const scrollToPrev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    handleStationClick(SECTIONS[prevIdx].id);
  };

  return (
    <>
      {/* DESKTOP SIDEBAR: CRISP BOLD RAILWAY TRACK + FULL-CANVAS WEBGL 3D LOCOMOTIVE ENGINE DRIVING FORWARD WITH BUTTER-SMOOTH EASING */}
      <aside
        aria-label="Railway Section Navigation Trail"
        className="fixed left-3 xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none"
      >
        {/* Parchment Box Frame */}
        <div className="relative bg-[#FAF7F0]/95 backdrop-blur-md border-2 border-black/80 rounded-2xl p-2.5 shadow-2xl flex flex-col items-center group min-w-[140px]">
          {/* Top Header Label */}
          <div className="flex flex-col items-center mb-1 pb-1.5 border-b border-black/20 w-full text-center">
            <span className="text-[9px] font-mono font-black text-[#821919] uppercase tracking-widest leading-none">
              ROUTE TRAIL
            </span>
            <span className="text-[10px] font-black font-railway text-black tracking-wider uppercase mt-0.5">
              3D EXPRESS · STOPS
            </span>
          </div>

          {/* SVG Canvas with Crisp Visible Track */}
          <div className="relative w-[100px] h-[540px]">
            <svg
              viewBox="0 0 100 550"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Active progress rail gradient */}
                <linearGradient id="glowing-rail-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#821919" />
                  <stop offset="60%" stopColor="#D92626" />
                  <stop offset="100%" stopColor="#FFD200" />
                </linearGradient>
              </defs>

              {/* 1. Track Ground Shadow */}
              <path
                d={BOLD_TRACK_PATH_D}
                fill="none"
                stroke="#D6CEBE"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 2. Wooden Sleepers (Ties along curve) */}
              <path
                d={BOLD_TRACK_PATH_D}
                fill="none"
                stroke="#2B2520"
                strokeWidth="14"
                strokeDasharray="2.5 8"
                strokeLinecap="butt"
                strokeLinejoin="round"
              />

              {/* 3. Outer Steel Rails */}
              <path
                d={BOLD_TRACK_PATH_D}
                fill="none"
                stroke="#111111"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 4. Center Track Bed */}
              <path
                ref={pathRef}
                d={BOLD_TRACK_PATH_D}
                fill="none"
                stroke="#FAF7F0"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 5. Active Glowing Filled Rail Line */}
              {pathRef.current && (
                <path
                  d={BOLD_TRACK_PATH_D}
                  fill="none"
                  stroke="url(#glowing-rail-grad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={`${pathRef.current.getTotalLength()}`}
                  strokeDashoffset={`${pathRef.current.getTotalLength() * (1 - scrollProgress)}`}
                  className="transition-all duration-75"
                />
              )}

              {/* 6. Station Nodes on the Track */}
              {SECTIONS.map((sec) => {
                const pt = stationCoords[sec.id] || { x: 50, y: 25 };
                const isActive = activeId === sec.id;
                const isHovered = hoveredId === sec.id;

                return (
                  <g
                    key={`station-node-${sec.id}`}
                    className="cursor-pointer group/node"
                    onClick={() => handleStationClick(sec.id)}
                    onMouseEnter={() => setHoveredId(sec.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {isActive && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="12"
                        fill="none"
                        stroke="#FFD200"
                        strokeWidth="2"
                        className="animate-ping opacity-75"
                      />
                    )}

                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isActive || isHovered ? '9' : '7.5'}
                      fill={isActive ? '#FFD200' : isHovered ? '#FFFFFF' : '#FAF7F0'}
                      stroke="#111111"
                      strokeWidth={isActive || isHovered ? '2.5' : '1.5'}
                      className="transition-all duration-150"
                    />

                    <text
                      x={pt.x}
                      y={pt.y + 3}
                      textAnchor="middle"
                      fill="#111111"
                      fontSize={isActive || isHovered ? '8.5px' : '7.5px'}
                      fontWeight="900"
                      fontFamily="monospace"
                      className="select-none pointer-events-none"
                    >
                      {sec.number}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* 7. FULL-CANVAS THREE.JS WEBGL 3D LOCOMOTIVE ENGINE CANVAS */}
            <div
              ref={canvasContainerRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-30"
            />

            {/* Station Hover / Active Tooltip Popouts */}
            {SECTIONS.map((sec) => {
              const pt = stationCoords[sec.id] || { x: 50, y: 25 };
              const isActive = activeId === sec.id;
              const isHovered = hoveredId === sec.id;

              if (!isActive && !isHovered) return null;

              return (
                <div
                  key={`tooltip-${sec.id}`}
                  style={{
                    left: `${(pt.x / 100) * 100}%`,
                    top: `${(pt.y / 550) * 100}%`,
                  }}
                  className="absolute pointer-events-none z-50 transform translate-x-3.5 -translate-y-1/2 whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="bg-[#12141A] text-white border-2 border-[#FFD200] px-3 py-1.5 rounded-xl shadow-2xl flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFD200] animate-pulse" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#FFD200] font-bold">
                          [{sec.number}]
                        </span>
                        <span className="text-xs font-black font-railway uppercase tracking-wide">
                          {sec.title}
                        </span>
                        <span className="text-[10px] font-hindi text-zinc-300">
                          {sec.hindiTitle}
                        </span>
                      </div>
                      <p className="text-[9px] font-mono text-zinc-400 leading-none mt-0.5">
                        {sec.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Progress Counter */}
          <div className="mt-1 pt-1.5 border-t border-black/20 flex flex-col items-center w-full">
            <div className="px-2.5 py-1 rounded bg-[#821919] text-[#FFD200] border border-black text-[9px] font-mono font-black tracking-wider shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD200] animate-ping" />
              <span>{Math.round(scrollProgress * 100)}% DISPATCH</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE & TABLET FLOATING TRAIL BAR (Bottom Center) */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm select-none">
        <div className="bg-[#FAF7F0]/95 backdrop-blur-md border-2 border-black rounded-xl p-2.5 shadow-2xl">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={scrollToPrev}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-lg bg-white border border-black/30 text-black disabled:opacity-40 hover:bg-[#FFD200] transition-colors"
              aria-label="Previous section"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className="flex-1 flex items-center justify-between px-3 py-1.5 bg-white border border-black/40 rounded-lg shadow-xs hover:border-black transition-all"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#821919] text-[#FFD200] flex items-center justify-center font-mono font-bold text-[10px]">
                  {currentSection.number}
                </div>
                <div className="text-left">
                  <div className="text-xs font-black font-railway uppercase text-black leading-none">
                    {currentSection.title}
                  </div>
                  <div className="text-[9px] font-hindi text-zinc-600 leading-none mt-0.5">
                    {currentSection.hindiTitle}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono font-bold text-[#821919]">
                  {activeIndex + 1}/{SECTIONS.length}
                </span>
                <Navigation className={`w-3.5 h-3.5 text-zinc-600 transition-transform ${isMobileExpanded ? 'rotate-180' : ''}`} />
              </div>
            </button>

            <button
              onClick={scrollToNext}
              disabled={activeIndex === SECTIONS.length - 1}
              className="p-1.5 rounded-lg bg-white border border-black/30 text-black disabled:opacity-40 hover:bg-[#FFD200] transition-colors"
              aria-label="Next section"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full h-1 bg-zinc-200 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#821919] via-[#C82323] to-[#FFD200] transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {isMobileExpanded && (
            <div className="mt-2 pt-2 border-t border-black/20 grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto font-mono text-[11px]">
              {SECTIONS.map((sec) => (
                <button
                  key={`mobile-grid-${sec.id}`}
                  onClick={() => {
                    handleStationClick(sec.id);
                    setIsMobileExpanded(false);
                  }}
                  className={`p-1.5 rounded text-left border flex items-center gap-1.5 transition-all ${
                    activeId === sec.id
                      ? 'bg-[#FFD200] border-black text-black font-bold'
                      : 'bg-white border-black/20 text-zinc-800 hover:border-black'
                  }`}
                >
                  <span className="font-bold text-[9px] px-1 bg-[#821919] text-white rounded">
                    {sec.number}
                  </span>
                  <span className="truncate uppercase font-railway font-black text-xs">
                    {sec.title}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
