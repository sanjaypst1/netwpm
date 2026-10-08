import type { Metric } from "@/types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="rounded-2xl border border-line bg-cream p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">{metric.employer}</p>
      <p className="mt-3 font-serif text-3xl text-navy">
        {metric.value}
        {metric.unit ? <span className="ml-2 text-lg text-muted">{metric.unit}</span> : null}
      </p>
      <h3 className="mt-2 text-base font-medium text-ink">{metric.name}</h3>
      <p className="mt-2 text-sm text-muted">{metric.context}</p>
    </article>
  );
}
