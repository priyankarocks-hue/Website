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
      "A fast, sharp read on your content, your AI-search visibility, and your AI stack: what's working, what's embarrassing, what to fix first.",
    deliverables: [
      "Full content, SEO/AEO, and AI-workflow audit",
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
      "Your marketing, led. Strategy set weekly, systems built with your engineers, results reported in numbers your board reads.",
    deliverables: [
      "Weekly working session with your team",
      "AI-augmented growth systems built with your engineers, not just prompts",
      "Attribution modelling that shows what's actually converting",
      "AEO architecture: get cited where buyers now search (ChatGPT, Perplexity, AI Overviews)",
      "Governance for AI content: brand voice held, compliance logged",
    ],
    cta: "Book a Discovery Call",
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
