"use client";

import { useState, useEffect } from 'react';

export default function ScrollRevealSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 #d16cc7,
      0 0.03em 0.015em #6d3568,
      0 0.045em 0.03em #4a2345
    `,
    fontSize: '5rem'
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
          Local Roots<br />
          <span style={{ fontStyle: 'italic' }}>National Reach</span>
        </>
      ),
      content: "Founded in Mankato Minnesota – Reach that extends coast to coast."
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="pt-32 pb-24 bg-[#e8e1d4]">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-20 relative">
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

        <div className="relative min-h-[400px] flex items-center justify-center">
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
              <div className="mt-16 px-8">
                <h3 className="ThreeDee mb-8" style={lightShadowStyle}>
                  {slide.title}
                </h3>
                <p className="text-[#2a1232] text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400 }}>
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
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#5227FF] w-8'
                  : 'bg-[#2a1232]/30 hover:bg-[#2a1232]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
          border-bottom: 3px solid #f7ba40;
          border-right: 3px solid #f7ba40;
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
    </section>
  );
}

