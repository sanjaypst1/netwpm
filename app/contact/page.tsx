import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Start a Product Manager, Data conversation"
      lede={`${site.location} · ${site.residency}`}
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3 text-sm">
          <p>
            Email:{" "}
            <a className="text-coral underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a className="text-coral underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              {site.phone}
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a className="text-coral underline" href={site.linkedin} rel="noreferrer" target="_blank">
              linkedin.com/in/sanjaysingh13
            </a>
          </p>
          <p>
            <a className="inline-flex rounded-full bg-navy px-4 py-2 text-cream" href={withBasePath(site.cvFile)}>
              Download CV
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </PageShell>
  );
}
