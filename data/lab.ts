export const lab = {
  title: "Adviser and Client Intelligence Data Product",
  badge: "Concept product for the Netwealth Product Manager, Data opportunity — showing how I would approach adviser and client intelligence.",
  vision:
    "Give advisers, service teams, Product Managers, Operations, Risk and Compliance timely, trusted and appropriately governed information about adviser engagement, client servicing, platform activity, operational friction and emerging risks.",
  problem:
    "Advisers, service teams, Product Managers, Operations, Risk and Compliance may need timely, trusted and appropriately governed information to understand adviser engagement, client servicing, platform activity, operational friction and emerging risks.",
  users: [
    "Financial advisers",
    "Adviser support teams",
    "Product Managers",
    "Customer Operations",
    "Sales and relationship teams",
    "Finance",
    "Risk",
    "Compliance",
    "Data and Engineering teams",
    "Senior leaders",
  ],
  products: [
    {
      name: "Adviser Engagement 360",
      job: "Understand whether advisers are active, supported and adopting priority platform capabilities.",
    },
    {
      name: "Client Service Insights",
      job: "See servicing demand, repeat contacts and first-time resolution by journey.",
    },
    {
      name: "Onboarding Journey Analytics",
      job: "Locate onboarding delay and drop-off with enough quality to act.",
    },
    {
      name: "Platform Adoption Analytics",
      job: "Measure whether releases become used capability.",
    },
    {
      name: "Operational Friction Monitor",
      job: "Expose hand-off and exception patterns before they become service volume.",
    },
    {
      name: "Product Performance Scorecard",
      job: "Connect product work to customer and business outcomes.",
    },
    {
      name: "Risk and Control Insights",
      job: "Make control exceptions and risk signals usable in product decisions.",
    },
    {
      name: "Data Quality Observatory",
      job: "Show completeness, freshness, ownership and unresolved exceptions for critical fields.",
    },
  ],
  architectureNote:
    "Illustrative target architecture based on the technologies referenced in the job description. It is not presented as Netwealth’s internal architecture.",
  flow: [
    "Source systems",
    "Governed ingestion",
    "Quality and transformation",
    "Curated data products",
    "Semantic or business layer",
    "Power BI or product experiences",
    "Measurable decisions and outcomes",
  ],
  technologies: [
    { name: "Azure", status: "Target-role technology and Azure Cloud certification. Production services to be confirmed." },
    { name: "Snowflake", status: "Target-role technology alignment. Depth of hands-on production experience to be confirmed." },
    { name: "Power BI", status: "Confirmed in CV, including UBS use." },
    { name: "APIs / event streams", status: "Industry knowledge. Candidate confirmation required for employment use." },
    { name: "Data catalogue / IAM / quality monitoring / observability", status: "Industry knowledge and portfolio demonstration." },
    { name: "Jira / Confluence / Miro", status: "Named in the job description. Not named in the CV." },
  ],
  okrs: [
    {
      objective: "Increase trust in priority adviser and client data products.",
      keyResults: [
        "Improve completeness of critical data fields",
        "Reduce unresolved data-quality exceptions",
        "Increase the percentage of critical datasets with named owners",
        "Improve data freshness against agreed service expectations",
      ],
    },
    {
      objective: "Increase adoption of data products in product and operational decisions.",
      keyResults: [
        "Increase monthly active consumers",
        "Increase repeat usage",
        "Increase the percentage of target decisions supported by governed data products",
        "Reduce reliance on unmanaged manual reporting",
      ],
    },
    {
      objective: "Reduce friction in priority adviser and client journeys.",
      keyResults: [
        "Reduce onboarding cycle time",
        "Reduce avoidable service contacts",
        "Improve first-time resolution",
        "Reduce journey abandonment",
      ],
    },
    {
      objective: "Improve product-delivery effectiveness.",
      keyResults: [
        "Improve release predictability",
        "Reduce high-severity post-release defects",
        "Reduce lead time from validated problem to usable product increment",
        "Increase measured benefits realised",
      ],
    },
  ],
  metricHierarchy: [
    { layer: "North-star outcome", example: "Trusted adviser and client decisions, made faster, with less operational friction." },
    { layer: "Customer outcomes", example: "Onboarding cycle time, journey completion, first-time resolution." },
    { layer: "Business outcomes", example: "Avoidable service demand, benefits realised, capacity released." },
    { layer: "Product-adoption measures", example: "Monthly active consumers, repeat use, decisions supported by governed products." },
    { layer: "Data-product health", example: "Named owners, contract coverage, consumer satisfaction." },
    { layer: "Data-quality measures", example: "Completeness, accuracy, freshness, unresolved exceptions." },
    { layer: "Operational measures", example: "Incident rate, availability, time to insight." },
    { layer: "Delivery measures", example: "Release predictability, defect leakage, lead time." },
    { layer: "Risk and control measures", example: "Control exceptions, access violations, overdue evidence." },
  ],
  canvas: {
    problem: "Priority decisions still depend on unmanaged reporting, delayed journey insight and unclear data ownership.",
    users: "Advisers, operations, product, finance, risk, compliance, data and engineering, senior leaders.",
    value: "A small set of governed data products that are good enough to use in weekly product and operating decisions.",
    outcomes: "Trust, adoption, lower journey friction, more predictable delivery.",
    scope: "Adviser engagement, client service, onboarding, adoption, operational friction, product performance, risk/control, data quality.",
    nonScope: "Not a claim to rebuild Netwealth’s platform. Not an AI model factory. Not a confidential reconstruction of internal systems.",
  },
  risks: [
    "Building dashboards before agreeing the decision and the consumer.",
    "Unclear ownership of critical fields.",
    "Privacy and access models that block legitimate use or over-expose PII.",
    "Snowflake / Azure depth assumed rather than confirmed in the squad.",
    "Success metrics without baselines.",
    "AI features introduced before data quality and model governance exist.",
  ],
  responsibleAi: [
    "Use AI only where a decision, a consumer and a control model exist.",
    "Keep humans accountable for advice, client outcomes and regulatory obligations.",
    "Do not train or display confidential employer or client data in this portfolio.",
    "Model governance, lineage and challenge processes are prerequisites, not extras.",
    "This section is industry knowledge and a portfolio demonstration, not employment history.",
  ],
  futureRoadmap: [
    "Establish baselines and named owners for critical data products.",
    "Deliver a minimum viable onboarding and service-insights product.",
    "Expand adoption analytics once quality and access are trusted.",
    "Only then consider assisted insight or responsible-AI features.",
  ],
};

export const illustrativeMetricLabels = [
  "Illustrative metric",
  "Example dashboard structure",
  "No production data displayed",
  "Baseline to be established",
  "Target to be agreed",
  "Measurement begins after release",
  "Data owner to be assigned",
];
