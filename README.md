# Portfolio template

A black and white wireframe portfolio with three placeholder case studies. Built from the structure of shaktisoni.com, with every page, pattern and writing rule written down so a new site can start blank.

Next.js 16 (App Router), React 19, Tailwind 4. No other dependencies.

> **Before merging into `main`.** `main` deploys to production on Vercel as a static site. This branch is a Next.js app, so set the Vercel project's Framework Preset to Next.js first, or the build will fail. The old `index.html` and `styles.css` are kept untouched; Next.js ignores them, so delete them once this replaces the site.

## Start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Case pages are at `/work/case-01`, `/work/case-02`, `/work/case-03`.

In development each case page ends with a **Content check** box: placeholders left, titles over budget, missing hypotheses, results claimed for work that has not shipped. It never renders in production.

## What is where

| Path | What it holds |
|---|---|
| `src/content/site.ts` | Name, hero, about page, links |
| `src/content/cases/case-0X.ts` | One file per case study. Edit these, not the components |
| `src/content/types.ts` | The case-study content model. The logic lives here as structure |
| `src/content/sequence.ts` | Section order for every case page and its table of contents |
| `src/content/rules.ts` | The writing rules as code (the dev Content check) |
| `src/content/skills.ts` | Skill proof matrix that drives the badges |
| `src/components/case/sections.tsx` | One component per case section |
| `src/app/globals.css` | Wireframe tokens. Replace this file in the visual phase |
| `docs/` | Site map, page patterns, case-study logic, design, brand, setup |

## Read in this order

1. [docs/SITE-MAP.md](docs/SITE-MAP.md): pages, routes and the folds on each.
2. [docs/CASE-STUDY-LOGIC.md](docs/CASE-STUDY-LOGIC.md): how a case study argues.
3. [docs/CASE-STUDY-TEMPLATE.md](docs/CASE-STUDY-TEMPLATE.md): the brief to fill before touching code.
4. [docs/PAGE-PATTERNS.md](docs/PAGE-PATTERNS.md): every block, its job and its budget.
5. [docs/DESIGN.md](docs/DESIGN.md): wireframe tokens, type, grid, fold budgets.
6. [docs/BRAND.md](docs/BRAND.md) and [docs/STRATEGY.md](docs/STRATEGY.md): positioning and proof, as fill-in skeletons.
7. [docs/SKILLS-MAP.md](docs/SKILLS-MAP.md): which agent skill to use at each step.
8. [docs/SETUP-NEW-MAC.md](docs/SETUP-NEW-MAC.md): what to copy and install on a new Mac.

## Add a case study

1. Fill a copy of `docs/CASE-STUDY-TEMPLATE.md` first.
2. Copy `src/content/cases/case-01.ts` (shipped), `case-02.ts` (ongoing) or `case-03.ts` (concept), whichever matches the result state.
3. Give it a new `slug` and `number`, then add it to `src/content/cases/index.ts`.
4. Run `npm run dev`, open the page and clear the Content check.

## Checks before shipping

```bash
npm run lint
npm run build
```

Then run the fold budget check on the built pages (needs the editorial-designer skill):

```bash
python3 ~/.claude/skills/ss-design-editorial-designer/scripts/fold_budget.py .next/server/app/index.html
```
