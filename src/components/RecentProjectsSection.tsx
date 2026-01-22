"use client";

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
    description: "A multichannel campaign combining digital display, radio and targeted social video doubled brand awareness and delivered a 32% rise in new account signups. Cost-per-lead dropped by 40%.",
    imageSrc: "/firstnational.jpg",
    imageAlt: "First National Bank campaign",
    href: "/case-studies/first-national-bank",
  },
  {
    id: 2,
    title: "A Brand Glow-Up",
    client: "Infinite Youth Medical Spa",
    category: "Brand Refresh & Digital",
    description: "A complete brand refresh, including a logo redesign, lifestyle photography/video, an SEO-friendly website and retargeted ads, doubled web traffic and lifted average booking values by 25%.",
    imageSrc: "/Infinite-Youth-Medical-Spa_49b6158f087279481f10f7ebaeb2ad1b.jpg",
    imageAlt: "Infinite Youth Medical Spa campaign",
    href: "/case-studies/infinite-youth",
  },
  {
    id: 3,
    title: "Hometown Hype Collaboration",
    client: "Local Brewery",
    category: "Video Production & Events",
    description: "A special Hometown Hype video episode paired with posters, social teasers and an interactive QR scavenger hunt boosted event attendance by 60% and increased social engagement by 75%.",
    imageSrc: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop",
    imageAlt: "Local brewery event and marketing",
    href: "/case-studies/local-brewery",
  }
];

export default function RecentProjectsSection() {
  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 #d16cc7,
      0 0.03em 0.015em #6d3568,
      0 0.045em 0.03em #4a2345
    `,
    fontSize: '4rem'
  };

  return (
    <section id="recent-projects" className="pb-24 bg-gradient-to-b from-[#2a1232] to-[#3a1945] overflow-visible relative" style={{ paddingTop: '60px' }}>
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
          <h2 className="mb-3 recent-projects-title-wrapper">
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
            <span className="inline-block w-2 md:w-8">&nbsp;</span>
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
          <p className="text-[#e8e1d4] text-3xl max-w-3xl mx-auto" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
            A showcase of our latest work and the <strong>results we've delivered</strong> for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="relative w-full z-10 projects-grid-container max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card-wrapper"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 60,
                    scale: 0.9
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
                <a
                  href={project.href}
                  className="project-card flex flex-col no-underline cursor-pointer h-full"
                >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl h-64 bg-gray-200 flex-shrink-0">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.div 
            className="flex justify-center mt-8"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.75
                }
              }
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
        </motion.div>

      <style jsx global>{`
        /* Projects Grid Container */
        .projects-grid-container {
          padding: 0 2rem;
        }
        
        .project-card-wrapper {
          display: flex;
        }

        /* Project card hover effect */
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
          text-decoration: none;
          color: inherit;
          border: 2px solid #f7ba40;
          border-radius: 1rem;
          overflow: hidden;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
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
        
        /* Line clamp for description */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .projects-grid-container {
            padding: 0 1rem;
          }
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
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #5227FF 90%, #85417F 100%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          -webkit-background-clip: content-box, border-box;
          position: relative;
          cursor: pointer;
          text-decoration: none;
          will-change: transform, background-position;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          background-color: #212121;
          will-change: background-color, z-index;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          -webkit-filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
          will-change: opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          will-change: transform;
          transform: translateZ(0);
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
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        @keyframes animStar {
          from {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -135rem, 0);
            -webkit-transform: translate3d(0, -135rem, 0);
          }
        }

        @keyframes animStarRotate {
          from {
            transform: rotate(360deg) translateZ(0);
            -webkit-transform: rotate(360deg) translateZ(0);
          }
          to {
            transform: rotate(0deg) translateZ(0);
            -webkit-transform: rotate(0deg) translateZ(0);
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

