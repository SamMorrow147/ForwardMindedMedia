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
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '/our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/#recent-projects' },
    { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
    { label: 'Hometown Hype', ariaLabel: 'Community spotlight series', link: '/case-studies/local-brewery' },
    { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact', highlight: true }
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

      {/* Page Hero */}
      <section className="w-full px-6 pt-32 pb-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-2xl text-white/90 mb-6" style={{ fontFamily: '"halcom", sans-serif', fontStyle: 'italic' }}>
              Forward Minded Media
            </p>
            <h1 className="font-bold text-white mb-4" style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Our Services
            </h1>
            <p className="text-[#f7ba40] text-lg mb-6 uppercase tracking-wide" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 600 }}>
              Full-Service. In-House. Zero Fluff.
            </p>
            <p className="text-white/80 text-lg leading-relaxed" style={{ fontFamily: '"halcom", sans-serif' }}>
              Just smart strategy, sharp creative, and a team that gives a damn about your results.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl w-full" style={{ minHeight: '320px' }}>
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop"
              alt="Forward Minded Media team at work"
              className="w-full h-full object-cover"
              style={{ minHeight: '320px' }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      <Footer />
    </div>
  );
}
