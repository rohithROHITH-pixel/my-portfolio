"use client";

import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "SAP Demo Website",
    category: "Training Institute Website",
    plan: "Animated Modern Website",
    price: "₹6,000",
    link: "https://sap-demou.vercel.app/",
    color: "blue",
    image: "https://picsum.photos/seed/sap/600/400"
  },
  {
    name: "Abhiram Builders",
    category: "Real Estate Business Website",
    plan: "Premium 3D-Style Website",
    price: "₹9,000",
    link: "https://abhirambuilders.com/",
    color: "purple",
    image: "https://picsum.photos/seed/builders/600/400"
  },
  {
    name: "Abhiram Builders Home",
    category: "Real Estate Landing Page",
    plan: "Animated Modern Website",
    price: "₹6,000",
    link: "https://home.abhirambuilders.com/",
    color: "blue",
    image: "https://picsum.photos/seed/abhiram-home/600/400"
  },
  {
    name: "AI Solutions Private Limited",
    category: "Corporate Business Website",
    plan: "Premium 3D-Style Website",
    price: "₹9,000",
    link: "https://aisolutionsprivatelimited.com/",
    color: "purple",
    image: "https://picsum.photos/seed/ai-solutions/600/400"
  },
  {
    name: "Innosphere",
    category: "Startup Website",
    plan: "Animated Modern Website",
    price: "₹6,000",
    link: "https://innosphere-eta.vercel.app/",
    color: "blue",
    image: "https://picsum.photos/seed/innosphere/600/400"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-xl">
              Live websites built with attention to detail, performance, and modern aesthetics.
            </p>
          </div>
          <div className="glass px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-accent">
            {projects.length} Total Projects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full perspective-1000 transition-all duration-500 hover:translate-y-[-12px] hover:shadow-[0_20px_50px_rgba(130,26,252,0.2)]"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  data-ai-hint={project.category}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Pricing Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white border ${project.color === 'purple' ? 'bg-primary/80 border-primary shadow-[0_0_15px_rgba(130,26,252,0.5)]' : 'bg-accent/80 border-accent text-background shadow-[0_0_15px_rgba(158,207,252,0.5)]'}`}>
                    {project.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  Suitable for the <span className="text-white">{project.plan}</span> plan. High performance, SEO optimized, and fully responsive.
                </p>
                
                <div className="mt-auto flex items-center justify-between gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-sm font-semibold text-white transition-all duration-300 sweep-effect overflow-hidden relative"
                  >
                    <span>Live Preview</span>
                    <ExternalLink size={16} />
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