"use client";

import { useEffect, useRef, useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Zap, 
  Activity, 
  Code2, 
  Palette, 
  ArrowDown,
  Globe,
  Cpu,
  Brain,
  Smartphone,
  Sparkles
} from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  
  const codeSnippet = `// REQUISITION: HTML + CSS + JS
const identity = "Rohith YP";
const status = "2nd Year AIML Student";
const focus = ["Performance", "Design", "Usability"];

function build_modern_app() {
  const code = manual_precision();
  const enhanced = ai_assisted_logic(code);
  deploy_to_cloud(enhanced);
}

// > STATUS: COMPILING_BIOGRAPHY
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
  }, [isVisible, codeSnippet]);

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
                    identity_protocol.ts
                  </div>
                </div>

                <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed relative h-full overflow-y-auto scrollbar-hide">
                  <div className="text-secondary/40 mb-2">/* Initializing_Identity_Handshake... */</div>
                  <pre className="text-white/60 whitespace-pre-wrap break-words mb-6">
                    {typedCode}
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />
                  </pre>
                </div>
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="scanning-line opacity-20" />
                </div>
              </div>

              {/* BACK SIDE: Feature Output Synthesis */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 tactical-panel p-0 bg-black border-primary shadow-[0_0_50px_rgba(130,26,252,0.4)] overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 data-grid" />
                
                <div className="relative z-10 w-full h-full p-4 md:p-8 flex flex-col items-center justify-center">
                  <div className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.5em] mb-4 md:mb-6 flex items-center gap-3">
                    <Activity size={10} className="animate-pulse" />
                    Synthesis_Output
                  </div>

                  {/* Three Pillars UI */}
                  <div className="grid grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-6 w-full max-w-sm">
                    {[
                      { icon: <Code2 size={18} />, label: "HTML", color: "text-red-500" },
                      { icon: <Palette size={18} />, label: "CSS", color: "text-primary" },
                      { icon: <Zap size={18} />, label: "JS", color: "text-secondary" }
                    ].map((pillar, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-none border border-white/10 bg-white/[0.02] flex items-center justify-center mb-2 ${pillar.color}`}>
                          {pillar.icon}
                        </div>
                        <div className="text-[9px] font-black text-white tracking-widest">{pillar.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Connecting Transition */}
                  <div className="flex flex-col items-center gap-2 mb-4 md:mb-6 opacity-30 animate-bounce">
                    <ArrowDown size={14} className="text-white" />
                  </div>

                  {/* Features Display Node - Arranged vertically for clarity */}
                  <div className="w-full max-w-[320px] flex flex-col gap-2">
                    {[
                      { icon: <Globe size={14} />, title: "MODERN INTERFACES", desc: "Clean & Professional" },
                      { icon: <Smartphone size={14} />, title: "RESPONSIVE", desc: "Multi-Device Layouts" },
                      { icon: <Layers size={14} />, title: "ANIMATED", desc: "Fluid Motion Design" },
                      { icon: <Sparkles size={14} />, title: "AI-ENHANCED", desc: "Efficient Solutions" }
                    ].map((feature, i) => (
                      <div key={i} className="p-2.5 bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-primary/40 transition-all group/feat">
                        <div className="text-primary group-hover/feat:scale-110 transition-transform">{feature.icon}</div>
                        <div className="text-left">
                          <div className="text-[9px] font-black text-white leading-none mb-1 uppercase tracking-wider">{feature.title}</div>
                          <div className="text-[7px] font-mono text-white/40 uppercase tracking-tighter">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8 w-full max-w-xs h-1 bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x" />
                  </div>
                  <div className="mt-2 text-[7px] font-mono text-primary/60 uppercase tracking-widest animate-pulse">Optimal_System_Ready</div>
                </div>

                <div className="scanning-line opacity-40" />
              </div>

            </div>
          </div>

          {/* Bio Text Column */}
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
                I am <span className="text-white font-bold">Rohith YP</span>, a 2nd year AIML Engineering student and passionate web developer. 
                I specialize in creating <span className="text-white">modern, responsive, and animated websites</span>.
              </p>
              
              <p>
                Currently fluent in frontend development and actively expanding my backend skills. 
                I build projects using a powerful combination of <span className="text-primary font-bold">manual coding expertise</span> and <span className="text-secondary font-bold">AI-assisted productivity tools</span> to deliver high-quality and efficient solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Brain size={20} />, title: "AIML Scholar", desc: "Applying engineering logic to complex web interfaces" },
                  { icon: <Cpu size={20} />, title: "Hybrid Workflow", desc: "Synthesizing manual precision with AI efficiency" }
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
                  "My focus is on performance, design quality, and real-world usability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}