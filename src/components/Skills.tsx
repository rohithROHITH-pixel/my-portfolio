"use client";

import { Layout, Server, Brain, Cpu, Database, Globe, Layers, Zap, Activity } from 'lucide-react';

const skillNodes = [
  { 
    name: 'NEURAL_FRONTEND', 
    icon: <Layout />, 
    items: ['Next.js 15', 'TypeScript', 'Tailwind', 'Motion UI'], 
    id: 'NODE_01',
    efficiency: '98%'
  },
  { 
    name: 'LOGIC_CLUSTER', 
    icon: <Server />, 
    items: ['Node.js', 'Firebase', 'PostgreSQL', 'Cloud Architecture'], 
    id: 'NODE_02',
    efficiency: '94%'
  },
  { 
    name: 'INTELLIGENCE', 
    icon: <Brain />, 
    items: ['Gemini AI', 'Genkit', 'Prompt Engineering', 'RAG Flows'], 
    id: 'NODE_03',
    efficiency: '96%'
  },
  { 
    name: 'CORE_INFRA', 
    icon: <Cpu />, 
    items: ['Performance Opt', 'SEO Synthesis', 'Edge Nodes', 'Security'], 
    id: 'NODE_04',
    efficiency: '99%'
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-40 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 text-primary mb-8">
            <Activity size={18} />
            <span className="text-[11px] font-mono font-black tracking-[0.8em] uppercase">Systems_Telemetry</span>
          </div>
          <h2 className="text-7xl md:text-[10rem] font-headline font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">
            CORE<br /><span className="text-white/10">CAPABILITIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {skillNodes.map((node) => (
            <div 
              key={node.name}
              className="group relative p-12 tactical-panel border-white/5 hover:border-primary/40 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all text-white/40 group-hover:text-primary">
                  {node.icon}
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-white/20 uppercase font-black">Efficiency</div>
                  <div className="text-xl font-mono text-primary font-black">{node.efficiency}</div>
                </div>
              </div>

              <h3 className="text-2xl font-headline font-black text-white mb-8 tracking-tighter uppercase">{node.name}</h3>
              
              <ul className="space-y-4">
                {node.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[13px] font-bold text-white/30 group-hover:text-white/80 transition-all uppercase tracking-widest">
                    <div className="w-1 h-1 bg-primary/40 group-hover:bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/10">
                <span>{node.id}</span>
                <span className="animate-pulse">ONLINE</span>
              </div>

              <div className="scanning-line opacity-0 group-hover:opacity-10" />
            </div>
          ))}
        </div>

        {/* Data Stream Metrics */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-16">
          {[
            { label: 'Latency', value: '0.04ms', icon: <Zap size={14} /> },
            { label: 'Cluster', value: 'Distributed', icon: <Database size={14} /> },
            { label: 'Uptime', value: '99.99%', icon: <Layers size={14} /> },
            { label: 'Protocols', value: 'v4.0_Stable', icon: <Globe size={14} /> },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-primary">
                {stat.icon}
                <span className="text-[10px] font-mono font-black tracking-widest text-white/20 uppercase">{stat.label}</span>
              </div>
              <p className="text-3xl font-mono text-white font-black tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
