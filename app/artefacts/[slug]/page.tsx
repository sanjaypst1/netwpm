import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artefacts } from "@/data/artefacts";
import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";

export function generateStaticParams() {
  return artefacts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = artefacts.find((artefact) => artefact.slug === slug);
  return { title: item?.title ?? "Artefact" };
}

export default async function ArtefactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = artefacts.find((artefact) => artefact.slug === slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/artefacts" className="text-sm text-muted hover:text-navy">
        All artefacts
      </Link>
      <div className="mt-4">
        <EvidenceBadge status={item.status} />
      </div>
      <h1 className="mt-3 font-serif text-4xl text-navy">{item.title}</h1>
      <p className="mt-3 text-lg text-muted">{item.purpose}</p>
      <p className="mt-2 text-sm text-muted">Used in: {item.usedIn}</p>
      <div className="mt-8 space-y-6">
        {item.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-navy">{section.heading}</h2>
            <p className="mt-2 leading-7 text-ink">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
