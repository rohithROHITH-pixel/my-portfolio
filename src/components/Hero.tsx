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
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
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
          <div className={`mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/30" />
              <span className="text-[10px] md:text-xs font-mono text-primary font-bold uppercase tracking-[0.4em]">
                Architecture Portfolio
              </span>
              <span className="w-8 h-[1px] bg-primary/30" />
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
            <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-white">ROHITH </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x">YP</span>
            </h1>

            {/* Tactical Brackets */}
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-10 h-10 md:w-20 md:h-20 border-t border-l border-primary/20" />
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-10 h-10 md:w-20 md:h-20 border-b border-r border-primary/20" />
          </div>

          {/* Tagline & Technical Subtext */}
          <div className={`max-w-4xl text-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-10 flex flex-col items-center">
              <p className="text-base md:text-2xl text-slate-400 font-light leading-snug tracking-tight">
                <span className="text-white font-semibold">AIML Engineering Architect</span> & Full-Stack Developer.<br />
                Creating high-performance digital ecosystems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4">
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto px-12 py-5 bg-primary text-white font-bold tracking-widest text-xs uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center shadow-lg shadow-primary/20"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-12 py-5 border border-white/10 text-white font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-center"
              >
                <Terminal size={16} className="text-primary" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Technical Telemetry */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-slate-600 space-y-2 hidden lg:block">
        <p className="tracking-widest">LOC: 12.9716° N, 77.5946° E</p>
        <p className="tracking-widest">SYSTEM: STABLE_V1.0</p>
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden 2xl:flex flex-col gap-8 opacity-40">
        <Share2 size={18} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Shield size={18} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
        <Activity size={18} className="hover:text-primary cursor-pointer transition-all hover:scale-110" />
      </div>
    </section>
  );
}