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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(130,26,252,0.4)] group-hover:scale-110 transition-transform">
            R
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-mono font-black text-primary leading-none uppercase tracking-[0.2em] mb-1">Neural_Node</p>
            <p className="text-sm font-headline font-black text-white uppercase tracking-tighter">Rohith YP</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-mono font-black text-white/40 hover:text-primary transition-all tracking-[0.3em] uppercase relative group flex items-center gap-2"
            >
              <span className="text-[8px] text-primary/40 group-hover:text-primary">{link.id}</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="h-6 w-[1px] bg-white/10 mx-4" />
          <a href="#contact" className="px-6 py-2 border border-primary/40 text-[10px] font-mono font-black text-primary uppercase hover:bg-primary hover:text-white transition-all tracking-[0.3em]">
            Sync_Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-lg font-headline font-black text-white/60 hover:text-primary transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-primary/40">{link.id}</span>
                <span className="uppercase tracking-tighter">{link.name}</span>
              </div>
              <Terminal size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full py-4 bg-primary text-white text-center font-black tracking-[0.4em] text-xs uppercase shadow-[0_0_30px_rgba(130,26,252,0.3)]"
          >
            Establish_Link
          </a>
        </div>
        <div className="scanning-line opacity-10" />
      </div>
    </nav>
  );
}