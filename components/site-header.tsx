"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#prica", label: "Priča" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FBF3E6]/92 backdrop-blur-md shadow-[0_1px_0_var(--surface-line)] py-3.5" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-2xl tracking-tight" style={{ color: "var(--foreground)" }}>
          Tork<span style={{ color: "var(--ember)" }}>u</span>l
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.84rem] tracking-wide transition-colors hover:text-[var(--ember)]"
              style={{ color: "var(--muted-foreground)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full border px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.12em] transition-all hover:bg-[var(--ember)] hover:text-[var(--background)] hover:border-[var(--ember)]"
            style={{ borderColor: "var(--button-ghost-border)", color: "var(--ember)" }}
          >
            Rezerviraj stol
          </a>
        </nav>

        <button
          aria-label="Izbornik"
          className="md:hidden z-50 text-2xl"
          style={{ color: "var(--foreground)" }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>

      <nav
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#FBF3E6] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-xl"
            style={{ color: "var(--foreground)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={() => setOpen(false)}
          className="rounded-full px-6 py-3 text-sm uppercase tracking-[0.12em]"
          style={{ background: "var(--ember)", color: "var(--background)" }}
        >
          Rezerviraj stol
        </a>
      </nav>
    </>
  );
}
