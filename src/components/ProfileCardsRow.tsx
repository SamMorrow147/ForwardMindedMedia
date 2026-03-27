"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProfileCard from './ProfileCard';
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
  const router = useRouter();
  const sliderRef = useRef<Slider>(null);

  // Always start false to match the server render, then update after mount
  const [isMobile, setIsMobile] = useState(false);

  const profiles: ProfileData[] = teamMembers;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (sliderRef.current) {
        setTimeout(() => {
          const currentSlide = (sliderRef.current as any)?.innerSlider?.state?.currentSlide || 0;
          sliderRef.current?.slickGoTo(currentSlide);
        }, 100);
      }
    };

    // Set the real value after hydration — safe because useEffect is client-only
    setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const handleArrowClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMobile) {
      router.push('/our-team');
      return;
    }
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Desktop-only slick settings
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
    arrows: false,
    accessibility: true,
    initialSlide: 0,
    edgeFriction: 0.35,
    variableWidth: true,
    onInit: () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    },
    afterChange: (currentSlide: number) => {
      if (sliderRef.current) {
        const maxSlide = profiles.length - 1;
        if (currentSlide > maxSlide) {
          requestAnimationFrame(() => {
            sliderRef.current?.slickGoTo(maxSlide);
          });
        }
      }
    },
    onSwipe: (direction: string) => {
      if (sliderRef.current) {
        const maxSlide = profiles.length - 1;
        const currentSlide = (sliderRef.current as any)?.innerSlider?.state?.currentSlide || 0;
        if (direction === 'left' && currentSlide >= maxSlide) {
          requestAnimationFrame(() => {
            sliderRef.current?.slickGoTo(maxSlide);
          });
        }
      }
    },
  };

  // Back content builder (desktop flip cards only)
  const getBackContent = (profile: ProfileData): React.ReactNode => {
    if (profile.name === 'And More...') {
      return (
        <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
            <p style={{ color: '#f7ba40', fontSize: '1rem' }}>{profile.title}</p>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>{profile.backstory}</p>
          </div>
        </div>
      );
    }
    if (profile.name === 'Maybe You?') {
      return (
        <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{profile.name}</h3>
            <p style={{ color: '#f7ba40', fontSize: '1rem' }}>{profile.title}</p>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>{profile.backstory}</p>
            <a href="/careers" style={{ color: '#f7ba40', textDecoration: 'underline', fontSize: '1.1rem', fontWeight: 'bold', pointerEvents: 'auto' }}>
              View Open Positions →
            </a>
          </div>
        </div>
      );
    }
    if (profile.backstory) {
      return (
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
                <a href={profile.calendlyLink} target="_blank" rel="noopener noreferrer" style={{ color: '#f7ba40', textDecoration: 'underline', fontSize: '1.1rem', fontWeight: 'bold', pointerEvents: 'auto' }}>
                  Book a meeting with me →
                </a>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="bg-gradient-to-b from-[#2a1232] to-[#3a1945] flex flex-col items-center pt-16 pb-8">
      <div className="text-center mb-16 px-6">
        <h2
          className="mb-6"
          style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
        >
          Our Team
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto italic leading-relaxed" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
          Meet the talented individuals behind <strong>Forward Minded Media</strong>
        </p>
      </div>

      {/* Mobile: native CSS scroll — no JS touch handling, no react-slick conflicts */}
      {isMobile ? (
        <div className="mobile-cards-scroll">
          {profiles.map((profile, index) => (
            <div key={index} className="mobile-card-slide">
              <ProfileCard
                name={profile.name}
                title={profile.title}
                handle={profile.handle}
                status={profile.status}
                contactText="More Info"
                avatarUrl={profile.avatarUrl}
                iconUrl={profile.iconUrl}
                showUserInfo={profile.showUserInfo !== false}
                enableTilt={false}
                enableMobileTilt={false}
                enableFlip={false}
                backContent={null}
                onContactClick={() => router.push('/our-team')}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: react-slick carousel (untouched) */
        <div className="w-full profile-cards-slider-container">
          <Slider ref={sliderRef} {...sliderSettings} className="profile-cards-slider">
            {profiles.map((profile, index) => (
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
                  enableTilt={true}
                  enableMobileTilt={false}
                  enableFlip={true}
                  backContent={getBackContent(profile) as any}
                  onContactClick={() => console.log(`Contact ${profile.name}`)}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Animated Arrow - Desktop and Mobile */}
      <div className="arrow-wrapper">
        <div className="arrow-container">
          <div 
            className="arrow" 
            onClick={(e) => handleArrowClick(e)}
            role="button"
            aria-label="View next team member"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleArrowClick(e);
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
          href="/our-team" 
          className="btn-animated-team no-underline"
        >
          <strong>View Full Roster</strong>
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
        .arrow-wrapper {
          width: 100%;
          overflow: visible;
          position: relative;
          z-index: 10;
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
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #85417F 100%);
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
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          background-color: #212121;
          will-change: background-color, z-index;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          -webkit-filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
          will-change: opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          will-change: transform;
          transform: translateZ(0);
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
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
};

export default ProfileCardsRow;