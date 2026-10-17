/**
 * One component per step of CASE_SEQUENCE (src/content/sequence.ts).
 * Each is one fold: an eyebrow naming the step, a title carrying the
 * message, one L block, supporting M or S blocks, at most one .accent.
 * Pattern reference: docs/PAGE-PATTERNS.md.
 */
import type { ReactNode } from "react";
import type { CaseStudy, ResultKind } from "@/content/types";
import type { SectionId } from "@/content/sequence";
import { CASE_SEQUENCE } from "@/content/sequence";
import Placeholder from "@/components/Placeholder";
import { ProofBadges, SectionHead, Stat, StatusChip } from "@/components/Parts";

type Props = { cs: CaseStudy };

const labelOf = Object.fromEntries(CASE_SEQUENCE.map((s) => [s.id, s.label])) as Record<SectionId, string>;

function Fold({ id, children }: { id: SectionId; children: ReactNode }) {
  return (
    <section id={id} className="fold">
      <div className="wrap">{children}</div>
    </section>
  );
}

function Overview({ cs }: Props) {
  const meta = [
    ["Role", cs.meta.role],
    ["Team", cs.meta.team],
    ["Timeline", cs.meta.timeline],
    ["North star", cs.meta.northStar],
  ];
  return (
    <section id="overview" className="fold border-t-0 pt-12 md:pt-16">
      <div className="wrap">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <p className="eyebrow">
            Case study {cs.number} · {cs.company} · {cs.year}
          </p>
          <StatusChip status={cs.status} />
        </div>
        <h1 className="display max-w-4xl">{cs.title}</h1>
        <p className="lede mt-6 text-lg">{cs.summary}</p>
        <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k} className="border-t border-ink pt-3">
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10">
          <ProofBadges skillIds={cs.skillIds} />
        </div>
        <div className="mt-12">
          <Placeholder visual={cs.hero} />
        </div>
      </div>
    </section>
  );
}

function Context({ cs }: Props) {
  return (
    <Fold id="context">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionHead eyebrow={labelOf.context} title={cs.context.headline} />
          <p className="max-w-2xl">{cs.context.body}</p>
        </div>
        {cs.context.baseline && (
          <div className="md:col-span-4 md:pt-16">
            <Stat figure={cs.context.baseline} />
          </div>
        )}
      </div>
    </Fold>
  );
}

function Gap({ cs }: Props) {
  return (
    <Fold id="gap">
      <SectionHead eyebrow={labelOf.gap} title={cs.gap.headline} lede={cs.gap.body} />
      <div className="accent grid gap-8 p-6 sm:grid-cols-3 md:p-10">
        {cs.gap.figures.map((f) => (
          <div key={f.label} className="stat border-paper">
            <p className="stat-value">{f.value}</p>
            <p className="mt-1">{f.label}</p>
          </div>
        ))}
      </div>
    </Fold>
  );
}

