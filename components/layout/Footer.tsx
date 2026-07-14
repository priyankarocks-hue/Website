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

// PLACEHOLDER: swap for real handles if these ever change.
const socialLinks = [
  { href: "https://www.linkedin.com/in/priyanka13joshi", label: "LinkedIn" },
  { href: "https://x.com/priyankarocks", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-display text-lg font-bold text-ink">
            Priyanka Joshi<span className="text-red-pen">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-sub">
            Fractional CMO and keynote speaker building AI content systems that don&apos;t
            sound like a template.
          </p>
          <div className="mt-5 flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sub transition-colors hover:text-red-pen"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="font-display text-sm font-bold text-ink">{column.title}</p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sub transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-display text-sm font-bold text-ink">Join the list</p>
          <p className="mt-4 text-sm text-sub">
            One idea a week on AI-powered content and brand strategy. No spam.
          </p>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-hair py-6 text-xs text-sub sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Priyanka Joshi. All rights reserved.</p>
      </Container>
    </footer>
  );
}
