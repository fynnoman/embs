import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ariaLabel,
}: Props) {
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  const isHash = href.startsWith("#");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const inner = (
    <>
      <span>{children}</span>
      <span className="arrow" aria-hidden>
        →
      </span>
    </>
  );

  if (isHash || isExternal) {
    return (
      <a href={href} className={`${cls} ${className}`} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${cls} ${className}`} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
