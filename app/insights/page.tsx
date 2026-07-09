import type { Metadata } from "next";
import Link from "next/link";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterForm from "@/components/embeds/NewsletterForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Nobody Read It",
  description: "The newsletter about AI content nobody reads — and how to make yours the exception.",
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
            title="Nobody Read It"
            description="The newsletter about AI content nobody reads — and how to make yours the exception."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <GlassCard className="h-full">
                <p className="text-xs uppercase tracking-widest text-neon-blue">{post.date}</p>
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
              <p className="font-display text-lg font-semibold text-white">
                Get Nobody Read It weekly
              </p>
              <p className="mt-1 text-sm text-slate-300">One idea a week. No spam.</p>
            </div>
            <NewsletterForm />
          </GlassCard>
        </Container>
      </section>
    </div>
  );
}
