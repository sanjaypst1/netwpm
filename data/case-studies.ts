import type { CaseStudy } from "@/types";

const roadmap = [
  { stage: "Discover", intent: "Frame the problem, users, evidence gaps and decision the product must support." },
  { stage: "Validate", intent: "Test the problem, value and feasibility with the people who will consume the product." },
  { stage: "Establish trusted data", intent: "Agree definitions, ownership, quality and access before scaling consumption." },
  { stage: "Deliver minimum viable data product", intent: "Release a usable increment to a named consumer group with acceptance criteria." },
  { stage: "Drive adoption", intent: "Embed guidance, operating rhythm and support so the product is used in real decisions." },
  { stage: "Scale", intent: "Extend coverage, consumers and reuse once quality and adoption evidence exists." },
  { stage: "Optimise", intent: "Use product-health, service and outcome evidence to refine the backlog." },
];

const assetNote =
  "Industry-standard product asset name. Not an official employer application name.";

export const caseStudies: CaseStudy[] = [
  {
    id: "nab",
    slug: "nab-data-platform",
    organisation: "NAB",
    role: "Senior Product Manager | Financial Services Platforms",
    dates: "Aug 2025 – Present",
    industry: "Financial services",
    tags: [
      "Financial services",
      "Discovery",
      "Data and analytics",
      "Governance",
    ],
    portfolioSize: "USD $30M",
    productEnvironment:
      "Enterprise financial services, data and platform portfolio spanning platform, workflow and control improvements.",
    regulatoryContext:
      "Australian financial-services environment with Risk, Compliance and control-readiness obligations.",
    anonymisationStatement:
      "No official NAB application, customer or platform names are used. Asset names below are industry-standard descriptive labels.",
    context:
      "I currently own product workstreams across a USD $30M financial services, data and platform portfolio. The work is to translate strategy and customer needs into prioritised roadmaps, business outcomes, delivery plans and product performance measures, with Product, Technology, Operations, Risk, Compliance, Data and service teams.",
    problem: {
      customer:
        "Customer and frontline teams needed clearer product propositions, guidance and platform/workflow improvements rather than unsequenced change.",
      business:
        "Senior leaders needed decision-ready investment options that made value, feasibility, compliance and capacity trade-offs visible.",
      operational:
        "Platform, workflow and control improvements had to move from concept and business case through release and operational acceptance.",
      data: "Customer, operational, financial, risk and delivery evidence had to be assembled so investment and roadmap decisions were evidence-led.",
      whyItMattered:
        "Without a governed, prioritised data-and-platform view, effort fragments across competing initiatives and control readiness is discovered too late.",
    },
    users: [
      { name: "Product and delivery professionals", status: "confirmed" },
      { name: "Technology teams", status: "confirmed" },
      { name: "Operations and service teams", status: "confirmed" },
      { name: "Risk and Compliance", status: "confirmed" },
      { name: "Data teams", status: "confirmed" },
      { name: "Senior leaders", status: "confirmed" },
    ],
    discovery: [
      "Opportunity assessment with Product, Technology, Operations, Risk, Compliance, Data and service teams.",
      "Clarifying product propositions before sequencing platform, workflow and control work.",
      "Cross-functional discovery, prioritisation and readiness forums.",
      "Decision records, product guidance, process documentation and readiness materials.",
    ],
    hypothesis: {
      weBelieve:
        "If investment options are packaged from customer, operational, financial, risk and delivery evidence",
      forWhom: "senior leaders and cross-functional product teams",
      willResultIn:
        "clearer trade-offs, stronger roadmap quality and more consistent operational acceptance",
      weWillKnow:
        "when product performance measures, decision records and readiness evidence are used in governance forums",
    },
    productStrategy: {
      vision:
        "A trusted financial-services data and platform portfolio where the highest-value opportunities are visible, owned and measurable.",
      outcomes: [
        "Prioritised roadmaps tied to business outcomes",
        "Transparent investment trade-offs",
        "Control and operational readiness before scale",
        "Product metrics used in coaching and reviews",
      ],
      principles: [
        "Evidence before expansion",
        "Named ownership from concept to operational acceptance",
        "Controls as part of the product, not an afterthought",
      ],
      valueProposition:
        "Decision-ready portfolio views that help leaders fund the right platform, workflow and control improvements.",
      consumers: [
        "Product leaders",
        "Technology and Data partners",
        "Operations and service",
        "Risk and Compliance",
        "Senior decision-makers",
      ],
      decisionsEnabled: [
        "What to fund next",
        "What to sequence or stop",
        "Whether a release is operationally ready",
        "Where product metrics show weak adoption or control gaps",
      ],
    },
    dataProduct: {
      consumers: [
        "Product managers",
        "Technology and Data partners",
        "Operations",
        "Risk and Compliance",
        "Senior leaders",
      ],
      decisionsSupported: [
        "Portfolio investment",
        "Roadmap sequencing",
        "Control and readiness acceptance",
      ],
      dataDomains: [
        "Customer",
        "Product",
        "Operational workflow",
        "Financial / investment",
        "Risk and control",
        "Delivery and readiness",
      ],
      inputs: [
        "Customer and operational evidence",
        "Financial and capacity evidence",
        "Risk and delivery evidence",
        "Readiness and decision records",
      ],
      outputs: [
        "Prioritised roadmaps",
        "Investment options",
        "Product performance measures",
        "Readiness materials",
      ],
      ownership:
        "Product workstream ownership with cross-functional Data, Technology, Operations, Risk and Compliance partners.",
      qualityExpectations:
        "Decision materials must be complete enough for senior trade-offs; control evidence must be traceable.",
      freshnessExpectations:
        "Aligned to discovery, prioritisation and readiness forums rather than a claimed real-time architecture.",
      accessConsiderations:
        "Role-appropriate access for product, risk and operational consumers. Specific IAM design: candidate confirmation required.",
      privacyConsiderations:
        "Financial-services customer and operational data handled through existing control expectations. Detailed PII treatment: candidate confirmation required.",
      riskAndCompliance:
        "Product guidance, decision records and readiness materials supporting consistent controls.",
      adoptionStrategy:
        "Forums, documentation, frontline guidance and coaching on product metrics and outcome-based roadmaps.",
      productHealthMeasures: [
        "Use of product performance measures in reviews",
        "Readiness completion",
        "Decision-record completeness",
        "Backlog quality",
      ],
    },
    assets: [
      {
        name: "Enterprise Data and Decisioning Portfolio",
        description: assetNote,
        consumers: ["Senior leaders", "Product", "Data"],
        decisionsEnabled: ["Portfolio focus and investment"],
        status: "illustrative",
      },
      {
        name: "Customer and Operational Insights Product",
        description: assetNote,
        consumers: ["Product", "Operations", "Service"],
        decisionsEnabled: ["Which workflow and platform improvements to fund"],
        status: "illustrative",
      },
      {
        name: "Product Performance Scorecard",
        description:
          "Industry-standard consumption pattern. Power BI is a confirmed capability; NAB-specific BI tool requires confirmation.",
        consumers: ["Product", "Delivery leads"],
        decisionsEnabled: ["Whether outcomes are moving"],
        status: "illustrative",
      },
      {
        name: "Workflow and Control Data Product",
        description: assetNote,
        consumers: ["Operations", "Risk", "Compliance"],
        decisionsEnabled: ["Control and workflow remediation priority"],
        status: "illustrative",
      },
      {
        name: "Risk and Compliance Decision-Support Product",
        description: assetNote,
        consumers: ["Risk", "Compliance", "Product"],
        decisionsEnabled: ["Release and control trade-offs"],
        status: "illustrative",
      },
      {
        name: "Portfolio Investment Prioritisation Model",
        description: assetNote,
        consumers: ["Senior leaders", "Product"],
        decisionsEnabled: ["Value vs feasibility vs compliance vs capacity"],
        status: "illustrative",
      },
      {
        name: "Operational Readiness and Control-Evidence Hub",
        description: assetNote,
        consumers: ["Operations", "Risk", "Delivery"],
        decisionsEnabled: ["Go-live and acceptance"],
        status: "illustrative",
      },
    ],
    prioritisation: {
      criteria: [
        "Customer value",
        "Business value",
        "Risk reduction",
        "Regulatory urgency",
        "Feasibility",
        "Capacity",
        "Dependency complexity",
      ],
      approach:
        "Decision-ready investment options using customer, operational, financial, risk and delivery evidence.",
      note: "RICE / WSJF scoring shown in artefacts is an illustrative portfolio method, not a confirmed NAB algorithm.",
    },
    roadmap,
    stakeholders: [
      "Product",
      "Technology",
      "Operations",
      "Risk",
      "Compliance",
      "Data",
      "Service teams",
      "Senior leaders",
    ],
    challenges: [
      {
        title: "Competing investment priorities",
        challenge:
          "Value, feasibility, compliance and capacity had to be compared in the same conversation.",
        action:
          "Prepared decision-ready investment options using customer, operational, financial, risk and delivery evidence.",
        outcome:
          "Senior leaders could make informed trade-offs rather than sequencing work by noise or advocacy.",
        learning:
          "A data product is successful when it changes an investment decision, not when a slide exists.",
        status: "confirmed",
      },
      {
        title: "Ownership from concept through operational acceptance",
        challenge:
          "Platform, workflow and control work can stall between business case, release and frontline use.",
        action:
          "Led discovery, prioritisation and readiness forums; maintained product guidance, process documentation, decision records and readiness materials.",
        outcome:
          "Clearer ownership, consistent controls, stakeholder communication and frontline adoption support.",
        learning:
          "Governed data products need operational readiness, not only delivery output.",
        status: "confirmed",
      },
      {
        title: "Roadmap quality and product metrics",
        challenge:
          "Product and delivery professionals needed stronger outcome-based roadmaps and backlog quality.",
        action:
          "Coached teams on outcome-based roadmaps, backlog quality, product metrics, stakeholder influence and lifecycle management.",
        outcome: "Stronger product-lifecycle discipline. Quantified coaching impact is not in the CV.",
        learning:
          "Capability uplift is part of product ownership when the operating system is immature.",
        status: "adjacent",
      },
    ],
    actions: [
      "Defined problems and desired outcomes in discovery forums.",
      "Clarified ownership across Product, Technology, Data, Operations, Risk and Compliance.",
      "Created investment options with explicit trade-off criteria.",
      "Agreed readiness and acceptance expectations before release.",
      "Used product performance measures to guide coaching and reviews.",
    ],
    metrics: ["nab-portfolio"],
    outcomes: {
      confirmed: [
        "USD $30M financial services, data and platform portfolio ownership.",
        "Investment options built from customer, operational, financial, risk and delivery evidence.",
      ],
      qualitative: [
        "Clearer ownership from concept through operational acceptance.",
        "Coaching on product metrics and outcome-based roadmaps.",
      ],
      intended: [
        "More consistent control readiness and frontline adoption.",
      ],
      notAvailable: [
        "NAB-specific adoption percentages, savings or cycle-time improvements. UBS and Daimler metrics are not attributed here.",
      ],
    },
    netwealthAlignment: [
      "Closest current proof of owning a financial-services data and platform portfolio area.",
      "Shows discovery, prioritisation and roadmap leadership with Data as a named partner.",
      "Shows governed controls, decision records and operational readiness.",
      "Shows product performance measures used to guide decisions and coaching.",
      "Transfers to Netwealth’s need to focus a squad on the highest-value data-product opportunities.",
    ],
    evidenceStatus: "confirmed",
    sourceReference: "Candidate CV — NAB, Aug 2025 – Present",
    limitations: [
      "Official NAB product names are not disclosed.",
      "Power BI is a confirmed capability overall; NAB-specific BI tooling is not named.",
      "Snowflake and Azure production services are not claimed for this role.",
    ],
  },
  {
    id: "ubs",
    slug: "ubs-wealth-insights",
    organisation: "UBS",
    role: "Senior Product Manager | Wealth & Platform Products",
    dates: "Aug 2022 – Jul 2025",
    industry: "Wealth",
    tags: [
      "Wealth",
      "Financial services",
      "Discovery",
      "Data and analytics",
      "Adoption",
      "Operational improvement",
    ],
    portfolioSize: "USD $30M",
    productEnvironment:
      "Regional wealth, platform and product portfolio with local customer, regulatory and operational variation.",
    regulatoryContext:
      "Wealth and platform products with local regulatory and operational constraints.",
    anonymisationStatement:
      "No official UBS application names are used. Power BI and Microsoft 365 are confirmed. Asset names are descriptive labels.",
    context:
      "I led a regional wealth, platform and product portfolio of USD $30M, working with 55+ professionals across Product, Technology, Operations, Risk and suppliers. I managed the product lifecycle from discovery and proposition refinement through delivery, launch, adoption and optimisation, using Power BI and Microsoft 365 to evaluate performance.",
    problem: {
      customer:
        "Clients and servicing teams experienced onboarding and service friction that created delay and avoidable effort.",
      business:
        "Regional leaders needed to see growth, efficiency and investment opportunities from product, financial, capacity, risk and service data.",
      operational:
        "Local customer, regulatory and operational needs had to be adapted without losing regional accountability.",
      data: "Product, financial, capacity, risk and service data had to be usable in Power BI and Microsoft 365 to inform investment priorities.",
      whyItMattered:
        "Wealth platforms create value only when onboarding, service and adoption actually improve — not when a roadmap exists on paper.",
    },
    users: [
      { name: "Product Managers and analysts", status: "confirmed" },
      { name: "Technology teams", status: "confirmed" },
      { name: "Operations and service teams", status: "confirmed" },
      { name: "Risk", status: "confirmed" },
      { name: "Suppliers", status: "confirmed" },
      { name: "Senior stakeholders", status: "confirmed" },
      { name: "Advisers or relationship teams", status: "illustrative" },
      { name: "Clients / investors", status: "illustrative" },
    ],
    discovery: [
      "Customer journey, proposition, prioritisation and governance workshops.",
      "Performance evaluation using product, financial, capacity, risk and service data in Power BI and Microsoft 365.",
      "Adaptation of solutions to local customer, regulatory and operational needs.",
      "Product reviews, roadmap planning, lessons learned and reusable practices.",
    ],
    hypothesis: {
      weBelieve:
        "If onboarding and service journeys are redesigned with clear product guidance and adoption support, informed by Power BI performance analysis",
      forWhom: "regional wealth and platform teams, operations and the clients they serve",
      willResultIn: "faster onboarding and lower avoidable service demand",
      weWillKnow:
        "when onboarding efficiency and service-demand measures move in the intended direction",
    },
    productStrategy: {
      vision:
        "A regional wealth platform where onboarding, service and adoption are visible, comparable and continuously improved.",
      outcomes: [
        "More efficient onboarding",
        "Lower avoidable service demand",
        "Clearer senior decisions in commercially sensitive settings",
        "Reusable product-management practice",
      ],
      principles: [
        "Local fit without losing regional accountability",
        "Service and adoption measures sit beside delivery status",
        "Workshops make evidence usable by senior stakeholders",
      ],
      valueProposition:
        "Connected digital journeys and performance insight that reduce friction for clients and demand for service teams.",
      consumers: [
        "Regional product leaders",
        "Operations and service",
        "Risk",
        "Senior stakeholders",
      ],
      decisionsEnabled: [
        "Where onboarding friction is concentrated",
        "Which service demand is avoidable",
        "Where to invest capacity",
        "How local requirements change the roadmap",
      ],
    },
    dataProduct: {
      consumers: [
        "Product Managers",
        "Operations",
        "Service teams",
        "Risk",
        "Senior stakeholders",
      ],
      decisionsSupported: [
        "Investment priorities",
        "Journey redesign sequencing",
        "Adoption support",
        "Local versus regional scope",
      ],
      dataDomains: [
        "Product performance",
        "Financial",
        "Capacity",
        "Risk",
        "Service",
        "Onboarding / journey",
      ],
      inputs: [
        "Product and financial data",
        "Capacity and risk data",
        "Service data",
        "Journey and workshop insight",
      ],
      outputs: [
        "Power BI-supported performance views",
        "Prioritised journey and service changes",
        "Standard operating guidance",
        "Adoption support",
      ],
      ownership:
        "Regional product leadership with Technology, Operations, Risk and suppliers.",
      qualityExpectations:
        "Performance views had to be trusted enough to inform investment priorities.",
      freshnessExpectations:
        "Aligned to product reviews and investment cycles. Specific refresh SLAs: candidate confirmation required.",
      accessConsiderations:
        "Regional and local stakeholder access. Detailed access model: candidate confirmation required.",
      privacyConsiderations:
        "Wealth client and service data handled in a regulated context. Detailed PII / retention treatment: candidate confirmation required.",
      riskAndCompliance:
        "Local regulatory and operational needs were explicit adaptation constraints.",
      adoptionStrategy:
        "Connected digital journeys, standard operating guidance, capability uplift and embedded adoption support.",
      productHealthMeasures: [
        "Onboarding efficiency",
        "Service demand",
        "Use of Power BI performance views in investment conversations",
      ],
    },
    assets: [
      {
        name: "Wealth Client Onboarding Data Product",
        description: assetNote,
        consumers: ["Operations", "Product", "Service"],
        decisionsEnabled: ["Where onboarding stalls"],
        status: "illustrative",
      },
      {
        name: "Adviser and Client Service Insights",
        description:
          "Descriptive wealth-platform label. Adviser consumer group is representative unless candidate confirms.",
        consumers: ["Service", "Product"],
        decisionsEnabled: ["Which contacts are avoidable"],
        status: "illustrative",
      },
      {
        name: "Regional Product Performance Cockpit",
        description: "Confirmed consumption layer: Power BI and Microsoft 365.",
        consumers: ["Product", "Senior stakeholders"],
        decisionsEnabled: ["Investment and efficiency focus"],
        status: "confirmed",
      },
      {
        name: "Customer Journey Friction Analytics",
        description: assetNote,
        consumers: ["Product", "Operations"],
        decisionsEnabled: ["Which journey steps to redesign"],
        status: "illustrative",
      },
      {
        name: "Product Capacity and Demand Dashboard",
        description: assetNote,
        consumers: ["Product", "Operations"],
        decisionsEnabled: ["Capacity versus demand trade-offs"],
        status: "illustrative",
      },
      {
        name: "Risk and Service Performance Dataset",
        description: assetNote,
        consumers: ["Risk", "Service", "Product"],
        decisionsEnabled: ["Where risk and service pressure coincide"],
        status: "illustrative",
      },
      {
        name: "Wealth Platform Adoption Dashboard",
        description: assetNote,
        consumers: ["Product", "Operations"],
        decisionsEnabled: ["Whether launch became use"],
        status: "illustrative",
      },
    ],
    prioritisation: {
      criteria: [
        "Customer impact",
        "Service-demand reduction",
        "Growth and efficiency",
        "Local regulatory need",
        "Capacity",
        "Risk",
      ],
      approach:
        "Performance analysis in Power BI plus journey, proposition and governance workshops.",
      note: "Scoring templates in artefacts are illustrative.",
    },
    roadmap,
    stakeholders: [
      "Product",
      "Technology",
      "Operations",
      "Risk",
      "Suppliers",
      "Senior stakeholders",
    ],
    challenges: [
      {
        title: "Regional and local product requirements",
        challenge:
          "Solutions had to adapt to local customer, regulatory and operational needs without losing regional accountability.",
        action:
          "Managed the lifecycle from discovery through optimisation and used workshops to make local constraints decision-ready.",
        outcome:
          "Regional roadmaps that could absorb local variation rather than spawning unmanaged local products.",
        learning:
          "Wealth data products must support local operating context without fragmenting the platform.",
        status: "confirmed",
      },
      {
        title: "Onboarding friction and service demand",
        challenge:
          "Onboarding inefficiency and avoidable service demand were consuming capacity.",
        action:
          "Service redesign, connected digital journeys, standard operating guidance, capability uplift and embedded adoption support.",
        outcome:
          "Onboarding efficiency improved by 30% and service demand reduced by 22%.",
        learning:
          "Journey data plus operating guidance plus adoption support beats feature output alone.",
        status: "confirmed",
      },
      {
        title: "Ambiguous senior decisions",
        challenge:
          "Senior stakeholders needed to decide in commercially sensitive, ambiguous settings.",
        action:
          "Facilitated customer journey, proposition, prioritisation and governance workshops using performance data.",
        outcome: "Clearer senior decisions. Qualitative rather than a separate quantified metric.",
        learning:
          "The product is the decision quality, not the dashboard artefact.",
        status: "confirmed",
      },
    ],
    actions: [
      "Used Power BI and Microsoft 365 to evaluate performance and identify growth and efficiency opportunities.",
      "Redesigned journeys and operating guidance rather than only adding features.",
      "Embedded adoption support and capability uplift.",
      "Coached Product Managers, analysts and cross-functional leads.",
    ],
    metrics: ["ubs-budget", "ubs-team", "ubs-onboarding", "ubs-service-demand"],
    outcomes: {
      confirmed: [
        "USD $30M regional portfolio leadership.",
        "55+ professionals across Product, Technology, Operations, Risk and suppliers.",
        "30% improvement in onboarding efficiency.",
        "22% reduction in service demand.",
        "Power BI and Microsoft 365 used for performance analysis.",
      ],
      qualitative: [
        "Clearer senior decisions in commercially sensitive environments.",
        "Reusable product-management practices through coaching.",
      ],
      intended: ["Sustained adoption after launch, not only a release event."],
      notAvailable: [
        "Baseline onboarding time in days.",
        "Exact service-demand volume.",
      ],
    },
    netwealthAlignment: [
      "Strongest wealth-platform analogue to Netwealth adviser and client journeys.",
      "Shows data-as-a-product thinking through Power BI-supported performance and adoption measures.",
      "Shows discovery, prioritisation and cross-functional delivery including Risk.",
      "Shows measurable onboarding and service outcomes — the same outcome families Netwealth cares about.",
      "Does not claim Snowflake or Netwealth platform delivery.",
    ],
    evidenceStatus: "confirmed",
    sourceReference: "Candidate CV — UBS, Aug 2022 – Jul 2025",
    limitations: [
      "Official UBS product names are not disclosed.",
      "Adviser as a named user group is representative unless confirmed.",
      "Power BI dataset and semantic-model ownership detail requires confirmation.",
    ],
  },
  {
    id: "bofa",
    slug: "bofa-digital-banking",
    organisation: "Bank of America",
    role: "Senior Product Manager | Digital Banking Products",
    dates: "Oct 2020 – Aug 2022",
    industry: "Digital banking",
    tags: [
      "Digital banking",
      "Financial services",
      "Discovery",
      "Data and analytics",
      "Governance",
      "Adoption",
    ],
    portfolioSize: "USD $55M",
    productEnvironment:
      "Digital banking, customer operations and product portfolio with partners in the delivery system.",
    regulatoryContext:
      "Digital banking product work with regulatory impacts identified through journey, control and product-data analysis.",
    anonymisationStatement:
      "No named Bank of America platforms are claimed. Asset names are descriptive labels.",
    context:
      "I owned cross-functional digital banking product workstreams across a USD $55M portfolio, working with Product, Technology, Operations, Data, Risk and partners. The work translated customer and business needs into product roadmaps, prioritised features and measurable release outcomes.",
    problem: {
      customer:
        "Digital banking journeys had unmet needs and drop-off that were not always visible in feature lists.",
      business:
        "Growth and service improvement opportunities had to be sequenced against value, effort, risk and capacity.",
      operational:
        "Workflow hand-offs and operational friction sat between channels, operations and release readiness.",
      data: "Product data and controls had to be analysed alongside journeys to find friction, regulatory impact and improvement opportunities.",
      whyItMattered:
        "Digital banking change that cannot show release outcomes and operational readiness creates risk without customer value.",
    },
    users: [
      { name: "Product teams", status: "confirmed" },
      { name: "Technology", status: "confirmed" },
      { name: "Operations", status: "confirmed" },
      { name: "Data teams", status: "confirmed" },
      { name: "Risk", status: "confirmed" },
      { name: "Partners", status: "confirmed" },
      { name: "Digital banking customers", status: "adjacent" },
    ],
    discovery: [
      "Customer-journey analysis.",
      "Workflow hand-off analysis.",
      "Product data and control analysis.",
      "Discovery, refinement, solution, testing and acceptance sessions.",
      "Customer feedback captured in product governance routines.",
    ],
    hypothesis: {
      weBelieve:
        "If journey, workflow, product-data and control evidence sit in the same prioritisation conversation",
      forWhom: "digital banking product, operations, data and risk partners",
      willResultIn: "clearer roadmaps, safer releases and more useful post-release optimisation",
      weWillKnow:
        "when release outcomes, customer feedback and operational readiness are tracked as part of the product pipeline",
    },
    productStrategy: {
      vision:
        "Digital banking products whose roadmaps are shaped by journey and control evidence, and whose launches can be evidenced.",
      outcomes: [
        "Prioritised features tied to customer and business needs",
        "Measurable release outcomes",
        "Controlled launch and post-release optimisation",
      ],
      principles: [
        "Friction is a product signal",
        "Controls are analysed with journeys, not after them",
        "Acceptance includes operational readiness",
      ],
      valueProposition:
        "Transparent options that help senior stakeholders choose based on value, customer impact, effort, risk, capacity and benefits.",
      consumers: ["Product", "Operations", "Data", "Risk", "Senior stakeholders"],
      decisionsEnabled: [
        "Which journey defects to fix first",
        "Which features earn a place on the roadmap",
        "Whether a release is ready",
        "What to optimise after launch",
      ],
    },
    dataProduct: {
      consumers: ["Product", "Operations", "Data", "Risk", "Partners"],
      decisionsSupported: [
        "Feature prioritisation",
        "Release acceptance",
        "Post-release optimisation",
      ],
      dataDomains: [
        "Customer journey",
        "Workflow",
        "Product data",
        "Controls",
        "Release outcomes",
        "Customer feedback",
      ],
      inputs: [
        "Journey and workflow evidence",
        "Product and control data",
        "Testing and acceptance results",
        "Customer feedback",
      ],
      outputs: [
        "Product options and prioritisation recommendations",
        "Roadmaps and feature sequences",
        "Governance and performance routines",
        "Readiness criteria and support models",
      ],
      ownership:
        "Product workstream ownership with Technology, Operations, Data, Risk and partners.",
      qualityExpectations:
        "Product data and controls needed to be reliable enough to identify unmet needs and regulatory impacts.",
      freshnessExpectations:
        "Aligned to discovery, refinement and release cycles.",
      accessConsiderations:
        "Cross-functional access for product, data, operations and risk. Detailed IAM: candidate confirmation required.",
      privacyConsiderations:
        "Digital banking customer data handled in a controlled environment. Detailed privacy assessments: candidate confirmation required.",
      riskAndCompliance:
        "Regulatory impacts were an explicit discovery output; product governance tracked risks and decisions.",
      adoptionStrategy:
        "Support models, knowledge transfer, readiness criteria and post-release optimisation.",
      productHealthMeasures: [
        "Release outcomes",
        "Customer feedback themes",
        "Operational readiness completion",
        "Risk and decision tracking",
      ],
    },
    assets: [
      {
        name: "Digital Banking Journey Analytics Product",
        description: assetNote,
        consumers: ["Product", "Operations"],
        decisionsEnabled: ["Where journeys fail"],
        status: "illustrative",
      },
      {
        name: "Application and Servicing Workflow Insights",
        description: assetNote,
        consumers: ["Operations", "Product"],
        decisionsEnabled: ["Which hand-offs create friction"],
        status: "illustrative",
      },
      {
        name: "Customer Friction and Drop-Off Dashboard",
        description: assetNote,
        consumers: ["Product", "Senior stakeholders"],
        decisionsEnabled: ["Which drop-off to fund"],
        status: "illustrative",
      },
      {
        name: "Release Outcome and Product Health Dashboard",
        description: assetNote,
        consumers: ["Product", "Technology", "Risk"],
        decisionsEnabled: ["Whether the release did what it promised"],
        status: "illustrative",
      },
      {
        name: "Data Quality and Control Monitoring Product",
        description: assetNote,
        consumers: ["Data", "Risk", "Product"],
        decisionsEnabled: ["Which control or quality gaps block launch"],
        status: "illustrative",
      },
      {
        name: "Operational Readiness Evidence Hub",
        description: assetNote,
        consumers: ["Operations", "Product"],
        decisionsEnabled: ["Go-live acceptance"],
        status: "illustrative",
      },
      {
        name: "Customer Feedback and Improvement Backlog",
        description: assetNote,
        consumers: ["Product"],
        decisionsEnabled: ["What to optimise next"],
        status: "illustrative",
      },
    ],
    prioritisation: {
      criteria: [
        "Value",
        "Customer impact",
        "Delivery effort",
        "Risk",
        "Capacity",
        "Anticipated benefits",
      ],
      approach:
        "Product options and prioritisation recommendations supporting transparent senior stakeholder decisions.",
      note: "Numeric scoring models in artefacts are illustrative.",
    },
    roadmap,
    stakeholders: [
      "Product",
      "Technology",
      "Operations",
      "Data",
      "Risk",
      "Partners",
    ],
    challenges: [
      {
        title: "Operational friction and journey drop-off",
        challenge:
          "Unmet needs, operational friction and regulatory impacts sat across journeys and workflow hand-offs.",
        action:
          "Analysed customer journeys, workflow hand-offs, product data and controls.",
        outcome:
          "Clearer view of unmet needs and improvement opportunities. No BoA-specific percentage is claimed.",
        learning:
          "Journey analytics without control analysis understates risk in digital banking.",
        status: "confirmed",
      },
      {
        title: "Transparent senior trade-offs",
        challenge:
          "Value, customer impact, effort, risk, capacity and benefits had to be compared openly.",
        action:
          "Developed product options and prioritisation recommendations.",
        outcome: "Transparent senior stakeholder decisions.",
        learning: "Prioritisation is a data product when the scoring evidence is trusted.",
        status: "confirmed",
      },
      {
        title: "Controlled launch and post-release optimisation",
        challenge:
          "Releases needed support models, knowledge transfer and outcome tracking, not only a go-live date.",
        action:
          "Established governance and performance routines; maintained documentation, support models and readiness criteria.",
        outcome: "Controlled launch, adoption and post-release optimisation.",
        learning:
          "Data products need release-outcome measures, not only delivery status.",
        status: "confirmed",
      },
    ],
    actions: [
      "Led discovery through acceptance with customer outcomes, requirements, technology delivery and operational readiness aligned.",
      "Tracked decisions, risks, customer feedback, release outcomes and improvement opportunities.",
      "Embedded post-release optimisation in the product pipeline.",
    ],
    metrics: ["bofa-portfolio"],
    outcomes: {
      confirmed: [
        "USD $55M digital banking portfolio workstreams.",
        "Cross-functional delivery with Data and Risk as named partners.",
        "Governance routines covering decisions, risks, feedback and release outcomes.",
      ],
      qualitative: [
        "Clearer journey and control insight.",
        "Controlled launch and post-release optimisation.",
      ],
      intended: ["Reduced journey friction and safer releases."],
      notAvailable: [
        "No Bank of America percentage improvements are stated in the CV. UBS and Daimler metrics are not used here.",
      ],
    },
    netwealthAlignment: [
      "Shows product-data analysis, journey analytics and control monitoring.",
      "Shows discovery, prioritisation, delivery and measurement.",
      "Shows partnership with Data, Technology, Operations and Risk.",
      "Transfers to Netwealth’s need for governed data products that improve adviser and client journeys.",
    ],
    evidenceStatus: "confirmed",
    sourceReference: "Candidate CV — Bank of America, Oct 2020 – Aug 2022",
    limitations: [
      "No official Bank of America platform names are claimed.",
      "No quantified journey-conversion result is available in the CV.",
    ],
  },
  {
    id: "daimler",
    slug: "daimler-customer-360",
    organisation: "Daimler Mercedes-Benz Group",
    role: "Senior Product Manager | Customer & Salesforce Products",
    dates: "Oct 2019 – Oct 2020",
    industry: "Customer platform",
    tags: [
      "Customer platform",
      "Discovery",
      "Data and analytics",
      "Adoption",
      "Operational improvement",
    ],
    portfolioSize: "USD $78M",
    productEnvironment:
      "Multi-country Salesforce customer platform covering acquisition, account management and servicing.",
    regulatoryContext:
      "Cross-market customer platform with local operating constraints. Specific regulatory frameworks are not named in the CV.",
    anonymisationStatement:
      "Salesforce is named because the CV names it. Specific Salesforce clouds, modules and integrations require candidate confirmation. No confidential customer data is shown.",
    context:
      "I owned end-to-end product delivery and adoption for a multi-country Salesforce customer platform with a USD $78M budget, supporting 900+ users. The work connected discovery, proposition priorities, future-state journeys, solution design, testing, launch and optimisation.",
    problem: {
      customer:
        "Acquisition, account management and servicing journeys were slowed by systemic workflow, data and capability barriers.",
      business:
        "A multi-country programme needed roadmap sequencing, cross-market dependency management and budget discipline.",
      operational:
        "Release readiness, role-based learning and post-launch service outcomes had to be managed for 900+ users.",
      data: "Workflow and data-quality barriers were a root cause of slow application-to-approval and weak first-time resolution.",
      whyItMattered:
        "A customer platform that cannot move applications to approval or resolve issues first time fails both the customer and the operating model.",
    },
    users: [
      { name: "900+ platform users", status: "confirmed" },
      { name: "Product, technology, operations and supplier teams", status: "confirmed" },
      { name: "Acquisition, account management and servicing roles", status: "confirmed" },
      { name: "Regional / market teams", status: "adjacent" },
    ],
    discovery: [
      "Future-state customer journeys.",
      "Feature and backlog prioritisation workshops across acquisition, account management and servicing.",
      "Identification of systemic workflow, data and capability barriers.",
      "Post-launch monitoring of adoption, defects, incidents and service outcomes.",
    ],
    hypothesis: {
      weBelieve:
        "If workflow, data-quality and capability barriers are remediated in priority order using customer and service evidence",
      forWhom: "multi-country customer-platform users in acquisition, account management and servicing",
      willResultIn: "faster application-to-approval and higher first-time resolution",
      weWillKnow:
        "when cycle time, first-time resolution, adoption, defects and incidents move, and budget variance stays controlled",
    },
    productStrategy: {
      vision:
        "A Salesforce customer platform that is usable across markets, with trusted customer data and measurable service outcomes.",
      outcomes: [
        "Shorter application-to-approval time",
        "Higher first-time resolution",
        "Higher delivery velocity with budget control",
        "Sustainable product ownership after launch",
      ],
      principles: [
        "Data quality is a product problem",
        "Adoption is part of the release",
        "Post-launch defects and incidents feed the backlog",
      ],
      valueProposition:
        "A cross-market customer platform that reduces friction in lead-to-application and servicing journeys.",
      consumers: [
        "Frontline users",
        "Operations",
        "Product and technology leaders",
        "Suppliers",
      ],
      decisionsEnabled: [
        "Which workflow barriers to fix first",
        "Where data quality blocks completion",
        "Whether adoption is real",
        "What to transition into sustainable ownership",
      ],
    },
    dataProduct: {
      consumers: [
        "Frontline users",
        "Operations",
        "Product",
        "Technology",
        "Suppliers",
      ],
      decisionsSupported: [
        "Journey remediation",
        "Release sequencing",
        "Adoption and hypercare focus",
      ],
      dataDomains: [
        "Customer",
        "Application / approval workflow",
        "Adoption and usage",
        "Defects and incidents",
        "Service outcomes",
      ],
      inputs: [
        "Journey and backlog evidence",
        "Workflow and data-quality signals",
        "Quality, schedule, adoption and operational performance measures",
        "Defect, incident and service outcomes",
      ],
      outputs: [
        "Prioritised remediation",
        "Role-based learning and user guidance",
        "Release and feature decisions",
        "Transition to sustainable ownership",
      ],
      ownership:
        "End-to-end product ownership with multidisciplinary product, technology, operations and supplier teams.",
      qualityExpectations:
        "Customer and workflow data had to be good enough to complete applications and resolve issues first time.",
      freshnessExpectations:
        "Monitored after launch to refine the roadmap. Specific refresh design: candidate confirmation required.",
      accessConsiderations:
        "Role-based learning implies role-based use. Detailed Salesforce sharing model: candidate confirmation required.",
      privacyConsiderations:
        "Customer platform data across markets. Detailed privacy design: candidate confirmation required.",
      riskAndCompliance:
        "Cross-market dependencies and release readiness were explicit controls on sequencing.",
      adoptionStrategy:
        "Role-based learning, user guidance, adoption measures and transition to sustainable ownership.",
      productHealthMeasures: [
        "Application-to-approval time",
        "First-time resolution",
        "Adoption",
        "Defects and incidents",
        "Delivery velocity",
        "Budget variance",
      ],
    },
    assets: [
      {
        name: "Salesforce Customer 360 Product",
        description:
          "Salesforce is confirmed. Customer 360 is an industry-standard label, not a claim of a specific Salesforce SKU.",
        consumers: ["Frontline users", "Operations"],
        decisionsEnabled: ["Customer context in acquisition and servicing"],
        status: "illustrative",
      },
      {
        name: "Lead-to-Application Journey Analytics",
        description: assetNote,
        consumers: ["Product", "Sales/acquisition roles"],
        decisionsEnabled: ["Where applications stall"],
        status: "illustrative",
      },
      {
        name: "Application-to-Approval Workflow Product",
        description: assetNote,
        consumers: ["Operations", "Product"],
        decisionsEnabled: ["Which workflow steps to remediate"],
        status: "illustrative",
      },
      {
        name: "Customer Data Quality Dashboard",
        description: assetNote,
        consumers: ["Product", "Operations", "Technology"],
        decisionsEnabled: ["Which data barriers block completion"],
        status: "illustrative",
      },
      {
        name: "Market Adoption and Usage Dashboard",
        description: assetNote,
        consumers: ["Product", "Market leads"],
        decisionsEnabled: ["Where adoption is weak"],
        status: "illustrative",
      },
      {
        name: "Defect and Incident Insights Product",
        description: assetNote,
        consumers: ["Product", "Technology", "Operations"],
        decisionsEnabled: ["What enters the next backlog"],
        status: "illustrative",
      },
      {
        name: "First-Time Resolution Performance Dashboard",
        description: assetNote,
        consumers: ["Service", "Product"],
        decisionsEnabled: ["Whether servicing quality is improving"],
        status: "illustrative",
      },
    ],
    prioritisation: {
      criteria: [
        "Customer journey impact",
        "Data-quality barrier severity",
        "Cross-market dependency",
        "Adoption potential",
        "Delivery effort",
        "Budget impact",
      ],
      approach:
        "Customer and service evidence used to prioritise workflow, data and platform enhancements.",
      note: "Salesforce module-level scope requires candidate confirmation.",
    },
    roadmap,
    stakeholders: [
      "Product",
      "Technology",
      "Operations",
      "Suppliers",
      "Market / user groups",
    ],
    challenges: [
      {
        title: "Workflow, data-quality and capability barriers",
        challenge:
          "Systemic workflow, data and capability barriers slowed application-to-approval and first-time resolution.",
        action:
          "Identified barriers and partnered with product and technology leaders on prioritised remediation.",
        outcome:
          "Application-to-approval time reduced by 30% and first-time resolution improved by 25%.",
        learning: "Data quality is a product problem, not only an engineering defect.",
        status: "confirmed",
      },
      {
        title: "Cross-market dependencies across 900+ users",
        challenge:
          "Roadmap sequencing, release readiness and adoption had to work across markets.",
        action:
          "Managed roadmap sequencing, cross-market dependencies, release readiness, role-based learning and adoption measures.",
        outcome: "End-to-end delivery and adoption for a multi-country platform.",
        learning: "Adoption data is part of the product, not a training afterthought.",
        status: "confirmed",
      },
      {
        title: "Post-launch defects, incidents and service noise",
        challenge:
          "Launch would fail if defects, incidents and service outcomes did not feed the next decisions.",
        action:
          "Monitored adoption, defects, incidents and service outcomes; refined the roadmap; improved user guidance; transitioned to sustainable ownership.",
        outcome:
          "Delivery velocity increased by 40% and budget variance stayed below 5%.",
        learning:
          "Product-health measures should drive the next backlog, not a separate status report.",
        status: "confirmed",
      },
    ],
    actions: [
      "Connected discovery through launch and optimisation.",
      "Used quality, schedule, adoption and operational performance measures to guide release and feature decisions.",
      "Transitioned the product to sustainable ownership.",
    ],
    metrics: [
      "daimler-budget-size",
      "daimler-users",
      "daimler-approval",
      "daimler-ftr",
      "daimler-velocity",
      "daimler-budget",
    ],
    outcomes: {
      confirmed: [
        "USD $78M programme.",
        "900+ users.",
        "30% reduction in application-to-approval time.",
        "25% improvement in first-time resolution.",
        "40% improvement in delivery velocity.",
        "Budget variance below 5%.",
      ],
      qualitative: [
        "Improved user guidance.",
        "Transition to sustainable ownership.",
      ],
      intended: ["Durable operating ownership after the programme peak."],
      notAvailable: [
        "Salesforce cloud and module list.",
        "Per-market baseline cycle times.",
      ],
    },
    netwealthAlignment: [
      "Shows customer-360 thinking, data quality, adoption measurement and incident insights.",
      "Shows discovery, prioritisation and cross-functional platform delivery.",
      "Translates to adviser/client platform language without claiming Salesforce at Netwealth.",
      "Demonstrates that product-health measures can move cycle time, resolution, velocity and budget variance together.",
    ],
    evidenceStatus: "confirmed",
    sourceReference: "Candidate CV — Daimler Mercedes-Benz, Oct 2019 – Oct 2020",
    limitations: [
      "Specific Salesforce clouds, modules and integrations: candidate confirmation required.",
      "Automotive CRM language is translated, not copied, into wealth-platform relevance.",
    ],
  },
  {
    id: "merck",
    slug: "merck-regulated-data",
    organisation: "Merck Pharmaceuticals",
    role: "Senior Product Manager | Regulated Products & Platforms",
    dates: "Oct 2015 – Oct 2019",
    industry: "Regulated products",
    tags: [
      "Regulated products",
      "Discovery",
      "Data and analytics",
      "Governance",
      "Operational improvement",
    ],
    portfolioSize: "USD $300M",
    productEnvironment:
      "Global regulated product and technology portfolio with strategic suppliers and local as well as global teams.",
    regulatoryContext:
      "Regulated product lifecycle including data, validation, privacy, security, quality and operational acceptance. No pharmaceutical product, plant or patient-data names are used.",
    anonymisationStatement:
      "No official Merck application, plant or product names are disclosed. Asset names are descriptive labels.",
    context:
      "I directed a global USD $300M regulated product and technology portfolio across Product, Technology, Data, Commercial, Operations, Quality and strategic suppliers, balancing customer value, commercial outcomes, compliance and continuity.",
    problem: {
      customer:
        "Global and local teams needed products that remained usable, available and compliant rather than delayed by unmanaged risk.",
      business:
        "Investment, supplier and feature trade-offs needed financial, customer, capacity, quality and benefits evidence.",
      operational:
        "Staged releases, training, communications and operational acceptance had to work across regions.",
      data: "Data, validation, privacy, security and quality controls had to be coordinated through the product lifecycle.",
      whyItMattered:
        "In a regulated portfolio, unavailable or unvalidated systems create both operational and compliance cost.",
    },
    users: [
      { name: "Product Managers", status: "confirmed" },
      { name: "Technology and Data", status: "confirmed" },
      { name: "Commercial teams", status: "confirmed" },
      { name: "Operations", status: "confirmed" },
      { name: "Quality", status: "confirmed" },
      { name: "Strategic suppliers", status: "confirmed" },
      { name: "Global and local teams", status: "confirmed" },
    ],
    discovery: [
      "Multi-year product roadmaps, investment priorities, business cases and delivery waves.",
      "Use of financial, customer, capacity, quality and benefits evidence.",
      "Coordination of requirements, data, validation, privacy, security, quality, training, communications and operational acceptance.",
      "Performance reviews, incident insights, customer feedback and post-implementation reviews.",
    ],
    hypothesis: {
      weBelieve:
        "If investment, supplier and release decisions are made from financial, customer, capacity, quality and benefits evidence, with validation and privacy designed in",
      forWhom: "global and local regulated-product teams",
      willResultIn: "more predictable delivery and more available systems",
      weWillKnow: "when on-time delivery and system availability improve",
    },
    productStrategy: {
      vision:
        "A regulated product and technology portfolio whose investment, release and reliability decisions are evidenced and owned.",
      outcomes: [
        "Transparency over value, risk and capacity",
        "90% on-time delivery",
        "Improved system availability",
        "Prioritised enhancement backlogs after release",
      ],
      principles: [
        "Privacy, security and quality are design constraints",
        "Suppliers are part of the product system",
        "Benefits evidence should change the next investment",
      ],
      valueProposition:
        "A portfolio operating system that funds the highest-value regulated opportunities without losing continuity.",
      consumers: [
        "Product",
        "Technology and Data",
        "Commercial",
        "Operations",
        "Quality",
        "Suppliers",
      ],
      decisionsEnabled: [
        "What to fund across years",
        "How to stage releases",
        "Where incidents require action",
        "Which enhancements are next",
      ],
    },
    dataProduct: {
      consumers: [
        "Product",
        "Technology",
        "Data",
        "Commercial",
        "Operations",
        "Quality",
      ],
      decisionsSupported: [
        "Investment trade-offs",
        "Release staging",
        "Supplier action",
        "Enhancement priority",
      ],
      dataDomains: [
        "Financial",
        "Customer",
        "Capacity",
        "Quality and validation",
        "Privacy and security",
        "Incidents and availability",
        "Benefits",
      ],
      inputs: [
        "Business cases and delivery waves",
        "Financial, customer, capacity, quality and benefits evidence",
        "Incident and performance insights",
        "Customer feedback and post-implementation reviews",
      ],
      outputs: [
        "Multi-year roadmaps",
        "Investment priorities",
        "Staged releases",
        "Enhancement backlogs",
      ],
      ownership:
        "Global product leadership with Data, Quality, Operations, Commercial, Technology and suppliers.",
      qualityExpectations:
        "Validation, privacy, security and quality controls had to be complete enough for operational acceptance.",
      freshnessExpectations:
        "Aligned to delivery waves, performance reviews and post-implementation reviews.",
      accessConsiderations:
        "Global and local access in a regulated environment. Detailed access design: candidate confirmation required.",
      privacyConsiderations:
        "Privacy was an explicit coordination area in the regulated lifecycle. Detailed PII / retention: candidate confirmation required.",
      riskAndCompliance:
        "Validation, security, quality and operational acceptance were first-class product concerns.",
      adoptionStrategy:
        "Training, communications, operational acceptance and coaching of Product Managers and multidisciplinary leaders.",
      productHealthMeasures: [
        "On-time delivery",
        "System availability",
        "Incident insights",
        "Benefits and investment evidence",
      ],
    },
    assets: [
      {
        name: "Regulated Operations Data Product",
        description: assetNote,
        consumers: ["Operations", "Product"],
        decisionsEnabled: ["Where continuity is at risk"],
        status: "illustrative",
      },
      {
        name: "Product Quality and Validation Evidence Hub",
        description: assetNote,
        consumers: ["Quality", "Product", "Technology"],
        decisionsEnabled: ["Whether a release is acceptable"],
        status: "illustrative",
      },
      {
        name: "Global Portfolio Performance Dashboard",
        description: assetNote,
        consumers: ["Senior product leaders"],
        decisionsEnabled: ["Value, risk and capacity transparency"],
        status: "illustrative",
      },
      {
        name: "System Availability and Incident Insights",
        description: assetNote,
        consumers: ["Technology", "Operations", "Product"],
        decisionsEnabled: ["Where to take corrective action"],
        status: "illustrative",
      },
      {
        name: "Capacity and Investment Decision Product",
        description: assetNote,
        consumers: ["Product", "Commercial"],
        decisionsEnabled: ["Highest-value use of capacity"],
        status: "illustrative",
      },
      {
        name: "Compliance and Release-Readiness Dashboard",
        description: assetNote,
        consumers: ["Quality", "Product", "Operations"],
        decisionsEnabled: ["Whether to stage or hold a release"],
        status: "illustrative",
      },
      {
        name: "Benefits Realisation and Supplier Performance Product",
        description: assetNote,
        consumers: ["Product", "Commercial", "Suppliers"],
        decisionsEnabled: ["Which suppliers and benefits need action"],
        status: "illustrative",
      },
    ],
    prioritisation: {
      criteria: [
        "Customer value",
        "Commercial outcome",
        "Compliance",
        "Continuity",
        "Capacity",
        "Quality",
        "Benefits",
        "Supplier risk",
      ],
      approach:
        "Financial, customer, capacity, quality and benefits evidence used to guide investment, supplier and feature trade-offs.",
      note: "No pharmaceutical system names are invented.",
    },
    roadmap,
    stakeholders: [
      "Product",
      "Technology",
      "Data",
      "Commercial",
      "Operations",
      "Quality",
      "Strategic suppliers",
    ],
    challenges: [
      {
        title: "Balancing value, compliance, continuity and capacity",
        challenge:
          "A global regulated portfolio can over-index on any one of value, compliance, continuity or capacity.",
        action:
          "Established multi-year roadmaps, investment priorities, business cases, delivery waves and performance measures.",
        outcome: "Transparency over value, risk and capacity; resources focused on highest-value opportunities.",
        learning: "Governed data products need an investment model, not only a pipeline.",
        status: "confirmed",
      },
      {
        title: "Privacy, security, validation and quality",
        challenge:
          "Regulated lifecycle work fails if data, validation, privacy, security and quality are sequenced after delivery.",
        action:
          "Coordinated requirements, data, validation, privacy, security, quality, training, communications and operational acceptance.",
        outcome: "90% on-time delivery.",
        learning: "Privacy and quality are product constraints that should be designed in.",
        status: "confirmed",
      },
      {
        title: "Availability, incidents and supplier performance",
        challenge:
          "System availability and supplier performance can quietly erode benefits after a release.",
        action:
          "Staged product releases, senior stakeholder alignment, supplier governance, early corrective action, incident insights and enhancement backlogs.",
        outcome: "System availability improved by 35%.",
        learning: "Reliability and benefits realisation are product outcomes.",
        status: "confirmed",
      },
    ],
    actions: [
      "Used benefits and quality evidence in investment conversations.",
      "Embedded product optimisation through reviews, incidents, customer feedback and post-implementation reviews.",
      "Coached Product Managers, analysts and multidisciplinary leaders.",
    ],
    metrics: ["merck-budget", "merck-ontime", "merck-availability"],
    outcomes: {
      confirmed: [
        "USD $300M global portfolio.",
        "90% on-time delivery.",
        "35% improvement in system availability.",
      ],
      qualitative: [
        "Stronger roadmap quality and evidence-based decisions through coaching.",
        "Clearer enhancement backlogs after release.",
      ],
      intended: ["Sustained continuity and compliance without losing commercial focus."],
      notAvailable: [
        "Named systems, plants or products.",
        "Availability baseline in percentage points of uptime.",
      ],
    },
    netwealthAlignment: [
      "Shows data governance, privacy, security, quality and regulated change.",
      "Shows long-term roadmaps, investment prioritisation and benefits realisation.",
      "Shows Data as a named collaborating function.",
      "Translates to wealth-platform control language without inventing AFSL claims as Merck work. DDO and regulatory readiness appear elsewhere in the CV as financial-services capability.",
      "Supports Netwealth’s need for well-governed, reliable data products.",
    ],
    evidenceStatus: "confirmed",
    sourceReference: "Candidate CV — Merck Pharmaceuticals, Oct 2015 – Oct 2019",
    limitations: [
      "No pharmaceutical product, plant, patient-data or application names are used.",
      "DDO is a CV skill in financial services, not a Merck activity.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export const caseStudyFilters = [
  "Financial services",
  "Wealth",
  "Digital banking",
  "Customer platform",
  "Regulated products",
  "Discovery",
  "Data and analytics",
  "Governance",
  "Adoption",
  "Operational improvement",
] as const;
