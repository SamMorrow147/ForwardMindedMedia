"use client";

import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";

export default function TestimonialSection() {

  const testimonials = [
    {
      name: "Jill Koehler",
      company: "First National Bank",
      role: "",
      testimonial: "Their team consistently delivers creative, fun campaigns that help us reach the right audience.",
      spotlightColor: "rgba(96, 45, 98, 0.5)",
    },
    {
      name: "Katie McClellan",
      company: "Infinite Youth Medical Spa",
      role: "",
      testimonial: "It feels like they're an extension of our own team — a true family company that genuinely cares about our success.",
      spotlightColor: "rgba(96, 45, 98, 0.5)",
    },
    {
      name: "Sarah Martinez",
      company: "Local Brewery",
      role: "",
      testimonial: "ForwardMinded Media brought fresh ideas and authentic energy to our marketing. Their creative approach helped us connect with our community in meaningful ways.",
      spotlightColor: "rgba(96, 45, 98, 0.5)",
    }
  ];

  return (
    <section className="py-20 bg-[#602d62]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="mb-6"
            style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
          >
            Testimonials &amp; Social Proof
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto italic leading-relaxed" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us at <strong>Forward Minded Media</strong>.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="relative max-w-7xl mx-auto px-6"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                  className="h-full testimonial-card"
                  spotlightColor={testimonial.spotlightColor}
                >
                  <div className="h-full flex flex-col p-6">
                    {/* Quote Icon */}
                    <div className="mb-6 flex justify-center">
                      <svg 
                        className="w-16 h-16" 
                        fill="#f7ba40" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 text-base leading-relaxed mb-6 md:mb-8 italic md:flex-grow">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </blockquote>
                    
                    {/* Client Info — pinned to bottom on md+ grid; natural flow on mobile */}
                    <div className="text-center md:mt-auto">
                      <h4 className="text-white text-lg font-bold mb-2">
                        {testimonial.name}
                      </h4>
                      {testimonial.role && (
                        <p className="text-gray-400 text-lg mb-2">
                          {testimonial.role}
                        </p>
                      )}
                      <p className="text-gray-500 text-lg font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        .testimonial-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Equal-height cards in multi-column layout only — mobile uses content height */
        @media (min-width: 768px) {
          .testimonial-card {
            min-height: 500px;
          }
        }
        
        .testimonial-card .card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 100%;
        }
      `}</style>
    </section>
  );
}
