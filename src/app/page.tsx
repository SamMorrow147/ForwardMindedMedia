"use client";

import { useState } from "react";
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
import LoadingScreen from "@/components/LoadingScreen";
import { primaryNavItems as menuItems, socialNavItems as socialItems } from "@/data/siteNavigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {/* Loading Screen - Always render, overlays on top */}
      <LoadingScreen 
        onLoadingComplete={() => setIsLoading(false)}
        minimumLoadTime={750}
      />
      
      {/* Adobe Fonts Loader */}
      <AdobeFonts />
      
      {/* Staggered Menu - fixed positioned overlay */}
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
      
      {/* 3D Logo over video background */}
      <Logo3DSection />

      {/* Hero Text + Three Items */}
      <HeroTextSection />
      
      <RecentProjectsSection />
      <div id="clients">
        <TestimonialSection />
      </div>
      <div id="our-team">
        <ProfileCardsRow />
      </div>
      <div id="what-we-do">
        <ServicesSection />
      </div>
      <div id="focus">
        <TrueFocusSection />
      </div>
      <Footer />
      
      {/* Fixed top blur behind header (logo + menu); z-index below StaggeredMenu (2000+) */}
      <GradualBlur
        target="page"
        position="top"
        height="8rem"
        mobileHeight="8rem"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={1}
        responsive={true}
      />
      {/* Fixed bottom blur — desktop only */}
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={1}
        className="desktop-only-blur"
      />
    </div>
  );
}
