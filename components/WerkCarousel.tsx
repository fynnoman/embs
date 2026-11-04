"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BEREICHE } from "@/lib/data";
import { bereichImage, unsplashSrc } from "@/lib/images";

export default function WerkCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-8 flex items-end justify-between gap-6 px-5 sm:mb-10 sm:px-6 md:px-10">
        <div>
          <p className="caption text-ochre">Werk</p>
          <h2 className="display mt-3 text-[clamp(2.2rem,5.5vw,5.2rem)] text-walnut-deep sm:mt-4">
            Acht Bereiche.
            <br />
            <span className="italic text-ochre">Eine Handschrift.</span>
          </h2>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Zurück"
            onClick={() => scrollBy(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-walnut-deep/20 text-walnut-deep transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre hover:bg-walnut-deep/5 active:scale-95"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            aria-label="Vor"
            onClick={() => scrollBy(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-walnut-deep/20 text-walnut-deep transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre hover:bg-walnut-deep/5 active:scale-95"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="h-scroll no-scrollbar flex gap-4 px-5 pb-4 sm:gap-5 sm:px-6 md:gap-7 md:px-10"
      >
        {BEREICHE.map((b, idx) => (
          <Link
            key={b.slug}
            href={`/werk/${b.slug}`}
            className="group relative flex h-[420px] w-[84vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 active:scale-[0.99] sm:h-[460px] sm:w-[82vw] sm:p-7 md:h-[540px] md:w-[460px] md:p-9"
          >
            <Image
              src={unsplashSrc(bereichImage(b.slug), { w: 1200 })}
              alt={b.title}
              fill
              sizes="(max-width: 768px) 82vw, 460px"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep via-walnut-deep/55 to-walnut-deep/5" />
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(70% 55% at 30% 90%, rgba(176, 122, 53, 0.35) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[0.72rem] tracking-widest text-paper/85">
                {b.number}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/35 bg-walnut-deep/40 text-paper/90 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-ochre-soft group-hover:text-ochre-soft group-hover:rotate-[-45deg]">
                <span aria-hidden>→</span>
              </span>
            </div>

            <div className="relative">
              <p className="caption text-paper/70">{b.kicker}</p>
              <h3 className="display mt-3 text-[clamp(2rem,3vw,2.6rem)] text-paper">
                {b.title}
              </h3>
              <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-paper/80">
                {b.claim}
              </p>
            </div>

            <span className="absolute bottom-4 left-9 inline-flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-ochre-soft" />
              <span className="font-mono text-[0.68rem] tracking-widest text-paper/70">
                {String(idx + 1).padStart(2, "0")} / 08
              </span>
            </span>
          </Link>
        ))}

        <Link
          href="/werk"
          className="group flex h-[420px] w-[84vw] shrink-0 flex-col justify-between rounded-3xl border border-walnut-deep/20 bg-paper-bone p-6 transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre sm:h-[460px] sm:w-[82vw] sm:p-7 md:h-[540px] md:w-[460px] md:p-9"
        >
          <span className="font-mono text-[0.72rem] tracking-widest text-ochre">
            INDEX
          </span>
          <div>
            <p className="caption text-stone-500">Alle Bereiche</p>
            <h3 className="display mt-3 text-[clamp(2rem,3vw,2.6rem)] text-walnut-deep">
              Übersicht.
            </h3>
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-stone-700">
              Das gesamte Werk auf einer Seite.
            </p>
            <span className="mt-8 inline-flex items-center gap-3 text-walnut-deep transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1">
              <span>Zum Werk</span>
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
