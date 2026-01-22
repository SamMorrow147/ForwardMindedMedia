"use client";

import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';

export default function ServicesPage() {
  // Menu items configuration
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '/#our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/#recent-projects' },
    { label: 'Clients', ariaLabel: 'Read client testimonials', link: '/#clients' },
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
    <div className="min-h-screen bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
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
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="ThreeDee text-white text-5xl md:text-6xl mb-6"
            style={{ 
              fontFamily: '"scandia-web", sans-serif', 
              fontWeight: 700,
              fontStyle: 'italic',
              textShadow: `
                0 0.015em 0 #d16cc7,
                0 0.03em 0.015em #6d3568,
                0 0.045em 0.03em #4a2345
              `
            }}
          >
            Our Services
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Full-service. In-house. Zero fluff. Just smart strategy, sharp creative, and a team that gives a damn.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      <Footer />
    </div>
  );
}
