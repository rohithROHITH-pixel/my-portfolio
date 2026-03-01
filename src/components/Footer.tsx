"use client";

import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-headline font-bold text-white mb-2 tracking-tight">Rohith YP</h2>
          <p className="text-sm text-muted-foreground">© {currentYear} Rohith YP. All Rights Reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={20} />, href: "https://github.com/rohithROHITH-pixel" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rohith-y-p-a4588132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <Instagram size={20} />, href: "https://www.instagram.com/rohith__r11?igsh=MXJydzVzNnNraGdyZw==" },
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right group">
          <div className="flex flex-col md:items-end gap-1.5">
            <div className="flex items-center justify-center md:justify-end gap-2">
              <div className="w-1.5 h-1.5 bg-primary animate-pulse shadow-[0_0_8px_rgba(130,26,252,0.8)]" />
              <p className="text-[9px] font-mono font-black text-white/40 uppercase tracking-[0.4em]">Designed_By</p>
            </div>
            <p className="text-lg font-headline font-black text-white tracking-tight glow-text group-hover:text-primary transition-colors duration-500">
              ROHITH YP
            </p>
            <div className="w-12 h-[1px] bg-white/5 group-hover:w-full group-hover:bg-primary/20 transition-all duration-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
