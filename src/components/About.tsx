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
  
  const codeSnippet = `// THE_PROCESS: Structure + Design + Logic
const dev = "Rohith YP";
const stack = ["Next.js", "Tailwind", "Firebase"];

function build_digital_experience() {
  const foundation = create_structure();
  const polished = apply_modern_design(foundation);
  const intelligent = inject_logic(polished);
  return deploy(intelligent);
}

// > STATUS: READY_TO_BUILD
// > SYSTEM_INITIALIZED`;

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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative bg-slate-950 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* 3D Flipping Architecture Display */}
          <div className={`relative perspective-1000 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className={`relative w-full aspect-square max-w-lg mx-auto lg:mx-0 transition-transform duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* FRONT SIDE: Source Code Terminal */}
              <div className="absolute inset-0 backface-hidden tactical-panel p-0 bg-slate-900 border-white/10 shadow-2xl overflow-hidden rounded-2xl">
                <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Terminal size={12} />
                    development_logic.ts
                  </div>
                </div>

                <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed h-full overflow-y-auto">
                  <pre className="text-slate-300 whitespace-pre-wrap">
                    {typedCode}
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1 align-middle" />
                  </pre>
                </div>
              </div>

              {/* BACK SIDE: Feature Output Synthesis */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 tactical-panel p-0 bg-slate-900 border-primary/20 shadow-2xl overflow-hidden flex flex-col rounded-2xl">
                <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
                  <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-8">
                    Production Output
                  </div>

                  {/* Three Pillars UI */}
                  <div className="grid grid-cols-3 gap-6 mb-10 w-full max-w-sm">
                    {[
                      { icon: <Code2 size={24} />, label: "Structure", color: "text-blue-400" },
                      { icon: <Palette size={24} />, label: "Design", color: "text-indigo-400" },
                      { icon: <Zap size={24} />, label: "Logic", color: "text-sky-400" }
                    ].map((pillar, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center mb-3 ${pillar.color}`}>
                          {pillar.icon}
                        </div>
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{pillar.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features Display Node */}
                  <div className="w-full max-w-xs flex flex-col gap-3">
                    {[
                      { icon: <Globe size={16} />, title: "Modern Interfaces", desc: "Clean & Professional" },
                      { icon: <Smartphone size={16} />, title: "Fully Responsive", desc: "Multi-Device Layouts" },
                      { icon: <Layers size={16} />, title: "Fluid Animations", desc: "Smooth User Journeys" },
                      { icon: <Sparkles size={16} />, title: "AI Integration", desc: "Intelligent Solutions" }
                    ].map((feature, i) => (
                      <div key={i} className="p-3 bg-white/[0.03] border border-white/5 rounded-lg flex items-center gap-4 hover:border-primary/20 transition-all">
                        <div className="text-primary">{feature.icon}</div>
                        <div className="text-left">
                          <div className="text-[10px] font-bold text-white uppercase tracking-wider">{feature.title}</div>
                          <div className="text-[8px] font-mono text-slate-500 uppercase">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="scanning-line opacity-20" />
              </div>

            </div>
          </div>

          {/* Bio Text Column */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/40" />
              <span className="text-xs font-mono font-bold tracking-[0.4em] text-primary uppercase">Identity Protocol</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Engineering the <span className="text-slate-500">Modern Web</span>
            </h2>

            <div className="space-y-8 text-base md:text-lg text-slate-400 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">Rohith YP</span>, an AIML Engineering student and professional web developer dedicated to building high-performance digital solutions.
              </p>
              
              <p>
                I specialize in creating <span className="text-white">responsive, interactive, and beautifully animated</span> websites. By combining traditional engineering logic with modern design patterns, I deliver results that are fast, clean, and reliable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Brain size={24} />, title: "AIML Engineering", desc: "Applying structural logic to complex interfaces" },
                  { icon: <Cpu size={24} />, title: "Hybrid Workflow", desc: "Manual precision meets AI efficiency" }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 border-l-2 border-primary/40 bg-slate-900/30 rounded-r-2xl">
                <p className="italic text-slate-300 text-lg">
                  "I focus on performance, professional design, and creating experiences that actually work for users."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}