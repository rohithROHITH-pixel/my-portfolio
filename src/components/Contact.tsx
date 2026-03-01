
"use client";

import { Mail, Globe, MapPin, Terminal, Share2, ShieldCheck, Activity, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          
          {/* Left Content: Text & Quick Protocols */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-[10px] font-mono font-black tracking-[0.5em] text-primary uppercase">Sync_Request</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black text-white mb-10 tracking-tighter uppercase leading-none">
              ESTABLISH<br /><span className="text-primary">CONTACT</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-12 max-w-md">
              Initialize a high-priority communication protocol for architecture requests or neural node collaborations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="tel:+919663761192" className="tactical-panel p-8 border-white/5 group hover:border-primary/40 transition-all bg-white/[0.01]">
                <div className="flex items-center justify-between mb-8">
                  <Phone size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
                  <span className="text-[8px] font-mono text-white/10 tracking-widest uppercase">Voice_Link</span>
                </div>
                <h4 className="text-[10px] font-mono font-black text-white/30 uppercase mb-2 tracking-widest">Protocol_Phone</h4>
                <div className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">+91 9663761192</div>
              </a>

              <a href="mailto:roopanrohith320@gmail.com" className="tactical-panel p-8 border-white/5 group hover:border-secondary/40 transition-all bg-white/[0.01]">
                <div className="flex items-center justify-between mb-8">
                  <ShieldCheck size={16} className="text-secondary/40 group-hover:text-secondary transition-colors" />
                  <span className="text-[8px] font-mono text-white/10 tracking-widest uppercase">Secure_Mail</span>
                </div>
                <h4 className="text-[10px] font-mono font-black text-white/30 uppercase mb-2 tracking-widest">Protocol_Email</h4>
                <div className="text-xs md:text-sm lg:text-base font-bold text-white group-hover:text-secondary transition-colors break-all">roopanrohith320@gmail.com</div>
              </a>
            </div>
          </div>

          {/* Right Content: High-Fidelity HUD Panel */}
          <div className="animate-slide-up [animation-delay:0.3s]">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto group perspective-1000">
              
              {/* Main HUD Container */}
              <div className="w-full h-full bg-black border-l border-primary/20 tactical-panel p-0 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                
                {/* Background Grid Layer */}
                <div className="absolute inset-0 opacity-10 data-grid" />
                
                {/* Scanning Line Overlay */}
                <div className="scanning-line opacity-20" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  
                  {/* Top Header Section */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <Terminal size={18} className="text-primary" />
                      </div>
                      <span className="text-[11px] font-mono font-black text-primary tracking-[0.4em] uppercase">Direct_Link_Interface</span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-0.5 w-full bg-primary/20" />
                      <div className="h-0.5 w-3/4 bg-primary/10" />
                      <div className="h-0.5 w-1/2 bg-primary/5" />
                    </div>
                  </div>

                  {/* Mid Information Section */}
                  <div className="space-y-12">
                    <div className="flex items-start gap-6 group/item">
                      <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover/item:border-secondary/60 transition-colors">
                        <MapPin size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-1.5">Node_Location</p>
                        <p className="text-xl md:text-2xl font-bold text-white tracking-tight">Bangalore, IN_NODE_5600</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group/item">
                      <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover/item:border-primary/60 transition-colors">
                        <Globe size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-1.5">Temporal_Zone</p>
                        <p className="text-xl md:text-2xl font-bold text-white tracking-tight">IST (UTC +5:30)</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom HUD Metadata */}
                  <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                    <div className="p-3 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 cursor-pointer transition-all group/share">
                      <Share2 size={16} className="text-white/40 group-hover/share:text-primary" />
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2">
                        <Activity size={10} className="text-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">System_Online_24/7</span>
                      </div>
                      <div className="text-[7px] font-mono text-white/5 uppercase">Hash: {Math.random().toString(36).substring(7).toUpperCase()}</div>
                    </div>
                  </div>
                </div>

                {/* Tactical HUD Ornaments */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-secondary/20 pointer-events-none" />
                
                {/* Data Telemetry Lines */}
                <div className="absolute top-1/2 right-4 h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/2 left-4 h-32 w-[1px] bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
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
