"use client";

import TrueFocus from "./TrueFocus";

export default function TrueFocusSection() {
  return (
    <section className="pt-16 pb-0 bg-[#e8e1d4] flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row">
        {/* Text Content - Full width on mobile, left column on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end md:pr-12 mb-8 md:mb-0">
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
            <button className="glass-button pointer-events-auto mt-8">
              Book a Discovery Call
            </button>
            
            <style jsx>{`
                .glass-button {
                  width: 300px;
                  height: 60px;
                  font-family: "scandia-web", sans-serif;
                  font-weight: 700;
                  font-size: 16px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  color: #fff;
                  background: 
                    linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%),
                    rgba(0, 0, 0, 0.3);
                  backdrop-filter: blur(10px) saturate(1.2);
                  border: 2px solid rgba(0, 0, 0, 0.3);
                  border-radius: 16px;
                  cursor: pointer;
                  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  position: relative;
                  overflow: hidden;
                  z-index: 1;
                  box-shadow: 
                    inset 0 1px 2px rgba(255, 255, 255, 0.1),
                    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
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
                  background: 
                    linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%),
                    rgba(0, 0, 0, 0.4);
                  border-color: rgba(0, 0, 0, 0.5);
                  transform: translateY(-3px) scale(1.05);
                  box-shadow: 
                    0 10px 40px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(0, 0, 0, 0.2),
                    0 0 15px #f7ba40,
                    0 0 30px rgba(247, 186, 64, 0.4),
                    inset 0 0 0 1px #f7ba40,
                    inset 0 1px 2px rgba(255, 255, 255, 0.15),
                    inset 0 -1px 2px rgba(0, 0, 0, 0.3);
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
              `}</style>
          </div>
        </div>
        
        {/* Focus Image - Full width on mobile, right column on desktop */}
        <div className="w-full md:w-1/2 flex flex-col justify-end md:pl-12">
          <div className="w-full h-64 md:h-96">
            <img 
              src="/Focus-Image.png" 
              alt="Focus Forward - Visual representation" 
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
