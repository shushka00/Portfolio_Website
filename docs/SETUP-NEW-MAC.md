# New Mac setup

Everything needed to keep working on the portfolio and this template on a new Mac with a new user account. Built from an inventory of the original Mac on 17 Oct 2026. No logins or tokens are copied; you sign in again instead.

Four phases, in order: **A** share from the old Mac, **B** install on the new Mac, **C** sign in, **D** verify.

---

## A · On the old Mac: share

### A1. Push the portfolio work that exists only on this Mac

The portfolio branch `codex/agora-release` has 28 modified files and these untracked ones that are on no remote yet:

- `BRAND.md`, `DESIGN.md`, `STRATEGY.md`
- `how-to-write-case-study/`
- `src/content/` (hero and skills matrix)
- `src/components/CaseStudyMeta.tsx`, `src/components/ProofBadges.tsx`
- `.vercelignore`

Leave out: `src/knowledge base/` (560 MB, private; it travels in A4 if you want it), `test-results/`, and the stray file named `-w`.

Keep the repo private: `STRATEGY.md` holds private planning notes. `.vercelignore` already keeps these files out of deploys.

```bash
cd ~/Documents/Shakti_Git/Portfolio
```

```bash
git add -u && git add BRAND.md DESIGN.md STRATEGY.md how-to-write-case-study src/content src/components/CaseStudyMeta.tsx src/components/ProofBadges.tsx .vercelignore
```

```bash
git commit -m "Save brand, strategy, proof matrix and case study guide before moving Macs"
```

```bash
git push -u origin codex/agora-release
```

Check the other local branches are pushed too: `main`, `codex/agora-context-label`, `case-study-2-ecosystem-refinement`, `claude/practical-cohen`, `phase-02`, `phase-3`, `v7-goals-flywheel-polish`.

### A2. Give `design-brain` a remote

`~/Documents/design-brain` is a git repo with no remote. It holds the design-desk plugin, 8 skills and AGENTS.md. Either push it to a private GitHub repo, or let A4 pack it.

```bash
cd ~/Documents/design-brain && gh repo create design-brain --private --source . --push
```

### A3. Push this template

```bash
cd ~/Documents/Shakti_Git/portfolio-template && git init && git add . && git commit -m "Wireframe portfolio template"
```

```bash
gh repo create portfolio-template --private --source . --push
```

### A4. Pack the local-only files

```bash
bash ~/Documents/Shakti_Git/portfolio-template/scripts/pack-old-mac.sh --with-kb
```

It writes `~/Desktop/mac-handover-YYYYMMDD.tar.gz` with:

| Included | Why |
|---|---|
| `~/.claude/CLAUDE.md` | Your owner rules (delivery table, editorial pages) |
| `~/.claude/settings.json` | Plugin settings and the design-desk plugin path |
| `~/.claude/skills/ss-*` and `README-ss.md` | Local-only skills: editorial-designer, agora-designer, 19 ss-biz skills |
| `~/.claude/projects/*/memory` | Claude memory per project (portfolio: 4 files) |
| `~/.claude/dev-mods`, `plugins/store/*.json`, `scheduled-tasks` | Mods and their settings, scheduled tasks |
| `~/.agents/.skill-lock.json` | The list of public skills to reinstall |
| Portfolio `.claude/settings.local.json` | Project permission allow-list |
| `~/Documents/design-brain` (without node_modules) | No remote |
| `~/rmit-kb` (with `--with-kb`, about 300 MB) | Source of the ss-biz skills and the brain dashboard mod |
| Portfolio `src/knowledge base` (with `--with-knowledge-base`, 560 MB) | Private source material, not in git |

Move the archive by AirDrop or USB. It holds private notes; never post it to a public link.

### A5. If you are also changing accounts

| Account | Old | What to do |
|---|---|---|
| GitHub | `sonishakti` (legacy remote `ShaktiSoni`) | Transfer the repos, or add the new account as a collaborator |
| Vercel | `shaktisoni`, project `portfolio` | Transfer the project, or import the repo again from the new account |
| Claude | current claude.ai account | Account skills (stop-slop, citation-ledger and others) and connectors do not move. Download the ones you made, re-add them on the new account |

---

## B · On the new Mac: install

Run these in Terminal, in order.

### B1. Command line tools

```bash
xcode-select --install
```

### B2. Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile && eval "$(/opt/homebrew/bin/brew shellenv)"
```

### B3. Node 24, git tools

Vercel builds the portfolio on Node 24, so match it locally.

```bash
brew install node@24 gh
```

```bash
echo 'export PATH="/opt/homebrew/opt/node@24/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

Optional, used by some skills on the old Mac: `brew install agent-browser poppler tesseract-lang`.

### B4. Apps

```bash
brew install --cask claude visual-studio-code cursor figma google-chrome
```

Also install the Codex app from OpenAI if you use it.

### B5. Global command line tools

```bash
npm i -g @anthropic-ai/claude-code vercel pnpm @figma/code-connect
```

Optional: the Figma CLI the old Mac linked.

```bash
git clone https://github.com/silships/figma-cli ~/figma-cli && cd ~/figma-cli && npm install && npm link
```

### B6. Git identity

```bash
git config --global user.name "Shakti Soni"
```

```bash
git config --global user.email "you@example.com"
```

### B7. Sign in to GitHub and clone

```bash
gh auth login
```

