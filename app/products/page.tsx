import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import StripeCheckoutButton from "@/components/embeds/StripeCheckoutButton";
import LessonRow from "@/components/course/LessonRow";
import { productOffer } from "@/content/productOffer";
import { courseModules } from "@/content/courseCurriculum";
import { bio } from "@/content/bio";

export const metadata: Metadata = {
  title: "The AI Growth Playbook: an AI marketing course by Priyanka Joshi",
  description: productOffer.tagline,
};

const outcomes = [
  "A content calendar that starts from customer language, not brainstorms",
  "An editorial rubric that keeps AI-assisted output on-voice",
  "Content structured so ChatGPT, Perplexity, and AI Overviews cite you",
  "A reporting format your CFO signs off on",
];

export default function ProductsPage() {
  const totalLessons = courseModules.reduce((sum, m) => sum + m.lessons.length, 0);
  const freeLessons = courseModules
    .flatMap((m) => m.lessons)
    .filter((lesson) => lesson.free).length;

  return (
    <div className="relative">
      <section className="pt-8">
        <Container>
          <Breadcrumbs items={[{ label: "Course" }]} />
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-sub">
              Subject: the playbook.
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              {productOffer.name}
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-body">
              {productOffer.tagline}
            </p>
            <p className="mt-4 text-sm text-sub">
              {courseModules.length} modules &middot; {totalLessons} lessons,{" "}
              {freeLessons} free to read, 4 working templates
            </p>

            <div className="mt-10 rounded border border-hair bg-white/40 p-7">
              <h2 className="font-display text-lg font-bold text-ink">
                What you&apos;ll walk away with
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2.5 text-sm leading-relaxed text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-pen" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-ink">Curriculum</h2>
              <p className="pen-note mt-1 text-lg">first two lessons are free. read them now.</p>

              <div className="mt-6 space-y-6">
                {courseModules.map((module, index) => (
                  <div key={module.title} className="rounded border border-hair bg-white/30">
                    <div className="border-b border-hair px-6 py-4">
                      <h3 className="font-display text-base font-bold text-ink">
                        Module {index + 1}: {module.title}
                      </h3>
                      <p className="mt-1 text-sm text-sub">{module.summary}</p>
                      {module.artifact ? (
                        <p className="mt-1.5 text-xs font-semibold text-red-pen">
                          Take-home artifact: {module.artifact}
                        </p>
                      ) : null}
                    </div>
                    <ul>
                      {module.lessons.map((lesson) => (
                        <LessonRow key={lesson.title} lesson={lesson} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 rounded border border-hair bg-white/40 p-7 sm:grid-cols-[96px_1fr]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bio.headshot}
                alt={bio.name}
                className="h-24 w-24 rounded object-cover"
              />
              <div>
                <h2 className="font-display text-lg font-bold text-ink">
                  Taught by {bio.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-body">{bio.shortBlurb}</p>
                <Link
                  href="/about"
                  className="mt-3 inline-block text-sm font-semibold text-red-pen hover:underline"
                >
                  Why learn from me &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="rounded border border-red-pen bg-white/50 p-7">
              <Badge>{productOffer.seatsNote}</Badge>
              <p className="mt-4 font-display text-4xl font-bold text-ink">
                {productOffer.price}
                <span className="ml-2 font-sans text-sm font-normal text-sub">
                  {productOffer.priceNote}
                </span>
              </p>
              <p className="pen-note text-lg">one month of the retainer</p>
              <ul className="mt-5 space-y-2.5 border-t border-hair pt-5 text-sm text-body">
                <li>{totalLessons} lessons across {courseModules.length} modules</li>
                <li>4 working templates, yours to keep</li>
                <li>Live monthly Q&amp;A with Priyanka</li>
                <li>Lifetime access and updates</li>
              </ul>
              <div className="mt-6">
                <StripeCheckoutButton label="Enroll now" />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-sub">{productOffer.outcome}</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
