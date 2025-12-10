"use client";

import { useRef, useState, useEffect } from 'react';
import TextType from './TextType';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Double the Impact",
    client: "First National Bank",
    category: "Multichannel Campaign",
    description: "Increased brand awareness and new account signups through digital display, radio, and social video. Results: 200% increase in impressions, 32% rise in signups, 40% lower cost-per-lead.",
    imageSrc: "/firstnational.jpg",
    imageAlt: "First National Bank campaign",
    href: "/case-studies/first-national-bank",
  },
  {
    id: 2,
    title: "A Brand Glow-Up",
    client: "Infinite Youth Medical Spa",
    category: "Brand Refresh & Digital",
    description: "Complete brand refresh with logo redesign, lifestyle photography/video, SEO-friendly website, and retargeted ads. Results: Doubled web traffic, 25% higher average booking value, strong social engagement.",
    imageSrc: "/Infinite-Youth-Medical-Spa_49b6158f087279481f10f7ebaeb2ad1b.jpg",
    imageAlt: "Infinite Youth Medical Spa campaign",
    href: "/case-studies/infinite-youth",
  },
  {
    id: 3,
    title: "Hometown Hype Collaboration",
    client: "Local Brewery",
    category: "Video Production & Events",
    description: "Boosted attendance for seasonal beer release with Hometown Hype video episode, printed posters, social teasers, and QR scavenger hunt. Results: 60% higher attendance, 75% increase in social engagement, merchandise sellout.",
    imageSrc: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop",
    imageAlt: "Local brewery event and marketing",
    href: "/case-studies/local-brewery",
  },
  {
    id: 4,
    title: "Website Transformation",
    client: "Healthcare Provider",
    category: "Web Development",
    description: "Modern, accessible website with patient portal integration and appointment booking.",
    imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    imageAlt: "Modern website design on laptop",
    href: "#",
  },
  {
    id: 5,
    title: "Public Relations Initiative",
    client: "Non-Profit Organization",
    category: "Public Relations",
    description: "Strategic PR campaign that secured major media coverage and doubled donor base.",
    imageSrc: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Press conference and media coverage",
    href: "#",
  },
];

