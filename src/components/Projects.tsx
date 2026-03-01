"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Terminal, Shield, Database, Layout } from 'lucide-react';

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
    link: "https://abhirambuilders.com/",
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
    link: "https://innosphere-eta.vercel.app/",
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
    <section id="projects" ref={sectionRef} className="py-40 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4 text-secondary mb-6">
              <Database size={18} />
              <span className="text-[10px] font-mono font-black tracking-[0.6em] uppercase">Directory_Registry</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-headline font-black text-white tracking-tighter uppercase leading-none">
              ACTIVE<br /><span className="text-primary">NODES</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] mb-4">
            Total_Deployed: 04 // Filtered: All
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Terminal */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-8 tactical-panel transition-all duration-500 group relative ${
                  activeIdx === idx 
                  ? 'bg-primary/10 border-primary border-l-4' 
                  : 'bg-transparent border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold transition-colors ${activeIdx === idx ? 'text-primary' : 'text-white/20'}`}>
                    0{idx + 1}_NODE
                  </span>
                  <div className={`px-3 py-1 text-[8px] font-black tracking-widest rounded-none border ${
                    activeIdx === idx ? 'border-primary text-primary' : 'border-white/10 text-white/20'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <h3 className={`text-2xl font-headline font-black tracking-tight transition-all ${
                  activeIdx === idx ? 'text-white translate-x-2' : 'text-white/40'
                }`}>
                  {project.name}
                </h3>
                {activeIdx === idx && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="w-1 h-8 bg-primary animate-pulse" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Main Visual Terminal */}
          <div className="lg:col-span-8">
            <div className="tactical-panel aspect-[16/9] relative group overflow-hidden border-white/10">
              <img 
                src={projects[activeIdx].image} 
                alt={projects[activeIdx].name}
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-all duration-[2000ms]"
                data-ai-hint="futuristic tech interface"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
              
              {/* HUD Content */}
              <div className="absolute inset-0 p-16 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="px-4 py-1.5 bg-primary/20 border border-primary/30 text-[10px] font-black text-primary tracking-[0.3em] uppercase inline-block">
                      {projects[activeIdx].category}
                    </div>
                    <div className="flex gap-12 font-mono text-[9px] text-white/40 uppercase">
                      <div>Latency: <span className="text-white">{projects[activeIdx].metrics.latency}</span></div>
                      <div>Uptime: <span className="text-white">{projects[activeIdx].metrics.uptime}</span></div>
                    </div>
                  </div>
                  <Shield size={24} className="text-primary/40 animate-pulse" />
                </div>

                <div className="max-w-2xl">
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12">
                    {projects[activeIdx].description}
                  </p>
                  
                  <a 
                    href={projects[activeIdx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-6 text-[12px] font-black tracking-[0.5em] uppercase text-white hover:text-primary transition-colors group/link"
                  >
                    ESTABLISH_CONNECTION <ExternalLink size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative HUD */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-secondary/20 pointer-events-none" />
              <div className="scanning-line opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
