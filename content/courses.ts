// PLACEHOLDER PRICING — confirm before launch, and connect real Stripe
// Payment Links. "Dispatches" is intentional: each lesson is a field note
// from a real campaign decision, not a generic tutorial.

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

// Every dispatch is phrased as what the buyer can DO afterward — not what
// the lesson "covers." Feature lists don't sell; capabilities do.
export const courses: Course[] = [
  {
    name: "Hard to Skip",
    tagline: "The starter system. Content people stop scrolling for, live in a week.",
    price: "$197",
    priceNote: "one-time, lifetime access",
    audience: "Best for solo marketers, early-stage founders, first AI hire",
    dispatches: [
      "Turn your reviews and DMs into a data-backed content brief",
      "Publish in one voice everywhere — even the posts AI drafted",
      "Show up in AI answers, not just page-two results",
      "Prove what worked with a $0 attribution habit",
      "Ship it all this week with ready-to-use templates",
    ],
    outcome: "Walk away running all four frameworks on your own funnel — not just understanding them.",
    stripeLink: "https://buy.stripe.com/test_placeholder_hardtoskip",
  },
  {
    name: "Kill the Template",
    tagline: "The full operator build — pipeline, playbooks, and the numbers to defend them.",
    price: "$897",
    priceNote: "one-time, lifetime access",
    audience: "Best for in-house teams, agencies, fractional operators",
    dispatches: [
      "Spec a signal pipeline your engineers can build in a sprint — you write the brief, not the code",
      "Double content output across markets without new headcount",
      "Rebuild your SEO for AI Overviews before your competitors do",
      "Walk into the budget meeting with ROAS, not vibes",
      "Bonus: live monthly Q&A with Priyanka for the first cohort",
    ],
    outcome: "Walk away with the operating system — pipeline, playbooks, and the metrics to defend it.",
    stripeLink: "https://buy.stripe.com/test_placeholder_killthetemplate",
    badge: "Cohort opens quarterly",
    featured: true,
  },
];

export const coursesPitch = {
  differentiator:
    "Most AI marketing courses teach prompts. These teach the judgment calls a prompt can't make — no code, built for marketers, not engineers.",
};
