
"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Layers, Terminal, MousePointer2, Zap, Server, Activity, Cpu } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  
  const codeSnippet = `// Build_Process: HTML + CSS + JS
const structure = "<html><section>...</section></html>";
const styling = ".ui { color: electric-purple; }";
const logic = "() => { animate_spatial_nodes(); }";

function build_modern_app() {
  combine(structure, styling, logic);
  deploy_to_cloud("Next.js 15");
}

// > STATUS: READY_FOR_LAUNCH
// > PERFORMANCE: OPTIMAL`;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    let i = 0;
    let interval: NodeJS.Timeout;

    if (isVisible) {
      interval = setInterval(() => {
        setTypedCode(codeSnippet.slice(0, i));
        i++;
        if (i > codeSnippet.length) {
          clearInterval(interval);
          // Trigger the 3D flip after the code is fully typed
          setTimeout(() => setIsFlipped(true), 800);
        }
      }, 15);
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-32 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* 3D Flipping Terminal Interface */}
          <div className={`relative perspective-1000 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className={`relative w-full aspect-square sm:aspect-[4/3] max-w-lg mx-auto lg:mx-0 transition-transform duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* FRONT SIDE: Code Execution Terminal */}
              <div className="absolute inset-0 backface-hidden tactical-panel p-0 bg-black/80 border-primary/20 shadow-2xl overflow-hidden">
                <div className="bg-white/5 border-b border-white/10 p-2 md:p-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    <Terminal size={10} />
                    build_log.sys
                  </div>
                </div>

                <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed relative h-full overflow-y-auto scrollbar-hide">
                  <div className="text-secondary/40 mb-2">/* Initializing_Web_Component... */</div>
                  <pre className="text-white/60 whitespace-pre-wrap break-words mb-6">
                    {typedCode}
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />
                  </pre>
                </div>
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="scanning-line opacity-20" />
                </div>
              </div>

              {/* BACK SIDE: Technical Specifications Display (Simplified) */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 tactical-panel p-0 bg-black border-primary shadow-[0_0_50px_rgba(130,26,252,0.4)] overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 data-grid" />
                
                <div className="relative z-10 p-6 md:p-10 w-full h-full flex flex-col justify-center animate-reveal-blur">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.5em]">Web_Capabilities</span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 text-left">
                    {[
                      { icon: <Server size={14} />, label: "FRAMEWORK", value: "Next.js 15", desc: "Fast & Secure performance" },
                      { icon: <Zap size={14} />, label: "MOTION", value: "3D Animation", desc: "Smooth visual transitions" },
                      { icon: <Layers size={14} />, label: "INTERFACE", value: "Modern UI", desc: "Clean & responsive design" },
                      { icon: <MousePointer2 size={14} />, label: "UX", value: "Interactive", desc: "User-friendly experiences" }
                    ].map((spec, idx) => (
                      <div key={idx} className="border-l border-white/10 pl-5 py-1 hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-2 mb-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                          <span className="text-primary">{spec.icon}</span>
                          <span className="text-[8px] font-mono text-white/60 uppercase tracking-widest">{spec.label}</span>
                        </div>
                        <div className="text-sm md:text-base font-bold text-white group-hover:text-primary transition-colors tracking-tight">{spec.value}</div>
                        <div className="text-[9px] font-mono text-white/20 uppercase mt-1 tracking-wider">{spec.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 left-4 p-2 border-l border-t border-primary/40 w-16 h-16" />
                <div className="absolute bottom-4 right-4 p-2 border-r border-b border-secondary/40 w-16 h-16" />
                <div className="scanning-line opacity-40" />
                
                <div className="absolute top-6 right-6 hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity size={10} className="text-secondary animate-pulse" />
                    <span className="text-[7px] font-mono text-white/30 uppercase tracking-widest">System_Ready</span>
                  </div>
                  <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-secondary animate-pulse" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bio Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 md:w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(130,26,252,0.5)]" />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] text-primary uppercase">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-black text-white mb-6 md:mb-10 tracking-tighter uppercase leading-none">
              BUILDING THE <span className="text-primary/60">DIGITAL FUTURE</span>
            </h2>

            <div className="space-y-6 md:space-y-10 text-sm md:text-base lg:text-lg text-white/40 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Rohith YP</span>. I specialize in building high-performance websites that combine advanced logic with beautiful design. My goal is to create interactive digital experiences that are as functional as they are stunning.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Brain size={20} />, title: "Smart Design", desc: "Creating intuitive layouts that users love to explore" },
                  { icon: <Cpu size={20} />, title: "Modern Tech", desc: "Using the latest tools to ensure speed and reliability" }
                ].map((item, i) => (
                  <div key={i} className="tactical-panel p-5 md:p-8 border-white/5 hover:border-primary/40 transition-all group bg-white/[0.01]">
                    <div className="text-primary mb-3 md:mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-black mb-1 md:mb-2 tracking-widest text-[9px] md:text-[11px] uppercase">{item.title}</h4>
                    <p className="text-[11px] md:text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-10 border-l-4 border-secondary/40 bg-white/[0.01] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-[7px] font-mono text-secondary opacity-40">VISION_2025</div>
                <p className="italic text-white/70 relative z-10 text-base md:text-xl leading-snug">
                  "I don't just write code; I build the architecture for the next generation of web interaction."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
