"use client";

import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';
import { primaryNavItems as menuItems, socialNavItems as socialItems } from '@/data/siteNavigation';

export default function FirstNationalBankCaseStudy() {
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
        clientName="First National Bank"
        projectTitle="Double the Impact"
        category="Multichannel Campaign"
        heroImage="/firstnational.jpg"
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

