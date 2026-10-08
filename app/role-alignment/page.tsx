import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { alignmentGroups, roleAlignment } from "@/data/role-alignment";

export const metadata: Metadata = { title: "Netwealth role alignment" };

const tone: Record<string, string> = {
  "Directly demonstrated": "bg-teal/10 text-teal",
  "Strong transferable evidence": "bg-blue/10 text-blue",
  "Supported by adjacent experience": "bg-violet/10 text-violet",
  "Portfolio demonstration": "bg-aqua/15 text-navy",
  "Candidate confirmation required": "bg-coral/10 text-coral",
};

export default function RoleAlignmentPage() {
  return (
    <PageShell
      eyebrow="Netwealth — Product Manager, Data"
      title="Role alignment without a fake match score"
      lede="Every requirement is classified as directly demonstrated, transferable, adjacent, a portfolio demonstration, or still requiring confirmation. The CV does not show a former Data Engineer role or Snowflake implementation experience, and this page says so."
    >
      {alignmentGroups.map((group) => {
        const rows = roleAlignment.filter((row) => row.group === group);
        if (!rows.length) return null;
        return (
          <section key={group} className="mb-10">
            <h2 className="font-serif text-2xl text-navy">{group}</h2>
            <div className="mt-4 space-y-4">
              {rows.map((row) => (
                <article key={row.requirement} className="rounded-2xl border border-line bg-cream p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="max-w-3xl font-medium text-navy">{row.requirement}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs ${tone[row.classification]}`}>
                      {row.classification}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink">{row.evidence}</p>
                  <p className="mt-2 text-xs text-muted">
                    Employer: {row.employer} · Artefact: {row.artefact} · Gap: {row.gap}
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </PageShell>
  );
}
