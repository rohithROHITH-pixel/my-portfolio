"use client";

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Terminal, Cpu, Shield, Activity, Share2 } from 'lucide-react';

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
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 data-grid" />
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-1/4 left-10 animate-spatial hidden lg:block">
        <div className="tactical-panel p-4 border-primary/20 bg-black/40">
          <Activity size={20} className="text-primary mb-2" />
          <div className="w-12 h-1 bg-primary/20" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Header HUD */}
          <div className={`mb-16 flex items-center gap-6 px-8 py-3 bg-white/[0.02] border-x border-primary/30 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <Cpu size={14} className="text-secondary animate-pulse" />
            <span className="text-[10px] font-mono font-black tracking-[0.5em] text-white uppercase">
              System_Authorized // Access_Granted
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-primary" />
              <div className="w-1 h-1 bg-primary/40" />
            </div>
          </div>

          {/* Main Title Interface */}
          <div 
            className="relative mb-16 text-center"
            style={{ 
              transform: `perspective(1000px) rotateY(${coords.x * 0.1}deg) rotateX(${coords.y * -0.1}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h1 className={`text-8xl md:text-[14rem] font-headline font-black leading-[0.8] tracking-tighter transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-white glow-text">ROHITH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">YP</span>
            </h1>

            {/* Corner Brackets */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-secondary/40" />
          </div>

          {/* Subtitle Interface */}
          <div className={`max-w-4xl text-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-3xl text-white/40 font-light leading-tight mb-16 tracking-tight">
              <span className="text-white font-bold">AIML ENGINEERING ARCHITECT</span><br />
              Synthesizing Neural Interfaces & Distributed Intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <a 
                href="#projects" 
                className="group relative px-20 py-8 bg-primary text-white font-black tracking-[0.3em] text-[12px] uppercase overflow-hidden transition-all hover:scale-105"
              >
                <div className="relative z-10 flex items-center gap-4">
                  INITIALIZE_CORE <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              
              <a 
                href="#contact" 
                className="group px-20 py-8 border border-white/10 text-white/60 font-black tracking-[0.3em] text-[12px] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center gap-4"
              >
                <Terminal size={16} className="text-secondary" />
                <span>CMD_PROMPT</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Data Metrics */}
      <div className="absolute bottom-12 left-12 font-mono text-[10px] text-white/10 space-y-2 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>NETWORK_SYNC: STABLE</span>
        </div>
        <p>LATENCY: 0.0004MS</p>
        <p>COORDS: {coords.x.toFixed(4)}, {coords.y.toFixed(4)}</p>
      </div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
        <Share2 size={20} className="hover:text-primary cursor-pointer transition-colors" />
        <Shield size={20} className="hover:text-primary cursor-pointer transition-colors" />
        <Activity size={20} className="hover:text-primary cursor-pointer transition-colors" />
      </div>
    </section>
  );
}
