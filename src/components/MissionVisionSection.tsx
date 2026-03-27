"use client";

import { motion } from 'framer-motion';

export default function MissionVisionSection() {

  return (
    <section className="py-20 bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
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
            Mission &amp; Vision
          </h2>
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
