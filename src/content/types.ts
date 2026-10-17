/**
 * Content model for the portfolio. Every page renders from these types, so
 * the case-study logic lives here as structure, not as prose.
 *
 * Rules the types encode (full reasoning: docs/CASE-STUDY-LOGIC.md):
 * - A case study follows one sequence (see CASE_SEQUENCE in sequence.ts).
 * - At least three hypotheses: activation, trust, and value (retention or
 *   revenue). The tuple type makes fewer than three a type error.
 * - A result row says what kind of number it is. Only shipped work may hold
 *   "measured" rows; ongoing and concept work show targets or deliverables.
 * - Every figure carries a source, so a claim can be checked before it ships.
 *
 * Text in [square brackets] is a placeholder. src/content/rules.ts counts
 * what is left to fill and flags copy that breaks the writing rules.
 */

export type CaseStatus = "shipped" | "ongoing" | "concept";

/** An image slot. Leave src empty to render the wireframe placeholder. */
export type Visual = {
  title: string;
  /** Why the image matters, not what it shows. */
  caption: string;
  ratio?: "16/9" | "4/3" | "1/1" | "3/2";
  src?: string;
  alt?: string;
};

export type Figure = {
  value: string;
  label: string;
  /** Small print under the label, for example "Company · 2025". */
  context?: string;
  /** Where the figure is written down. Never rendered; checked before shipping. */
  source: string;
};

export type Hypothesis = {
  id: string;
  /** Journey stage. The first three cover activation, trust, and value. */
  stage: string;
  assumption: string;
  hypothesis: string;
  intervention: string;
  kpi: string;
};

export type ResearchMethod = {
  method: string;
  source: string;
  why: string;
  revealed: string;
  limitation: string;
};

export type SolutionMove = {
  insight: string;
  response: string;
  why: string;
  visual?: Visual;
};

export type ResultKind = "measured" | "target" | "delivered";

export type ResultRow = {
  metric: string;
  before: string;
  after: string;
  kind: ResultKind;
  source: string;
};

export type CaseStudy = {
  slug: string;
  /** Display order, two digits: "01". */
  number: string;
  company: string;
  year: string;
  status: CaseStatus;

  /** Impact-led, 8 words or fewer (the fold headline budget). Names the outcome, never the activity. */
  title: string;
  /** One sentence, 25 words or fewer, that links the design move to the result. */
  summary: string;

  meta: {
    role: string;
    team: string;
    timeline: string;
    northStar: string;
  };

  /** Ids from src/content/skills.ts. At most four. */
  skillIds: string[];

  /** Home card and case hero share this visual. */
  hero: Visual;

  context: {
    headline: string;
    body: string;
    baseline?: Figure;
  };

  gap: {
    /** The contradiction in one sentence. */
    headline: string;
    body: string;
    figures: Figure[];
  };

  role: {
    headline: string;
    ownership: string;
    partners: string[];
    constraints: string[];
  };

  discovery: {
    /** Start with the question discovery answered. */
    question: string;
    findings: { title: string; body: string }[];
  };

  reframe: {
    business: string;
    design: string;
    why: string;
  };

  hypotheses: [Hypothesis, Hypothesis, Hypothesis, ...Hypothesis[]];

  measurement: {
    metric: string;
    target: string;
    reason: string;
    primary: string;
    secondary: string;
    guardrail: string;
    window: string;
  };

  tension: {
    headline: string;
    forces: [string, string];
    decision: string;
    why: string;
  };

  research: {
    headline: string;
    lede: string;
    methods: ResearchMethod[];
  };

  solution: {
    headline: string;
    moves: SolutionMove[];
  };

  results: {
    headline: string;
    lede: string;
    rows: ResultRow[];
    tradeoff?: string;
  };

  reflection: {
    keep: string;
    change: string;
    principle: string;
  };
};

export type SkillStatus = "proven" | "partial" | "gap";

export type Skill = {
  id: string;
  name: string;
  group: "design" | "business" | "technology" | "leadership";
  /** What a hiring manager accepts as proof. */
  bar: string;
  status: SkillStatus;
  /** Where the proof lives: a case slug plus a source line. */
  proof: string;
};
