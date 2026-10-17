import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { cases, getCase, neighbours } from "@/content/cases";
import { CASE_SEQUENCE } from "@/content/sequence";
import { checkCase } from "@/content/rules";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import CaseTOC from "@/components/CaseTOC";
import ContentCheck from "@/components/ContentCheck";
import { SECTIONS } from "@/components/case/sections";

type Props = { params: Promise<{ slug: string }> };

// Only the cases in src/content/cases are routes; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCase((await params).slug);
  if (!cs) return {};
  return { title: `${cs.title} | ${site.name}`, description: cs.summary };
}

export default async function CaseStudyPage({ params }: Props) {
  const cs = getCase((await params).slug);
  if (!cs) notFound();
  const { prev, next } = neighbours(cs.slug);

  return (
    <>
      <SiteNav label={`Case study ${cs.number}`} />
      <CaseTOC items={CASE_SEQUENCE} />
      <main>
        {CASE_SEQUENCE.map(({ id }) => {
          const Section = SECTIONS[id];
          return <Section key={id} cs={cs} />;
        })}
      </main>
      <ContentCheck issues={checkCase(cs)} />
      <nav aria-label="More case studies" className="border-t border-ink">
        <div className="wrap grid gap-6 py-10 md:grid-cols-2">
          <div>
            {prev && (
              <Link href={`/work/${prev.slug}`} className="group block">
                <span className="eyebrow">Previous</span>
                <span className="mt-1 block font-semibold group-hover:underline underline-offset-4">{prev.title}</span>
              </Link>
            )}
          </div>
          <div className="md:text-right">
            {next ? (
              <Link href={`/work/${next.slug}`} className="group block">
                <span className="eyebrow">Next</span>
                <span className="mt-1 block font-semibold group-hover:underline underline-offset-4">{next.title}</span>
              </Link>
            ) : (
              <Link href="/#work" className="link">Back to all work</Link>
            )}
          </div>
        </div>
      </nav>
      <SiteFooter />
    </>
  );
}
