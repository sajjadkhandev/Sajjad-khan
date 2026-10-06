import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 flex flex-col font-sans selection:bg-[#2a9d8f]/20 selection:text-[#2a9d8f] relative overflow-x-hidden">
      {/* Animated Futuristic Background: Particles, Orbs & Subtle Grid */}
      <AnimatedBackground />

      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating WhatsApp and Scroll to Top Quick Actions */}
      <FloatingActions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
