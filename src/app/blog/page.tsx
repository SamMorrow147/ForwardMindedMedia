"use client";

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import AdobeFonts from '@/components/AdobeFonts';
import { BookOpen, TrendingUp, Users, Award, Download, Calendar } from 'lucide-react';

export default function BlogPage() {
  // Menu items configuration
  const menuItems: Array<{ label: string; ariaLabel: string; link: string }> = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Our Team', ariaLabel: 'Meet our team', link: '/our-team' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/#recent-projects' },
    { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
    { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems: Array<{ label: string; link: string }> = [
    { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61562268475609' },
    { label: 'Instagram', link: 'https://www.instagram.com/forwardmindedmedia/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/forward-minded-media' },
    { label: 'TikTok', link: 'https://www.tiktok.com/@forwardmindedmedia?_r=1&_t=ZT-91Z7KwViAP7' }
  ];

  const categories = [
    { icon: TrendingUp, name: "Marketing Insights", count: 12 },
    { icon: Users, name: "Community Spotlights", count: 8 },
    { icon: Award, name: "Agency News", count: 5 },
    { icon: Download, name: "Resources", count: 10 }
  ];

  const featuredPosts = [
    {
      title: "AI-Powered Marketing: What Every Business Needs to Know in 2026",
      excerpt: "Explore how artificial intelligence is transforming digital advertising, content creation, and customer targeting. Learn the practical applications that can drive real results for your business.",
      category: "Marketing Insights",
      date: "January 10, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Hometown Hype: Celebrating Our Local Heroes",
      excerpt: "Go behind the scenes of our latest Hometown Hype episode featuring a family-owned bakery celebrating 50 years in business. Discover the stories that make our community special.",
      category: "Community Spotlights",
      date: "January 5, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Forward Minded Media Wins Regional Marketing Excellence Award",
      excerpt: "We're honored to receive recognition for our innovative Hometown Hype series and community-driven marketing initiatives. Thank you to our amazing clients and partners!",
      category: "Agency News",
      date: "December 28, 2025",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      href: "#"
    }
  ];

  const resources = [
    {
      title: "Social Media Content Calendar Template",
      description: "Plan your content strategy with our comprehensive monthly template.",
      icon: Calendar,
      type: "Template",
      downloadUrl: "#"
    },
    {
      title: "Digital Advertising ROI Calculator",
      description: "Measure and optimize your ad spend across all platforms.",
      icon: TrendingUp,
      type: "Tool",
      downloadUrl: "#"
    },
    {
      title: "Brand Identity Checklist",
      description: "Essential elements every business needs for consistent branding.",
      icon: BookOpen,
      type: "Guide",
      downloadUrl: "#"
    }
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

      {/* Page Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="ThreeDee text-white text-5xl md:text-6xl mb-6"
            style={{ 
              fontFamily: '"scandia-web", sans-serif', 
              fontWeight: 700,
              fontStyle: 'italic',
              textShadow: `
                0 0.015em 0 #d16cc7,
                0 0.03em 0.015em #6d3568,
                0 0.045em 0.03em #4a2345
              `
            }}
          >
            Blog & Resources
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: '"halcom", sans-serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Marketing insights, community stories, and free resources to help your business thrive.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#f7ba40]/50 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <IconComponent size={32} className="text-[#f7ba40] mb-4" />
                  <h3 
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: '"halcom", sans-serif' }}>
                    {category.count} articles
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            style={{ fontFamily: '"scandia-web", sans-serif' }}
          >
            Recent Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#f7ba40]/50 transition-all group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 bg-[#f7ba40] text-black text-xs font-semibold rounded-full"
                      style={{ fontFamily: '"scandia-web", sans-serif' }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3" style={{ fontFamily: '"halcom", sans-serif' }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-[#f7ba40] transition-colors"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    {post.title}
                  </h3>

                  <p 
                    className="text-gray-300 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: '"halcom", sans-serif' }}
                  >
                    {post.excerpt}
                  </p>

                  <a 
                    href={post.href}
                    className="text-[#f7ba40] hover:text-[#ffeb78] font-semibold text-sm transition-colors inline-flex items-center gap-2"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-12 px-6 mb-12">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            style={{ fontFamily: '"scandia-web", sans-serif' }}
          >
            Free Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#f7ba40]/50 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent size={40} className="text-[#f7ba40]" />
                    <span 
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full"
                      style={{ fontFamily: '"scandia-web", sans-serif' }}
                    >
                      {resource.type}
                    </span>
                  </div>

                  <h3 
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    {resource.title}
                  </h3>

                  <p 
                    className="text-gray-300 text-sm mb-6"
                    style={{ fontFamily: '"halcom", sans-serif' }}
                  >
                    {resource.description}
                  </p>

                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#85417f] hover:bg-[#9d4d96] text-white rounded-lg font-semibold transition-colors text-sm"
                    style={{ fontFamily: '"scandia-web", sans-serif' }}
                  >
                    <Download size={18} />
                    Download
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
