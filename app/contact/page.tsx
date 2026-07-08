import type { Metadata } from "next";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import CalEmbed from "@/components/embeds/CalEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about advisory work, speaking engagements, or the course.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      <BackgroundLayer variant="ambient" />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk"
            description="Advisory, speaking, or a course question — start here."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-10 md:grid-cols-2 md:items-start">
          <ContactForm />
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-neon-blue">
              Prefer to just grab time?
            </p>
            <CalEmbed calLink="your-username/intro-call" />
          </div>
        </Container>
      </section>
    </div>
  );
}
