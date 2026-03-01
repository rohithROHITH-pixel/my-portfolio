"use client";

import { useEffect, useState } from 'react';
import { Mail, ShieldCheck, ExternalLink, Terminal } from 'lucide-react';

export function Contact() {
  const [systemHash, setSystemHash] = useState("SYNC_PENDING");

  useEffect(() => {
    setSystemHash(Math.random().toString(36).substring(7).toUpperCase());
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Left Content: Narrative Header */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <span className="text-[9px] font-mono font-black tracking-[0.4em] text-primary uppercase">Link_Interface</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-white mb-6 tracking-tighter uppercase leading-none">
              SECURE<br /><span className="text-primary">SYNC</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/40 font-light leading-relaxed mb-8 max-w-sm">
              Initialize a high-priority communication protocol. Open for neural node collaborations or architectural requests.
            </p>
            
            <div className="hidden lg:block space-y-4">
              <div className="flex items-center gap-3 text-white/20">
                <Terminal size={12} className="text-primary" />
                <span className="text-[9px] font-mono uppercase tracking-widest">Awaiting_Encryption_Handshake...</span>
              </div>
              <div className="w-32 h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Right Content: Refined Compact HUD Terminal */}
          <div className="animate-slide-up [animation-delay:0.3s]">
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
              
              {/* Main HUD Container */}
              <div className="w-full bg-[#050508] border border-white/10 relative overflow-hidden shadow-2xl">
                
                {/* Header Section */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-primary" />
                    <span className="text-[10px] font-mono font-bold text-white/90 tracking-[0.3em] uppercase">COMM_NODE_V4.0</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-primary" />
                    <div className="w-1 h-1 bg-primary/40" />
                  </div>
                </div>

                {/* Protocol Nodes Area */}
                <div className="p-5 md:p-8 space-y-8">
                  
                  {/* Data Protocol (Email) */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[7px] md:text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">Protocol_Data</span>
                      <div className="flex-grow h-[1px] bg-white/5" />
                    </div>
                    
                    <a href="mailto:roopanrohith320@gmail.com" className="group block relative">
                      <div className="flex items-center justify-between p-4 md:p-6 bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.04] hover:border-primary/30">
                        <div className="flex items-center gap-4 md:gap-6">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5 group-hover:scale-110 transition-transform">
                            <Mail size={18} />
                          </div>
                          <div>
                            <div className="text-[8px] font-mono text-white/20 uppercase mb-0.5">Secure_Email</div>
                            <div className="text-base md:text-xl font-bold text-white tracking-tight truncate max-w-[180px] sm:max-w-xs">
                              roopanrohith320@gmail.com
                            </div>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                      </div>
                    </a>
                  </div>

                </div>

                {/* Bottom Metadata Layer */}
                <div className="px-5 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="space-y-0.5">
                      <p className="text-[6px] font-mono text-white/20 uppercase">Loc_Node</p>
                      <p className="text-[9px] font-bold text-white/60">BANGALORE_IN</p>
                    </div>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <div className="space-y-0.5">
                      <p className="text-[6px] font-mono text-white/20 uppercase">Neural_Sync</p>
                      <p className="text-[9px] font-bold text-emerald-500/80 animate-pulse uppercase">Optimal</p>
                    </div>
                  </div>
                  
                  <div className="text-[6px] font-mono text-white/10 uppercase tracking-[0.2em] hidden xs:block">
                    HASH_{systemHash}
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
