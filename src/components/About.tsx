"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Fingerprint, Radar, Layers, Terminal, Code2 } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const codeSnippet = `class RohithYP {
  role = 'AIML_ARCHITECT';
  node = 'IN_NODE_01';
  
  async synthesize() {
    await this.neuralSync();
    return "SYSTEM_ONLINE";
  }
}`;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    // Typing animation effect
    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) clearInterval(interval);
    }, 40);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Neural Terminal Interface */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative tactical-panel p-0 aspect-[4/5] max-w-sm mx-auto lg:mx-0 group overflow-hidden bg-black/40 border-primary/20">
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 p-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                </div>
                <div className="flex items-center gap-2 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                  <Terminal size={10} />
                  neural_core_init.ts
                </div>
              </div>

              {/* Terminal Body with Typing Effect */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed relative h-full">
                <div className="text-secondary/60 mb-2">/* Initializing_Subject_Profile */</div>
                <pre className="text-white/80 whitespace-pre-wrap">
                  {typedCode}
                  <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />
                </pre>

                {/* Background Decor Layer */}
                <div className="absolute bottom-10 right-0 opacity-10 pointer-events-none">
                  <Code2 size={120} className="text-primary rotate-12" />
                </div>
              </div>
              
              {/* Scan Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="scanning-line" />
                <div className="absolute top-12 left-4 p-2 bg-black/80 backdrop-blur-md border border-primary/20">
                  <Fingerprint className="text-primary mb-1 w-4 h-4" />
                  <div className="text-[6px] font-mono text-white/40 uppercase">ID: 966376</div>
                </div>
                <div className="absolute bottom-4 right-4 p-2 bg-black/80 backdrop-blur-md border border-secondary/20">
                  <Radar className="text-secondary animate-spin-slow w-4 h-4" />
                  <div className="text-[6px] font-mono text-white/40 uppercase">SYNC_OK</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 md:w-16 h-[2px] bg-primary" />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] text-primary uppercase">Bio_Processor</span>
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
