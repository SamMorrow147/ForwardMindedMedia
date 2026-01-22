"use client";

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { Heart, Lightbulb, Shield, Zap } from 'lucide-react';

export default function CoreValuesSection() {
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

  const values = [
    {
      icon: Heart,
      title: "Partnership",
      description: "We listen, collaborate and celebrate successes together."
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "We're not afraid to take risks and push boundaries."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We do the right thing for our clients and our community."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends — from AI-powered targeting and hyperpersonalization to immersive experiences and community engagement — so your marketing is always fresh and effective."
    }
  ];

  return (
    <section className="py-20 bg-[#2a1232]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
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
            Core Values
          </ScrollFloat>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 40,
                    scale: 0.95
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 pt-1"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.1 + (index * 0.15)
                    }}
                  >
                    <IconComponent 
                      size={48} 
                      className="text-[#f7ba40]" 
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold text-white mb-3" 
                      style={{ fontFamily: '"scandia-web", sans-serif' }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className="text-gray-300 text-base leading-relaxed" 
                      style={{ fontFamily: '"halcom", sans-serif' }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
