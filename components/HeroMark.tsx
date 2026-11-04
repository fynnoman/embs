"use client";

import { useEffect, useRef } from "react";

/**
 * Word-level clip-path reveal. Horizontal clip-path insets are negative
 * so italic overhangs on letters like "s" never get cut off.
 */
export default function HeroMark() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.querySelectorAll(".hero-word").forEach((w, i) => {
        setTimeout(() => w.classList.add("is-visible"), i * 220 + 100);
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <h1
      ref={ref}
      className="mega text-[clamp(2.4rem,13vw,13rem)] text-walnut-deep"
    >
      <span className="block">
        <span className="hero-word">Schreinerei</span>
      </span>
      <span className="block">
        <span className="hero-word italic text-ochre">Embs.</span>
      </span>
    </h1>
  );
}
