'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Logo3DSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src="/FMM Website Video Banner.webm" type="video/webm" />
        <source src="/FMM_compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(42,18,50,0.55) 70%, rgba(42,18,50,0.9) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Centered Logo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          pointerEvents: 'none',
        }}
      >
        <motion.img
          src="/logo-full.svg"
          alt="Forward Minded Media"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          style={{
            width: '100%',
            maxWidth: '420px',
            height: 'auto',
            filter: 'drop-shadow(0 4px 32px rgba(0,0,0,0.5))',
          }}
        />
      </div>
    </section>
  );
}
