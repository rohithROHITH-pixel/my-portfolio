"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Activity, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: '01' },
    { name: 'About', href: '#about', id: '02' },
    { name: 'Skills', href: '#skills', id: '03' },
    { name: 'Projects', href: '#projects', id: '04' },
    { name: 'Services', href: '#services', id: '05' },
    { name: 'Contact', href: '#contact', id: '06' },
  ];

  return (
    <>
      {/* Full-Screen Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-black z-[100] transition-all duration-500 ease-in-out flex flex-col",
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] data-grid" />
        <div className="scanning-line opacity-10" />

        <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-black text-sm">R</div>
            <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.5em]">SYSTEM_NAVIGATION</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center border border-primary/40 bg-primary/10 text-primary"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow flex flex-col p-8 gap-2 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between group py-5 border-b border-white/5 transition-all active:bg-white/[0.03]"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-primary/40 font-bold">{link.id}</span>
                <span className="text-2xl font-headline font-black text-white/80 group-active:text-primary transition-all uppercase tracking-widest">
                  {link.name}
                </span>
              </div>
              <Terminal size={18} className="text-primary/40 group-active:text-primary" />
            </a>
          ))}
        </div>

        <div className="p-8 border-t border-white/5 bg-black/40">
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-5 border border-primary/40 text-primary text-center font-black tracking-[0.4em] text-[10px] uppercase bg-primary/5 active:bg-primary/20 block"
          >
            OPEN_LINK_PROTOCOL
          </a>
        </div>
      </div>

      {/* Main Floating Navbar - Hides when mobile menu is open to prevent collisions */}
      <nav className={cn(
        "fixed left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-7xl transition-all duration-700",
        isScrolled ? "top-4" : "top-8",
        isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <div className={cn(
          "relative flex items-center justify-between px-6 py-3 backdrop-blur-2xl border transition-all duration-500",
          isScrolled 
            ? "bg-black/80 border-primary/30 shadow-[0_0_30px_rgba(130,26,252,0.15)]" 
            : "bg-black/40 border-white/10"
        )}>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary/40" />

          <a href="#home" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-10 h-10 bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-black text-xl transition-all group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary/20">
                R
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-2">
                <Activity size={8} className="text-primary animate-pulse" />
                <span className="text-[7px] font-mono font-black text-primary/80 uppercase tracking-[0.4em]">CORE_ACTIVE</span>
              </div>
              <div className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">NODE_IDENTIFIER</div>
            </div>
          </a>

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
                  <span className="text-[7px] font-mono font-bold text-primary/40 group-hover:text-primary">{link.id}</span>
                  <span className="text-[10px] font-mono font-black text-white/40 group-hover:text-white uppercase tracking-[0.2em]">{link.name}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <a 
              href="#contact" 
              className="group relative px-6 py-2 bg-primary/5 border border-primary/20 hover:border-primary/60 transition-all"
            >
              <div className="relative z-10 flex items-center gap-3">
                <Target size={12} className="text-secondary" />
                <span className="text-[9px] font-mono font-black text-white/60 tracking-[0.4em] uppercase">INITIALIZE_SYNC</span>
              </div>
            </a>
          </div>

          <button 
            className={cn(
              "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border transition-all",
              "border-white/10 bg-white/5"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <div className="h-[1.5px] bg-white w-5" />
            <div className="h-[1.5px] bg-white w-3 self-end mr-2.5" />
            <div className="h-[1.5px] bg-white w-5" />
          </button>
        </div>
      </nav>
    </>
  );
}
