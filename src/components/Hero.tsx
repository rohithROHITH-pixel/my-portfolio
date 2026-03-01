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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
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
          {/* System Status HUD */}
          <div className={`mb-12 md:mb-20 flex items-center gap-4 md:gap-8 px-6 md:px-10 py-3 md:py-4 bg-white/[0.02] border-x border-primary/40 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Layers size={14} className="text-secondary animate-pulse" />
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-[8px] md:text-[10px] font-mono font-black tracking-[0.3em] md:tracking-[0.6em] text-white uppercase whitespace-nowrap">
              Neural_Architecture_V4 // Node_01
            </span>
            <div className="flex gap-1.5 hidden sm:flex">
              <div className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(130,26,252,1)]" />
              <div className="w-1.5 h-1.5 bg-primary/30" />
            </div>
          </div>

          {/* Kinetic Title Interface */}
          <div 
            className="relative mb-12 md:mb-20 text-center"
            style={{ 
              transform: `perspective(1000px) rotateY(${coords.x * 0.03}deg) rotateX(${coords.y * -0.03}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <h1 className={`text-6xl sm:text-8xl md:text-[14rem] font-headline font-black leading-[0.75] tracking-tighter transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <span className="block text-white glow-text mb-4">ROHITH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">YP</span>
            </h1>

            {/* Tactical Brackets */}
            <div className="absolute -top-10 -left-10 md:-top-16 md:-left-16 w-16 h-16 md:w-32 md:h-32 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-16 h-16 md:w-32 md:h-32 border-b-2 border-r-2 border-secondary/40" />
          </div>

          {/* Technical Subtext */}
          <div className={`max-w-5xl text-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-3xl text-white/30 font-light leading-tight mb-12 md:mb-20 tracking-tight px-4">
              <span className="text-white font-bold">AIML ENGINEERING ARCHITECT</span><br />
              Synthesizing Neural Interfaces & Distributed Intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16">
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto px-12 md:px-24 py-6 md:py-10 bg-primary text-white font-black tracking-[0.4em] text-[10px] md:text-[12px] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="relative z-10 flex items-center justify-center gap-4 md:gap-6">
                  INITIALIZE_CORE <ArrowRight size={18} className="group-hover:translate-x-4 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-12 md:px-24 py-6 md:py-10 border border-white/10 text-white/40 font-black tracking-[0.4em] text-[10px] md:text-[12px] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-4 md:gap-6"
              >
                <Terminal size={18} className="text-secondary" />
                <span>CMD_PROMPT</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Technical Telemetry - Hidden on small mobile */}
      <div className="absolute bottom-16 left-16 font-mono text-[10px] text-white/10 space-y-3 hidden xl:block">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          <span className="tracking-[0.2em]">NETWORK_SYNC: OPTIMAL</span>
        </div>
        <p className="tracking-[0.1em]">LATENCY_PING: 0.00042MS</p>
        <p className="tracking-[0.1em]">SPATIAL_X: {coords.x.toFixed(4)}</p>
        <p className="tracking-[0.1em]">SPATIAL_Y: {coords.y.toFixed(4)}</p>
      </div>

      <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden 2xl:flex flex-col gap-12 opacity-20">
        <Share2 size={24} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Shield size={24} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Activity size={24} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
      </div>
    </section>
  );
}