function Role({ cs }: Props) {
  const lists: [string, string[]][] = [
    ["Worked with", cs.role.partners],
    ["Constraints", cs.role.constraints],
  ];
  return (
    <Fold id="role">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHead eyebrow={labelOf.role} title={cs.role.headline} />
          <p className="max-w-xl">{cs.role.ownership}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:col-span-5 md:pt-16">
          {lists.map(([title, items]) => (
            <div key={title}>
              <p className="eyebrow mb-3">{title}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="border-b border-line pb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Fold>
  );
}

function Discovery({ cs }: Props) {
  return (
    <Fold id="discovery">
      <SectionHead eyebrow={labelOf.discovery} title={cs.discovery.question} />
      <ul className="grid gap-5 md:grid-cols-3">
        {cs.discovery.findings.map((f) => (
          <li key={f.title} className="card">
            <p className="font-semibold">{f.title}</p>
            <p className="mt-2 text-muted">{f.body}</p>
          </li>
        ))}
      </ul>
    </Fold>
  );
}

function Reframe({ cs }: Props) {
  return (
    <Fold id="reframe">
      <SectionHead eyebrow={labelOf.reframe} title={cs.reframe.design} />
      <div className="grid gap-5 md:grid-cols-12">
        <div className="card md:col-span-5">
          <p className="eyebrow mb-2">Business frame</p>
          <p className="text-muted line-through decoration-1">{cs.reframe.business}</p>
        </div>
        <div className="accent p-6 md:col-span-7">
          <p className="eyebrow mb-2">Design frame</p>
          <p>{cs.reframe.why}</p>
        </div>
      </div>
    </Fold>
  );
}

const countWord: Record<number, string> = { 3: "Three", 4: "Four", 5: "Five", 6: "Six" };

function Hypotheses({ cs }: Props) {
  const n = cs.hypotheses.length;
  return (
    <Fold id="hypotheses">
      <SectionHead eyebrow={labelOf.hypotheses} title={`${countWord[n] ?? n} bets, each tied to a metric.`} />
      <div className="overflow-x-auto">
        <table className="table min-w-[44rem]">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Stage</th>
              <th scope="col">Assumption</th>
              <th scope="col">Hypothesis</th>
              <th scope="col">Design move</th>
              <th scope="col">KPI</th>
            </tr>
          </thead>
          <tbody>
            {cs.hypotheses.map((h) => (
              <tr key={h.id}>
                <td className="mono">{h.id}</td>
                <td>{h.stage}</td>
                <td className="text-muted">{h.assumption}</td>
                <td>{h.hypothesis}</td>
                <td>{h.intervention}</td>
                <td className="mono">{h.kpi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fold>
  );
}

function Measurement({ cs }: Props) {
  const m = cs.measurement;
  const rows = [
    ["Primary", m.primary],
    ["Secondary", m.secondary],
    ["Guardrail", m.guardrail],
    ["Window", m.window],
  ];
  return (
    <Fold id="measurement">
      <SectionHead eyebrow={labelOf.measurement} title={`Target: ${m.target}`} />
      <p className="section-title max-w-3xl font-normal">
        By launching this design, we assume it will move {m.metric} to {m.target} because {m.reason}.
      </p>
      <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {rows.map(([k, v]) => (
          <div key={k} className="border-t border-ink pt-3">
            <dt className="eyebrow">{k}</dt>
            <dd className="mt-1">{v}</dd>
          </div>
        ))}
      </dl>
    </Fold>
  );
}

function Tension({ cs }: Props) {
  return (
    <Fold id="tension">
      <SectionHead eyebrow={labelOf.tension} title={cs.tension.headline} />
      <div className="grid gap-5 md:grid-cols-2">
        {cs.tension.forces.map((force) => (
          <p key={force} className="card">{force}</p>
        ))}
      </div>
      <div className="accent mt-5 p-6 md:p-8">
        <p className="eyebrow mb-2">Decision</p>
        <p className="font-semibold">{cs.tension.decision}</p>
        <p className="lede mt-2">{cs.tension.why}</p>
      </div>
    </Fold>
  );
}

function Research({ cs }: Props) {
  return (
    <Fold id="research">
      <SectionHead eyebrow={labelOf.research} title={cs.research.headline} lede={cs.research.lede} />
      <div className="overflow-x-auto">
        <table className="table min-w-[44rem]">
          <thead>
            <tr>
              <th scope="col">Method</th>
              <th scope="col">Source</th>
              <th scope="col">Why</th>
              <th scope="col">What it revealed</th>
              <th scope="col">Limit</th>
            </tr>
          </thead>
          <tbody>
            {cs.research.methods.map((r) => (
              <tr key={r.method}>
                <td className="font-semibold">{r.method}</td>
                <td>{r.source}</td>
                <td className="text-muted">{r.why}</td>
                <td>{r.revealed}</td>
                <td className="text-muted">{r.limitation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fold>
  );
}

function Solution({ cs }: Props) {
  return (
    <Fold id="solution">
      <SectionHead eyebrow={labelOf.solution} title={cs.solution.headline} />
      <ol className="space-y-14">
        {cs.solution.moves.map((move) => (
          <li key={move.response} className="grid gap-6 md:grid-cols-12">
            <dl className="space-y-4 md:col-span-5">
              <div>
                <dt className="eyebrow">Insight</dt>
                <dd className="mt-1 text-muted">{move.insight}</dd>
              </div>
              <div>
                <dt className="eyebrow">Design response</dt>
                <dd className="mt-1 font-semibold">{move.response}</dd>
              </div>
              <div>
                <dt className="eyebrow">Why it mattered</dt>
                <dd className="mt-1">{move.why}</dd>
              </div>
            </dl>
            {move.visual && (
              <div className="md:col-span-7">
                <Placeholder visual={move.visual} sizes="(min-width: 1024px) 560px, 100vw" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </Fold>
  );
}

const kindLabel: Record<ResultKind, string> = {
  measured: "Measured",
  target: "Target",
  delivered: "Delivered",
};

function Results({ cs }: Props) {
  const shipped = cs.status === "shipped";
  return (
    <Fold id="results">
      <SectionHead
        eyebrow={shipped ? labelOf.results : "Results so far"}
        title={cs.results.headline}
        lede={cs.results.lede}
      />
      <div className="overflow-x-auto">
        <table className="table min-w-[36rem]">
          <thead>
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">Before</th>
              <th scope="col">{shipped ? "After" : "After or target"}</th>
              <th scope="col">Kind</th>
            </tr>
          </thead>
          <tbody>
            {cs.results.rows.map((r) => (
              <tr key={r.metric}>
                <td className="font-semibold">{r.metric}</td>
                <td className="mono text-muted">{r.before}</td>
                <td className="mono font-semibold">{r.after}</td>
                <td>
                  <span className={`chip${r.kind === "measured" ? "" : " chip-quiet"}`}>{kindLabel[r.kind]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cs.results.tradeoff && (
        <p className="mt-8 max-w-2xl border-l-2 border-ink pl-4">
          <span className="eyebrow block mb-1">Tradeoff</span>
          {cs.results.tradeoff}
        </p>
      )}
    </Fold>
  );
}

function Reflection({ cs }: Props) {
  return (
    <Fold id="reflection">
      <SectionHead eyebrow={labelOf.reflection} title={cs.reflection.principle} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="card">
          <p className="eyebrow mb-2">Keep</p>
          <p>{cs.reflection.keep}</p>
        </div>
        <div className="card">
          <p className="eyebrow mb-2">Change</p>
          <p>{cs.reflection.change}</p>
        </div>
      </div>
    </Fold>
  );
}

export const SECTIONS: Record<SectionId, (props: Props) => ReactNode> = {
  overview: Overview,
  context: Context,
  gap: Gap,
  role: Role,
  discovery: Discovery,
  reframe: Reframe,
  hypotheses: Hypotheses,
  measurement: Measurement,
  tension: Tension,
  research: Research,
  solution: Solution,
  results: Results,
  reflection: Reflection,
};
