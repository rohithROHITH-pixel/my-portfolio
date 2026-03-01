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
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Designed By</p>
          <p className="text-sm font-medium text-white">Rohith YP</p>
        </div>
      </div>
    </footer>
  );
}
