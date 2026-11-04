"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BEREICHE } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled || open
            ? "border-b border-walnut-deep/10 bg-paper/85 backdrop-blur-xl py-3"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="group inline-flex items-baseline gap-3 text-walnut-deep transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
          >
            <span className="font-display text-[1.4rem] italic leading-none tracking-tightest">
              Embs.
            </span>
            <span className="caption hidden text-stone-500 md:inline">
              Seit 1998
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-[0.95rem] text-walnut-deep/85 md:flex">
            <Link
              href="/werk"
              className="transition-colors duration-200 hover:text-ochre"
            >
              Werk
            </Link>
            <Link
              href="/werkstatt"
              className="transition-colors duration-200 hover:text-ochre"
            >
              Werkstatt
            </Link>
            <Link
              href="/kontakt"
              className="transition-colors duration-200 hover:text-ochre"
            >
              Kontakt
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+4968937065 6"
              className="hidden items-center gap-2 rounded-full border border-walnut-deep/20 px-4 py-2.5 font-mono text-[0.76rem] tracking-widest text-walnut-deep/85 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre hover:text-ochre active:scale-[0.97] md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
              06893 · 70656
            </a>

            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-walnut-deep/20 text-walnut-deep transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre active:scale-[0.95] md:hidden"
              onClick={() => setOpen((s) => !s)}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 right-0 top-0 h-px bg-walnut-deep transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 bottom-0 h-px bg-walnut-deep transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          opacity: open ? 1 : 0,
          transition: "opacity 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-paper" />
        <div className="relative flex h-full flex-col overflow-y-auto overscroll-contain px-6 pb-10 pt-24">
          <ul className="flex flex-col gap-3 text-walnut-deep">
            {[
              { href: "/", label: "Start" },
              { href: "/werk", label: "Werk" },
              { href: "/werkstatt", label: "Werkstatt" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block py-1 font-display text-[2.6rem] italic leading-tight tracking-tightest text-walnut-deep active:text-ochre"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-walnut-deep/15 pt-6">
            <p className="caption mb-4 text-stone-500">Bereiche</p>
            <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {BEREICHE.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/werk/${b.slug}`}
                    className="flex items-baseline gap-3 py-2.5 text-[0.98rem] text-walnut-deep/85 active:text-ochre"
                  >
                    <span className="font-mono text-[0.7rem] tracking-widest text-ochre">
                      {b.number}
                    </span>
                    <span>{b.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-col gap-1 pt-6 text-[0.95rem] text-stone-500">
            <a href="tel:+49689370656" className="py-2 text-walnut-deep">
              06893 · 70656
            </a>
            <a href="mailto:info@schreinerei-embs.de" className="py-2">
              info@schreinerei-embs.de
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
