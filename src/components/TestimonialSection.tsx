"use client";

import { useRef, useState } from 'react';
import SpotlightCard from "./SpotlightCard";
import BlurText from "./BlurText";
import LogoSlider from "./LogoSlider";

export default function TestimonialSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const testimonials = [
    {
      name: "Jill Koehler",
      company: "First National Bank",
      role: "",
      testimonial: "Their team consistently delivers creative, fun campaigns that help us reach the right audience",
      spotlightColor: "rgba(59, 130, 246, 0.2)", // Blue
    },
    {
      name: "Katie McClellan",
      company: "Infinite Youth Medical Spa",
      role: "",
      testimonial: "It feels like they're an extension of our own team — a true family company that genuinely cares about our success",
      spotlightColor: "rgba(168, 85, 247, 0.2)", // Purple
    },
    {
      name: "Sarah Martinez",
      company: "Local Business Co.",
      role: "",
      testimonial: "Forward Minded Media brought fresh ideas and authentic energy to our marketing. Their creative approach helped us connect with our community in meaningful ways.",
      spotlightColor: "rgba(34, 197, 94, 0.2)", // Green
    },
    {
      name: "David Thompson",
      company: "Regional Services",
      role: "",
      testimonial: "Working with them has been refreshing. They truly understand local businesses and deliver campaigns that resonate with our target audience.",
      spotlightColor: "rgba(249, 115, 22, 0.2)", // Orange
    },
    {
      name: "Lisa Chen",
      company: "Main Street Boutique",
      role: "",
      testimonial: "Their team took the time to understand our vision and delivered results that exceeded our expectations. They're professional, creative, and genuinely invested in our success.",
      spotlightColor: "rgba(236, 72, 153, 0.2)", // Pink
    },
    {
      name: "Robert Williams",
      company: "Downtown Restaurant Group",
      role: "",
      testimonial: "Forward Minded Media helped us navigate the digital landscape with confidence. Their strategic guidance and creative campaigns drove real growth for our business.",
      spotlightColor: "rgba(14, 165, 233, 0.2)", // Cyan
    }
  ];

  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 #d16cc7,
      0 0.03em 0.015em #6d3568,
      0 0.045em 0.03em #4a2345
    `,
    fontSize: '4rem'
  };

  return (
    <section className="py-20 bg-[#602d62]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="ThreeDee mb-6" style={{...lightShadowStyle, color: '#e8e1d4', paddingLeft: 0, paddingRight: 0 }}>
            Testimonials & Social Proof
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto italic">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us at <strong>Forward Minded Media</strong>.
          </p>
        </div>

        {/* Horizontal Scrollable Testimonials */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-scroll pb-6 scrollbar-hide snap-x snap-mandatory px-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ width: 'max-content', minWidth: '100%' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-80 snap-start">
                <SpotlightCard 
                  className="h-full"
                  spotlightColor={testimonial.spotlightColor}
                >
                  <div className="h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-6 flex justify-center">
                      <svg 
                        className="w-12 h-12" 
                        fill="#f7ba40" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow italic">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="text-center">
                      <h4 className="text-white text-xl font-bold mb-1">
                        {testimonial.name}
                      </h4>
                      {testimonial.role && (
                        <p className="text-gray-400 text-sm mb-1">
                          {testimonial.role}
                        </p>
                      )}
                      <p className="text-gray-500 text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Scroll to see more testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>
        
        {/* Logo Slider */}
        <LogoSlider />
      </div>
      
      <style jsx>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }
        
        /* Smooth scrolling */
        .overflow-x-scroll {
          scroll-behavior: smooth;
        }
        
        /* Force correct font for BlurText title */
        .blur-text-title,
        .blur-text-title * {
          font-family: "proxima-nova", sans-serif !important;
          font-weight: 800 !important;
          font-style: normal !important;
        }
        
        /* Fade effect on right edge only */
        .relative::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 24px; /* Account for padding-bottom */
          right: 0;
          width: 100px;
          pointer-events: none;
          z-index: 10;
          background: linear-gradient(to left, rgba(42, 18, 50, 1), rgba(42, 18, 50, 0.8) 30%, rgba(42, 18, 50, 0));
        }
        
        /* Mobile adjustments - smaller gradient */
        @media (max-width: 768px) {
          .relative::after {
            width: 60px;
            background: linear-gradient(to left, rgba(42, 18, 50, 1), rgba(42, 18, 50, 0.6) 40%, rgba(42, 18, 50, 0));
          }
        }
      `}</style>
    </section>
  );
}
