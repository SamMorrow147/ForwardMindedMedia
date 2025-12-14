"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minimumLoadTime?: number; // Minimum time to show loading screen (in ms)
}

export default function LoadingScreen({ 
  onLoadingComplete,
  minimumLoadTime = 2000 
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId: number;
    
    // Simulate loading progress
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const normalizedProgress = Math.min((elapsed / minimumLoadTime) * 100, 100);
      
      setProgress(normalizedProgress);
      
      if (normalizedProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Loading complete - start fade out
        setTimeout(() => {
          setIsFadingOut(true);
          
          // Wait for CSS transition to complete before unmounting
          setTimeout(() => {
            setShouldUnmount(true);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 1600); // 1500ms transition + 100ms buffer
        }, 200);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateProgress);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [minimumLoadTime, onLoadingComplete]);

  // Don't unmount until fade is complete
  if (shouldUnmount) {
    return null;
  }

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      {/* Astronaut Container with Glow */}
      <div className="astronaut-container">
        <div className="astronaut-glow" />
        <Image
          src="/Booster.png"
          alt="Loading Astronaut"
          width={300}
          height={300}
          className="floating-astronaut"
          priority
        />
      </div>

      {/* Terminal-style Loader */}
      <div className="terminal-loader">
        <div className="loader-title">
          <p className="loading-text-main">LOADING</p>
          <div className="therefore">∴</div>
          <p className="loading-number">{Math.round(progress)}%</p>
        </div>
        
        <div className="loading-bar-border">
          <div 
            className="loading-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="warning-section">
          <p>
            <span className="exclamation">!</span>
            &nbsp;CAUTION, Do not turn off.
          </p>
          <div className="line-cascades"></div>
        </div>
      </div>
    </div>
  );
}

