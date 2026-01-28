"use client";

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

export default function MissionVisionSection() {
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
    <section className="py-20 bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
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
            Mission & Vision
          </ScrollFloat>
        </div>

        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"halcom", sans-serif' }}>
              At ForwardMinded Media, we believe marketing should be a partnership — not just another expense. Our mission is to empower businesses to leave the status quo behind, connect with their audiences and achieve real, measurable growth. We envision a world where brands and communities thrive together, leveraging technology and creativity to build meaningful connections.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
