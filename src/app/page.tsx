"use client";

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

export default function Home() {
  // Menu items configuration
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
    { label: 'What We Do', ariaLabel: 'View our services', link: '#what-we-do' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '#our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '#recent-projects' },
    { label: 'Clients', ariaLabel: 'Read client testimonials', link: '#clients' },
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
      {/* Adobe Fonts Loader */}
      <AdobeFonts />
      
      {/* Staggered Menu - fixed positioned overlay */}
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
      <div id="who-we-are" className="py-24 bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="ThreeDee text-white mb-8" style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Who We Are
          </h2>
          <p className="text-white text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400 }}>
            We're a full-service agency turning partnerships into progress. By challenging the status quo, we craft bold, creative marketing that drives real results.
          </p>
          <Link 
            href="/who-we-are"
            className="glass-button-who inline-block no-underline"
          >
            <span style={{ fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit' }}>
              Learn More About Us
            </span>
          </Link>
        </div>
        <style jsx>{`
          .glass-button-who {
            min-width: 250px;
            padding: 0 24px;
            height: 60px;
            font-family: "scandia-web", sans-serif;
            font-weight: 700;
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #fff;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            text-decoration: none;
          }
          
          .glass-button-who::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.6s ease;
          }
          
          .glass-button-who::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.5s ease;
            z-index: -1;
          }
          
          .glass-button-who:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-3px) scale(1.05);
            box-shadow: 
              0 10px 40px rgba(255, 255, 255, 0.15),
              0 0 20px rgba(255, 255, 255, 0.1),
              0 0 15px #f7ba40,
              0 0 30px rgba(247, 186, 64, 0.4),
              inset 0 0 0 1px #f7ba40;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          
          .glass-button-who:hover::before {
            left: 100%;
          }
          
          .glass-button-who:hover::after {
            width: 300px;
            height: 300px;
          }
          
          .glass-button-who:active {
            transform: translateY(-1px) scale(1.02);
            background: rgba(255, 255, 255, 0.3);
            box-shadow: 
              0 5px 20px rgba(255, 255, 255, 0.2),
              0 0 15px rgba(255, 255, 255, 0.15);
          }
        `}</style>
      </div>
      <div id="what-we-do">
        <ServicesSection />
      </div>
      <div id="focus">
        <TrueFocusSection />
      </div>
      <Footer />
      
      {/* Global page-level blur effect at the bottom of the screen */}
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
  );
}
