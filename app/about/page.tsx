import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { profile } from "@/data/profile";
import { technologies } from "@/data/technologies";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Product leadership with a data-as-a-product mindset"
      lede="I am not a former Data Engineer. I am a senior product and delivery leader who uses customer, operational, financial, risk, service, quality, adoption and performance data to shape products in financial services, wealth, platforms and regulated environments."
    >
      <div className="grid gap-10 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-8">
          <Block title="Professional summary" items={profile.summary} />
          <Block title="Product leadership philosophy" items={profile.philosophy} />
          <Block title="Data-product mindset" items={profile.dataProductMindset} />
          <Block title="Working style" items={profile.workingStyle} />
          <Block title="Leadership principles" items={profile.leadershipPrinciples} />
        </section>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-cream p-5">
            <h2 className="font-serif text-xl text-navy">Industry experience</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {profile.industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-cream p-5">
            <h2 className="font-serif text-xl text-navy">Certifications</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {profile.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">
              Cloud certifications are not presented as deep production implementation experience.
            </p>
          </div>
        </aside>
      </div>
      <section className="mt-12">
        <h2 className="font-serif text-2xl text-navy">Technology evidence</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.14em] text-muted">
                <th className="py-2">Technology</th>
                <th>Category</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {technologies.map((item) => (
                <tr key={item.name} className="border-b border-line align-top">
                  <td className="py-3 font-medium text-navy">{item.name}</td>
                  <td className="py-3">{item.category}</td>
                  <td className="py-3 text-muted">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <ul className="mt-3 space-y-2 text-ink">
        {items.map((item) => (
          <li key={item} className="leading-7">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
