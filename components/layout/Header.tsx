"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X, List } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/#models", label: "Models", match: "/#models" },
  { href: "/insights", label: "Column", match: "/insights" },
  { href: "/speaking", label: "Speaking", match: "/speaking" },
  { href: "/advisory", label: "Advisory", match: "/advisory" },
  { href: "/products", label: "Course", match: "/products" },
  { href: "/about", label: "About", match: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock scroll while the overlay is open. Links close it on click.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (match: string) => !match.startsWith("/#") && pathname.startsWith(match);

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-paper">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-display text-lg font-bold text-ink">
          Priyanka Joshi<span className="text-red-pen">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.match) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-ink ${
                isActive(link.match)
                  ? "text-ink underline decoration-red-pen decoration-2 underline-offset-8"
                  : "text-sub"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="px-5 py-2 text-xs">
            Book a Call
          </Button>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </Container>

      {/* Full-screen paper overlay on mobile */}
      {open ? (
        <nav className="fixed inset-0 top-[72px] z-40 flex flex-col bg-paper md:hidden">
          <Container className="flex flex-1 flex-col py-8">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-hair">
                  <Link
                    href={link.href}
                    className={`block py-5 font-display text-2xl font-bold ${
                      isActive(link.match) ? "text-red-pen" : "text-ink"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pb-6 pt-8" onClick={() => setOpen(false)}>
              <Button href="/contact" className="w-full">
                Book a Call
              </Button>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
