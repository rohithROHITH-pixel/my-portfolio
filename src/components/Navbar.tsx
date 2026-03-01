"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Neural Brand Node */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(130,26,252,0.3)] transition-transform group-hover:scale-105">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono font-black text-primary leading-tight uppercase tracking-[0.2em]">NEURAL_NODE</span>
            <span className="text-sm font-headline font-black text-white uppercase tracking-tighter leading-none">ROHITH YP</span>
          </div>
        </a>

        {/* Desktop Navigation: Protocol Based */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-baseline gap-1.5 transition-all"
              >
                <span className="text-[7px] font-mono font-bold text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                  {link.id}
                </span>
                <span className="text-[10px] font-mono font-black text-white/50 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Separator & Tactical Button */}
          <div className="flex items-center gap-8 ml-4">
            <div className="h-4 w-[1px] bg-white/10" />
            <a 
              href="#contact" 
              className="px-8 py-2.5 border border-primary/30 text-[10px] font-mono font-black text-primary uppercase hover:bg-primary/10 hover:border-primary transition-all tracking-[0.4em] shadow-[0_0_15px_rgba(130,26,252,0.1)]"
            >
              SYNC_NOW
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Interface */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-primary/40 font-bold">{link.id}</span>
                <span className="text-lg font-headline font-black text-white/60 group-hover:text-primary uppercase tracking-tighter transition-colors">
                  {link.name}
                </span>
              </div>
              <Terminal size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full py-4 border border-primary text-primary text-center font-black tracking-[0.4em] text-[10px] uppercase bg-primary/5 hover:bg-primary hover:text-white transition-all shadow-[0_0_30px_rgba(130,26,252,0.1)]"
          >
            ESTABLISH_LINK
          </a>
        </div>
        <div className="scanning-line opacity-10" />
      </div>
    </nav>
  );
}
