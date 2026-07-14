import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterForm from "@/components/embeds/NewsletterForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas on AI marketing strategy, one at a time. No fluff.",
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <div className="relative">
      <section className="pt-8">
        <Container>
          <Breadcrumbs items={[{ label: "Insights" }]} />
        </Container>
      </section>
      <section className="pb-20 pt-10">
        <Container className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <SectionHeading
            eyebrow="Subject: one idea a week."
            title="The column"
            description="New models for marketing in the AI era. Not summaries of other people's takes; ways of looking at the problem that I use on real budgets."
          />
          <div className="hidden rounded border border-hair bg-white/40 p-2 md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/the-column.jpg"
              alt=""
              aria-hidden="true"
              className="h-44 w-full rounded object-cover [filter:saturate(0.9)]"
            />
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group grid gap-6 border-t border-dashed border-[#cfcdbe] py-8 sm:grid-cols-[1fr_220px] sm:items-center"
            >
              <div>
                <p className="text-xs text-sub">{post.date}</p>
                <h2 className="mt-3 max-w-2xl font-display text-xl font-bold text-ink group-hover:underline group-hover:decoration-red-pen group-hover:decoration-2 group-hover:underline-offset-4">
                  {post.title}
                  {post.slug === "regression-to-the-template" ? (
                    <span className="pen-note ml-3 align-middle text-xl">start here</span>
                  ) : null}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">
                  {post.description}
                </p>
              </div>
              {post.image ? (
                <div className="overflow-hidden rounded border border-hair bg-white/40 p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.imageAlt ?? ""}
                    className="h-32 w-full rounded object-cover [filter:saturate(0.85)] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
            </Link>
          ))}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded border border-hair bg-white/40 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg font-bold text-ink">Join the list</p>
              <p className="mt-1 text-sm text-body">
                One idea a week on AI marketing strategy. No spam.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
