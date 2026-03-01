"use client";

import { Check, Zap, Star, ShieldCheck } from 'lucide-react';

const servicePlans = [
  {
    title: "Basic Static Website",
    price: "₹3,500",
    color: "green",
    icon: <ShieldCheck className="text-emerald-400" size={32} />,
    features: [
      "Clean & professional design",
      "5–7 sections/pages",
      "Mobile & desktop responsive",
      "Basic hover effects",
      "Free hosting on Vercel"
    ],
    accent: "emerald"
  },
  {
    title: "Animated Modern Website",
    price: "₹6,000",
    color: "blue",
    popular: true,
    icon: <Zap className="text-accent" size={32} />,
    features: [
      "Everything in Basic",
      "Smooth scroll & reveal animations",
      "Section transitions",
      "Modern UI look",
      "Better engagement"
    ],
    accent: "accent"
  },
  {
    title: "Premium 3D-Style Website",
    price: "₹9,000",
    color: "purple",
    icon: <Star className="text-primary" size={32} />,
    features: [
      "Everything in Animated",
      "3D-style UI elements",
      "Parallax & micro-interactions",
      "High-end premium look",
      "Ideal for branding websites"
    ],
    accent: "primary"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black/40 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">Services & Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business needs. Every project is crafted with passion and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative group glass-card p-10 flex flex-col transition-all duration-500 hover:scale-105 hover:translate-y-[-10px] ${plan.popular ? 'border-primary/40 bg-white/10 ring-1 ring-primary/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(130,26,252,0.6)]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="mb-4 inline-block">{plan.icon}</div>
                <h3 className="text-2xl font-headline font-bold text-white mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-muted-foreground">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-white/90 transition-colors">
                    <Check className={`shrink-0 mt-0.5 ${plan.accent === 'primary' ? 'text-primary' : plan.accent === 'accent' ? 'text-accent' : 'text-emerald-400'}`} size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl text-center font-bold tracking-wide transition-all duration-300 relative overflow-hidden ${
                  plan.popular 
                    ? 'bg-primary text-white hover:neon-border-purple shadow-lg' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                Get Started
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[sweep_0.6s_ease-in-out_forwards]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}