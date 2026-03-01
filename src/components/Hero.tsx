"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Cpu, Network } from 'lucide-react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />
      
      {/* HUD Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="relative w-[800px] h-[800px] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full blur-sm" />
        </div>
        <div className="absolute w-[600px] h-[600px] border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 mb-8 animate-slide-up">
          <Cpu size={14} className="text-primary animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
            System Online // AIML Node 01
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter mb-6 animate-reveal-blur relative">
          <span className="block text-white mb-2">ROHITH YP</span>
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-4xl md:text-7xl">
              AI-DRIVEN ENGINEERING
            </span>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 animate-slide-up [animation-delay:0.4s] font-light leading-relaxed">
          Synthesizing intelligence and aesthetics. Building the next generation of neural web interfaces with precision and visionary design.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up [animation-delay:0.6s]">
          <a 
            href="#projects" 
            className="group relative px-10 py-5 bg-primary text-white font-bold tracking-widest text-xs uppercase transition-all duration-300 hover:neon-glow-purple flex items-center gap-3"
          >
            <span className="relative z-10">Initiate Protocol</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a 
            href="#contact" 
            className="group px-10 py-5 bg-transparent border border-white/10 text-white font-bold tracking-widest text-xs uppercase hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
          >
            <Network size={16} className="text-accent group-hover:rotate-45 transition-transform" />
            <span>Establish Connection</span>
          </a>
        </div>
      </div>

      {/* Futuristic Scanline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute left-0 right-0 h-[2px] bg-primary/50 animate-scan-line" />
      </div>
    </section>
  );
}
