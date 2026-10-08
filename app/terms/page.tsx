import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <PageShell eyebrow="Terms" title="Terms of use">
      <div className="max-w-3xl space-y-4 text-sm leading-7 text-muted">
        <p>{site.disclaimer}</p>
        <p>
          Industry-standard product asset names are descriptive labels, not official employer product names. Portfolio demonstrations, including the Adviser and Client Intelligence Data Product, are not employment claims and are not Netwealth products.
        </p>
        <p>
          Confirmed metrics are taken from the candidate CV. They should not be treated as audited financial statements or as proof of causation beyond the CV wording.
        </p>
      </div>
    </PageShell>
  );
}