export default function RecentProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const hasMovedRef = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragThreshold = 5; // Minimum pixels to move before considering it a drag

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent | MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    const pageX = 'pageX' in e ? e.pageX : e.clientX;
    startX.current = pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    // Don't reset here, let mouseup handle it
  };

  const handleMouseUp = (e?: MouseEvent) => {
    setIsDragging(false);
    // Reset after a short delay to allow click handler to check
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 100);
  };

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const pageX = 'pageX' in e ? e.pageX : e.clientX;
    const x = pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Multiply by 2 for faster scrolling
    
    // Check if we've moved enough to consider it a drag
    if (Math.abs(walk) > dragThreshold) {
      hasMovedRef.current = true;
    }
    
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    
    // Check if we've moved enough to consider it a drag
    if (Math.abs(walk) > dragThreshold) {
      hasMovedRef.current = true;
    }
    
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Reset after a short delay to allow click handler to check
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 100);
  };

  // Add document-level event listeners for dragging
  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (isDragging && scrollContainerRef.current) {
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        
        if (Math.abs(walk) > dragThreshold) {
          hasMovedRef.current = true;
        }
        
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
      }
    };

    const handleDocumentMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setTimeout(() => {
          hasMovedRef.current = false;
        }, 100);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleDocumentMouseMove);
        document.removeEventListener('mouseup', handleDocumentMouseUp);
      };
    }
  }, [isDragging, dragThreshold]);

  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 #d16cc7,
      0 0.03em 0.015em #6d3568,
      0 0.045em 0.03em #4a2345
    `,
    fontSize: '4rem'
  };

  return (
    <section id="recent-projects" className="py-24 bg-gradient-to-b from-[#2a1232] to-[#3a1945] overflow-visible relative">
      {/* Left side overlay image */}
      <div className="absolute left-0 top-0 h-full z-0 pointer-events-none flex items-start pt-4">
        <img 
          src="/left-side.png" 
          alt="" 
          className="w-auto object-contain hidden md:block"
          style={{ opacity: 0.15, height: '50%' }}
        />
        <img 
          src="/left-side.png" 
          alt="" 
          className="w-auto object-contain block md:hidden"
          style={{ opacity: 0.15, height: '20%' }}
        />
      </div>
      
      {/* Right side overlay image */}
      <div className="absolute right-0 top-0 h-full z-0 pointer-events-none flex items-start pt-4">
        <img 
          src="/right-side.png" 
          alt="" 
          className="w-auto object-contain hidden md:block"
          style={{ opacity: 0.15, height: '50%' }}
        />
        <img 
          src="/right-side.png" 
          alt="" 
          className="w-auto object-contain block md:hidden"
          style={{ opacity: 0.15, height: '20%' }}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-16 px-8 relative z-10">
          <h2 className="ThreeDee mb-6" style={{...lightShadowStyle, color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700}}>
            <TextType 
              text="Recent Projects"
              typingSpeed={100}
              showCursor={false}
              loop={false}
              startOnVisible={true}
              className="inline-block"
            />
          </h2>
          <p className="text-[#e8e1d4] text-xl max-w-3xl mx-auto" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
            A showcase of our latest work and the <strong>results we've delivered</strong> for our clients.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative overflow-visible w-full z-10 pl-6 pr-6 md:pl-8 lg:pl-12 md:pr-8">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-scroll overflow-y-visible pb-6 pt-4 scrollbar-hide snap-x snap-mandatory select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ 
              width: 'max-content', 
              minWidth: '100%',
              userSelect: isDragging ? 'none' : 'auto'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {sampleProjects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                draggable="false"
                className="project-card flex-none w-80 md:w-[450px] h-[520px] snap-start flex flex-col no-underline cursor-pointer"
                style={{ pointerEvents: isDragging && hasMovedRef.current ? 'none' : 'auto' }}
                onDragStart={(e) => {
                  e.preventDefault();
                  return false;
                }}
                onMouseDown={(e) => {
                  // Prevent default link drag behavior and let the container handle dragging
                  e.preventDefault();
                  if (scrollContainerRef.current) {
                    handleMouseDown(e);
                  }
                }}
                onClick={(e) => {
                  if (hasMovedRef.current || isDragging) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl h-64 bg-gray-200 flex-shrink-0">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    draggable="false"
                  />
                </div>

                {/* Project Details */}
                <div className="bg-[#2a1232] rounded-b-2xl p-6 pl-8 shadow-lg flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <p className="text-[#e8e1d4] font-semibold mb-3" style={{ fontFamily: '"halcom", sans-serif' }}>
                    {project.client}
                  </p>
                  <p className="text-white/90 mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center text-[#f7ba40] font-semibold transition-colors duration-300">
                    View Project
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
            {/* Spacer to ensure last card can scroll fully into view */}
            <div className="flex-none w-6 md:w-0" aria-hidden="true"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <p className="text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Scroll to see more projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>

      <style jsx>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scrolling */
        .overflow-x-scroll {
          scroll-behavior: smooth;
        }

        /* Project card hover effect */
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
          text-decoration: none;
          color: inherit;
        }
        
        .project-card:visited {
          color: inherit;
        }
        
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover {
            transform: translateY(-12px);
            z-index: 10;
          }
        }
        
        @media (max-width: 768px) {
          .project-card {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        }

        /* Line clamp for description */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Ensure overflow is visible for hover effects */
        .overflow-y-visible {
          overflow-y: visible !important;
        }
        
        /* Ensure wrapper allows cards to lift */
        .relative.overflow-visible {
          padding-top: 20px;
          margin-top: -20px;
        }
      `}</style>
    </section>
  );
}

