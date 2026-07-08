// PLACEHOLDER PRICING — connect real Stripe Payment Links before launch.
// "Dispatches" instead of "modules" is intentional: each lesson is a field
// note from a real campaign decision, not a generic tutorial.

type Course = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  audience: string;
  dispatches: string[];
  outcome: string;
  stripeLink: string;
  badge?: string;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    name: "Signal to Growth — Foundations",
    tagline: "For founders and marketers picking up AI for the first time.",
    price: "$197",
    priceNote: "one-time, lifetime access",
    audience: "Best for solo marketers, early-stage founders, first AI hire",
    dispatches: [
      "Dispatch 01: Reading the signal — reviews and DMs into your first brief",
      "Dispatch 02: One voice, wherever you publish",
      "Dispatch 03: Getting found by the answer, not just the click",
      "Dispatch 04: The $0 attribution habit",
      "Bonus: Templates for all four, ready this week",
    ],
    outcome: "The four frameworks running on your own funnel, not just in your notes.",
    stripeLink: "https://buy.stripe.com/test_placeholder_foundations",
  },
  {
    name: "Signal to Growth — Operator System",
    tagline: "For teams already running marketing who want the full system.",
    price: "$897",
    priceNote: "one-time, lifetime access",
    audience: "Best for in-house teams, agencies, fractional operators",
    dispatches: [
      "Dispatch 01: Building your signal pipeline",
      "Dispatch 02: AI localization at scale, without more headcount",
      "Dispatch 03: GEO — rebuilding your SEO for AI Overviews",
      "Dispatch 04: Attribution modelling that shows real ROAS",
      "Bonus: Live monthly Q&A with Priyanka for the first cohort",
    ],
    outcome: "Built from a system running 4M+ acquisitions a year.",
    stripeLink: "https://buy.stripe.com/test_placeholder_operator",
    badge: "Cohort opens quarterly",
    featured: true,
  },
];
