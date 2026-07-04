import type { Metadata } from "next";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceTiers from "@/components/sections/ServiceTiers";
import CalEmbed from "@/components/embeds/CalEmbed";

export const metadata: Metadata = {
  title: "Advisory",
  description: "AI marketing advisory services for teams who want a plan, not a tool demo.",
};

const process = [
  {
    step: "01",
    title: "Discovery call",
    description: "A 30-minute call to understand your funnel, team, and current AI usage.",
  },
  {
    step: "02",
    title: "Audit & roadmap",
    description: "A structured review of where AI genuinely helps vs. where it's a distraction.",
  },
  {
    step: "03",
    title: "Implementation support",
    description: "Ongoing or one-time support turning the roadmap into shipped work.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="relative">
      <BackgroundLayer variant="ambient" />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Advisory"
            title="AI marketing advisory for teams who want a plan, not a demo"
            description="Straightforward, funnel-first advisory work — no vendor kickbacks, no one-size-fits-all playbook."
          />
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <ServiceTiers />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="How it works" title="The process" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <GlassCard key={item.step}>
                <p className="font-display text-3xl font-semibold text-neon-cyan">{item.step}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Booking" title="Book a discovery call" align="center" />
          <div className="mt-10">
            <CalEmbed calLink="your-username/intro-call" />
          </div>
        </Container>
      </section>
    </div>
  );
}
