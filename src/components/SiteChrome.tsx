import Link from "next/link";
import { site } from "@/content/site";

/** Top bar. Nav sits outside the fold budgets. */
export function SiteNav({ label }: { label?: string }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <Link href="/" className="mono uppercase tracking-[0.06em]">
          {site.name}
        </Link>
        <div className="flex items-center gap-5">
          {label && <span className="eyebrow hidden sm:inline">{label}</span>}
          <Link href="/#work" className="hover:underline underline-offset-4">Work</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink">
      <div className="wrap flex flex-col gap-3 py-10 md:flex-row md:items-center md:justify-between">
        <p className="mono text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-6">
          {site.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="link">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
