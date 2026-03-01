"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Terminal, Binary, Activity } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#6d28d9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className={`mb-8 flex items-center gap-3 px-4 py-1 border border-primary/30 bg-primary/5 rounded-full transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Activity size={12} className="text-primary animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary uppercase">
              Core Protocol v2.5 // ONLINE
            </span>
          </div>

          {/* Main Headline */}
          <div className="relative mb-8">
            <h1 className={`text-6xl md:text-[10rem] font-headline font-bold leading-none tracking-tighter transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-xl'}`}>
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">ROHITH</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite]">YP</span>
            </h1>
            
            {/* HUD Elements around H1 */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent/40" />
          </div>

          {/* Subtext */}
          <div className={`max-w-2xl transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
              <span className="text-white font-medium">AIML Engineering Student</span> synthesizing neural logic and futuristic web architecture. Architecting digital experiences where data meets design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#projects" 
                className="group relative px-12 py-5 bg-white text-black font-bold tracking-widest text-[10px] uppercase overflow-hidden hover:scale-105 active:scale-95 transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Initialize Sync <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              
              <a 
                href="#contact" 
                className="group px-12 py-5 border border-white/10 text-white font-bold tracking-widest text-[10px] uppercase hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-3"
              >
                <Terminal size={14} className="text-accent" />
                <span>Source Terminal</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Data Blocks */}
      <div className="absolute bottom-20 left-10 hidden lg:block animate-float">
        <div className="p-4 cyber-panel border-primary/20">
          <Binary size={20} className="text-primary mb-2" />
          <div className="w-12 h-1 bg-primary/30" />
        </div>
      </div>
      
      <div className="absolute top-40 right-10 hidden lg:block animate-float [animation-delay:2s]">
        <div className="p-4 cyber-panel border-accent/20">
          <Activity size={20} className="text-accent mb-2" />
          <div className="w-12 h-1 bg-accent/30" />
        </div>
      </div>
    </section>
  );
}