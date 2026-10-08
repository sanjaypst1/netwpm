import Link from "next/link";
import { HeroSequence } from "@/components/animation/HeroSequence";
import { TrustedDataNetworkLazy } from "@/components/three/TrustedDataNetworkLazy";
import { ConfirmedMetricsChart } from "@/components/charts/ConfirmedMetricsChart";
import { site } from "@/lib/site";
import { profile } from "@/data/profile";
import { ownedProductsByCase } from "@/data/owned-products";
import { caseStudies } from "@/data/case-studies";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-line bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-aqua">
            {site.targetRole}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/80">
            {site.proposition}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-cream/70">
            {site.positioning}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case-studies"
              className="rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-white"
            >
              Explore Data Product Case Studies
            </Link>
            <Link
              href="/role-alignment"
              className="rounded-full border border-cream/30 px-5 py-2.5 text-sm font-medium text-cream"
            >
              View Netwealth Role Alignment
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <HeroSequence />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <TrustedDataNetworkLazy />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-serif text-3xl text-navy">How I work</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {profile.summary.map((item) => (
            <p key={item} className="rounded-2xl border border-line bg-cream p-5 leading-7 text-ink">
              {item}
            </p>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
          {profile.dataProductMindset[0]} {site.balancedStatement}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-serif text-3xl text-navy">Products I have shaped</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          I work as a product manager keeping an eye on how data is defined, trusted and used — not as a data engineer.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              className="rounded-2xl border border-line bg-cream p-5 hover:border-teal"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-teal">{study.organisation}</p>
              <ul className="mt-3 space-y-1 text-sm text-ink">
                {(ownedProductsByCase[study.id] ?? []).map((product) => (
                  <li key={product.name}>· {product.name}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ConfirmedMetricsChart />
      </section>
    </div>
  );
}
