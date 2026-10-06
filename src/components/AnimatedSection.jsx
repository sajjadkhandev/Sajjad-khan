import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Reusable scroll-reveal component powered by GSAP and ScrollTrigger.
 * Smoothly animates content into view with high-fidelity easing and full accessibility.
 */
export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  yOffset = 35,
  duration = 0.85,
  direction = 'up' // 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // Accessibility check: disable motion for users preferring reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = yOffset;
    else if (direction === 'down') initialY = -yOffset;
    else if (direction === 'left') initialX = yOffset;
    else if (direction === 'right') initialX = -yOffset;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: 0.98
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: duration,
        delay: delay / 1000,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      }
    );
  }, { scope: containerRef, dependencies: [delay, yOffset, duration, direction] });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
