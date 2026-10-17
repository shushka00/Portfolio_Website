/**
 * Site-wide copy: identity, hero, about page and links.
 *
 * Budgets (docs/DESIGN.md, "Fold budgets"): headline 8 words, lede 25,
 * whole fold 80. Every outcome carries a source that never renders.
 * Text in [square brackets] is a placeholder to replace.
 */
import type { Figure } from "./types";

export const site = {
  name: "[Your name]",
  title: "[Principal product designer]",
  description: "[One sentence: who you help and the result you bring.]",

  hero: {
    headline: "[A standard you work to, eight words]",
    lede: "[How you work, then one proof with a number. Twenty-five words at most, plain and specific.]",
    status: "[Now at Company]",
    outcomesLabel: "Selected outcomes",
    // Exactly three, strongest first. Shared results say "helped".
    outcomes: [
      { value: "[2x]", label: "[Revenue metric you helped move]", context: "[Company · year]", source: "[file, page, line]" },
      { value: "[+38%]", label: "[Conversion after a flow you designed]", context: "[Company · year]", source: "[file, page, line]" },
      { value: "[3 min]", label: "[Time to value, was 60]", context: "[Company · year]", source: "[file, page, line]" },
    ] satisfies Figure[],
    cta: { label: "See the work", href: "/#work" },
    secondary: { label: "About", href: "/about" },
  },

  work: {
    eyebrow: "Selected work",
    headline: "Three cases, each tied to a result.",
  },

  about: {
    headline: "[What you believe about design, eight words]",
    lede: "[Who you are in two sentences: years, domains, and the kind of problem you like. No adjectives you cannot prove.]",
    facts: [
      { key: "Location", value: "[City, remote]" },
      { key: "Focus", value: "[AI, developer tools, SaaS]" },
      { key: "Email", value: "[you@example.com]" },
    ],
    // Five visible rows at most; the rest sit behind "Earlier roles".
    experience: [
      { role: "[Current role]", org: "[Company]", when: "[2022 to now]" },
      { role: "[Education in progress]", org: "[School]", when: "[2025 to 2027]" },
      { role: "[Previous role]", org: "[Company]", when: "[2019 to 2022]" },
      { role: "[Previous role]", org: "[Company]", when: "[2017 to 2019]" },
      { role: "[Degree]", org: "[School]", when: "[2016]" },
    ],
    earlier: [{ role: "[First role]", org: "[Company]", when: "[2014 to 2016]" }],
    connectHeadline: "Start with an email.",
  },

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
} as const;
