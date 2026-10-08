import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "How this portfolio was made" };

export default function ProjectPage() {
  return (
    <PageShell
      eyebrow="Project"
      title="An evidence-led portfolio for a Product Manager, Data conversation"
      lede="This website was designed so a Netwealth hiring manager can see confirmed experience, transferable capability, portfolio demonstrations and open confirmation questions in one place."
    >
      <div className="prose-portfolio max-w-3xl space-y-8">
        <section>
          <h2>Portfolio objective</h2>
          <p>
            Show how Sanjay Singh Rawat uses customer, operational, financial, risk, service, quality, adoption and performance data to shape products — and how that transfers to Netwealth’s Product Manager, Data role.
          </p>
        </section>
        <section>
          <h2>Target role</h2>
          <p>Netwealth — Product Manager, Data. Own a data-portfolio area, lead discovery and delivery, partner with Product, Engineering and Data Engineering, and measure adoption and outcomes.</p>
        </section>
        <section>
          <h2>Research approach</h2>
          <p>
            The Word CV is the source of truth. The job description is the target-role source of truth. Nothing else is treated as employment history. Industry-standard asset names are labelled. Snowflake, Azure production services, Jira, Confluence, Miro and AI delivery are not invented.
          </p>
        </section>
        <section>
          <h2>Source documents</h2>
          <p>Sanjay_Senior_Product_Manager_CV NetW.docx and the Netwealth Product Manager, Data advertisement text provided for this portfolio.</p>
        </section>
        <section>
          <h2>Information architecture</h2>
          <p>Home, About, Experience, Case studies, Product Lab, Role alignment, Artefacts, Project, Contact, plus privacy, terms and accessibility. Case studies use descriptive slugs rather than confidential system names.</p>
        </section>
        <section>
          <h2>UX and visual system</h2>
          <p>Trusted data intelligence: navy authority, off-white paper, teal for governed data, coral for selected actions. Calm, scannable, financial-services appropriate. No neon, no fake dashboards with invented numbers, no Netwealth brand imitation.</p>
        </section>
        <section>
          <h2>GSAP and Three.js</h2>
          <p>
            GSAP is used for comprehension — hero sequence and career timeline — and respects prefers-reduced-motion. The Trusted Data Product Network is lazy-loaded, paused in meaning by accompanying text, and is not the source of essential information.
          </p>
        </section>
        <section>
          <h2>Accessibility, performance and validation</h2>
          <p>
            Semantic HTML, skip link, keyboard navigation, visible focus, reduced-motion support and chart text alternatives. Three.js is dynamically imported. Confirmed metrics are never mixed with illustrative lab metrics.
          </p>
        </section>
        <section>
          <h2>Limitations</h2>
          <p>
            Official product names, Snowflake depth, Azure services beyond certification, DE/DA job history, OKR naming, and tool-by-employer mapping are still candidate confirmation items. Public discussion must remain inside the CV’s non-confidential wording.
          </p>
        </section>
        <section>
          <h2>Future roadmap</h2>
          <p>
            Close confirmation questions, replace labelled placeholders, add a downloadable PDF CV if supplied, and extend interview-mode narratives once Sanjay confirms what can be said in a live Netwealth process.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
