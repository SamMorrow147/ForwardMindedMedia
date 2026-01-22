"use client";

import React from 'react';
import ProfileCard from './ProfileCard';
import { teamMembers } from '@/data/teamMembers';
import { motion } from 'framer-motion';

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

const TeamGrid = () => {
  const profiles: ProfileData[] = teamMembers;

  return (
    <section className="pb-16 px-6">
      <motion.div 
        className="container mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16">
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
              <motion.div
                key={index}
                className="flex justify-center items-start min-h-[550px]"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 40,
                    scale: 0.9
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
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
                  backContent={backContent as any}
                  onContactClick={() => console.log(`Contact ${profile.name}`)}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamGrid;
