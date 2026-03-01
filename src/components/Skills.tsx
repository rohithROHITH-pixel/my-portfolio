"use client";

import { useEffect, useState } from 'react';
import { Layout, Server, Wrench, Sparkles } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Layout className="text-primary" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend (Learning)',
    icon: <Server className="text-accent" />,
    skills: ['Node.js', 'Firebase Basics', 'API Integration Concepts'],
  },
  {
    category: 'Tools',
    icon: <Wrench className="text-primary" />,
    skills: ['Git & GitHub', 'Vercel', 'Firebase Hosting', 'Figma', 'AI Tools'],
  },
  {
    category: 'Innovation',
    icon: <Sparkles className="text-accent" />,
    skills: ['3D CSS Effects', 'Smooth Animations', 'Performance Optimization'],
  },
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical prowess with futuristic design thinking to build high-end digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {skillsData.map((item, idx) => (
            <div
              key={item.category}
              className={`glass-card p-8 group preserve-3d transition-transform duration-500 ${hoveredIndex === idx ? 'scale-105 -rotate-y-12 rotate-x-6 neon-border-purple' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === idx ? 'translateZ(50px)' : 'translateZ(0px)',
              }}
            >
              <div className="mb-6 p-4 w-fit bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-6 tracking-wide uppercase">{item.category}</h3>
              <ul className="space-y-3">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
              
              {/* Card Decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}