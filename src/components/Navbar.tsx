"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Activity, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: '01' },
    { name: 'About', href: '#about', id: '02' },
    { name: 'Skills', href: '#skills', id: '03' },
    { name: 'Projects', href: '#projects', id: '04' },
    { name: 'Services', href: '#services', id: '05' },
    { name: 'Contact', href: '#contact', id: '06' },
  ];

  return (
    <nav className={cn(
      "fixed left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-7xl transition-all duration-700",
      isScrolled ? "top-4" : "top-8"
    )}>
      {/* Floating Tactical Container */}
      <div className={cn(
        "relative flex items-center justify-between px-6 py-3 backdrop-blur-2xl border transition-all duration-500",
        isScrolled 
          ? "bg-black/80 border-primary/30 shadow-[0_0_30px_rgba(130,26,252,0.15)]" 
          : "bg-black/40 border-white/10"
      )}>
        {/* HUD Decorative Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary/40" />

        {/* Left Side: System Core Node */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-10 h-10 bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-black text-xl transition-all group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary/20">
              R
            </div>
            <div className="absolute -inset-1 border border-primary/20 animate-spin-slow rounded-none opacity-0 group-hover:opacity-100" />
          </div>
          <div className="hidden sm:flex flex-col">
            <div className="flex items-center gap-2">
              <Activity size={8} className="text-primary animate-pulse" />
              <span className="text-[7px] font-mono font-black text-primary/80 uppercase tracking-[0.4em]">CORE_ACTIVE</span>
            </div>
            <div className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">NODE_IDENTIFIER</div>
          </div>
        </a>

        {/* Desktop Navigation: HUD Protocols */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-2 py-1 px-3"
              >
                <span className="absolute left-0 top-0 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 font-mono text-[10px]">[</span>
                <span className="absolute right-0 top-0 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 font-mono text-[10px]">]</span>
                
                <span className="text-[7px] font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">
                  {link.id}
                </span>
                <span className="text-[10px] font-mono font-black text-white/40 group-hover:text-white uppercase tracking-[0.2em] transition-all">
                  {link.name}
                </span>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/10" />

          <a 
            href="#contact" 
            className="group relative px-6 py-2 bg-primary/5 border border-primary/20 hover:border-primary/60 transition-all overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-3">
              <Target size={12} className="text-secondary group-hover:scale-125 transition-transform" />
              <span className="text-[9px] font-mono font-black text-white/60 tracking-[0.4em] uppercase group-hover:text-white">INITIALIZE_SYNC</span>
            </div>
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="scanning-line opacity-0 group-hover:opacity-20" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border transition-all z-[70]",
            isMobileMenuOpen ? "border-primary bg-primary/10" : "border-white/10 bg-white/5"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={cn("h-[1.5px] bg-white transition-all duration-300", isMobileMenuOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5")} />
          <div className={cn("h-[1.5px] bg-white transition-all duration-300", isMobileMenuOpen ? "opacity-0" : "w-3 self-end mr-2.5")} />
          <div className={cn("h-[1.5px] bg-white transition-all duration-300", isMobileMenuOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-5")} />
        </button>
      </div>

      {/* Mobile Terminal Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-black transition-all duration-500 ease-in-out z-[-1]",
        isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] data-grid" />
        
        <div className="flex flex-col p-8 pt-32 h-full">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.5em]">SYSTEM_NAVIGATION</span>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between group py-4 border-b border-white/5"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-primary/40 font-bold">{link.id}</span>
                  <span className="text-2xl font-headline font-black text-white/60 group-hover:text-white transition-all uppercase tracking-widest">
                    {link.name}
                  </span>
                </div>
                <Terminal size={18} className="opacity-0 group-hover:opacity-100 transition-all text-primary -translate-x-4 group-hover:translate-x-0" />
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12">
            <div className="h-[1px] w-full bg-white/5 mb-8" />
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-5 border border-primary/40 text-primary text-center font-black tracking-[0.4em] text-[10px] uppercase bg-primary/5 group relative overflow-hidden block"
            >
              <span className="relative z-10">OPEN_LINK_PROTOCOL</span>
              <div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </div>
        </div>
        
        <div className="scanning-line opacity-10" />
      </div>
    </nav>
  );
}
