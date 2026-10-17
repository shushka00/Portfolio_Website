# Skills map: which agent skill at which step

The agent skills installed on the original Mac, mapped to the work in this repo. Install steps: [SETUP-NEW-MAC.md](SETUP-NEW-MAC.md).

## Writing a case study

| Step | Skill | Source |
|---|---|---|
| Frame the problem, size the opportunity | `strategize`, `philosopher` | ghaida/intent |
| Plan or synthesise research | `investigate` | ghaida/intent |
| Map the journey and the gap | `journey`, `blueprint` | ghaida/intent |
| Information architecture | `organize` | ghaida/intent |
| Write the hypotheses and measurement | `measure` | ghaida/intent |
| Edge cases and failure states for the solution | `fortify` | ghaida/intent |
| Spec the screens | `specify` | ghaida/intent |
| UI copy, labels, captions | `articulate`, `clarify` | ghaida/intent, pbakaus/impeccable |
| Shape the narrative | `storytelling` | ghaida/intent |
| Accessibility and inclusion | `include` | ghaida/intent |
| Review the finished case | `evaluate`, `critique` | ghaida/intent, pbakaus/impeccable |
| Strip AI writing patterns | `stop-slop` | claude.ai account skill |
| Business framing: VRIN, JTBD, pricing, KPIs | `ss-biz-route` and the `ss-biz-*` set | Local only (from `~/rmit-kb`) |

## Designing pages

| Step | Skill | Source |
|---|---|---|
| Any page people read: folds, budgets, S/M/L | `ss-design-editorial-designer` (runs `fold_budget.py`) | Local only |
| Composition canon behind it | `ss-design-agora-designer` | Local only |
| Research references before visual design | `refero-design` | referodesign/refero_skill |
| Layout, spacing, polish, motion | `arrange`, `polish`, `animate`, `adapt`, `delight` | pbakaus/impeccable |
| Design-system setup in Figma | `figma:*` skills | Figma plugin |

## Building and shipping

| Step | Skill | Source |
|---|---|---|
| Next.js App Router guidance | `vercel-plugin:nextjs` | Vercel plugin |
| Deploy a preview | `vercel-plugin:deploy` | Vercel plugin |
| Write a PRD or issues | `to-prd`, `to-issues` | mattpocock/skills |
| Test-first changes | `tdd` | mattpocock/skills |
| Hand a session to another agent | `handoff` | mattpocock/skills |

## House rules that ride along

- `~/.claude/CLAUDE.md`: every delivery ends with the five-column table (What, Link, What it is, Status, Latest), and every page is built with the editorial-designer skill and passes `fold_budget.py`.
- This repo's `AGENTS.md`: Next 16 docs first, copy in `src/content`, case-study rules.
