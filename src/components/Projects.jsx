import React, { useState, useRef } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  FolderGit2,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.project-card-item',
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
  }, { scope: gridRef, dependencies: [activeFilter] });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#2a9d8f] text-xs font-mono font-semibold mb-4 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-[#2a9d8f]" />
            <span>MERN STACK CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] via-teal-600 to-[#1bb48c]">Projects</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Explore 4 production-ready web applications built with React.js, Node.js, Express.js, and MongoDB, demonstrating clean full-stack architecture.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] text-white font-extrabold shadow-md shadow-[#2a9d8f]/25 border border-transparent scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-[#2a9d8f]/50 shadow-xs hover:scale-102'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* 4 Projects Grid (2x2 responsive layout) */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card-item flex will-change-transform"
            >
              <article
                className={`w-full group relative rounded-3xl bg-white/90 border border-slate-200/90 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-[#2a9d8f]/70 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col justify-between overflow-hidden shadow-md shadow-slate-200/50`}
              >
                {/* Subtle top card gradient banner */}
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${project.accentColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#2a9d8f] transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Tagline */}
                  <p className="text-xs font-mono text-[#2a9d8f] mb-4 font-semibold">
                    {project.tagline}
                  </p>

                  {/* Full Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Technical Highlights */}
                  <div className="space-y-2.5 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#2a9d8f] flex items-center gap-1.5 mb-2 font-semibold">
                      <Layers className="w-3.5 h-3.5 text-[#2a9d8f]" />
                      Key Deliverables & Architectural Specs:
                    </div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2a9d8f] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 font-medium">
                      Technologies Applied:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-[#2a9d8f]/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons (Live Demo & Source Code) */}
                <div className="relative z-10 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] hover:brightness-105 shadow-md shadow-[#2a9d8f]/25 transition-all duration-200 active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 hover:border-[#2a9d8f]/60 hover:text-[#2a9d8f] transition-all duration-200 active:scale-95 shadow-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                    <span>Source Code</span>
                  </a>
                </div>

              </article>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <AnimatedSection delay={200}>
          <div className="mt-16 p-8 rounded-3xl bg-white/90 border border-slate-200/90 backdrop-blur-xl text-center relative overflow-hidden shadow-lg shadow-slate-200/50 hover:border-[#2a9d8f]/50 transition-all duration-300">
            <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Need a Custom Full-Stack Web Application?
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                I develop performant React frontends connected to robust Express & MongoDB backends. Let's discuss your product roadmap.
              </p>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] hover:brightness-105 shadow-lg shadow-[#2a9d8f]/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Initiate Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
