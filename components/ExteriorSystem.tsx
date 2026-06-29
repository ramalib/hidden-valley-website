"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const layers = [
  {
    position: "01",
    name: "Roofing",
    detail: "The first line of defense. When it fails, every layer below it pays the price.",
    dotColor: "bg-copper",
  },
  {
    position: "02",
    name: "Soffit & Fascia",
    detail: "Seals the roofline. When fascia rots, it exposes rafter tails and the damage spreads from there.",
    dotColor: "bg-copper/80",
  },
  {
    position: "03",
    name: "Seamless Gutters",
    detail: "Channels water away from your walls and foundation. An overflowing gutter is a slow rot machine.",
    dotColor: "bg-copper",
  },
  {
    position: "04",
    name: "Siding",
    detail: "Your home's skin. Cracked or failing siding is an open invitation for moisture and pests.",
    dotColor: "bg-copper/70",
  },
  {
    position: "05",
    name: "Windows",
    detail: "Improperly flashed windows are one of the most common sources of hidden water damage.",
    dotColor: "bg-copper/60",
  },
  {
    position: "06",
    name: "Skirting",
    detail: "For modular and mobile homes. The base layer that seals the undercarriage from weather and critters.",
    dotColor: "bg-copper/50",
  },
];

export default function ExteriorSystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="system" className="py-24 lg:py-32 bg-slate" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-copper font-sans text-xs font-700 uppercase tracking-[0.2em] mb-5">
              <span className="h-px w-6 bg-copper" />
              How It All Connects
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-800 text-white leading-tight tracking-[-0.02em] mb-6">
              Your House Has Six Weak Points.{" "}
              <em className="not-italic copper-text">We Cover All of Them.</em>
            </h2>
            <p className="font-sans text-white/70 text-lg leading-[1.75] mb-5">
              Every layer of your exterior depends on the one above it. When a gutter overflows, it damages the fascia. When the fascia rots, it exposes the rafter. When the siding fails, moisture finds the wall.
            </p>
            <p className="font-sans text-white/50 text-base leading-[1.7] mb-8">
              Hidden Valley manages every layer, so nothing gets handed off to a different crew two years later because something was missed the first time.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white font-sans font-600 text-sm px-6 py-3.5 rounded transition-[background-color,box-shadow] duration-200 hover:shadow-[0_4px_20px_rgba(184,144,60,0.4)] focus-visible:outline-2 focus-visible:outline-copper active:scale-95"
            >
              Get a Free Estimate
            </a>
          </motion.div>

          {/* Right: layer diagram */}
          <div className="relative">
            <motion.div
              className="absolute left-[18px] top-5 bottom-5 w-px bg-gradient-to-b from-copper via-copper/40 to-transparent"
              initial={{ scaleY: 0, originY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="flex flex-col gap-0">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-5 pl-10 py-5 ${i < layers.length - 1 ? "border-b border-white/8" : ""}`}
                >
                  <div className={`absolute left-[13px] top-[22px] w-[11px] h-[11px] rounded-full border-2 border-slate ${layer.dotColor} flex-shrink-0`} />
                  <span className="flex-shrink-0 font-sans text-xs font-700 text-copper/60 tracking-widest pt-0.5 w-4">
                    {layer.position}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-700 text-white leading-tight mb-1">
                      {layer.name}
                    </h3>
                    <p className="font-sans text-white/50 text-sm leading-[1.6]">
                      {layer.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
