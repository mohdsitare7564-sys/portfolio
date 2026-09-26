import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ChevronDown, ChevronUp, Navigation, Volume2, VolumeX } from 'lucide-react';

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
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(false);

  // Precomputed station coordinates along SVG curve
  const [stationCoords, setStationCoords] = useState<{ [key: string]: { x: number; y: number } }>({});

  const pathRef = useRef<SVGPathElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollProgressRef = useRef<number>(0);
  const smoothProgressRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);

  // Web Audio API Context and Timers for "chuk chuk chuk" procedural train sound
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastChugTimeRef = useRef<number>(0);
  const chugCountRef = useRef<number>(0);
  const isMutedRef = useRef<boolean>(false);
  const lastPassedStationRef = useRef<string | null>(null);

  useEffect(() => {
    isMutedRef.current = isSoundMuted;
  }, [isSoundMuted]);

  // Unlock Web Audio API context on any user interaction across the window
  useEffect(() => {
    const unlockAudio = () => {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    };

    window.addEventListener('pointerdown', unlockAudio, { passive: true });
    window.addEventListener('scroll', unlockAudio, { passive: true });
    window.addEventListener('wheel', unlockAudio, { passive: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
      window.removeEventListener('wheel', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };
  }, []);

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

  // REALISTIC ACOUSTIC INDIAN RAILWAYS MULTI-CHIME AIR HORN
  const playTrainHorn = (ctx: AudioContext) => {
    try {
      const now = ctx.currentTime;
      // Multi-chime chord: Eb4, F#4, Bb4, Eb5 octave
      const chord = [311.13, 369.99, 466.16, 622.25];

      const hornMasterGain = ctx.createGain();
      hornMasterGain.gain.setValueAtTime(0, now);
      hornMasterGain.gain.linearRampToValueAtTime(0.35, now + 0.05);
      hornMasterGain.gain.setValueAtTime(0.35, now + 0.40);
      hornMasterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      // Acoustic Lowpass Filter to recreate horn housing resonance
      const bodyFilter = ctx.createBiquadFilter();
      bodyFilter.type = 'lowpass';
      bodyFilter.frequency.setValueAtTime(2200, now);

      chord.forEach((fundamental) => {
        // Create 2 detuned oscillators per chime note for rich chorus
        [-2.5, 2.5].forEach((detuneHz) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(fundamental + detuneHz, now);
          // Slight pitch droop during horn burst
          osc.frequency.exponentialRampToValueAtTime((fundamental + detuneHz) * 0.985, now + 0.75);

          oscGain.gain.value = 0.15;
          osc.connect(oscGain);
          oscGain.connect(bodyFilter);

          osc.start(now);
          osc.stop(now + 0.75);
        });
      });

      bodyFilter.connect(hornMasterGain);
      hornMasterGain.connect(ctx.destination);
    } catch {
      // Audio fallback
    }
  };

  // HIGH-FIDELITY ACOUSTIC TRAIN CHUG SYNTHESIZER ("CHUK-CHUK... CHUK-CHUK")
  const playChugPulse = (ctx: AudioContext, patternIndex: number) => {
    try {
      const now = ctx.currentTime;
      const isLeadChug = patternIndex % 2 === 0;

      // 1. Heavy Steel Wheel Impact ("CHUK")
      const thumpOsc = ctx.createOscillator();
      const thumpGain = ctx.createGain();
      thumpOsc.type = 'sine';
      thumpOsc.frequency.setValueAtTime(isLeadChug ? 110 : 85, now);
      thumpOsc.frequency.exponentialRampToValueAtTime(32, now + 0.08);

      thumpGain.gain.setValueAtTime(isLeadChug ? 0.45 : 0.28, now);
      thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      thumpOsc.connect(thumpGain);
      thumpGain.connect(ctx.destination);
      thumpOsc.start(now);
      thumpOsc.stop(now + 0.085);

      // 2. High-Pressure Steam & Track Friction Hiss ("CHUFF")
      const noiseLen = Math.floor(ctx.sampleRate * 0.07);
      const buffer = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
      const channel = buffer.getChannelData(0);
      for (let i = 0; i < noiseLen; i++) {
        // Pink-tinted random noise decay
        const env = Math.pow(1 - i / noiseLen, 1.8);
        channel[i] = (Math.random() * 2 - 1) * env;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(isLeadChug ? 1850 : 1350, now);
      bandpass.Q.setValueAtTime(2.2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(isLeadChug ? 0.35 : 0.22, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      noiseNode.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noiseNode.start(now);
      noiseNode.stop(now + 0.075);

      // 3. Steel Rail Joint Click ("CLACK")
      const clickNode = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickNode.type = 'sawtooth';
      clickNode.frequency.setValueAtTime(isLeadChug ? 2400 : 1800, now);
      clickNode.frequency.exponentialRampToValueAtTime(400, now + 0.015);

      clickGain.gain.setValueAtTime(0.18, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

      clickNode.connect(clickGain);
      clickGain.connect(ctx.destination);

      clickNode.start(now);
      clickNode.stop(now + 0.02);
    } catch {
      // Audio fallback
    }
  };

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

  // 3. FULL WEBGL 3D TRAIN SET IN ROYAL CRIMSON & GOLD LIVERY
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

    // Studio Lighting for glossy Royal Crimson & Gold Yellow Train
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.7);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffd200, 1.9);
    sunLight.position.set(40, -60, 50);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x9e1b1b, 1.4);
    rimLight.position.set(-30, 40, 20);
    scene.add(rimLight);

    // ==========================================
    // BUILD 3D TRAIN IN ROYAL CRIMSON & GOLD LIVERY
    // ==========================================
    const trainGroup = new THREE.Group();

    // Vibrant Materials
    const crimsonBodyMat = new THREE.MeshStandardMaterial({ color: 0x9e1b1b, metalness: 0.4, roughness: 0.2 });
    const goldStripeMat = new THREE.MeshStandardMaterial({ color: 0xffd200, metalness: 0.7, roughness: 0.3 });
    const blackNoseMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.8, roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.9 });
    const darkFrameMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.7, roughness: 0.4 });
    const roofEquipmentMat = new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.8, roughness: 0.3 });
    const bogieFrameMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.8, roughness: 0.5 });
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.9, roughness: 0.2 });
    const ledMat = new THREE.MeshStandardMaterial({ color: 0xfff4a3, emissive: 0xfff4a3, emissiveIntensity: 2.8 });

    const wheels: THREE.Mesh[] = [];

    // Helper to build a wheel bogie assembly
    const createBogie = (yPos: number) => {
      const bogie = new THREE.Group();
      bogie.position.set(0, yPos, 1.5);

      // Bogie base frame
      const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(13.5, 7.5, 1.8), bogieFrameMat);
      bogie.add(frameMesh);

      // 4 wheels per bogie
      const wheelGeo = new THREE.CylinderGeometry(2.2, 2.2, 1.6, 16);
      const wheelOffsets = [
        [-6.5, -2.5],
        [6.5, -2.5],
        [-6.5, 2.5],
        [6.5, 2.5],
      ];

      wheelOffsets.forEach(([wx, wy]) => {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(wx, wy, 0);
        bogie.add(wheel);
        wheels.push(wheel);
      });

      return bogie;
    };

    // ------------------------------------------
    // CAR 1: ROYAL CRIMSON & GOLD ENGINE NOSE CAR
    // ------------------------------------------
    const engineCar = new THREE.Group();
    engineCar.position.set(0, -11, 5);

    // 1. Deep Crimson Main Car Body
    const engineBody = new THREE.Mesh(new THREE.BoxGeometry(13, 20, 7.5), crimsonBodyMat);
    engineBody.position.set(0, 0, 0);
    engineCar.add(engineBody);

    // 2. Bold Golden Yellow Side Stripes
    const engineGoldStripe = new THREE.Mesh(new THREE.BoxGeometry(13.4, 20.1, 2.2), goldStripeMat);
    engineGoldStripe.position.set(0, 0, -1.2);
    engineCar.add(engineGoldStripe);

    // 3. Front Nose Chevron Accents (Golden Yellow)
    const chevronLeft = new THREE.Mesh(new THREE.BoxGeometry(1.2, 6, 2.4), goldStripeMat);
    chevronLeft.position.set(-6.2, -7, -1.1);
    engineCar.add(chevronLeft);

    const chevronRight = new THREE.Mesh(new THREE.BoxGeometry(1.2, 6, 2.4), goldStripeMat);
    chevronRight.position.set(6.2, -7, -1.1);
    engineCar.add(chevronRight);

    // 4. Front Windshield & Nose Mask (Polished Jet Black)
    const windshieldMesh = new THREE.Mesh(new THREE.BoxGeometry(11.8, 5.5, 4.5), blackNoseMat);
    windshieldMesh.position.set(0, -8.2, 1.6);
    engineCar.add(windshieldMesh);

    // Dark Nose Bumper
    const noseBumper = new THREE.Mesh(new THREE.BoxGeometry(11, 2, 4), darkFrameMat);
    noseBumper.position.set(0, -10.8, -1);
    engineCar.add(noseBumper);

    // 5. Embedded Twin Amber-White LED Headlight Bars
    const headlightL = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.8, 0.8), ledMat);
    headlightL.position.set(-3.5, -10.2, 0.8);
    engineCar.add(headlightL);

    const headlightR = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.8, 0.8), ledMat);
    headlightR.position.set(3.5, -10.2, 0.8);
    engineCar.add(headlightR);

    // 6. Side Passenger Windows
    const sideWindowL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 14, 2.2), glassMat);
    sideWindowL.position.set(-6.55, 1, 1.2);
    engineCar.add(sideWindowL);

    const sideWindowR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 14, 2.2), glassMat);
    sideWindowR.position.set(6.55, 1, 1.2);
    engineCar.add(sideWindowR);

    // 7. Roof HVAC Equipment
    const roofHVAC = new THREE.Mesh(new THREE.BoxGeometry(9, 7, 1.2), roofEquipmentMat);
    roofHVAC.position.set(0, 2, 4.2);
    engineCar.add(roofHVAC);

    // Bogies for Engine Car
    const engineBogie1 = createBogie(-5);
    engineCar.add(engineBogie1);

    const engineBogie2 = createBogie(5);
    engineCar.add(engineBogie2);

    trainGroup.add(engineCar);

    // ------------------------------------------
    // ACCORDION GANGWAY BELLOWS (Coupler)
    // ------------------------------------------
    const bellowsMesh = new THREE.Mesh(new THREE.BoxGeometry(10.5, 3.5, 6.5), darkFrameMat);
    bellowsMesh.position.set(0, 1, 5);
    trainGroup.add(bellowsMesh);

    // ------------------------------------------
    // CAR 2: ROYAL CRIMSON PASSENGER COACH
    // ------------------------------------------
    const coachCar = new THREE.Group();
    coachCar.position.set(0, 13, 5);

    // 1. Deep Crimson Coach Body
    const coachBody = new THREE.Mesh(new THREE.BoxGeometry(13, 20, 7.5), crimsonBodyMat);
    coachBody.position.set(0, 0, 0);
    coachCar.add(coachBody);

    // 2. Bold Golden Yellow Side Stripe
    const coachGoldStripe = new THREE.Mesh(new THREE.BoxGeometry(13.4, 20.1, 2.2), goldStripeMat);
    coachGoldStripe.position.set(0, 0, -1.2);
    coachCar.add(coachGoldStripe);

    // 3. Continuous Side Window Band
    const coachWindowL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 17, 2.2), glassMat);
    coachWindowL.position.set(-6.55, 0, 1.2);
    coachCar.add(coachWindowL);

    const coachWindowR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 17, 2.2), glassMat);
    coachWindowR.position.set(6.55, 0, 1.2);
    coachCar.add(coachWindowR);

    // 4. Roof AC Units
    const coachRoofHVAC = new THREE.Mesh(new THREE.BoxGeometry(9, 8, 1.2), roofEquipmentMat);
    coachRoofHVAC.position.set(0, 0, 4.2);
    coachCar.add(coachRoofHVAC);

    // Bogies for Coach Car
    const coachBogie1 = createBogie(-5);
    coachCar.add(coachBogie1);

    const coachBogie2 = createBogie(5);
    coachCar.add(coachBogie2);

    trainGroup.add(coachCar);

    scene.add(trainGroup);

    // ------------------------------------------
    // 3D VOLUMETRIC FLYING STEAM PUFFS
    // ------------------------------------------
    const steamParticles: { mesh: THREE.Mesh; opacity: number; scale: number; speedY: number; speedZ: number }[] = [];
    const steamGeo = new THREE.DodecahedronGeometry(2.2, 1);

    for (let i = 0; i < 25; i++) {
      const steamMat = new THREE.MeshBasicMaterial({
        color: 0xfdfbf7,
        transparent: true,
        opacity: 0.75,
      });
      const steamMesh = new THREE.Mesh(steamGeo, steamMat);
      scene.add(steamMesh);
      steamParticles.push({
        mesh: steamMesh,
        opacity: Math.random() * 0.7 + 0.3,
        scale: Math.random() * 0.5 + 0.5,
        speedY: -0.7 - Math.random() * 0.5,
        speedZ: 0.4 + Math.random() * 0.3,
      });
    }

    threeRef.current = {
      scene,
      camera,
      renderer,
      trainGroup,
      wheels,
      smokeParticles: steamParticles,
      prevProgress: 0,
      wheelRotation: 0,
      isFacingUp: false,
    };

    // 60FPS 3D TRAIN DRIVING LOOP WITH CHUK-CHUK SOUND SYNTHESIS
    let animId: number;

    const animateLocomotivePhysics = () => {
      if (threeRef.current && pathRef.current) {
        const { scene, camera, renderer, trainGroup, wheels, smokeParticles } = threeRef.current;
        const path = pathRef.current;
        const totalLength = path.getTotalLength();

        // Smooth lerp for scroll progress
        const targetProg = scrollProgressRef.current;
        smoothProgressRef.current += (targetProg - smoothProgressRef.current) * 0.14;
        const currentProg = Math.min(Math.max(smoothProgressRef.current, 0), 1);

        // Compute travel speed delta for orientation and wheel rotation
        const deltaProgress = currentProg - threeRef.current.prevProgress;
        threeRef.current.prevProgress = currentProg;

        if (deltaProgress < -0.0003) {
          threeRef.current.isFacingUp = true;
        } else if (deltaProgress > 0.0003) {
          threeRef.current.isFacingUp = false;
        }

        const isFacingUp = threeRef.current.isFacingUp;

        // PROCEDURAL RHYTHMIC "CHUK CHUK CHUK" TRAIN SOUND ENGINE
        const speedMagnitude = Math.abs(deltaProgress);
        if (!isMutedRef.current && speedMagnitude > 0.00005) {
          const nowMs = Date.now();
          const chugInterval = Math.max(110, 240 - speedMagnitude * 50000);

          if (nowMs - lastChugTimeRef.current > chugInterval) {
            lastChugTimeRef.current = nowMs;
            if (!audioCtxRef.current) {
              const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
              if (AudioCtx) audioCtxRef.current = new AudioCtx();
            }
            if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
              audioCtxRef.current.resume();
            }
            if (audioCtxRef.current) {
              const isAccent = chugCountRef.current % 2 === 0;
              chugCountRef.current++;
              playChugPulse(audioCtxRef.current, isAccent);
            }
          }
        }

        // AUTOMATIC LOCOMOTIVE HORN AT EACH STATION STOP ("POOO-POOO!")
        SECTIONS.forEach((sec) => {
          const distToStation = Math.abs(currentProg - sec.fraction);
          if (distToStation < 0.015 && lastPassedStationRef.current !== sec.id) {
            lastPassedStationRef.current = sec.id;
            if (!isMutedRef.current) {
              if (!audioCtxRef.current) {
                const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
                if (AudioCtx) audioCtxRef.current = new AudioCtx();
              }
              if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
                audioCtxRef.current.resume();
              }
              if (audioCtxRef.current) {
                playTrainHorn(audioCtxRef.current);
              }
            }
          }
        });

        // Extract 2D/3D Path Coordinates along track
        const currentDist = currentProg * totalLength;
        const pt = path.getPointAtLength(currentDist);

        const nextDist = Math.min(currentDist + (isFacingUp ? -2 : 2), totalLength);
        const ptNext = path.getPointAtLength(Math.max(0, nextDist));

        const dx = ptNext.x - pt.x;
        const dy = ptNext.y - pt.y;
        const targetAngleRad = Math.atan2(dy, dx) + Math.PI / 2;

        let angleDiff = targetAngleRad - currentRotationRef.current;
        angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
        currentRotationRef.current += angleDiff * 0.12;

        // Position 3D Train Group
        trainGroup.position.set(pt.x, pt.y, 8);
        trainGroup.rotation.z = currentRotationRef.current;

        // Mechanical Wheel Spin Physics: Wheels spin continuously along track
        const travelDist = Math.abs(deltaProgress * totalLength);
        const wheelRadius = 2.2;

        threeRef.current.wheelRotation += travelDist / wheelRadius;
        const currentWheelRot = threeRef.current.wheelRotation;

        wheels.forEach((w) => {
          w.rotation.x = currentWheelRot;
        });

        // Locomotive Body Chugging Vibration
        const chugVibration = Math.sin(Date.now() * 0.05) * 0.3 * (speedMagnitude > 0.0001 ? 1.2 : 0.2);
        trainGroup.position.z = 8 + chugVibration;

        // Smooth Banking on Curves
        const curveCurvature = (currentRotationRef.current - Math.PI / 2) * 0.3;
        trainGroup.rotation.y = curveCurvature * 0.2;

        // ANIMATE VOLUMETRIC FLYING STEAM PUFFS
        smokeParticles.forEach((sp) => {
          const steamDirectionY = isFacingUp ? 0.8 : -0.8;
          sp.mesh.position.y += steamDirectionY;
          sp.mesh.position.z += sp.speedZ;
          sp.scale += 0.04;
          (sp.mesh.material as THREE.MeshBasicMaterial).opacity -= 0.018;

          // Reset steam particles to train roof location
          if ((sp.mesh.material as THREE.MeshBasicMaterial).opacity <= 0) {
            const roofYOffset = isFacingUp ? 10 : -10;
            sp.mesh.position.set(pt.x + (Math.random() - 0.5) * 4, pt.y + roofYOffset, 15);
            sp.scale = 0.5;
            (sp.mesh.material as THREE.MeshBasicMaterial).opacity = 0.75;
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

    // Play Classic Indian Railways Locomotive Train Horn
    if (!isSoundMuted) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = audioCtxRef.current || new AudioCtx();
          if (ctx.state === 'suspended') ctx.resume();
          audioCtxRef.current = ctx;
          playTrainHorn(ctx);
        }
      } catch {
        // Fallback
      }
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
      {/* DESKTOP SIDEBAR: CRISP BOLD RAILWAY TRACK + 3D WDM2 CLASSIC LOCOMOTIVE ENGINE WITH FLYING SMOKE */}
      <aside
        aria-label="Railway Section Navigation Trail"
        className="fixed left-3 xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none"
      >
        {/* Parchment Box Frame */}
        <div className="relative bg-[#FAF7F0]/95 backdrop-blur-md border-2 border-black/80 rounded-2xl p-2.5 shadow-2xl flex flex-col items-center group min-w-[140px]">
          {/* Top Header Label */}
          <div className="flex items-center justify-between mb-1 pb-1.5 border-b border-black/20 w-full">
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-mono font-black text-[#821919] uppercase tracking-widest leading-none">
                ROUTE TRAIL
              </span>
              <span className="text-[10px] font-black font-railway text-black tracking-wider uppercase mt-0.5">
                EXPRESS · STOPS
              </span>
            </div>
            <button
              onClick={() => setIsSoundMuted(!isSoundMuted)}
              title={isSoundMuted ? 'Unmute train sound (chuk chuk chuk)' : 'Mute train sound'}
              className={`p-1 rounded-md border transition-all ${
                !isSoundMuted
                  ? 'bg-[#821919] text-[#FFD200] border-black shadow-xs animate-pulse'
                  : 'bg-zinc-200 text-zinc-500 border-zinc-400'
              }`}
            >
              {!isSoundMuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
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

            {/* 7. FULL-CANVAS THREE.JS WEBGL 3D WDM2 CLASSIC LOCOMOTIVE ENGINE CANVAS */}
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
