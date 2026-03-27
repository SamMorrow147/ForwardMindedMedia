"use client";

import TeamGrid from '@/components/TeamGrid';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';
import { primaryNavItems as menuItems, socialNavItems as socialItems } from '@/data/siteNavigation';

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-fmm-team-gradient">
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

      {/* Page Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="text-white text-5xl md:text-6xl mb-6"
            style={{ 
              fontFamily: '"scandia-web", sans-serif', 
              fontWeight: 700,
              fontStyle: 'italic'
            }}
          >
            Our Team
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Meet the talented individuals behind <strong>Forward Minded Media</strong>
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <TeamGrid />

      <Footer />
    </div>
  );
}
