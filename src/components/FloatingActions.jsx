import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { WhatsappIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const waButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (waButtonRef.current) {
      gsap.from(waButtonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.8)'
      });

      gsap.to(waButtonRef.current, {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.6
      });
    }
  }, { scope: containerRef });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside ref={containerRef} aria-label="Quick actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`pointer-events-auto p-3 rounded-full bg-white/95 hover:bg-slate-50 text-slate-700 hover:text-[#2a9d8f] border border-slate-200/90 hover:border-[#2a9d8f]/50 shadow-xl shadow-slate-300/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating WhatsApp Action Pill */}
      <div 
        className="pointer-events-auto relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip / Label */}
        <div
          className={`hidden sm:flex items-center gap-2 px-3 py-1.5 mr-3 rounded-xl bg-slate-900/95 border border-slate-800 text-white text-xs font-mono font-medium shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none whitespace-nowrap ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#1DCD9F] animate-pulse" />
          <span>Chat on WhatsApp: <strong className="text-[#1DCD9F]">{personalInfo.social.phone}</strong></span>
        </div>

        {/* WhatsApp Floating Button with GSAP */}
        <a
          ref={waButtonRef}
          href={personalInfo.social.whatsappDirect}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sajjad Khan on WhatsApp (03069122770)"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#2a9d8f] via-[#1bb48c] to-[#1DCD9F] text-white shadow-xl shadow-[#2a9d8f]/30 hover:shadow-2xl hover:shadow-[#2a9d8f]/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer will-change-transform"
        >
          {/* Subtle glowing ring pulse */}
          <span className="absolute -inset-1 rounded-full bg-[#2a9d8f] opacity-35 group-hover:opacity-75 blur-sm animate-pulse-slow transition-opacity" />

          {/* Online green indicator badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full z-10"></span>

          <WhatsappIcon className="w-7 h-7 fill-white relative z-10 transition-transform group-hover:scale-110" />
        </a>
      </div>
    </aside>
  );
}
