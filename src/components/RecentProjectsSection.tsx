"use client";

import { useRef, useState, useEffect } from 'react';
import TextType from './TextType';
import ScrollFloat from './ScrollFloat';
import { motion } from 'framer-motion';

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
    <section id="recent-projects" className="pt-56 pb-24 bg-gradient-to-b from-[#2a1232] to-[#3a1945] overflow-visible relative">
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
          <h2 className="mb-6 recent-projects-title-wrapper">
            <ScrollFloat
              as="span"
              scrollContainerRef={null}
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center-=20%"
              stagger={0.03}
              containerClassName="recent-projects-title inline"
              textClassName=""
              style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', ...lightShadowStyle, color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontStyle: 'normal' }}
            >
              Recent
            </ScrollFloat>
            <span className="hidden md:inline" style={{ width: '32px', display: 'inline-block' }}>&nbsp;</span>
            <br className="md:hidden" />
            <ScrollFloat
              as="span"
              scrollContainerRef={null}
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center-=20%"
              stagger={0.03}
              containerClassName="recent-projects-title inline"
              textClassName=""
              style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', ...lightShadowStyle, color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontStyle: 'normal' }}
            >
              Projects
            </ScrollFloat>
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

          {/* Button */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2
            }}
          >
            <a 
              href="/media-verse" 
              className="btn-animated-projects no-underline"
            >
              <strong>Explore Our Media Verse</strong>
              <div id="container-stars-projects">
                <div id="stars-projects"></div>
              </div>
              <div id="glow-projects">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </a>
          </motion.div>
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

        /* Animated Button Styles */
        .btn-animated-projects {
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
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #5227FF 90%, #85417F 100%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          position: relative;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-animated-projects strong {
          z-index: 2;
          font-family: "scandia-web", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFFFFF;
          text-shadow: 0 0 4px white;
          text-transform: uppercase;
        }

        #container-stars-projects {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
          background-color: #212121;
        }

        #glow-projects {
          position: absolute;
          display: flex;
          width: 100%;
        }

        .btn-animated-projects .circle {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
        }

        .btn-animated-projects .circle:nth-of-type(1) {
          background: rgba(254, 83, 186, 0.636);
        }

        .btn-animated-projects .circle:nth-of-type(2) {
          background: rgba(142, 81, 234, 0.704);
        }

        .btn-animated-projects:hover #container-stars-projects {
          z-index: -1;
          background-color: transparent;
        }

        .btn-animated-projects:hover {
          transform: scale(1.1);
        }

        .btn-animated-projects:active {
          border: double 4px #FE53BB;
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: none;
        }

        .btn-animated-projects:active .circle {
          background: #FE53BB;
        }

        #stars-projects {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
        }

        #stars-projects::after {
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

        #stars-projects::before {
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
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-135rem);
          }
        }

        @keyframes animStarRotate {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0);
          }
        }

        @keyframes gradient_301 {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse_3011 {
          0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

