"use client";

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

export default function OurStorySection() {
  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 #d16cc7,
      0 0.03em 0.015em #6d3568,
      0 0.045em 0.03em #5f2f5a,
      0 0.06em 0.03em #51294d,
      0 0.09em 0.015em #432340,
      0 0.09em 0.045em rgba(0, 0, 0, 0.5),
      0 0 0.075em rgba(0, 0, 0, 0.2),
      0 0.03em 0.12em rgba(0, 0, 0, 0.3),
      0 0.15em 0.18em rgba(0, 0, 0, 0.25),
      0 0.3em 0.3em rgba(0, 0, 0, 0.15)
    `
  };

  return (
    <section className="py-20 bg-[#602d62]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <ScrollFloat
            as="h2"
            scrollContainerRef={null}
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="center center-=20%"
            stagger={0.03}
            containerClassName=""
            textClassName=""
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              ...lightShadowStyle, 
              color: '#e8e1d4', 
              fontFamily: '"scandia-web", sans-serif', 
              fontWeight: 700,
              marginBottom: '2rem'
            }}
          >
            Our Story
          </ScrollFloat>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: '"halcom", sans-serif' }}>
            Founded in the heart of southern Minnesota, ForwardMinded Media began with a simple question: <strong className="text-white">Why settle for average when you can be extraordinary?</strong> After years of witnessing cookie-cutter campaigns, our founder knew businesses deserved more.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: '"halcom", sans-serif' }}>
            We started as a small team determined to deliver innovative strategies and authentic storytelling that help clients stand out in crowded markets. Today, we partner with companies across industries and geographies, still grounded in our community values.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
