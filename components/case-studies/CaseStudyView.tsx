import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";
import { MetricCard } from "@/components/charts/MetricCard";
import { confirmedMetrics } from "@/data/metrics";
import type { CaseStudy } from "@/types";

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const metrics = confirmedMetrics.filter((metric) => study.metrics.includes(metric.id));

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/case-studies" className="hover:text-navy">
          Case studies
        </Link>
        <span aria-hidden> / </span>
        <span>{study.organisation}</span>
      </nav>
      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">
          {study.dates} · {study.portfolioSize}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-navy md:text-5xl">{study.organisation}</h1>
        <p className="mt-2 text-lg text-muted">{study.role}</p>
        <div className="mt-4">
          <EvidenceBadge status={study.evidenceStatus} />
        </div>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-2xl text-navy">1. Context</h2>
        <p className="leading-7 text-ink">{study.context}</p>
        <ul className="space-y-2 text-sm text-muted">
          <li>
            <strong className="text-ink">Product environment: </strong>
            {study.productEnvironment}
          </li>
          <li>
            <strong className="text-ink">Regulatory context: </strong>
            {study.regulatoryContext}
          </li>
          <li>
            <strong className="text-ink">Anonymisation: </strong>
            {study.anonymisationStatement}
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">2. Product problem</h2>
        <dl className="mt-4 grid gap-4 md:grid-cols-2">
          {Object.entries(study.problem).map(([key, value]) => (
            <div key={key} className="rounded-2xl border border-line bg-cream p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-teal">{key}</dt>
              <dd className="mt-2 text-sm leading-6 text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">3. Target users</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {study.users.map((user) => (
            <li key={user.name} className="flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1 text-sm">
              {user.name}
              <EvidenceBadge status={user.status} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">4. Discovery</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
          {study.discovery.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-navy p-6 text-cream">
        <h2 className="font-serif text-2xl">5. Product hypothesis</h2>
        <p className="mt-4 leading-7">
          We believe that {study.hypothesis.weBelieve} for {study.hypothesis.forWhom} will result in {study.hypothesis.willResultIn}. We will know this is working when {study.hypothesis.weWillKnow}.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">6. Product strategy</h2>
        <p className="mt-3 leading-7 text-ink">{study.productStrategy.vision}</p>
        <p className="mt-3 text-sm text-muted">{study.productStrategy.valueProposition}</p>
        <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-teal">Principles</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-ink">
          {study.productStrategy.principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">7. Data-product definition</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {Object.entries(study.dataProduct).map(([key, value]) => (
            <div key={key} className="rounded-2xl border border-line p-4">
              <h3 className="text-xs uppercase tracking-[0.16em] text-teal">{key}</h3>
              <p className="mt-2 text-sm leading-6 text-ink">
                {Array.isArray(value) ? value.join("; ") : value}
              </p>
            </div>
          ))}
        </div>
        <h3 className="mt-8 font-serif text-xl text-navy">Industry-standard product assets</h3>
        <div className="mt-4 grid gap-3">
          {study.assets.map((asset) => (
            <article key={asset.name} className="rounded-2xl border border-line bg-cream p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-medium text-navy">{asset.name}</h4>
                <EvidenceBadge status={asset.status} />
              </div>
              <p className="mt-2 text-sm text-muted">{asset.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">8. Prioritisation</h2>
        <p className="mt-3 leading-7 text-ink">{study.prioritisation.approach}</p>
        <p className="mt-2 text-sm text-muted">{study.prioritisation.note}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {study.prioritisation.criteria.map((item) => (
            <li key={item} className="rounded-full bg-paper-2 px-3 py-1 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">9. Outcome-based roadmap</h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {study.roadmap.map((item) => (
            <li key={item.stage} className="rounded-2xl border border-line p-4">
              <p className="font-medium text-navy">{item.stage}</p>
              <p className="mt-1 text-sm text-muted">{item.intent}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">10. Cross-functional delivery</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {study.stakeholders.map((item) => (
            <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">11. Challenges, action, outcome, learning</h2>
        <div className="mt-4 space-y-4">
          {study.challenges.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <EvidenceBadge status={item.status} />
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-ink">Challenge</dt>
                  <dd className="text-muted">{item.challenge}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Action</dt>
                  <dd className="text-muted">{item.action}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Outcome</dt>
                  <dd className="text-muted">{item.outcome}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Learning</dt>
                  <dd className="text-muted">{item.learning}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">12. Resolution approach</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
          {study.actions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">13–14. Metrics and results</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ResultList title="Confirmed measured result" items={study.outcomes.confirmed} />
          <ResultList title="Qualitative outcome" items={study.outcomes.qualitative} />
          <ResultList title="Intended outcome" items={study.outcomes.intended} />
          <ResultList title="Measurement not available" items={study.outcomes.notAvailable} />
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-paper-2 p-6">
        <h2 className="font-serif text-2xl text-navy">15. Relevance to Netwealth</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
          {study.netwealthAlignment.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          Source: {study.sourceReference}. Limitations: {study.limitations.join(" ")}
        </p>
      </section>
    </article>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-line p-4">
      <h3 className="text-sm font-medium text-navy">{title}</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
