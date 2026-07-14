import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StripeCheckoutButton from "@/components/embeds/StripeCheckoutButton";
import { previewLessons } from "@/content/courseCurriculum";
import { productOffer } from "@/content/productOffer";

export function generateStaticParams() {
  return previewLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = previewLessons.find((l) => l.slug === slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} | Free lesson from The AI Growth Playbook`,
    description: lesson.body[0],
  };
}

export default async function PreviewLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = previewLessons.find((l) => l.slug === slug);
  if (!lesson) notFound();

  return (
    <div className="relative">
      <section className="pt-8">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Course", href: "/products" }, { label: "Free lesson" }]}
          />
        </Container>
      </section>

      <article className="py-12">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-sub">
            {lesson.moduleTitle} &middot; Free preview &middot; {lesson.duration}
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
            {lesson.title}
          </h1>

          <div className="mt-8 space-y-5 leading-relaxed text-body">
            {lesson.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded border border-red-pen bg-white/50 p-8 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              <Lock size={15} weight="fill" className="text-red-pen" />
              Next lesson: {lesson.nextLocked}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-body">
              The rest of the course, including the templates, is for enrolled
              students. {productOffer.price}, {productOffer.priceNote}.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <StripeCheckoutButton label="Enroll now" />
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded border-[1.5px] border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5"
              >
                Back to the curriculum
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
