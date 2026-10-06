import React, { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2, Code2, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { experienceData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const item = experienceData[0]; // Exactly 1 single entry as strictly constrained
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const nodeRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }

    if (nodeRef.current) {
      gsap.fromTo(
        nodeRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="experience" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#2a9d8f] text-xs font-mono font-semibold mb-4 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#2a9d8f]" />
            <span>PRACTICAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] via-teal-600 to-[#1bb48c]">Experience</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated full-stack engineering background focusing on real-world web application development.
          </p>
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line with Mint & Teal Gradient animated with GSAP */}
          <div 
            ref={lineRef}
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#2a9d8f] via-[#1DCD9F] to-slate-200 will-change-transform"
          />

          {/* Single Experience Card (Strict Constraint: Exactly 1 card, 1 year, no fake company) */}
          <div className="relative pl-12 sm:pl-20">
            {/* Glowing timeline node */}
            <div 
              ref={nodeRef}
              className="absolute left-2 sm:left-6 top-7 -translate-x-1/2 flex items-center justify-center will-change-transform"
            >
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a9d8f] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white border-2 border-[#2a9d8f] shadow-[0_0_12px_rgba(42,157,143,0.6)]"></span>
              </span>
            </div>

            {/* Experience Card Body */}
            <AnimatedSection delay={150}>
              <div className="rounded-2xl bg-white/90 border border-slate-200/90 hover:border-[#2a9d8f]/60 p-6 sm:p-8 backdrop-blur-xl shadow-md shadow-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 group">
              
              {/* Header inside Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#2a9d8f] text-xs font-mono font-semibold mb-2">
                    <Code2 className="w-3.5 h-3.5 text-[#2a9d8f]" />
                    {item.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#2a9d8f] transition-colors">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 w-fit">
                  <Calendar className="w-4 h-4 text-[#2a9d8f]" />
                  <span className="font-semibold text-slate-900">{item.period}</span>
                  <span className="text-slate-500">Hands-on</span>
                </div>
              </div>

              {/* Core Focus Narrative */}
              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              {/* Specific Bullet Points */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase tracking-wider font-mono text-[#2a9d8f] flex items-center gap-2 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-[#2a9d8f]" />
                  Key Responsibilities & Deliverables:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2a9d8f] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs uppercase tracking-wider font-mono text-slate-500 mb-3 font-medium">
                  Applied Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:border-[#2a9d8f] hover:text-[#2a9d8f] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </div>
    </section>
  );
}
