"use client";

import { useEffect, useRef, useState } from 'react';
import { Cpu, Zap, Brain, Shield } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#050508]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-primary/40" />
              <span className="text-[10px] font-mono tracking-[0.6em] text-primary uppercase font-bold">Neural_Identity</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-12 tracking-tighter">
              BEYOND THE <span className="text-primary/80">PIXELS</span>
            </h2>

            <div className="space-y-8 text-xl text-white/50 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Rohith YP</span>, an AIML Engineering student forging the next generation of intelligent web systems.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-12">
                {[
                  { icon: <Brain />, label: "Cognitive Logic", desc: "Building neural-integrated systems" },
                  { icon: <Cpu />, label: "High Performance", desc: "Optimized for extreme scale" }
                ].map((item, i) => (
                  <div key={i} className="p-6 neural-panel border-white/5 group hover:border-primary/20 transition-all">
                    <div className="text-primary mb-4">{item.icon}</div>
                    <h4 className="text-white font-bold mb-2 tracking-wide">{item.label}</h4>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="border-l-2 border-primary/40 pl-8 italic py-4 text-white/80 bg-white/[0.02]">
                "Synthesizing manual code precision with AI efficiency to architect digital experiences that feel like the future."
              </p>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative z-10 neural-panel p-2 aspect-square max-w-lg mx-auto overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/rohith-v3/1000/1000" 
                alt="Neural Profile" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                data-ai-hint="futuristic character portrait"
              />
              
              {/* Dynamic HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 text-[8px] font-mono text-white/40 animate-pulse">
                  SYSTEM_SCANNING...
                </div>
                <div className="absolute bottom-10 left-10 space-y-1">
                  <div className="w-12 h-1 bg-primary/60" />
                  <div className="w-8 h-1 bg-white/20" />
                </div>
                {/* Scan line */}
                <div className="absolute left-0 w-full h-[2px] bg-primary/20 animate-scan-v" />
              </div>
            </div>
            
            {/* Background energy fields */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}