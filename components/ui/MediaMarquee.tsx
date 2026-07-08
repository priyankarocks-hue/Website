import { mediaFeatures } from "@/content/speakingTopics";

// Looping logo strip — duplicated once so the CSS animation can translate
// exactly -50% and loop seamlessly.
export default function MediaMarquee() {
  const items = [...mediaFeatures, ...mediaFeatures];

  return (
    <div className="overflow-hidden">
      <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">As featured in</p>
      <div className="marquee-track flex w-max items-center gap-16">
        {items.map((feature, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${feature}-${index}`}
            src={`/images/logos/${feature.toLowerCase()}.svg`}
            alt=""
            aria-hidden="true"
            className="h-6 w-auto shrink-0 grayscale opacity-70"
          />
        ))}
      </div>
    </div>
  );
}
