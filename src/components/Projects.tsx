"use client";

import { ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    name: "SAP Demo Website",
    category: "EdTech Interface",
    description: "High-performance training portal for corporate logistics.",
    price: "₹6,000",
    link: "https://sap-demou.vercel.app/",
    color: "cyan",
    image: "https://picsum.photos/seed/sap/600/400"
  },
  {
    name: "Abhiram Builders",
    category: "Real Estate Node",
    description: "Premium property management platform with 3D architectural elements.",
    price: "₹9,000",
    link: "https://abhirambuilders.com/",
    color: "purple",
    image: "https://picsum.photos/seed/builders/600/400"
  },
  {
    name: "AI Solutions Pvt",
    category: "Corporate Core",
    description: "The digital heartbeat of a leading artificial intelligence firm.",
    price: "₹9,000",
    link: "https://aisolutionsprivatelimited.com/",
    color: "purple",
    image: "https://picsum.photos/seed/ai-solutions/600/400"
  },
  {
    name: "Innosphere",
    category: "Startup Hub",
    description: "Modern landing experience for disruptive technology ventures.",
    price: "₹6,000",
    link: "https://innosphere-eta.vercel.app/",
    color: "cyan",
    image: "https://picsum.photos/seed/innosphere/600/400"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#020205]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <div className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center gap-2">
              <Terminal size={14} />
              Directory // Projects
            </div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-4">Operations</h2>
            <p className="text-muted-foreground max-w-xl font-light">
              Active deployments. Each project represents a unique problem-solution synthesis in the digital landscape.
            </p>
          </div>
          <div className="text-[10px] font-mono border border-white/10 px-6 py-2 rounded-sm text-muted-foreground bg-white/5">
            STATUS: [LOADED] TOTAL_NODES: {projects.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col md:flex-row bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/40"
            >
              {/* HUD Accents */}
              <div className="hud-corner-tl opacity-0 group-hover:opacity-100" />
              <div className="hud-corner-br opacity-0 group-hover:opacity-100" />

              {/* Project Image */}
              <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  data-ai-hint={project.category}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[9px] font-bold tracking-[0.3em] uppercase ${project.color === 'purple' ? 'text-primary' : 'text-accent'}`}>
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">[{project.price}]</span>
                </div>
                
                <h3 className="text-2xl font-headline font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:text-primary transition-colors"
                  >
                    <span>Execute Preview</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
