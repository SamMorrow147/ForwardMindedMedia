"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

export default function HometownHypeGetFeatured() {
  const [formData, setFormData] = useState({
    nomineeName: '',
    nomineeType: 'business',
    yourName: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Nomination submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        nomineeName: '',
        nomineeType: 'business',
        yourName: '',
        email: '',
        phone: '',
        description: ''
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
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
            Get Featured
          </ScrollFloat>
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: '"halcom", sans-serif', fontStyle: 'italic' }}
          >
            Know a business, event, or individual with a story worth sharing? Nominate them for an upcoming Hometown Hype episode!
          </p>
        </div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="mb-6">
                <svg 
                  className="w-20 h-20 mx-auto text-[#f7ba40]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: '"scandia-web", sans-serif' }}
              >
                Thank You!
              </h3>
              <p className="text-gray-300 text-lg mb-8" style={{ fontFamily: '"halcom", sans-serif' }}>
                We've received your nomination and will be in touch soon!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-[#85417f] hover:bg-[#9d4d96] text-white rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: '"scandia-web", sans-serif' }}
              >
                Submit Another Nomination
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nominee Type */}
              <div>
                <label 
                  htmlFor="nomineeType" 
                  className="block text-white mb-2 font-semibold"
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  What are you nominating? *
                </label>
                <select
                  id="nomineeType"
                  name="nomineeType"
                  value={formData.nomineeType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                  style={{ fontFamily: '"halcom", sans-serif' }}
                >
                  <option value="business">Local Business</option>
                  <option value="event">Community Event</option>
                  <option value="individual">Individual/Athlete</option>
                  <option value="organization">Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Nominee Name */}
              <div>
                <label 
                  htmlFor="nomineeName" 
                  className="block text-white mb-2 font-semibold"
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  Name of Business/Event/Individual *
                </label>
                <input
                  type="text"
                  id="nomineeName"
                  name="nomineeName"
                  value={formData.nomineeName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                  placeholder="Enter name"
                  style={{ fontFamily: '"halcom", sans-serif' }}
                />
              </div>

              {/* Your Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="yourName" 
                    className="block text-white mb-2 font-semibold"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                    placeholder="Your name"
                    style={{ fontFamily: '"halcom", sans-serif' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-white mb-2 font-semibold"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    style={{ fontFamily: '"halcom", sans-serif' }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-white mb-2 font-semibold"
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  Your Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                  style={{ fontFamily: '"halcom", sans-serif' }}
                />
              </div>

              {/* Description */}
              <div>
                <label 
                  htmlFor="description" 
                  className="block text-white mb-2 font-semibold"
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  Tell us their story *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all resize-none"
                  placeholder="What makes this story special? Why should they be featured?"
                  style={{ fontFamily: '"halcom", sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#85417f] to-[#9d4d96] hover:from-[#9d4d96] hover:to-[#85417f] text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                  style={{ fontFamily: '"scandia-web", sans-serif' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
