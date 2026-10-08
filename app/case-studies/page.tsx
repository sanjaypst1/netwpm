import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CaseStudyIndex } from "@/components/case-studies/CaseStudyIndex";

export const metadata: Metadata = { title: "Case studies" };

export default function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="Case studies"
      title="Products, data and outcomes"
      lede="Each case study starts with the products I shaped, why the data was complex, the users, the challenges and the frontend and backend environment I worked across as product manager."
    >
      <CaseStudyIndex />
    </PageShell>
  );
}
