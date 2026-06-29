"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#system" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-slate/95 backdrop-blur-sm shadow-[0_2px_24px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group" aria-label="Hidden Valley Siding home">
          <div className="w-9 h-9 rounded bg-copper flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(176,115,56,0.4)]">
            <span className="text-white font-display font-bold text-sm leading-none">HV</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-bold text-base leading-tight tracking-tight">Hidden Valley</span>
            <span className="text-stone-dark text-[10px] font-sans font-500 uppercase tracking-[0.12em] leading-tight">Siding &amp; Rain Gutter</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-stone-dark/80 hover:text-white text-sm font-sans font-500 tracking-wide transition-[color] duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:8018334492"
          className="hidden md:flex items-center gap-2 bg-copper hover:bg-copper-light text-white text-sm font-sans font-600 px-5 py-2.5 rounded transition-[background-color,transform,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(176,115,56,0.45)] active:scale-95"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
          </svg>
          (801) 833-4492
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-copper rounded"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate/98 backdrop-blur-sm border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-dark/80 hover:text-white font-sans font-500 text-base py-1 transition-[color] duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8018334492"
            className="mt-2 flex items-center justify-center gap-2 bg-copper text-white font-sans font-600 py-3 px-4 rounded text-base"
          >
            Call (801) 833-4492
          </a>
        </div>
      )}
    </header>
  );
}
