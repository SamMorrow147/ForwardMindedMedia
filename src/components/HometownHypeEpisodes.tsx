"use client";

import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { Play } from 'lucide-react';

export default function HometownHypeEpisodes() {
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

  const episodes = [
    {
      title: "Celebrating Oktoberfest in New Ulm",
      description: "Join us as we explore the rich German heritage and festive atmosphere of New Ulm's annual Oktoberfest celebration.",
      thumbnail: "https://images.unsplash.com/photo-1564169470701-0f5a1e236b98?q=80&w=2070&auto=format&fit=crop",
      sponsor: "Vanderberg Clean",
      sponsorUrl: "https://vanderbergclean.com",
      videoUrl: "#"
    },
    {
      title: "Local Brewery Seasonal Release",
      description: "Behind the scenes at our favorite local brewery as they craft and launch their highly anticipated seasonal beer.",
      thumbnail: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop",
      sponsor: "First National Bank",
      sponsorUrl: "#",
      videoUrl: "#"
    },
    {
      title: "Downtown Mankato Art Walk",
      description: "Discover the vibrant local art scene as we showcase talented artists, galleries, and creative spaces throughout downtown.",
      thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
      sponsor: "Infinite Youth Medical Spa",
      sponsorUrl: "#",
      videoUrl: "#"
    },
    {
      title: "High School Football Championship",
      description: "Experience the excitement and community spirit as we follow a local high school team's journey to the state championship.",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
      sponsor: "Community Partners",
      sponsorUrl: "#",
      videoUrl: "#"
    },
    {
      title: "Family-Owned Bakery Celebrates 50 Years",
      description: "A heartwarming look at three generations keeping traditional baking alive and serving the community for half a century.",
      thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      sponsor: "Vanderberg Clean",
      sponsorUrl: "https://vanderbergclean.com",
      videoUrl: "#"
    },
    {
      title: "Spring Farmers Market Grand Opening",
      description: "Meet the local farmers, artisans, and vendors who bring fresh produce and handmade goods to our community every week.",
      thumbnail: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop",
      sponsor: "First National Bank",
      sponsorUrl: "#",
      videoUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-[#2a1232]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
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
            Watch Past Episodes
          </ScrollFloat>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {episodes.map((episode, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-[#f7ba40]/50 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#f7ba40]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-[#f7ba40] transition-colors" 
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  {episode.title}
                </h3>
                <p 
                  className="text-gray-300 text-sm leading-relaxed mb-4" 
                  style={{ fontFamily: '"halcom", sans-serif' }}
                >
                  {episode.description}
                </p>

                {/* Sponsor */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: '"halcom", sans-serif' }}>
                    Sponsored by
                  </p>
                  <a 
                    href={episode.sponsorUrl}
                    className="text-[#f7ba40] hover:text-[#ffeb78] font-semibold text-sm transition-colors"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {episode.sponsor} →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
