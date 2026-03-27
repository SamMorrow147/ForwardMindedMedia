"use client";

import LanyardSection from "@/components/LanyardSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import OurStorySection from "@/components/OurStorySection";
import CommunityCommitmentSection from "@/components/CommunityCommitmentSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import Footer from "@/components/Footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import AdobeFonts from "@/components/AdobeFonts";
import { primaryNavItems as menuItems, socialNavItems as socialItems } from "@/data/siteNavigation";

export default function WhoWeArePage() {
  return (
    <div>
      {/* Adobe Fonts Loader */}
      <AdobeFonts />
      
      {/* Staggered Menu */}
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

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
        <div className="w-full px-6 pt-32 pb-16">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-2xl text-white/90 mb-6" style={{ fontFamily: '"halcom", sans-serif', fontStyle: 'italic' }}>
                Forward Minded Media
              </p>
              <h1 className="font-bold text-white mb-4" style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Who We Are
              </h1>
              <p className="text-[#f7ba40] text-lg mb-6 uppercase tracking-wide" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 600 }}>
                People-First. Purpose-Driven.
              </p>
              <p className="text-white/80 text-lg leading-relaxed" style={{ fontFamily: '"halcom", sans-serif' }}>
                We&apos;re a small-town agency with big-market energy — built on relationships, fueled by creativity, and obsessed with results that actually matter.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl w-full" style={{ minHeight: '320px' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="The Forward Minded Media team collaborating"
                className="w-full h-full object-cover"
                style={{ minHeight: '320px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lanyard section hidden — uncomment to restore */}
      {/* <LanyardSection /> */}
      
      {/* New sections below */}
      <MissionVisionSection />
      <OurStorySection />
      <CommunityCommitmentSection />
      <CoreValuesSection />
      
      <Footer />
    </div>
  );
}

