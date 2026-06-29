"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate">
      {/* Siding texture overlay */}
      <div className="absolute inset-0 siding-texture pointer-events-none" />

      {/* House illustration — faint background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <HouseIllustration />
      </div>

      {/* Center darkening — text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 48%, rgba(8,18,12,0.72) 0%, transparent 100%)" }}
      />

      {/* Radial gold glow — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(184,144,60,0.18) 0%, transparent 65%)" }}
      />

      {/* Content — centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0.05}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-copper" />
            <span className="text-copper font-sans text-xs font-600 uppercase tracking-[0.22em]">
              West Jordan, Utah · Est. 2011
            </span>
            <span className="h-px w-8 bg-copper" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={0.18}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-800 tracking-[-0.025em] leading-[1.05] mb-8"
            style={{ textShadow: "0 2px 32px rgba(0,0,0,0.6)" }}
          >
            <span className="block text-white">Your Exterior,</span>
            <span className="block copper-text">Top to Bottom.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0.35}
            className="font-sans text-base md:text-lg text-white/90 leading-[1.8] mb-11 max-w-lg mx-auto"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
          >
            Siding, seamless gutters, roofing, soffit, windows, and skirting.
            Family-owned in West Jordan since 2011. One estimate covers all of it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0.55}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-light text-white font-sans font-700 text-base px-8 py-4 rounded transition-[background-color,box-shadow] duration-200 hover:shadow-[0_8px_40px_rgba(184,144,60,0.45)] active:scale-95 focus-visible:outline-2 focus-visible:outline-copper"
            >
              Get a Free Estimate
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a
              href="tel:8018334492"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-sans font-600 text-base px-8 py-4 rounded transition-[border-color,background-color] duration-200 hover:bg-white/6 active:scale-95 focus-visible:outline-2 focus-visible:outline-white/40"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" /></svg>
              (801) 833-4492
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(26,48,40,0.5))" }}
      />
    </section>
  );
}

function HouseIllustration() {
  return (
    <svg viewBox="0 0 520 440" width="800" height="680" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="260,30 460,180 60,180" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" />
      <line x1="260" y1="30" x2="260" y2="50" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="58" y="177" width="404" height="8" rx="2" fill="rgba(255,255,255,0.7)" />
      <rect x="70" y="185" width="380" height="230" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1="70" y1={185 + (i + 1) * 16} x2="450" y2={185 + (i + 1) * 16} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      ))}
      <rect x="105" y="220" width="90" height="80" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
      <line x1="150" y1="220" x2="150" y2="300" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <line x1="105" y1="260" x2="195" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <rect x="325" y="220" width="90" height="80" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
      <line x1="370" y1="220" x2="370" y2="300" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <line x1="325" y1="260" x2="415" y2="260" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <rect x="215" y="310" width="90" height="105" rx="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
      <circle cx="296" cy="362" r="3" fill="rgba(255,255,255,0.8)" />
      <line x1="70" y1="193" x2="450" y2="193" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <rect x="60" y="415" width="400" height="12" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="66" y="185" width="8" height="232" rx="2" fill="rgba(255,255,255,0.5)" />
      <rect x="446" y="185" width="8" height="232" rx="2" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}
