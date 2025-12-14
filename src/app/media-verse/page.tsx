"use client";

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';
import InfiniteMenu from '@/components/InfiniteMenu';
import Galaxy from '@/components/Galaxy';
import LoadingScreen from '@/components/LoadingScreen';

export default function MediaVersePage() {
  const [isLoading, setIsLoading] = useState(true);
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
    return () => {
      // Cleanup - nothing needed now since layout.tsx handles global black background
    };
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      backgroundColor: '#000000', 
      overflow: 'hidden'
    }}>
      {/* Loading Screen - Always render, overlays on top */}
      <LoadingScreen 
        onLoadingComplete={() => setIsLoading(false)}
        minimumLoadTime={3000}
      />
      
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
          transparent={true}
        />
      </div>

      {/* Full Page Infinite Menu */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 2 }}>
        <InfiniteMenu items={infiniteMenuItems} />
      </div>
    </div>
  );
}

