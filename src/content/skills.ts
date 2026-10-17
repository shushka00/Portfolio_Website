/**
 * Skill proof matrix. Planning data: status and proof never render.
 * Badges show the skill name, plus "proven" or "shown" on the case header.
 *
 *   proven   a measured result for this skill is in a case study
 *   partial  the work is shown; the result is missing or not public
 *   gap      no proof yet; never rendered as a badge
 *
 * Names are terms any hiring manager uses: sentence case, three words max.
 * Product names and internal metric names belong in the proof, not the name.
 */
import type { Skill } from "./types";

export const skills: Skill[] = [
  {
    id: "activation",
    name: "Onboarding and activation",
    group: "design",
    bar: "A first-run flow with a before and after on time to value or activation rate.",
    status: "proven",
    proof: "[case-01 · results row 1 · source]",
  },
  {
    id: "research",
    name: "User research",
    group: "design",
    bar: "Methods chosen for a stated question, with one decision the research changed.",
    status: "partial",
    proof: "[case-02 · research table · source]",
  },
  {
    id: "outcomes",
    name: "Business outcomes",
    group: "business",
    bar: "A revenue or conversion figure with baseline, window and your share of credit.",
    status: "gap",
    proof: "",
  },
  {
    id: "metrics",
    name: "Metrics and KPIs",
    group: "business",
    bar: "Primary, secondary and guardrail metrics set before launch, then read after.",
    status: "partial",
    proof: "[case-02 · measurement · source]",
  },
  {
    id: "strategy",
    name: "Product strategy",
    group: "business",
    bar: "A reframed problem that changed scope, with who agreed and when.",
    status: "partial",
    proof: "[case-03 · reframing · source]",
  },
  {
    id: "prototyping",
    name: "Prototyping in code",
    group: "technology",
    bar: "A public, working prototype you built, linked from the case.",
    status: "gap",
    proof: "",
  },
];

const byId = new Map(skills.map((s) => [s.id, s]));

/** Skills a case may badge: proven or partial only, in the order given. */
export function badgesFor(skillIds: string[]): Skill[] {
  return skillIds
    .map((id) => byId.get(id))
    .filter((s): s is Skill => s !== undefined && s.status !== "gap")
    .slice(0, 4);
}
