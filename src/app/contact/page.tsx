"use client";

import { useState } from 'react';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (temporary - will be replaced with JotForm)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interests: []
      });
    }, 1000);
  };

  // Menu items configuration
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '#who-we-are' },
    { label: 'What We Do', ariaLabel: 'View our services', link: '#what-we-do' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '#our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '#recent-projects' },
    { label: 'Clients', ariaLabel: 'Read client testimonials', link: '#clients' },
    { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems: Array<{ label: string; link: string }> = [
    { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61562268475609' },
    { label: 'Instagram', link: 'https://www.instagram.com/forwardmindedmedia/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/forward-minded-media' },
    { label: 'TikTok', link: 'https://www.tiktok.com/@forwardmindedmedia?_r=1&_t=ZT-91Z7KwViAP7' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1232] to-[#3a1945]">
      <AdobeFonts />
      
      {/* Staggered Menu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#f7ba40"
        openMenuButtonColor="#85417f"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/Logo-Dark.png"
        accentColor="#85417f"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Contact Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="ThreeDee text-white text-5xl md:text-6xl mb-6"
              style={{ 
                fontFamily: '"scandia-web", sans-serif', 
                fontWeight: 700,
                textShadow: `
                  0 0.015em 0 #d16cc7,
                  0 0.03em 0.015em #6d3568,
                  0 0.045em 0.03em #4a2345
                `
              }}
            >
              Get In Touch
            </h1>
            <p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}
            >
              Ready to leave the status quo behind? Let's start a conversation about how we can help your business grow.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
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
                <h2 
                  className="text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
                >
                  Thank You!
                </h2>
                <p className="text-gray-300 text-lg mb-8" style={{ fontFamily: '"halcom", sans-serif' }}>
                  We've received your message and will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-[#85417f] hover:bg-[#9d4d96] text-white rounded-lg font-semibold transition-colors duration-300"
                  style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-white mb-2 font-semibold"
                      style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 600 }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-white mb-2 font-semibold"
                      style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 600 }}
                    >
                      Email *
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label 
                      htmlFor="company" 
                      className="block text-white mb-2 font-semibold"
                      style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 600 }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-white mb-2 font-semibold"
                      style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 600 }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-white mb-2 font-semibold"
                    style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 600 }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7ba40] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                {/* Areas of Interest */}
                <div>
                  <label 
                    className="block text-white mb-3 font-semibold"
                    style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 600 }}
                  >
                    What are you interested in? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Digital Advertising',
                      'Creative & Design',
                      'Video Production',
                      'Communications Management',
                      'Consulting/Public Relations Training',
                      'Hometown Hype Feature',
                      'Other'
                    ].map((interest) => (
                      <label 
                        key={interest}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-5 h-5 rounded border-2 border-white/20 bg-white/10 text-[#f7ba40] focus:ring-2 focus:ring-[#f7ba40] focus:ring-offset-0 cursor-pointer transition-all"
                          style={{ accentColor: '#f7ba40' }}
                        />
                        <span 
                          className="text-gray-300 group-hover:text-white transition-colors"
                          style={{ fontFamily: '"halcom", sans-serif' }}
                        >
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#85417f] to-[#9d4d96] hover:from-[#9d4d96] hover:to-[#85417f] text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    style={{ fontFamily: '"scandia-web", sans-serif', fontWeight: 700 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Alternative Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-[#f7ba40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: '"scandia-web", sans-serif' }}>
                Email Us
              </h3>
              <a 
                href="mailto:hello@forwardmindedmedia.com" 
                className="text-[#f7ba40] hover:text-[#ffeb78] transition-colors"
                style={{ fontFamily: '"halcom", sans-serif' }}
              >
                hello@forwardmindedmedia.com
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-[#f7ba40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: '"scandia-web", sans-serif' }}>
                Our Location
              </h3>
              <p className="text-gray-300" style={{ fontFamily: '"halcom", sans-serif' }}>
                Mankato, Minnesota
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

