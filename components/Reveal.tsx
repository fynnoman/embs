"use client";

import { useEffect, useRef } from "react";

type Variant = "up" | "clip" | "stagger";

type Props = {
  children: React.ReactNode;
  as?:
    | "div"
    | "section"
    | "article"
    | "header"
    | "footer"
    | "span"
    | "li"
    | "ul"
    | "ol"
    | "p"
    | "h1"
    | "h2"
    | "h3";
  className?: string;
  variant?: Variant;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  variant = "up",
  threshold = 0.18,
  rootMargin = "0px 0px -80px 0px",
  delay,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  const base =
    variant === "clip"
      ? "reveal-clip"
      : variant === "stagger"
        ? "reveal-stagger"
        : "reveal";

  const style = delay
    ? ({ transitionDelay: `${delay}ms` } as React.CSSProperties)
    : undefined;

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`${base} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
