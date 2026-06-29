export default function Footer() {
  const services = [
    "HardiPlank Siding",
    "Vinyl & Aluminum Siding",
    "Seamless Rain Gutters",
    "Soffit & Fascia",
    "Roofing & Tear-Offs",
    "Windows",
    "Mobile Home Skirting",
  ];

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#system" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Free Estimate", href: "#contact" },
  ];

  return (
    <footer className="bg-slate border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded bg-copper flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(176,115,56,0.35)]">
                <span className="text-white font-display font-bold text-sm">HV</span>
              </div>
              <div>
                <p className="text-white font-display font-700 text-sm leading-tight">Hidden Valley</p>
                <p className="text-stone-dark/50 font-sans text-[10px] uppercase tracking-[0.12em]">Siding &amp; Rain Gutter</p>
              </div>
            </div>
            <p className="font-sans text-stone-dark/55 text-sm leading-[1.7] mb-5">
              Family-owned exterior contractor serving West Jordan and the Salt Lake Valley since 2011.
            </p>
            <a
              href="tel:8018334492"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-sans font-700 text-base transition-[color] duration-200"
            >
              (801) 833-4492
            </a>
          </div>

          {/* Services col */}
          <div>
            <h4 className="font-sans text-xs font-700 text-stone-dark/50 uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="font-sans text-stone-dark/65 hover:text-white text-sm transition-[color] duration-150">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col */}
          <div>
            <h4 className="font-sans text-xs font-700 text-stone-dark/50 uppercase tracking-[0.15em] mb-5">Navigate</h4>
            <ul className="flex flex-col gap-2.5">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="font-sans text-stone-dark/65 hover:text-white text-sm transition-[color] duration-150">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="font-sans text-xs font-700 text-stone-dark/50 uppercase tracking-[0.15em] mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-stone-dark/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:8018334492" className="font-sans text-stone-dark/70 hover:text-white text-sm transition-[color] duration-150">
                  (801) 833-4492
                </a>
              </div>
              <div>
                <p className="font-sans text-stone-dark/40 text-xs uppercase tracking-wider mb-1">Address</p>
                <address className="not-italic font-sans text-stone-dark/70 text-sm leading-[1.6]">
                  7688 S 2450 W<br />
                  West Jordan, UT 84084
                </address>
              </div>
              <div>
                <p className="font-sans text-stone-dark/40 text-xs uppercase tracking-wider mb-1">Service Area</p>
                <p className="font-sans text-stone-dark/70 text-sm">West Jordan &amp; Salt Lake Valley</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-stone-dark/35 text-xs">
            © {new Date().getFullYear()} Hidden Valley Siding and Seamless Rain Gutter, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-copper/15 border border-copper/25 text-copper text-[10px] font-sans font-700 uppercase tracking-widest px-3 py-1.5 rounded-full">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-stone-dark/50 text-[10px] font-sans font-600 uppercase tracking-widest px-3 py-1.5 rounded-full">
              2026 Best of SLC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
