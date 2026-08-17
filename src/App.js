import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

/**
 * Root Portfolio Orchestrator
 * Assembles modular atomic components into a responsive, accessible layout.
 */
export default function App() {
  return (
    <div className="portfolio bg-[#0a0a0f] text-[#e8e8f0] min-h-screen selection:bg-[#7effd4]/30 selection:text-[#7effd4]">
      {/* Semantic Landmark Header & Navigation */}
      <Header />

      {/* Main Landmark Container */}
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      {/* Semantic Landmark Footer */}
      <Footer />
    </div>
  );
}