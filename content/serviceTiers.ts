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
    description: "A fast, sharp read on your content, SEO/GEO, and AI stack.",
    deliverables: [
      "Full content, SEO/GEO, and AI-workflow audit",
      "Opportunity map, ranked by effort vs. impact",
      "90-day plan you can run without me",
    ],
    cta: "Book an Audit",
  },
  {
    name: "Fractional CMO",
    price: "$9,500",
    cadence: "per month",
    description: "The same AI-augmented growth system running $1M+/month, built for your team.",
    deliverables: [
      "Weekly working session with your team",
      "AI-augmented growth systems built with your engineers",
      "Attribution modelling that shows what's converting",
    ],
    cta: "Book an Intro Call",
    featured: true,
  },
  {
    name: "Keynote + Workshop Bundle",
    price: "Custom",
    cadence: "per engagement",
    description: "A keynote, then a half-day workshop that turns applause into an action plan.",
    deliverables: [
      "60-minute keynote, built for your audience",
      "Half-day hands-on workshop",
      "Two weeks of follow-up office hours",
    ],
    cta: "Check Availability",
  },
];
