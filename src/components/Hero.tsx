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
      className="relative min-h-screen flex flex-col items-center justify-center pt-40 md:pt-56 pb-20 overflow-hidden bg-background"
    >
      {/* Dynamic Spatial Grid */}
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
          
          {/* Welcome Message Protocol */}
          <div className={`mb-4 md:mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center gap-3">
              <span className="w-2 h-[1px] bg-primary animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-mono text-primary/60 uppercase tracking-[0.5em] font-black">
                WELCOME_USER // INITIALIZING_NEURAL_LINK
              </span>
              <span className="w-2 h-[1px] bg-primary animate-pulse" />
            </div>
          </div>

          {/* System Status HUD Bar */}
          <div className={`mb-10 md:mb-16 flex items-center gap-4 md:gap-8 px-5 md:px-10 py-2.5 bg-white/[0.02] border border-white/5 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex items-center gap-3">
              <Activity size={12} className="text-secondary animate-pulse" />
              <span className="text-[7px] md:text-[9px] font-mono font-black tracking-[0.3em] text-white/40 uppercase">
                ACCESS_GRANTED
              </span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-[7px] md:text-[9px] font-mono font-black tracking-[0.3em] text-primary uppercase">
              NODE_ID: R-01 // STABLE
            </span>
          </div>

          {/* Kinetic Title Interface - NAME IN ONE LINE */}
          <div 
            className="relative mb-12 md:mb-20 text-center"
            style={{ 
              transform: `perspective(1000px) rotateY(${coords.x * 0.03}deg) rotateX(${coords.y * -0.03}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-white glow-text">ROHITH </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">YP</span>
            </h1>

            {/* Tactical Brackets */}
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-10 h-10 md:w-24 md:h-24 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-10 h-10 md:w-24 md:h-24 border-b-2 border-r-2 border-secondary/20" />
          </div>

          {/* Tagline & Technical Subtext */}
          <div className={`max-w-4xl text-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-4 px-6 py-2 border-x border-white/10 bg-white/[0.01] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-[9px] md:text-xs font-mono font-bold tracking-[0.4em] text-white/80 uppercase">
                  NEURAL_INTERFACE // DISTRIBUTED_INTELLIGENCE
                </span>
              </div>
              
              <p className="text-sm md:text-2xl text-white/30 font-light leading-snug tracking-tight uppercase">
                <span className="text-white font-bold">AIML Engineering Architect</span><br />
                Synthesizing Next-Gen Web Ecosystems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full sm:w-auto px-4">
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto px-10 md:px-16 py-5 md:py-7 bg-primary text-white font-black tracking-[0.3em] text-[10px] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
              >
                <div className="relative z-10 flex items-center justify-center gap-4">
                  INITIALIZE_CORE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-10 md:px-16 py-5 md:py-7 border border-white/10 text-white/40 font-black tracking-[0.3em] text-[10px] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-4 text-center"
              >
                <Terminal size={16} className="text-secondary" />
                <span>CONTACT</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Technical Telemetry */}
      <div className="absolute bottom-10 left-10 font-mono text-[9px] text-white/10 space-y-2 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="tracking-[0.2em]">NETWORK_SYNC: OPTIMAL</span>
        </div>
        <p className="tracking-[0.1em]">SPATIAL_X: {coords.x.toFixed(2)}</p>
        <p className="tracking-[0.1em]">SPATIAL_Y: {coords.y.toFixed(2)}</p>
        <p className="tracking-[0.1em]">CORE_TEMP: 32.4°C</p>
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden 2xl:flex flex-col gap-10 opacity-20">
        <Share2 size={20} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Shield size={20} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Activity size={20} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
      </div>
    </section>
  );
}
