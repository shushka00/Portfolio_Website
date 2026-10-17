/**
 * Case 03 · concept or 0 to 1 work.
 * The pattern for a new product without launch data: the case proves
 * judgment through framing, tension and decisions. Results are
 * "delivered" or "target" rows only.
 */
import type { CaseStudy } from "../types";

export const case03: CaseStudy = {
  slug: "case-03",
  number: "03",
  company: "[Company]",
  year: "[2024]",
  status: "concept",

  title: "[Helping teams fix the riskiest issue first]",
  summary: "[A new product turned scattered alerts into one ranked list, so teams fixed the riskiest issue first.]",

  meta: {
    role: "[Founding product designer]",
    team: "[Founder, 3 engineers]",
    timeline: "[6 months, concept to pilot]",
    northStar: "[Time from alert to first fix]",
  },

  skillIds: ["strategy", "research"],

  hero: {
    title: "[The ranked risk list]",
    caption: "[Why ranking beats a feed: the first fix is always the riskiest.]",
    ratio: "16/9",
  },

  context: {
    headline: "[Teams had alerts everywhere and no order.]",
    body: "[Two or three sentences on product, user and market. Only what a reader needs to care.]",
  },

  gap: {
    headline: "[More alerts made teams slower to act.]",
    body: "[Name the contradiction in plain words and the cost of it.]",
    figures: [
      { value: "[400]", label: "[Alerts per team per week]", source: "[pilot interview notes]" },
      { value: "[5]", label: "[Tools checked per fix]", source: "[pilot interview notes]" },
    ],
  },

  role: {
    headline: "[First designer, product shaped from zero.]",
    ownership: "[Product definition, IA, prototype and pilot. One line on the call you made.]",
    partners: ["[Founder]", "[Engineering]", "[Pilot customers]"],
    constraints: ["[No existing users]", "[Regulated domain]", "[Six-month runway]"],
  },

  discovery: {
    question: "[What did teams need to know before acting?]",
    findings: [
      { title: "[Order beat volume]", body: "[One sentence of evidence and what it changed.]" },
      { title: "[Owners were unclear]", body: "[One sentence of evidence and what it changed.]" },
      { title: "[Proof of fix mattered]", body: "[One sentence of evidence and what it changed.]" },
    ],
  },

  reframe: {
    business: "[Build a dashboard for every alert]",
    design: "[Tell a team which risk to fix first]",
    why: "[One sentence on why the second frame made the solution obvious.]",
  },

  hypotheses: [
    {
      id: "H1",
      stage: "Activation",
      assumption: "[Setup takes too long]",
      hypothesis: "[If sources connect in one step, pilots start]",
      intervention: "[One-step source connect]",
      kpi: "[Pilot start rate]",
    },
    {
      id: "H2",
      stage: "Trust",
      assumption: "[Rankings feel arbitrary]",
      hypothesis: "[If each rank shows why, teams act on it]",
      intervention: "[Reason shown per rank]",
      kpi: "[Fixes from top 5]",
    },
    {
      id: "H3",
      stage: "Value",
      assumption: "[Progress is invisible]",
      hypothesis: "[If fixes show as risk removed, teams renew]",
      intervention: "[Weekly risk-removed report]",
      kpi: "[Pilot to paid]",
    },
  ],

  measurement: {
    metric: "[time from alert to first fix]",
    target: "[half the pilot baseline]",
    reason: "[teams start with the riskiest issue]",
    primary: "[Time from alert to first fix]",
    secondary: "[Share of fixes from the top five]",
    guardrail: "[Missed critical alerts stay at zero]",
    window: "[Eight-week pilot]",
  },

  tension: {
    headline: "[Show everything against show what matters.]",
    forces: ["[Buyers asked for full coverage]", "[Users needed one next action]"],
    decision: "[Ranked list first, full feed one click away.]",
    why: "[One sentence on the evidence that made it hold.]",
  },

  research: {
    headline: "[Research tested the ranking before the interface.]",
    lede: "[Pilot interviews and card sorts with three teams.]",
    methods: [
      { method: "[Interviews]", source: "[6 practitioners]", why: "[How fixes start]", revealed: "[Order beats volume]", limitation: "[Small sample]" },
      { method: "[Card sort]", source: "[3 teams]", why: "[Test the ranking]", revealed: "[Two rules agreed]", limitation: "[Lab setting]" },
      { method: "[Prototype test]", source: "[5 users]", why: "[Check trust]", revealed: "[Reasons needed]", limitation: "[No live data]" },
    ],
  },

  solution: {
    headline: "[Three decisions shaped the first release.]",
    moves: [
      {
        insight: "[Teams drowned in volume]",
        response: "[One ranked list of risks]",
        why: "[The first action became obvious]",
        visual: { title: "[Ranked list]", caption: "[Why the top item is larger than the rest.]", ratio: "4/3" },
      },
      {
        insight: "[Ranks felt arbitrary]",
        response: "[A reason beside every rank]",
        why: "[Teams trusted the order enough to act]",
        visual: { title: "[Rank reason]", caption: "[Why the reason is one sentence, not a score.]", ratio: "4/3" },
      },
      {
        insight: "[Progress was invisible]",
        response: "[Risk removed, shown weekly]",
        why: "[Gave buyers a reason to renew]",
      },
    ],
  },

  results: {
    headline: "[What the pilot delivered, and what comes next.]",
    lede: "[No launch data yet. Targets and deliverables only.]",
    rows: [
      { metric: "[Pilot teams onboarded]", before: "[0]", after: "[3]", kind: "delivered", source: "[pilot log]" },
      { metric: "[Time to first fix]", before: "[Pilot baseline]", after: "[Half]", kind: "target", source: "[pilot plan]" },
    ],
  },

  reflection: {
    keep: "[What you would do again.]",
    change: "[What you would do differently.]",
    principle: "[The principle the project reinforced, in one line.]",
  },
};
