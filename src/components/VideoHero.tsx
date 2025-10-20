"use client";

import { useEffect, useRef } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Top-Final_compressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Overlay (if you want to add text on top of the video) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Add your hero content here if needed */}
      </div>
    </section>
  );
}

