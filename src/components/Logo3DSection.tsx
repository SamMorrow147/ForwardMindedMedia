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

const Model = ({ url, scrollProgress, mousePosition, isDragging, dragRotation }: { 
  url: string; 
  scrollProgress: number; 
  mousePosition: { x: number; y: number };
  isDragging: boolean;
  dragRotation: { x: number; y: number };
}) => {
  const gltf = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Group>(null);
  const currentRotation = useRef({ x: 0, y: 0 });
  const introProgress = useRef(0);
  const [introComplete, setIntroComplete] = useState(false);

  useLayoutEffect(() => {
    if (gltf.scene && meshRef.current) {
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
      }
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
      let targetRotationX, targetRotationY;
      
      if (isDragging) {
        // Manual drag mode - apply drag rotation directly
        targetRotationX = dragRotation.x;
        targetRotationY = dragRotation.y;
      } else {
        // Auto mode - scroll tilt + mouse hover (increased tilt for visibility)
        const scrollRotationX = scrollProgress * -2.8;
        const hoverTiltY = mousePosition.x * 0.4;
        
        targetRotationX = scrollRotationX;
        targetRotationY = hoverTiltY;
      }
      
      // Smooth interpolation
      const lerpFactor = isDragging ? 0.3 : 0.1; // Faster lerp during drag
      currentRotation.current.x += (targetRotationX - currentRotation.current.x) * lerpFactor;
      currentRotation.current.y += (targetRotationY - currentRotation.current.y) * lerpFactor;
      
      outerRef.current.rotation.x = currentRotation.current.x;
      outerRef.current.rotation.y = currentRotation.current.y;
      
      // Move up: scroll parallax only (starting from 0)
      const targetY = 0 + (scrollProgress * 1.2);
      outerRef.current.position.y = targetY;
      
      // Keep scale at 1
      outerRef.current.scale.setScalar(1);
      
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragRotation, setDragRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragStartRotation = useRef({ x: 0, y: 0 });

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
      const maxScroll = 2000;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
      
      // Check if mouse has moved enough to consider it a drag
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // If moved more than 5 pixels, start dragging
      if (!isDragging && distance > 5 && dragStart.current.x !== 0) {
        setIsDragging(true);
      }
      
      // Handle dragging
      if (isDragging) {
        // Convert drag distance to rotation (inverted Y for natural feel)
        const rotationX = dragStartRotation.current.x - (deltaY * 0.01);
        const rotationY = dragStartRotation.current.y + (deltaX * 0.01);
        
        setDragRotation({ x: rotationX, y: rotationY });
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      dragStart.current = { x: e.clientX, y: e.clientY };
      // Store current rotation as starting point
      dragStartRotation.current = { ...dragRotation };
      // Don't set isDragging yet - wait for actual movement
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // Rotation will smoothly return to auto state via lerp
      }
      // Reset drag start position
      dragStart.current = { x: 0, y: 0 };
    };

    // Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        dragStart.current = { x: touch.clientX, y: touch.clientY };
        dragStartRotation.current = { ...dragRotation };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        
        const deltaX = touch.clientX - dragStart.current.x;
        const deltaY = touch.clientY - dragStart.current.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // If moved more than 5 pixels, start dragging
        if (!isDragging && distance > 5 && dragStart.current.x !== 0) {
          setIsDragging(true);
        }
        
        // Handle dragging
        if (isDragging) {
          // Convert drag distance to rotation (inverted Y for natural feel)
          const rotationX = dragStartRotation.current.x - (deltaY * 0.01);
          const rotationY = dragStartRotation.current.y + (deltaX * 0.01);
          
          setDragRotation({ x: rotationX, y: rotationY });
        }
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        // Rotation will smoothly return to auto state via lerp
      }
      // Reset drag start position
      dragStart.current = { x: 0, y: 0 };
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isDragging, dragRotation]);

  if (!mounted) {
    return (
      <section style={{
        width: '100%',
        height: isMobile ? '60vh' : '80vh',
        position: 'relative',
        backgroundColor: '#ffffff'
      }} />
    );
  }

  return (
    <section style={{
      width: '100%',
      height: isMobile ? '60vh' : '80vh',
      position: 'relative',
      backgroundColor: '#ffffff'
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
          baseColor="#e0e0e0"
          activeColor="#5227FF"
          proximity={0}
          speedTrigger={99999}
          shockRadius={60}
          shockStrength={0.15}
          resistance={5000}
          returnDuration={0.3}
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
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 10, 3]} intensity={3.5} castShadow />
        <directionalLight position={[0, 0, 6]} intensity={1.3} />
        <AnimatedLights />
        <directionalLight position={[0, -1, -3]} intensity={0.8} />
        <directionalLight position={[4, -3, 3]} intensity={1.5} />

        <Suspense fallback={<Loader />}>
          <Model 
            url="/forwardimindedmedia4.glb" 
            scrollProgress={scrollProgress} 
            mousePosition={isMobile ? { x: 0, y: 0 } : mousePosition}
            isDragging={isDragging}
            dragRotation={dragRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

