import Link from "next/link";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/embeds/NewsletterForm";

const columns = [
  {
    title: "Work with me",
    links: [
      { href: "/advisory", label: "Advisory services" },
      { href: "/speaking", label: "Book a keynote" },
      { href: "/products", label: "Courses" },
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

// PLACEHOLDER — swap for real handles if these ever change.
const socialLinks = [
  { href: "https://www.linkedin.com/in/priyanka13joshi", label: "LinkedIn" },
  { href: "https://x.com/priyankarocks", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Priyanka Joshi<span className="text-neon-blue">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Fractional CMO and keynote speaker. Signal-driven AI growth systems, built with
            judgment.
          </p>
          <div className="mt-5 flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors hover:text-neon-blue"
              >
                {social.label}
              </a>
            ))}
          </div>
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
          <p className="text-sm font-semibold text-white">Nobody Read It</p>
          <p className="mt-4 text-sm text-slate-400">
            The weekly on AI content nobody reads — and how to make yours the exception.
          </p>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Priyanka Joshi. All rights reserved.</p>
      </Container>
    </footer>
  );
}
