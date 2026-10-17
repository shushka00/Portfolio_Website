#!/usr/bin/env bash
# Run on the OLD Mac. Packs the local-only files a new Mac needs into one
# archive on the Desktop. Copies no logins, tokens or keychain items: those
# are re-entered by signing in on the new Mac.
#
#   bash scripts/pack-old-mac.sh                     # core files
#   bash scripts/pack-old-mac.sh --with-kb           # also ~/rmit-kb (about 300 MB)
#   bash scripts/pack-old-mac.sh --with-knowledge-base  # also the portfolio's private "src/knowledge base" (about 560 MB)
#
# Details: docs/SETUP-NEW-MAC.md, step A4.
set -euo pipefail

WITH_KB=0
WITH_KNOWLEDGE=0
for arg in "$@"; do
  case "$arg" in
    --with-kb) WITH_KB=1 ;;
    --with-knowledge-base) WITH_KNOWLEDGE=1 ;;
    *) echo "Unknown option: $arg" >&2; exit 1 ;;
  esac
done

PORTFOLIO="${PORTFOLIO:-$HOME/Documents/Shakti_Git/Portfolio}"
STAMP="$(date +%Y%m%d)"
OUT="$HOME/Desktop/mac-handover-$STAMP.tar.gz"
WORK="$(mktemp -d)"
DEST="$WORK/handover"
mkdir -p "$DEST"

copied=()
skipped=()

copy() { # copy <source> <dest-relative-to-handover>
  local src="$1" rel="$2"
  if [ -e "$src" ]; then
    mkdir -p "$DEST/$(dirname "$rel")"
    cp -R "$src" "$DEST/$rel"
    copied+=("$rel")
  else
    skipped+=("$src (not found)")
  fi
}

# Claude Code: house rules, settings, local-only skills, mods
copy "$HOME/.claude/CLAUDE.md" "claude/CLAUDE.md"
copy "$HOME/.claude/settings.json" "claude/settings.json"
copy "$HOME/.claude/skills/README-ss.md" "claude/skills/README-ss.md"
for dir in "$HOME"/.claude/skills/ss-*; do
  [ -d "$dir" ] && copy "$dir" "claude/skills/$(basename "$dir")"
done
copy "$HOME/.claude/dev-mods" "claude/dev-mods"
copy "$HOME/.claude/scheduled-tasks" "claude/scheduled-tasks"
for f in "$HOME"/.claude/plugins/store/*.json; do
  [ -f "$f" ] && copy "$f" "claude/plugins-store/$(basename "$f")"
done

# Memory folders, one per project
for mem in "$HOME"/.claude/projects/*/memory; do
  [ -d "$mem" ] && copy "$mem" "claude/memory/$(basename "$(dirname "$mem")")"
done

# Which public skills were installed, so the new Mac can match them
copy "$HOME/.agents/.skill-lock.json" "agents/skill-lock.json"

# Project-level Claude permissions (not in git)
copy "$PORTFOLIO/.claude/settings.local.json" "portfolio/settings.local.json"

# design-brain has no git remote, so it travels as an archive
if [ -d "$HOME/Documents/design-brain" ]; then
  mkdir -p "$DEST/repos"
  tar -czf "$DEST/repos/design-brain.tar.gz" -C "$HOME/Documents" \
    --exclude node_modules --exclude .next design-brain
  copied+=("repos/design-brain.tar.gz")
else
  skipped+=("$HOME/Documents/design-brain (not found)")
fi

if [ "$WITH_KB" = 1 ] && [ -d "$HOME/rmit-kb" ]; then
  mkdir -p "$DEST/repos"
  tar -czf "$DEST/repos/rmit-kb.tar.gz" -C "$HOME" --exclude node_modules rmit-kb
  copied+=("repos/rmit-kb.tar.gz")
fi

if [ "$WITH_KNOWLEDGE" = 1 ] && [ -d "$PORTFOLIO/src/knowledge base" ]; then
  mkdir -p "$DEST/portfolio"
  tar -czf "$DEST/portfolio/knowledge-base.tar.gz" -C "$PORTFOLIO/src" "knowledge base"
  copied+=("portfolio/knowledge-base.tar.gz")
fi

{
  echo "Mac handover packed $(date '+%Y-%m-%d %H:%M')"
  echo "OLD_HOME=$HOME"
  echo "OLD_PORTFOLIO=$PORTFOLIO"
  echo
  echo "Included:"
  printf '  %s\n' "${copied[@]:-none}"
  echo
  echo "Skipped:"
  printf '  %s\n' "${skipped[@]:-none}"
  echo
  echo "Not included on purpose: logins and tokens (Claude, GitHub, Vercel, Codex),"
  echo "~/.claude.json, caches, session history, node_modules, .next."
} > "$DEST/MANIFEST.txt"

tar -czf "$OUT" -C "$WORK" handover
rm -rf "$WORK"

echo "Packed: $OUT ($(du -h "$OUT" | cut -f1))"
echo "It holds private notes. Move it by AirDrop or USB, not a public link."
