/**
 * Case 02 · ongoing work with targets, not results.
 * The pattern for work that has not launched: results rows are "target" or
 * "delivered", and the results section reads as a measurement plan.
 * rules.ts flags any "measured" row while status is "ongoing".
 */
import type { CaseStudy } from "../types";

export const case02: CaseStudy = {
  slug: "case-02",
  number: "02",
  company: "[Company]",
  year: "[2026, ongoing]",
  status: "ongoing",

  title: "[Diagnosing where signups stall before a first success]",
  summary: "[A funnel audit found three leaks before first success; the proposed flow targets each one with a measurable bet.]",

  meta: {
    role: "[Principal product designer]",
    team: "[1 PM, engineering, data]",
    timeline: "[April 2026, ongoing]",
    northStar: "[First success still active after 7 days]",
  },

  skillIds: ["research", "metrics"],

  hero: {
    title: "[Signup to first success, as it is today]",
    caption: "[Why this map matters: the three places people leave.]",
    ratio: "16/9",
  },

  context: {
    headline: "[Interest was high. Almost nobody finished.]",
    body: "[Two or three sentences on product, user and market. Only what a reader needs to care.]",
    baseline: { value: "[0.15%]", label: "[Signups reaching first success]", source: "[cohort query, date]" },
  },

  gap: {
    headline: "[People left before the product could prove itself.]",
    body: "[Say where they left in plain words. Check the stage counts add up before publishing.]",
    figures: [
      { value: "[81%]", label: "[Left before account ready]", source: "[cohort query, date]" },
      { value: "[93%]", label: "[Left before starting]", source: "[cohort query, date]" },
      { value: "[78%]", label: "[Left before publish]", source: "[cohort query, date]" },
    ],
  },

  role: {
    headline: "[Lead designer on the activation path.]",
    ownership: "[Audit, journey, prototype and measurement plan. One line on the call you made.]",
    partners: ["[Product]", "[Data]", "[Support]"],
    constraints: ["[Two products, one record]", "[Live users during change]", "[Data access limited]"],
  },

  discovery: {
    question: "[Did one project mean the same thing everywhere?]",
    findings: [
      { title: "[One record, two names]", body: "[One sentence of evidence and what it changed.]" },
      { title: "[Credentials lived elsewhere]", body: "[One sentence of evidence and what it changed.]" },
      { title: "[Publish felt final]", body: "[One sentence of evidence and what it changed.]" },
    ],
  },

  reframe: {
    business: "[Combine two product surfaces]",
    design: "[Reduce drop-off before users reach value]",
    why: "[One sentence on why the second frame made the solution obvious.]",
  },

  hypotheses: [
    {
      id: "H1",
      stage: "Activation",
      assumption: "[Users cannot find the start]",
      hypothesis: "[If one entry point exists, more users start]",
      intervention: "[Single entry after login]",
      kpi: "[Starts per login]",
    },
    {
      id: "H2",
      stage: "Trust",
      assumption: "[Publish feels irreversible]",
      hypothesis: "[If rollback is visible, more users publish]",
      intervention: "[Preview tiers and rollback]",
      kpi: "[Publish rate]",
    },
    {
      id: "H3",
      stage: "Value",
      assumption: "[Health is hard to read]",
      hypothesis: "[If health reads as a sentence, users return]",
      intervention: "[Live activity summary]",
      kpi: "[7-day active rate]",
    },
  ],

  measurement: {
    metric: "[first successes still active after 7 days]",
    target: "[60 percent]",
    reason: "[safer preview removes the fear of publishing]",
    primary: "[7-day active rate of first successes]",
    secondary: "[Median time to first success]",
    guardrail: "[Rollback rate does not rise]",
    window: "[30 days after launch]",
  },

  tension: {
    headline: "[Fast publish against safe publish.]",
    forces: ["[Growth wanted one-click public launch]", "[Users feared public mistakes]"],
    decision: "[Private preview first, public as an equal choice.]",
    why: "[One sentence on the evidence that made it hold.]",
  },

  research: {
    headline: "[Existing evidence came before new interviews.]",
    lede: "[Product data, docs and support first; interviews only for the open question.]",
    methods: [
      { method: "[Heuristic review]", source: "[Both products]", why: "[Find obvious failures]", revealed: "[20 findings, 2 critical]", limitation: "[Expert view only]" },
      { method: "[Funnel forensics]", source: "[Cohort data]", why: "[Split the leaks]", revealed: "[Three separate leaks]", limitation: "[Says where, not why]" },
      { method: "[Interview plan]", source: "[3 droppers]", why: "[Where trust broke]", revealed: "[Pending fieldwork]", limitation: "[Not yet run]" },
    ],
  },

  solution: {
    headline: "[Three surfaces close the three leaks.]",
    moves: [
      {
        insight: "[Users left to find credentials]",
        response: "[Credentials panel in context]",
        why: "[Removed the detour to another product]",
        visual: { title: "[Credentials panel]", caption: "[Why the panel opens where the work happens.]", ratio: "4/3" },
      },
      {
        insight: "[Publish felt public and final]",
        response: "[Preview tiers with rollback]",
        why: "[A safer step before full exposure]",
        visual: { title: "[Publish choices]", caption: "[Why no option is pre-selected.]", ratio: "4/3" },
      },
      {
        insight: "[Health after launch was unclear]",
        response: "[Live activity in plain words]",
        why: "[Users see whether it works]",
      },
    ],
  },

  results: {
    headline: "[A tested direction and a measurement plan.]",
    lede: "[Launch impact is pending. These are targets and what was delivered.]",
    rows: [
      { metric: "[7-day active rate]", before: "[Unknown]", after: "[60%]", kind: "target", source: "[measurement plan, date]" },
      { metric: "[Time to first success]", before: "[Hours]", after: "[Under 3 min]", kind: "target", source: "[measurement plan, date]" },
      { metric: "[Working prototype]", before: "[None]", after: "[Shared with team]", kind: "delivered", source: "[prototype link]" },
    ],
  },

  reflection: {
    keep: "[What you would do again.]",
    change: "[What you would do differently.]",
    principle: "[The principle the project reinforced, in one line.]",
  },
};
