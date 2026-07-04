import type { Metadata } from "next";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { bio } from "@/content/bio";
import { mediaFeatures } from "@/content/speakingTopics";

export const metadata: Metadata = {
  title: "About",
  description: bio.shortBlurb,
};

export default function AboutPage() {
  return (
    <div className="relative">
      <BackgroundLayer variant="ambient" />

      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="glass-card p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bio.headshot} alt={`${bio.name} headshot placeholder`} className="w-full rounded-2xl" />
          </div>

          <div>
            <SectionHeading eyebrow="About" title={bio.name} description={bio.title} />

            <div className="mt-8 space-y-5 text-slate-300">
              {bio.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-1">
              {bio.credentials.map((credential) => (
                <li key={credential} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" />
                  {credential}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/advisory">Work with me</Button>
              <Button href="/speaking" variant="secondary">
                Book me to speak
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-widest text-neon-blue">
              As featured in
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-slate-300">
              {mediaFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </GlassCard>
        </Container>
      </section>
    </div>
  );
}
