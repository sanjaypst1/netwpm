import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Privacy" title="Privacy notice">
      <div className="max-w-3xl space-y-4 text-sm leading-7 text-muted">
        <p>
          This site is a professional portfolio. It does not collect account data. The enquiry form opens your own email client and does not store messages on this website.
        </p>
        <p>
          Employer, customer and platform details are anonymised or aggregated. No confidential datasets are published. Analytics, if added later, will be documented here before use.
        </p>
        <p>
          Contact: sanjaydt13@gmail.com.
        </p>
      </div>
    </PageShell>
  );
}
