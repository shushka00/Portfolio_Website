/**
 * Content check for case studies. The writing rules in
 * docs/CASE-STUDY-LOGIC.md, turned into code so a draft shows what is
 * left to fix. The case page lists the issues in development only.
 */
import type { CaseStudy } from "./types";

const PLACEHOLDER = /\[[^\]]+\]/;

const ACTIVITY_TITLE = /^\[?(merging|redesigning|building|creating|improving|designing the|launching)\b/i;

const PHRASES: [RegExp, string][] = [
  [/this case study|this section|the narrative/i, "Self-aware copy: keep the reader inside the product problem."],
  [/\bnot just\b|\bmore than\b/i, "Contrast formula (\"not just\", \"more than\"): state the claim directly."],
  [/seamless|leverag|robust|worked closely|improved the ux/i, "Filler word: say what changed and by how much."],
  [/[—–]|->|→/, "Dash or arrow in copy: use a full stop or \" · \"."],
  [/\bI (started|moved|did|conducted|treated)\b/, "First-person process diary: write the outcome, keep \"I\" for the role section."],
];

function words(text: string) {
  return text.replace(/[[\]]/g, "").trim().split(/\s+/).filter(Boolean).length;
}

function strings(value: unknown, path = ""): [string, string][] {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) =>
      // Sources are notes for the author, not reader-facing copy.
      k === "source" ? [] : strings(v, path ? `${path}.${k}` : k),
    );
  }
  return [];
}

export type Issue = { field: string; message: string };

export function checkCase(cs: CaseStudy): Issue[] {
  const issues: Issue[] = [];
  const copy = strings(cs);

  const open = copy.filter(([, v]) => PLACEHOLDER.test(v));
  if (open.length > 0) {
    issues.push({ field: "all", message: `${open.length} fields still hold [placeholder] text.` });
  }

  if (words(cs.title) > 8) issues.push({ field: "title", message: "Title is over 8 words (fold headline budget)." });
  if (ACTIVITY_TITLE.test(cs.title)) {
    issues.push({ field: "title", message: "Title names an activity. Lead with the outcome it moved." });
  }
  if (words(cs.summary) > 25) issues.push({ field: "summary", message: "Summary is over 25 words." });

  const stages = cs.hypotheses.map((h) => h.stage.toLowerCase());
  for (const need of ["activation", "trust"]) {
    if (!stages.some((s) => s.includes(need))) {
      issues.push({ field: "hypotheses", message: `No ${need} hypothesis.` });
    }
  }
  if (!stages.some((s) => /value|retention|revenue/.test(s))) {
    issues.push({ field: "hypotheses", message: "No value, retention or revenue hypothesis." });
  }

  if (cs.status !== "shipped" && cs.results.rows.some((r) => r.kind === "measured")) {
    issues.push({ field: "results", message: "Work that has not shipped cannot claim measured results. Use target or delivered." });
  }
  cs.results.rows
    .filter((r) => r.kind === "measured" && !r.source.trim())
    .forEach((r) => issues.push({ field: "results", message: `"${r.metric}" has no source.` }));

  const caps: [string, number, number][] = [
    ["skillIds", cs.skillIds.length, 4],
    ["gap.figures", cs.gap.figures.length, 3],
    ["discovery.findings", cs.discovery.findings.length, 3],
    ["research.methods", cs.research.methods.length, 5],
    ["solution.moves", cs.solution.moves.length, 5],
    ["results.rows", cs.results.rows.length, 5],
  ];
  caps
    .filter(([, n, max]) => n > max)
    .forEach(([field, n, max]) => issues.push({ field, message: `${n} items; keep a visible group to ${max}.` }));

  for (const [field, value] of copy) {
    for (const [pattern, message] of PHRASES) {
      if (pattern.test(value) && !(field.startsWith("role.") && message.startsWith("First-person"))) {
        issues.push({ field, message });
      }
    }
  }

  return issues;
}
