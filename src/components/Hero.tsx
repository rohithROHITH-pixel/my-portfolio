"use client";

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Terminal, Activity, Share2, Layers, Shield } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 40,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-48 pb-20 overflow-hidden bg-background"
    >
      {/* Dynamic Spatial Grid - subtle motion */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0 data-grid" 
          style={{ 
            transform: `perspective(1200px) rotateX(${coords.y * 0.05}deg) rotateY(${coords.x * -0.05}deg) translateY(-200px)`,
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* System Status HUD - Positioned to avoid Navbar collision */}
          <div className={`mb-8 md:mb-12 flex items-center gap-4 md:gap-8 px-4 md:px-8 py-2 md:py-3 bg-white/[0.02] border-x border-primary/40 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Layers size={14} className="text-secondary animate-pulse" />
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-[7px] md:text-[9px] font-mono font-black tracking-[0.2em] md:tracking-[0.5em] text-white uppercase whitespace-nowrap">
              ACCESS_GRANTED // NODE_ID: R-01
            </span>
            <div className="flex gap-1.5 hidden sm:flex">
              <div className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(130,26,252,1)]" />
              <div className="w-1.5 h-1.5 bg-primary/30" />
            </div>
          </div>

          {/* Kinetic Title Interface */}
          <div 
            className="relative mb-8 md:mb-12 text-center"
            style={{ 
              transform: `perspective(1000px) rotateY(${coords.x * 0.03}deg) rotateX(${coords.y * -0.03}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-headline font-black leading-[0.8] tracking-tighter transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-white glow-text mb-2">ROHITH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">YP</span>
            </h1>

            {/* Tagline */}
            <div className={`mt-8 md:mt-10 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-4 px-4 py-1 border border-white/5 bg-white/[0.01]">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-[8px] md:text-[10px] font-mono font-bold tracking-[0.3em] md:tracking-[0.6em] text-white/60 uppercase">
                  NEURAL_INTERFACE // DISTRIBUTED_INTELLIGENCE
                </span>
              </div>
            </div>

            {/* Tactical Brackets */}
            <div className="absolute -top-4 -left-4 md:-top-10 md:-left-10 w-8 h-8 md:w-20 md:h-20 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 w-8 h-8 md:w-20 md:h-20 border-b-2 border-r-2 border-secondary/30" />
          </div>

          {/* Technical Subtext */}
          <div className={`max-w-3xl text-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs md:text-xl text-white/30 font-light leading-snug mb-10 md:mb-16 tracking-tight px-4 uppercase">
              <span className="text-white font-bold">AIML Engineering Architect</span><br className="hidden md:block" />
              Synthesizing Next-Gen Web Ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full sm:w-auto px-4">
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto px-8 md:px-14 py-4 md:py-6 bg-primary text-white font-black tracking-[0.2em] text-[9px] md:text-[10px] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
              >
                <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
                  INITIALIZE_CORE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-8 md:px-14 py-4 md:py-6 border border-white/10 text-white/40 font-black tracking-[0.2em] text-[9px] md:text-[10px] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-3 md:gap-4 text-center"
              >
                <Terminal size={14} className="text-secondary" />
                <span>CMD_PROMPT</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Technical Telemetry */}
      <div className="absolute bottom-6 left-6 font-mono text-[8px] text-white/10 space-y-1.5 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <span className="tracking-[0.2em]">NETWORK_SYNC: OPTIMAL</span>
        </div>
        <p className="tracking-[0.1em]">SPATIAL_X: {coords.x.toFixed(2)}</p>
        <p className="tracking-[0.1em]">SPATIAL_Y: {coords.y.toFixed(2)}</p>
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden 2xl:flex flex-col gap-8 opacity-20">
        <Share2 size={18} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Shield size={18} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Activity size={18} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
      </div>
    </section>
  );
}
