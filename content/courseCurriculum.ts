// LMS curriculum for The AI Growth Playbook. Module 1's first two
// lessons are free previews with real content; everything after sits
// behind the paywall. Durations are content-plan estimates; adjust
// when the lessons are recorded.

export type Lesson = {
  title: string;
  duration: string;
  free?: boolean;
  slug?: string;
};

export type CourseModule = {
  title: string;
  summary: string;
  artifact?: string;
  lessons: Lesson[];
};

export const courseModules: CourseModule[] = [
  {
    title: "The Signal Desk",
    summary: "Turn reviews, support logs, and chat transcripts into next month's calendar.",
    artifact: "The brief template",
    lessons: [
      {
        title: "Briefs start from customer language, not brainstorms",
        duration: "9 min",
        free: true,
        slug: "briefs-start-from-customer-language",
      },
      {
        title: "Map your signal sources in one page",
        duration: "12 min",
        free: true,
        slug: "map-your-signal-sources",
      },
      { title: "The weekly sweep: from signal to brief", duration: "14 min" },
      { title: "Working session: your first signal-driven brief", duration: "18 min" },
    ],
  },
  {
    title: "The Voice Standard",
    summary: "Build the editorial rubric and banned-phrase list that keeps AI output yours.",
    artifact: "The voice rubric",
    lessons: [
      { title: "Why AI content drifts to the template", duration: "10 min" },
      { title: "Writing a rubric with teeth", duration: "15 min" },
      { title: "The banned list, and how to keep it current", duration: "9 min" },
      { title: "One bar, two writers: scoring human and AI drafts", duration: "13 min" },
    ],
  },
  {
    title: "The Second Reader",
    summary: "Restructure content so AI search cites you when search stops clicking.",
    artifact: "The AEO checklist and schema starter",
    lessons: [
      { title: "How machines read: citations, entities, structure", duration: "12 min" },
      { title: "The citation test and the byline test", duration: "10 min" },
      { title: "Schema, pillars, and intent clusters in practice", duration: "16 min" },
    ],
  },
  {
    title: "The Receipts",
    summary: "Attribution that survives zero-click search, in numbers a CFO signs off on.",
    artifact: "The CFO-ready reporting format",
    lessons: [
      { title: "What attribution can still see, and what it can't", duration: "11 min" },
      { title: "Building the report leadership actually reads", duration: "14 min" },
      { title: "Moving budget before the next brief", duration: "9 min" },
    ],
  },
  {
    title: "The Attention Ledger in Practice",
    summary: "Briefs that state their deposit, and the kill-rate review that raises quality.",
    lessons: [
      { title: "Deposits, withdrawals, and the earn rate", duration: "10 min" },
      { title: "Running the kill-rate review", duration: "12 min" },
      { title: "Course close: your 90-day rollout plan", duration: "8 min" },
    ],
  },
];

export type PreviewLesson = {
  slug: string;
  title: string;
  moduleTitle: string;
  duration: string;
  body: string[];
  nextLocked: string;
};

export const previewLessons: PreviewLesson[] = [
  {
    slug: "briefs-start-from-customer-language",
    title: "Briefs start from customer language, not brainstorms",
    moduleTitle: "Module 1: The Signal Desk",
    duration: "9 min",
    body: [
      "Most content calendars are built in a conference room. Someone suggests a theme, someone checks what competitors published, someone opens a keyword tool, and an hour later there's a quarter of briefs that nobody asked for. The output is grammatically fine and commercially inert, because it started from what the team could think of rather than what customers are already saying.",
      "Your customers describe their problems every day, in writing, in places you already pay to operate: product reviews, support tickets, chatbot transcripts, sales call notes, community threads, the replies under your competitors' posts. That text is the highest-grade content input that exists. It's specific, it's current, it uses the exact vocabulary your buyers will type into a search box or an AI chat, and it arrives pre-validated: someone cared enough to write it.",
      "The Signal Desk is the habit of routing that language into one place and letting it decide what gets made next. When a brief starts from a real customer sentence, three things change. The angle is sharper, because it answers a question someone actually asked. The language matches search intent, because it is the search intent. And the piece is easier to write, because the hardest part of writing, knowing what to say, arrived with the brief.",
      "A test you can run this week: pull the last ten pieces your team published and ask, for each one, which customer sentence prompted it. If the honest answer is 'none, we thought it was a good topic', you're publishing from imagination. Imagination is what the template-driven competitors are using too, which is why everyone's calendar looks the same.",
      "In the next lesson you'll build the one-page map of where your customer language lives, ranked by how fresh and how specific each source is. By the end of this module you'll have the brief template we use to turn a customer sentence into a commissioned piece in one page.",
    ],
    nextLocked: "Map your signal sources in one page",
  },
  {
    slug: "map-your-signal-sources",
    title: "Map your signal sources in one page",
    moduleTitle: "Module 1: The Signal Desk",
    duration: "12 min",
    body: [
      "Before any tooling, you need an inventory. The Signal Map is one page listing every place your customers talk to you or about you, scored on two axes: freshness (how recently the language was written) and specificity (how close it gets to a real problem in the customer's own words).",
      "Start with the places you own: support tickets, chatbot transcripts, onboarding survey answers, churn reasons, sales call notes, reply-to emails from your newsletter. These score highest on specificity because the customer is describing their situation to you directly, and nobody else can see them. That last part matters: owned signal is the only content input your competitors cannot copy.",
      "Then the places you rent: your reviews on public platforms, your social mentions and DMs, comments on your posts. Fresh, public, and useful, but visible to everyone, including the brands you compete with.",
      "Then the places you borrow: competitor reviews, industry community threads, the questions people ask in forums your buyers read. This is where you find the dissatisfaction your competitors created and haven't answered. Some of the best-performing briefs start as someone else's one-star review.",
      "Score each source one to five on both axes, multiply, and rank. Most teams discover the same uncomfortable thing: their highest-scoring sources (support tickets, churn surveys) feed nothing, while their content calendar is driven by their lowest-scoring input, which is usually 'what marketing thought of on Tuesday'. The map makes the gap undeniable, and it gives you the order in which to connect sources to your content pipeline.",
      "Assign one owner per source. Not a committee: a name. Their job is a twenty-minute weekly sweep, pulling the three most repeated or most surprising customer sentences into the shared desk. That's the raw material the rest of this module turns into briefs.",
    ],
    nextLocked: "The weekly sweep: from signal to brief",
  },
];
