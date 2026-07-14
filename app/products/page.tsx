import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import StripeCheckoutButton from "@/components/embeds/StripeCheckoutButton";
import { productOffer } from "@/content/productOffer";

export const metadata: Metadata = {
  title: "Course",
  description: productOffer.tagline,
};

// Checkout page: favors clarity and conversion over spectacle.
export default function ProductsPage() {
  return (
    <div className="relative">
      <section className="py-20">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Subject: the playbook."
            title={productOffer.name}
            align="center"
          />
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body">
            {productOffer.tagline}
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="rounded border border-hair bg-white/40 p-8">
            <p className="font-display text-lg font-bold text-ink">What&apos;s inside</p>
            <ul className="mt-6 space-y-3 text-body">
              {productOffer.curriculum.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-pen" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-sub">{productOffer.outcome}</p>
          </div>

          <div className="flex flex-col items-start gap-4 rounded border border-red-pen bg-white/50 p-8">
            <Badge>{productOffer.seatsNote}</Badge>
            <p className="font-display text-4xl font-bold text-ink">
              {productOffer.price}
              <span className="ml-2 font-sans text-sm font-normal text-sub">
                {productOffer.priceNote}
              </span>
            </p>
            <StripeCheckoutButton label="Enroll now" />
          </div>
        </Container>
      </section>
    </div>
  );
}
