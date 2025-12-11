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
            className="btn-animated no-underline"
          >
            <strong>Let&apos;s Start Your Story</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
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
                  True Partnerships
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
                className="flex flex-row items-center gap-4 md:gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <IconComponent 
                    size={64} 
                    className="text-[#f7ba40]" 
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Title */}
                <h2 
                  className="ThreeDee text-white flex-1" 
                  style={{
                    ...lightShadowStyle, 
                    fontFamily: '"scandia-web", sans-serif', 
                    fontWeight: 700, 
                    textAlign: 'left', 
                    color: '#ffffff',
                    lineHeight: '1.2'
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
        
        .btn-animated {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          min-width: 20rem;
          padding: 0 2rem;
          overflow: hidden;
          height: 3rem;
          background-size: 300% 300%;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          position: relative;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-animated strong {
          z-index: 2;
          font-family: "scandia-web", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFFFFF;
          text-shadow: 0 0 4px white;
          text-transform: uppercase;
        }

        #container-stars {
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
        }

        #glow {
          position: absolute;
          display: flex;
          width: 100%;
        }

        .circle {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
        }

        .circle:nth-of-type(1) {
          background: rgba(254, 83, 186, 0.636);
        }

        .circle:nth-of-type(2) {
          background: rgba(142, 81, 234, 0.704);
        }

        .btn-animated:hover #container-stars {
          z-index: 1;
          background-color: #212121;
        }

        .btn-animated:hover {
          transform: scale(1.1);
        }

        .btn-animated:active {
          border: double 4px #FE53BB;
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: none;
        }

        .btn-animated:active .circle {
          background: #FE53BB;
        }

        #stars {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
        }

        #stars::after {
          content: "";
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          animation: animStarRotate 90s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
        }

        #stars::before {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          animation: animStar 60s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        @keyframes animStar {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-135rem);
          }
        }

        @keyframes animStarRotate {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0);
          }
        }

        @keyframes gradient_301 {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse_3011 {
          0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

