"use client";

import { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      
      {!loading && (
        <main className="min-h-screen bg-background transition-opacity duration-1000 opacity-100">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}