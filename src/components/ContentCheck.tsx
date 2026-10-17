import type { Issue } from "@/content/rules";

/**
 * Development-only list of what a case still breaks (src/content/rules.ts).
 * Renders nothing in production builds. Not a <section>, so it stays out of
 * the fold budgets.
 */
export default function ContentCheck({ issues }: { issues: Issue[] }) {
  if (process.env.NODE_ENV === "production" || issues.length === 0) return null;
  return (
    <aside className="wrap py-6" aria-label="Content check">
      <details className="border border-dashed border-ink p-4">
        <summary className="mono cursor-pointer uppercase tracking-[0.06em]">
          Content check · {issues.length} open {issues.length === 1 ? "item" : "items"} · dev only
        </summary>
        <ul className="mt-4 space-y-2">
          {issues.map((issue, i) => (
            <li key={`${issue.field}-${i}`} className="grid gap-1 sm:grid-cols-[12rem_1fr]">
              <span className="mono text-muted">{issue.field}</span>
              <span>{issue.message}</span>
            </li>
          ))}
        </ul>
      </details>
    </aside>
  );
}
