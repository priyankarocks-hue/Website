import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceTiers from "@/components/sections/ServiceTiers";
import CalendlyEmbed from "@/components/embeds/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "Fractional CMO and AI marketing advisory for teams who want a plan, not a tool demo.",
};

const process = [
  {
    title: "Discovery call",
    description:
      "Thirty minutes on your funnel, your team, and what AI is actually doing for you today. If I can't help, I say so on this call.",
  },
  {
    title: "Audit & roadmap",
    description:
      "A written read on where AI genuinely helps you and where it's a distraction, ranked by effort against impact.",
  },
  {
    title: "Build & handover",
    description:
      "The system built with your team, documented so it keeps running when the engagement ends. You own it.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="relative">
      <section className="pt-8">
        <Container>
          <Breadcrumbs items={[{ label: "Advisory" }]} />
        </Container>
      </section>
      <section className="pb-20 pt-10">
        <Container>
          <SectionHeading
            eyebrow="Subject: your funnel. Status: needs an operator."
            title="Marketing leadership that ships, without the full-time salary"
            description="I directed growth on a $1M+/month budget for customers across 150+ markets. You get the expertise, not a recycled toolkit: a system designed for your funnel, your team, your stage. No vendor kickbacks, no borrowed playbooks."
          />
          <p className="mt-4 text-sm text-body">
            Before you book anything, read{" "}
            <a href="/casework" className="font-semibold text-red-pen hover:underline">
              the case files
            </a>
            . That&apos;s the standard I&apos;ll be held to here.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <ServiceTiers />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="How an engagement runs" />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {process.map((item) => (
              <div key={item.title} className="border-l-[3px] border-red-pen/50 pl-6">
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Book a discovery call" align="center" />
          <div className="mt-10">
            <CalendlyEmbed />
          </div>
        </Container>
      </section>
    </div>
  );
}
