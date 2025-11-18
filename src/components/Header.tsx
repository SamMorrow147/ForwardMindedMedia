"use client";

import { useState, useEffect } from 'react';

function HeaderSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  
  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 #d16cc7,
      0 0.03em 0.015em #6d3568,
      0 0.045em 0.03em #4a2345
    `,
    fontSize: '3.5rem'
  };

  const slides = [
    {
      id: 0,
      title: "Full-Service Expertise",
      content: "Digital ads, graphic design, video production, communications management, website building, consulting and public relations training. You name it we got you covered."
    },
    {
      id: 1,
      title: "True Partnerships",
      content: "Our marketing is not just an expense; it's a collaboration."
    },
    {
      id: 2,
      title: (
        <>
          Local Roots <span style={{ fontStyle: 'italic' }}>National Reach</span>
        </>
      ),
      content: "Founded in Mankato Minnesota – Reach that extends coast to coast."
    }
  ];

  // Auto-advance slides - resets when lastInteraction changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length, lastInteraction]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setLastInteraction(Date.now()); // Reset timer
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setLastInteraction(Date.now()); // Reset timer
  };
  
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setLastInteraction(Date.now()); // Reset timer
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-8 md:px-20 relative">
      {/* Left Arrow */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <div 
          className="arrow arrow-left" 
          onClick={handlePrevSlide}
          role="button"
          aria-label="Previous slide"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlePrevSlide();
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <div 
          className="arrow arrow-right" 
          onClick={handleNextSlide}
          role="button"
          aria-label="Next slide"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNextSlide();
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="relative min-h-[200px] flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 text-center transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="px-8 mt-2">
              <h1 className="ThreeDee text-white mb-8" style={{...lightShadowStyle, fontFamily: '"scandia-web", sans-serif', fontWeight: 700, whiteSpace: 'nowrap', textAlign: 'center', width: '100%'}}>
                {slide.title}
              </h1>
              <p className="text-black text-2xl md:text-3xl leading-relaxed max-w-6xl mx-auto" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400 }}>
                {slide.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#85417f] w-8'
                : 'bg-[#85417f]/30 hover:bg-[#85417f]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .arrow {
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          min-width: 60px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .arrow-left {
          transform: rotate(90deg);
        }

        .arrow-right {
          transform: rotate(270deg);
        }

        .arrow:hover {
          opacity: 0.8;
        }

        .arrow-left:hover {
          transform: rotate(90deg) scale(1.1);
        }

        .arrow-right:hover {
          transform: rotate(270deg) scale(1.1);
        }

        .arrow-left:active {
          transform: rotate(90deg) scale(0.95);
        }

        .arrow-right:active {
          transform: rotate(270deg) scale(0.95);
        }

        .arrow span {
          display: block;
          width: 1.5rem;
          height: 1.5rem;
          border-bottom: 3px solid #85417f;
          border-right: 3px solid #85417f;
          transform: rotate(45deg);
          margin: -10px;
          animation: animate 2s infinite;
        }

        .arrow span:nth-child(2) {
          animation-delay: -0.2s;
        }

        .arrow span:nth-child(3) {
          animation-delay: -0.4s;
        }

        @keyframes animate {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-20px, -20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px, 20px);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .arrow {
            min-height: 50px;
            min-width: 50px;
          }

          .arrow span {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative h-[35vh] w-full bg-[#f7ba40]">
      {/* Content layer */}
      <header className="relative z-20 flex items-center justify-center h-full">
        <HeaderSlider />
      </header>
              
              <style jsx>{`
                /* Header title responsive layout */
                .header-title {
                  font-size: 60px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 0.1em;
                  font-family: "scandia-web", sans-serif;
                  font-weight: 700;
                  font-style: normal;
                }
                
                .header-title span {
                  font-family: inherit;
                  font-style: inherit;
                }
                
                .regular-weight {
                  font-weight: 400 !important;
                }
                
                .bold-weight {
                  font-weight: 700 !important;
                }
                
                /* Mobile: Show on mobile, hide on desktop */
                .mobile-only {
                  display: none;
                  align-items: center;
                  justify-content: center;
                  gap: 0.3em;
                }
                
                /* Desktop: Hide on mobile, show on desktop */
                .desktop-only {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.3em;
                }
                
                .desktop-inline {
                  display: inline-flex;
                }
                
                .rotating-word-wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.3em;
                }
                
                /* Mobile styles */
                @media (max-width: 767px) {
                  .mobile-only {
                    display: flex;
                  }
                  
                  .desktop-only {
                    display: none;
                  }
                  
                  .desktop-inline {
                    display: none;
                  }
                  
                  .rotating-word-wrapper {
                    display: flex;
                  }
                  
                  .header-title {
                    font-size: 48px;
                  }
                }
                
                /* Desktop styles */
                @media (min-width: 768px) {
                  .mobile-only {
                    display: none;
                  }
                  
                  .desktop-only {
                    display: flex;
                  }
                  
                  .desktop-inline {
                    display: inline-flex;
                  }
                  
                  .rotating-word-wrapper {
                    display: inline-flex;
                  }
                }
              `}</style>
    </div>
  );
}
