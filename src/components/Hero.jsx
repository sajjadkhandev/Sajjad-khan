import React, { useRef, useState } from 'react';
import { ArrowRight, Mail, Sparkles, Database, Cpu, Atom } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);
  const statsRef = useRef(null);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

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

    // Master Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-status-pill', {
      y: -25,
      opacity: 0,
      duration: 0.7,
      ease: 'back.out(1.7)'
    })
      .from('.hero-headline', {
        y: 35,
        opacity: 0,
        duration: 0.8
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 25,
        opacity: 0,
        duration: 0.7
      }, '-=0.5')
      .from('.hero-tagline', {
        y: 20,
        opacity: 0,
        duration: 0.7
      }, '-=0.5')
      .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
      }, '-=0.4')
      .from('.hero-stat-card', {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08
      }, '-=0.3');

    // Number counters tween
    const counterObj = { val1: 0, val2: 0, val3: 0 };
    gsap.to(counterObj, {
      val1: 1,
      val2: 4,
      val3: 100,
      duration: 1.8,
      ease: 'power2.out',
      delay: 0.5,
      onUpdate: () => {
        setCounter1(Math.floor(counterObj.val1));
        setCounter2(Math.floor(counterObj.val2));
        setCounter3(Math.floor(counterObj.val3));
      }
    });

    // Desktop Badges Entrance & Continuous Floating Tween
    if (badge1Ref.current) {
      gsap.from(badge1Ref.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });
      gsap.to(badge1Ref.current, {
        y: -12,
        rotation: 1.5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    if (badge2Ref.current) {
      gsap.from(badge2Ref.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      });
      gsap.to(badge2Ref.current, {
        y: -14,
        rotation: -1.5,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    if (badge3Ref.current) {
      gsap.from(badge3Ref.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
      gsap.to(badge3Ref.current, {
        y: -10,
        rotation: 1,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Subtle Mouse Parallax on Floating Badges
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      if (badge1Ref.current) {
        gsap.to(badge1Ref.current, {
          x: xPercent * 18,
          y: yPercent * 12,
          duration: 1.2,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }
      if (badge2Ref.current) {
        gsap.to(badge2Ref.current, {
          x: -xPercent * 18,
          y: -yPercent * 12,
          duration: 1.2,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }
      if (badge3Ref.current) {
        gsap.to(badge3Ref.current, {
          x: xPercent * 12,
          y: yPercent * 8,
          duration: 1.2,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative pt-28 sm:pt-32 pb-8 sm:pb-10 flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Decorative Floating Tech Badges (Desktop) */}
      <div 
        ref={badge1Ref}
        className="hidden xl:block absolute left-8 lg:left-16 top-1/3 pointer-events-none z-10 will-change-transform"
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <div className="p-1.5 rounded-lg bg-teal-50 text-[#2a9d8f]">
            <Atom className="w-5 h-5 text-[#2a9d8f] animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 font-mono">React.js</div>
            <div className="text-[10px] text-slate-500 font-mono">Dynamic Frontend</div>
          </div>
        </div>
      </div>

      <div 
        ref={badge2Ref}
        className="hidden xl:block absolute right-8 lg:right-16 top-1/3 pointer-events-none z-10 will-change-transform"
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <div className="p-1.5 rounded-lg bg-teal-50 text-[#2a9d8f]">
            <Database className="w-5 h-5 text-[#2a9d8f]" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 font-mono">MongoDB</div>
            <div className="text-[10px] text-slate-500 font-mono">NoSQL & Aggregations</div>
          </div>
        </div>
      </div>

      <div 
        ref={badge3Ref}
        className="hidden xl:block absolute right-24 bottom-10 pointer-events-none z-10 will-change-transform"
      >
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 border border-slate-200/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <div className="p-1.5 rounded-lg bg-teal-50 text-[#2a9d8f]">
            <Cpu className="w-4 h-4 text-[#2a9d8f]" />
          </div>
          <div className="text-xs font-bold text-slate-900 font-mono">Node & Express</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Glowing Top Status Badge */}
        <div className="hero-status-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md mb-4 sm:mb-5 hover:border-[#2a9d8f]/80 transition-all cursor-default group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a9d8f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2a9d8f]"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-700">
            Available for High-Impact Roles
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-mono font-semibold text-[#2a9d8f] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#2a9d8f]" /> MERN Specialist
          </span>
        </div>

        {/* Headline with High-Impact Typography */}
        <h1 className="hero-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2 text-center">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] via-teal-600 to-[#1bb48c] animate-gradient">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subtitle with Flowing Gradient Text Effect */}
        <div className="hero-subtitle relative mb-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 text-center">
            {personalInfo.role}
          </h2>
        </div>

        {/* Tagline */}
        <p className="hero-tagline text-base sm:text-lg text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-6 font-normal text-center">
          {personalInfo.tagline}
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="hero-cta group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] hover:brightness-105 shadow-lg shadow-[#2a9d8f]/30 hover:shadow-xl hover:shadow-[#2a9d8f]/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shine" />
            <span className="relative z-10">Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform relative z-10" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs text-slate-800 hover:text-[#2a9d8f] bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#2a9d8f]/60 transition-all duration-300 shadow-sm backdrop-blur-md hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#2a9d8f]" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Live Credibility Stats Bar with GSAP animated counter */}
        <div ref={statsRef} className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-3xl">
          <div className="hero-stat-card flex flex-col items-center p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl hover:border-[#2a9d8f]/60 hover:-translate-y-1 transition-all shadow-sm group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#2a9d8f] transition-colors">
              {counter1}<span className="text-[#2a9d8f]">+</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">Year Experience</span>
          </div>

          <div className="hero-stat-card flex flex-col items-center p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl hover:border-[#2a9d8f]/60 hover:-translate-y-1 transition-all shadow-sm group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#2a9d8f] transition-colors">
              {counter2}<span className="text-[#2a9d8f]">+</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">MERN Projects</span>
          </div>

          <div className="hero-stat-card flex flex-col items-center p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl hover:border-[#2a9d8f]/60 hover:-translate-y-1 transition-all shadow-sm group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#2a9d8f] transition-colors">
              {counter3}<span className="text-[#2a9d8f]">%</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">Responsive Code</span>
          </div>

          <div className="hero-stat-card flex flex-col items-center p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl hover:border-[#2a9d8f]/60 hover:-translate-y-1 transition-all shadow-sm group">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#2a9d8f] tracking-tight group-hover:text-teal-600 transition-colors">
              MERN
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">Stack Focus</span>
          </div>
        </div>

      </div>
    </section>
  );
}
