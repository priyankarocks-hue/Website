import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import StripeCheckoutButton from "@/components/embeds/StripeCheckoutButton";
import { productOffer } from "@/content/productOffer";

export const metadata: Metadata = {
  title: "Course",
  description: productOffer.tagline,
};

// Intentionally lighter visual treatment than Home/Speaking/Advisory —
// this is the checkout page, so it favors clarity/conversion over spectacle
// and skips the full 3D hero background.
export default function ProductsPage() {
  return (
    <div className="relative bg-gradient-to-b from-ink-950 to-ink-900">
      <section className="py-20">
        <Container className="max-w-3xl text-center">
          <SectionHeading eyebrow="Course" title={productOffer.name} align="center" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{productOffer.tagline}</p>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-widest text-neon-cyan">
              What&apos;s inside
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {productOffer.curriculum.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-neon-cyan">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-400">{productOffer.outcome}</p>
          </GlassCard>

          <GlassCard className="flex flex-col items-start gap-4">
            <Badge>{productOffer.seatsNote}</Badge>
            <p className="font-display text-4xl font-semibold text-white">
              {productOffer.price}
              <span className="ml-2 text-sm font-normal text-slate-400">{productOffer.priceNote}</span>
            </p>
            <StripeCheckoutButton href={productOffer.stripeLink} label="Enroll now" />
            <p className="text-xs text-slate-500">
              Placeholder checkout link — connect your real Stripe Payment Link before launch.
            </p>
          </GlassCard>
        </Container>
      </section>
    </div>
  );
}
