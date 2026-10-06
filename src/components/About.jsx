import React from 'react';
import { Code, Cpu, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const pillars = [
    {
      title: "Clean Architecture",
      desc: "Structuring applications with modular components, separation of concerns, and maintainable directories that scale comfortably.",
      icon: Code,
      accent: "text-[#2a9d8f] bg-teal-50 border-teal-200"
    },
    {
      title: "Performant APIs & Data",
      desc: "Constructing reliable REST endpoints with Express.js and designing logical MongoDB schemas optimized for clean data flow.",
      icon: Cpu,
      accent: "text-[#2a9d8f] bg-teal-50 border-teal-200"
    },
    {
      title: "Responsive & Modern UIs",
      desc: "Delivering mobile-first, high-fidelity interfaces using React.js and Tailwind CSS with obsessive attention to responsiveness.",
      icon: Zap,
      accent: "text-[#2a9d8f] bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section id="about" className="pt-6 sm:pt-10 pb-20 sm:pb-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] via-teal-600 to-[#1bb48c]">Me</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A developer dedicated to building functional, scalable, and responsive digital products.
          </p>
        </AnimatedSection>

        {/* Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Biography Card */}
          <AnimatedSection delay={100} className="col-span-12 flex">
            <div className="w-full rounded-2xl bg-white/90 border border-slate-200/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-[#2a9d8f]/60 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-slate-200/50">
              
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-xs">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[center_16%]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Full-Stack Discipline</h3>
                  <p className="text-xs text-[#2a9d8f] font-mono font-semibold">Front-End to Back-End Engineering</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  I am a dedicated <strong className="text-[#2a9d8f] font-semibold">{personalInfo.role}</strong> focused on building robust, scalable digital applications and delivering high-performance full-stack web solutions.
                </p>
                <p>
                  Over the past <strong className="text-slate-900 font-semibold">~1 year</strong> of intensive hands-on development, I have focused on mastering the core principles of building production-grade web applications. I bridge the gap between polished user interfaces and scalable server-side systems.
                </p>
                <p>
                  My philosophy emphasizes clean code architecture, maintainability, performant APIs, responsive layouts, and continuous skill refinement to keep pace with evolving modern standards.
                </p>
              </div>

              {/* Quick Badges inside main card */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2a9d8f]" />
                  Zero-Fluff Approach
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#2a9d8f]" />
                  ~1 Year Hands-On
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-[#2a9d8f]" />
                  Modern Web Tech
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* 3 Engineering Focus Pillars */}
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection
                key={pillar.title}
                delay={idx * 120}
                className="col-span-12 md:col-span-4 flex"
              >
                <div className="w-full rounded-2xl bg-white/90 border border-slate-200/90 p-6 backdrop-blur-xl hover:border-[#2a9d8f]/60 hover:-translate-y-2 transition-all duration-300 shadow-md shadow-slate-200/40 group">
                  <div className={`p-3 rounded-xl border w-fit mb-4 group-hover:scale-110 transition-transform ${pillar.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#2a9d8f] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}

        </div>

      </div>
    </section>
  );
}
