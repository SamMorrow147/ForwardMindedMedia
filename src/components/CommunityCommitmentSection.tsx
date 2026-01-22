"use client";

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

export default function CommunityCommitmentSection() {
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
    <section className="py-20 bg-gradient-to-b from-[#3a1945] to-[#2a1232]">
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
            Community Commitment
          </ScrollFloat>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: '"halcom", sans-serif' }}>
            We&apos;re more than a marketing agency; we&apos;re part of the fabric of Mankato and its surrounding towns. Through our <strong className="text-[#f7ba40]">Hometown Hype series</strong>, we spotlight local businesses, events and artists, giving our community the recognition it deserves.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: '"halcom", sans-serif' }}>
            We sponsor local sports leagues, host free workshops and volunteer at events — because when our community wins, we all do. Authentic, community-driven marketing is becoming a key brand moat, and we&apos;re proud to lead by example.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
