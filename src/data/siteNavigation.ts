/** Primary nav — single source of truth for StaggeredMenu and footer Quick Links */

export interface PrimaryNavItem {
  label: string;
  ariaLabel: string;
  link: string;
  highlight?: boolean;
}

export interface SocialNavItem {
  label: string;
  link: string;
}

export const primaryNavItems: PrimaryNavItem[] = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Who We Are', ariaLabel: 'Learn about us', link: '/who-we-are' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Our Team', ariaLabel: 'Meet our team', link: '/our-team' },
  { label: 'Projects', ariaLabel: 'View our projects', link: '/#recent-projects' },
  { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
  { label: 'Hometown Hype', ariaLabel: 'Community spotlight series', link: '/case-studies/local-brewery' },
  { label: 'Media Verse', ariaLabel: 'Visit Media Verse', link: '/media-verse' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact', highlight: true }
];

export const socialNavItems: SocialNavItem[] = [
  { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61562268475609' },
  { label: 'Instagram', link: 'https://www.instagram.com/forwardmindedmedia/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/forward-minded-media' },
  { label: 'TikTok', link: 'https://www.tiktok.com/@forwardmindedmedia?_r=1&_t=ZT-91Z7KwViAP7' }
];
