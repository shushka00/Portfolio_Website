import type { CaseStatus, Figure } from "@/content/types";
import { badgesFor } from "@/content/skills";

/** Eyebrow names the section; the title carries the message (8 words). */
export function SectionHead({
  eyebrow,
  title,
  lede,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  as?: "h1" | "h2";
}) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <Tag className={Tag === "h1" ? "display" : "section-title"}>{title}</Tag>
      {lede && <p className="lede mt-4">{lede}</p>}
    </header>
  );
}

/** An S figure: mono value, plain label, optional small print. */
export function Stat({ figure }: { figure: Figure }) {
  return (
    <div className="stat">
      <p className="stat-value">{figure.value}</p>
      <p className="mt-1">{figure.label}</p>
      {figure.context && <p className="mono mt-1 text-muted">{figure.context}</p>}
    </div>
  );
}

const statusLabel: Record<CaseStatus, string> = {
  shipped: "Shipped",
  ongoing: "Ongoing",
  concept: "Concept",
};

export function StatusChip({ status }: { status: CaseStatus }) {
  return (
    <span className={`chip${status === "shipped" ? "" : " chip-quiet"}`}>
      <span aria-hidden="true" className={`inline-block h-2 w-2 ${status === "shipped" ? "bg-ink" : "border border-current"}`} />
      {statusLabel[status]}
    </span>
  );
}

/** Skills a case proves. "Proven" needs a measured result in the case. */
export function ProofBadges({ skillIds, compact = false }: { skillIds: string[]; compact?: boolean }) {
  const list = badgesFor(skillIds);
  if (list.length === 0) return null;
  return (
    <div>
      {!compact && <p className="eyebrow mb-3">What this case proves</p>}
      <ul className="flex flex-wrap gap-2" aria-label="Skills this case proves">
        {list.map((s) => (
          <li key={s.id} className={`chip${s.status === "proven" ? "" : " chip-quiet"}`}>
            {s.name}
            {!compact && <span className="text-muted">· {s.status === "proven" ? "proven" : "shown"}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
