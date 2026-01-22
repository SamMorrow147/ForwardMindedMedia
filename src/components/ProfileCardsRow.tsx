"use client";

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProfileCard from './ProfileCard';
import ScrollFloat from './ScrollFloat';
import './ProfileCardsRow.css';
import { teamMembers } from '@/data/teamMembers';

interface ProfileData {
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  iconUrl: string;
  backstory?: string;
  funFact?: string;
  calendlyLink?: string;
  showUserInfo?: boolean;
}

const ProfileCardsRow = () => {
  const sliderRef = useRef<Slider>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const profiles: ProfileData[] = teamMembers;

  // Handle window resize and initial setup
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
      // Force slider to recalculate on resize
      if (sliderRef.current) {
        setTimeout(() => {
          // Force a refresh by going to current slide
          const currentSlide = (sliderRef.current as any)?.innerSlider?.state?.currentSlide || 0;
          sliderRef.current?.slickGoTo(currentSlide);
        }, 100);
      }
    };

    // Set initial width immediately
    if (typeof window !== 'undefined') {
      // Set initial values immediately to avoid delay
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Force slider refresh after mount to ensure all slides render
  useEffect(() => {
    if (sliderRef.current) {
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Helper function to get max slide for current viewport
  const getMaxSlide = (slidesVisible: number) => {
    const totalSlides = profiles.length;
    // For partial slides (like 2.5), we need to ensure the last slide can be fully scrolled into view
    // Max slide should be: totalSlides - slidesVisible (rounded up)
    // This ensures we can't scroll past the point where the last slide is fully visible
    return Math.max(0, Math.floor(totalSlides - slidesVisible));
  };

  // Helper function to prevent over-scrolling
  const handleAfterChange = (currentSlide: number, slidesVisible: number) => {
    if (!isMobile && sliderRef.current) {
      const maxSlide = getMaxSlide(slidesVisible);
      
      // If we've scrolled past the max, snap back immediately
      if (currentSlide > maxSlide) {
        // Use requestAnimationFrame for immediate update
        requestAnimationFrame(() => {
          if (sliderRef.current) {
            sliderRef.current.slickGoTo(maxSlide);
          }
        });
      }
    }
  };

  // Handle arrow click to navigate to next card
  const handleArrowClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };


  // React Slick settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    arrows: false, // Removed navigation arrows
    accessibility: true,
    initialSlide: 0,
    edgeFriction: 0.35, // Add friction to prevent over-scrolling
    variableWidth: true, // Allow cards to have their natural width
    onInit: () => {
      // Force slider to recalculate on init
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    },
    afterChange: (currentSlide: number) => {
      // On desktop, prevent scrolling past the last card
      if (!isMobile && sliderRef.current) {
        const totalSlides = profiles.length;
        const maxSlide = totalSlides - 1;
        
        if (currentSlide > maxSlide) {
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(maxSlide);
            }
          });
        }
      }
    },
    onSwipe: (direction: string) => {
      // Prevent swiping past the last card on desktop
      if (!isMobile && sliderRef.current) {
        const totalSlides = profiles.length;
        const maxSlide = totalSlides - 1;
        const currentSlide = (sliderRef.current as any)?.innerSlider?.state?.currentSlide || 0;
        
        if (direction === 'left' && currentSlide >= maxSlide) {
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(maxSlide);
            }
          });
        }
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
          edgeFriction: 0.35,
        }
      }
    ]
  };


  return (
    <section className="bg-gradient-to-b from-[#2a1232] to-[#3a1945] flex flex-col items-center pt-16 pb-8">
      <div className="text-center mb-12 px-4">
        <h2 className="ThreeDee text-white mb-6 our-team-title">
          <ScrollFloat
            as="span"
            scrollContainerRef={null}
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="center center-=20%"
            stagger={0.03}
            containerClassName=""
            textClassName=""
            style={{}}
          >
            Our Team
          </ScrollFloat>
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto italic" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
          Meet the talented individuals behind <strong>Forward Minded Media</strong>
        </p>
      </div>

      {/* Cards Container - React Slick */}
      <div className="w-full profile-cards-slider-container">
        <Slider ref={sliderRef} {...sliderSettings} className="profile-cards-slider">
          {profiles.map((profile, index) => {
            // Create back content for each card
            let backContent: React.ReactNode = null;
            
            if (profile.name === "And More...") {
              backContent = (
                <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
                    <p style={{ color: '#f7ba40', fontSize: '1rem' }}>{profile.title}</p>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                      {profile.backstory}
                    </p>
                  </div>
                </div>
              );
            } else if (profile.name === "Maybe You?") {
              backContent = (
                <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
                    <p style={{ color: '#f7ba40', fontSize: '1rem' }}>{profile.title}</p>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                      {profile.backstory}
                    </p>
                    <a 
                      href="/careers" 
                      style={{ 
                        color: '#f7ba40', 
                        textDecoration: 'underline',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        pointerEvents: 'auto'
                      }}
                    >
                      View Open Positions →
                    </a>
                  </div>
                </div>
              );
            } else if (profile.backstory) {
              // For all team members with backstory
              backContent = (
                <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
                    <p style={{ color: '#f7ba40', fontSize: '1rem' }}>{profile.title}</p>
                  </div>
                  <div style={{ textAlign: 'left', flex: 1, overflowY: 'auto' }}>
                    <strong>Backstory:</strong>
                    <p style={{ marginBottom: '1rem' }}>{profile.backstory}</p>
                    {profile.funFact && (
                      <>
                        <strong>Fun Fact:</strong>
                        <p style={{ marginBottom: '1rem' }}>{profile.funFact}</p>
                      </>
                    )}
                    {profile.calendlyLink && (
                      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <a 
                          href={profile.calendlyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            color: '#f7ba40', 
                            textDecoration: 'underline',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            pointerEvents: 'auto'
                          }}
                        >
                          Book a meeting with me →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            
            return (
              <div key={index} className="profile-card-slide">
                <ProfileCard
                  name={profile.name}
                  title={profile.title}
                  handle={profile.handle}
                  status={profile.status}
                  contactText="More Info"
                  avatarUrl={profile.avatarUrl}
                  iconUrl={profile.iconUrl}
                  showUserInfo={profile.showUserInfo !== false}
                  enableTilt={!isMobile}
                  enableMobileTilt={false}
                  enableFlip={true}
                  backContent={backContent as any}
                  onContactClick={() => console.log(`Contact ${profile.name}`)}
                />
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Animated Arrow - Desktop and Mobile */}
      <div className="arrow-wrapper">
        <div className="arrow-container">
          <div 
            className="arrow" 
            onClick={handleArrowClick}
            role="button"
            aria-label="View next team member"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleArrowClick();
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Who We Are Button */}
      <div className="flex justify-center mt-2 mb-0">
        <a 
          href="/who-we-are" 
          className="btn-animated-team no-underline"
        >
          <strong>Who We Are</strong>
          <div id="container-stars-team">
            <div id="stars-team"></div>
          </div>
          <div id="glow-team">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </a>
      </div>

      <style jsx>{`
        .our-team-title {
          font-family: "scandia-web", sans-serif !important;
          font-weight: 700 !important;
          font-style: italic !important;
        }
        .our-team-title :global(*) {
          font-family: inherit !important;
          font-weight: inherit !important;
          font-style: inherit !important;
        }
        
        .arrow-wrapper {
          width: 100%;
          overflow: visible;
          position: relative;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 2rem;
          margin-top: -3rem;
        }

        .arrow-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          height: auto;
          overflow: visible;
          position: relative;
        }

        .arrow {
          position: relative;
          transform: rotate(270deg);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80px;
          min-width: 80px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .arrow:hover {
          opacity: 0.8;
          transform: rotate(270deg) scale(1.1);
        }

        .arrow:active {
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

        /* Who We Are Button Styles */
        :global(.btn-animated-team) {
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
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #85417F 100%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          position: relative;
          cursor: pointer;
          text-decoration: none;
        }

        :global(.btn-animated-team strong) {
          z-index: 2;
          font-family: "scandia-web", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFFFFF;
          text-shadow: 0 0 4px white;
          text-transform: uppercase;
        }

        :global(#container-stars-team) {
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

        :global(#glow-team) {
          position: absolute;
          display: flex;
          width: 100%;
        }

        :global(.btn-animated-team .circle) {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
        }

        :global(.btn-animated-team .circle:nth-of-type(1)) {
          background: rgba(254, 83, 186, 0.636);
        }

        :global(.btn-animated-team .circle:nth-of-type(2)) {
          background: rgba(142, 81, 234, 0.704);
        }

        :global(.btn-animated-team:hover #container-stars-team) {
          z-index: -1;
          background-color: transparent;
        }

        :global(.btn-animated-team:hover) {
          transform: scale(1.1);
        }

        :global(.btn-animated-team:active) {
          border: double 4px #FE53BB;
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: none;
        }

        :global(.btn-animated-team:active .circle) {
          background: #FE53BB;
        }

        :global(#stars-team) {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
        }

        :global(#stars-team::after) {
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

        :global(#stars-team::before) {
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
};

export default ProfileCardsRow;