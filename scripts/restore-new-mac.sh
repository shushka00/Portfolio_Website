#!/usr/bin/env bash
# Run on the NEW Mac after cloning the portfolio. Unpacks the archive made by
# pack-old-mac.sh into ~/.claude and ~/Documents. Backs up any file it would
# replace (suffix .bak-<time>). Rewrites the old home path in settings.json
# so a new macOS user name still works.
#
#   bash scripts/restore-new-mac.sh ~/Downloads/mac-handover-YYYYMMDD.tar.gz [portfolio path]
#
# Details: docs/SETUP-NEW-MAC.md, step B9.
set -euo pipefail

ARCHIVE="${1:?Usage: restore-new-mac.sh <archive.tar.gz> [portfolio path]}"
PORTFOLIO="${2:-$HOME/Documents/Shakti_Git/Portfolio}"
STAMP="$(date +%Y%m%d-%H%M%S)"
WORK="$(mktemp -d)"
tar -xzf "$ARCHIVE" -C "$WORK"
SRC="$WORK/handover"

OLD_HOME="$(sed -n 's/^OLD_HOME=//p' "$SRC/MANIFEST.txt")"
OLD_PORTFOLIO="$(sed -n 's/^OLD_PORTFOLIO=//p' "$SRC/MANIFEST.txt")"

place() { # place <source> <target>: copy, backing up anything in the way
  local src="$1" dst="$2"
  [ -e "$src" ] || return 0
  if [ -e "$dst" ]; then mv "$dst" "$dst.bak-$STAMP"; fi
  mkdir -p "$(dirname "$dst")"
  cp -R "$src" "$dst"
  echo "  placed $dst"
}

# Claude Code project folders are named after the path, with every
# character that is not a letter or digit turned into "-".
encode() { printf '%s' "$1" | sed 's/[^A-Za-z0-9]/-/g'; }

echo "Claude Code files"
place "$SRC/claude/CLAUDE.md" "$HOME/.claude/CLAUDE.md"
place "$SRC/claude/settings.json" "$HOME/.claude/settings.json"
if [ -f "$HOME/.claude/settings.json" ] && [ -n "$OLD_HOME" ] && [ "$OLD_HOME" != "$HOME" ]; then
  sed -i '' "s#$OLD_HOME#$HOME#g" "$HOME/.claude/settings.json"
  echo "  rewrote $OLD_HOME to $HOME in settings.json"
fi
for dir in "$SRC"/claude/skills/*; do
  [ -e "$dir" ] && place "$dir" "$HOME/.claude/skills/$(basename "$dir")"
done
place "$SRC/claude/dev-mods" "$HOME/.claude/dev-mods"
place "$SRC/claude/scheduled-tasks" "$HOME/.claude/scheduled-tasks"
for f in "$SRC"/claude/plugins-store/*.json; do
  [ -f "$f" ] && place "$f" "$HOME/.claude/plugins/store/$(basename "$f")"
done

echo "Memory"
OLD_KEY="$(encode "$OLD_PORTFOLIO")"
NEW_KEY="$(encode "$PORTFOLIO")"
for mem in "$SRC"/claude/memory/*; do
  [ -d "$mem" ] || continue
  key="$(basename "$mem")"
  # The portfolio's memory follows the portfolio to its new path. Other
  # projects keep their old key; rename the folder if their path changed.
  [ "$key" = "$OLD_KEY" ] && key="$NEW_KEY"
  place "$mem" "$HOME/.claude/projects/$key/memory"
done

echo "Skill list from the old Mac"
place "$SRC/agents/skill-lock.json" "$HOME/.agents/old-mac-skill-lock.json"

echo "Portfolio"
if [ -d "$PORTFOLIO" ]; then
  place "$SRC/portfolio/settings.local.json" "$PORTFOLIO/.claude/settings.local.json"
  if [ -f "$SRC/portfolio/knowledge-base.tar.gz" ]; then
    tar -xzf "$SRC/portfolio/knowledge-base.tar.gz" -C "$PORTFOLIO/src"
    echo "  unpacked knowledge base into $PORTFOLIO/src"
  fi
else
  echo "  $PORTFOLIO not found. Clone the portfolio first, then run this again."
fi

echo "Repos"
if [ -f "$SRC/repos/design-brain.tar.gz" ]; then
  if [ -e "$HOME/Documents/design-brain" ]; then mv "$HOME/Documents/design-brain" "$HOME/Documents/design-brain.bak-$STAMP"; fi
  tar -xzf "$SRC/repos/design-brain.tar.gz" -C "$HOME/Documents"
  echo "  unpacked $HOME/Documents/design-brain"
fi
if [ -f "$SRC/repos/rmit-kb.tar.gz" ]; then
  if [ -e "$HOME/rmit-kb" ]; then mv "$HOME/rmit-kb" "$HOME/rmit-kb.bak-$STAMP"; fi
  tar -xzf "$SRC/repos/rmit-kb.tar.gz" -C "$HOME"
  echo "  unpacked $HOME/rmit-kb"
fi

rm -rf "$WORK"
echo
echo "Done. Next: docs/SETUP-NEW-MAC.md, step B10 (public skills) and phase C (sign in)."
