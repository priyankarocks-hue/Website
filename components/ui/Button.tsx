"use client";

import Link from "next/link";
import { useRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-neon-lime to-neon-blue text-ink-950 font-semibold hover:brightness-110",
  secondary:
    "border border-white/15 text-white hover:border-neon-lime/60 hover:bg-white/5",
  ghost: "text-white/80 hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Magnetic pull: the button nudges toward the cursor within its own
  // bounds, then eases back via the existing transition-all on release.
  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (event.clientX - rect.left - rect.width / 2) * 0.25;
    const relY = (event.clientY - rect.top - rect.height / 2) * 0.25;
    el.style.transform = `translate(${relX}px, ${relY}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200 ease-out ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}
