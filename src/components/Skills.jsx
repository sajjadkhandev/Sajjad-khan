import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Layout, 
  Server, 
  Wrench, 
  Atom, 
  Code2, 
  Palette, 
  FileCode, 
  Layers, 
  Cpu, 
  Network, 
  Database, 
  Workflow, 
  GitBranch, 
  GitPullRequest, 
  Send, 
  Zap
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { skillCategories } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

// Icon lookup dictionary
const iconMap = {
  Layout,
  Server,
  Terminal: Wrench,
  Atom,
  Code2,
  Palette,
  FileCode,
  Layers,
  Cpu,
  Network,
  Database,
  Workflow,
  GitBranch,
  GitPullRequest,
  Send,
  Zap
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const gridRef = useRef(null);

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = activeTab === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.title === activeTab);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.skill-category-card',
      {
        opacity: 0,
        y: 25,
        scale: 0.97
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform'
      }
    );

    gsap.fromTo(
      '.skill-item-chip',
      {
        opacity: 0,
        x: -10
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.03,
        delay: 0.15,
        ease: 'power1.out',
        clearProps: 'transform'
      }
    );
  }, { scope: gridRef, dependencies: [activeTab] });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#2a9d8f] text-xs font-mono font-semibold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2a9d8f]" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] via-teal-600 to-[#1bb48c]">Toolbox</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Core technologies and tools applied daily to build robust, modern, and scalable web solutions.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] text-white font-extrabold shadow-md shadow-[#2a9d8f]/25 border border-transparent scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-[#2a9d8f]/50 shadow-xs hover:scale-102'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon] || Layout;

            return (
              <div
                key={category.title}
                className="skill-category-card flex will-change-transform"
              >
                <div
                  className={`w-full group relative rounded-2xl bg-white/90 border border-slate-200/90 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#2a9d8f]/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between shadow-md shadow-slate-200/40`}
                >
                  {/* Ambient Card Header Gradient */}
                  <div
                    className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${category.gradient} rounded-t-2xl pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-[#2a9d8f] group-hover:scale-105 transition-all">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#2a9d8f] transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skills List / Chips */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => {
                        const SkillIcon = iconMap[skill.iconName] || Code2;
                        return (
                          <div
                            key={skill.name}
                            className="skill-item-chip group/item flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#2a9d8f]/60 hover:bg-teal-50/50 hover:shadow-sm transition-all duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-[#2a9d8f] group-hover/item:border-[#2a9d8f] group-hover/item:scale-105 transition-all shadow-2xs">
                                <SkillIcon className="w-4 h-4 text-[#2a9d8f]" />
                              </div>
                              <span className="text-sm font-semibold text-slate-800 group-hover/item:text-[#2a9d8f] transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs font-mono text-slate-500 px-2.5 py-0.5 rounded-md bg-white border border-slate-200 group-hover/item:border-[#2a9d8f]/40 transition-colors">
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
