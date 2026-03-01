"use client";

import { Mail, Globe, MapPin, Terminal, Share2, ShieldCheck, Activity, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="w-8 md:w-16 h-[2px] bg-primary" />
              <span className="text-[9px] md:text-[11px] font-mono font-black tracking-[0.3em] md:tracking-[0.8em] text-primary uppercase">Sync_Request</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black text-white mb-8 md:mb-12 tracking-tighter uppercase leading-none">
              ESTABLISH<br /><span className="text-primary">CONTACT</span>
            </h2>
            
            <p className="text-base md:text-xl text-white/40 font-light leading-relaxed mb-10 md:mb-16 max-w-md">
              Initialize a direct communication protocol for high-priority development requests or technical inquiries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="tactical-panel p-6 md:p-8 border-white/5 group hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <Phone size={14} className="text-primary/40 group-hover:text-primary" />
                  <span className="text-[7px] font-mono text-white/20">TYPE: VOICE_LINK</span>
                </div>
                <h4 className="text-[9px] font-mono font-black text-white/40 uppercase mb-2 md:mb-3 tracking-widest">Protocol_Phone</h4>
                <a href="tel:+919663761192" className="text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors">+91 9663761192</a>
              </div>

              <div className="tactical-panel p-6 md:p-8 border-white/5 group hover:border-secondary/40 transition-all">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <ShieldCheck size={14} className="text-secondary/40 group-hover:text-secondary" />
                  <span className="text-[7px] font-mono text-white/20">TYPE: SECURE_MAIL</span>
                </div>
                <h4 className="text-[9px] font-mono font-black text-white/40 uppercase mb-2 md:mb-3 tracking-widest">Protocol_Email</h4>
                <a href="mailto:roopanrohith320@gmail.com" className="text-[10px] md:text-sm font-bold text-white group-hover:text-secondary transition-colors break-all">roopanrohith320@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="animate-slide-up [animation-delay:0.3s]">
            <div className="tactical-panel p-1 w-full aspect-square max-w-sm md:max-w-md mx-auto group lg:mx-0">
              <div className="relative w-full h-full bg-black/40 overflow-hidden">
                {/* Visual Terminal HUD */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                      <Terminal size={18} />
                      <span className="text-[9px] font-mono font-bold tracking-widest uppercase">Direct_Link_Interface</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-0.5 md:h-1 w-full bg-primary/20" />
                      <div className="h-0.5 md:h-1 w-2/3 bg-primary/10" />
                      <div className="h-0.5 md:h-1 w-3/4 bg-primary/5" />
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    <div className="flex items-start gap-4 md:gap-6">
                      <MapPin className="text-secondary shrink-0" size={18} />
                      <div>
                        <p className="text-[8px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest mb-1">Node_Location</p>
                        <p className="text-white font-bold text-xs md:text-base">Bangalore, IN_NODE_5600</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 md:gap-6">
                      <Globe className="text-primary shrink-0" size={18} />
                      <div>
                        <p className="text-[8px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest mb-1">Temporal_Zone</p>
                        <p className="text-white font-bold text-xs md:text-base">IST (UTC +5:30)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 md:pt-10 border-t border-white/5">
                    <div className="flex gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                        <Share2 size={12} />
                      </div>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-mono text-white/10 uppercase tracking-[0.3em] md:tracking-[0.5em]">System_Online_24/7</span>
                  </div>
                </div>
                
                {/* HUD Elements */}
                <div className="scanning-line opacity-20" />
                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 border-t border-r border-primary/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 md:w-20 border-b border-l border-secondary/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 blur-[100px] md:blur-[180px] -translate-y-1/2 rounded-full pointer-events-none" />
    </section>
  );
}
