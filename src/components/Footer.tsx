"use client";

import { Github, Linkedin, Instagram, ArrowUpRight, Terminal, Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialNodes = [
    { 
      name: "GITHUB", 
      icon: <Github size={18} />, 
      href: "https://github.com/rohithROHITH-pixel",
      id: "Node_01",
      color: "hover:text-primary hover:border-primary/40"
    },
    { 
      name: "LINKEDIN", 
      icon: <Linkedin size={18} />, 
      href: "https://www.linkedin.com/in/rohith-y-p-a4588132b",
      id: "Node_02",
      color: "hover:text-primary hover:border-primary/40"
    },
    { 
      name: "INSTAGRAM", 
      icon: <Instagram size={18} />, 
      href: "https://www.instagram.com/rohith__r11",
      id: "Node_03",
      color: "hover:text-primary hover:border-primary/40"
    },
  ];

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5 bg-slate-950 overflow-hidden">
      {/* Background HUD Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] data-grid" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start mb-24">
          
          {/* Brand/Identity Block */}
          <div className="md:col-span-6 space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary font-black text-2xl shadow-xl shadow-primary/5">
                R
              </div>
              <div>
                <h2 className="text-3xl font-headline font-black text-white tracking-tighter uppercase leading-none">
                  ROHITH <span className="text-primary">YP</span>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">System_Active_V1.0</span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm">
              Architecting high-performance digital solutions at the intersection of modern engineering and visual design.
            </p>
          </div>

          {/* Social Nodes Block */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end gap-10">
            <div className="w-full max-w-xs space-y-6">
              <div className="flex items-center md:justify-end gap-3">
                <Terminal size={16} className="text-primary" />
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Connect Nodes</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {socialNodes.map((node, idx) => (
                  <a 
                    key={idx}
                    href={node.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-4 bg-slate-900/50 border border-white/5 rounded-xl transition-all ${node.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 group-hover:text-primary transition-colors">{node.icon}</span>
                      <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-white transition-colors">{node.name}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-600 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Signature */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
              © {currentYear} Rohith YP. Built for performance.
            </p>
          </div>

          <div className="group flex flex-col items-center md:items-end">
            <p className="text-2xl font-headline font-black text-white tracking-tighter group-hover:text-primary transition-all duration-500">
              ROHITH <span className="text-primary/70 group-hover:text-primary transition-colors">YP</span>
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[8px] font-mono font-bold text-slate-700 uppercase tracking-widest">Designed by Human</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}