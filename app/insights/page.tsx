import type { Metadata } from "next";
import Link from "next/link";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterForm from "@/components/embeds/NewsletterForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas on AI marketing strategy — one at a time, no fluff.",
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <div className="relative">
      <BackgroundLayer variant="ambient" />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="Ideas on AI marketing strategy"
            description="This is a young library — one article to start. New pieces land here as they're written."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <GlassCard className="h-full">
                <p className="text-xs uppercase tracking-widest text-neon-cyan">{post.date}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-slate-300">{post.description}</p>
              </GlassCard>
            </Link>
          ))}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <GlassCard className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">Join the list</p>
              <p className="mt-1 text-sm text-slate-300">
                One idea a week on AI marketing strategy. No spam.
              </p>
            </div>
            <NewsletterForm />
          </GlassCard>
        </Container>
      </section>
    </div>
  );
}
