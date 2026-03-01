"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Terminal, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: "SAP Demo Ecosystem",
    category: "LMS Interface",
    description: "Cloud-native training environment for SAP logistics simulation.",
    link: "https://sap-demou.vercel.app/",
    tags: ["Next.js", "Firebase", "Realtime"],
    image: "https://picsum.photos/seed/sap-v2/800/500"
  },
  {
    id: '02',
    name: "Abhiram Architecture",
    category: "3D Visualization",
    description: "Ultra-high performance real estate portal with spatial navigation.",
    link: "https://abhirambuilders.com/",
    tags: ["React", "Motion", "Tailwind"],
    image: "https://picsum.photos/seed/build-v2/800/500"
  },
  {
    id: '03',
    name: "AI Solutions Node",
    category: "Neural Core",
    description: "Enterprise-grade landing portal for automated AI consultancy.",
    link: "https://aisolutionsprivatelimited.com/",
    tags: ["GenAI", "Node", "TypeScript"],
    image: "https://picsum.photos/seed/ai-v2/800/500"
  },
  {
    id: '04',
    name: "Innosphere Hub",
    category: "Incubation Web",
    description: "High-conversion platform for emerging tech startups and investors.",
    link: "https://innosphere-eta.vercel.app/",
    tags: ["Strategy", "UX", "Vercel"],
    image: "https://picsum.photos/seed/inno-v2/800/500"
  }
];

export function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Project Navigator */}
          <div className="lg:w-1/3">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6">
                <Terminal size={14} />
                Directory // {projects.length} Nodes
              </div>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-12 tracking-tighter">
                ACTIVE<br />DEPLOYMENTS
              </h2>

              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <button
                    key={project.id}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`w-full flex items-center justify-between p-6 border transition-all duration-500 text-left group ${
                      activeIdx === idx 
                      ? 'bg-primary/10 border-primary text-white' 
                      : 'bg-transparent border-white/5 text-muted-foreground hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono opacity-40">{project.id}</span>
                      <span className="font-headline font-bold tracking-tight">{project.name}</span>
                    </div>
                    <ChevronRight size={16} className={`transition-transform duration-500 ${activeIdx === idx ? 'translate-x-2' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Visual Display */}
          <div className="lg:w-2/3">
            <div className={`relative aspect-video cyber-panel border-white/10 group transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {/* Dynamic Image Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Actual Image */}
              <img 
                src={projects[activeIdx].image} 
                alt={projects[activeIdx].name}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                data-ai-hint="futuristic website mockup"
              />

              {/* HUD Content Overlay */}
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <div className="flex items-center gap-2 mb-4">
                  {projects[activeIdx].tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl font-headline font-bold text-white mb-4">{projects[activeIdx].category}</h3>
                <p className="text-muted-foreground mb-8 max-w-lg font-light">{projects[activeIdx].description}</p>
                
                <a 
                  href={projects[activeIdx].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-primary hover:text-white transition-colors"
                >
                  ACCESS_NODE <ExternalLink size={14} />
                </a>
              </div>

              {/* HUD Accents */}
              <div className="absolute top-6 right-6 w-32 h-32 border border-white/5 flex items-center justify-center">
                <div className="w-12 h-12 border border-primary/40 rounded-full animate-spin [animation-duration:10s]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}