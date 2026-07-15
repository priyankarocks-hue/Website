import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ReadingProgress from "@/components/ui/ReadingProgress";
import { getAllPosts, getPostSource } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostSource(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostSource(slug);
  if (!post) notFound();

  // Issues number oldest-first, like a real column archive.
  const chronological = getAllPosts().sort((a, b) => (a.date > b.date ? 1 : -1));
  const index = chronological.findIndex((p) => p.slug === slug);
  const issueNumber = index + 1;
  const previous = index > 0 ? chronological[index - 1] : null;
  const next = index < chronological.length - 1 ? chronological[index + 1] : null;

  return (
    <div className="relative">
      <ReadingProgress />
      <section className="pt-8">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Insights", href: "/insights" }, { label: post.meta.title }]}
          />
        </Container>
      </section>
      <article className="pb-20 pt-10">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-sub">
            The column &middot; Issue {issueNumber} &middot; {post.meta.date}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {post.meta.title}
          </h1>

          {post.meta.image ? (
            <div className="mt-8 rounded border border-hair bg-white/40 p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.meta.image}
                alt={post.meta.imageAlt ?? ""}
                className="h-64 w-full rounded object-cover [filter:saturate(0.85)] sm:h-80"
              />
            </div>
          ) : null}

          <div className="prose prose-headings:font-display prose-headings:text-ink prose-a:text-red-pen prose-strong:text-ink mt-10 max-w-none text-body">
            <MDXRemote source={post.content} />
          </div>

          <nav
            aria-label="More from the column"
            className="mt-14 grid gap-4 border-t border-hair pt-8 sm:grid-cols-2"
          >
            {previous ? (
              <Link href={`/insights/${previous.slug}`} className="group">
                <p className="text-xs uppercase tracking-[0.12em] text-sub">
                  &larr; Previous issue
                </p>
                <p className="mt-2 font-display text-base font-bold text-ink group-hover:underline group-hover:decoration-red-pen group-hover:decoration-2 group-hover:underline-offset-4">
                  {previous.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/insights/${next.slug}`} className="group sm:text-right">
                <p className="text-xs uppercase tracking-[0.12em] text-sub">
                  Next in the column &rarr;
                </p>
                <p className="mt-2 font-display text-base font-bold text-ink group-hover:underline group-hover:decoration-red-pen group-hover:decoration-2 group-hover:underline-offset-4">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[0.12em] text-sub">
                  You&apos;re up to date
                </p>
                <p className="mt-2 font-display text-base font-bold text-ink">
                  <Link
                    href="/insights"
                    className="hover:underline hover:decoration-red-pen hover:decoration-2 hover:underline-offset-4"
                  >
                    Join the list for the next issue
                  </Link>
                </p>
              </div>
            )}
          </nav>
        </Container>
      </article>
    </div>
  );
}
