"use client";

import LiquidEther from "./LiquidEther";
import SplitText from "./SplitText";
import RotatingText from "./RotatingText";

export default function Header() {
  return (
    <div className="relative h-[70vh] w-full bg-[#85417f]">
      {/* Solid background color */}
      
      {/* Left side overlay image */}
      <div className="absolute left-0 top-0 h-full z-5 pointer-events-none flex items-center">
        <img 
          src="/left-side.png" 
          alt="" 
          className="w-auto object-contain"
          style={{ opacity: 0.15, height: '70%' }}
        />
      </div>
      
      {/* Right side overlay image */}
      <div className="absolute right-0 top-0 h-full z-5 pointer-events-none flex items-center">
        <img 
          src="/right-side.png" 
          alt="" 
          className="w-auto object-contain"
          style={{ opacity: 0.15, height: '70%' }}
        />
      </div>
      
      {/* Liquid Ether effect layer - now on top but behind text */}
      <div className="absolute inset-0 z-10 animate-fade-in-background">
        <LiquidEther resolution={0.4} isBounce={true} colors={['#5227FF', '#FF9FFC', '#ffeb78']} />
      </div>
      
          {/* Content layer - with pointer-events-none to allow mouse through */}
          <header className="relative z-20 flex items-center justify-center h-full pointer-events-none">
            <div className="text-center">
              <h1 className="ThreeDee ThreeDee-white-purple pointer-events-auto mb-4 header-title" style={{ fontSize: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.1em', fontFamily: '"scandia-web", sans-serif', fontWeight: 700, fontStyle: 'normal' }}>
                <span className="mobile-only regular-weight" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', gap: '0.3em', fontWeight: 400 }}>Moving</span>
                <span className="desktop-only regular-weight" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3em', fontWeight: 400 }}>Moving Your</span>
                <span className="mobile-only regular-weight" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', gap: '0.3em', fontWeight: 400 }}>Your</span>
                <span className="rotating-word-wrapper bold-weight" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.3em', fontWeight: 700 }}>
                  <RotatingText
                    texts={['Brand', 'Business', 'Vision', 'Message', 'Story', 'Ideas']}
                    mainClassName="inline-flex"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
                <span className="desktop-inline regular-weight" style={{ display: 'inline-flex', fontWeight: 400 }}>Forward</span>
                <span className="mobile-only regular-weight" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', gap: '0.3em', fontWeight: 400 }}>Forward</span>
              </h1>
              <p className="text-white/80 text-xl font-light tracking-wide opacity-0 animate-fade-in-delayed mb-8" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
                Leave the status quo behind.
              </p>
              
              {/* Glassmorphism Let's Go Button */}
              <div className="opacity-0 animate-fade-in-button flex justify-center">
                <button className="glass-button pointer-events-auto">
                  <span style={{ fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit' }}>Let&apos;s Go!</span>
                  <div className="button-arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              
              <style jsx>{`
                /* Header title responsive layout */
                .header-title {
                  font-size: 60px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 0.1em;
                  font-family: "scandia-web", sans-serif;
                  font-weight: 700;
                  font-style: normal;
                }
                
                .header-title span {
                  font-family: inherit;
                  font-style: inherit;
                }
                
                .regular-weight {
                  font-weight: 400 !important;
                }
                
                .bold-weight {
                  font-weight: 700 !important;
                }
                
                /* Mobile: Show on mobile, hide on desktop */
                .mobile-only {
                  display: none;
                  align-items: center;
                  justify-content: center;
                  gap: 0.3em;
                }
                
                /* Desktop: Hide on mobile, show on desktop */
                .desktop-only {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.3em;
                }
                
                .desktop-inline {
                  display: inline-flex;
                }
                
                .rotating-word-wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.3em;
                }
                
                /* Mobile styles */
                @media (max-width: 767px) {
                  .mobile-only {
                    display: flex;
                  }
                  
                  .desktop-only {
                    display: none;
                  }
                  
                  .desktop-inline {
                    display: none;
                  }
                  
                  .rotating-word-wrapper {
                    display: flex;
                  }
                  
                  .header-title {
                    font-size: 48px;
                  }
                }
                
                /* Desktop styles */
                @media (min-width: 768px) {
                  .mobile-only {
                    display: none;
                  }
                  
                  .desktop-only {
                    display: flex;
                  }
                  
                  .desktop-inline {
                    display: inline-flex;
                  }
                  
                  .rotating-word-wrapper {
                    display: inline-flex;
                  }
                }
                
                @keyframes fadeInBackground {
                  0% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
                
                .animate-fade-in-background {
                  opacity: 0;
                  animation: fadeInBackground 0.6s ease-out 0.2s forwards;
                }
                
                @keyframes fadeInDelayed {
                  0% {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  100% {
                    opacity: 0.8;
                    transform: translateY(0);
                  }
                }
                
                .animate-fade-in-delayed {
                  animation: fadeInDelayed 0.8s ease-out 1.2s forwards;
                }
                
                @keyframes fadeInButton {
                  0% {
                    opacity: 0;
                    transform: translateY(30px) scale(0.9);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
                
                .animate-fade-in-button {
                  animation: fadeInButton 1s ease-out 2s forwards;
                }
                
                .glass-button {
                  width: 200px;
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
            </div>
          </header>
    </div>
  );
}
