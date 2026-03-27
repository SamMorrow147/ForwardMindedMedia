"use client";

import { motion } from 'framer-motion';

export default function HometownHypeIntro() {

  return (
    <section className="py-20 bg-gradient-to-b from-[#3a1945] to-[#2a1232]">
      <div className="container mx-auto px-6 max-w-5xl">
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
            About Hometown Hype
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6" style={{ fontFamily: '"halcom", sans-serif' }}>
            <strong className="text-white">Hometown Hype</strong> is our monthly digital series and community spotlight. Each episode shines a light on the people, places and events that make southern Minnesota unique — from hidden-gem restaurants and family-owned shops to local festivals and high-school athletes.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"halcom", sans-serif' }}>
            We believe every community has stories worth celebrating, and we're here to tell them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
