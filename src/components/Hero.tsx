"use client";

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Terminal, Binary, Cpu, Network } from 'lucide-react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050508]">
      {/* Dynamic Spatial Grid */}
      <div 
        className="absolute inset-0 energy-grid pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status HUD */}
          <div className={`mb-12 flex items-center gap-4 px-6 py-2 border border-white/5 bg-white/[0.02] rounded-full transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase">
              Core_Architecture // Node_01 // Verified
            </span>
          </div>

          {/* Holographic Headline */}
          <div className="relative mb-12 group" style={{ transform: `perspective(1000px) rotateX(${mousePos.y * 0.1}deg) rotateY(${mousePos.x * -0.1}deg)` }}>
            <h1 className={`text-7xl md:text-[12rem] font-headline font-bold leading-[0.85] tracking-tighter transition-all duration-1000 ${mounted ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-xl'}`}>
              <span className="block text-white glow-text">ROHITH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x bg-[length:200%_auto]">YP</span>
            </h1>
            
            {/* Brackets */}
            <div className="absolute -top-8 -left-8 w-12 h-12 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
            <div className="absolute -bottom-8 -right-8 w-12 h-12 border-b-2 border-r-2 border-accent/20 group-hover:border-accent/60 transition-colors" />
          </div>

          {/* Description Terminal */}
          <div className={`max-w-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-16 px-4">
              <span className="text-white font-semibold">AIML Engineering Architect</span> specialized in high-performance neural interfaces and decentralized web ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="#projects" 
                className="group relative px-16 py-6 bg-primary text-white font-bold tracking-[0.2em] text-[11px] uppercase overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(130,26,252,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  ACCESS REPOSITORY <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              
              <a 
                href="#contact" 
                className="group px-16 py-6 border border-white/10 text-white/60 font-bold tracking-[0.2em] text-[11px] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center gap-3"
              >
                <Terminal size={14} className="text-accent" />
                <span>OPEN_TERMINAL</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Hardware Data */}
      <div className="absolute bottom-20 right-20 hidden lg:block font-mono text-[9px] text-white/5 space-y-1">
        <p>LATENCY: 14.2MS</p>
        <p>UPTIME: 99.998%</p>
        <p>BUFFER_HEALTH: NOMINAL</p>
        <p>COORD: {mousePos.x.toFixed(2)}, {mousePos.y.toFixed(2)}</p>
      </div>

      <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
        <div className="p-4 neural-panel border-primary/10">
          <Network size={20} className="text-primary opacity-40" />
        </div>
      </div>
    </section>
  );
}