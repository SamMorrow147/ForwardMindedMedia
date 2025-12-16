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
    if (gltf.scene && meshRef.current && outerRef.current) {
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
            
            // Set position with safeguards
            outerRef.current.scale.setScalar(1);
            const initialY = isMobile ? 0 : 0.3;
            outerRef.current.position.set(0, initialY, 0);
            
            // Set initial tilt: -0.35 for Chrome Desktop, -0.2 for other desktop, 0.1 for mobile
            const initialRotationX = isChromeDesktop ? -0.35 : (isMobile ? 0.1 : -0.2);
            outerRef.current.rotation.set(initialRotationX, 0, 0);
            
            // Initialize current rotation ref
            currentRotation.current = { x: initialRotationX, y: 0 };
          }
      } catch (error) {
        // Silently handle errors
        console.error('Error initializing 3D logo:', error);
      }
    }
  }, [gltf.scene, isMobile, isChromeDesktop]);

  useFrame(({ camera }) => {
    if (outerRef.current && meshRef.current) {
      // Check for Chrome directly in frame to prevent race conditions
      const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      const isDesktop = window.innerWidth > 768;
      const chromeDesktop = isChrome && isDesktop;
      
      if (chromeDesktop || isChromeDesktop) {
        // Chrome Desktop: Completely static, force all values
        outerRef.current.rotation.x = -0.35;
        outerRef.current.rotation.y = 0;
        outerRef.current.rotation.z = 0;
        outerRef.current.position.x = 0;
        outerRef.current.position.y = 0.3;
        outerRef.current.position.z = 0;
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 5;
        return;
      }
      
      // Other browsers: Animate with scroll and mouse hover
      // Base tilt: -0.2 for desktop, 0.1 for mobile (reduced)
      const baseTiltX = isMobile ? 0.1 : -0.2;
      const scrollRotationX = scrollProgress * (isMobile ? -0.8 : -0.6);
      const hoverTiltY = mousePosition.x * 0.2;
      
      const targetRotationX = baseTiltX + scrollRotationX;
      const targetRotationY = hoverTiltY;
      
      // Smooth interpolation with validation
      const lerpFactor = 0.1;
      const newRotX = currentRotation.current.x + (targetRotationX - currentRotation.current.x) * lerpFactor;
      const newRotY = currentRotation.current.y + (targetRotationY - currentRotation.current.y) * lerpFactor;
      
      // Validate rotation values
      if (!isNaN(newRotX) && isFinite(newRotX)) {
        currentRotation.current.x = newRotX;
        outerRef.current.rotation.x = newRotX;
      }
      if (!isNaN(newRotY) && isFinite(newRotY)) {
        currentRotation.current.y = newRotY;
        outerRef.current.rotation.y = newRotY;
      }
      
      // Parallax effect: Zoom in but no vertical movement
      if (isMobile) {
        // Camera zoom in effect (move closer to logo) - reduced zoom
        const initialZ = 6;
        const targetZ = Math.max(4, Math.min(initialZ, initialZ - (scrollProgress * 2.0))); // Clamped zoom
        if (!isNaN(targetZ) && isFinite(targetZ)) {
          camera.position.z = targetZ;
        }
        
        // Logo stays in place - FORCED to stay at 0
        outerRef.current.position.x = 0;
        outerRef.current.position.y = 0;
        outerRef.current.position.z = 0;
      } else {
        // Desktop subtle parallax
        const initialZ = 5;
        const targetZ = Math.max(3.8, Math.min(initialZ, initialZ - (scrollProgress * 1.2))); // Clamped zoom
        if (!isNaN(targetZ) && isFinite(targetZ)) {
          camera.position.z = targetZ;
        }
        
        // Logo stays in place - FORCED to stay at 0.3
        outerRef.current.position.x = 0;
        outerRef.current.position.y = 0.3;
        outerRef.current.position.z = 0;
      }
      
      // Additional safeguards: ensure all positions are always valid
      if (isNaN(camera.position.z) || camera.position.z < 2 || camera.position.z > 10) {
        camera.position.z = isMobile ? 6 : 5;
      }
      if (isNaN(camera.position.x) || Math.abs(camera.position.x) > 10) {
        camera.position.x = 0;
      }
      if (isNaN(camera.position.y) || Math.abs(camera.position.y) > 10) {
        camera.position.y = 0;
      }
      
      // Emergency position lock - if logo moves too far up or down
      if (outerRef.current.position.y > 2 || outerRef.current.position.y < -2) {
        console.warn('Logo position out of bounds, resetting to:', isMobile ? 0 : 0.3);
        outerRef.current.position.y = isMobile ? 0 : 0.3;
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
      // Ensure progress is always a valid number
      if (!isNaN(progress)) {
        setScrollProgress(progress);
      }
    };

    // Track mouse for hover effect (disabled on Chrome Desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (isChromeDesktop) return; // Skip on Chrome Desktop
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      // Ensure mouse position values are valid
      if (!isNaN(x) && !isNaN(y) && isFinite(x) && isFinite(y)) {
        setMousePosition({ x, y });
      }
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
        overflow: 'visible',
        zIndex: 0
      }}
    >
      {/* Galaxy Background - Extended to cover both sections */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '200vh',
          zIndex: 0,
          backgroundColor: '#000000',
          pointerEvents: 'none'
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
          frameloop="always"
          dpr={isChromeDesktop ? [2, 3] : [1, 2]}
          performance={{ min: 0.5 }}
          camera={{
            position: [0, 0, isMobile ? 6 : 5],
            fov: isMobile ? 60 : 50,
            near: 0.1,
            far: 1000
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: 'none',
            overflow: 'hidden'
          }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
          }}
        >
          {/* Ambient light for overall brightness - Warm Purple/Gold mix */}
          <ambientLight intensity={isMobile ? 3.5 : 2.5} color="#E8DCF5" />

          {/* Top lights - primary illumination from above - Warm Purple-Gold */}
          <directionalLight 
            position={[0, 10, 3]} 
            intensity={isMobile ? 4.5 : 3.2} 
            castShadow={!isChromeDesktop}
            color="#E8D8F0" 
          />
          <directionalLight position={[0, 12, 0]} intensity={isMobile ? 4.0 : 3.0} color="#F0E8D8" />
          <directionalLight position={[0, 8, -2]} intensity={isMobile ? 4.5 : 3.5} color="#E8D8F0" />
          <directionalLight position={[2, 10, 2]} intensity={isMobile ? 3.8 : 2.8} color="#F5E8DC" />
          <directionalLight position={[-2, 10, 2]} intensity={isMobile ? 3.8 : 2.8} color="#F5E8DC" />

          {/* Front lights - brighten the front face - Golden Purple */}
          <directionalLight position={[0, 0, 6]} intensity={isMobile ? 4.0 : 2.5} color="#E8D8E0" />
          <directionalLight position={[3, 2, 5]} intensity={isMobile ? 3.5 : 2.2} color="#F0E8D8" />
          <directionalLight position={[-3, 2, 5]} intensity={isMobile ? 3.5 : 2.2} color="#F0E8D8" />

          {/* Side lights - fill lighting - Warm Purple */}
          <directionalLight position={[4, -3, 3]} intensity={2.4} color="#D4BFEF" />
          <directionalLight position={[-4, 2, 3]} intensity={2.4} color="#D4BFEF" />
          <directionalLight position={[5, 3, 2]} intensity={2.0} color="#E8D8F0" />
          <directionalLight position={[-5, 3, 2]} intensity={2.0} color="#E8D8F0" />
          <directionalLight position={[-6, 0, 4]} intensity={2.8} color="#F0E8D8" />
          <directionalLight position={[6, 0, 4]} intensity={2.8} color="#F0E8D8" />

          {/* Bottom and back lights - rim lighting - Golden glow */}
          <directionalLight position={[0, -8, 3]} intensity={isMobile ? 4.0 : 2.5} color="#E8D8E0" />
          <directionalLight position={[0, -1, -3]} intensity={isMobile ? 3.0 : 1.8} color="#D4BFEF" />
          <directionalLight position={[0, -5, -2]} intensity={isMobile ? 3.5 : 2.2} color="#E8D8E0" />

          {/* Soft upward light from below left - Warm accent */}
          <directionalLight position={[-4, -10, 2]} intensity={isMobile ? 4.0 : 2.6} color="#E8D8E0" />
          <pointLight position={[-3, -8, 1]} intensity={isMobile ? 3.5 : 2.0} distance={15} color="#F0E8D8" />

          {/* Additional upward lights for mobile - illuminate front face from below left */}
          <directionalLight position={[-3, -10, 4]} intensity={isMobile ? 5.0 : (isChromeDesktop ? 4.0 : 2.5)} color="#E8D8E0" />
          <pointLight position={[-3, -8, 3]} intensity={isMobile ? 4.5 : (isChromeDesktop ? 3.5 : 2.0)} distance={15} color="#F0E8D8" />
          <pointLight position={[-4, -7, 2]} intensity={isMobile ? 3.8 : (isChromeDesktop ? 3.0 : 1.5)} distance={15} color="#E8D8E0" />
          <pointLight position={[-2, -7, 2]} intensity={isMobile ? 3.8 : (isChromeDesktop ? 3.0 : 1.5)} distance={15} color="#E8D8E0" />
          
          {/* Extra bottom shine lights for mobile - strong upward glow */}
          {isMobile && (
            <>
              <directionalLight position={[0, -12, 5]} intensity={5.0} color="#F0E8D8" />
              <pointLight position={[0, -10, 4]} intensity={4.5} distance={20} color="#E8D8E0" />
              <pointLight position={[2, -9, 4]} intensity={4.0} distance={18} color="#F5E8DC" />
              <pointLight position={[-2, -9, 4]} intensity={4.0} distance={18} color="#F5E8DC" />
            </>
          )}
          
          {/* Extra bottom lights for Chrome Desktop - Yellow glow */}
          {isChromeDesktop && (
            <>
              <directionalLight position={[0, -10, 5]} intensity={3.5} color="#FFD700" />
              <pointLight position={[0, -8, 3]} intensity={3.2} distance={15} color="#FFE55C" />
              <pointLight position={[3, -7, 3]} intensity={2.8} distance={15} color="#FFD700" />
              <pointLight position={[-3, -7, 3]} intensity={2.8} distance={15} color="#FFD700" />
            </>
          )}

          {/* Additional point lights for extra brightness - Warm glow */}
          <pointLight position={[0, 5, 3]} intensity={isMobile ? 3.0 : 1.8} distance={10} color="#F0E8D8" />
          <pointLight position={[0, 8, 0]} intensity={isMobile ? 2.5 : 1.5} distance={10} color="#E8D8E0" />
          <pointLight position={[3, 5, 3]} intensity={isMobile ? 2.5 : 1.5} distance={10} color="#F5E8DC" />
          <pointLight position={[-3, 5, 3]} intensity={isMobile ? 2.5 : 1.5} distance={10} color="#F5E8DC" />

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

