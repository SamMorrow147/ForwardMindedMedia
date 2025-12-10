"use client";

import { Layers, Handshake, MapPin } from 'lucide-react';

function HeaderContent() {
  const lightShadowStyle = {
    textShadow: `
      0 0.015em 0 rgba(133, 66, 127, 0.3),
      0 0.03em 0.015em rgba(133, 66, 127, 0.2),
      0 0.045em 0.03em rgba(133, 66, 127, 0.1)
    `,
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
  };

  const items = [
    {
      id: 0,
      icon: Layers,
      title: "Full-Service Expertise"
    },
    {
      id: 1,
      icon: Handshake,
      title: "True Partnerships"
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
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 md:px-8 lg:px-20 relative flex flex-col justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-8 md:py-12">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 md:mb-8">
                <IconComponent 
                  size={64} 
                  className="text-[#85417f]" 
                  strokeWidth={1.5}
                />
              </div>
              
              {/* Title */}
              <h2 
                className="ThreeDee text-black" 
                style={{
                  ...lightShadowStyle, 
                  fontFamily: '"scandia-web", sans-serif', 
                  fontWeight: 700, 
                  textAlign: 'center', 
                  width: '100%'
                }}
              >
                {item.title}
              </h2>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .header-carousel-title {
            white-space: normal;
            word-wrap: break-word;
          }
        }
      `}</style>
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative min-h-[50vh] md:h-[35vh] w-full bg-[#e8e1d4] py-8 md:py-12">
      {/* Content layer */}
      <header className="relative z-20 flex items-center justify-center h-full">
        <HeaderContent />
      </header>
              
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
              `}</style>
    </div>
  );
}
