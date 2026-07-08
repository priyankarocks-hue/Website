import type { Metadata } from "next";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CalEmbed from "@/components/embeds/CalEmbed";
import MediaMarquee from "@/components/ui/MediaMarquee";
import { speakingTopics } from "@/content/speakingTopics";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Keynotes and workshops on brand, content, and where AI actually earns its keep.",
};

export default function SpeakingPage() {
  return (
    <div className="relative">
      <BackgroundLayer variant="ambient" />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Speaking"
            title="Keynotes and workshops on brand, content, and AI"
            description="Talks that leave your audience with a plan, not just hype."
          />
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="glass-card overflow-hidden p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/video/reel-poster-placeholder.svg"
              alt="Speaker reel placeholder"
              className="w-full rounded-2xl"
            />
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Placeholder reel — embed your real speaker video here before launch.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Signature talks" title="Popular topics" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {speakingTopics.map((topic) => (
              <GlassCard key={topic.title} className="flex h-full flex-col">
                <h3 className="font-display text-lg font-semibold text-white">{topic.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{topic.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {topic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="text-neon-blue">&bull;</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <GlassCard>
            <MediaMarquee />
          </GlassCard>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Booking" title="Check availability for your event" align="center" />
          <div className="mt-10">
            <CalEmbed calLink="your-username/speaking-inquiry" />
          </div>
        </Container>
      </section>
    </div>
  );
}
