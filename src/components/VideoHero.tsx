"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="video-hero-section">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/FMM Website Video Banner.webm" type="video/webm" />
        <source src="/FMM_compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(42,18,50,0.6) 60%, rgba(42,18,50,0.85) 100%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: '#e8e1d4',
            fontFamily: '"scandia-web", sans-serif',
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: '900px'
          }}
        >
          Leave the status quo behind.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.45 }}
          className="mt-6 mb-10 max-w-2xl"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.88)',
            fontFamily: '"halcom", sans-serif',
            fontWeight: 400,
            lineHeight: 1.7
          }}
        >
          Marketing shouldn&apos;t be a line item — it should be a partnership. We collaborate with visionary businesses to craft bold ideas, unforgettable campaigns and real growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.65 }}
        >
          <a
            href="https://calendly.com/jake-forwardmindedmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated no-underline"
          >
            <strong>Let&apos;s Start Your Story</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .video-hero-section {
          position: relative;
          width: 100%;
          min-height: 60vh;
          height: 75vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .video-hero-section {
            height: 88vh;
          }
        }

        @media (min-width: 1024px) {
          .video-hero-section {
            height: 100vh;
          }
        }

        /* CTA Button */
        .btn-animated {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          min-width: 20rem;
          padding: 0 2rem;
          overflow: hidden;
          height: 3rem;
          background-size: 300% 300%;
          backdrop-filter: blur(1rem);
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #85417F 100%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          -webkit-background-clip: content-box, border-box;
          position: relative;
          cursor: pointer;
          text-decoration: none;
          pointer-events: auto;
        }

        .btn-animated strong {
          z-index: 2;
          font-family: "scandia-web", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFFFFF;
          text-shadow: 0 0 4px white;
          text-transform: uppercase;
        }

        #container-stars {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          background-color: #212121;
        }

        #glow {
          position: absolute;
          display: flex;
          width: 100%;
        }

        .circle {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          -webkit-filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
        }

        .circle:nth-of-type(1) {
          background: rgba(254, 83, 186, 0.636);
        }

        .circle:nth-of-type(2) {
          background: rgba(142, 81, 234, 0.704);
        }

        .btn-animated:hover #container-stars {
          z-index: -1;
          background-color: transparent;
        }

        .btn-animated:hover {
          transform: scale(1.1);
        }

        #stars {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
          will-change: transform;
          transform: translateZ(0);
        }

        #stars::after {
          content: "";
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          animation: animStarRotate 90s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
        }

        #stars::before {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          animation: animStar 60s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        @keyframes animStar {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(0, -135rem, 0); }
        }

        @keyframes animStarRotate {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }

        @keyframes gradient_301 {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse_3011 {
          0%   { transform: scale(0.75); box-shadow: 0 0 0 0 rgba(0,0,0,0.7); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 10px rgba(0,0,0,0); }
          100% { transform: scale(0.75); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }
      `}</style>
    </section>
  );
}
