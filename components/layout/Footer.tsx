import Link from "next/link";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/embeds/NewsletterForm";

const columns = [
  {
    title: "Work with me",
    links: [
      { href: "/advisory", label: "Advisory services" },
      { href: "/speaking", label: "Book a keynote" },
      { href: "/products", label: "The course" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Alex Rivera<span className="text-neon-cyan">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            AI marketing advisor and keynote speaker helping brands turn AI hype into
            marketing systems that convert.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-white">{column.title}</p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-white">Join the list</p>
          <p className="mt-4 text-sm text-slate-400">
            One idea a week on AI marketing strategy. No spam.
          </p>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
        <p>Placeholder brand &mdash; replace with real name, socials, and legal links.</p>
      </Container>
    </footer>
  );
}
