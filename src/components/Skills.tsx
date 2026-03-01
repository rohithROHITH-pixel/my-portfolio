"use client";

import { Layout, Server, Cpu, Brain, Database, Globe, Layers, Zap } from 'lucide-react';

const skillNodes = [
  { name: 'NEURAL FRONTEND', icon: <Layout />, items: ['Next.js 15', 'TypeScript', 'Tailwind', 'Spatial UI'], id: 'NODE_01' },
  { name: 'LOGIC CLUSTER', icon: <Server />, items: ['Node.js', 'Firebase', 'PostgreSQL', 'Cloud Architecture'], id: 'NODE_02' },
  { name: 'INTELLIGENCE', icon: <Brain />, items: ['Gemini AI', 'Genkit', 'Prompt Engineering', 'RAG Flows'], id: 'NODE_03' },
  { name: 'CORE HARDWARE', icon: <Cpu />, items: ['Performance Opt', 'SEO Synthesis', 'Vercel Edge', 'Security Protocols'], id: 'NODE_04' },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#050508]">
      {/* HUD Accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <div className="inline-block px-6 py-1.5 border border-white/10 mb-8 bg-white/[0.02]">
            <span className="text-[10px] font-mono tracking-[0.8em] uppercase text-white/40">Efficiency_Metric: 99.4%</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-headline font-bold text-white tracking-tighter opacity-10 absolute left-1/2 -translate-x-1/2 top-0 select-none">ARCHITECTURE</h2>
          <h2 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter relative z-10">CAPABILITIES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillNodes.map((node, idx) => (
            <div 
              key={node.name}
              className="group relative p-12 neural-panel border-white/5 hover:border-primary/40 transition-all duration-700 hover:translate-y-[-8px]"
            >
              {/* Dynamic Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 opacity-0 group-hover:opacity-100 group-hover:animate-scan-h" />

              <div className="w-16 h-16 flex items-center justify-center mb-12 border border-white/10 group-hover:border-primary/40 group-hover:text-primary transition-all duration-500 rounded-sm bg-white/[0.02]">
                {node.icon}
              </div>

              <h3 className="text-xl font-headline font-bold text-white mb-8 tracking-wide group-hover:translate-x-2 transition-transform">{node.name}</h3>
              
              <ul className="space-y-5">
                {node.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm font-medium text-white/40 group-hover:text-white transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-6 right-6 text-[9px] font-mono text-white/10 uppercase font-bold tracking-[0.2em]">
                {node.id}
              </div>
            </div>
          ))}
        </div>

        {/* Global Network Stats */}
        <div className="mt-24 flex flex-wrap items-center justify-center gap-16 border-t border-white/5 pt-16">
          {[
            { label: 'Latency', value: '14.2ms', icon: <Zap size={14} /> },
            { label: 'Database', value: 'Distributed', icon: <Database size={14} /> },
            { label: 'Uptime', value: '365_Days', icon: <Layers size={14} /> },
            { label: 'Coverage', value: 'Global', icon: <Globe size={14} /> },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-5 group">
              <div className="text-primary group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 mb-1">{stat.label}</p>
                <p className="text-white font-mono text-lg tracking-tight">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}