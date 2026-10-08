import Link from "next/link";
import { MetricCard } from "@/components/charts/MetricCard";
import { ProductPanel } from "@/components/case-studies/ProductPanel";
import { confirmedMetrics } from "@/data/metrics";
import { ownedProductsByCase } from "@/data/owned-products";
import type { CaseStudy } from "@/types";

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const metrics = confirmedMetrics.filter((metric) => study.metrics.includes(metric.id));
  const products = ownedProductsByCase[study.id] ?? [];

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
        <p className="mt-4 leading-7 text-ink">{study.context}</p>
      </header>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-navy">Products</h2>
        <p className="mt-2 text-sm text-muted">
          Each product is framed as a product manager keeping the data, journeys and outcomes in view — working with Engineering, Data, Operations, Risk and Compliance rather than acting as a data engineer.
        </p>
        <div className="mt-6 space-y-8">
          {products.map((product) => (
            <ProductPanel key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-navy">How I approached the work</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line p-4">
            <h3 className="text-sm font-medium text-navy">Discovery</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              {study.discovery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line p-4">
            <h3 className="text-sm font-medium text-navy">Partners</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {study.stakeholders.map((item) => (
                <li key={item} className="rounded-full bg-paper-2 px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {metrics.length ? (
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-navy">Measured results</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 rounded-2xl bg-paper-2 p-6">
        <h2 className="font-serif text-2xl text-navy">Relevance to Netwealth</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
          {study.netwealthAlignment.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
