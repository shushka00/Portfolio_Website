import type { Metadata } from "next";
import { site } from "@/content/site";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: site.about.lede,
};

export default function AboutPage() {
  const a = site.about;
  const email = site.links.find((l) => l.href.startsWith("mailto:"));
  return (
    <>
      <SiteNav />
      <main>
        {/* Fold 1 · Statement. L: belief and bio. S: three facts. */}
        <section className="fold border-t-0 pt-12 md:pt-20">
          <div className="wrap grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-6">About</p>
              <h1 className="display">{a.headline}</h1>
              <p className="lede mt-6 text-lg">{a.lede}</p>
            </div>
            <dl className="space-y-5 md:col-span-4 md:pt-12">
              {a.facts.map((f) => (
                <div key={f.key} className="border-t border-ink pt-3">
                  <dt className="eyebrow">{f.key}</dt>
                  <dd className="mt-1">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Fold 2 · Experience. Five rows visible, the rest behind a toggle. */}
        <section className="fold">
          <div className="wrap">
            <p className="eyebrow mb-4">Experience and education</p>
            <h2 className="section-title mb-8">Where the work happened.</h2>
            <ul>
              {a.experience.map((row) => (
                <li key={`${row.role}-${row.when}`} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_1fr_10rem]">
                  <span className="font-semibold">{row.role}</span>
                  <span>{row.org}</span>
                  <span className="mono text-muted sm:text-right">{row.when}</span>
                </li>
              ))}
            </ul>
            <details className="mt-4">
              <summary className="link cursor-pointer">Earlier roles</summary>
              <ul>
                {a.earlier.map((row) => (
                  <li key={`${row.role}-${row.when}`} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_1fr_10rem]">
                    <span className="font-semibold">{row.role}</span>
                    <span>{row.org}</span>
                    <span className="mono text-muted sm:text-right">{row.when}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {/* Fold 3 · Connect. One action. */}
        <section id="connect" className="fold">
          <div className="wrap">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="section-title mb-8">{a.connectHeadline}</h2>
            {email && (
              <a href={email.href} className="btn">
                Email me
              </a>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
