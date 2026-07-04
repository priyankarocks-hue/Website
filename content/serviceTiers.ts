// PLACEHOLDER CONTENT — replace pricing, deliverables, and Cal.com links
// with your real advisory offer before launch.

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
    name: "Strategy Sprint",
    price: "$3,500",
    cadence: "one-time, 2 weeks",
    description:
      "A focused audit of where AI can and can't help your marketing funnel, with a concrete 90-day roadmap.",
    deliverables: [
      "Full funnel + tooling audit",
      "AI opportunity map ranked by effort vs. impact",
      "90-day implementation roadmap",
      "Live readout session with your team",
    ],
    cta: "Book a Strategy Sprint",
  },
  {
    name: "Fractional AI Marketing Advisor",
    price: "$6,000",
    cadence: "per month",
    description:
      "Ongoing hands-on advisory — weekly working sessions, async Slack access, and quarterly roadmap resets.",
    deliverables: [
      "Weekly 60-minute working session",
      "Async Slack access for fast decisions",
      "Quarterly strategy reset",
      "Vendor/tool evaluation support",
    ],
    cta: "Book an Intro Call",
    featured: true,
  },
  {
    name: "Keynote + Workshop Bundle",
    price: "Custom",
    cadence: "per engagement",
    description:
      "A keynote for your event followed by a half-day workshop to turn ideas into an action plan with your team.",
    deliverables: [
      "60-minute keynote, tailored to your audience",
      "Half-day hands-on workshop",
      "Workshop workbook for attendees",
      "Follow-up office hours (2 weeks)",
    ],
    cta: "Check Availability",
  },
];
