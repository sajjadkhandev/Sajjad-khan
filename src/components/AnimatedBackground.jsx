import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground
 * 
 * Deep black futuristic background with modern, premium developer animation:
 * - Pure black canvas (#000000)
 * - Soft electric mint (#1DCD9F) & Persian Green / Java teal (#2a9d8f) glowing gradient blobs
 * - Subtle floating particles and mesh connections
 * - Thin, minimal technology-style laser lines moving in the background
 * - Very subtle dot/grid pattern with low opacity
 * - Gentle mouse-movement interaction
 * - Optimized 60 FPS performance, tab throttling, and prefers-reduced-motion support
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 130,
      active: false
    };

    // Palette for light theme: Pure White #ffffff background with #2a9d8f, #1DCD9F and slate accents
    const particleColorPrefixes = [
      'rgba(42, 157, 143, ',   // Persian Green / Java Teal (#2a9d8f)
      'rgba(29, 205, 159, ',   // Vibrant Mint (#1DCD9F)
      'rgba(100, 116, 139, ',  // Soft Slate gray for depth
      'rgba(14, 165, 233, ',   // Soft Cyan
    ];

    let particles = [];
    let techLines = [];

    const initTechLines = () => {
      // 3-4 minimal tech trace lines gliding along grid coordinates
      techLines = [
        { type: 'h', pos: height * 0.22, speed: 0.35, length: 220, offset: 0, alpha: 0.18, color: 'rgba(42, 157, 143, ' },
        { type: 'h', pos: height * 0.65, speed: -0.28, length: 280, offset: width * 0.5, alpha: 0.15, color: 'rgba(29, 205, 159, ' },
        { type: 'v', pos: width * 0.18, speed: 0.30, length: 200, offset: 0, alpha: 0.16, color: 'rgba(42, 157, 143, ' },
        { type: 'v', pos: width * 0.82, speed: -0.25, length: 240, offset: height * 0.4, alpha: 0.14, color: 'rgba(29, 205, 159, ' },
      ];
    };

    const createParticles = () => {
      const particleCount = width < 640 ? 28 : width < 1024 ? 46 : 64;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const baseAlpha = 0.2 + Math.random() * 0.35;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 1.0 + Math.random() * 1.5,
          colorPrefix: particleColorPrefixes[Math.floor(Math.random() * particleColorPrefixes.length)],
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
          alphaSpeed: 0.008 + Math.random() * 0.012,
          alphaPhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
        });
      }
    };

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      createParticles();
      initTechLines();
    };

    resize();

    // Mouse movement event listener
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Window resize handler with debounced resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Page visibility API handler: pause loop when tab is backgrounded
    let isRunning = true;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Render loop
    let lastTime = performance.now();

    const render = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      ctx.clearRect(0, 0, width, height);

      // If user prefers reduced motion, draw static particles and return
      if (prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorPrefix}0.25)`;
          ctx.fill();
        }
        return;
      }

      // 1. Render tech trace lines gliding along grid coordinates
      for (let i = 0; i < techLines.length; i++) {
        const line = techLines[i];
        line.offset += line.speed * 60 * delta;

        if (line.type === 'h') {
          if (line.speed > 0 && line.offset - line.length > width) line.offset = -line.length;
          if (line.speed < 0 && line.offset < 0) line.offset = width + line.length;

          const grad = ctx.createLinearGradient(line.offset - line.length, 0, line.offset, 0);
          grad.addColorStop(0, `${line.color}0)`);
          grad.addColorStop(0.5, `${line.color}${line.alpha})`);
          grad.addColorStop(1, `${line.color}0)`);

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.0;
          ctx.moveTo(line.offset - line.length, line.pos);
          ctx.lineTo(line.offset, line.pos);
          ctx.stroke();
        } else {
          if (line.speed > 0 && line.offset - line.length > height) line.offset = -line.length;
          if (line.speed < 0 && line.offset < 0) line.offset = height + line.length;

          const grad = ctx.createLinearGradient(0, line.offset - line.length, 0, line.offset);
          grad.addColorStop(0, `${line.color}0)`);
          grad.addColorStop(0.5, `${line.color}${line.alpha})`);
          grad.addColorStop(1, `${line.color}0)`);

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.0;
          ctx.moveTo(line.pos, line.offset - line.length);
          ctx.lineTo(line.pos, line.offset);
          ctx.stroke();
        }
      }

      // 2. Draw subtle mesh lines between close particles
      const maxDistance = width < 640 ? 85 : 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(29, 205, 159, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Render & update floating particles with mouse interaction
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smooth drift
        p.x += p.vx * 60 * delta;
        p.y += p.vy * 60 * delta;

        // Subtle alpha breathing (gentle fade in and out)
        p.alphaPhase += p.alphaSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.alphaPhase) * 0.08;

        // Subtle mouse interaction: gentle pull without sudden moves
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 0.009;
            p.x += dx * force;
            p.y += dy * force;
          }
        }

        // Seamless wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${Math.max(0.08, p.alpha)})`;
        ctx.fill();
      }

      if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#ffffff]"
    >
      {/* Very Subtle Dot / Grid Pattern on White Canvas */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-60" />
      <div className="absolute inset-0 bg-tech-dots-light opacity-50" />

      {/* Ambient Floating Gradient Glow Blobs in #2a9d8f and #1DCD9F for White Theme */}
      {/* Blob 1: Persian Green Glow (Top Left) */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-tr from-[#2a9d8f]/12 via-[#1DCD9F]/08 to-transparent blur-3xl animate-orb-float-1 pointer-events-none" />

      {/* Blob 2: Soft Mint / Cyan (Top Right) */}
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-bl from-[#1DCD9F]/12 via-[#2a9d8f]/08 to-transparent blur-3xl animate-orb-float-2 pointer-events-none" />

      {/* Blob 3: Vibrant Mint Glow (Bottom Center / Left) */}
      <div className="absolute -bottom-36 left-1/3 -translate-x-1/2 w-[650px] h-[650px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-t from-[#2a9d8f]/10 via-[#1DCD9F]/06 to-transparent blur-3xl animate-orb-float-3 pointer-events-none" />

      {/* Blob 4: Soft Teal Glow (Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#2a9d8f]/08 via-emerald-100/30 to-transparent blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Canvas for Particles, Mesh Connections & Animated Tech Lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
}
