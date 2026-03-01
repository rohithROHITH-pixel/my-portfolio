"use client";

import { Check, Zap, Star, ShieldCheck, Globe, Activity } from 'lucide-react';

const serviceNodes = [
  {
    title: "BASIC STATIC NODE",
    price: "₹3,500",
    id: "SRV_01",
    icon: <ShieldCheck className="text-emerald-400" size={32} />,
    features: [
      "Modular Architecture",
      "Adaptive Response",
      "Vercel Deployment",
      "Basic Interactivity",
      "5-7 Static Sectors"
    ],
    accent: "emerald"
  },
  {
    title: "MODERN NEURAL NODE",
    price: "₹6,000",
    id: "SRV_02",
    popular: true,
    icon: <Zap className="text-accent" size={32} />,
    features: [
      "Everything in Basic",
      "Neural Transitions",
      "High-Engage UI",
      "Fluid Spatial Motion",
      "Performance Optimized"
    ],
    accent: "accent"
  },
  {
    title: "PREMIUM 3D NODE",
    price: "₹9,000",
    id: "SRV_03",
    icon: <Star className="text-primary" size={32} />,
    features: [
      "Everything in Modern",
      "3D Spatial Elements",
      "Advanced Micro-Logic",
      "Full Brand Immersion",
      "Priority Protocol"
    ],
    accent: "primary"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#050508] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-6 text-primary">
            <Activity size={16} />
            <span className="text-[10px] font-mono font-bold tracking-[0.8em] uppercase">Service_Tier_Allocation</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-headline font-bold text-white mb-6 tracking-tighter">TIERED SOLUTIONS</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Select the processing power required for your digital ecosystem. Each tier is engineered for maximum conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceNodes.map((node, idx) => (
            <div 
              key={idx}
              className={`relative group neural-panel p-12 flex flex-col transition-all duration-700 hover:scale-[1.02] ${node.popular ? 'border-primary/40 bg-white/[0.03] ring-1 ring-primary/20' : ''}`}
            >
              {node.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(130,26,252,0.4)]">
                  OPTIMAL PROTOCOL
                </div>
              )}

              <div className="mb-12">
                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{node.icon}</div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4 tracking-tight">{node.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{node.price}</span>
                  <span className="text-white/30 font-mono text-xs uppercase tracking-widest">/ Project</span>
                </div>
              </div>

              <div className="space-y-6 mb-16 flex-grow">
                {node.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4 group/item">
                    <div className={`w-1 h-1 rounded-full ${node.accent === 'primary' ? 'bg-primary' : node.accent === 'accent' ? 'bg-accent' : 'bg-emerald-400'}`} />
                    <span className="text-sm text-white/40 group-hover/item:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-5 rounded-none text-center font-bold tracking-[0.3em] text-[10px] uppercase transition-all duration-500 relative overflow-hidden ${
                  node.popular 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                INITIALIZE_SYNC
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </a>

              <div className="absolute top-6 right-6 text-[8px] font-mono text-white/5 font-bold tracking-widest uppercase">
                {node.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}