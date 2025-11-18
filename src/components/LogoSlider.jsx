'use client';

import './LogoSlider.css';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma } from 'react-icons/si';

export default function LogoSlider() {
  const techLogos = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFigma />, name: "Figma" }
  ];

  return (
    <div className="logos-static">
      {techLogos.map((logo, index) => (
        <div key={`logo-${index}`} className="logo-icon-static" title={logo.name}>
          {logo.icon}
        </div>
      ))}
    </div>
  );
}

