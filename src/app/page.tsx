import Link from "next/link";
import { site } from "@/content/site";
import { cases } from "@/content/cases";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import Placeholder from "@/components/Placeholder";
import { Stat, StatusChip } from "@/components/Parts";

/* Fold 1 · Hero. L: headline and lede. S: three sourced outcomes.
   One action (the button); About is a quiet link. */
function Hero() {
  const h = site.hero;
  return (
    <section className="fold border-t-0 pt-12 md:pt-20">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow mb-6">
            {site.name} · {site.title}
          </p>
          <h1 className="display">{h.headline}</h1>
          <p className="lede mt-6 text-lg">{h.lede}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href={h.cta.href} className="btn">{h.cta.label}</Link>
            <Link href={h.secondary.href} className="link">{h.secondary.label}</Link>
          </div>
          <p className="mono mt-8 text-muted">{h.status}</p>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">{h.outcomesLabel}</p>
          <ul className="space-y-6">
            {h.outcomes.map((o) => (
              <li key={o.label}>
                <Stat figure={o} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Fold 2 · Work. Three parallel cards. Each title is impact-led. */
function Work() {
  return (
    <section id="work" className="fold">
      <div className="wrap">
        <p className="eyebrow mb-4">{site.work.eyebrow}</p>
        <h2 className="section-title mb-10">{site.work.headline}</h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {cases.map((cs) => (
            <li key={cs.slug}>
              <Link href={`/work/${cs.slug}`} className="group block">
                <Placeholder visual={{ ...cs.hero, ratio: "4/3" }} caption={false} sizes="(min-width: 768px) 360px, 100vw" />
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="mono text-muted">{cs.company} · {cs.year}</span>
                    <StatusChip status={cs.status} />
                  </div>
                  <h3 className="mt-3 font-semibold group-hover:underline underline-offset-4">{cs.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Work />
      </main>
      <SiteFooter />
    </>
  );
}
