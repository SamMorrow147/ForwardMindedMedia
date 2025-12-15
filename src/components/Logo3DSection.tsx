'use client';

import { Suspense, useRef, useLayoutEffect, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

// Dynamically import Galaxy to avoid SSR issues
const Galaxy = dynamic(() => import('./Galaxy'), { ssr: false });

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '18px' }}>{Math.round(progress)}%</div>
    </Html>
  );
};

const Model = ({ url, scrollProgress, mousePosition, isMobile, isChromeDesktop }: { 
  url: string; 
  scrollProgress: number;
  mousePosition: { x: number; y: number };
  isMobile: boolean;
  isChromeDesktop: boolean;
}) => {
  const gltf = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Group>(null);
  const currentRotation = useRef({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (gltf.scene && meshRef.current) {
      try {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        
        if (!isNaN(maxDim) && maxDim > 0) {
          const baseScale = isMobile ? 3.5 : 5;
          const scale = baseScale / maxDim;
          
          meshRef.current.scale.setScalar(scale);
          meshRef.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
          
          if (outerRef.current) {
            outerRef.current.scale.setScalar(1);
            outerRef.current.position.y = 0;
            // Set initial tilt: -0.35 for desktop, 0.15 for mobile
            outerRef.current.rotation.set(isMobile ? 0.15 : -0.35, 0, 0);
          }
        }
      } catch (error) {
        // Silently handle errors
      }
    }
  }, [gltf.scene, isMobile]);

  useFrame(({ camera }) => {
    if (outerRef.current) {
      if (isChromeDesktop) {
        // Chrome Desktop: Completely static, top tilts back, bottom forward
        outerRef.current.rotation.x = -0.35;
        outerRef.current.rotation.y = 0;
        return;
      }
      
      // Other browsers: Animate with scroll and mouse hover
      // Base tilt: -0.2 for desktop, 0.1 for mobile (reduced)
      const baseTiltX = isMobile ? 0.1 : -0.2;
      const scrollRotationX = scrollProgress * (isMobile ? -0.8 : -0.6);
      const hoverTiltY = mousePosition.x * 0.2;
      
      const targetRotationX = baseTiltX + scrollRotationX;
      const targetRotationY = hoverTiltY;
      
      // Smooth interpolation
      const lerpFactor = 0.1;
      currentRotation.current.x += (targetRotationX - currentRotation.current.x) * lerpFactor;
      currentRotation.current.y += (targetRotationY - currentRotation.current.y) * lerpFactor;
      
      outerRef.current.rotation.x = currentRotation.current.x;
      outerRef.current.rotation.y = currentRotation.current.y;
      
      // Parallax effect: Zoom in and move down as you scroll
      if (isMobile) {
        // Camera zoom in effect (move closer to logo) - reduced zoom
        const initialZ = 6;
        const targetZ = initialZ - (scrollProgress * 3.0); // Reduced zoom intensity
        camera.position.z = targetZ;
        
        // Logo moves down as you scroll - subtle movement
        const moveDown = scrollProgress * -0.8; // More subtle downward movement
        outerRef.current.position.y = moveDown;
      } else {
        // Desktop subtle parallax
        const initialZ = 5;
        const targetZ = initialZ - (scrollProgress * 1.8); // Reduced desktop zoom
        camera.position.z = targetZ;
        
        const moveDown = scrollProgress * -0.6; // More subtle desktop movement
        outerRef.current.position.y = moveDown;
      }
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
  const [isChromeDesktop, setIsChromeDesktop] = useState(false);
  // Toggle if needed; default true to show logo
  const SHOW_LOGO = true;

  useEffect(() => {
    setMounted(true);
    
    // Detect Chrome Desktop specifically
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isDesktop = window.innerWidth > 768;
    setIsChromeDesktop(isChrome && isDesktop);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      const isDesktopNow = window.innerWidth > 768;
      setIsChromeDesktop(isChrome && isDesktopNow);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Track scroll for tilting (disabled on Chrome Desktop)
    const handleScroll = () => {
      if (isChromeDesktop) return; // Skip on Chrome Desktop
      const scrollY = window.scrollY;
      const maxScroll = 800;
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    // Track mouse for hover effect (disabled on Chrome Desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (isChromeDesktop) return; // Skip on Chrome Desktop
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (!isMobile && !isChromeDesktop) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isChromeDesktop, isMobile]);

  if (!mounted) {
    return (
      <section style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#000000'
      }} />
    );
  }

  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}
    >
      {/* Galaxy Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: '#000000',
          pointerEvents: 'auto'
        }}
      >
        <Galaxy
          transparent={true}
          focal={[0.5, 0.5]}
          rotation={[1.0, 0.0]}
          starSpeed={0.5}
          density={0.8}
          hueShift={240}
          speed={1.0}
          mouseInteraction={true}
          glowIntensity={0.4}
          saturation={0.8}
          mouseRepulsion={true}
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          autoCenterRepulsion={0}
        />
      </div>

      {/* 3D Logo Canvas */}
      {SHOW_LOGO && (
        <Canvas
          shadows={!isChromeDesktop}
          frameloop={isChromeDesktop ? "demand" : "always"}
          dpr={isChromeDesktop ? [2, 3] : [1, 2]}
          performance={{ min: 0.5 }}
          camera={{
            position: [0, 0, isMobile ? 6 : 5],
            fov: isMobile ? 60 : 50
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
          }}
        >
          {/* Ambient light for overall brightness - Warm Purple/Gold mix */}
          <ambientLight intensity={2.5} color="#E8DCF5" />

          {/* Top lights - primary illumination from above - Warm Purple-Gold */}
          <directionalLight 
            position={[0, 10, 3]} 
            intensity={3.2} 
            castShadow={!isChromeDesktop}
            color="#E8D8F0" 
          />
          <directionalLight position={[0, 12, 0]} intensity={3.0} color="#F0E8D8" />
          <directionalLight position={[0, 8, -2]} intensity={3.5} color="#E8D8F0" />
          <directionalLight position={[2, 10, 2]} intensity={2.8} color="#F5E8DC" />
          <directionalLight position={[-2, 10, 2]} intensity={2.8} color="#F5E8DC" />

          {/* Front lights - brighten the front face - Golden Purple */}
          <directionalLight position={[0, 0, 6]} intensity={2.5} color="#E8D8E0" />
          <directionalLight position={[3, 2, 5]} intensity={2.2} color="#F0E8D8" />
          <directionalLight position={[-3, 2, 5]} intensity={2.2} color="#F0E8D8" />

          {/* Side lights - fill lighting - Warm Purple */}
          <directionalLight position={[4, -3, 3]} intensity={2.4} color="#D4BFEF" />
          <directionalLight position={[-4, 2, 3]} intensity={2.4} color="#D4BFEF" />
          <directionalLight position={[5, 3, 2]} intensity={2.0} color="#E8D8F0" />
          <directionalLight position={[-5, 3, 2]} intensity={2.0} color="#E8D8F0" />
          <directionalLight position={[-6, 0, 4]} intensity={2.8} color="#F0E8D8" />
          <directionalLight position={[6, 0, 4]} intensity={2.8} color="#F0E8D8" />

          {/* Bottom and back lights - rim lighting - Golden glow */}
          <directionalLight position={[0, -8, 3]} intensity={2.5} color="#E8D8E0" />
          <directionalLight position={[0, -1, -3]} intensity={1.8} color="#D4BFEF" />
          <directionalLight position={[0, -5, -2]} intensity={2.2} color="#E8D8E0" />

          {/* Soft upward light from below left - Warm accent */}
          <directionalLight position={[-4, -10, 2]} intensity={2.6} color="#E8D8E0" />
          <pointLight position={[-3, -8, 1]} intensity={2.0} distance={15} color="#F0E8D8" />

          {/* Additional upward lights for mobile - illuminate front face from below left */}
          <directionalLight position={[-3, -10, 4]} intensity={isMobile ? 3.5 : (isChromeDesktop ? 4.0 : 2.5)} color="#E8D8E0" />
          <pointLight position={[-3, -8, 3]} intensity={isMobile ? 2.8 : (isChromeDesktop ? 3.5 : 2.0)} distance={15} color="#F0E8D8" />
          <pointLight position={[-4, -7, 2]} intensity={isMobile ? 2.2 : (isChromeDesktop ? 3.0 : 1.5)} distance={15} color="#E8D8E0" />
          <pointLight position={[-2, -7, 2]} intensity={isMobile ? 2.2 : (isChromeDesktop ? 3.0 : 1.5)} distance={15} color="#E8D8E0" />
          
          {/* Extra bottom lights for Chrome Desktop - Golden glow */}
          {isChromeDesktop && (
            <>
              <directionalLight position={[0, -10, 5]} intensity={3.5} color="#E8D8E0" />
              <pointLight position={[0, -8, 3]} intensity={3.2} distance={15} color="#F0E8D8" />
              <pointLight position={[3, -7, 3]} intensity={2.8} distance={15} color="#E8D8E0" />
              <pointLight position={[-3, -7, 3]} intensity={2.8} distance={15} color="#E8D8E0" />
            </>
          )}

          {/* Additional point lights for extra brightness - Warm glow */}
          <pointLight position={[0, 5, 3]} intensity={1.8} distance={10} color="#F0E8D8" />
          <pointLight position={[0, 8, 0]} intensity={1.5} distance={10} color="#E8D8E0" />
          <pointLight position={[3, 5, 3]} intensity={1.5} distance={10} color="#F5E8DC" />
          <pointLight position={[-3, 5, 3]} intensity={1.5} distance={10} color="#F5E8DC" />

          {/* Static side lights (replaced animated ones) - Warm Purple accent */}
          <directionalLight position={[3, 3, 5]} intensity={2.8} color="#E8D8E0" />
          <directionalLight position={[-3, 3, 5]} intensity={2.8} color="#E8D8E0" />

          <Suspense fallback={<Loader />}>
            <Model
              url="/forwardimindedmedia7.glb"
              scrollProgress={scrollProgress}
              mousePosition={mousePosition}
              isMobile={isMobile}
              isChromeDesktop={isChromeDesktop}
            />
          </Suspense>
        </Canvas>
      )}
    </section>
  );
}

