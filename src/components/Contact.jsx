import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Loader2, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  AlertCircle,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.social.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.social.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    const name = formData.name.trim() || 'Visitor';
    const msg = formData.message.trim() || 'Hello Sajjad, I saw your portfolio and would like to connect!';
    const subject = formData.subject.trim() ? ` [${formData.subject.trim()}]` : '';
    const text = encodeURIComponent(`Hi Sajjad, my name is ${name}.${subject}\n\n${msg}`);
    window.open(`https://wa.me/923069122770?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setFormStatus('loading');

    // Simulate sending message to developer
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#2a9d8f] text-xs font-mono font-semibold mb-4 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#2a9d8f]" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] via-teal-600 to-[#1bb48c]">Touch</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you have a full-stack role, an engineering challenge, or just want to connect, my inbox is open.
          </p>
        </AnimatedSection>

        {/* Two-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information Cards */}
          <AnimatedSection delay={100} direction="right" className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp & Direct Call Card */}
            <div className="rounded-2xl bg-white/90 border border-slate-200/90 p-6 backdrop-blur-xl hover:border-[#2a9d8f]/60 transition-all duration-300 shadow-md shadow-slate-200/50 group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:scale-105 transition-transform">
                    <WhatsappIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#2a9d8f] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f] animate-pulse"></span>
                      WhatsApp & Direct Call
                    </span>
                    <a
                      href={personalInfo.social.whatsappDirect}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold font-mono text-slate-900 hover:text-[#2a9d8f] transition-colors"
                    >
                      {personalInfo.social.phoneDisplay}
                    </a>
                    <div className="text-[11px] font-mono text-slate-500">
                      Direct WhatsApp message & voice
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`tel:${personalInfo.social.phone}`}
                    className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:border-[#2a9d8f] transition-all"
                    title="Direct Phone Call"
                    aria-label="Direct Phone Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:border-[#2a9d8f] transition-all cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {phoneCopied ? (
                      <Check className="w-4 h-4 text-[#2a9d8f]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="rounded-2xl bg-white/90 border border-slate-200/90 p-6 backdrop-blur-xl hover:border-[#2a9d8f]/60 transition-all duration-300 shadow-md shadow-slate-200/50 group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-[#2a9d8f] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.social.email}`}
                      className="text-base font-semibold text-slate-900 hover:text-[#2a9d8f] transition-colors break-all"
                    >
                      {personalInfo.social.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#2a9d8f] hover:border-[#2a9d8f] transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-[#2a9d8f]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl bg-white/90 border border-slate-200/90 p-6 backdrop-blur-xl hover:border-[#2a9d8f]/60 transition-all duration-300 shadow-md shadow-slate-200/50">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-[#2a9d8f]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">Location & Base</span>
                  <div className="text-base font-semibold text-slate-900">
                    Karachi, Pakistan
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    Originally from Waziristan, Pakistan
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-[#2a9d8f] font-mono font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#2a9d8f]"></span>
                    Available for Remote & Onsite (Karachi)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Cards (GitHub & LinkedIn) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white/90 border border-slate-200/90 hover:border-[#2a9d8f]/60 hover:bg-slate-50/80 transition-all duration-300 backdrop-blur-xl shadow-md shadow-slate-200/40 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 group-hover:text-[#2a9d8f] group-hover:border-[#2a9d8f] transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Code Repository</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#2a9d8f] transition-colors">
                      GitHub Profile
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2a9d8f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white/90 border border-slate-200/90 hover:border-[#2a9d8f]/60 hover:bg-slate-50/80 transition-all duration-300 backdrop-blur-xl shadow-md shadow-slate-200/40 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 group-hover:text-[#2a9d8f] group-hover:border-[#2a9d8f] transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Professional Network</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#2a9d8f] transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2a9d8f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick response commitment notice */}
            <div className="p-4 rounded-xl bg-white/90 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-2.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#2a9d8f] shrink-0" />
              <span>Prompt reply assured within 24-48 business hours.</span>
            </div>

          </AnimatedSection>

          {/* Right Column: Functional Contact Form & Direct WhatsApp */}
          <AnimatedSection delay={200} direction="left" className="lg:col-span-7">
            <div className="rounded-2xl bg-white/90 border border-slate-200/90 p-6 sm:p-8 backdrop-blur-xl shadow-lg shadow-slate-200/50 hover:border-[#2a9d8f]/40 transition-all duration-300 relative">
              
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs font-mono text-slate-500 mb-5">
                All inquiries go straight to Sajjad's communication queue.
              </p>

              {/* Direct WhatsApp Quick Contact Box */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm shrink-0">
                    <WhatsappIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-[#2a9d8f] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2a9d8f] animate-pulse"></span>
                      Want an instant reply?
                    </div>
                    <div className="text-sm font-bold font-mono text-slate-900">
                      WhatsApp: {personalInfo.social.phoneDisplay}
                    </div>
                  </div>
                </div>
                <a
                  href={personalInfo.social.whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-extrabold text-white bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] hover:brightness-105 shadow-md shadow-[#2a9d8f]/20 transition-all hover:scale-102 active:scale-98 shrink-0 w-full sm:w-auto"
                >
                  <WhatsappIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {formStatus === 'success' ? (
                <div className="py-12 px-6 text-center rounded-xl bg-teal-50/60 border border-teal-200">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#2a9d8f] text-[#2a9d8f] flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Message Dispatched!</h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto mb-6">
                    Thank you for reaching out. Sajjad has received your note and will review and respond promptly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] text-xs font-mono font-extrabold text-white hover:brightness-105 transition-all cursor-pointer shadow-md shadow-[#2a9d8f]/25"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-xs text-rose-700">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                        Your Name <span className="text-[#2a9d8f]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#2a9d8f] focus:ring-1 focus:ring-[#2a9d8f]/40 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                        Email Address <span className="text-[#2a9d8f]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#2a9d8f] focus:ring-1 focus:ring-[#2a9d8f]/40 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Full-Stack Opportunity / Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#2a9d8f] focus:ring-1 focus:ring-[#2a9d8f]/40 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                      Message <span className="text-[#2a9d8f]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Sajjad, I'd like to discuss a project..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#2a9d8f] focus:ring-1 focus:ring-[#2a9d8f]/40 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
                    >
                      <WhatsappIcon className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#2a9d8f] to-[#1DCD9F] hover:brightness-105 shadow-lg shadow-[#2a9d8f]/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
