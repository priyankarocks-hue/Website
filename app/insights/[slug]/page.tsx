import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import BackgroundLayer from "@/components/three/BackgroundLayer";
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
      <BackgroundLayer variant="ambient" />

      <article className="py-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-neon-blue">{post.meta.date}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {post.meta.title}
          </h1>

          <div className="prose prose-invert prose-headings:font-display prose-a:text-neon-blue mt-10 max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </Container>
      </article>
    </div>
  );
}
