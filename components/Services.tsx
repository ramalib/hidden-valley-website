"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "HardiPlank & Fiber Cement Siding",
    desc: "Fiber cement siding is engineered to resist moisture, insects, and temperature swings where vinyl and wood eventually fail. We install HardiPlank and comparable fiber cement profiles.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
      </svg>
    ),
  },
  {
    title: "Vinyl & Aluminum Siding",
    desc: "Not every project calls for fiber cement, and not every budget should stretch for it. We carry a full range of profiles and colors, matched to your home rather than whatever is cheapest on our truck.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Seamless Rain Gutters",
    desc: "We form them on-site, in one continuous piece, to the exact length of your roofline. No joints to pull apart. No seams to clog. Aluminum, in your color, with matching downspouts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19 2 2 0 0 1 10 17.31v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/>
        <path d="M6 8H2v10l4 2V8z"/><line x1="10" y1="8" x2="6" y2="8"/>
      </svg>
    ),
  },
  {
    title: "Soffit & Fascia",
    desc: "Most people ignore soffit and fascia until they rot. These pieces seal the gap between your walls and roofline, and when they fail, the damage spreads fast and quietly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Roofing & Tear-Offs",
    desc: "Shingles, flat roofing, tile, and full tear-offs. Roofing is listed as one of the core services on their public business profiles alongside siding and gutters.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3 11 12 2 21 11 21 22 3 22"/><line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
  },
  {
    title: "Windows, Skirting & More",
    desc: "Swapping windows while you're already doing siding just makes sense. We also handle modular and mobile home skirting, work that most exterior crews won't take on.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-copper font-sans text-xs font-700 uppercase tracking-[0.2em] mb-4">
            <span className="h-px w-6 bg-copper" />
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-ink leading-tight tracking-[-0.02em] max-w-xl mb-3">
            One Number. Six Kinds of Work.
          </h2>
          <p className="font-sans text-ink-sub text-lg leading-[1.7] max-w-xl">
            Stop juggling contractors. We handle siding, gutters, roofing, windows, soffit, fascia, and skirting. One estimate, one crew, one call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="group relative bg-stone rounded-xl p-7 border border-stone-mid hover:border-copper/40 hover:shadow-[0_8px_32px_rgba(184,144,60,0.1)] transition-[border-color,box-shadow] duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-white border border-stone-mid group-hover:border-copper/30 flex items-center justify-center text-copper mb-5 transition-[border-color] duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                {svc.icon}
              </div>
              <h3 className="font-display text-lg font-700 text-ink leading-snug tracking-[-0.01em] mb-2">
                {svc.title}
              </h3>
              <p className="font-sans text-ink-sub text-sm leading-[1.7]">
                {svc.desc}
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-px bg-copper scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-ink-sub text-sm mb-4">
            Not sure what you need? We&apos;ll come out, take a look, and tell you straight. No charge.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate hover:bg-slate-light text-white font-sans font-600 text-sm px-6 py-3 rounded transition-[background-color] duration-200 focus-visible:outline-2 focus-visible:outline-copper"
          >
            Schedule a Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
