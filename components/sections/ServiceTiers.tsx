import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { serviceTiers } from "@/content/serviceTiers";

export default function ServiceTiers() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {serviceTiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex h-full flex-col rounded border p-7 ${
            tier.featured ? "border-red-pen bg-white/50" : "border-hair bg-white/30"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-bold text-ink">{tier.name}</h3>
            {tier.featured ? <Badge>Most booked</Badge> : null}
          </div>

          <p className="mt-4 font-display text-2xl font-bold text-ink">
            {tier.price}
            <span className="ml-2 font-sans text-sm font-normal text-sub">
              {tier.cadence}
            </span>
          </p>
          {tier.note ? (
            <p className="pen-note mt-1 text-lg">{tier.note}</p>
          ) : null}

          <p className="mt-4 text-sm leading-relaxed text-body">{tier.description}</p>

          <ul className="mt-6 flex-1 space-y-2.5 text-sm text-body">
            {tier.deliverables.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-pen" />
                {item}
              </li>
            ))}
          </ul>

          <Button
            href="/contact"
            className="mt-8"
            variant={tier.featured ? "primary" : "secondary"}
          >
            {tier.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
