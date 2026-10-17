/**
 * Case 01 · shipped work with measured results.
 * The pattern for a launched product: results rows are "measured" and each
 * one names its source. Replace every [bracket] before publishing.
 */
import type { CaseStudy } from "../types";

export const case01: CaseStudy = {
  slug: "case-01",
  number: "01",
  company: "[Company]",
  year: "[2025]",
  status: "shipped",

  title: "[Cutting time to first value to three minutes]",
  summary: "[The new setup flow got users to a working result in minutes, and more of them paid.]",

  meta: {
    role: "[Principal product designer]",
    team: "[1 PM, 5 engineers, 1 designer]",
    timeline: "[9 months to launch]",
    northStar: "[Time to first value, 60 min to 3 min]",
  },

  skillIds: ["activation", "metrics", "research"],

  hero: {
    title: "[Final flow, first screen to first result]",
    caption: "[Why it matters: the decision the redesign removed.]",
    ratio: "16/9",
  },

  context: {
    headline: "[The platform worked. Nothing guided people through it.]",
    body: "[Two or three sentences on product, user and market. Only what a reader needs to care.]",
    baseline: { value: "[60 min]", label: "[Baseline time to first value]", source: "[analytics export, date]" },
  },

  gap: {
    headline: "[Many signed up. Few reached a first result.]",
    body: "[Name the contradiction in plain words, then say where people left.]",
    figures: [
      { value: "[82%]", label: "[Left before setup]", source: "[funnel, cohort, date]" },
      { value: "[64%]", label: "[Left at first test]", source: "[funnel, cohort, date]" },
      { value: "[1 in 10]", label: "[Reached paid intent]", source: "[funnel, cohort, date]" },
    ],
  },

  role: {
    headline: "[Sole designer from concept to launch.]",
    ownership: "[Strategy, flows, prototype, content and handoff. One line on the call you made.]",
    partners: ["[Product]", "[Engineering]", "[Sales]"],
    constraints: ["[Frozen backend model]", "[Launch date fixed]", "[No research budget]"],
  },

  discovery: {
    question: "[Where did trust break before the first result?]",
    findings: [
      { title: "[Trust came after the first result]", body: "[One sentence of evidence and what it changed.]" },
      { title: "[Production questions came early]", body: "[One sentence of evidence and what it changed.]" },
      { title: "[Launch was not the end]", body: "[One sentence of evidence and what it changed.]" },
    ],
  },

  reframe: {
    business: "[Ship a builder that sells more minutes]",
    design: "[A working result in the first session]",
    why: "[One sentence on why the second frame made the solution obvious.]",
  },

  hypotheses: [
    {
      id: "H1",
      stage: "Activation",
      assumption: "[First choice is too open]",
      hypothesis: "[If defaults are set, more users finish setup]",
      intervention: "[Guided setup with defaults]",
      kpi: "[Setup completion]",
    },
    {
      id: "H2",
      stage: "Trust",
      assumption: "[Consequences feel unclear]",
      hypothesis: "[If users test privately first, more publish]",
      intervention: "[Private test before publish]",
      kpi: "[Publish rate]",
    },
    {
      id: "H3",
      stage: "Value",
      assumption: "[Value shows too late]",
      hypothesis: "[If results show at once, more users pay]",
      intervention: "[Usage summary after first run]",
      kpi: "[Paid conversion]",
    },
  ],

  measurement: {
    metric: "[time to first value]",
    target: "[under 3 minutes]",
    reason: "[users make one choice instead of four]",
    primary: "[Time to first value, median]",
    secondary: "[Setup completion, publish rate]",
    guardrail: "[Support tickets per new user]",
    window: "[First 90 days after launch]",
  },

  tension: {
    headline: "[First-run speed against depth for power users.]",
    forces: ["[Sales wanted every option visible]", "[New users stalled at the options]"],
    decision: "[Defaults first, advanced options one click away.]",
    why: "[One sentence on the evidence that made it hold.]",
  },

  research: {
    headline: "[Research looked for where people gave up.]",
    lede: "[One week, five interviews, existing funnel data first.]",
    methods: [
      { method: "[Funnel review]", source: "[Product analytics]", why: "[Find the leak]", revealed: "[Largest drop at setup]", limitation: "[Says where, not why]" },
      { method: "[Interviews]", source: "[5 users]", why: "[Find the why]", revealed: "[Trust needs a result]", limitation: "[Small sample]" },
      { method: "[Benchmark]", source: "[3 competitors]", why: "[Market promise]", revealed: "[Minutes, not hours]", limitation: "[Static review]" },
    ],
  },

  solution: {
    headline: "[Three moves from signup to first result.]",
    moves: [
      {
        insight: "[Users stalled at the first choice]",
        response: "[Guided setup with safe defaults]",
        why: "[Removed the step that blocked first runs]",
        visual: { title: "[Guided setup]", caption: "[What the default prevents.]", ratio: "4/3" },
      },
      {
        insight: "[Trust came only after hearing a result]",
        response: "[Live test beside the editor]",
        why: "[The first result arrived in the same session]",
        visual: { title: "[Live test panel]", caption: "[Why the test sits next to the editor.]", ratio: "4/3" },
      },
      {
        insight: "[Launch left users guessing]",
        response: "[Next step shown after launch]",
        why: "[Kept momentum after launch]",
      },
    ],
  },

  results: {
    headline: "[What moved in the first 90 days.]",
    lede: "[Measured against the baseline in the gap section.]",
    rows: [
      { metric: "[Time to first value]", before: "[60 min]", after: "[3 min]", kind: "measured", source: "[dashboard, date range]" },
      { metric: "[Paid conversion]", before: "[1 in 10]", after: "[3 in 10]", kind: "measured", source: "[dashboard, date range]" },
      { metric: "[Repeat use]", before: "[Not tracked]", after: "[25%]", kind: "measured", source: "[dashboard, date range]" },
    ],
    tradeoff: "[One number that went down, and why that was acceptable.]",
  },

  reflection: {
    keep: "[What you would do again.]",
    change: "[What you would do differently.]",
    principle: "[The principle the project reinforced, in one line.]",
  },
};
