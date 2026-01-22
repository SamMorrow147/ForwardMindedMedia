"use client";

import React, { useEffect, useRef, useCallback, useId } from 'react';

interface AnimatedLineChartProps {
  data?: number[];
  value?: string;
  label?: string;
  className?: string;
  trend?: 'up' | 'down'; // Add trend prop
  chartType?: string; // Add chartType prop for different styles
}

const AnimatedLineChart: React.FC<AnimatedLineChartProps> = ({ 
  data = [15, 25, 40, 30, 45, 40, 35, 55, 37, 50, 60, 45, 70, 78],
  value = "200%",
  label = "Increase",
  className = "",
  trend = 'up',
  chartType = 'default'
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const polygonRef = useRef<SVGPolygonElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const uniqueId = useId();

  const animateChart = useCallback(() => {
    if (!svgRef.current || !pathRef.current) return;

    // Normalize data to fit in 0-100 range, then scale to chart height
    const maxData = Math.max(...data);
    const minData = Math.min(...data);
    const dataRange = maxData - minData || 1;
    
    // Create points
    const points: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < data.length; i++) {
      const normalized = ((data[i] - minData) / dataRange) * 100;
      const pv = (normalized / 100) * 40;
      const x = (83.7 / data.length) * i + 1;
      // For downward trend: high values at top (low y), low values at bottom (high y)
      // For upward trend: low values at bottom (high y), high values at top (low y)
      const y = trend === 'down' ? 40 - pv : 40 - pv;
      // Actually, both should use 40 - pv since high normalized = high pv, and we want high values at top (low y)
      // But for downward, we want the line to start high and go down, so we need to think differently
      // Let's use: for downward, high data value should be at top (y near 0), so y = 40 - pv works
      // But wait, pv is based on normalized data where high = high pv, so 40 - pv gives us high values at top ✓
      points.push({ x: Math.min(x, 78), y: 40 - pv });
    }

    // Create path string
    const pathString = points.map((p, i) => 
      i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
    ).join(' ');

    // Set path
    pathRef.current.setAttribute('d', pathString);
    
    // Create polygon for fill
    if (polygonRef.current) {
      // For downward trend, fill from top; for upward, fill from bottom
      const bottomY = trend === 'down' ? 0 : 38.4;
      const polyPoints = [
        ...points,
        { x: 78, y: bottomY },
        { x: 1, y: bottomY }
      ];
      const polyString = polyPoints.map(p => `${p.x},${p.y}`).join(' ');
      polygonRef.current.setAttribute('points', polyString);
    }

    // Animate path
    const pathLength = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${pathLength}`;
    pathRef.current.style.strokeDashoffset = `${pathLength}`;
    
    // Animate
    const animationDuration = 1300;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      const offset = pathLength * (1 - progress);
      pathRef.current!.style.strokeDashoffset = `${offset}`;
      
      // Animate clip rect
      if (clipRectRef.current) {
        const clipX = -80 + (80 * progress);
        clipRectRef.current.setAttribute('x', `${clipX}`);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Start animation after a short delay
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100);
  }, [data]);

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
  }, [data, trend, animateChart]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <div className="chart-svg relative w-full">
        <svg 
          ref={svgRef}
          className="chart-line w-full h-[160px]" 
          viewBox="0 0 80 40"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: 'auto' }}
        >
          <defs>
            <clipPath id={`clip-purple-${uniqueId}`} x="0" y="0" width="80" height="40">
              <rect 
                ref={clipRectRef}
                id={`clip-rect-purple-${uniqueId}`}
                x="-80" 
                y="0" 
                width="77" 
                height="38.7"
              />
            </clipPath>

            {chartType === 'impressions' ? (
              <>
                <linearGradient id={`gradient-purple-1-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0" stopColor="#f7ba40" />
                  <stop offset="50" stopColor="#ff9f1c" />
                  <stop offset="100" stopColor="#ff8c00" />
                </linearGradient>

                <linearGradient id={`gradient-purple-2-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0" stopColor="#f7ba40" />
                  <stop offset="0.3" stopColor="#ff9f1c" />
                  <stop offset="0.6" stopColor="#ff8c00" />
                  <stop offset="1" stopColor="#e67e00" />
                </linearGradient>

                <linearGradient id={`gradient-purple-3-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0" stopColor="rgba(247, 186, 64, 0.2)" stopOpacity="0.2" />
                  <stop offset="0.5" stopColor="rgba(247, 186, 64, 0.3)" stopOpacity="0.3" />
                  <stop offset="1" stopColor="rgba(247, 186, 64, 0)" stopOpacity="0" />
                </linearGradient>
              </>
            ) : (
              <>
                <linearGradient id={`gradient-purple-1-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0" stopColor="#85417f" />
                  <stop offset="50" stopColor="#6d3569" />
                  <stop offset="100" stopColor="#5a2d56" />
                </linearGradient>

                <linearGradient id={`gradient-purple-2-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0" stopColor="#85417f" />
                  <stop offset="0.3" stopColor="#6d3569" />
                  <stop offset="0.6" stopColor="#5a2d56" />
                  <stop offset="1" stopColor="#4a2546" />
                </linearGradient>

                <linearGradient id={`gradient-purple-3-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0" stopColor="rgba(133, 65, 127, 0.15)" stopOpacity="0.15" />
                  <stop offset="0.5" stopColor="rgba(133, 65, 127, 0.25)" stopOpacity="0.25" />
                  <stop offset="1" stopColor="rgba(133, 65, 127, 0)" stopOpacity="0" />
                </linearGradient>
              </>
            )}
          </defs>

          {/* Grid lines */}
          <g id="grid">
            {Array.from({ length: 5 }).map((_, i) => {
              const stepX = 77 / 14;
              const gridColor = chartType === 'impressions' ? '#ff9f1c' : '#f7ba40';
              const gridOpacity = chartType === 'impressions' ? '0.4' : '0.3';
              return (
                <line
                  key={`h-${i}`}
                  className="horizontal"
                  x1="0"
                  y1={stepX * i}
                  x2="77"
                  y2={stepX * i}
                  stroke={gridColor}
                  strokeWidth="0.1"
                  strokeOpacity={gridOpacity}
                />
              );
            })}
            {Array.from({ length: 15 }).map((_, i) => {
              const gridColor = chartType === 'impressions' ? '#ff9f1c' : '#f7ba40';
              const gridOpacity = chartType === 'impressions' ? '0.4' : '0.3';
              return (
                <line
                  key={`v-${i}`}
                  className="vertical"
                  x1={(77 / 14) * i}
                  y1="38.7"
                  x2={(77 / 14) * i}
                  y2="0"
                  stroke={gridColor}
                  strokeWidth="0.1"
                  strokeOpacity={gridOpacity}
                />
              );
            })}
          </g>

          {/* Filled polygon */}
          <polygon
            ref={polygonRef}
            fill={`url(#gradient-purple-3-${uniqueId})`}
            clipPath={`url(#clip-purple-${uniqueId})`}
          />

          {/* Animated line */}
          <path
            ref={pathRef}
            id={`graph-purple-${uniqueId}`}
            stroke={`url(#gradient-purple-1-${uniqueId})`}
            strokeWidth="1.5"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLineChart;

