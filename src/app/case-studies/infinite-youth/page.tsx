"use client";

import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';

export default function InfiniteYouthCaseStudy() {
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '/our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/#recent-projects' },
    { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
    { label: 'Hometown Hype', ariaLabel: 'Community spotlight series', link: '/case-studies/local-brewery' },
    { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems: Array<{ label: string; link: string }> = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'Instagram', link: 'https://instagram.com' }
  ];

  return (
    <>
      <AdobeFonts />
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
        accentColor="#5227FF"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      
      <CaseStudyLayout
        clientName="Infinite Youth Medical Spa"
        projectTitle="A Brand Glow-Up"
        category="Brand Refresh & Digital Transformation"
        heroImage="/Infinite-Youth-Medical-Spa_49b6158f087279481f10f7ebaeb2ad1b.jpg"
        goal="Refresh the brand identity and attract new clients for expanded wellness services while positioning the spa as a premium destination for self-care and aesthetic treatments in a competitive market."
        approach="We executed a comprehensive brand transformation starting with a modern logo and refined color palette that reflects luxury and wellness. Our team produced high-quality lifestyle photography and video content, rebuilt the website with SEO optimization, and implemented a strategic retargeting campaign complemented by an educational video series focused on self-care and treatment benefits."
        deliverables={[
          "Complete brand identity redesign including logo and color palette",
          "Professional lifestyle photography and videography sessions",
          "SEO-optimized website development with booking integration",
          "Retargeted advertising campaigns across multiple platforms",
          "Educational self-care video series for social media",
          "Content marketing strategy and implementation",
          "Local SEO optimization for service area",
          "Email marketing automation and nurture sequences",
        ]}
        results={[
          "Successfully repositioned brand as premium wellness destination",
          "Attracted higher-value clientele seeking advanced treatments",
          "Built strong social media community engagement",
          "Improved search engine rankings for key service terms",
          "Enhanced customer experience through modern digital touchpoints",
        ]}
        metrics={[
          {
            value: "2x",
            label: "Website Traffic Growth",
            icon: "🚀",
          },
          {
            value: "25%",
            label: "Higher Booking Value",
            icon: "💎",
          },
          {
            value: "300%",
            label: "Social Engagement Increase",
            icon: "❤️",
          },
        ]}
        testimonial={{
          quote: "Forward Minded Media didn't just refresh our brand—they transformed our entire business. The new website is stunning, our social media engagement has skyrocketed, and we're attracting clients who truly value our premium services. Their responsiveness and attention to detail made the entire process seamless.",
          author: "Owner & Lead Aesthetician",
          position: "Infinite Youth Medical Spa",
        }}
      />
      
      <Footer />
    </>
  );
}

