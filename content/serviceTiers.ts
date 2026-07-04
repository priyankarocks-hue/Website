// PLACEHOLDER PRICING — deliverables reflect Priyanka's real areas of depth
// (content systems, brand/PR, AI-augmented ops); confirm pricing before launch.

type ServiceTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  deliverables: string[];
  cta: string;
  featured?: boolean;
};

export const serviceTiers: ServiceTier[] = [
  {
    name: "Content & Comms Audit",
    price: "$5,500",
    cadence: "one-time, 2 weeks",
    description:
      "A fast, sharp read on your content, SEO/GEO, and AI stack — what's working, what's embarrassing, what to fix first.",
    deliverables: [
      "Full content, SEO/GEO, and AI-workflow audit",
      "Opportunity map, ranked by effort vs. impact",
      "90-day plan you can run without me",
      "Live readout, no slide-deck theater",
    ],
    cta: "Book an Audit",
  },
  {
    name: "Fractional CMO",
    price: "$9,500",
    cadence: "per month",
    description:
      "Marketing leadership that ships — the same AI-augmented growth system running a $1M+/month budget, built for your team, without the full-time salary.",
    deliverables: [
      "Weekly working session with your team",
      "AI-augmented growth systems built with your engineers, not just prompts",
      "Attribution modelling that shows what's actually converting",
      "GEO-ready SEO architecture for the AI-search era",
    ],
    cta: "Book an Intro Call",
    featured: true,
  },
  {
    name: "Keynote + Workshop Bundle",
    price: "Custom",
    cadence: "per engagement",
    description:
      "A keynote for your event, then a half-day workshop that turns the applause into an action plan your team runs with.",
    deliverables: [
      "60-minute keynote, built for your audience",
      "Half-day hands-on workshop",
      "Workbook attendees actually keep",
      "Two weeks of follow-up office hours",
    ],
    cta: "Check Availability",
  },
];
