"use client";

import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpotlightCard from "./SpotlightCard";
import BlurText from "./BlurText";
import ScrollFloat from './ScrollFloat';
import LogoSlider from "./LogoSlider";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const sliderRef = useRef<Slider>(null);

  const testimonials = [
    {
      name: "Jill Koehler",
      company: "First National Bank",
      role: "",
      testimonial: "Their team consistently delivers creative, fun campaigns that help us reach the right audience",
      spotlightColor: "rgba(59, 130, 246, 0.2)", // Blue
    },
    {
      name: "Katie McClellan",
      company: "Infinite Youth Medical Spa",
      role: "",
      testimonial: "It feels like they're an extension of our own team — a true family company that genuinely cares about our success",
      spotlightColor: "rgba(168, 85, 247, 0.2)", // Purple
    },
    {
      name: "Sarah Martinez",
      company: "Local Business Co.",
      role: "",
      testimonial: "Forward Minded Media brought fresh ideas and authentic energy to our marketing. Their creative approach helped us connect with our community in meaningful ways.",
      spotlightColor: "rgba(34, 197, 94, 0.2)", // Green
    },
    {
      name: "David Thompson",
      company: "Regional Services",
      role: "",
      testimonial: "Working with them has been refreshing. They truly understand local businesses and deliver campaigns that resonate with our target audience.",
      spotlightColor: "rgba(249, 115, 22, 0.2)", // Orange
    },
    {
      name: "Lisa Chen",
      company: "Main Street Boutique",
      role: "",
      testimonial: "Their team took the time to understand our vision and delivered results that exceeded our expectations. They're professional, creative, and genuinely invested in our success.",
      spotlightColor: "rgba(236, 72, 153, 0.2)", // Pink
    },
    {
      name: "Robert Williams",
      company: "Downtown Restaurant Group",
      role: "",
      testimonial: "Forward Minded Media helped us navigate the digital landscape with confidence. Their strategic guidance and creative campaigns drove real growth for our business.",
      spotlightColor: "rgba(14, 165, 233, 0.2)", // Cyan
    }
  ];

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

  // React Slick settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    arrows: false,
    accessibility: true,
    initialSlide: 0,
    edgeFriction: 0.35,
    variableWidth: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
          edgeFriction: 0.35,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-[#602d62]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6 testimonials-title-wrapper">
            <ScrollFloat
              as="span"
              scrollContainerRef={null}
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center-=20%"
              stagger={0.03}
              containerClassName="testimonials-title inline"
              textClassName=""
              style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', ...lightShadowStyle, color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontStyle: 'normal' }}
            >
              Testimonials &
            </ScrollFloat>
            <span className="hidden md:inline" style={{ width: '32px', display: 'inline-block' }}>&nbsp;</span>
            <br className="md:hidden" />
            <ScrollFloat
              as="span"
              scrollContainerRef={null}
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center-=20%"
              stagger={0.03}
              containerClassName="testimonials-title inline"
              textClassName=""
              style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', ...lightShadowStyle, color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontStyle: 'normal' }}
            >
              Social Proof
            </ScrollFloat>
          </h2>
          <p className="text-3xl text-gray-300 max-w-3xl mx-auto italic" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us at <strong>Forward Minded Media</strong>.
          </p>
        </div>

        {/* Horizontal Scrollable Testimonials */}
        <motion.div 
          className="relative overflow-visible testimonial-slider-container"
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
          <Slider ref={sliderRef} {...sliderSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-slide"
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
                <div className="px-3">
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
                      <blockquote className="text-gray-300 text-2xl leading-relaxed mb-8 flex-grow italic">
                        &ldquo;{testimonial.testimonial}&rdquo;
                      </blockquote>
                      
                      {/* Client Info - Always at bottom */}
                      <div className="text-center mt-auto">
                        <h4 className="text-white text-3xl font-bold mb-2">
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
                </div>
              </motion.div>
            ))}
          </Slider>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="flex justify-center mt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.9
                }
              }
            }}
          >
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Drag to see more testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </motion.div>
        </motion.div>
        
        {/* Logo Slider */}
        <LogoSlider />
      </div>
      
      <style jsx global>{`
        /* Testimonial Slider Container */
        .testimonial-slider-container {
          width: 100%;
          overflow: visible;
          padding: 0 2rem;
        }
        
        .testimonial-slider .slick-list {
          overflow: visible;
          padding: 0 !important;
        }
        
        .testimonial-slider .slick-track {
          display: flex;
          gap: 0;
        }
        
        .testimonial-slide {
          width: 420px !important;
          min-width: 420px;
          display: flex;
        }
        
        .testimonial-slide > div {
          width: 100%;
          height: 100%;
        }
        
        /* Force correct font for BlurText title */
        .blur-text-title,
        .blur-text-title * {
          font-family: "proxima-nova", sans-serif !important;
          font-weight: 800 !important;
          font-style: normal !important;
        }
        
        /* Ensure testimonial cards have consistent height and flex layout */
        .testimonial-card {
          display: flex;
          flex-direction: column;
          min-height: 500px;
          height: 100%;
        }
        
        .testimonial-card .card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 100%;
        }
        
        /* Slick slider customization */
        .testimonial-slider .slick-slide {
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .testimonial-slider-container {
            padding: 0 1rem;
          }
          
          .testimonial-slide {
            width: 340px !important;
            min-width: 340px;
          }
          
          .testimonial-card {
            min-height: 450px;
          }
        }
      `}</style>
    </section>
  );
}
