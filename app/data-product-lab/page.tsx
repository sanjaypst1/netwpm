import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { lab, illustrativeMetricLabels } from "@/data/lab";

export const metadata: Metadata = { title: "Data Product Lab" };

export default function LabPage() {
  return (
    <PageShell eyebrow="Product lab" title={lab.title} lede={lab.vision}>
      <p className="rounded-2xl border border-aqua/40 bg-aqua/10 p-4 text-sm text-navy">
        {lab.badge}
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Problem</h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink">{lab.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Target users</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {lab.users.map((user) => (
            <li key={user} className="rounded-full border border-line px-3 py-1 text-sm">
              {user}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Problem tree and opportunity map</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {lab.products.map((product) => (
            <article key={product.name} className="rounded-2xl border border-line bg-cream p-4">
              <h3 className="font-medium text-navy">{product.name}</h3>
              <p className="mt-2 text-sm text-muted">{product.job}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Conceptual architecture</h2>
        <p className="mt-2 text-sm text-muted">{lab.architectureNote}</p>
        <ol className="mt-4 grid gap-2 md:grid-cols-7">
          {lab.flow.map((step, index) => (
            <li key={step} className="rounded-2xl bg-navy p-3 text-sm text-cream">
              <span className="block text-xs text-aqua">0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <ul className="mt-6 space-y-2 text-sm">
          {lab.technologies.map((item) => (
            <li key={item.name}>
              <strong>{item.name}: </strong>
              {item.status}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Data Product Canvas</h2>
        <dl className="mt-4 grid gap-4 md:grid-cols-2">
          {Object.entries(lab.canvas).map(([key, value]) => (
            <div key={key} className="rounded-2xl border border-line p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-teal">{key}</dt>
              <dd className="mt-2 text-sm leading-6">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">OKRs</h2>
        <p className="mt-2 text-sm text-muted">
          No fabricated baselines or targets. {illustrativeMetricLabels.join(" · ")}.
        </p>
        <div className="mt-4 grid gap-4">
          {lab.okrs.map((okr, index) => (
            <article key={okr.objective} className="rounded-2xl border border-line p-5">
              <h3 className="font-serif text-xl text-navy">
                Objective {index + 1}: {okr.objective}
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {okr.keyResults.map((item) => (
                  <li key={item}>
                    {item} — baseline to be established; target to be agreed; data owner to be assigned.
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Metrics hierarchy</h2>
        <ol className="mt-4 space-y-3">
          {lab.metricHierarchy.map((item) => (
            <li key={item.layer} className="rounded-2xl bg-paper-2 p-4">
              <p className="font-medium text-navy">{item.layer}</p>
              <p className="text-sm text-muted">{item.example}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-navy">Governance, risks and responsible AI</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink">
          {lab.risks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-6 font-medium text-navy">Responsible AI</h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted">
          {lab.responsibleAi.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-6 font-medium text-navy">Future roadmap</h3>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-ink">
          {lab.futureRoadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
