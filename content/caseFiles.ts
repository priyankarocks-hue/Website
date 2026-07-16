// The evidence layer: two engagements from Priyanka's own record.
// Case 1 is anonymised (employer not named on this site by policy);
// Case 2 is public record (IIa Technologies, named on the About page).
// Every number here is hers to stand behind in a call.

export type CaseFile = {
  label: string;
  title: string;
  situation: string;
  direction: string[];
  receipts: { value: string; detail: string }[];
};

export const caseFiles: CaseFile[] = [
  {
    label: "Case file 1: the regulated trading platform",
    title: "An AI growth engine under financial regulation, across 150+ markets",
    situation:
      "A multi-asset trading platform with customers across 150+ markets. Content had to scale in a dozen languages under financial-promotion rules in every jurisdiction, without collapsing into the template every competitor was publishing.",
    direction: [
      "Built the signal loop: customer reviews, chatbot logs, and social signal routed into content and campaign priorities in real time.",
      "Set the editorial standard and directed AI-powered localisation with human QA across LATAM, MENA, SEA, and the EU. AI engineers built to the brief.",
      "Added AI compliance checks with audit trails, so every market's regulator was satisfied without slowing the team.",
      "Rebuilt the SEO architecture for AI search early: schema, pillar pages, intent clusters. Launched a trading academy that turned education into acquisition.",
    ],
    receipts: [
      { value: "4M+", detail: "qualified acquisitions a year" },
      { value: "300%", detail: "uplift in DOAS" },
      { value: "2x", detail: "content output, zero added headcount, timelines halved" },
      { value: "$1M+/mo", detail: "budget run on attribution, not guesswork" },
    ],
  },
  {
    label: "Case file 2: the deep-tech launch",
    title: "A communications function from zero to $80M+ first-year revenue",
    situation:
      "IIa Technologies, a lab-grown diamond producer, launching a new product line with no communications function, no press relationships, and a technology most journalists had never heard of.",
    direction: [
      "Built the comms team from zero and set its editorial bar: complex materials science translated into narratives investors and editors would actually read.",
      "Built the resource library (partner marketing kits, sales training, campaign frameworks) that cut content delivery time in half.",
      "Pitched and placed the story where it counted, then kept the coverage compounding.",
    ],
    receipts: [
      { value: "$80M+", detail: "first-year revenue for the new product line" },
      { value: "5", detail: "major outlets landed: Bloomberg, CNBC, MediaCorp, SPH, Discovery" },
      { value: "70%+", detail: "email campaign engagement on the premium line" },
      { value: "13-20%", detail: "conversion on those campaigns" },
    ],
  },
];
