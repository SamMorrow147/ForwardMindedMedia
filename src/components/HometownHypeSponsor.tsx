"use client";

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { Check, Star, Sparkles, Crown } from 'lucide-react';

export default function HometownHypeSponsor() {
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

  const tiers = [
    {
      name: "Community Partner",
      icon: Star,
      iconColor: "#fbbf24",
      price: "$500",
      period: "per episode",
      features: [
        "Logo placement in episode credits",
        "Mention in episode description",
        "Social media shoutout (1 post)",
        "Link to your website in video"
      ],
      cta: "Become a Partner",
      highlighted: false
    },
    {
      name: "Featured Sponsor",
      icon: Sparkles,
      iconColor: "#f7ba40",
      price: "$1,500",
      period: "per episode",
      features: [
        "Prominent logo placement throughout episode",
        "Dedicated sponsor segment (15-30 seconds)",
        "Social media campaign (3-5 posts)",
        "Website feature on our Hometown Hype page",
        "Behind-the-scenes content access",
        "Email newsletter feature"
      ],
      cta: "Get Featured",
      highlighted: true
    },
    {
      name: "Series Sponsor",
      icon: Crown,
      iconColor: "#a855f7",
      price: "Custom",
      period: "quarterly/annual",
      features: [
        "All Featured Sponsor benefits",
        "Exclusive opening/closing sponsorship",
        "Co-branded series intro graphics",
        "Priority episode topic input",
        "Quarterly sponsor appreciation event",
        "Premium cross-promotion package",
        "Dedicated account manager"
      ],
      cta: "Let's Talk",
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#3a1945] to-[#2a1232]">
      <div className="container mx-auto px-6 max-w-7xl">
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
            Become a Sponsor
          </ScrollFloat>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: '"halcom", sans-serif', fontStyle: 'italic' }}
          >
            Support local storytelling and get your brand in front of thousands of engaged viewers in southern Minnesota.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
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
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 flex flex-col ${
                  tier.highlighted 
                    ? 'border-[#f7ba40] shadow-2xl shadow-[#f7ba40]/20 md:-mt-4 md:mb-0' 
                    : 'border-white/10'
                }`}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#f7ba40] to-[#ff9f40] rounded-full">
                    <span 
                      className="text-sm font-bold text-white uppercase tracking-wide"
                      style={{ fontFamily: '"scandia-web", sans-serif' }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${tier.iconColor}20` }}
                  >
                    <IconComponent 
                      size={40} 
                      style={{ color: tier.iconColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Tier Name */}
                <h3 
                  className="text-2xl font-bold text-white text-center mb-4"
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <div 
                    className="text-4xl font-bold text-white mb-1"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    {tier.price}
                  </div>
                  <div 
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: '"halcom", sans-serif' }}
                  >
                    {tier.period}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check size={20} className="text-[#f7ba40]" strokeWidth={3} />
                      </div>
                      <span 
                        className="text-gray-300 text-sm"
                        style={{ fontFamily: '"halcom", sans-serif' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`w-full py-4 rounded-lg font-bold text-center transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-[#f7ba40] to-[#ff9f40] hover:from-[#ff9f40] hover:to-[#f7ba40] text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  {tier.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p 
            className="text-gray-300 text-lg mb-6"
            style={{ fontFamily: '"halcom", sans-serif' }}
          >
            Have questions or want to create a custom package?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#85417f] hover:bg-[#9d4d96] text-white rounded-lg font-semibold transition-colors duration-300"
            style={{ fontFamily: '"scandia-web", sans-serif' }}
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
