"use client";

import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';

export default function FirstNationalBankCaseStudy() {
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/#who-we-are' },
    { label: 'What We Do', ariaLabel: 'View our services', link: '/#what-we-do' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '/#our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/#recent-projects' },
    { label: 'Clients', ariaLabel: 'Read client testimonials', link: '/#clients' },
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
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/Logo-Dark.png"
        accentColor="#5227FF"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      
      <CaseStudyLayout
        clientName="First National Bank"
        projectTitle="Double the Impact"
        category="Multichannel Campaign"
        heroImage="/firstnational.jpg"
        clientLogo="/FNB.png"
        goal="Increase brand awareness and new account signups in southern Minnesota while establishing a stronger competitive presence in the regional banking market."
        approach="We developed an integrated multichannel campaign combining digital display advertising, radio spots, and engaging social video content. Our strategy focused on highlighting the bank's community roots and personalized service while driving measurable conversions through targeted messaging and strategic media placement across multiple touchpoints."
        deliverables={[
          "Digital display advertising campaign across premium placements",
          "Radio commercial production and strategic airtime scheduling",
          "Social media video series showcasing customer success stories",
          "Landing page optimization for account signup conversion",
          "Targeted audience segmentation and media buying strategy",
          "Real-time campaign monitoring and optimization",
        ]}
        results={[
          "Established strong brand recognition in target markets",
          "Generated significant increase in qualified leads",
          "Improved cost efficiency across all campaign channels",
          "Enhanced digital engagement metrics across platforms",
          "Exceeded client expectations for return on ad spend",
        ]}
        metrics={[
          {
            value: "200%",
            label: "Increase in Impressions",
            icon: "📈",
          },
          {
            value: "32%",
            label: "Rise in New Signups",
            icon: "✨",
          },
          {
            value: "40%",
            label: "Lower Cost-Per-Lead",
            icon: "💰",
          },
        ]}
        testimonial={{
          quote: "Forward Minded Media transformed our marketing approach. Their strategic multichannel campaign not only doubled our visibility but significantly reduced our acquisition costs. The team's data-driven approach and creative execution exceeded all our expectations.",
          author: "Marketing Director",
          position: "First National Bank",
        }}
      />
      
      <Footer />
    </>
  );
}

