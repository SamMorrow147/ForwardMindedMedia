"use client";

import { useEffect, useRef } from "react";
import "./VideoHero.css";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Speed up the video by 1.5x
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="video-hero-section">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/Top-Final_compressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay (if you want to add text on top of the video) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Add your hero content here if needed */}
      </div>
    </section>
  );
}

