import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";
import type { Metric } from "@/types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="rounded-2xl border border-line bg-cream p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{metric.employer}</p>
        <EvidenceBadge status={metric.status} />
      </div>
      <p className="mt-3 font-serif text-3xl text-navy">
        {metric.value}
        {metric.unit ? <span className="ml-2 text-lg text-muted">{metric.unit}</span> : null}
      </p>
      <h3 className="mt-2 text-base font-medium text-ink">{metric.name}</h3>
      <p className="mt-2 text-sm text-muted">{metric.context}</p>
      <dl className="mt-4 space-y-1 text-xs text-muted">
        <div>
          <dt className="inline font-medium text-ink">Source: </dt>
          <dd className="inline">{metric.source}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-ink">Limitation: </dt>
          <dd className="inline">{metric.limitation}</dd>
        </div>
      </dl>
    </article>
  );
}
