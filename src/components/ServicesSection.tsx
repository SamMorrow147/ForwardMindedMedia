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
        description: "AI-powered targeting delivers real-time results. We plan, launch and optimize campaigns quickly with smarter strategy and no middlemen. Whether you need programmatic display, social media ads, streaming TV spots or geofencing, our media buying team secures the best placements at competitive rates. The global shift toward digital advertising — surpassing US$1 trillion, accounting for 73% of all ad spend — makes it more important than ever to partner with specialists who can maximize your investment.",
        spotlightColor: "rgba(59, 130, 246, 0.2)", // Blue
        icon: "advertising" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Graphic & Motion Design",
        description: "Scroll-stopping design across digital, print and video. Our designers craft cohesive visual identities that tell your story on every platform. From logo design and brand palettes to motion graphics and social content, we always stay clean, consistent and on-brand.",
        spotlightColor: "rgba(168, 85, 247, 0.2)", // Purple
        icon: "design" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Branded Goods & Gear",
        description: "From merch drops to event kits, we create things people actually want to wear, use and keep. We source and design promotional items and apparel that showcase your brand personality while delighting your audience.",
        spotlightColor: "rgba(34, 197, 94, 0.2)", // Green
        icon: "apparel" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Website Development",
        description: "Fast, scalable websites built for growth. We integrate automation and AI for better performance, less upkeep and a seamless user experience. Omnichannel marketing success depends on a unified digital presence, so our web builds are designed to work across search, social, email and AI-powered platforms.",
        spotlightColor: "rgba(249, 115, 22, 0.2)", // Orange
        icon: "website" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Media Placement & Strategy",
        description: "We handle the where, when and why. By blending audience insights, first-party data and privacy-forward targeting, we plan smarter media buys across digital, print, influencer channels and emerging retail media networks. At approximately US$62 billion, retail media now represents nearly 18% of all digital media spend and continues to expand — we ensure you take advantage of these full-funnel opportunities.",
        spotlightColor: "rgba(236, 72, 153, 0.2)", // Pink
        icon: "media" as const,
        iconColor: "#f7ba40"
      },
      {
        title: "Podcast & Content Production",
        description: "Storytelling comes alive on screen and mic. Our in-house production team manages concept development, scriptwriting, filming, editing and distribution. From polished commercials and docu-style videos to weekly podcasts and snackable social clips, we produce cinematic content that connects with your audience. And with 86% of advertisers using or planning to use generative AI for video production, we leverage the latest tools to deliver more for your budget.",
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

        {/* Book a Discovery Call CTA */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        >
          <a 
            href="https://calendly.com/jake-forwardmindedmedia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-animated-services no-underline"
          >
            <strong>Book a Discovery Call</strong>
            <div id="container-stars-services">
              <div id="stars-services"></div>
            </div>
            <div id="glow-services">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
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

        /* Animated Button Styles */
        :global(.btn-animated-services) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          min-width: 20rem;
          padding: 0 2rem;
          overflow: hidden;
          height: 3rem;
          background-size: 300% 300%;
          backdrop-filter: blur(1rem);
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #85417F 100%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          -webkit-background-clip: content-box, border-box;
          position: relative;
          cursor: pointer;
          text-decoration: none;
          will-change: transform, background-position;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        :global(.btn-animated-services strong) {
          z-index: 2;
          font-family: "scandia-web", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFFFFF;
          text-shadow: 0 0 4px white;
          text-transform: uppercase;
        }

        :global(#container-stars-services) {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          -webkit-backdrop-filter: blur(1rem);
          border-radius: 5rem;
          background-color: #212121;
          will-change: background-color, z-index;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        :global(#glow-services) {
          position: absolute;
          display: flex;
          width: 100%;
        }

        :global(.btn-animated-services .circle) {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          -webkit-filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
          will-change: opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        :global(.btn-animated-services .circle:nth-of-type(1)) {
          background: rgba(254, 83, 186, 0.636);
        }

        :global(.btn-animated-services .circle:nth-of-type(2)) {
          background: rgba(142, 81, 234, 0.704);
        }

        :global(.btn-animated-services:hover #container-stars-services) {
          z-index: -1;
          background-color: transparent;
        }

        :global(.btn-animated-services:hover) {
          transform: scale(1.1);
        }

        :global(.btn-animated-services:active) {
          border: double 4px #FE53BB;
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: none;
        }

        :global(.btn-animated-services:active .circle) {
          background: #FE53BB;
        }

        :global(#stars-services) {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
          will-change: transform;
          transform: translateZ(0);
        }

        :global(#stars-services::after) {
          content: "";
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          animation: animStarRotate 90s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        :global(#stars-services::before) {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          animation: animStar 60s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          opacity: 0.5;
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        @keyframes animStar {
          from {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -135rem, 0);
            -webkit-transform: translate3d(0, -135rem, 0);
          }
        }

        @keyframes animStarRotate {
          from {
            transform: rotate(360deg) translateZ(0);
            -webkit-transform: rotate(360deg) translateZ(0);
          }
          to {
            transform: rotate(0deg) translateZ(0);
            -webkit-transform: rotate(0deg) translateZ(0);
          }
        }

        @keyframes gradient_301 {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse_3011 {
          0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
