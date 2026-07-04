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
      "A senior-level audit of your content, brand, and comms operation — where AI genuinely accelerates output, and where it would just accelerate mediocrity.",
    deliverables: [
      "Full content, brand voice, and comms-ops audit",
      "AI opportunity map ranked by effort vs. impact",
      "90-day implementation roadmap",
      "Live executive readout session",
    ],
    cta: "Book an Audit",
  },
  {
    name: "Fractional CMO",
    price: "$9,500",
    cadence: "per month",
    description:
      "Ongoing, hands-on marketing leadership — brand, content systems, media relations, and AI-augmented execution, without a full-time hire.",
    deliverables: [
      "Weekly working session with your leadership team",
      "Owns content/brand strategy and AI-augmented execution",
      "Media relations and thought-leadership positioning",
      "Quarterly strategy reset and board-ready reporting",
    ],
    cta: "Book an Intro Call",
    featured: true,
  },
  {
    name: "Keynote + Workshop Bundle",
    price: "Custom",
    cadence: "per engagement",
    description:
      "A keynote for your event followed by a half-day workshop turning ideas into an action plan your team can run with.",
    deliverables: [
      "60-minute keynote, tailored to your audience",
      "Half-day hands-on workshop",
      "Workshop workbook for attendees",
      "Follow-up office hours (2 weeks)",
    ],
    cta: "Check Availability",
  },
];
