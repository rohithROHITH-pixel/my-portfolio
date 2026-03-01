"use client";

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 grid-bg pointer-events-none" />
      
      {/* Floating Particles/Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-float"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-float" 
        style={{ animationDelay: '2s', transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass mb-6 animate-slide-up">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">
            Available for Projects
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter mb-6 animate-reveal-blur">
          <span className="block text-white">Rohith YP</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-glitch text-4xl md:text-6xl mt-2">
            AIML Engineering Student
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-slide-up [animation-delay:0.4s]">
          Crafting Modern, Animated & 3D Web Experiences for Brands & Businesses. Building the future of the web with AI and precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:0.6s]">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-primary rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:neon-border-purple flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[sweep_0.6s_ease-in-out_forwards]" />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 glass rounded-xl font-semibold text-white border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}