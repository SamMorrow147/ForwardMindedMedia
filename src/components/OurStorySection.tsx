"use client";

import { motion } from 'framer-motion';

export default function OurStorySection() {

  return (
    <section className="py-20 bg-[#602d62]">
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
            Our Story
          </h2>
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
