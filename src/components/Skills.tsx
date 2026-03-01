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
    <section id="skills" className="py-20 md:py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-3 text-primary mb-4 md:mb-6">
            <Activity size={16} />
            <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.4em] md:tracking-[0.8em] uppercase">Systems_Telemetry</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
            CORE<br /><span className="text-white/10">CAPABILITIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1">
          {skillNodes.map((node) => (
            <div 
              key={node.name}
              className="group relative p-6 md:p-10 tactical-panel border-white/5 hover:border-primary/40 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-10 md:mb-14">
                <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all text-white/40 group-hover:text-primary">
                  {node.icon}
                </div>
                <div className="text-right">
                  <div className="text-[7px] md:text-[9px] font-mono text-white/20 uppercase font-black">Efficiency</div>
                  <div className="text-base md:text-xl font-mono text-primary font-black">{node.efficiency}</div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-headline font-black text-white mb-4 md:mb-6 tracking-tighter uppercase">{node.name}</h3>
              
              <ul className="space-y-2 md:space-y-4">
                {node.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[10px] md:text-[12px] font-bold text-white/30 group-hover:text-white/80 transition-all uppercase tracking-widest">
                    <div className="w-1 h-1 bg-primary/40 group-hover:bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 md:mt-14 pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between text-[7px] md:text-[9px] font-mono text-white/10">
                <span>{node.id}</span>
                <span className="animate-pulse">ONLINE</span>
              </div>

              <div className="scanning-line opacity-0 group-hover:opacity-10" />
            </div>
          ))}
        </div>

        {/* Data Stream Metrics */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-y border-white/5 py-10 md:py-14">
          {[
            { label: 'Latency', value: '0.04ms', icon: <Zap size={14} /> },
            { label: 'Cluster', value: 'Distributed', icon: <Database size={14} /> },
            { label: 'Uptime', value: '99.99%', icon: <Layers size={14} /> },
            { label: 'Protocols', value: 'v4.0_Stable', icon: <Globe size={14} /> },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left space-y-2 md:space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                {stat.icon}
                <span className="text-[7px] md:text-[9px] font-mono font-black tracking-widest text-white/20 uppercase">{stat.label}</span>
              </div>
              <p className="text-lg md:text-2xl font-mono text-white font-black tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
