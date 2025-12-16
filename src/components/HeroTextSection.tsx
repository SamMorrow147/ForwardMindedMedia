"use client";

import { Layers, Handshake, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import ScrollReveal from './ScrollReveal';

export default function HeroTextSection() {
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

  return (
    <section className="pt-20 pb-40 text-center relative" style={{ backgroundColor: 'transparent', pointerEvents: 'none' }}>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Headline with Scroll Float */}
        <ScrollFloat
          as="h2"
          scrollContainerRef={null}
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top bottom"
          scrollEnd="center center-=20%"
          stagger={0.03}
          containerClassName="font-bold my-16 hero-title"
          textClassName=""
          style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', ...lightShadowStyle, color: '#e8e1d4', fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
        >
          Leave The Status Quo Behind.
        </ScrollFloat>
        
        {/* Subheadline - No effect */}
        <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed hero-subtext">
          We partner with visionary businesses to craft bold ideas, unforgettable campaigns and real growth. Together, we turn heads and turn goals into achievements.
        </p>
        
        {/* Button */}
        <motion.div 
          className="flex justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        >
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
        </motion.div>
      </div>

      {/* Three Items Section */}
      <motion.div 
        className="w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-20 relative z-10 mt-16 md:mt-20" 
        style={{ pointerEvents: 'none' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
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
              <motion.div
                key={item.id}
                className="flex flex-row items-center gap-4 md:gap-6"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 50,
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
                {/* Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  variants={{
                    hidden: { rotate: -180, opacity: 0 },
                    visible: { 
                      rotate: 0, 
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  {item.id === 2 ? (
                    <svg 
                      width="64" 
                      height="64" 
                      viewBox="0 0 65 65" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#f7ba40]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m60.731 13.859c-.315-.373-.786-.572-1.28-.524l-2.001.182-.115-.198c-.277-.478-.767-.767-1.348-.746l-4.211.142c-.017 0-.033.001-.05.002l-.089-.2c-.283-.638-.968-.993-1.653-.865l-1.231.236c-.295.057-.566.2-.779.413l-1.34 1.342-.224.112h-.833l-.009-.003c-.018-.725-.552-1.335-1.271-1.446l-.615-.095c-.123-.019-.245-.024-.366-.011l-.088-.513c-.075-.431-.334-.807-.709-1.032s-.827-.275-1.244-.135l-.709.236c-.155.052-.3.128-.429.226l-2.246-1.017-1.743-1.162c-.246-.164-.536-.252-.832-.252h-.862l-.211-.163c-.367-.282-.845-.379-1.293-.263l-1.09.284c-.259.067-.495.203-.684.393l-.52.521c-.003.003-.006.006-.01.01-.235-.47-.711-.801-1.27-.827l-1.887-.09c-.26-.462-.754-.764-1.307-.764h-1.65l-.612-2.432-.368-2.53c-.076-.521-.418-.963-.903-1.167l-.9-.378c-.085-.036-.173-.063-.263-.083l-1.088-.237c-.264-.059-.538-.043-.794.043l-.284.095c-.591.197-1 .742-1.023 1.367l-.089 2.433-12.793-.012h-.001c-.48 0-.931.23-1.213.618-.283.389-.362.89-.213 1.347l.741 2.272-.23 1.496c-.013.076-.019.152-.019.228v4.859c0 .154.024.308.071.455l.757 2.38c.032.101.075.199.127.291l.721 1.259.218 4.34c.002.042.006.083.011.124l.852 6.364c.007.054.018.107.03.16l.82 3.323.177 2.8v1.938l-.269.303-.718.519c-.39.282-.622.734-.622 1.216v.709c0 .244.06.485.174.701l.425.805c.089.167.208.316.353.439l1.556 1.328.189.863v16.822c0 .4.16.784.445 1.065.281.278.66.435 1.055.435h.015l28.565-.284 10.031-.332c.41-.014.798-.195 1.071-.502.272-.307.408-.713.374-1.122l-.237-2.838c-.026-.313-.151-.611-.355-.851l-.852-.994c-.097-.112-.208-.209-.332-.288l-3.146-2.011-1.529-2.253c-.203-.299-.508-.515-.857-.607l-1.086-.287-.632-.885c-.281-.395-.736-.629-1.221-.629h-.857l-.854-.928-.194-2.716.038-1.439.56-1.12c.162-.324.201-.696.11-1.047l-.331-1.277c-.061-.234-.177-.45-.339-.63l-.722-.799.581-1.612 2.191-1.623c.091-.066.174-.145.247-.229l.567-.663c.241-.282.369-.643.36-1.013l-.094-3.716.057-.85.799-.922 1.373-1.047.237-.037c.342-.053.654-.222.886-.479l1.916-2.128.56-.249c.285-.126.523-.339.683-.608l1.045-1.776 1.016-1.524 1.126-.944 2.094-.873 4.369-1.948 1.846-.852c.408-.188.71-.549.823-.983l.284-1.089c.124-.471.009-.975-.307-1.347z"></path>
                    </svg>
                  ) : (
                    <IconComponent 
                      size={64} 
                      className="text-[#f7ba40]" 
                      strokeWidth={1.5}
                    />
                  )}
                </motion.div>
                
                {/* Title */}
                <motion.h2 
                  className="ThreeDee text-white flex-1" 
                  style={{
                    ...lightShadowStyle, 
                    fontFamily: '"scandia-web", sans-serif', 
                    fontWeight: 700, 
                    textAlign: 'left', 
                    color: '#ffffff',
                    lineHeight: '1.2'
                  }}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2
                      }
                    }
                  }}
                >
                  {item.title}
                </motion.h2>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <style jsx>{`
        h2.hero-title.ThreeDee {
          line-height: 1.3 !important;
          font-family: "scandia-web", sans-serif !important;
          font-weight: 700 !important;
          color: #e8e1d4 !important;
          font-size: 4rem !important;
          font-style: normal !important;
          text-shadow: 
            0 0.015em 0 #d16cc7,
            0 0.03em 0.015em #6d3568,
            0 0.045em 0.03em #5f2f5a,
            0 0.06em 0.03em #51294d,
            0 0.09em 0.015em #432340,
            0 0.09em 0.045em rgba(0, 0, 0, 0.5),
            0 0 0.075em rgba(0, 0, 0, 0.2),
            0 0.03em 0.12em rgba(0, 0, 0, 0.3),
            0 0.15em 0.18em rgba(0, 0, 0, 0.25),
            0 0.3em 0.3em rgba(0, 0, 0, 0.15) !important;
        }
        
        @media (min-width: 768px) {
          h2.hero-title.ThreeDee {
            line-height: 1.2 !important;
          }
        }
        
        h2.hero-title.ThreeDee *,
        h2.hero-title.ThreeDee .char,
        h2.hero-title.ThreeDee .scroll-float-text {
          font-family: "scandia-web", sans-serif !important;
          font-weight: 700 !important;
          color: #e8e1d4 !important;
        }
        
        /* Shimmer effect - applies to the entire title container */
        :global(.shimmer) {
          background: linear-gradient(
            90deg,
            #c084fc 0%,
            #ff5ac4 50%,
            #c084fc 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2.2s linear infinite;
        }
        
        :global(.shimmer .scroll-float-text),
        :global(.shimmer .char) {
          color: inherit;
        }

        @keyframes shimmer {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        @supports not ((-webkit-background-clip: text) or (background-clip: text)) {
          :global(.shimmer .scroll-float-text) {
            color: #c084fc;
            background: none;
            -webkit-text-fill-color: initial;
          }
        }
        
        .hero-subtext {
          font-family: "halcom", sans-serif;
          font-weight: 400;
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
          background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #F7BA40 0%, #FFDB3B 18%, #FE53BB 38%, #FF9FFC 55%, #8F51EA 72%, #85417F 100%);
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
          z-index: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
          background-color: #212121;
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
          z-index: -1;
          background-color: transparent;
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

