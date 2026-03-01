"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Fingerprint, Radar, Layers } from 'lucide-react';

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
    <section id="about" ref={sectionRef} className="py-24 md:py-40 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Bio-Scan Profile */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative tactical-panel p-1 md:p-2 aspect-[4/5] max-w-sm md:max-w-md mx-auto group">
              <img 
                src="https://picsum.photos/seed/rohith-os/1200/1500" 
                alt="System Administrator" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                data-ai-hint="futuristic pilot portrait"
              />
              
              {/* Scan Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="scanning-line" />
                <div className="absolute top-4 left-4 md:top-8 md:left-8 p-3 md:p-4 bg-black/80 backdrop-blur-md border border-primary/20">
                  <Fingerprint className="text-primary mb-2 w-5 h-5 md:w-6 md:h-6" />
                  <div className="text-[6px] md:text-[8px] font-mono text-white/40 uppercase">Subject_ID: 966376</div>
                </div>
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 p-3 md:p-4 bg-black/80 backdrop-blur-md border border-secondary/20">
                  <Radar className="text-secondary animate-spin-slow w-5 h-5 md:w-6 md:h-6" />
                  <div className="text-[6px] md:text-[8px] font-mono text-white/40 uppercase">Loc: IN_NODE_01</div>
                </div>
              </div>
            </div>
            {/* Background Light Leaks */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
          </div>

          {/* Technical Specifications */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <div className="w-12 md:w-16 h-[2px] bg-primary" />
              <span className="text-[10px] md:text-[12px] font-mono font-black tracking-[0.4em] md:tracking-[0.8em] text-primary uppercase">Bio_Processor</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black text-white mb-8 md:mb-12 tracking-tighter uppercase leading-none">
              ENGINEERED FOR <span className="text-primary/60">INTELLIGENCE</span>
            </h2>

            <div className="space-y-8 md:space-y-12 text-lg md:text-xl text-white/40 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Rohith YP</span>. My focus is the intersection of high-performance web architecture and cognitive computing. Currently architecting modular systems at the 2nd-year engineering node.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {[
                  { icon: <Brain />, title: "Neural Logic", desc: "Deep integration of LLM workflows into responsive UX" },
                  { icon: <Layers />, title: "Distributed Web", desc: "Scale-first architecture using modern cloud nodes" }
                ].map((item, i) => (
                  <div key={i} className="tactical-panel p-6 md:p-8 border-white/5 hover:border-primary/20 transition-all group">
                    <div className="text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-black mb-2 md:mb-3 tracking-widest text-[10px] md:text-xs uppercase">{item.title}</h4>
                    <p className="text-[12px] md:text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-10 border-l-4 border-secondary/40 bg-white/[0.01] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-secondary opacity-40">REF_AUTH_01</div>
                <p className="italic text-white/70 relative z-10 text-xl md:text-2xl leading-tight">
                  "Architecture is not just code; it's the nervous system of digital reality. I build the synapses."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}