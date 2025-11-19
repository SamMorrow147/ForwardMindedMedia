"use client";

import React from 'react';
import Link from 'next/link';

interface MetricCardProps {
  value: string;
  label: string;
  icon?: string;
}

interface CaseStudyLayoutProps {
  clientName: string;
  projectTitle: string;
  category: string;
  heroImage: string;
  goal: string;
  approach: string;
  deliverables: string[];
  results: string[];
  metrics: MetricCardProps[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, icon }) => (
  <div className="bg-gradient-to-br from-[#2a1232] to-[#3a1945] rounded-2xl p-8 shadow-xl border border-[#f7ba40]/20 hover:border-[#f7ba40]/40 transition-all duration-300 hover:transform hover:scale-105">
    {icon && <div className="text-4xl mb-4">{icon}</div>}
    <div className="text-5xl font-bold text-[#f7ba40] mb-2" style={{ fontFamily: '"scandia-web", sans-serif' }}>
      {value}
    </div>
    <div className="text-white/80 text-lg" style={{ fontFamily: '"halcom", sans-serif' }}>
      {label}
    </div>
  </div>
);

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  clientName,
  projectTitle,
  category,
  heroImage,
  goal,
  approach,
  deliverables,
  results,
  metrics,
  testimonial,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#f7ba40] text-lg mb-4 uppercase tracking-wide" style={{ fontFamily: '"halcom", sans-serif', fontWeight: 600 }}>
              {category}
            </p>
            <h1 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: '"scandia-web", sans-serif' }}>
              {projectTitle}
            </h1>
            <p className="text-2xl text-white/90 mb-6" style={{ fontFamily: '"halcom", sans-serif', fontStyle: 'italic' }}>
              {clientName}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt={`${clientName} project`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="bg-[#85417f] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"scandia-web", sans-serif' }}>
            Client Goal
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl" style={{ fontFamily: '"halcom", sans-serif' }}>
            {goal}
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"scandia-web", sans-serif' }}>
            Our Approach
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl" style={{ fontFamily: '"halcom", sans-serif' }}>
            {approach}
          </p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-[#3a1945] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: '"scandia-web", sans-serif' }}>
            Deliverables
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#2a1232] to-[#3a1945] rounded-xl p-6 border border-[#f7ba40]/20 hover:border-[#f7ba40]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f7ba40] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90 text-lg" style={{ fontFamily: '"halcom", sans-serif' }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results with Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: '"scandia-web", sans-serif' }}>
            Results
          </h2>
          
          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Additional Results */}
          <div className="bg-gradient-to-br from-[#2a1232] to-[#3a1945] rounded-2xl p-8 border border-[#f7ba40]/20">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: '"scandia-web", sans-serif' }}>
              Key Outcomes
            </h3>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f7ba40] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-lg" style={{ fontFamily: '"halcom", sans-serif' }}>
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="bg-[#85417f] py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-16 h-16 text-[#f7ba40] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl text-white/95 mb-6 italic leading-relaxed" style={{ fontFamily: '"halcom", sans-serif' }}>
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white">
                <p className="font-bold text-xl" style={{ fontFamily: '"scandia-web", sans-serif' }}>
                  {testimonial.author}
                </p>
                <p className="text-white/80" style={{ fontFamily: '"halcom", sans-serif' }}>
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"scandia-web", sans-serif' }}>
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontFamily: '"halcom", sans-serif' }}>
            Let's work together to achieve measurable results for your brand.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#f7ba40] hover:bg-[#ffeb78] text-[#2a1232] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: '"scandia-web", sans-serif' }}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyLayout;

