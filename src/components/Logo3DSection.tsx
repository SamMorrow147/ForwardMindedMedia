'use client';

import { Suspense, useRef, useLayoutEffect, useEffect, useState } from 'react';
import { Canvas, useFrame, invalidate } from '@react-three/fiber';
import { useGLTF, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import DotGrid from './DotGrid';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '18px' }}>{Math.round(progress)}%</div>
    </Html>
  );
};

const AnimatedLights = () => {
  const light1Ref = useRef<THREE.DirectionalLight>(null);
  const light2Ref = useRef<THREE.DirectionalLight>(null);
  
  useFrame(({ clock, invalidate }) => {
    const time = clock.getElapsedTime();
    
    if (light1Ref.current) {
      // Rotate light around the scene (slower for less CPU usage)
      light1Ref.current.position.x = Math.sin(time * 0.2) * 5;
      light1Ref.current.position.z = Math.cos(time * 0.2) * 5;
    }
    
    if (light2Ref.current) {
      // Counter-rotate the second light (slower for less CPU usage)
      light2Ref.current.position.x = Math.cos(time * 0.25) * 4;
      light2Ref.current.position.z = Math.sin(time * 0.25) * 4;
    }
    
    // Trigger re-render for smooth animation
    invalidate();
  });
  
  return (
    <>
      <directionalLight ref={light1Ref} position={[3, 3, 5]} intensity={2} />
      <directionalLight ref={light2Ref} position={[-3, 3, 5]} intensity={2} />
    </>
  );
};

const Model = ({ url, scrollProgress, mousePosition, isMobile }: { 
  url: string; 
  scrollProgress: number; 
  mousePosition: { x: number; y: number };
  isMobile: boolean;
}) => {
  const gltf = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Group>(null);
  const currentRotation = useRef({ x: 0, y: 0 });
  const introProgress = useRef(0);
  const [introComplete, setIntroComplete] = useState(false);

  useLayoutEffect(() => {
    if (gltf.scene && meshRef.current) {
      // Suppress THREE.js NaN warnings during initial load
      const originalWarn = console.warn;
      const originalError = console.error;
      console.warn = (...args) => {
        if (args[0]?.includes?.('NaN') || args[0]?.includes?.('BufferGeometry')) return;
        originalWarn.apply(console, args);
      };
      console.error = (...args) => {
        if (args[0]?.includes?.('NaN') || args[0]?.includes?.('BufferGeometry')) return;
        originalError.apply(console, args);
      };
      
      try {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5 / maxDim;
        
        meshRef.current.scale.setScalar(scale);
        meshRef.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
        
        // Start with logo scaled down for intro animation
        if (outerRef.current) {
          outerRef.current.scale.setScalar(0);
          outerRef.current.position.y = -2;
          outerRef.current.rotation.set(0, 0, 0);
        }
      } catch (error) {
        console.warn('Error setting up 3D model');
      }
      
      // Restore console methods
      setTimeout(() => {
        console.warn = originalWarn;
        console.error = originalError;
      }, 1000);
    }
  }, [gltf.scene]);

  useFrame((state, delta) => {
    if (outerRef.current) {
      // Intro animation (first 2 seconds)
      if (!introComplete) {
        introProgress.current = Math.min(introProgress.current + delta * 0.8, 1);
        
        // Ease out cubic function for smooth animation
        const easeProgress = 1 - Math.pow(1 - introProgress.current, 3);
        
        // Scale up from 0 to 1
        outerRef.current.scale.setScalar(easeProgress);
        
        // Move up from -2 to 0
        outerRef.current.position.y = -2 + (2 * easeProgress);
        
        // Rotate in slightly
        outerRef.current.rotation.y = (1 - easeProgress) * Math.PI * 0.5;
        
        if (introProgress.current >= 1) {
          setIntroComplete(true);
        }
        state.invalidate();
        return;
      }
      
      // Normal animations after intro
      // Auto mode - scroll tilt + mouse hover (increased tilt for visibility)
      const baseTiltX = 0.3; // Base forward tilt for perspective
      const scrollRotationX = scrollProgress * -2.8;
      const hoverTiltY = mousePosition.x * 0.4;
      
      const targetRotationX = baseTiltX + scrollRotationX;
      const targetRotationY = hoverTiltY;
      
      // Smooth interpolation
      const lerpFactor = 0.1;
      currentRotation.current.x += (targetRotationX - currentRotation.current.x) * lerpFactor;
      currentRotation.current.y += (targetRotationY - currentRotation.current.y) * lerpFactor;
      
      outerRef.current.rotation.x = currentRotation.current.x;
      outerRef.current.rotation.y = currentRotation.current.y;
      
      // Position: different behavior for mobile vs desktop
      if (isMobile) {
        // Mobile: move downward more as you scroll
        const targetY = 0 - (scrollProgress * 1.5);
        outerRef.current.position.y = targetY;
        
        // Zoom from 1 to 3 as you scroll (very dramatic)
        const zoomScale = 1 + (scrollProgress * 2.0);
        outerRef.current.scale.setScalar(zoomScale);
      } else {
        // Desktop: move upward slightly as you scroll (limited range)
        const targetY = 0 + (Math.min(scrollProgress, 0.3) * 1.2);
        outerRef.current.position.y = targetY;
        
        // Keep scale at exactly 1 on desktop - no zooming
        outerRef.current.scale.setScalar(1);
      }
      
      // Trigger re-render when animating
      state.invalidate();
    }
  });

  return (
    <group ref={outerRef}>
      <group ref={meshRef}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
};

export default function Logo3DSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; // Reduced from 2000 to limit scroll effect range
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range for hover effect
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Only add mouse events on desktop
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (!mounted) {
    return (
      <section style={{
        width: '100%',
        height: isMobile ? '60vh' : '80vh',
        position: 'relative',
        backgroundColor: '#e8e1d4'
      }} />
    );
  }

  return (
    <section style={{
      width: '100%',
      height: isMobile ? '60vh' : '80vh',
      position: 'relative',
      backgroundColor: '#e8e1d4'
    }}>
      {/* Animated Dot Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <DotGrid
          dotSize={4}
          gap={25}
          baseColor="#ffffff"
          activeColor="#f6ba3e"
          proximity={120}
          speedTrigger={100}
          shockRadius={60}
          shockStrength={0.15}
          resistance={300}
          returnDuration={0.15}
        />
      </div>
      
      {/* 3D Logo Canvas */}
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        camera={{ 
          position: [0, 0, isMobile ? 6 : 5], 
          fov: isMobile ? 60 : 50 
        }}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <Environment preset="sunset" background={false} />
        
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 3]} intensity={2.5} castShadow />
        <directionalLight position={[0, 0, 6]} intensity={1.5} />
        <directionalLight position={[0, -1, -3]} intensity={1.2} />
        <directionalLight position={[4, -3, 3]} intensity={2.0} />
        <directionalLight position={[-4, 2, 3]} intensity={1.5} />
        <directionalLight position={[-5, 5, 3]} intensity={2.0} />
        <directionalLight position={[-6, 0, 4]} intensity={3.0} />
        <directionalLight position={[0, -8, 3]} intensity={2.5} />
        <directionalLight position={[0, 8, -2]} intensity={3.5} />

        <Suspense fallback={<Loader />}>
          <Model 
            url="/forwardimindedmedia7.glb" 
            scrollProgress={scrollProgress} 
            mousePosition={isMobile ? { x: 0, y: 0 } : mousePosition}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

