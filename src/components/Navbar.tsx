"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Activity } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-2xl border-b border-primary/20 shadow-2xl' : 'py-6 bg-transparent'}`}>
      {/* Scanning Line Indicator */}
      {isScrolled && <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />}
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Neural Brand Node (No Name) */}
        <a href="#home" className="flex items-center gap-6 group">
          <div className="relative">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(130,26,252,0.4)] transition-all group-hover:scale-110 group-hover:rotate-3">
              R
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <Activity size={10} className="text-primary animate-pulse" />
              <span className="text-[8px] font-mono font-black text-primary/80 leading-tight uppercase tracking-[0.4em]">SYSTEM_STABLE</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation: Protocol Based */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-baseline gap-2 py-1"
              >
                <span className="text-[7px] font-mono font-bold text-primary/60 group-hover:text-primary transition-colors">
                  {link.id}
                </span>
                <span className="text-[11px] font-mono font-black text-white/40 group-hover:text-white uppercase tracking-[0.2em] transition-all group-hover:translate-x-1">
                  {link.name}
                </span>
                {/* Tactical Underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(130,26,252,0.8)]" />
              </a>
            ))}
          </div>

          {/* HUD Separator & Action Node */}
          <div className="flex items-center gap-10">
            <div className="h-8 w-[1px] bg-white/10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/40 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary/40 rounded-full" />
            </div>
            <a 
              href="#contact" 
              className="group relative px-8 py-3.5 bg-black/40 border border-primary/20 hover:border-primary/60 transition-all overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-4">
                <Cpu size={14} className="text-secondary group-hover:rotate-180 transition-transform duration-1000" />
                <span className="text-[10px] font-mono font-black text-white/60 tracking-[0.4em] uppercase group-hover:text-white transition-colors">SYNC_PROTOCOL</span>
              </div>
              <div className="absolute inset-0 bg-primary/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Interface */}
        <button 
          className={`lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 border transition-all ${isMobileMenuOpen ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`} />
          <div className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
          <div className={`h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-6'}`} />
        </button>
      </div>

      {/* Mobile Terminal Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[72px] bg-black/98 backdrop-blur-3xl transition-all duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] data-grid" />
        
        <div className="flex flex-col p-10 gap-8 relative z-10 h-full justify-center">
          <div className="mb-8">
            <div className="text-[9px] font-mono text-primary/40 uppercase tracking-[0.5em] mb-2">Navigation_Nodes</div>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                <span className="text-[12px] font-mono text-primary/40 font-bold group-hover:text-primary transition-colors">{link.id}</span>
                <span className="text-3xl font-headline font-black text-white/40 group-hover:text-white group-hover:translate-x-4 transition-all uppercase tracking-tighter">
                  {link.name}
                </span>
              </div>
              <Terminal size={18} className="opacity-0 group-hover:opacity-100 transition-all text-primary -translate-x-4 group-hover:translate-x-0" />
            </a>
          ))}

          <div className="mt-auto space-y-6">
            <div className="h-[1px] w-full bg-gradient-to-l from-secondary/30 to-transparent" />
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-5 border border-primary text-primary text-center font-black tracking-[0.5em] text-[12px] uppercase bg-primary/5 relative group overflow-hidden"
            >
              <span className="relative z-10">INITIALIZE_SYNC</span>
              <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </div>
        </div>
        
        {/* HUD Scanning Line */}
        <div className="scanning-line opacity-20" />
      </div>
    </nav>
  );
}