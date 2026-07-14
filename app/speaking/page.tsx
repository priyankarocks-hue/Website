import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CalEmbed from "@/components/embeds/CalEmbed";
import { speakingTopics, mediaFeatures } from "@/content/speakingTopics";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Keynotes and workshops on brand, content, and where AI actually earns its keep.",
};

export default function SpeakingPage() {
  return (
    <div className="relative">
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Subject: your stage."
            title="Talks your audience can act on the next morning"
            description="No hype, no fear-mongering. Every topic below comes from a system I run, not a trend report I read."
          />
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="rounded border border-hair p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/video/reel-poster-placeholder.svg"
              alt="Speaker reel placeholder"
              className="w-full rounded"
            />
          </div>
          <p className="mt-3 text-xs text-sub">
            Placeholder reel. Embed your real speaker video here before launch.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="The talks" />
          <div className="mt-10">
            {speakingTopics.map((topic) => (
              <div
                key={topic.title}
                className="grid gap-6 border-t border-dashed border-[#cfcdbe] py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {topic.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-body">
                    {topic.description}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-pen">
                    Your audience leaves with
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-body">
                    {topic.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hair py-10">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="text-xs uppercase tracking-[0.12em] text-sub">
            As featured in
          </span>
          {mediaFeatures.map((feature) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={feature}
              src={`/images/logos/${feature.toLowerCase()}.svg`}
              alt={feature}
              className="h-5 w-auto opacity-50"
            />
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Check availability for your event" align="center" />
          <div className="mt-10">
            <CalEmbed calLink="your-username/speaking-inquiry" />
          </div>
        </Container>
      </section>
    </div>
  );
}
