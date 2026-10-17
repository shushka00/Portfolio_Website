/**
 * Case registry. Home lists cases in this order; prev and next links follow
 * it. To add a case: copy a case file, give it a new slug, add it here.
 */
import type { CaseStudy } from "../types";
import { case01 } from "./case-01";
import { case02 } from "./case-02";
import { case03 } from "./case-03";

export const cases: CaseStudy[] = [case01, case02, case03];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function neighbours(slug: string) {
  const i = cases.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? cases[i - 1] : undefined,
    next: i >= 0 && i < cases.length - 1 ? cases[i + 1] : undefined,
  };
}
