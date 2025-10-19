"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useDragControls } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Framer Motion values for smooth scrolling
  const x = useMotionValue(0);
  const springX = useSpring(x, { 
    stiffness: 100, 
    damping: 20,
    mass: 0.8
  });
  const dragControls = useDragControls();

  const profiles: ProfileData[] = [
    {
      name: "Name Here",
      title: "CEO & Founder",
      handle: "sammorrow",
      status: "Available",
      avatarUrl: "/Person.png",
      iconUrl: "/Asset-1-8x.png"
    },
    {
      name: "Alex Chen",
      title: "Creative Director",
      handle: "alexchen",
      status: "Online",
      avatarUrl: "/Person.png",
      iconUrl: "/Asset-1-8x.png"
    },
    {
      name: "Sarah Johnson",
      title: "Lead Developer",
      handle: "sarahj",
      status: "Busy",
      avatarUrl: "/Person.png",
      iconUrl: "/Asset-1-8x.png"
    },
    {
      name: "Mike Rodriguez",
      title: "Design Lead",
      handle: "mikerod",
      status: "Available",
      avatarUrl: "/Person.png",
      iconUrl: "/Asset-1-8x.png"
    },
    {
      name: "Emma Wilson",
      title: "Project Manager",
      handle: "emmaw",
      status: "Online",
      avatarUrl: "/Person.png",
      iconUrl: "/Asset-1-8x.png"
    }
  ];

  const cardWidth = 420; // Increased from 360px
  const gap = 64; // 4rem = 64px
  const totalWidth = profiles.length * (cardWidth + gap) - gap;

  // Handle window resize and initial setup
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const scrollToCard = (index: number) => {
    const scrollPosition = -index * (cardWidth + gap);
    x.set(scrollPosition);
    setCurrentIndex(index);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Snap to nearest card
    const currentX = x.get();
    const newIndex = Math.round(-currentX / (cardWidth + gap));
    const clampedIndex = Math.max(0, Math.min(newIndex, profiles.length - 1));
    scrollToCard(clampedIndex);
  };

  // Don't render until window width is available
  if (windowWidth === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-[#2a1232] to-[#3a1945] flex flex-col items-center justify-center py-20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-white text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300 text-xl">Meet the talented individuals behind Forward Minded Media</p>
        </div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#2a1232] to-[#3a1945] flex flex-col items-center justify-center py-20">
      <div className="text-center mb-12 px-4">
        <h2 className="text-white text-5xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 text-xl">Meet the talented individuals behind Forward Minded Media</p>
      </div>


      {/* Cards Container - Full Width with Framer Motion */}
      <div className="w-full overflow-x-hidden overflow-y-visible">
        <motion.div
          ref={containerRef}
          className="flex"
          style={{
            x: springX,
            width: totalWidth,
            paddingLeft: '6rem',
            paddingRight: '6rem',
            paddingTop: '4rem',
            paddingBottom: '4rem',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          drag="x"
          dragControls={dragControls}
          dragConstraints={{ 
            left: -(totalWidth - windowWidth + 12 * 16), 
            right: 0 
          }}
          dragElastic={0.05}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileDrag={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 mr-16"
              style={{ 
                minWidth: '420px',
                maxWidth: '420px',
                width: '420px'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <ProfileCard
                name={profile.name}
                title={profile.title}
                handle={profile.handle}
                status={profile.status}
                contactText="Contact"
                avatarUrl={profile.avatarUrl}
                iconUrl={profile.iconUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log(`Contact ${profile.name}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden mt-8 text-center">
        <p className="text-gray-400 text-sm">← Swipe to explore →</p>
      </div>

    </section>
  );
};

export default ProfileCardsRow;