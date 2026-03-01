"use client";

import { Layout, Server, Cpu, Brain, Database, Globe, Layers, Zap } from 'lucide-react';

const skills = [
  { name: 'Neural Frontend', icon: <Layout />, items: ['Next.js 15', 'TypeScript', 'Tailwind', 'Motion UI'], color: 'primary' },
  { name: 'Logic Cluster', icon: <Server />, items: ['Node.js', 'Firebase', 'PostgreSQL', 'Cloud Ops'], color: 'accent' },
  { name: 'Intelligence', icon: <Brain />, items: ['Gemini AI', 'Genkit', 'Neural Nets', 'Prompt Eng'], color: 'primary' },
  { name: 'System Hardware', icon: <Cpu />, items: ['Performance', 'SEO Arch', 'Vercel Node', 'Security'], color: 'accent' },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-black/40">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1 border border-white/10 mb-6 bg-white/5">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">Tech Stack Efficiency: 98.4%</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tighter">CAPABILITIES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div 
              key={skill.name}
              className="group relative p-10 cyber-panel border-white/5 hover:border-primary/40 transition-all duration-500"
            >
              {/* Animation Scanning Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 opacity-0 group-hover:opacity-100 group-hover:animate-scan-h" />

              <div className={`w-14 h-14 rounded-sm flex items-center justify-center mb-8 border transition-all duration-500 ${skill.color === 'primary' ? 'border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:neon-glow-purple' : 'border-accent/20 text-accent group-hover:bg-accent group-hover:text-black group-hover:neon-glow-cyan'}`}>
                {skill.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-6 tracking-wide group-hover:translate-x-1 transition-transform">{skill.name}</h3>
              
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-medium text-muted-foreground group-hover:text-white/80 transition-all">
                    <div className={`w-1 h-1 rounded-full ${skill.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Technical ID Label */}
              <div className="absolute top-4 right-4 text-[8px] font-mono text-white/10 uppercase">
                NODE_SKL_0{idx}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hardware Info */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12 border-t border-white/5 pt-12">
          {[
            { label: 'Latency', value: '14ms', icon: <Zap size={14} /> },
            { label: 'Availability', value: '99.9%', icon: <Database size={14} /> },
            { label: 'Uptime', value: '365d', icon: <Layers size={14} /> },
            { label: 'Global Reach', value: '128 Nodes', icon: <Globe size={14} /> },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 text-muted-foreground">
              <div className="text-primary">{stat.icon}</div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
                <p className="text-white font-mono">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}