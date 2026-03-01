"use client";

import { Layout, Server, Wrench, Sparkles, Brain, Code, Globe, Shield } from 'lucide-react';

const skillsData = [
  {
    category: 'Neural Frontend',
    icon: <Layout className="text-primary" />,
    skills: ['React / Next.js', 'Tailwind CSS', 'Framer Motion', '3D Visuals', 'Responsive UI'],
  },
  {
    category: 'Cognitive Backend',
    icon: <Server className="text-accent" />,
    skills: ['Node.js Architecture', 'Firebase Engine', 'RESTful Clusters', 'Database Logic'],
  },
  {
    category: 'Bio-Tools',
    icon: <Wrench className="text-primary" />,
    skills: ['Git Core', 'Vercel Deployment', 'Figma Modules', 'Prompt Engineering'],
  },
  {
    category: 'Core Logic',
    icon: <Sparkles className="text-accent" />,
    skills: ['Data Structures', 'Algorithm Synthesis', 'Neural Networks', 'ML Pipelines'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-black">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
            Technical Arsenal // Verified
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">Core Systems</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((item, idx) => (
            <div
              key={item.category}
              className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all duration-500 hover:bg-white/[0.05]"
            >
              {/* HUD Corner Accents */}
              <div className="hud-corner-tl group-hover:scale-125 transition-transform" />
              <div className="hud-corner-tr group-hover:scale-125 transition-transform" />
              <div className="hud-corner-bl group-hover:scale-125 transition-transform" />
              <div className="hud-corner-br group-hover:scale-125 transition-transform" />

              <div className="mb-8 flex items-center justify-between">
                <div className="p-3 bg-white/5 rounded-sm text-primary group-hover:neon-glow-purple transition-all">
                  {item.icon}
                </div>
                <div className="text-[10px] font-mono text-muted-foreground opacity-50">
                  REF_ID: 0x{idx}F
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-6 tracking-[0.2em] uppercase">
                {item.category}
              </h3>

              <ul className="space-y-4">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-xs font-medium text-muted-foreground group-hover:text-white/90 transition-colors">
                    <div className="w-1 h-1 bg-accent group-hover:shadow-[0_0_8px_#06B6D4]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
