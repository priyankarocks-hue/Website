import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import StripeCheckoutButton from "@/components/embeds/StripeCheckoutButton";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Two ways in: foundations for teams starting with AI, the full system for teams scaling it.",
};

// Intentionally lighter visual treatment than Home/Speaking/Advisory —
// this is the checkout page, so it favors clarity/conversion over spectacle
// and skips the full 3D hero background.
export default function ProductsPage() {
  return (
    <div className="relative bg-gradient-to-b from-ink-950 to-ink-900">
      <section className="py-20">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Courses"
            title="Signal to Growth"
            description="Two ways in: foundations for teams starting with AI, the full system for teams scaling it."
            align="center"
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <GlassCard
              key={course.name}
              className={`flex h-full flex-col ${course.featured ? "border-neon-lime/50" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-semibold text-white">{course.name}</p>
                  <p className="mt-2 text-sm text-slate-300">{course.tagline}</p>
                </div>
                {course.badge ? <Badge>{course.badge}</Badge> : null}
              </div>

              <p className="mt-6 font-display text-3xl font-semibold text-white">
                {course.price}
                <span className="ml-2 text-sm font-normal text-slate-400">{course.priceNote}</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">{course.audience}</p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-200">
                {course.dispatches.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-neon-blue">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-slate-400">{course.outcome}</p>

              <div className="mt-6">
                <StripeCheckoutButton href={course.stripeLink} label="Enroll now" />
              </div>
            </GlassCard>
          ))}
        </Container>
        <Container>
          <p className="mt-6 text-xs text-slate-500">
            Placeholder checkout links — connect your real Stripe Payment Links before launch.
          </p>
        </Container>
      </section>
    </div>
  );
}
