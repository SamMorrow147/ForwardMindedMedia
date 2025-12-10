"use client";

import LiquidEther from "./LiquidEther";
import TextType from "./TextType";
import { Layers, Handshake, MapPin } from 'lucide-react';

export default function HeroTextSection() {
  return (
    <section className="py-20 bg-[#85417f] text-center relative" style={{ backgroundColor: '#85417f' }}>
      {/* Liquid Ether effect layer */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.8 }}>
        <LiquidEther resolution={0.4} isBounce={true} colors={['#5227FF', '#FF9FFC', '#B19EEF']} />
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 pointer-events-none">
        {/* Headline */}
        <h2 
          className="text-5xl md:text-6xl font-bold text-white mb-8 hero-title"
          style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
        >
          <TextType 
            text="Leave The Status Quo Behind."
            typingSpeed={100}
            showCursor={false}
            loop={false}
            startOnVisible={true}
          />
        </h2>
        
        {/* Subheadline */}
        <p 
          className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed"
          style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400 }}
        >
          We partner with visionary businesses to craft bold ideas, unforgettable campaigns and real growth. Together, we turn heads and turn goals into achievements.
        </p>
        
        {/* Button */}
        <div className="flex justify-center pointer-events-auto">
          <a 
            href="https://calendly.com/jake-forwardmindedmedia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-button no-underline"
          >
            <span style={{ fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit' }}>
              Let&apos;s Start Your Story
            </span>
            <div className="button-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>

      {/* Three Items Section */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-20 relative z-10 mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              id: 0,
              icon: Layers,
              title: "Full-Service Expertise"
            },
            {
              id: 1,
              icon: Handshake,
              title: (
                <>
                  True<br />Partnerships
                </>
              )
            },
            {
              id: 2,
              icon: MapPin,
              title: (
                <>
                  Local Roots <span style={{ fontStyle: 'italic' }}>National Reach</span>
                </>
              )
            }
          ].map((item) => {
            const IconComponent = item.icon;
            const lightShadowStyle = {
              textShadow: `
                0 0.015em 0 rgba(255, 255, 255, 0.3),
                0 0.03em 0.015em rgba(255, 255, 255, 0.2),
                0 0.045em 0.03em rgba(255, 255, 255, 0.1)
              `,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
            };
            
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6 md:mb-8">
                  <IconComponent 
                    size={64} 
                    className="text-white" 
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Title */}
                <h2 
                  className="ThreeDee text-white" 
                  style={{
                    ...lightShadowStyle, 
                    fontFamily: '"scandia-web", sans-serif', 
                    fontWeight: 700, 
                    textAlign: 'center', 
                    width: '100%',
                    color: '#ffffff'
                  }}
                >
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hero-title {
          line-height: 1.3;
        }
        
        @media (min-width: 768px) {
          .hero-title {
            line-height: 1.2;
          }
        }
        
        .glass-button {
          width: auto;
          min-width: 250px;
          padding: 0 24px;
          height: 60px;
          font-family: "scandia-web", sans-serif;
          font-weight: 700;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        
        .glass-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }
        
        .glass-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s ease;
          z-index: -1;
        }
        
        .glass-button:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 10px 40px rgba(255, 255, 255, 0.15),
            0 0 20px rgba(255, 255, 255, 0.1),
            0 0 15px #f7ba40,
            0 0 30px rgba(247, 186, 64, 0.4),
            inset 0 0 0 1px #f7ba40;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .glass-button:hover::before {
          left: 100%;
        }
        
        .glass-button:hover::after {
          width: 300px;
          height: 300px;
        }
        
        .glass-button:active {
          transform: translateY(-1px) scale(1.02);
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 5px 20px rgba(255, 255, 255, 0.2),
            0 0 15px rgba(255, 255, 255, 0.15);
        }

        .button-arrow {
          position: relative;
          transform: rotate(270deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
        }

        .button-arrow span {
          display: block;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #f7ba40;
          border-right: 2px solid #f7ba40;
          transform: rotate(45deg);
          margin: -5px;
          animation: arrowAnimate 2s infinite;
        }

        .button-arrow span:nth-child(2) {
          animation-delay: -0.2s;
        }

        .button-arrow span:nth-child(3) {
          animation-delay: -0.4s;
        }

        @keyframes arrowAnimate {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-10px, -10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(10px, 10px);
          }
        }
      `}</style>
    </section>
  );
}

