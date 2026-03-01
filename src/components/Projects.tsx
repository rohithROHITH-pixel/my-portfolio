"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Database, Shield } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: "SAP_NEURAL_HUB",
    status: "DEPLOYED",
    category: "LMS_INFRASTRUCTURE",
    description: "Enterprise-grade logistics training simulation with real-time neural feedback loops.",
    link: "https://sap-demou.vercel.app/",
    metrics: { latency: "12ms", uptime: "99.9%" },
    image: "https://picsum.photos/seed/sap-final/1200/800"
  },
  {
    id: '02',
    name: "SPATIAL_ABHIRAM",
    status: "ACTIVE",
    category: "GEOSPATIAL_REAL_ESTATE",
    description: "High-precision mapping interface for architectural visualization and asset management.",
    link: "https://home.abhirambuilders.com/",
    metrics: { latency: "45ms", uptime: "100%" },
    image: "https://picsum.photos/seed/build-final/1200/800"
  },
  {
    id: '03',
    name: "AI_CORE_SYSTEMS",
    status: "STABLE",
    category: "CONSULTANCY_NODE",
    description: "Centralized hub for enterprise AI integration and automated workflow scaling.",
    link: "https://aisolutionsprivatelimited.com/",
    metrics: { latency: "8ms", uptime: "99.99%" },
    image: "https://picsum.photos/seed/ai-final/1200/800"
  },
  {
    id: '04',
    name: "INNOSPHERE_OS",
    status: "OPTIMIZED",
    category: "VENTURE_TERMINAL",
    description: "Modular platform for emerging tech nodes and startup lifecycle management.",
    link: "https://innosphere-azure.vercel.app/",
    metrics: { latency: "22ms", uptime: "99.8%" },
    image: "https://picsum.photos/seed/inno-final/1200/800"
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
            <div className="flex items-center gap-3 text-secondary mb-3 md:mb-5">
              <Database size={16} />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] md:tracking-[0.6em] uppercase">Directory_Registry</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black text-white tracking-tighter uppercase leading-none">
              ACTIVE<br /><span className="text-primary">NODES</span>
            </h2>
          </div>
          <div className="font-mono text-[8px] md:text-[10px] text-white/20 uppercase tracking-[0.3em] mb-2">
            Total_Deployed: 04 // Filtered: All
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8">
          {/* Navigation Terminal */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-3 lg:pb-0 scrollbar-hide">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 w-[200px] lg:w-full text-left p-5 md:p-8 tactical-panel transition-all duration-500 group relative ${
                  activeIdx === idx 
                  ? 'bg-primary/10 border-primary border-l-4' 
                  : 'bg-transparent border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[9px] font-mono font-bold transition-colors ${activeIdx === idx ? 'text-primary' : 'text-white/20'}`}>
                    0{idx + 1}_NODE
                  </span>
                  <div className={`px-2 py-0.5 text-[7px] md:text-[8px] font-black tracking-widest rounded-none border ${
                    activeIdx === idx ? 'border-primary text-primary' : 'border-white/10 text-white/20'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <h3 className={`text-lg md:text-xl lg:text-2xl font-headline font-black tracking-tight transition-all ${
                  activeIdx === idx ? 'text-white translate-x-1 md:translate-x-2' : 'text-white/40'
                }`}>
                  {project.name}
                </h3>
              </button>
            ))}
          </div>

          {/* Main Visual Terminal */}
          <div className="lg:col-span-8">
            <div className="tactical-panel aspect-square md:aspect-[16/9] relative group overflow-hidden border-white/10">
              <img 
                src={projects[activeIdx].image} 
                alt={projects[activeIdx].name}
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-all duration-[2000ms]"
                data-ai-hint="futuristic tech interface"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
              
              {/* HUD Content */}
              <div className="absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-3 md:space-y-5">
                    <div className="px-2 py-0.5 md:px-4 md:py-1.5 bg-primary/20 border border-primary/30 text-[7px] md:text-[9px] font-black text-primary tracking-[0.2em] md:tracking-[0.3em] uppercase inline-block">
                      {projects[activeIdx].category}
                    </div>
                    <div className="flex gap-4 md:gap-10 font-mono text-[7px] md:text-[9px] text-white/40 uppercase">
                      <div>Lat: <span className="text-white">{projects[activeIdx].metrics.latency}</span></div>
                      <div>Up: <span className="text-white">{projects[activeIdx].metrics.uptime}</span></div>
                    </div>
                  </div>
                  <Shield size={18} className="text-primary/40 animate-pulse hidden sm:block" />
                </div>

                <div className="max-w-xl">
                  <p className="text-sm md:text-lg lg:text-xl text-white/80 font-light leading-relaxed mb-6 md:mb-10 line-clamp-3 md:line-clamp-none">
                    {projects[activeIdx].description}
                  </p>
                  
                  <a 
                    href={projects[activeIdx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 md:gap-5 text-[9px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-white hover:text-primary transition-colors group/link"
                  >
                    ESTABLISH_CONNECTION <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative HUD */}
              <div className="absolute top-0 right-0 w-12 h-12 md:w-24 border-t-2 border-r-2 border-primary/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-24 border-b-2 border-l-2 border-secondary/20 pointer-events-none" />
              <div className="scanning-line opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
