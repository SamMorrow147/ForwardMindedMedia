"use client";

import { motion } from 'framer-motion';

export default function CommunityCommitmentSection() {

  return (
    <section className="py-20 bg-gradient-to-b from-[#3a1945] to-[#2a1232]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              color: '#e8e1d4', 
              fontFamily: '"scandia-web", sans-serif', 
              fontWeight: 700,
              marginBottom: '2rem'
            }}
          >
            Community Commitment
          </h2>
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
