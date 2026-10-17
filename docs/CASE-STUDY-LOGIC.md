# Case-study logic

How a case study argues, and how the template enforces it. Distilled from the live portfolio's guide (kept verbatim in [reference/how-to-write-case-study.md](reference/how-to-write-case-study.md)), which benchmarks Ghaida Zahran's Netflix Bundles case study.

**Core rule.** A case study is proof of judgment, not a diary of work. Lead with the user or business impact, then show how design created it.

## Where each rule lives in code

| Rule | Enforced by |
|---|---|
| Fixed section sequence | `src/content/sequence.ts` |
| At least three hypotheses | Tuple type in `src/content/types.ts` |
| Activation, trust and value hypotheses present | `rules.ts` |
| Title 8 words, impact first, never an activity | `rules.ts` |
| Summary 25 words | `rules.ts` |
| Unshipped work cannot claim measured results | `rules.ts` and the result kind chip |
| Measured results need a source | `rules.ts` |
| No self-aware copy, filler, dashes, arrows, process diary | `rules.ts` |
| At most 5 items per visible group | `rules.ts` |

The dev-only Content check at the bottom of each case page lists every broken rule.

## Title

The title answers one question: what behaviour changed, what metric moved, what risk shrank, what problem became solvable.

| Use | Avoid |
|---|---|
| Reducing time to first value from hours to minutes | Merging product A and product B |
| Diagnosing where signups stall before first success | Redesigning the dashboard |
| Helping teams fix the riskiest issue first | Building an ecosystem |

Operations (merge, consolidation, new IA) can appear in the body as the means. They never carry the headline.

## Opening

1. Case label: `Case study 01 · Company · Year` and a status chip.
2. Impact-led title.
3. One-sentence summary that links the design move to the result.
4. Role, Team, Timeline, North star. Skip a generic "Scope".

If metrics exist, show them early. If the work is ongoing, say so and name the measurement frame.

## Sequence and section jobs

| Step | Job | Write | Avoid |
|---|---|---|---|
| Overview | Problem, why it mattered, what changed, result | The whole case in 20 seconds | Background lore |
| Context | Just enough to care | Product, user, market stakes | The org chart |
| The gap | The sharp contradiction | "Signups were high, almost nobody reached a first result" | "The experience was confusing" |
| My role | Ownership, partners, constraints | Sole, lead or first designer; real constraints | "I worked on UX and UI" |
| Discovery | A question, then the evidence | "What did project mean in each product?" | A list of methods |
| Reframing | Business frame to user frame | "Combine two surfaces" becomes "reduce drop-off before value" | Skipping it |
| Hypotheses | Testable bets | If [change], then [behaviour] moves [KPI] | Tasks ("add a screen") |
| Measurement | What will prove it | Primary, secondary, guardrail, target, window | "Success is engagement" |
| Tension | The real tradeoff | Revenue vs trust, speed vs confidence, and the decision | "We collaborated closely" |
| Research | Why each method, what it changed | Method, source, why, revealed, limit | A dump of methods |
| Solution | A response to evidence | Insight, design response, why it mattered | Screens without decisions |
| Results | Impact, or an honest plan | Measured rows with sources; named tradeoffs | Launch impact for ongoing work |
| Reflection | Judgment | Keep, change, the principle | Gratitude, "collaboration matters" |

## Hypotheses

An assumption is believed. A hypothesis is testable: it links a design move to an outcome.

- Assumption: "Users want to finish setup quickly."
- Hypothesis: "If setup drops from four required choices to one with reversible defaults, first-session completion rises."

Minimum set:

| # | Stage | Question it answers |
|---|---|---|
| H1 | Activation | What gets users to the first meaningful outcome? |
| H2 | Trust | What makes the product feel safe or worth committing to? |
| H3 | Value | What captures durable value after the first action: retention or revenue? |

Optional extras: onboarding, engagement, expansion, error recovery, pricing, accessibility, support reduction.

## Measurement

Sentence frame: **By launching this design, we assume it will move [metric] to [target] because [reason].**

| Field | Example |
|---|---|
| Primary | First successful workflow completion |
| Secondary | Median time to first success |
| Guardrail | Support contact rate rises no more than 2% |
| Target | +15% |
| Window | 30 days after launch |

Label unvalidated numbers as targets. Never present them as results.

## Results by status

| Status | Results eyebrow | Allowed row kinds | Example rows |
|---|---|---|---|
| Shipped | Results | Measured, target, delivered | Time to first value 60 min to 3 min, measured, source: dashboard Q2 |
| Ongoing | Results so far | Target, delivered | 7-day active rate 60%, target; prototype shared, delivered |
| Concept | Results so far | Target, delivered | 3 pilot teams onboarded, delivered |

A small negative number with its reason makes the story stronger. Prefer "completed and retained" over raw completion when reversals, churn or refunds would make completion misleading.

## Hard style rules

1. **Never self-aware.** No "this case study", "this section proves", "the narrative shows".
2. **No internal operations as the problem.** Merge, alignment, handoff and platform work are means, not the headline.
3. **No first-person process diary.** "Research was conducted to find why users dropped," never "I started by". "I" only in the role section.
4. **Plain language.** If a reader outside the domain would stall, rewrite it.
5. **No formula contrasts.** No "not X but Y", "not just", "more than", slogan "from X to Y", dashes or vague claims.

## Images and captions

Every image has a job: the broken moment, the decision point, the tested concepts, the final flow, the outcome. The caption says why it matters.

- Weak: "Plan selection screen."
- Strong: "The included plan stayed visible at $0 extra and no higher plan was pre-selected, so upgrade value was comparable without pressure."

## Metrics

- Put the most important metric near the top and explain it in human terms.
- Give every figure its baseline and window when space allows.
- Keep credit exact: "I designed" for craft, "helped" or "the team" for shared results.
- Prefer behaviour metrics over vanity metrics. Time on page is never success unless attention is the goal.

## Checklist before publishing

- [ ] Title states impact in 8 words or fewer.
- [ ] A recruiter gets the case in 20 seconds.
- [ ] The business problem is reframed as a user problem.
- [ ] Ownership is unmistakable.
- [ ] Every section advances the argument.
- [ ] Every caption has a point of view.
- [ ] Metrics are honest, specific and sourced.
- [ ] At least one real tension or tradeoff.
- [ ] The solution follows from discovery.
- [ ] The reflection reveals judgment.
- [ ] The Content check on the page is empty.
- [ ] The fold budget check passes.
