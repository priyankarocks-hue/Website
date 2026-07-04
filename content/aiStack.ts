// The AI systems Priyanka runs across the content lifecycle — ideation
// through reporting. Update if your real tool stack changes.

export const aiStack = [
  {
    stage: "Ideation",
    description: "Finding what's worth writing before a single draft exists.",
    tools: [
      { name: "Claude & ChatGPT", use: "Topic mining, content briefs, and editorial angle testing" },
      { name: "AnswerThePublic", use: "Surfacing the exact questions an audience is searching" },
      { name: "MarketMuse / Frase", use: "Content-gap and topic-authority research" },
      { name: "SparkToro", use: "Audience research — who to reach and where they actually are" },
    ],
  },
  {
    stage: "Generation",
    description: "Producing on-brand content at a pace one editor alone couldn't match.",
    tools: [
      { name: "Claude & ChatGPT", use: "Long-form drafting, editing, and matching a brand's editorial voice" },
      { name: "Jasper", use: "On-brand marketing copy at scale across campaigns" },
      { name: "Midjourney / DALL·E", use: "Campaign visuals and social creative" },
      { name: "Descript", use: "AI-assisted video and audio editing for talks and reels" },
    ],
  },
  {
    stage: "Publishing & Distribution",
    description: "Getting content live, everywhere it needs to be, without manual busywork.",
    tools: [
      { name: "WordPress + AI SEO plugins", use: "On-page optimization at publish time" },
      { name: "Buffer / Hootsuite", use: "AI-assisted scheduling and caption generation for social" },
      { name: "Zapier / Make", use: "Automated publish-and-syndicate workflows across channels" },
      { name: "Klaviyo / Mailchimp", use: "AI send-time and subject-line optimization for email" },
    ],
  },
  {
    stage: "Tracking & Reporting",
    description: "Proving what worked — in numbers a CFO will believe.",
    tools: [
      { name: "Google Analytics 4", use: "AI-assisted traffic and behavior analysis" },
      { name: "Looker Studio", use: "Automated executive dashboards" },
      { name: "SEMrush / Ahrefs", use: "AI content and keyword-ranking tracking" },
      { name: "HubSpot", use: "AI reporting for pipeline and content attribution" },
    ],
  },
];
