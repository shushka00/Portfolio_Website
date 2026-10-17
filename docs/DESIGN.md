# Design: wireframe system

Black and white wireframe. The job of this phase is structure and copy. Colour, type personality and motion come later, and replace this file and `src/app/globals.css` together.

The live site's visual language ("Field Atlas": ink ground, survey grid, Space Mono and Archivo, signal yellow) is documented in the portfolio repo's `DESIGN.md`. Port it here when the visual phase starts.

## 1 · Principles

1. **Structure before style.** If a fold does not work in black and white, colour will not save it.
2. **One idea per fold.** One L block, supporting M and S blocks, one accent, one action.
3. **Evidence as content.** Numbers sit in mono, stated flatly, with a source behind each.
4. **Placeholders look like placeholders.** Grey ground, a cross, a bracketed label. Nothing that could be mistaken for final art.

## 2 · Tokens

| Token | Value | Role |
|---|---|---|
| `--paper` | `#ffffff` | Page ground |
| `--ink` | `#0a0a0a` | Text, rules, buttons, the accent block |
| `--fill` | `#f2f2f2` | Image slot ground |
| `--line` | `#d4d4d4` | Hairlines, card borders, table rows |
| `--muted` | `#595959` | Secondary text (7:1 on paper) |

Tailwind names: `bg-paper`, `text-ink`, `bg-fill`, `border-line`, `text-muted`. Radius 0. No shadows. No colour.

## 3 · Type

Three sizes, one job each. Never shrink type to fit words.

| Step | Token | Size | Job |
|---|---|---|---|
| Display | `--t-display` | clamp 36 to 56px | Page title (h1) |
| Section | `--t-section` | 24px | Fold title (h2), stat values |
| Body | `--t-body` | 15px | Everything else, including eyebrows and tables |

Faces: system sans for reading, system mono (`.mono`, `.eyebrow`) for labels, figures, IDs and dates. Eyebrows are mono uppercase at body size.

## 4 · Grid and spacing

- 12-column grid inside `.wrap` (max 72rem, 16px gutters on phones, 24px from 640px).
- Folds: 64px vertical padding, 88px from 768px, 1px top rule between folds.
- Spacing steps: 4, 8, 12, 16, 24, 32, 40, 48, 64.
- Related gaps are smaller than unrelated gaps.

## 5 · S/M/L

| Size | Columns | Use |
|---|---|---|
| L | 7 to 12 | The fold's one dominant block: title plus the core text, table or image |
| M | 4 to 6 | Supporting cards, lists |
| S | 3 to 4 | Figures, facts, chips |

A row of same-sized boxes is never a fold on its own. Columns hold parallel content only; serial content stacks.

## 6 · Fold budgets

From the editorial canon (`~/.claude/skills/ss-design-editorial-designer`):

| Item | Budget |
|---|---|
| Headline | 8 words |
| Lede or summary | 25 words |
| Card | 20 words |
| Whole fold | 80 words |
| Items per visible group | 5 |
| Accent elements per fold | 1 |
| Primary actions per fold | 1 |
| Whitespace | at least a third of the fold |

Over budget means cut or split, never smaller type. Details go behind a toggle or a link.

The check runs on built HTML. It reads `<section>` as a fold and the classes `eyebrow`, `lede`, `card`, `stat`, `btn`, so keep those names.

```bash
npm run build
python3 ~/.claude/skills/ss-design-editorial-designer/scripts/fold_budget.py .next/server/app/work/case-01.html
```

## 7 · Components

| Class | Look |
|---|---|
| `.card` | 1px `--line` border, 24px padding |
| `.stat` | 2px ink top rule, mono value at section size |
| `.accent` | Ink ground, paper text. One per fold |
| `.btn` | Ink fill, mono uppercase label, 44px tall |
| `.link` | Underlined, 44px tap height |
| `.chip` | 1px ink border, mono uppercase. `.chip-quiet` for grey |
| `.ph` | Image slot: `--fill` ground, cross lines, `IMG · ratio` tag |
| `.table` | Mono headers on a 2px ink rule, `--line` row rules |

## 8 · Accessibility floors

- Text contrast at least 4.5:1. `--muted` on paper is 7:1.
- Tap targets at least 44px.
- Focus: 2px ink outline, 2px offset.
- Decorative lines are `aria-hidden`.
- Tables scroll inside their box on phones; the page never scrolls sideways.
- Smooth scroll turns off under `prefers-reduced-motion`.

## 9 · Moving to the visual phase

1. Write the new language here first: principles, tokens, type, grid, glyphs, motion.
2. Replace the tokens in `globals.css`. Keep the class names so pages and the fold check keep working.
3. Add fonts with `next/font` in `layout.tsx`.
4. Re-run the fold check and the accessibility floors.
