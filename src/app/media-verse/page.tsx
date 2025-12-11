"use client";

import { useEffect } from 'react';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';
import InfiniteMenu from '@/components/InfiniteMenu';
import Galaxy from '@/components/Galaxy';

export default function MediaVersePage() {
  // Menu items configuration
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
    { label: 'What We Do', ariaLabel: 'View our services', link: '#what-we-do' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '#our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '#recent-projects' },
    { label: 'Clients', ariaLabel: 'Read client testimonials', link: '#clients' },
    { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems: Array<{ label: string; link: string }> = [
    { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61562268475609' },
    { label: 'Instagram', link: 'https://www.instagram.com/forwardmindedmedia/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/forward-minded-media' },
    { label: 'TikTok', link: 'https://www.tiktok.com/@forwardmindedmedia?_r=1&_t=ZT-91Z7KwViAP7' }
  ];

  // Infinite Menu items - customize these with your actual media content
  const infiniteMenuItems = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Project 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Project 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Project 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Project 4',
      description: 'This is pretty cool, right?'
    }
  ];

  useEffect(() => {
    // Ensure body has black background and disable scroll to prevent white flicker
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.top = '0';
    document.body.style.left = '0';
    
    // Prevent ALL scroll events
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    
    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    
    // Add listeners to prevent scrolling
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('wheel', preventWheel, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('scroll', preventScroll, { passive: false });
    document.addEventListener('wheel', preventWheel, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    
    return () => {
      // Cleanup on unmount
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      document.body.style.left = '';
      
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventWheel);
      window.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('scroll', preventScroll);
      document.removeEventListener('wheel', preventWheel);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #000000 !important;
          overflow: hidden !important;
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          touch-action: none !important;
          overscroll-behavior: none !important;
          -webkit-overscroll-behavior: none !important;
        }
        html {
          background-color: #000000 !important;
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
          touch-action: none !important;
          overscroll-behavior: none !important;
          -webkit-overscroll-behavior: none !important;
          color-scheme: dark !important;
        }
        #__next {
          background-color: #000000 !important;
          overflow: hidden !important;
          touch-action: none !important;
          overscroll-behavior: none !important;
        }
        * {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: none !important;
        }
        .galaxy-container,
        .galaxy-container canvas {
          background-color: #000000 !important;
        }
        
        /* Prevent Chrome's overscroll white background */
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        backgroundColor: '#000000', 
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <AdobeFonts />
      
      {/* Staggered Menu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/Logo-Dark.png"
        accentColor="#85417f"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Black Background Layer */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundColor: '#000000'
      }} />

      {/* Galaxy Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        backgroundColor: '#000000'
      }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.8}
          glowIntensity={0.2}
          saturation={0.8}
          hueShift={240}
          transparent={false}
        />
      </div>

      {/* Full Page Infinite Menu */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 2 }}>
        <InfiniteMenu items={infiniteMenuItems} />
      </div>
    </div>
    </>
  );
}

