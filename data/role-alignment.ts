import type { RoleAlignmentRow } from "@/types";

export const roleAlignment: RoleAlignmentRow[] = [
  {
    requirement: "Own a meaningful area of the data portfolio and focus on highest-value opportunities",
    group: "Portfolio ownership",
    classification: "Directly demonstrated",
    evidence:
      "Current NAB role owns workstreams across a USD $30M financial services, data and platform portfolio. Merck directed a USD $300M regulated product and technology portfolio. UBS led a USD $30M regional wealth portfolio.",
    employer: "NAB, Merck, UBS",
    artefact: "Portfolio Investment Prioritisation Model",
    gap: "Named Netwealth data-domain ownership will be role-specific.",
  },
  {
    requirement: "Lead discovery and define problems clearly",
    group: "Discovery",
    classification: "Directly demonstrated",
    evidence:
      "NAB: discovery, prioritisation and readiness forums. UBS: customer journey, proposition and governance workshops. BoA: journey, workflow, product-data and control analysis. Daimler: future-state journeys and backlog workshops.",
    employer: "NAB, UBS, Bank of America, Daimler",
    artefact: "Opportunity Solution Tree, Problem Statement, Assumption Map",
    gap: "Tooling (Miro) is not named in the CV.",
  },
  {
    requirement: "Prioritise opportunities and product work",
    group: "Prioritisation",
    classification: "Directly demonstrated",
    evidence:
      "NAB investment options using customer, operational, financial, risk and delivery evidence. BoA options using value, customer impact, effort, risk, capacity and benefits. Merck used financial, customer, capacity, quality and benefits evidence.",
    employer: "NAB, Bank of America, Merck",
    artefact: "Prioritisation Matrix",
    gap: "Whether RICE or WSJF was the named method requires confirmation.",
  },
  {
    requirement: "Develop and communicate product roadmaps",
    group: "Roadmaps",
    classification: "Directly demonstrated",
    evidence:
      "NAB: strategy and customer needs into prioritised roadmaps. UBS: roadmaps and delivery sequencing. Merck: multi-year product roadmaps, delivery waves and performance measures. Coaching on outcome-based roadmaps at NAB and UBS.",
    employer: "NAB, UBS, Merck",
    artefact: "Outcome-Based Roadmap",
    gap: "Public copies of employer roadmaps cannot be shown.",
  },
  {
    requirement: "Lead end-to-end delivery in a cross-functional squad",
    group: "Cross-functional delivery",
    classification: "Directly demonstrated",
    evidence:
      "UBS led 55+ professionals across Product, Technology, Operations, Risk and suppliers. BoA owned workstreams across Product, Technology, Operations, Data, Risk and partners. Daimler owned end-to-end delivery and adoption. NAB and Merck name Data as a partner function.",
    employer: "UBS, Bank of America, Daimler, NAB, Merck",
    artefact: "Release Readiness Checklist, Product Review Template",
    gap: "Exact squad topology at each employer is not in the CV.",
  },
  {
    requirement: "Partner with Software Product, Engineering and Data Engineering",
    group: "Cross-functional delivery",
    classification: "Strong transferable evidence",
    evidence:
      "Confirmed partners include Product, Technology, Data, Operations, Risk and Compliance. Data is named at NAB, Bank of America and Merck. The CV does not use the title Data Engineering.",
    employer: "NAB, Bank of America, Merck",
    artefact: "Data Governance RACI",
    gap: "Direct working model with Data Engineers requires candidate confirmation. Not presented as a former Data Engineer role.",
  },
  {
    requirement: "Deliver scalable, reliable, well-governed data products across Azure, Snowflake and Power BI",
    group: "Modern data platforms",
    classification: "Supported by adjacent experience",
    evidence:
      "Power BI is confirmed, including UBS production use with Microsoft 365. Azure Cloud certification is confirmed. Salesforce customer-platform delivery is confirmed at Daimler. NAB is a data and platform portfolio.",
    employer: "UBS, NAB, Daimler",
    artefact: "Adviser and Client Intelligence architecture in Product Lab",
    gap: "Snowflake production experience and Azure data services used beyond certification require confirmation. Certification is not claimed as deep implementation experience.",
  },
  {
    requirement: "Establish a data-as-a-product mindset",
    group: "Modern data platforms",
    classification: "Strong transferable evidence",
    evidence:
      "Repeated pattern of named consumers, decisions, quality/control expectations, adoption and product-health measures across five employers. Product Lab makes the mindset explicit for adviser and client data products.",
    employer: "All flagship roles plus Product Lab",
    artefact: "Data Product Canvas, Data Product Scorecard",
    gap: "Official data-product catalogue language was not used in the CV and is not invented as employment history.",
  },
  {
    requirement: "Define and track success through OKRs, metrics, adoption and business outcomes",
    group: "Product measurement",
    classification: "Directly demonstrated",
    evidence:
      "Confirmed outcome measures include 30% onboarding efficiency, 22% service-demand reduction, 30% application-to-approval, 25% first-time resolution, 40% delivery velocity, 90% on-time delivery, 35% availability, >95% milestone adherence and USD $1.5M annual savings. Product performance measures and coaching on product metrics are confirmed at NAB.",
    employer: "UBS, Daimler, Merck, NAB, selected achievements",
    artefact: "OKR Tree, Metrics Framework",
    gap: "Whether the artefacts were formally named OKRs requires confirmation. Baselines and measurement windows are not in the CV.",
  },
  {
    requirement: "Collaborate across Finance, Sales, Operations, Risk and Compliance",
    group: "Stakeholder leadership",
    classification: "Directly demonstrated",
    evidence:
      "NAB: Operations, Risk, Compliance, Data, service. UBS: Operations, Risk, suppliers. BoA: Operations, Risk, partners. Merck: Commercial, Operations, Quality. Daimler: operations and servicing. Financial evidence used in NAB, UBS and Merck investment decisions. Sales / acquisition journeys at Daimler.",
    employer: "NAB, UBS, Bank of America, Daimler, Merck",
    artefact: "Service Blueprint, Stakeholder RACI",
    gap: "Finance and Sales as standing squad members at every employer are not all named; financial and commercial evidence is.",
  },
  {
    requirement: "Strong technical data understanding",
    group: "Modern data platforms",
    classification: "Supported by adjacent experience",
    evidence:
      "Used product, operational, financial, risk, service, quality, control and performance data to shape products. Power BI confirmed. Partnered with Data teams. Cloud certifications in Azure and AWS. Not a former Data Engineer or Data Analyst.",
    employer: "UBS, NAB, Bank of America, Merck",
    artefact: "Technology Evidence table",
    gap: "Pipeline, semantic-model, lineage and catalogue ownership requires confirmation.",
  },
  {
    requirement: "Understand data governance, privacy and risk management",
    group: "Risk and privacy",
    classification: "Directly demonstrated",
    evidence:
      "NAB: controls, decision records, readiness. BoA: product data and controls, regulatory impacts. Merck: data, validation, privacy, security, quality. UBS: risk data and local regulatory adaptation. CV also lists DDO and regulatory readiness as financial-services capability.",
    employer: "NAB, Bank of America, Merck, UBS",
    artefact: "Data Governance RACI, Risk and Dependency Register",
    gap: "Named governance forums and privacy-assessment artefacts require confirmation.",
  },
  {
    requirement: "Understand emerging technology, including AI",
    group: "AI and emerging technology",
    classification: "Portfolio demonstration",
    evidence:
      "Product Lab includes responsible AI, model governance and decision-support considerations. No employment claim of delivering AI models.",
    employer: "Portfolio demonstration",
    artefact: "Responsible AI notes in Product Lab",
    gap: "Hands-on AI or predictive-analytics delivery is not in the CV.",
  },
  {
    requirement: "Work with Jira, Confluence and Miro",
    group: "Product measurement",
    classification: "Candidate confirmation required",
    evidence:
      "CV confirms workshops, documentation, decision records, product reviews and Agile/SAFe/Kanban methods. The three tools are named in the job description, not the CV.",
    employer: "Not attributed",
    artefact: "Product Backlog Example, Product Review Template",
    gap: "Confirm tools used at each employer.",
  },
  {
    requirement: "Balance day-to-day delivery with long-term product thinking",
    group: "Roadmaps",
    classification: "Directly demonstrated",
    evidence:
      "Merck multi-year roadmaps and delivery waves. NAB current portfolio with discovery through optimisation. UBS lifecycle from discovery to optimisation. Coaching on outcome-based roadmaps.",
    employer: "Merck, NAB, UBS",
    artefact: "Outcome-Based Roadmap",
    gap: "None material.",
  },
  {
    requirement: "Customer focus and commercial judgement",
    group: "Stakeholder leadership",
    classification: "Directly demonstrated",
    evidence:
      "Customer journey work at UBS, BoA and Daimler. Commercial and investment evidence at NAB, UBS and Merck. USD $1.5M annual savings through prioritisation, performance reviews, supplier accountability and benefits tracking.",
    employer: "All flagship roles",
    artefact: "Business-case style investment options in NAB case study",
    gap: "Pricing detail is listed as a CV skill; employer-specific pricing work is not itemised.",
  },
  {
    requirement: "Financial-services and wealth context for advisers, clients and partners",
    group: "Financial-services and wealth context",
    classification: "Directly demonstrated",
    evidence:
      "NAB Australian financial services. UBS regional wealth and platform products. Bank of America digital banking. CV managed-accounts and product-governance alignment. Melbourne-based Australian Permanent Resident.",
    employer: "NAB, UBS, Bank of America",
    artefact: "Adviser and Client Intelligence Product Lab",
    gap: "Direct Netwealth platform experience is not claimed.",
  },
  {
    requirement: "Previous experience as a Data Engineer, Data Analyst or similarly technical data-focused role",
    group: "Modern data platforms",
    classification: "Supported by adjacent experience",
    evidence:
      "The CV does not show a Data Engineer or Data Analyst job title. It shows a senior product leader who used data extensively, partnered with Data teams, and used Power BI. This is adjacent, not equivalent, and is stated plainly.",
    employer: "Not applicable as a former DE/DA role",
    artefact: "Technology Evidence classification",
    gap: "If Netwealth treats prior DE/DA as mandatory rather than adjacent, this is the primary evidence gap.",
  },
];

export const alignmentGroups = [
  "Portfolio ownership",
  "Discovery",
  "Prioritisation",
  "Roadmaps",
  "Cross-functional delivery",
  "Modern data platforms",
  "Product measurement",
  "Data governance",
  "Risk and privacy",
  "Stakeholder leadership",
  "AI and emerging technology",
  "Financial-services and wealth context",
] as const;
