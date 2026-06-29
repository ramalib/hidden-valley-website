"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    accent: "2011",
    accentSub: "founded",
    title: "Family-Owned Since 2011",
    body: "Hidden Valley was founded by Collin and Lonnette Christison and is still run by them today. When you call, you&apos;re dealing with the people whose name is on the business.",
  },
  {
    accent: "$0",
    accentSub: "to find out",
    title: "Free Estimates, No Obligation",
    body: "Every estimate is free. We come out, look at what you have, and give you a number. No deposit required to get started, and no pressure to commit on the spot.",
  },
  {
    accent: "0",
    accentSub: "sales pressure",
    title: "No Pressure Sales",
    body: "Reviewers describe the experience as informative, not pressured. You&apos;ll hear what they find and what it would cost. The decision is entirely yours, on your timeline.",
  },
  {
    accent: "Next",
    accentSub: "day response",
    title: "They Show Up",
    body: "One Google reviewer described having urgent water damage while the crew was booked 11 weeks out, but they still came the next day. That&apos;s a single review, not a guarantee, but it&apos;s what was said.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-stone" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-copper font-sans text-xs font-700 uppercase tracking-[0.2em] mb-4">
            <span className="h-px w-6 bg-copper" />
            Why Hidden Valley
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-ink leading-tight tracking-[-0.02em] max-w-xl mb-3">
            What Makes Us Different Isn&apos;t the Work.
          </h2>
          <p className="font-sans text-ink-sub text-lg leading-[1.7] max-w-xl">
            Any decent crew can install siding. What separates us is everything that happens before, during, and after.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl p-7 border border-stone-mid shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex flex-col"
            >
              <div className="mb-5">
                <span className="font-display text-4xl font-800 copper-text leading-none">{p.accent}</span>
                <span className="font-sans text-ink-muted text-xs font-600 uppercase tracking-[0.15em] ml-2 align-middle">{p.accentSub}</span>
              </div>
              <h3 className="font-display text-lg font-700 text-ink leading-snug mb-3" dangerouslySetInnerHTML={{ __html: p.title }} />
              <p className="font-sans text-ink-sub text-sm leading-[1.7] flex-1" dangerouslySetInnerHTML={{ __html: p.body }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
