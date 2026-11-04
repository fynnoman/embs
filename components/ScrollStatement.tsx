"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IMG, unsplashSrc } from "@/lib/images";

const STATEMENTS = [
  { word: "Bäder.", color: "text-ochre", photo: IMG.badmoebel },
  { word: "Küchen.", color: "text-ember", photo: IMG.kuechen },
  { word: "Treppen.", color: "text-ochre", photo: IMG.innenausbau },
  { word: "Räume.", color: "text-walnut-deep", photo: IMG.moebel },
];

export default function ScrollStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const progress = Math.max(0, Math.min(1, -rect.top / total));
        const idx = Math.min(
          STATEMENTS.length - 1,
          Math.floor(progress * STATEMENTS.length)
        );
        setActiveIdx(idx);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const perState = isMobile ? 70 : 100;

  return (
    <section
      ref={sectionRef}
      className="surface-paper relative"
      style={{ height: `${STATEMENTS.length * perState}vh` }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* Side meta */}
        <div className="pointer-events-none absolute left-5 top-24 z-20 sm:left-6 sm:top-28 md:left-10">
          <p className="caption text-stone-500">Wir bauen</p>
          <div className="mt-3 flex items-center gap-1.5 sm:gap-2">
            {STATEMENTS.map((_, i) => (
              <span
                key={i}
                className={`h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === activeIdx ? "bg-ochre w-8 sm:w-10" : "bg-stone-500/35 w-4 sm:w-6"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-5 top-24 z-20 font-mono text-[0.72rem] tracking-widest text-stone-500 sm:right-6 sm:top-28 sm:text-[0.76rem] md:right-10">
          {String(activeIdx + 1).padStart(2, "0")} /{" "}
          {String(STATEMENTS.length).padStart(2, "0")}
        </div>

        {/* Backdrop photo per state */}
        <div className="pointer-events-none absolute inset-0">
          {STATEMENTS.map((s, i) => (
            <div
              key={s.word}
              className="absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ opacity: i === activeIdx ? 0.2 : 0 }}
              aria-hidden
            >
              <Image
                src={unsplashSrc(s.photo, { w: 1800 })}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/60 to-paper/80" />
            </div>
          ))}
        </div>

        {/* Statement — stacked on mobile, inline on md+ */}
        <div className="relative z-10 mx-auto w-full max-w-8xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col md:block">
            <p className="mega text-[clamp(2.4rem,11vw,11rem)] text-walnut-deep md:inline">
              Wir bauen{" "}
            </p>
            <span className="relative mt-1 inline-block align-top md:mt-0">
              <span className="invisible block mega text-[clamp(2.4rem,11vw,11rem)]">
                {longestWord()}
              </span>
              {STATEMENTS.map((s, i) => (
                <span
                  key={s.word}
                  className={`absolute left-0 top-0 mega text-[clamp(2.4rem,11vw,11rem)] italic transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${s.color}`}
                  style={{
                    opacity: i === activeIdx ? 1 : 0,
                    transform:
                      i === activeIdx
                        ? "translateY(0) scale(1)"
                        : i < activeIdx
                          ? "translateY(-40%) scale(0.96)"
                          : "translateY(40%) scale(0.96)",
                    filter: i === activeIdx ? "blur(0px)" : "blur(6px)",
                  }}
                >
                  {s.word}
                </span>
              ))}
            </span>
          </div>

          <p className="mt-10 max-w-xl text-[1.02rem] leading-relaxed text-stone-700 sm:mt-14 sm:text-[1.1rem] md:mt-16 md:text-[1.25rem]">
            Was bei uns die Werkstatt verlässt, entsteht zwischen Entwurf und
            Montage komplett in einer Hand. Kein Zwischenhandel. Keine
            Abkürzung.
          </p>
        </div>
      </div>
    </section>
  );
}

function longestWord(): string {
  return STATEMENTS.reduce(
    (a, b) => (a.length > b.word.length ? a : b.word),
    ""
  );
}
