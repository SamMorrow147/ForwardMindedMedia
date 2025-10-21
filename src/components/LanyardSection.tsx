"use client";

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Lanyard from "./Lanyard";
import BlurText from "./BlurText";
import SpotlightCard from "./SpotlightCard";
import GlassSurface from "./GlassSurface";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma } from 'react-icons/si';

// Client-only marquee to avoid hydration issues
const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });

export default function LanyardSection() {
  // Set lanyard position once on mount to avoid physics simulation issues
  const [lanyardPosition] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 480) {
      return [-1, 4, 0]; // Move slightly right for small screens
    }
    return [-2, 4, 0]; // Original position for larger screens
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Stable logo array - memoized to prevent re-renders
  const techLogos = useMemo(() => [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFigma />, name: "Figma" }
  ], []);
  return (
    <section className="min-h-[60vh] bg-[#2a1232] relative overflow-visible pt-0 md:pt-16 mobile-height-constrain">
      {/* Full-width Lanyard container - spans entire section but hangs on left */}
      <div className="absolute inset-0 z-10 lanyard-container">
        <Lanyard 
          position={[0, 0, 20]} 
          gravity={[0, -40, 0]} 
          lanyardPosition={lanyardPosition}
        />
      </div>
      
      {/* Layout structure for content positioning */}
      <div className="relative z-20 h-full flex pointer-events-none">
        {/* Left side - Empty space where lanyard hangs */}
        <div style={{ width: '42%' }}></div>
        
        {/* Right side - Content */}
        <div style={{ width: '58%' }} className="flex flex-col justify-center pl-16 mobile-center-content">
          {/* Top section - Text and Button */}
          <div className="text-left max-w-lg mb-12 mt-12">
            <h2 className="ThreeDee text-white mb-6 mobile-center-title" style={{ textAlign: 'left', marginLeft: '-20px' }}>Who We Are</h2>
            {isMobile ? (
              <div style={{ maxWidth: '80%', width: '80%', marginLeft: 'auto', marginRight: '0', marginBottom: '2rem' }}>
                <GlassSurface 
                  width="100%"
                  height="auto"
                  borderRadius={16}
                  brightness={20}
                  opacity={0.5}
                  blur={20}
                  displace={10}
                  distortionScale={-120}
                  backgroundOpacity={0.3}
                  className="lanyard-glass-surface"
                  style={{ backgroundColor: 'rgba(58, 25, 69, 0.4)' }}
                >
                  <p className="text-white text-lg leading-relaxed" style={{ margin: 0, padding: '1rem', textAlign: 'left', textShadow: '2px 2px 8px rgba(58, 25, 69, 0.8)' }}>
                    We're a full-service agency turning partnerships into progress. By challenging the status quo, we craft bold, creative marketing that drives real results.
                  </p>
                </GlassSurface>
              </div>
            ) : (
              <p className="text-white text-lg mb-8 leading-relaxed">
                We're a full-service agency turning partnerships into progress. By challenging the status quo, we craft bold, creative marketing that drives real results.
              </p>
            )}
            
            {/* Button under text */}
            <button className="glass-button-lanyard pointer-events-auto">
              Learn More
            </button>
          </div>
          
          {/* Bottom section - Tech Logos */}
          <div className="w-full max-w-lg overflow-hidden marquee-wrapper hidden md:block mobile-hide-marquee">
            <Marquee 
              gradient={false} 
              speed={60} 
              pauseOnHover={true}
              className="py-4"
            >
              {techLogos.map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`}
                  className={`flex items-center justify-center text-5xl ${
                    index === techLogos.length - 1 ? 'ml-6 mr-12' : 'mx-6'
                  }`}
                  style={{ color: '#f7ba40' }}
                  title={logo.name}
                >
                  {logo.icon}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .glass-button-lanyard {
          width: 140px;
          height: 50px;
          margin-top: 1rem;
          font-family: "proxima-nova", sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .glass-button-lanyard::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .glass-button-lanyard:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px) scale(1.02);
          box-shadow: 
            0 8px 25px rgba(255, 255, 255, 0.1),
            0 0 15px rgba(255, 255, 255, 0.05),
            0 0 12px #f7ba40,
            0 0 25px rgba(247, 186, 64, 0.4),
            inset 0 0 0 1px #f7ba40;
        }
        
        .glass-button-lanyard:hover::before {
          left: 100%;
        }
        
        .glass-button-lanyard:active {
          transform: translateY(0) scale(1);
          background: rgba(255, 255, 255, 0.25);
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .mobile-center-content {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding: 2rem !important;
            padding-top: 4rem !important;
            text-align: center !important;
          }
          
          .mobile-center-content .text-left {
            text-align: center !important;
            max-width: 90% !important;
          }
          
          .mobile-center-content h2 {
            text-align: center !important;
          }
          
          .mobile-center-content p {
            text-align: left !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
            text-shadow: none !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
          }
          
          .mobile-center-content .max-w-lg {
            max-width: 100% !important;
            width: 100% !important;
            margin-bottom: 14rem !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          /* Hide marquee on mobile */
          .mobile-hide-marquee {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          
          .marquee-wrapper {
            display: none !important;
          }
          
          /* Reduce marquee padding on tablet/mobile */
          .marquee-wrapper :global(.py-4) {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-center-content {
            padding: 1.5rem !important;
          }
          
          .mobile-center-content .text-left {
            max-width: 95% !important;
          }
          
          .mobile-center-content h2 {
            font-size: 3rem !important;
            padding-bottom: 1rem !important;
          }
          
          .mobile-center-content .mb-12 {
            margin-bottom: 14rem !important;
          }
          
          /* Right align the Learn More button on smaller screens */
          .mobile-center-content .glass-button-lanyard {
            margin-left: auto !important;
            margin-right: 0 !important;
            display: block !important;
          }
          
          /* Reduce marquee padding even more on small mobile */
          .marquee-wrapper :global(.py-4) {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
        }
        
        /* Medium mobile screens - increase spacing */
        @media (min-width: 550px) and (max-width: 740px) {
          .mobile-center-content .max-w-lg {
            margin-bottom: 16rem !important;
          }
        }
        
        /* Mobile lanyard positioning - allow natural hang but prevent scroll */
        @media (max-width: 768px) {
          .lanyard-container {
            transform: translateX(15%) !important;
            width: 120% !important;
            left: -10% !important;
            right: auto !important;
            overflow: visible !important;
            clip-path: none !important;
            mask: none !important;
          }
          
          /* Ensure layout containers don't clip */
          .mobile-center-content {
            overflow: visible !important;
          }
          
          /* Move logo section down on mobile to align with lanyard bottom */
          .mobile-center-content .max-w-lg:last-child {
            margin-top: 4rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .lanyard-container {
            transform: translateX(10%) !important;
            width: 110% !important;
            left: -5% !important;
            right: auto !important;
            overflow: visible !important;
            clip-path: none !important;
            mask: none !important;
          }
          
          /* Adjust logo positioning for smaller screens */
          .mobile-center-content .max-w-lg:last-child {
            margin-top: 3rem !important;
          }
        }
        
        /* Mobile: Center and maximize "Who We Are" title */
        @media (max-width: 768px) {
          .mobile-center-title {
            text-align: center !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          /* Mobile: Constrain section height */
          .mobile-height-constrain {
            min-height: 52vh !important;
            max-height: 64vh !important;
          }
          
          /* Mobile: Align paragraph text left */
          .mobile-center-content .mobile-text-left {
            text-align: left !important;
          }
          
          .lanyard-glass-surface .glass-surface__content {
            justify-content: flex-start !important;
            align-items: flex-start !important;
          }
          
          .lanyard-glass-surface p {
            text-align: left !important;
            width: 100% !important;
          }
          
          .mobile-center-content .lanyard-paragraph-card {
            margin-bottom: 2rem !important;
            max-width: 80% !important;
            width: 80% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          .mobile-center-content .lanyard-paragraph-card.card-spotlight {
            --card-bg: rgba(58, 37, 69, 0.3) !important;
            background: rgba(58, 37, 69, 0.3) !important;
            backdrop-filter: blur(2px) !important;
            padding: 1.5rem !important;
            max-width: 80% !important;
            width: 80% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        
        /* Lanyard paragraph card styling - FORCE TRANSPARENT */
        .lanyard-paragraph-card {
          background-color: transparent !important;
          background-image: none !important;
          background: none !important;
        }
        
        .lanyard-paragraph-card.card-spotlight {
          background-color: transparent !important;
          background-image: none !important;
          background: none !important;
        }
        
        .lanyard-paragraph-card::before {
          background: none !important;
        }
        
        .lanyard-paragraph-card .card-content {
          background: transparent !important;
        }
        
        .lanyard-paragraph-card p {
          background: transparent !important;
        }
        
        @media (max-width: 768px) {
          .lanyard-paragraph-card.card-spotlight {
            max-width: 80% !important;
            width: 80% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        
        /* Desktop - hide glow on mobile */
        @media (min-width: 769px) {
          .lanyard-paragraph-card {
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
          }
          
          .lanyard-paragraph-card::before,
          .lanyard-paragraph-card::after,
          .lanyard-paragraph-card > .glow-border {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
