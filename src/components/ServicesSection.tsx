"use client";

import SpotlightCard from "./SpotlightCard";
import ServiceIcon from "./ServiceIcon";
import BlurText from "./BlurText";

export default function ServicesSection() {
    const services = [
      {
        title: "In-House Digital Advertising",
        description: "AI-powered targeting with real-time results. We launch and optimize campaigns quickly with smarter strategy and no middlemen.",
        spotlightColor: "rgba(59, 130, 246, 0.2)", // Blue
        icon: "advertising" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Graphic Design",
        description: "Scroll-stopping, brand-building design across digital, print, and more. Always clean, consistent, and on-brand.",
        spotlightColor: "rgba(168, 85, 247, 0.2)", // Purple
        icon: "design" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Branded Goods & Gear",
        description: "From merch drops to event kits, we create things people actually want to wear, use, and keep.",
        spotlightColor: "rgba(34, 197, 94, 0.2)", // Green
        icon: "apparel" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Website Development",
        description: "Fast, scalable websites with automation and AI built in. Less upkeep, better performance, and built for growth.",
        spotlightColor: "rgba(249, 115, 22, 0.2)", // Orange
        icon: "website" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Media Placement & Strategy",
        description: "We handle the where, when, and why. Smarter spending, stronger reach across digital, print, influencer, and more.",
        spotlightColor: "rgba(236, 72, 153, 0.2)", // Pink
        icon: "media" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Podcast & Content Production",
        description: "We produce polished audio and video, from full episodes to short clips. Recording, editing, and distribution are all handled in-house to keep your content sharp and ready to share.",
        spotlightColor: "rgba(14, 165, 233, 0.2)", // Cyan
        icon: "podcast" as const,
        iconColor: "#f7ba40"
      }
    ];

  return (
    <section className="pb-20 bg-[#2a1232]">
      <div className="container mx-auto px-6">
        {/* Section Header - Centered */}
        <div className="mb-16 text-center">
          <h2 className="ThreeDee text-white mb-6 mx-auto">What We Do</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Full-service. In-house. Zero fluff. Just smart strategy, sharp creative, and a team that gives a damn.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SpotlightCard 
              key={index}
              className="h-full"
              spotlightColor={service.spotlightColor}
            >
              <div className="h-full flex flex-col">
                {/* Service Icon */}
                <div className="mb-6 flex justify-center">
                  <ServiceIcon 
                    type={service.icon}
                    size={72}
                    color={service.iconColor}
                    className="service-icon"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-grow text-center">
                  {service.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
