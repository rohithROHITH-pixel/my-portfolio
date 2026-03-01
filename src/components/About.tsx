"use client";

import { useEffect, useRef, useState } from 'react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary hidden sm:block"></span>
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">Rohith YP</span>, a 2nd year AIML Engineering student and passionate web developer with a vision to merge artificial intelligence with cutting-edge web design.
              </p>
              <p>
                I specialize in creating modern, responsive, and animated websites that don't just look good but perform exceptionally. Currently fluent in frontend development and actively expanding my backend skills to become a full-stack architect.
              </p>
              <p className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-2xl italic text-white/90">
                “I build websites using a smart combination of manual coding expertise and AI-assisted productivity tools to deliver faster and better results.”
              </p>
              <p>
                My focus is always on performance, design quality, and real-world usability. I believe every pixel counts and every interaction should tell a story.
              </p>
            </div>
          </div>
          
          <div className={`flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative z-10 glass-card p-1 aspect-square max-w-md mx-auto overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
              <img 
                src="https://picsum.photos/seed/rohith/800/800" 
                alt="Profile Placeholder" 
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                data-ai-hint="professional profile"
              />
              <div className="absolute inset-0 border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500 m-2 rounded-lg" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}