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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Bio-Scan Profile */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative tactical-panel p-1 md:p-2 aspect-[4/5] max-w-sm mx-auto lg:mx-0 group">
              <img 
                src="https://picsum.photos/seed/rohith-os/1200/1500" 
                alt="System Administrator" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                data-ai-hint="futuristic pilot portrait"
              />
              
              {/* Scan Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="scanning-line" />
                <div className="absolute top-4 left-4 p-2 md:p-4 bg-black/80 backdrop-blur-md border border-primary/20">
                  <Fingerprint className="text-primary mb-1 md:mb-2 w-4 h-4 md:w-6 md:h-6" />
                  <div className="text-[6px] md:text-[8px] font-mono text-white/40 uppercase tracking-tighter">Subject_ID: 966376</div>
                </div>
                <div className="absolute bottom-4 right-4 p-2 md:p-4 bg-black/80 backdrop-blur-md border border-secondary/20">
                  <Radar className="text-secondary animate-spin-slow w-4 h-4 md:w-6 md:h-6" />
                  <div className="text-[6px] md:text-[8px] font-mono text-white/40 uppercase tracking-tighter">Loc: IN_NODE_01</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="w-8 md:w-16 h-[2px] bg-primary" />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] md:tracking-[0.8em] text-primary uppercase">Bio_Processor</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-headline font-black text-white mb-6 md:mb-10 tracking-tighter uppercase leading-none">
              ENGINEERED FOR <span className="text-primary/60">INTELLIGENCE</span>
            </h2>

            <div className="space-y-6 md:space-y-10 text-base md:text-lg text-white/40 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Rohith YP</span>. My focus is the intersection of high-performance web architecture and cognitive computing. Currently architecting modular systems at the 2nd-year engineering node.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Brain size={20} />, title: "Neural Logic", desc: "Deep integration of LLM workflows into responsive UX" },
                  { icon: <Layers size={20} />, title: "Distributed Web", desc: "Scale-first architecture using modern cloud nodes" }
                ].map((item, i) => (
                  <div key={i} className="tactical-panel p-5 md:p-8 border-white/5 hover:border-primary/20 transition-all group">
                    <div className="text-primary mb-3 md:mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-black mb-1 md:mb-2 tracking-widest text-[9px] md:text-[11px] uppercase">{item.title}</h4>
                    <p className="text-[11px] md:text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-10 border-l-4 border-secondary/40 bg-white/[0.01] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-[7px] font-mono text-secondary opacity-40">REF_AUTH_01</div>
                <p className="italic text-white/70 relative z-10 text-lg md:text-xl leading-snug">
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
