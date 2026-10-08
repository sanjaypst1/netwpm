import Link from "next/link";
import { HeroSequence } from "@/components/animation/HeroSequence";
import { TrustedDataNetworkLazy } from "@/components/three/TrustedDataNetworkLazy";
import { EvidenceLegend } from "@/components/evidence/EvidenceBadge";
import { ConfirmedMetricsChart } from "@/components/charts/ConfirmedMetricsChart";
import { site } from "@/lib/site";
import { profile } from "@/data/profile";

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
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{profile.dataProductMindset[0]} {site.balancedStatement}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <ConfirmedMetricsChart />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-serif text-3xl text-navy">Evidence labels used throughout</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          Confirmed employment evidence is never mixed with portfolio demonstrations. Snowflake, Azure production services and Jira/Confluence/Miro are labelled honestly.
        </p>
        <div className="mt-5">
          <EvidenceLegend />
        </div>
        <p className="mt-6 text-xs text-muted">{site.disclaimer}</p>
      </section>
    </div>
  );
}
