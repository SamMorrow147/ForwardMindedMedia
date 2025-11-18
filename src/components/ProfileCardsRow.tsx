"use client";

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProfileCard from './ProfileCard';
import './ProfileCardsRow.css';

interface ProfileData {
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  iconUrl: string;
}

const ProfileCardsRow = () => {
  const sliderRef = useRef<Slider>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const profiles: ProfileData[] = [
    {
      name: "Jake",
      title: "Title Here",
      handle: "jake",
      status: "Available",
      avatarUrl: "/Person.png",
      iconUrl: "/4x/Asset%203@8x.png"
    },
    {
      name: "Kelsey",
      title: "Title Here",
      handle: "kelsey",
      status: "Online",
      avatarUrl: "/Person.png",
      iconUrl: "/4x/Asset%203@8x.png"
    },
    {
      name: "Addison",
      title: "Title Here",
      handle: "addison",
      status: "Available",
      avatarUrl: "/Person.png",
      iconUrl: "/4x/Asset%203@8x.png"
    },
    {
      name: "Sam",
      title: "Title Here",
      handle: "sam",
      status: "Online",
      avatarUrl: "/Person.png",
      iconUrl: "/4x/Asset%203@8x.png"
    },
    {
      name: "And More...",
      title: "Extended Team",
      handle: "team",
      status: "Ready",
      avatarUrl: "/Group.png",
      iconUrl: "/4x/Asset%203@8x.png"
    },
    {
      name: "Maybe You?",
      title: "Join Our Team",
      handle: "careers",
      status: "Hiring",
      avatarUrl: "/MaybeYou.png",
      iconUrl: "/4x/Asset%203@8x.png"
    }
  ];

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
    <section className="min-h-screen bg-gradient-to-b from-[#2a1232] to-[#3a1945] flex flex-col items-center justify-center pt-20 pb-0">
      <div className="text-center mb-12 px-4">
        <h2 className="ThreeDee text-white mb-6">Our Team</h2>
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
            
            if (profile.name === "Jake" || profile.name === "Kelsey" || profile.name === "Addison" || profile.name === "Sam") {
              backContent = (
                <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
                    <p style={{ color: '#f7ba40', fontSize: '1rem' }}>{profile.title}</p>
                  </div>
                  <div style={{ textAlign: 'left', flex: 1, overflowY: 'auto' }}>
                    <strong>Backstory:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <strong>Fun Fact:</strong>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              );
            } else if (profile.name === "And More...") {
              backContent = (
                <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>And More...</h3>
                    <p style={{ color: '#f7ba40', fontSize: '1rem' }}>Extended Team</p>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                      Behind every great campaign is an extensive network of talented professionals. Our team includes skilled account managers, creative content creators, expert videographers, innovative designers, and strategic media buyers—all working together to bring your vision to life and drive real results.
                    </p>
                  </div>
                </div>
              );
            } else if (profile.name === "Maybe You?") {
              backContent = (
                <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Maybe You?</h3>
                    <p style={{ color: '#f7ba40', fontSize: '1rem' }}>Join Our Team</p>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                      We're always looking for talented, passionate people to join our team. If you're ready to challenge the status quo and create work that matters, we want to hear from you.
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
            }
            
            return (
              <div key={index} className="profile-card-slide">
                <ProfileCard
                  name={profile.name}
                  title={profile.title}
                  handle={profile.handle}
                  status={profile.status}
                  contactText="Contact"
                  avatarUrl={profile.avatarUrl}
                  iconUrl={profile.iconUrl}
                  showUserInfo={profile.name !== "Maybe You?"}
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

      <style jsx>{`
        .arrow-wrapper {
          width: 100%;
          overflow: visible;
          position: relative;
          min-height: 150px;
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
      `}</style>

    </section>
  );
};

export default ProfileCardsRow;