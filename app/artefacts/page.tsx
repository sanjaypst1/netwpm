import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { artefacts } from "@/data/artefacts";

export const metadata: Metadata = { title: "Artefacts" };

export default function ArtefactsPage() {
  return (
    <PageShell
      eyebrow="Artefacts"
      title="Portfolio-created product artefacts"
      lede="These templates demonstrate how I would run discovery, prioritisation, governance and measurement. They are not confidential employer documents."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {artefacts.map((item) => (
          <li key={item.slug}>
            <Link href={`/artefacts/${item.slug}`} className="block h-full rounded-2xl border border-line bg-cream p-5 hover:border-teal">
              <h2 className="font-serif text-xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.purpose}</p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
