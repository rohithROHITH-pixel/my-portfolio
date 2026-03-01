"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Terminal, ChevronRight, Layout, Box } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: "SAP NEURAL HUB",
    category: "LMS ECOSYSTEM",
    description: "Cloud-native training environment for high-latency SAP logistics simulation.",
    link: "https://sap-demou.vercel.app/",
    tags: ["Next.js", "Firebase", "Neural Logic"],
    image: "https://picsum.photos/seed/sap-v3/1080/720"
  },
  {
    id: '02',
    name: "ABHIRAM SPATIAL",
    category: "REAL ESTATE UI",
    description: "Ultra-high performance real estate portal with 3D coordinate mapping.",
    link: "https://abhirambuilders.com/",
    tags: ["React", "Motion", "ThreeJS"],
    image: "https://picsum.photos/seed/build-v3/1080/720"
  },
  {
    id: '03',
    name: "AI SOLUTIONS NODE",
    category: "GEN-AI INTERFACE",
    description: "Enterprise-grade landing portal for automated neural consultancy.",
    link: "https://aisolutionsprivatelimited.com/",
    tags: ["GenAI", "Node", "TypeScript"],
    image: "https://picsum.photos/seed/ai-v3/1080/720"
  },
  {
    id: '04',
    name: "INNOSPHERE HUB",
    category: "VENTURE TERMINAL",
    description: "High-conversion platform for emerging tech node synchronization.",
    link: "https://innosphere-eta.vercel.app/",
    tags: ["Strategy", "UX", "Vercel"],
    image: "https://picsum.photos/seed/inno-v3/1080/720"
  }
];

export function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-[#050508] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Project Navigator Side */}
          <div className="lg:w-1/3">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-8">
                <Terminal size={16} />
                Directory_Explorer_V3
              </div>
              <h2 className="text-6xl md:text-8xl font-headline font-bold text-white mb-16 tracking-tighter">
                ACTIVE<br /><span className="text-white/20">NODES</span>
              </h2>

              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <button
                    key={project.id}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`w-full group relative flex items-center justify-between p-8 border transition-all duration-500 text-left ${
                      activeIdx === idx 
                      ? 'bg-primary/10 border-primary shadow-[0_0_30px_rgba(130,26,252,0.15)]' 
                      : 'bg-transparent border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-8">
                      <span className={`font-mono text-xs transition-colors duration-500 ${activeIdx === idx ? 'text-primary' : 'text-white/20'}`}>{project.id}</span>
                      <span className={`text-lg font-headline font-bold tracking-tight transition-all duration-500 ${activeIdx === idx ? 'text-white translate-x-2' : 'text-white/40'}`}>{project.name}</span>
                    </div>
                    {activeIdx === idx && (
                      <div className="absolute right-0 top-0 h-full w-[2px] bg-primary animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Terminal Side */}
          <div className="lg:w-2/3">
            <div className={`relative aspect-[16/10] neural-panel border-white/10 group transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
              {/* Image with Glitch Overlay */}
              <img 
                src={projects[activeIdx].image} 
                alt={projects[activeIdx].name}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                data-ai-hint="futuristic interface mockup"
              />
              <div className="absolute inset-0 bg-[#050508]/60 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500" />

              {/* HUD Content Overlay */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-6">
                  {projects[activeIdx].tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-primary/20 border border-primary/30 text-[9px] font-bold text-primary uppercase tracking-[0.2em]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="max-w-xl">
                  <h3 className="text-5xl font-headline font-bold text-white mb-6 tracking-tight">{projects[activeIdx].category}</h3>
                  <p className="text-white/50 text-lg mb-12 font-light leading-relaxed">{projects[activeIdx].description}</p>
                  
                  <a 
                    href={projects[activeIdx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-white hover:text-primary transition-colors group/link"
                  >
                    ESTABLISH_LINK <ExternalLink size={14} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative HUD Elements */}
              <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <div className="absolute top-8 right-8 text-[10px] font-mono text-white/20 tracking-[0.5em]">
                LOC_DATA_404.2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}