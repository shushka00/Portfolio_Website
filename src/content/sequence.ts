/**
 * The case-study sequence. The case page renders sections in this order and
 * the table of contents reads the same list, so reordering here reorders
 * both. Each job is the one question the section must answer
 * (docs/CASE-STUDY-LOGIC.md, "Section jobs").
 */
export const CASE_SEQUENCE = [
  { id: "overview", label: "Overview", job: "What changed, why it mattered, and the result, in 20 seconds." },
  { id: "context", label: "Context", job: "Just enough about product, user and market to care." },
  { id: "gap", label: "The gap", job: "The sharp contradiction, with the number that proves it." },
  { id: "role", label: "My role", job: "What the designer owned, with whom, under which constraints." },
  { id: "discovery", label: "Discovery", job: "The question discovery answered and the evidence that changed the view." },
  { id: "reframe", label: "Reframing", job: "Business frame to user frame, so the solution feels inevitable." },
  { id: "hypotheses", label: "Hypotheses", job: "Three testable bets: activation, trust, value." },
  { id: "measurement", label: "Measurement", job: "Primary, secondary and guardrail metrics, with target and window." },
  { id: "tension", label: "Tension", job: "The real tradeoff, the decision, and why it held." },
  { id: "research", label: "Research", job: "Why each method was used and what it changed." },
  { id: "solution", label: "Solution", job: "Insight, design response, why it mattered." },
  { id: "results", label: "Results", job: "Measured impact, or an honest target and plan." },
  { id: "reflection", label: "Reflection", job: "What to keep, what to change, the principle." },
] as const;

export type SectionId = (typeof CASE_SEQUENCE)[number]["id"];
