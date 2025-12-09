"use client";

import React, { useEffect, useRef, useCallback, useId } from 'react';

interface AnimatedCircleChartProps {
  percentage?: number;
  value?: string;
  label?: string;
  className?: string;
}

const AnimatedCircleChart: React.FC<AnimatedCircleChartProps> = ({ 
  percentage = 32,
  value = "32%",
  label = "Rise",
  className = ""
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const uniqueId = useId();

  const animateChart = useCallback(() => {
    if (!svgRef.current || !pathRef.current) return;

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(percentage, 100);
    const offset = circumference - (circumference * progress / 100);

    // Set initial state
    pathRef.current.style.strokeDasharray = `${circumference}`;
    pathRef.current.style.strokeDashoffset = `${circumference}`;

    // Animate
    const animationDuration = 1300;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const animProgress = Math.min(elapsed / animationDuration, 1);
      
      const currentOffset = circumference - (circumference * progress / 100 * animProgress);
      pathRef.current!.style.strokeDashoffset = `${currentOffset}`;
      
      // Animate percentage counter
      if (percentageRef.current) {
        const currentPercentage = Math.round(progress * animProgress);
        percentageRef.current.textContent = `${currentPercentage}%`;
      }
      
      if (animProgress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Start animation after a short delay
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100);
  }, [percentage]);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current || !containerRef.current) return;
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateChart();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [percentage, animateChart]);

  return (
    <div ref={containerRef} className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <div className="relative w-full max-w-[200px] aspect-square">
        <svg 
          ref={svgRef}
          className="chart-circle w-full h-full transform -rotate-90" 
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`gradient-circle-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0" stopColor="#85417f" />
              <stop offset="50" stopColor="#6d3569" />
              <stop offset="100" stopColor="#5a2d56" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#2a1232"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Animated progress circle */}
          <circle
            ref={pathRef}
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke={`url(#gradient-circle-${uniqueId})`}
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage text in center */}
        <div 
          ref={percentageRef}
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white"
          style={{ fontFamily: '"scandia-web", sans-serif' }}
        >
          0%
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircleChart;

