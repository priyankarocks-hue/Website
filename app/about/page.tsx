import type { Metadata } from "next";
import Container from "@/components/ui/Container";
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
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="rounded border border-hair p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bio.headshot} alt={bio.name} className="w-full rounded" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-sub">
              Subject: the editor.
            </p>
            <p className="strike mt-6 font-display text-lg font-bold sm:text-xl">
              Seasoned, results-driven marketing leader with 20+ years of
              cross-functional experience.
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              {bio.name}
            </h1>
            <p className="mt-2 text-body">{bio.title}</p>

            <div className="mt-8 space-y-5 leading-relaxed text-body">
              {bio.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3">
              {bio.credentials.map((credential) => (
                <li key={credential} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-pen" />
                  {credential}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/advisory">Work with me</Button>
              <Button href="/speaking" variant="secondary">
                Book me to speak
              </Button>
            </div>
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
    </div>
  );
}
