"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate overflow-hidden" ref={ref}>
      {/* Siding texture */}
      <div className="absolute inset-0 siding-texture pointer-events-none opacity-60" />

      {/* Copper glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(176,115,56,0.15) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-copper font-sans text-xs font-700 uppercase tracking-[0.2em] mb-5">
              <span className="h-px w-6 bg-copper" />
              Free Estimate
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white leading-tight tracking-[-0.02em] mb-6">
              Start with a<br />
              <em className="not-italic copper-text">Free Estimate.</em>
            </h2>
            <p className="font-sans text-stone-dark/70 text-lg leading-[1.75] mb-8 max-w-md">
              Here&apos;s what happens: you fill this out or call us. We come out, look at what you&apos;re actually
              working with, and give you a straight number. No obligation. No follow-up if you&apos;re not ready.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="tel:8018334492"
                className="group inline-flex items-center gap-4 text-white hover:text-copper transition-[color] duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-copper/20 group-hover:bg-copper/30 border border-copper/30 flex items-center justify-center flex-shrink-0 transition-[background-color] duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs font-600 uppercase tracking-[0.15em] text-copper/80 mb-0.5">Call or Text</p>
                  <p className="font-display text-2xl font-700 leading-none">(801) 833-4492</p>
                </div>
              </a>

              <div className="inline-flex items-center gap-4 text-stone-dark/60">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs font-600 uppercase tracking-[0.15em] text-stone-dark/50 mb-0.5">Location</p>
                  <p className="font-sans text-sm text-stone-dark/70">7688 S 2450 W, West Jordan, UT 84084</p>
                </div>
              </div>
            </div>

            <p className="font-sans text-stone-dark/40 text-xs">
              Free estimates on every job. No high-pressure tactics. Ever.
            </p>
          </motion.div>

          {/* Right: Simple form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-display text-2xl font-700 text-white mb-1">Request a Free Estimate</h3>
              <p className="font-sans text-stone-dark/55 text-sm mb-7">We&apos;ll get back to you within one business day.</p>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-600 text-stone-dark/60 uppercase tracking-[0.12em] mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-stone-dark/35 font-sans text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-copper/60 focus:bg-white/10 transition-[border-color,background-color] duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-600 text-stone-dark/60 uppercase tracking-[0.12em] mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(801) 000-0000"
                      required
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-stone-dark/35 font-sans text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-copper/60 focus:bg-white/10 transition-[border-color,background-color] duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-600 text-stone-dark/60 uppercase tracking-[0.12em] mb-2" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full bg-white/8 border border-white/15 text-white font-sans text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-copper/60 transition-[border-color] duration-200 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate">Select a service…</option>
                    <option value="siding" className="bg-slate">Siding Installation</option>
                    <option value="gutters" className="bg-slate">Seamless Rain Gutters</option>
                    <option value="roofing" className="bg-slate">Roofing</option>
                    <option value="soffit-fascia" className="bg-slate">Soffit &amp; Fascia</option>
                    <option value="windows" className="bg-slate">Windows</option>
                    <option value="skirting" className="bg-slate">Mobile Home Skirting</option>
                    <option value="other" className="bg-slate">Not sure, need an assessment</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-600 text-stone-dark/60 uppercase tracking-[0.12em] mb-2" htmlFor="message">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Address, scope, timeline, or any questions…"
                    className="w-full bg-white/8 border border-white/15 text-white placeholder:text-stone-dark/35 font-sans text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-copper/60 focus:bg-white/10 transition-[border-color,background-color] duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-copper hover:bg-copper-light text-white font-sans font-700 text-base py-4 rounded-lg transition-[background-color,transform,box-shadow] duration-200 hover:shadow-[0_6px_24px_rgba(176,115,56,0.45)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-copper mt-1"
                >
                  Send Estimate Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
