
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
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          
          {/* Left Content: Narrative Header */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-[10px] font-mono font-black tracking-[0.5em] text-primary uppercase">Link_Interface</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black text-white mb-10 tracking-tighter uppercase leading-none">
              SECURE<br /><span className="text-primary">SYNC</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-12 max-w-md">
              Initialize a high-priority communication protocol. Open for neural node collaborations, architectural requests, or technical consultation.
            </p>
            
            <div className="hidden lg:block space-y-6">
              <div className="flex items-center gap-4 text-white/20">
                <Terminal size={14} className="text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Awaiting_Encryption_Handshake...</span>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Right Content: Secure Comms Hub */}
          <div className="animate-slide-up [animation-delay:0.3s]">
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-xl mx-auto lg:ml-auto group perspective-1000">
              
              {/* Main HUD Container */}
              <div className="w-full h-full bg-black border-l-2 border-primary tactical-panel p-0 relative overflow-hidden shadow-[0_0_80px_rgba(130,26,252,0.15)]">
                
                {/* Background Grid Layer */}
                <div className="absolute inset-0 opacity-10 data-grid" />
                
                {/* Scanning Line Overlay */}
                <div className="scanning-line opacity-20" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  
                  {/* Top Header Section */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                          <ShieldCheck size={18} className="text-primary" />
                        </div>
                        <span className="text-[11px] font-mono font-black text-primary tracking-[0.4em] uppercase">COMM_NODE_V4.0</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-primary/30" />
                        <div className="w-1.5 h-1.5 bg-primary/10" />
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-white/10" />
                  </div>

                  {/* Contact Protocol Nodes */}
                  <div className="space-y-6 md:space-y-10">
                    {/* Phone Protocol */}
                    <div className="group/item relative">
                      <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-3">Protocol_Voice</p>
                      <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 group-hover/item:border-primary/40 transition-all">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover/item:bg-primary/10 transition-all">
                            <Phone size={20} />
                          </div>
                          <div className="text-xl md:text-3xl font-bold text-white tracking-tighter">+91 9663761192</div>
                        </div>
                        <a href="tel:+919663761192" className="p-3 hover:bg-primary/20 rounded-sm text-primary transition-all">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Email Protocol */}
                    <div className="group/item relative">
                      <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-3">Protocol_Data</p>
                      <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 group-hover/item:border-secondary/40 transition-all">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary/10 transition-all">
                            <Mail size={20} />
                          </div>
                          <div className="text-sm md:text-xl font-bold text-white tracking-tight break-all">roopanrohith320@gmail.com</div>
                        </div>
                        <a href="mailto:roopanrohith320@gmail.com" className="p-3 hover:bg-secondary/20 rounded-sm text-secondary transition-all">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom HUD Metadata */}
                  <div className="pt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div className="flex items-center gap-8">
                      <div className="space-y-1">
                        <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest">Loc_Node</p>
                        <p className="text-[10px] font-bold text-white/60">BANGALORE_IN</p>
                      </div>
                      <div className="w-[1px] h-6 bg-white/10" />
                      <div className="space-y-1">
                        <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest">Time_Zone</p>
                        <p className="text-[10px] font-bold text-white/60">IST_UTC+5:30</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1 text-right">
                      <div className="flex items-center gap-2">
                        <Activity size={10} className="text-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">Neural_Link_Active</span>
                      </div>
                      <div className="text-[7px] font-mono text-white/10 uppercase">Auth_Hash: {systemHash}</div>
                    </div>
                  </div>
                </div>

                {/* Tactical HUD Decorative Brackets */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-secondary/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Spatial Element */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[200px] -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[150px] translate-y-1/2 rounded-full pointer-events-none" />
    </section>
  );
}
