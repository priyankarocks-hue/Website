import Container from "@/components/ui/Container";
import { mediaFeatures } from "@/content/speakingTopics";

export default function MediaLogos() {
  return (
    <section className="relative py-9">
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
            className="h-5 w-auto opacity-50 transition-opacity hover:opacity-80"
          />
        ))}
      </Container>
    </section>
  );
}
