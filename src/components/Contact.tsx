
"use client";

import { useEffect, useState } from 'react';
import { Mail, Globe, MapPin, Terminal, Share2, ShieldCheck, Activity, Phone, Copy, ExternalLink } from 'lucide-react';

export function Contact() {
  const [systemHash, setSystemHash] = useState("SYNC_PENDING");

  useEffect(() => {
    // Generate hash on client to avoid hydration mismatch
    setSystemHash(Math.random().toString(36).substring(7).toUpperCase());
  }, []);

  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
          
          {/* Left Content: Narrative Header */}
          <div className="animate-slide-up lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary shadow-[0_0_10px_rgba(130,26,252,0.5)]" />
              <span className="text-[10px] font-mono font-black tracking-[0.5em] text-primary uppercase">Link_Interface</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black text-white mb-10 tracking-tighter uppercase leading-none">
              SECURE<br /><span className="text-primary">SYNC</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-12 max-w-md">
              Initialize a high-priority communication protocol. Open for neural node collaborations or architectural requests.
            </p>
            
            <div className="hidden lg:block space-y-6">
              <div className="flex items-center gap-4 text-white/20">
                <Terminal size={14} className="text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Awaiting_Encryption_Handshake...</span>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Right Content: Refined HUD Terminal (Matches Reference Image) */}
          <div className="animate-slide-up [animation-delay:0.3s]">
            <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
              
              {/* Main HUD Container */}
              <div className="w-full bg-[#050508] border border-white/5 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
                
                {/* Header Section */}
                <div className="p-6 md:p-8 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center">
                      <ShieldCheck size={20} className="text-primary" />
                    </div>
                    <span className="text-[11px] md:text-xs font-mono font-bold text-white/90 tracking-[0.4em] uppercase">COMM_NODE_V4.0</span>
                  </div>
                  <div className="flex gap-1.5 opacity-40">
                    <div className="w-1.5 h-1.5 bg-primary" />
                    <div className="w-1.5 h-1.5 bg-primary/60" />
                    <div className="w-1.5 h-1.5 bg-primary/30" />
                  </div>
                </div>

                {/* Protocol Nodes Area */}
                <div className="p-6 md:p-10 space-y-12">
                  
                  {/* Voice Protocol (Phone) */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[8px] md:text-[9px] font-mono text-white/30 uppercase tracking-[0.4em]">Protocol_Voice</span>
                      <div className="flex-grow h-[1px] bg-white/5" />
                    </div>
                    
                    <div className="relative group">
                      <div className="flex items-center justify-between p-6 md:p-10 bg-white/[0.01] border border-white/5 transition-all hover:bg-white/[0.03] hover:border-primary/30">
                        <div className="flex items-center gap-6 md:gap-10">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform bg-primary/5">
                            <Phone size={24} className="md:size-32" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter">+91</div>
                            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter">9663761192</div>
                          </div>
                        </div>
                        <a href="tel:+919663761192" className="p-3 text-white/20 hover:text-primary transition-colors">
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Data Protocol (Email) */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[8px] md:text-[9px] font-mono text-white/30 uppercase tracking-[0.4em]">Protocol_Data</span>
                      <div className="flex-grow h-[1px] bg-white/5" />
                    </div>
                    
                    <div className="relative group">
                      <div className="flex items-center justify-between p-6 md:p-10 bg-white/[0.01] border border-white/5 transition-all hover:bg-white/[0.03] hover:border-secondary/30">
                        <div className="flex items-center gap-6 md:gap-10">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform bg-secondary/5">
                            <Mail size={24} className="md:size-32" />
                          </div>
                          <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white tracking-tight break-all max-w-[150px] sm:max-w-xs">
                            roopanrohith320@gmail.com
                          </div>
                        </div>
                        <a href="mailto:roopanrohith320@gmail.com" className="p-3 text-white/20 hover:text-secondary transition-colors shrink-0">
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Metadata Layer */}
                <div className="p-8 border-t border-white/5 bg-black/40 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-10">
                    <div className="space-y-1">
                      <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest">Loc_Node</p>
                      <p className="text-[10px] font-bold text-white/60">BANGALORE_IN</p>
                    </div>
                    <div className="w-[1px] h-6 bg-white/10" />
                    <div className="space-y-1">
                      <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest">Neural_Sync</p>
                      <p className="text-[10px] font-bold text-emerald-500/80 animate-pulse">OPTIMAL</p>
                    </div>
                  </div>
                  
                  <div className="text-[7px] font-mono text-white/10 uppercase tracking-[0.2em]">
                    AUTH_HASH: {systemHash}
                  </div>
                </div>

                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] data-grid" />
                <div className="scanning-line opacity-[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
