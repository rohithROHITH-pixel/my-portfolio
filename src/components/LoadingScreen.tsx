"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1200);
    const glitchTimer = setTimeout(() => setIsGlitching(true), 1800);
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(glitchTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f] transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 shadow-[0_0_15px_rgba(158,207,252,0.8)] animate-scan" />
      
      {/* Subtle Particles Background */}
      <div className="absolute inset-0 opacity-20 grid-bg pointer-events-none" />

      <div className="relative text-center">
        <h1 className={`text-5xl md:text-7xl font-headline font-bold tracking-tighter transition-all duration-1000 ${isGlitching ? 'animate-glitch' : ''} ${showSubtitle ? 'filter-none opacity-100' : 'filter blur-xl opacity-0'}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent neon-text-purple">
            ROHITH YP
          </span>
        </h1>
        
        <p className={`mt-4 text-sm md:text-lg tracking-[0.3em] font-medium text-muted-foreground transition-all duration-700 delay-500 uppercase ${showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          AIML Engineer | Web Developer
        </p>
      </div>
    </div>
  );
}