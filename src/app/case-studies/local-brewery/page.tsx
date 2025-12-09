"use client";

import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';

export default function LocalBreweryCaseStudy() {
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
        clientName="Local Brewery"
        projectTitle="Hometown Hype Collaboration"
        category="Video Production & Event Marketing"
        heroImage="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop"
        goal="Boost attendance for a seasonal beer release event while highlighting community partnerships and strengthening the brewery's position as a local gathering place and cultural hub."
        approach="We created a comprehensive event marketing campaign centered around a professionally produced 'Hometown Hype' video episode featuring behind-the-scenes brewery tours, tasting experiences, and live music performances. The campaign integrated traditional printed posters with digital social media teasers and an innovative QR code scavenger hunt that encouraged community exploration and engagement with local businesses."
        deliverables={[
          "Full-length 'Hometown Hype' video episode production",
          "Brewery tour and behind-the-scenes footage",
          "Live music performance videography",
          "Custom-designed event posters for local distribution",
          "Social media teaser video series",
          "Interactive QR code scavenger hunt development",
          "Event photography coverage",
          "Digital promotional graphics and social assets",
          "Community partner coordination and featured content",
        ]}
        results={[
          "Created lasting video content for future marketing use",
          "Strengthened relationships with community partners",
          "Generated significant buzz leading up to event",
          "Built anticipation through multi-week social campaign",
          "Successfully sold out limited edition merchandise",
          "Established template for future seasonal releases",
        ]}
        metrics={[
          {
            value: "60%",
            label: "Higher Event Attendance",
            icon: "🎉",
          },
          {
            value: "75%",
            label: "Social Engagement Boost",
            icon: "📱",
          },
          {
            value: "100%",
            label: "Merchandise Sellout",
            icon: "🏆",
          },
        ]}
        testimonial={{
          quote: "The Hometown Hype video exceeded our wildest expectations. Forward Minded Media captured the essence of our brewery and our connection to the community perfectly. The scavenger hunt was a brilliant addition that got people excited and exploring. Our seasonal release event was our biggest turnout ever, and we completely sold out of merchandise!",
          author: "Co-Founder & Head Brewer",
          position: "Local Brewery",
        }}
      />
      
      <Footer />
    </>
  );
}

