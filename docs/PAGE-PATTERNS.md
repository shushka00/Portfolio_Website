# Page patterns

Every block the site uses: its job, its anatomy, its budget and the file that renders it. Reuse these before inventing a new one. Patterns are listed in the order a reader meets them.

Sizes follow the S/M/L rule (docs/DESIGN.md §5): L spans 7 to 12 of 12 columns, M spans 4 to 6, S spans 3 to 4.

## Site chrome

| Pattern | Job | Anatomy | File |
|---|---|---|---|
| Nav | Find home, work, about | Name (mono) · optional page label · Work · About | `components/SiteChrome.tsx` |
| Footer | Leave a trail | Year and name · profile links | `components/SiteChrome.tsx` |
| Case TOC | Jump within a long case | "On this page" · one link per sequence step · active step bold. Wide screens only | `components/CaseTOC.tsx` |
| Prev and next | Keep reading | Previous title · next title, or back to all work | `app/work/[slug]/page.tsx` |

Chrome sits outside the fold budgets.

## Shared blocks

| Pattern | Job | Anatomy | Budget | File |
|---|---|---|---|---|
| Section head | Name the step, carry the message | Eyebrow (mono, uppercase) · title · optional lede | Title 8, lede 25 | `Parts.tsx` `SectionHead` |
| Stat | A number as evidence | Mono value · plain label · optional small print. Top rule 2px ink | Label 6 | `Parts.tsx` `Stat` |
| Status chip | Say if the work shipped | Square marker · Shipped, Ongoing or Concept. Filled marker only when shipped | 1 | `Parts.tsx` `StatusChip` |
| Proof badges | Which skills this case proves | Up to four chips. "proven" needs a measured result here; otherwise "shown" | 4 chips | `Parts.tsx` `ProofBadges` |
| Image slot | Hold a visual with a point of view | Grey ground, cross, `IMG · ratio` tag, title. Caption says why it matters | Caption 12 | `Placeholder.tsx` |
| Card | One idea in a box | 1px grey border, 24px padding | 20 | `.card` in `globals.css` |
| Accent band | The one thing to see first in a fold | Inverted block: ink ground, paper text | One per fold | `.accent` in `globals.css` |
| Data table | Parallel rows to scan | Mono uppercase headers on a 2px rule, grey row rules. Scrolls inside its box on phones | 5 rows | `.table` in `globals.css` |
| Button | The fold's one action | Ink fill, mono uppercase label, 44px tall | One per fold | `.btn` |
| Quiet link | Secondary route | Underlined text, 44px tap height | | `.link` |

## Home

### Hero
- **Job.** Who you are, the standard you work to, three numbers that prove it.
- **Anatomy.** Eyebrow `Name · title` · display headline · lede · button + quiet link · status line (mono). Right column: `Selected outcomes` eyebrow, three stats, strongest first.
- **Budget.** Headline 8, lede 25, fold 80.
- **Rules.** Shared results say "helped". Each outcome has a `source` that never renders. No product names.

### Work list
- **Job.** Let the reader pick a case.
- **Anatomy.** Eyebrow · section title · three cards in a row: image slot (4:3), `company · year`, status chip, impact title.
- **Budget.** Card 20.
- **Rules.** The card title is the case title. If the work has not shipped, the chip says so; never a result claim in the title.

## Case study

### Case header (Overview)
- **Job.** The whole case in 20 seconds.
- **Anatomy.** `Case study 01 · Company · Year` · status chip · display title · summary lede · meta strip (Role, Team, Timeline, North star) · proof badges · hero image slot.
- **Budget.** Title 8, summary 25, fold 80.
- **Rules.** Title leads with impact. Summary links the design move to the result. Avoid a generic "Scope" field; put responsibility in Role.

### Text and baseline (Context)
- **Anatomy.** L: section head + body. S: one baseline stat aligned with the body.
- **Rules.** Teach the stakes, not the org chart.

### Gap band (The gap)
- **Anatomy.** Section head with the contradiction as the title, body as lede · inverted band with up to three stats.
- **Rules.** The gap band is the fold's accent. Stage counts must add up before publishing.

### Ownership (My role)
- **Anatomy.** L: section head + ownership line. M: "Worked with" list and "Constraints" list side by side.
- **Rules.** Say sole, lead or first designer when true. First person is allowed here only.

### Findings (Discovery)
- **Anatomy.** The question as the title · three finding cards (title + one sentence).
- **Rules.** Start from a question, not a task list.

### Reframe pair (Reframing)
- **Anatomy.** The design frame as the title · M card with the business frame struck through · inverted card with why the new frame wins.
- **Rules.** The reframe should make the solution feel inevitable.

### Hypothesis table (Hypotheses)
- **Anatomy.** Title "Three bets, each tied to a metric." · table: ID, Stage, Assumption, Hypothesis, Design move, KPI.
- **Rules.** At least three rows: activation, trust, value. The type rejects fewer than three.

### Measurement frame (Measurement)
- **Anatomy.** Title `Target: …` · the assumption sentence at section size · four S cells: Primary, Secondary, Guardrail, Window.
- **Rules.** Sentence frame: "By launching this design, we assume it will move [metric] to [target] because [reason]."

### Tension pair (Tension)
- **Anatomy.** Tradeoff as the title · two force cards · inverted decision block with why it held.
- **Rules.** Name the decision. "We collaborated closely" is not a tension.

### Method table (Research)
- **Anatomy.** Section head + lede · table: Method, Source, Why, What it revealed, Limit.
- **Rules.** Existing evidence before interviews. Every method names its limit.

### Move rows (Solution)
- **Anatomy.** One row per move, stacked: Insight, Design response, Why it mattered (5 columns) beside an image slot (7 columns).
- **Rules.** A screen is never the argument. Each visual answers one move.

### Result table (Results)
- **Anatomy.** Eyebrow "Results" when shipped, "Results so far" otherwise · title · lede · table: Metric, Before, After, Kind chip · optional tradeoff note.
- **Rules.** Kind is Measured, Target or Delivered. Only shipped work may hold Measured rows. A named negative tradeoff builds trust.

### Principle (Reflection)
- **Anatomy.** The principle as the title · Keep card · Change card.
- **Rules.** No gratitude, no "collaboration matters".

## About

| Fold | Anatomy |
|---|---|
| Statement | Eyebrow · display belief · bio lede · three facts as a definition list |
| Experience | Eyebrow · title · five rows (role, organisation, years) · "Earlier roles" toggle |
| Contact | Eyebrow · title · one button |

## Adding a pattern

1. Check this file for one that already does the job.
2. Name its job in one line and give it a budget.
3. Build it on the tokens in `globals.css`; no new values.
4. Add a row here.
