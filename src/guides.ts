export type Guide = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  topic: "Budgeting" | "Saving" | "Spending habits";
  readingTime: string;
  status: "planned" | "published";
};

export type GuideContent = {
  intro: string[];
  sections: Array<{ id: string; heading: string; paragraphs: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  productNote: string;
  scopeNote: string;
  sources: Array<{ title: string; url: string }>;
};

// Full article text is loaded separately when a reader opens a guide.
export const publishedGuides: Guide[] = [
  {
    "slug": "how-to-track-expenses",
    "title": "How to Track Your Expenses",
    "summary": "Expense tracking works best when it is simple enough to survive a normal week.",
    "description": "Learn how to track daily expenses, build a simple expense tracking habit and see where your money goes without making the process complicated.",
    "topic": "Spending habits",
    "readingTime": "5 min read",
    "status": "published"
  },
  {
    "slug": "where-does-your-money-go",
    "title": "Where Does Your Money Go?",
    "summary": "The money usually did not vanish. It just left in pieces small enough to ignore.",
    "description": "Find where your money goes by reviewing spending patterns, monthly expenses and repeated habits that are easy to miss.",
    "topic": "Spending habits",
    "readingTime": "5 min read",
    "status": "published"
  },
  {
    "slug": "budget-categories",
    "title": "Budget Categories That Work",
    "summary": "A useful category list should make your money easier to read, not turn every receipt into paperwork.",
    "description": "Build budget categories that fit real life, keep expense categories simple and make your monthly budget easier to understand.",
    "topic": "Budgeting",
    "readingTime": "5 min read",
    "status": "published"
  },
  {
    "slug": "weekly-vs-monthly-budgeting",
    "title": "Weekly vs Monthly Budgeting",
    "summary": "A month is useful for planning, a week is often better for noticing when the plan is starting to drift.",
    "description": "Compare weekly and monthly budgeting, set a realistic weekly spending limit and use a simple cash flow budget when timing matters.",
    "topic": "Budgeting",
    "readingTime": "5 min read",
    "status": "published"
  }
];

export const plannedGuides: Guide[] = [
  {
    slug: "build-a-budget-you-can-keep",
    title: "Build a budget you can actually keep",
    summary:
      "Start with the money already moving through your month, then choose limits that leave room for real life.",
    topic: "Budgeting",
    readingTime: "6 min read",
    status: "planned",
  },
  {
    slug: "small-emergency-fund",
    title: "Start a small emergency fund",
    summary:
      "Choose a first target, find a repeatable contribution, and keep the money available for genuine surprises.",
    topic: "Saving",
    readingTime: "5 min read",
    status: "planned",
  },
  {
    slug: "weekly-spending-review",
    title: "Run a useful weekly spending review",
    summary:
      "Use fifteen quiet minutes to spot patterns, correct categories, and decide what needs attention next week.",
    topic: "Spending habits",
    readingTime: "4 min read",
    status: "planned",
  },
];

export const guides = [...publishedGuides, ...plannedGuides];
