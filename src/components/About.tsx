"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Fingerprint, Radar, Layers, Terminal, Code2, ChevronRight } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  
  const codeSnippet = `// Initializing_Neural_Core...
// Status: HANDSHAKE_OK
// Target: SYSTEM_GUEST

const init = async () => {
  console.log("WELCOME TO MY PORTFOLIO");
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
          setTimeout(() => setShowOutput(true), 500);
        }
      }, 25);
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
          {/* Neural Terminal Interface */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative tactical-panel p-0 aspect-square sm:aspect-[4/3] max-w-lg mx-auto lg:mx-0 group overflow-hidden bg-black/60 border-primary/20 shadow-2xl">
              {/* Terminal Header */}
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

              {/* Terminal Body */}
              <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed relative h-full overflow-y-auto scrollbar-hide">
                <div className="text-secondary/40 mb-2">/* Execution_Thread: {isVisible ? 'ACTIVE' : 'IDLE'} */</div>
                <pre className="text-white/60 whitespace-pre-wrap break-words mb-6">
                  {typedCode}
                  {!showOutput && <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />}
                </pre>

                {/* Animated Output Section */}
                {showOutput && (
                  <div className="mt-4 p-4 border border-primary/30 bg-primary/5 animate-reveal-blur relative overflow-hidden">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <ChevronRight size={14} className="animate-pulse" />
                      <span className="text-[8px] uppercase font-black tracking-widest">Execution_Result:</span>
                    </div>
                    <div className="text-white font-black text-sm sm:text-base md:text-xl tracking-tighter glow-text animate-glitch">
                      WELCOME TO MY PORTFOLIO
                    </div>
                    <div className="absolute top-0 right-0 p-2 text-[6px] text-white/10">STABLE_OS_v4.0</div>
                  </div>
                )}

                {/* Background Decor Layer */}
                <div className="absolute bottom-10 right-0 opacity-5 pointer-events-none">
                  <Code2 size={120} className="text-primary rotate-12" />
                </div>
              </div>
              
              {/* Scan Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="scanning-line opacity-20" />
                <div className="absolute top-12 left-4 p-2 bg-black/80 backdrop-blur-md border border-primary/20 hidden sm:block">
                  <Fingerprint className="text-primary mb-1 w-4 h-4" />
                  <div className="text-[6px] font-mono text-white/40 uppercase">UID: 966376</div>
                </div>
                <div className="absolute bottom-4 right-4 p-2 bg-black/80 backdrop-blur-md border border-secondary/20">
                  <Radar className="text-secondary animate-spin-slow w-4 h-4" />
                  <div className="text-[6px] font-mono text-white/40 uppercase">GREET_SYNC: OK</div>
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
                  { icon: <Layers size={20} />, title: "Distributed Web", desc: "Scale-first architecture using modern cloud nodes" }
                ].map((item, i) => (
                  <div key={i} className="tactical-panel p-5 md:p-8 border-white/5 hover:border-primary/20 transition-all group bg-white/[0.01]">
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
