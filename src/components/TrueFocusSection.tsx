"use client";

import TrueFocus from "./TrueFocus";

export default function TrueFocusSection() {
  return (
    <section className="pt-16 pb-0 bg-[#e8e1d4] flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row">
        {/* Text Content - Full width on mobile, left column on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end md:pr-12 order-2 md:order-1">
          <div className="text-center md:text-right max-w-lg">
            <div className="text-black">
              <TrueFocus 
                sentence="We Focus Forward"
                manualMode={false}
                blurAmount={5}
                borderColor="#864280"
                glowColor="rgba(134, 66, 128, 0.6)"
                animationDuration={0.75}
                pauseBetweenAnimations={0.4}
              />
            </div>
            <p className="text-gray-800 text-lg mt-8 leading-relaxed">
              Our focus is clear: delivering results that matter. Every strategy, every campaign, 
              every partnership is designed with one goal in mind - your success.
            </p>
            <a 
              href="https://calendly.com/jake-forwardmindedmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-animated pointer-events-auto mt-8 mb-8 no-underline"
            >
              <strong>Book a Discovery Call</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </a>
            
            <style jsx>{`
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
          </div>
        </div>
        
        {/* Focus Image - Full width on mobile, right column on desktop */}
        <div className="w-full md:w-1/2 flex flex-col justify-end md:pl-12 order-1 md:order-2 mb-8 md:mb-0">
          <div className="w-full h-64 md:h-96">
            <img 
              src="/Booster-Fly.png" 
              alt="Focus Forward - Visual representation" 
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
