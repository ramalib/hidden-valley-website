"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    quote:
      "They walked us through everything patiently, took their time to make sure we understood exactly what was being done and why. Felt informed, not pressured.",
    attribution: "Google Reviewer · West Jordan, UT",
  },
  {
    quote:
      "We had water damage and needed help fast. They were 11 weeks out on their schedule, but they came the very next day because of our situation. That's real customer service.",
    attribution: "Google Reviewer · West Jordan, UT",
  },
  {
    quote:
      "Excellent job. Professional team, quality work, and great pricing. We'd recommend them to anyone in the Salt Lake area without hesitation.",
    attribution: "Google Reviewer · Salt Lake Valley, UT",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-copper font-sans text-xs font-700 uppercase tracking-[0.2em] mb-4">
            <span className="h-px w-6 bg-copper" />
            Customer Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-ink leading-tight tracking-[-0.02em] mb-3">
            In Their Own Words.
          </h2>
          <p className="font-sans text-ink-sub text-lg leading-[1.7] max-w-lg">
            We didn&apos;t write these. We just tried to earn them.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="bg-stone rounded-xl p-8 border border-stone-mid flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#B8903C" stroke="none" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              {/* Opening quote mark */}
              <div className="font-display text-5xl leading-none text-copper/30 mb-4 select-none">&ldquo;</div>
              <blockquote className="font-sans text-ink-sub text-sm leading-[1.8] flex-1 mb-6">
                {r.quote}
              </blockquote>
              <figcaption className="font-sans text-ink-muted text-xs font-600 tracking-wide uppercase border-t border-stone-mid pt-4">
                {r.attribution}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-stone-mid"
        >
          <p className="font-sans text-ink-muted text-xs">
            Reviews reflect customer feedback gathered from Google and verified review platforms.
          </p>
          <span className="inline-flex items-center gap-2 bg-stone border border-stone-mid text-copper text-xs font-sans font-700 uppercase tracking-widest px-4 py-2 rounded-full">
            2026 Best of SLC
          </span>
        </motion.div>
      </div>
    </section>
  );
}
