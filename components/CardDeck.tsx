"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BEREICHE } from "@/lib/data";
import { bereichImage, unsplashSrc } from "@/lib/images";

/**
 * Click-through card stack with pointer-based swipe gestures.
 * Front card routes to the Bereich. Behind cards promote to front on click.
 * Swipe horizontally to cycle. Arrow keys also cycle.
 */
export default function CardDeck() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const dragStart = useRef<{ x: number; t: number; id: number } | null>(null);
  const n = BEREICHE.length;

  const next = useCallback(() => setActive((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setActive((i) => (i - 1 + n) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (dragStart.current) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStart.current = {
      x: e.clientX,
      t: performance.now(),
      id: e.pointerId,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStart.current || dragStart.current.id !== e.pointerId) return;
    const delta = e.clientX - dragStart.current.x;
    setDrag(Math.max(-220, Math.min(220, delta)));
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragStart.current || dragStart.current.id !== e.pointerId) return;
    const dx = e.clientX - dragStart.current.x;
    const dt = performance.now() - dragStart.current.t;
    const velocity = Math.abs(dx) / Math.max(1, dt);
    dragStart.current = null;
    setDrag(0);
    const threshold = 55;
    if (Math.abs(dx) > threshold || velocity > 0.35) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <div
      className="relative h-full w-full select-none touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        className="relative mx-auto h-full w-full"
        style={{ perspective: "1800px" }}
      >
        {BEREICHE.map((b, idx) => {
          const rel = positionOf(idx, active, n);
          return (
            <Card
              key={b.slug}
              bereich={b}
              rel={rel}
              drag={drag}
              isFront={rel === 0}
              onClickBack={() => setActive(idx)}
            />
          );
        })}
      </div>

      {/* Controls + indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-1">
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Vorheriger Bereich"
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-walnut-deep/20 bg-paper/75 text-walnut-deep backdrop-blur-sm transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre hover:bg-paper active:scale-[0.94]"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            aria-label="Nächster Bereich"
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-walnut-deep/20 bg-paper/75 text-walnut-deep backdrop-blur-sm transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-ochre hover:bg-paper active:scale-[0.94]"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
        <div className="pointer-events-auto text-right">
          <p className="font-mono text-[0.68rem] tracking-[0.22em] text-stone-500">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </p>
          <div className="mt-2 flex justify-end gap-1.5">
            {BEREICHE.map((_, i) => (
              <span
                key={i}
                className={`h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === active ? "bg-ochre w-6" : "bg-stone-500/40 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Swipe hint for first-time mobile viewers */}
      <div className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2 md:hidden">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-walnut-deep/15 bg-paper/70 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.22em] text-stone-500 backdrop-blur-sm">
          <span aria-hidden>←</span>
          WISCHEN
          <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );
}

function positionOf(idx: number, active: number, n: number): number {
  let d = idx - active;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

type CardProps = {
  bereich: (typeof BEREICHE)[number];
  rel: number;
  drag: number;
  isFront: boolean;
  onClickBack: () => void;
};

function Card({ bereich, rel, drag, isFront, onClickBack }: CardProps) {
  const visible = Math.abs(rel) <= 2;
  const dragFactor = isFront ? 1 : Math.abs(rel) === 1 ? 0.5 : 0.25;
  const dragX = drag * dragFactor;

  const transform =
    rel === 0
      ? `translate3d(${dragX}px, 0, 0) rotate(${drag * -0.015}deg) scale(1)`
      : rel === 1
        ? `translate3d(calc(14% + ${dragX}px), -4%, -80px) rotate(3deg) scale(0.92)`
        : rel === 2
          ? `translate3d(calc(22% + ${dragX}px), -6%, -160px) rotate(6deg) scale(0.84)`
          : rel === -1
            ? `translate3d(calc(-16% + ${dragX}px), 4%, -80px) rotate(-7deg) scale(0.92)`
            : rel === -2
              ? `translate3d(calc(-26% + ${dragX}px), 8%, -160px) rotate(-10deg) scale(0.82)`
              : "translate3d(0, 0, -300px) scale(0.6)";

  const opacity =
    rel === 0 ? 1 : Math.abs(rel) === 1 ? 0.78 : Math.abs(rel) === 2 ? 0.4 : 0;
  const zIndex = 10 - Math.abs(rel);
  const blur = rel === 0 ? 0 : Math.abs(rel) === 1 ? 2 : 4;

  const inner = (
    <div
      className="relative h-full w-full overflow-hidden rounded-[22px] bg-walnut-deep shadow-[0_32px_80px_-24px_rgba(26,17,10,0.45),0_8px_24px_-8px_rgba(26,17,10,0.3)] ring-1 ring-walnut-deep/15"
      style={{ filter: blur ? `blur(${blur}px)` : undefined }}
    >
      <Image
        src={unsplashSrc(bereichImage(bereich.slug), { w: 900 })}
        alt={bereich.title}
        fill
        sizes="(max-width: 768px) 80vw, 460px"
        className="object-cover"
        priority={isFront}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep via-walnut-deep/40 to-walnut-deep/5" />
      {rel === 0 && (
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 100%, rgba(176, 122, 53, 0.35) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.72rem] tracking-[0.24em] text-paper/80">
            {bereich.number}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/25 bg-walnut-deep/60 px-3 py-1 backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-ochre-soft" />
            <span className="font-mono text-[0.66rem] tracking-[0.2em] text-paper/70">
              EMBS
            </span>
          </span>
        </div>

        <div>
          <p className="caption text-paper/55">{bereich.kicker}</p>
          <h3 className="display mt-3 text-[clamp(1.5rem,2.8vw,2.3rem)] text-paper">
            {bereich.title}
          </h3>
          {rel === 0 && (
            <p className="mt-4 max-w-[90%] text-[0.9rem] leading-relaxed text-paper/75 md:text-[0.94rem]">
              {bereich.claim}
            </p>
          )}
          <div className="mt-5 flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.22em] transition-opacity md:text-[0.7rem] ${
                rel === 0 ? "text-paper/70 opacity-100" : "opacity-0"
              }`}
            >
              <span className="h-[2px] w-5 bg-ochre-soft" />
              ZUM BEREICH
            </span>
            <span
              aria-hidden
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                rel === 0
                  ? "border-ochre-soft text-ochre-soft"
                  : "border-paper/25 text-paper/50"
              }`}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const baseClasses =
    "absolute left-1/2 top-1/2 h-[90%] w-[88%] md:h-[92%] md:w-[80%] origin-center";

  const style: React.CSSProperties = {
    transform: `translate(-50%, -50%) ${transform}`,
    opacity: visible ? opacity : 0,
    zIndex,
    pointerEvents: visible ? "auto" : "none",
    transition: drag
      ? "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1), filter 500ms cubic-bezier(0.23, 1, 0.32, 1)"
      : "transform 720ms cubic-bezier(0.23, 1, 0.32, 1), opacity 500ms cubic-bezier(0.23, 1, 0.32, 1), filter 500ms cubic-bezier(0.23, 1, 0.32, 1)",
    transformStyle: "preserve-3d",
    willChange: "transform, opacity",
  };

  if (isFront) {
    return (
      <Link
        href={`/werk/${bereich.slug}`}
        className={`${baseClasses} cursor-pointer active:scale-[0.985]`}
        style={style}
        aria-label={`Zum Bereich ${bereich.title}`}
        draggable={false}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClickBack}
      className={`${baseClasses} cursor-pointer`}
      style={style}
      aria-label={`${bereich.title} nach vorne holen`}
      tabIndex={visible ? 0 : -1}
    >
      {inner}
    </button>
  );
}
