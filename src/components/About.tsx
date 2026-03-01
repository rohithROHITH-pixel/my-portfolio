
"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Fingerprint, Radar, Layers, Terminal, Code2, ShieldCheck, Activity, Cpu } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  
  const codeSnippet = `// Initializing_Neural_Core...
// Status: HANDSHAKE_OK
// Target: SYSTEM_GUEST

const init = async () => {
  console.log("EXECUTING_WELCOME_PROTOCOL");
  await sync_neural_weights();
  return "READY_FOR_EXPLORATION";
};

/* [SYSTEM_LOG] */
// > SYNC_COMPLETE
// > GREETING_ACTIVE`;

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
      }, 20);
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
                    neural_handshake.sys
                  </div>
                </div>

                <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed relative h-full overflow-y-auto scrollbar-hide">
                  <div className="text-secondary/40 mb-2">/* Execution_Thread: ACTIVE */</div>
                  <pre className="text-white/60 whitespace-pre-wrap break-words mb-6">
                    {typedCode}
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />
                  </pre>
                  <div className="absolute bottom-10 right-0 opacity-5 pointer-events-none">
                    <Code2 size={120} className="text-primary rotate-12" />
                  </div>
                </div>
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="scanning-line opacity-20" />
                </div>
              </div>

              {/* BACK SIDE: Animated Welcome Display */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 tactical-panel p-0 bg-black border-primary shadow-[0_0_50px_rgba(130,26,252,0.4)] overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 data-grid" />
                
                <div className="relative z-10 p-6 md:p-10 space-y-6 md:space-y-8 animate-reveal-blur">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-primary/30 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center border border-primary shadow-[0_0_20px_rgba(130,26,252,0.6)]">
                          <ShieldCheck size={32} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-1.5 bg-primary/10 border border-primary/30 text-[8px] md:text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-black">
                      System_Initialized
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tighter leading-tight glow-text animate-glitch">
                    WELCOME TO MY<br />
                    <span className="text-primary">PORTFOLIO</span>
                  </h3>

                  <div className="flex items-center gap-8 justify-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest">Latency</div>
                      <div className="text-[10px] font-mono text-secondary font-black">0.02MS</div>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest">Protocol</div>
                      <div className="text-[10px] font-mono text-primary font-black">SEC_V4</div>
                    </div>
                  </div>
                </div>

                {/* HUD Decorations */}
                <div className="absolute top-4 left-4 p-2 border-l border-t border-primary/40 w-16 h-16" />
                <div className="absolute bottom-4 right-4 p-2 border-r border-b border-secondary/40 w-16 h-16" />
                <div className="scanning-line opacity-40" />
                
                {/* Data Telemetry Overlay */}
                <div className="absolute top-6 right-6 hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity size={10} className="text-secondary animate-pulse" />
                    <span className="text-[7px] font-mono text-white/30 uppercase tracking-widest">Neural_Sync</span>
                  </div>
                  <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-secondary animate-pulse" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Technical Specifications Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 md:w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(130,26,252,0.5)]" />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] text-primary uppercase">Bio_Processor</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-black text-white mb-6 md:mb-10 tracking-tighter uppercase leading-none">
              ENGINEERED FOR <span className="text-primary/60">INTELLIGENCE</span>
            </h2>

            <div className="space-y-6 md:space-y-10 text-sm md:text-base lg:text-lg text-white/40 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-bold">Rohith YP</span>. My focus is the intersection of high-performance web architecture and cognitive computing. Currently architecting modular systems at the 2nd-year engineering node.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Brain size={20} />, title: "Neural Logic", desc: "Deep integration of LLM workflows into responsive UX" },
                  { icon: <Cpu size={20} />, title: "Distributed Web", desc: "Scale-first architecture using modern cloud nodes" }
                ].map((item, i) => (
                  <div key={i} className="tactical-panel p-5 md:p-8 border-white/5 hover:border-primary/40 transition-all group bg-white/[0.01]">
                    <div className="text-primary mb-3 md:mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-black mb-1 md:mb-2 tracking-widest text-[9px] md:text-[11px] uppercase">{item.title}</h4>
                    <p className="text-[11px] md:text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-10 border-l-4 border-secondary/40 bg-white/[0.01] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-[7px] font-mono text-secondary opacity-40">REF_AUTH_01</div>
                <p className="italic text-white/70 relative z-10 text-base md:text-xl leading-snug">
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
