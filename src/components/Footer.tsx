"use client";

import { Github, Linkedin, Instagram, ArrowUpRight, Terminal, Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialNodes = [
    { 
      name: "GITHUB", 
      icon: <Github size={16} />, 
      href: "https://github.com/rohithROHITH-pixel",
      id: "NODE_01",
      color: "hover:text-primary hover:border-primary/50"
    },
    { 
      name: "LINKEDIN", 
      icon: <Linkedin size={16} />, 
      href: "https://www.linkedin.com/in/rohith-y-p-a4588132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      id: "NODE_02",
      color: "hover:text-secondary hover:border-secondary/50"
    },
    { 
      name: "INSTAGRAM", 
      icon: <Instagram size={16} />, 
      href: "https://www.instagram.com/rohith__r11?igsh=MXJydzVzNnNraGdyZw==",
      id: "NODE_03",
      color: "hover:text-primary hover:border-primary/50"
    },
  ];

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 bg-[#030305] overflow-hidden">
      {/* Background HUD Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] data-grid" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-20">
          
          {/* Brand/Identity Block */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-2xl shadow-[0_0_20px_rgba(130,26,252,0.2)]">
                R
              </div>
              <div>
                <h2 className="text-3xl font-headline font-black text-white tracking-tighter uppercase leading-none">
                  ROHITH <span className="text-primary">YP</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] font-mono font-bold text-white/30 uppercase tracking-[0.3em]">SYSTEM_STABLE_V4.0</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/30 font-light leading-relaxed max-w-sm">
              Architecting modular web ecosystems at the intersection of high-performance logic and neural computing.
            </p>
          </div>

          {/* Social Nodes Block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={14} className="text-primary" />
              <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.4em]">External_Links</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {socialNodes.map((node, idx) => (
                <a 
                  key={idx}
                  href={node.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 transition-all ${node.color}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[8px] font-mono text-white/10 group-hover:text-inherit transition-colors">{node.id}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-inherit opacity-60 group-hover:opacity-100 transition-opacity">{node.icon}</span>
                      <span className="text-[10px] font-mono font-black tracking-widest text-white/60 group-hover:text-white transition-colors">{node.name}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={12} className="text-white/20 group-hover:text-inherit transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Status/Metadata Block */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-6">
            <div className="text-left md:text-right">
              <div className="flex items-center md:justify-end gap-2 mb-2">
                <Cpu size={14} className="text-secondary" />
                <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.4em]">Node_Status</span>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Lat: 0.02ms</p>
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Loc: Bangalore_IN</p>
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Node: AIML_ARCH_01</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Signature */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              © {currentYear} ALL_RIGHTS_RESERVED
            </p>
            <div className="w-[1px] h-3 bg-white/10 hidden sm:block" />
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:block">
              V4.0_STABLE
            </p>
          </div>

          <div className="group flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
              <span className="text-[8px] font-mono font-black text-white/30 uppercase tracking-[0.5em]">Auth_Design</span>
            </div>
            <p className="text-xl font-headline font-black text-white tracking-tighter glow-text group-hover:text-primary transition-colors duration-500">
              ROHITH <span className="text-primary/60 group-hover:text-primary transition-colors">YP</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative HUD scanning lines */}
      <div className="scanning-line opacity-[0.03]" />
    </footer>
  );
}
