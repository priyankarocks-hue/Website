import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { serviceTiers } from "@/content/serviceTiers";

export default function ServiceTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {serviceTiers.map((tier) => (
        <GlassCard
          key={tier.name}
          className={`flex h-full flex-col ${tier.featured ? "border-neon-violet/50" : ""}`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
            {tier.featured ? <Badge>Most booked</Badge> : null}
          </div>

          <p className="mt-4 text-2xl font-semibold text-white">
            {tier.price}
            <span className="ml-2 text-sm font-normal text-slate-400">{tier.cadence}</span>
          </p>

          <p className="mt-4 text-sm text-slate-300">{tier.description}</p>

          <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-400">
            {tier.deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-neon-cyan">&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          <Button href="/contact" className="mt-8" variant={tier.featured ? "primary" : "secondary"}>
            {tier.cta}
          </Button>
        </GlassCard>
      ))}
    </div>
  );
}
