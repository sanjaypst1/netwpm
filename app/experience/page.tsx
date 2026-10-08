import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CareerTimeline } from "@/components/animation/CareerTimeline";
import { MetricCard } from "@/components/charts/MetricCard";
import { confirmedMetrics } from "@/data/metrics";
import { priorRoles } from "@/data/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Interactive career timeline"
      lede="NAB, UBS, Bank of America, Daimler Mercedes-Benz and Merck Pharmaceuticals. Dates, portfolios and outcomes are taken from the candidate CV."
    >
      <CareerTimeline />
      <section className="mt-12">
        <h2 className="font-serif text-2xl text-navy">Prior roles</h2>
        <p className="mt-2 text-sm text-muted">Listed for completeness. These are not flagship data-product case studies.</p>
        <ul className="mt-4 space-y-2 text-sm">
          {priorRoles.map((role) => (
            <li key={role.organisation}>
              <strong>{role.organisation}</strong> · {role.detail} · {role.dates}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-serif text-2xl text-navy">Confirmed metrics gallery</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {confirmedMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