```bash
mkdir -p ~/Documents/Shakti_Git && cd ~/Documents/Shakti_Git && gh repo clone sonishakti/Portfolio && gh repo clone sonishakti/portfolio-template
```

Replace `sonishakti` with the new account if you moved the repos.

### B8. Install project packages

```bash
cd ~/Documents/Shakti_Git/Portfolio && git checkout codex/agora-release && npm install
```

```bash
cd ~/Documents/Shakti_Git/portfolio-template && npm install
```

### B9. Restore the handover archive

```bash
bash ~/Documents/Shakti_Git/portfolio-template/scripts/restore-new-mac.sh ~/Downloads/mac-handover-YYYYMMDD.tar.gz ~/Documents/Shakti_Git/Portfolio
```

It places your rules, settings, local skills, memory, mods and design-brain, backs up anything it replaces, and rewrites the old home path inside `settings.json` for the new user name. Memory for the portfolio moves to the folder name for its new path.

### B10. Reinstall the public skills

Global, so every project sees them:

```bash
npx skills add ghaida/intent -g
```

```bash
npx skills add pbakaus/impeccable -g
```

```bash
npx skills add mattpocock/skills -g
```

```bash
npx skills add vercel-labs/agent-browser -g
```

```bash
npx skills add vercel-labs/skills --skill find-skills -g
```

```bash
npx skills add https://github.com/referodesign/refero_skill --skill refero-design -g
```

Optional, the public Anthropic skills clone:

```bash
git clone https://github.com/anthropics/skills ~/.claude/skills/anthropic-public
```

Compare with `~/.agents/old-mac-skill-lock.json` (restored in B9) to confirm nothing is missing. The portfolio repo already tracks its project skills in `.agents/skills`; the 34 tool folders (`.windsurf`, `.kiro` and others) are recreated by `npx skills add` and need no copying.

### B11. Claude Code plugins

Start `claude` in Terminal, then:

```
/plugin marketplace add anthropics/claude-plugins-official
/plugin marketplace add ghaida/intent
/plugin
```

Install the Vercel plugin from the list. On the old Mac it came from a local staging folder, so pick the public listing. The design-desk plugin loads from `~/Documents/design-brain/plugins/design-desk` through `CLAUDE_CODE_PLUGIN_DIRS` in `settings.json`, which B9 restored.

### B12. Python packages for the document skills (optional)

```bash
pip3 install --user openpyxl python-docx pypdf matplotlib numpy scipy numpy-financial formulas xlrd lxml pillow
```

### B13. Fonts

Nothing to install. The template uses system fonts. The portfolio loads Space Mono, Archivo and Geist through `next/font`, and its Ivory LL trial files are in git under `public/fonts`.

---

## C · Sign in

| Service | How | Notes |
|---|---|---|
| GitHub | `gh auth login` (done in B7) | |
| Vercel | `vercel login`, then `vercel link` in the portfolio | Pick project `portfolio` |
| Claude Code | `claude`, then `/login` | |
| Claude desktop app | Open the app and sign in | |
| claude.ai connectors | claude.ai, Settings, Connectors | Re-authorise Figma, Notion, Slack, ClickUp, Vercel, Refero, Granola |
| Desktop extensions | Claude app, Settings, Extensions | Re-enable Control Chrome, PowerPoint, Word, Figma, shadcn-ui, Control your Mac, Desktop Commander |
| GitHub MCP in Claude Code | Needs a new GitHub token | It was already failing on the old Mac with a bad Authorization header |
| Codex | Open the Codex app and sign in | Its config (model, memories) is recreated by the app |
| Figma | App and browser | |
| Google Drive | Drive for desktop | If you keep files there |

Secrets that are re-created by signing in, never copied: Claude Code credentials (Keychain), the `gh` token (Keychain), Vercel `auth.json`, Codex `auth.json`. The portfolio has no `.env` files and no Vercel environment variables.

---

## D · Verify

- [ ] `node -v` prints 24.x
- [ ] `gh auth status` shows the right account
- [ ] `vercel whoami` shows the right account
- [ ] `claude --version` runs
- [ ] In the template: `npm run build` passes, `npm run dev` shows three cases
- [ ] In the portfolio: `npm run build` passes
- [ ] In Claude Code, the skills list includes `ss-design-editorial-designer`, `ss-biz-route`, `intent`, `storytelling`, `polish`
- [ ] A Claude Code session in the portfolio loads its memory (Field Atlas, ng-console read-only, site business goal)
- [ ] `python3 ~/.claude/skills/ss-design-editorial-designer/scripts/fold_budget.py ~/Documents/Shakti_Git/portfolio-template/.next/server/app/index.html` prints a table

---

## Fix while you move

| Issue | Fix |
|---|---|
| `~/.claude/CLAUDE.md` points to `~/.claude/skills/editorial-designer/`, but the folder is `ss-design-editorial-designer` | Edit the path in CLAUDE.md |
| `design-brain` has no remote, so one disk failure loses it | A2 |
| Vercel plugin came from a local staging folder | B11 |
| The Ivory LL font in the portfolio is a trial licence | Buy it or swap it before the site goes public |
| Stray file named `-w` in the portfolio root | Delete it after checking it is not needed |
| Old Mac ran Node 25 while Vercel uses 24 | B3 |

## Do not copy

`node_modules`, `.next`, `~/.claude.json`, caches, session history, any auth or token file, and the 34 tool skill folders in the portfolio root.
