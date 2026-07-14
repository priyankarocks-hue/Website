import Link from "next/link";

export type Crumb = { label: string; href?: string };

// Editorial breadcrumbs: every subpage gets a way home. The last crumb
// is the current page and stays unlinked.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-sub">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-hair">
              /
            </span>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
