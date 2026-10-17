# Agent rules for this repo

## This is NOT the Next.js you know

This version (16) has breaking changes: APIs, conventions and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Route `params` are a Promise. Heed deprecation notices.

## Where things go

- Copy lives in `src/content/`. Components never hold copy.
- One file per case study in `src/content/cases/`. Register it in `index.ts`.
- Section order lives only in `src/content/sequence.ts`.
- Visual tokens live only in `src/app/globals.css`. Surfaces never invent values.

## Before editing any case study

1. Read `docs/CASE-STUDY-LOGIC.md`.
2. Check the title: impact first, 8 words at most. If it names an activity, rewrite it or flag it.
3. Keep the section sequence unless the user asks to change it.
4. Never invent a metric. Every figure needs a `source`. Work that has not shipped shows `target` or `delivered` rows, never `measured`.
5. Run `npm run dev` and clear the Content check on the page.

## Copy rules

- Short declarative sentences, sentence case, present tense.
- No em or en dashes, no arrows, no "seamless", "leverage", "robust", "not just", "more than".
- No first-person process diary. "I" belongs in the role section.
- Join label pairs with " · ".
- Budgets: headline 8 words, lede 25, card 20, fold 80, at most 5 items per group.

## Placeholders

Text in `[square brackets]` is a placeholder. Replace it; never ship it.

## Wireframe phase

Black, white and greys only. No colour, radius, shadow or new fonts until the user starts the visual phase. Then replace `globals.css` tokens and write the new language in `docs/DESIGN.md` first.
