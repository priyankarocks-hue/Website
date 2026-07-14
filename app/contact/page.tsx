import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import CalendlyEmbed from "@/components/embeds/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about advisory work, speaking engagements, or the course.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="pt-8">
        <Container>
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </Container>
      </section>
      <section className="pb-20 pt-10">
        <Container>
          <SectionHeading
            eyebrow="Subject: your move."
            title="Let's talk"
            description="Advisory, speaking, or a question about the course. Two business days, tops, for a reply."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-10 md:grid-cols-2 md:items-start">
          <ContactForm />
          <div>
            <p className="mb-4 font-display text-lg font-bold text-ink">
              Prefer to just grab time?
            </p>
            <CalendlyEmbed showContactFallbackLink={false} />
          </div>
        </Container>
      </section>
    </div>
  );
}
