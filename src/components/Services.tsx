"use client";

import { Activity, ShieldCheck, Zap, Star } from 'lucide-react';

const serviceNodes = [
  {
    title: "BASIC STATIC NODE",
    price: "₹3,500",
    id: "SRV_01",
    icon: <ShieldCheck className="text-emerald-400" size={28} />,
    features: [
      "Modular Architecture",
      "Adaptive Response",
      "Vercel Deployment",
      "Basic Interactivity",
      "5-7 Static Sectors"
    ],
    accentColor: "emerald-400",
    hoverBg: "hover:bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    glowColor: "shadow-emerald-500/20"
  },
  {
    title: "MODERN NEURAL NODE",
    price: "₹6,000",
    id: "SRV_02",
    popular: true,
    icon: <Zap className="text-secondary" size={28} />,
    features: [
      "Everything in Basic",
      "Neural Transitions",
      "High-Engage UI",
      "Fluid Spatial Motion",
      "Vercel Optimized"
    ],
    accentColor: "secondary",
    hoverBg: "hover:bg-secondary/10",
    hoverBorder: "hover:border-secondary/50",
    glowColor: "shadow-secondary/20"
  },
  {
    title: "PREMIUM 3D NODE",
    price: "₹9,000",
    id: "SRV_03",
    icon: <Star className="text-primary" size={28} />,
    features: [
      "Everything in Modern",
      "3D Spatial Elements",
      "Advanced Micro-Logic",
      "Full Brand Immersion",
      "Priority Protocol"
    ],
    accentColor: "primary",
    hoverBg: "hover:bg-primary/10",
    hoverBorder: "hover:border-primary/50",
    glowColor: "shadow-primary/20"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#050508] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4 text-primary">
            <Activity size={14} />
            <span className="text-[8px] md:text-[10px] font-mono font-bold tracking-[0.6em] md:tracking-[0.8em] uppercase">Service_Tier_Allocation</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-bold text-white mb-6 tracking-tighter">TIERED SOLUTIONS</h2>
          <p className="text-white/40 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed px-4">
            Select the processing power required for your digital ecosystem. Each tier is engineered for maximum conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {serviceNodes.map((node, idx) => (
            <div 
              key={idx}
              className={`relative group tactical-panel p-8 md:p-12 flex flex-col transition-all duration-700 hover:scale-[1.02] ${
                node.popular ? 'border-primary/40 bg-white/[0.03] ring-1 ring-primary/20' : 'border-white/5 bg-black/40'
              }`}
            >
              {node.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] font-bold px-5 py-1.5 rounded-full uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(130,26,252,0.4)]">
                  OPTIMAL PROTOCOL
                </div>
              )}

              <div className="mb-10">
                <div className="mb-5 transition-transform duration-500 group-hover:scale-110">{node.icon}</div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-white mb-3 tracking-tight">{node.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{node.price}</span>
                  <span className="text-white/30 font-mono text-[9px] uppercase tracking-widest">/ Project</span>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 mb-12 flex-grow">
                {node.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 group/item">
                    <div className={`w-1 h-1 rounded-full ${
                      node.accentColor === 'primary' ? 'bg-primary' : 
                      node.accentColor === 'secondary' ? 'bg-secondary' : 
                      'bg-emerald-400'
                    } transition-all group-hover:scale-150`} />
                    <span className="text-[11px] md:text-sm text-white/40 group-hover/item:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-4 md:py-5 rounded-none text-center font-bold tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] uppercase transition-all duration-500 relative overflow-hidden shadow-lg ${
                  node.popular 
                    ? 'bg-primary text-white hover:bg-primary/80 shadow-primary/20' 
                    : `bg-white/5 border border-white/10 text-white/60 hover:text-white ${node.hoverBg} ${node.hoverBorder} ${node.glowColor}`
                }`}
              >
                <span className="relative z-10">INITIALIZE_SYNC</span>
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </a>

              <div className="absolute top-5 right-5 text-[7px] font-mono text-white/5 font-bold tracking-widest uppercase">
                {node.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
