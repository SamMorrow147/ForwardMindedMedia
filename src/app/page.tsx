"use client";

import { useState, useEffect } from "react";
// import VideoHero from "@/components/VideoHero"; // Hidden
import Logo3DSection from "@/components/Logo3DSection";
import HeroTextSection from "@/components/HeroTextSection";
import Header from "@/components/Header";
import TrueFocusSection from "@/components/TrueFocusSection";
import Link from "next/link";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import ProfileCardsRow from "@/components/ProfileCardsRow";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur";
import StaggeredMenu from "@/components/StaggeredMenu";
import AdobeFonts from "@/components/AdobeFonts";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Detect when user is at bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // Check if user is within 50px of bottom
      const atBottom = scrollHeight - scrollTop - clientHeight < 50;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items configuration
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '/our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '#recent-projects' },
    { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
    { label: 'Hometown Hype', ariaLabel: 'Community spotlight series', link: '/case-studies/local-brewery' },
    { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems: Array<{ label: string; link: string }> = [
    { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61562268475609' },
    { label: 'Instagram', link: 'https://www.instagram.com/forwardmindedmedia/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/forward-minded-media' },
    { label: 'TikTok', link: 'https://www.tiktok.com/@forwardmindedmedia?_r=1&_t=ZT-91Z7KwViAP7' }
  ];

  return (
    <div>
      {/* Loading Screen - Always render, overlays on top */}
      <LoadingScreen 
        onLoadingComplete={() => setIsLoading(false)}
        minimumLoadTime={3000}
      />
      
      {/* Adobe Fonts Loader */}
      <AdobeFonts />
      
      {/* Staggered Menu - fixed positioned overlay */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#f7ba40"
        openMenuButtonColor="#85417f"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/Logo-Dark.png"
        accentColor="#85417f"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      
      {/* 3D Logo Section - Replaces Video Hero */}
      <Logo3DSection />
      
      {/* Hero Text Section */}
      <HeroTextSection />
      
      {/* Video Hero Section - Hidden */}
      {/* <VideoHero /> */}
      
      <RecentProjectsSection />
      <div id="clients">
        <TestimonialSection />
      </div>
      <div id="our-team">
        <ProfileCardsRow />
      </div>
      <div id="what-we-do">
        <ServicesSection />
      </div>
      <div id="focus">
        <TrueFocusSection />
      </div>
      <Footer />
      
      {/* Global page-level blur effect at the bottom of the screen */}
      <div style={{ 
        opacity: isAtBottom ? 0 : 1, 
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: 'none'
      }}>
        <GradualBlur
          target="page"
          position="bottom"
          height="8rem"
          mobileHeight="2.5rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={1}
          responsive={true}
        />
      </div>
    </div>
  );
}
