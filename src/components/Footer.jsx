import React from 'react';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white/95 border-t border-slate-200/80 pt-16 pb-12 overflow-hidden backdrop-blur-xl">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-[#2a9d8f]/10 via-[#1DCD9F]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-slate-200/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 text-[#2a9d8f] shadow-sm">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed mb-3">
              {personalInfo.tagline}
            </p>
            <span className="text-xs font-mono text-[#2a9d8f] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] animate-pulse" />
              {personalInfo.location.display}
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono text-slate-600 hover:text-[#2a9d8f] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:bg-teal-50/50 hover:border-[#2a9d8f]/50 transition-colors shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:bg-teal-50/50 hover:border-[#2a9d8f]/50 transition-colors shadow-2xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.social.email}`}
              aria-label="Direct Email"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:bg-teal-50/50 hover:border-[#2a9d8f]/50 transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.social.whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors shadow-2xs"
              title="Chat on WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll Back to Top"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:bg-teal-50/50 hover:border-[#2a9d8f]/50 transition-all ml-2 cursor-pointer shadow-2xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal / Tech Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {personalInfo.name}. Built with React.js.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#2a9d8f] font-semibold">MERN Stack Architecture</span>
            <span>•</span>
            <span>Tailwind CSS & Lucide Icons</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
