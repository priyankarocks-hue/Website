import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/Container";
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

  return (
    <div className="relative">
      <article className="py-20">
        <Container className="max-w-3xl">
          <p className="text-xs text-sub">{post.meta.date}</p>
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
        </Container>
      </article>
    </div>
  );
}
