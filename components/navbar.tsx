"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-white"
          onClick={handleClose}
        >
          Emmanuel <span className="text-sky-400">Asuquo</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:emmanueldan0920@gmail.com"
            className="hidden rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5 md:inline-flex"
          >
            Let’s Talk
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white transition hover:bg-white/8 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/8 bg-slate-950/95 transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell py-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="rounded-2xl border border-transparent px-4 py-3 text-base text-slate-200 transition hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="mailto:emmanueldan0920@gmail.com"
              onClick={handleClose}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-base font-semibold text-slate-950 transition hover:opacity-90"
            >
              Let’s Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}