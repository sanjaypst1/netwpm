import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyIndex } from "@/components/case-studies/CaseStudyIndex";

export const metadata: Metadata = { title: "Case studies" };

export default function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="Case studies"
      title="Five employer stories, one evidence-led structure"
      lede="Each case study separates confirmed employment evidence from industry-standard product asset names and from challenges that are grounded in CV language."
    >
      <CaseStudyIndex />
    </PageShell>
  );
}
