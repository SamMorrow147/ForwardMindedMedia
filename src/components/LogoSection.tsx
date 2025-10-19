"use client";

import BlurText from "./BlurText";

export default function LogoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Trusted By Industry Leaders"
            delay={150}
            animateBy="words"
            direction="top"
            as="h2"
            className="text-5xl font-bold text-gray-900 mb-6 text-center w-full"
            threshold={0.1}
            rootMargin="0px 0px -10% 0px"
            animationFrom={{ filter: "blur(10px)", opacity: 0, y: -20 }}
            animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with innovative companies that share our vision for excellence.
          </p>
        </div>

        {/* Logo Grid - Placeholder for client logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-semibold"
            >
              Logo {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}