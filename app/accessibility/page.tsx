import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <PageShell eyebrow="Accessibility" title="Accessibility statement">
      <div className="max-w-3xl space-y-4 text-sm leading-7 text-muted">
        <p>
          This portfolio aims for WCAG 2.2 AA. It uses semantic landmarks, a skip link, visible focus states, keyboard-accessible navigation and filters, text alternatives for the WebGL scene, and reduced-motion support.
        </p>
        <p>
          Charts include captions, source notes and limitations. Essential information is never stored only in animation or WebGL.
        </p>
        <p>
          If something is not usable, email sanjaydt13@gmail.com with the page, the barrier and the assistive technology in use.
        </p>
      </div>
    </PageShell>
  );
}
