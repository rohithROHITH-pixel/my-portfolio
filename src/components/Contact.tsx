"use client";

import { Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6">Let's Build Something Great</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-lg">
              Have a project in mind or just want to say hi? Reach out through any of these channels. I'm always open to discussing new ideas.
            </p>
            
            <div className="space-y-6">
              <a 
                href="tel:+919663761192" 
                className="flex items-center gap-6 p-6 glass-card group hover:neon-border-purple"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Phone</p>
                  <p className="text-xl font-bold text-white tracking-tight">+91 9663761192</p>
                </div>
              </a>

              <a 
                href="mailto:roopanrohith320@gmail.com" 
                className="flex items-center gap-6 p-6 glass-card group hover:neon-border-purple"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Email</p>
                  <p className="text-xl font-bold text-white tracking-tight break-all">roopanrohith320@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="animate-slide-up [animation-delay:0.3s]">
            <form className="glass p-10 rounded-3xl border border-white/10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/80 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/80 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full py-5 bg-primary rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:neon-border-purple sweep-effect relative overflow-hidden"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none" />
    </section>
  );
}