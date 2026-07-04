"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/advisory", label: "Advisory" },
  { href: "/products", label: "Course" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-lg">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-display text-lg font-semibold text-white">
          Priyanka Joshi<span className="text-neon-blue">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="px-5 py-2.5 text-xs">
            Book a Call
          </Button>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </Container>

      {open ? (
        <nav className="border-t border-white/5 bg-ink-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-slate-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href="/contact" className="w-full">
                Book a Call
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
