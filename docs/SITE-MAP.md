# Site map

Every page, its job, and the folds on it. A fold is one `<section>`: one idea, one L block, at most one accent, at most one primary action, 80 words or fewer.

Source: the live portfolio (shaktisoni.com, branch `codex/agora-release`, read 17 Oct 2026), reduced to the parts that carry the story.

## Routes

| Route | File | Job | Reader leaves knowing |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Say who you are and prove it with three numbers | The standard you work to, and that it moved metrics |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` | Argue one case from problem to result | How you think, decide and measure |
| `/about` | `src/app/about/page.tsx` | Background facts that do not fit the hero | Where you have worked and how to reach you |
| 404 | `src/app/not-found.tsx` | Send people home | |

Case routes are generated from `src/content/cases/index.ts`. Unknown slugs return 404 (`dynamicParams = false`).

Redirects worth keeping when a slug changes: add a page that calls `redirect()` from `next/navigation`, as the live site does for `/contact` and old case slugs.

## Home `/`

| Fold | Eyebrow | L block | M and S blocks | Accent | Action | Budget |
|---|---|---|---|---|---|---|
| Hero | Name · title | Headline (8) and lede (25) | Three outcome figures, each sourced; status line | Primary button | See the work | 80 |
| Work | Selected work | Section title | Three case cards: image slot, company · year, status, impact title | None | None (cards are links) | 80 |

Message order, from the live site's BRAND.md: who and the standard first (kicker, headline), proof second (outcomes), how third (lede). Product names and internal metric names stay inside case studies, never in the hero.

## Case study `/work/[slug]`

Thirteen folds in a fixed order, set in `src/content/sequence.ts`. The table of contents on wide screens reads the same list.

| Fold | Job | Pattern |
|---|---|---|
| Overview | Whole case in 20 seconds | Case header: eyebrow, status chip, impact title, summary, meta strip, proof badges, hero image |
| Context | Enough to care | Text L + baseline figure S |
| The gap | The sharp contradiction | Headline + inverted figure band (the accent) |
| My role | Ownership and constraints | Ownership L + two short lists |
| Discovery | The question and what changed the view | Question as title + three finding cards |
| Reframing | Business frame to user frame | Design frame as title + struck business frame + inverted why |
| Hypotheses | Three testable bets | Hypothesis table |
| Measurement | What will prove it | The assumption sentence + primary, secondary, guardrail, window |
| Tension | The real tradeoff | Two force cards + inverted decision |
| Research | Why each method, what it revealed | Method table |
| Solution | Insight, response, why | Stacked move rows with image slots |
| Results | Measured, target or delivered | Result table with a kind chip per row + tradeoff note |
| Reflection | The principle | Principle as title + keep and change cards |

Below the folds: the dev-only Content check, then previous and next case links.

## About `/about`

| Fold | L block | M and S blocks | Action |
|---|---|---|---|
| Statement | Belief (8) and bio lede (25) | Three facts: location, focus, email | None |
| Experience | Section title | Five rows visible, earlier roles behind a toggle | None |
| Contact | Section title | | Email me |

## What the live site has that this template leaves out

| Live feature | Why it is out | Where to add it back |
|---|---|---|
| Field Atlas hero (map grid, outcome diamonds, zone) | Visual language, not structure | Visual phase, `docs/DESIGN.md` |
| Light and dark theme toggle | Wireframes are one theme | Visual phase |
| Feature catalog (tabbed screens) | Needs real screenshots | Solution fold, as a client component |
| Before and after slider | Needs two real images | Results fold, under the tradeoff |
| FigJam embed | Needs a share URL | Research fold |
| Growth loop diagram | Case specific | Measurement fold |
| Vercel Analytics | Add at deploy | `npm i @vercel/analytics`, render `<Analytics />` in `layout.tsx` |
