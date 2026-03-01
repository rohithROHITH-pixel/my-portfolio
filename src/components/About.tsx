
"use client";

import { useEffect, useRef, useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Zap, 
  Activity, 
  Code2, 
  Palette, 
  Settings,
  ArrowDown,
  Globe,
  Cpu,
  Brain
} from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  
  const codeSnippet = `// REQUISITION: HTML + CSS + JS
const structure = "<html><section>...</section></html>";
const styling = ".ui { color: electric-purple; }";
const logic = "() => { animate_spatial_nodes(); }";

function build_modern_app() {
  combine(structure, styling, logic);
  deploy_to_cloud("WEB_OUTPUT_V4");
}

// > STATUS: COMPILING_PILLARS
// > READY_FOR_SYNTHESIS`;

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
          setTimeout(() => setIsFlipped(true), 1200);
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
          
          {/* 3D Flipping Architecture Display */}
          <div className={`relative perspective-1000 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className={`relative w-full aspect-square sm:aspect-[4/3] max-w-lg mx-auto lg:mx-0 transition-transform duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* FRONT SIDE: Source Code Terminal */}
              <div className="absolute inset-0 backface-hidden tactical-panel p-0 bg-black/80 border-primary/20 shadow-2xl overflow-hidden">
                <div className="bg-white/5 border-b border-white/10 p-2 md:p-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    <Terminal size={10} />
                    source_input.sh
                  </div>
                </div>

                <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed relative h-full overflow-y-auto scrollbar-hide">
                  <div className="text-secondary/40 mb-2">/* Initializing_Handshake... */</div>
                  <pre className="text-white/60 whitespace-pre-wrap break-words mb-6">
                    {typedCode}
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />
                  </pre>
                </div>
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="scanning-line opacity-20" />
                </div>
              </div>

              {/* BACK SIDE: The Three Pillars Visualization */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 tactical-panel p-0 bg-black border-primary shadow-[0_0_50px_rgba(130,26,252,0.4)] overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 data-grid" />
                
                <div className="relative z-10 w-full h-full p-6 md:p-10 flex flex-col items-center justify-center animate-reveal-blur">
                  <div className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                    <Activity size={10} className="animate-pulse" />
                    Synthesis_Complete
                  </div>

                  {/* Three Pillars UI */}
                  <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 w-full max-w-sm">
                    {[
                      { icon: <Code2 size={24} />, label: "HTML", color: "text-red-500", desc: "STRUCTURE" },
                      { icon: <Palette size={24} />, label: "CSS", color: "text-primary", desc: "DESIGN" },
                      { icon: <Zap size={24} />, label: "JS", color: "text-secondary", desc: "LOGIC" }
                    ].map((pillar, i) => (
                      <div key={i} className="flex flex-col items-center text-center group">
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-none border border-white/10 bg-white/[0.02] flex items-center justify-center mb-3 group-hover:border-white/30 transition-all ${pillar.color}`}>
                          {pillar.icon}
                        </div>
                        <div className="text-[10px] font-black text-white tracking-widest mb-1">{pillar.label}</div>
                        <div className="text-[6px] font-mono text-white/30 uppercase tracking-[0.2em]">{pillar.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Connecting Arrow */}
                  <div className="flex flex-col items-center gap-2 mb-10 opacity-30 animate-bounce">
                    <ArrowDown size={16} className="text-white" />
                  </div>

                  {/* Final Output Node */}
                  <div className="w-full max-w-xs p-5 md:p-8 bg-white/[0.03] border border-white/10 relative group overflow-hidden">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Globe size={20} />
                      </div>
                      <div className="text-left">
                        <div className="text-[7px] font-mono text-white/40 uppercase tracking-widest">Project_Status</div>
                        <div className="text-xs md:text-sm font-black text-white tracking-tight uppercase">LIVE_WEB_OUTPUT</div>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x" />
                    </div>
                    <div className="mt-3 text-[7px] font-mono text-primary/60 uppercase tracking-widest">Optimal_Performance_Reached</div>
                    
                    <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-1 h-1 bg-emerald-500 animate-pulse" />
                      <div className="w-1 h-1 bg-emerald-500/40" />
                    </div>
                  </div>
                </div>

                <div className="scanning-line opacity-40" />
              </div>

            </div>
          </div>

          {/* Simplified Bio Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 md:w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(130,26,252,0.5)]" />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] text-primary uppercase">Identity_Node</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-black text-white mb-6 md:mb-10 tracking-tighter uppercase leading-none">
              BUILDING THE <span className="text-primary/60">DIGITAL FUTURE</span>
            </h2>

            <div className="space-y-6 md:space-y-10 text-sm md:text-base lg:text-lg text-white/40 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Rohith YP</span>. I specialize in combining the three pillars of web development—<span className="text-white">Structure, Design, and Logic</span>—into high-performance digital experiences.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Brain size={20} />, title: "Smart Logic", desc: "Complex functions made simple and fast" },
                  { icon: <Cpu size={20} />, title: "Modern Stack", desc: "Using the best tools for 2025 standards" }
                ].map((item, i) => (
                  <div key={i} className="tactical-panel p-5 md:p-8 border-white/5 hover:border-primary/40 transition-all group bg-white/[0.01]">
                    <div className="text-primary mb-3 md:mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-black mb-1 md:mb-2 tracking-widest text-[9px] md:text-[11px] uppercase">{item.title}</h4>
                    <p className="text-[11px] md:text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-10 border-l-4 border-secondary/40 bg-white/[0.01] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-[7px] font-mono text-secondary opacity-40">MISSION_CONTROL</div>
                <p className="italic text-white/70 relative z-10 text-base md:text-xl leading-snug">
                  "I transform complex technical requirements into clean, beautiful, and intuitive web solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
