"use client";

import SpotlightCard from "./SpotlightCard";
import ServiceIcon from "./ServiceIcon";
import BlurText from "./BlurText";
import ScrollFloat from "./ScrollFloat";
import { motion } from "framer-motion";

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
    <section className="py-12 md:pb-20 md:pt-0 bg-[#2a1232]">
      <div className="container mx-auto px-6">
        {/* Section Header - Centered */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h2 
            className="ThreeDee what-we-do-title text-white mb-6 mx-auto mt-8"
            style={{
              fontFamily: '"scandia-web", sans-serif',
              fontWeight: 700,
              fontStyle: 'italic'
            }}
          >
            <ScrollFloat
              as="span"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center-=20%"
              stagger={0.03}
              containerClassName="what-we-do-title-wrapper"
            >
              What We Do
            </ScrollFloat>
          </h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
          >
            Full-service. In-house. Zero fluff. Just smart strategy, sharp creative, and a team that gives a damn.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60,
                  scale: 0.9
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
            >
              <SpotlightCard 
                className="h-full"
                spotlightColor={service.spotlightColor}
              >
                <div className="h-full flex flex-col">
                  {/* Service Icon */}
                  <motion.div 
                    className="mb-6 flex justify-center"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.2 + (index * 0.15)
                    }}
                  >
                    <ServiceIcon 
                      type={service.icon}
                      size={72}
                      color={service.iconColor}
                      className="service-icon"
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + (index * 0.15)
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 leading-relaxed flex-grow text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + (index * 0.15)
                    }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        :global(.what-we-do-title) {
          font-family: "scandia-web", sans-serif !important;
          font-weight: 700 !important;
          font-style: italic !important;
        }
        :global(.what-we-do-title *) {
          font-family: inherit !important;
          font-weight: inherit !important;
          font-style: inherit !important;
        }
      `}</style>
    </section>
  );
}
