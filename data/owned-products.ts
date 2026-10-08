import type { OwnedProduct } from "@/types";

export const ownedProductsByCase: Record<string, OwnedProduct[]> = {
  nab: [
    {
      name: "NAB Classic Banking account",
      workArea: "Product performance and everyday servicing",
      purpose:
        "I owned the product lens on how Classic Banking account data — balances, transactions, product features and servicing events — was defined, trusted and used to improve everyday banking outcomes. I was not the core-banking engineer. I was the product manager making sure account data was complete enough for customers, operations, risk and product decisions.",
      primaryUsers: [
        "Everyday banking customers",
        "NAB app and internet banking users",
        "Branch and contact-centre service teams",
        "Product, Operations, Risk and Finance",
      ],
      whyDataWasComplex:
        "A Classic Banking account looks simple in the app, but the data sits across origination, core posting, digital channels, fees, exceptions and service cases. Definitions of ‘active account’, ‘available balance’, ‘failed payment’ and ‘servicing contact’ had to line up before we could prioritise the next product change.",
      dataTypes: [
        { label: "Engagement data", detail: "Logins, account views, payment initiation, alert interaction." },
        { label: "Performance data", detail: "Account opening completion, payment success, exception rates, servicing volume." },
        { label: "Organisation data", detail: "Product, channel, segment, operations queue and ownership." },
        { label: "Governance data", detail: "Control evidence, data quality, access, privacy and operational readiness." },
      ],
      challenges: [
        "Account, channel and servicing teams used different definitions of the same customer event.",
        "Failed payments and exceptions were visible in operations but not always packaged as product evidence.",
        "Investment conversations mixed feature requests with unreadiness in data quality and controls.",
      ],
      impact:
        "Decision-ready account and servicing evidence so leaders could trade off value, feasibility, compliance and capacity across the USD $30M data and platform portfolio.",
      frontend: [
        "NAB internet banking web experience",
        "NAB app account, payments and alerts screens (iOS and Android)",
        "Service-team account views and case handling screens",
      ],
      backend: [
        "Core deposit and account services",
        "Customer master and product-holding services",
        "Payment posting and exception handling",
        "API gateway and event feeds into analytics",
        "Enterprise data warehouse and Power BI product-performance views",
      ],
    },
    {
      name: "NAB Visa Debit card",
      workArea: "Operations, risk and transaction intelligence",
      purpose:
        "I treated the Visa Debit card as a data product as well as a payment product: authorisations, declines, tokens, disputes and card-control events had to be trusted before we changed journeys or controls.",
      primaryUsers: [
        "Cardholders using NAB app and merchants",
        "Card operations and disputes teams",
        "Fraud, Risk and Compliance",
        "Digital product and servicing teams",
      ],
      whyDataWasComplex:
        "Card data moves in seconds across issuing, Visa authorisation, tokenisation, fraud scoring and the app. A decline, a dispute or a frozen card is both a customer moment and a control event. Product decisions failed if those events could not be reconciled to the same customer, account and channel.",
      dataTypes: [
        { label: "Engagement data", detail: "Card-on, card-off, spend, digital wallet use, control changes in the app." },
        { label: "Performance data", detail: "Authorisation success, decline reasons, dispute cycle time, first-time resolution." },
        { label: "Organisation data", detail: "Issuing, fraud, operations and product ownership." },
        { label: "Governance data", detail: "Scheme rules, fraud controls, access to cardholder data, privacy." },
      ],
      challenges: [
        "Decline and fraud signals were fragmented across issuing, scheme and digital channels.",
        "Servicing teams could see the customer symptom without a trusted product explanation of the card event.",
        "Privacy and access rules limited who could use card-level data in product analytics.",
      ],
      impact:
        "Clearer card and control evidence for workflow and platform improvements, with Risk and Compliance in the same conversation as Product and Technology.",
      frontend: [
        "NAB app card controls, spend and alerts (iOS and Android)",
        "Internet banking card-management screens",
        "Operations and disputes consoles",
      ],
      backend: [
        "Card issuing and authorisation services",
        "Visa network connectivity and tokenisation",
        "Fraud and risk scoring feeds",
        "Dispute and chargeback services",
        "Event streaming into governed analytics and Power BI",
      ],
    },
    {
      name: "NAB app everyday banking experience",
      workArea: "Digital customer journey and servicing",
      purpose:
        "I used the NAB app as the front door for everyday banking data: login, account overview, payments, card controls and servicing. My job was to keep an eye on whether that experience was backed by trusted data, not only by screens.",
      primaryUsers: [
        "Retail customers on iOS and Android",
        "Digital product and experience teams",
        "Contact-centre teams handling app-originated issues",
        "Risk, Fraud and Operations",
      ],
      whyDataWasComplex:
        "The app stitches Classic Banking, Visa Debit, payments, alerts and servicing into one journey. If account, card and notification data arrive at different freshness or quality, customers see a broken everyday experience even when each backend is ‘up’.",
      dataTypes: [
        { label: "Engagement data", detail: "App adoption, feature use, drop-off, notification response." },
        { label: "Performance data", detail: "Journey completion, payment success, crash/error, servicing deflection." },
        { label: "Organisation data", detail: "Channel, product, release and squad ownership." },
        { label: "Governance data", detail: "Release readiness, access, telemetry retention and control evidence." },
      ],
      challenges: [
        "App telemetry, core account data and servicing cases were not always joined to the same customer journey.",
        "Release outcomes were tracked as delivery status rather than as a change in everyday-banking behaviour.",
        "Competing channel priorities made it hard to sequence data-quality work against visible app features.",
      ],
      impact:
        "Product performance measures and readiness forums that connected app journeys to account and card data, so frontline adoption and control evidence travelled with the release.",
      frontend: [
        "Native NAB app on iOS and Android",
        "Mobile BFF-backed account, payment and card experiences",
        "In-app alerts, tasks and servicing entry points",
      ],
      backend: [
        "API gateway and mobile backend-for-frontend",
        "Account, payment, card and notification services",
        "Event streaming and product analytics",
        "Identity and access management",
        "Data warehouse and Power BI for product health",
      ],
    },
  ],
  ubs: [
    {
      name: "Wealth Client Onboarding and Servicing Intelligence",
      workArea: "Client onboarding",
      purpose:
        "Give Product, Operations, Risk and regional leads a trusted view of where wealth clients stall in onboarding and which servicing contacts are avoidable — then use that evidence to redesign journeys.",
      primaryUsers: [
        "Wealth Product Managers",
        "Onboarding and operations teams",
        "Client servicing teams",
        "Risk and regional stakeholders",
      ],
      whyDataWasComplex:
        "Onboarding in wealth is not one form. It is identity, account setup, product eligibility, local regulatory steps and hand-offs into service. Regional and local requirements meant the same journey produced different data shapes, so efficiency could not be measured from a single operational report.",
      dataTypes: [
        { label: "Engagement data", detail: "Stage completion, adviser/client actions, drop-off, repeat contacts." },
        { label: "Performance data", detail: "Onboarding cycle time, straight-through rate, service demand." },
        { label: "Organisation data", detail: "Region, product, operations queue, supplier and capacity." },
        { label: "Governance data", detail: "Local regulatory checks, readiness, decision records." },
      ],
      challenges: [
        "Local regulatory and operating steps broke a single regional onboarding definition.",
        "Service demand was high because incomplete onboarding leaked into the contact centre.",
        "Senior decisions were commercially sensitive and needed workshop-ready evidence, not raw extracts.",
      ],
      impact:
        "Onboarding efficiency improved by 30% and service demand reduced by 22% through journey redesign, operating guidance and adoption support, informed by Power BI performance analysis.",
      frontend: [
        "Adviser and operations onboarding workspaces",
        "Client journey and task screens",
        "Power BI onboarding and service performance cockpits",
      ],
      backend: [
        "Wealth onboarding workflow and case services",
        "Document, identity and eligibility services",
        "CRM and servicing platforms",
        "Microsoft 365 collaboration and knowledge",
        "Data warehouse feeding Power BI semantic models",
      ],
    },
    {
      name: "Adviser Portfolio Intelligence and Client Insights",
      workArea: "Adviser engagement and product performance",
      purpose:
        "Turn product, financial, capacity, risk and service data into insights advisers and regional product leaders can use for portfolio, capacity and client-service decisions.",
      primaryUsers: [
        "Advisers and relationship teams",
        "Regional product leaders",
        "Portfolio and performance analysts",
        "Risk and senior stakeholders",
      ],
      whyDataWasComplex:
        "Adviser and client insight had to combine holdings, service, risk and capacity without creating unmanaged local workbooks. Performance only became useful when a named consumer could trust freshness, definitions and access.",
      dataTypes: [
        { label: "Engagement data", detail: "Adviser use of insights, client review cadence, adoption of platform features." },
        { label: "Performance data", detail: "Product, financial, capacity, risk and service KPIs in Power BI." },
        { label: "Organisation data", detail: "Region, book, product family, supplier and team capacity." },
        { label: "Governance data", detail: "Access by role, local regulatory constraints, investment-decision evidence." },
      ],
      challenges: [
        "Regional and local books needed comparable metrics without erasing local context.",
        "Capacity and risk data lived in different forums from client-service data.",
        "Insight that did not change an investment or servicing decision was noise.",
      ],
      impact:
        "Power BI and Microsoft 365 used to evaluate performance, identify growth and efficiency opportunities and inform investment priorities across a USD $30M regional portfolio with 55+ professionals.",
      frontend: [
        "Power BI adviser and regional performance dashboards",
        "Microsoft 365 decision packs and product reviews",
        "Adviser desktop / portal insight tiles",
      ],
      backend: [
        "Portfolio, position and client-holding services",
        "Performance, fee and capacity datasets",
        "Risk and service data marts",
        "Microsoft 365 and governed semantic models in Power BI",
      ],
    },
  ],
  bofa: [
    {
      name: "Digital Banking Transaction Intelligence and Financial Insights",
      workArea: "Product performance and transaction intelligence",
      purpose:
        "Use transaction, account and product-control data so digital banking teams can see unmet needs, operational friction and which insights actually help customers manage money.",
      primaryUsers: [
        "Digital banking customers",
        "Product Managers",
        "Data, Operations and Risk partners",
        "Financial-insights and servicing teams",
      ],
      whyDataWasComplex:
        "Transaction intelligence is only useful if postings, categories, fees, failed payments and controls tell the same story as the screen the customer sees. Product data and control data had to be analysed together, not in separate engineering and risk reports.",
      dataTypes: [
        { label: "Engagement data", detail: "Use of balances, transactions, insights, alerts and money-movement features." },
        { label: "Performance data", detail: "Payment success, insight click-through, dispute and exception rates." },
        { label: "Organisation data", detail: "Product workstream, channel, operations and partner ownership." },
        { label: "Governance data", detail: "Product data quality, controls, regulatory impact, release evidence." },
      ],
      challenges: [
        "Transaction, category and control data were not always reconciled to the customer-facing insight.",
        "Senior trade-offs needed value, effort, risk, capacity and benefits in one option set.",
        "Release status was easier to get than release outcome.",
      ],
      impact:
        "Transparent product options for a USD $55M digital banking portfolio, with product data and controls in the same prioritisation conversation.",
      frontend: [
        "Digital banking web and mobile transaction lists",
        "Financial insights, alerts and money-management tiles",
        "Operations and risk monitoring views",
      ],
      backend: [
        "Account and transaction processing services",
        "Payments and card APIs",
        "Categorisation and insights services",
        "Product-control and data-quality monitors",
        "Analytics warehouse supporting journey and product health",
      ],
    },
    {
      name: "Digital Customer Journey and Servicing Analytics",
      workArea: "Digital customer journey and servicing",
      purpose:
        "Analyse customer journeys, workflow hand-offs and servicing friction so discovery, testing and launch stay attached to customer outcomes and operational readiness.",
      primaryUsers: [
        "Digital banking customers",
        "Product and experience teams",
        "Customer operations and servicing",
        "Technology, Data and Risk",
      ],
      whyDataWasComplex:
        "A digital journey crosses channel, workflow, operations and partners. Drop-off in the app can be a content issue, a hand-off issue or a control issue. Without joined journey and servicing data, the backlog fills with the loudest symptom.",
      dataTypes: [
        { label: "Engagement data", detail: "Journey step completion, abandonment, authentication friction." },
        { label: "Performance data", detail: "Time-to-complete, servicing contacts after digital attempts, release outcomes." },
        { label: "Organisation data", detail: "Squad, partner, operations queue and support model." },
        { label: "Governance data", detail: "Acceptance criteria, readiness, customer-feedback and risk logs." },
      ],
      challenges: [
        "Workflow hand-offs hid the real drop-off between digital and operations.",
        "Customer feedback arrived after launch unless governance routines captured it in the pipeline.",
        "Testing and acceptance could pass without operational readiness.",
      ],
      impact:
        "Governed discovery-to-launch path with support models, knowledge transfer and post-release optimisation for digital banking workstreams.",
      frontend: [
        "Digital banking web and mobile journeys",
        "Servicing and case-management screens",
        "Release-outcome and feedback review views",
      ],
      backend: [
        "Journey orchestration and workflow services",
        "Identity, application and servicing APIs",
        "Operational case and queue systems",
        "Product analytics and control datasets",
      ],
    },
  ],
  daimler: [
    {
      name: "Customer 360 and Lead-to-Finance Journey Intelligence",
      workArea: "Client onboarding (lead to application to finance)",
      purpose:
        "Give market, product and operations teams a single customer view from lead through application to finance approval, so workflow and data-quality barriers are visible before they slow the customer.",
      primaryUsers: [
        "Sales and market teams (900+ users)",
        "Credit / finance operations",
        "Product and technology leaders",
        "Suppliers supporting the Salesforce platform",
      ],
      whyDataWasComplex:
        "Lead-to-finance crosses acquisition, account data, application workflow and market-specific rules. Incomplete customer or application data in Salesforce did not just create a ‘data issue’ — it lengthened application-to-approval time across countries.",
      dataTypes: [
        { label: "Engagement data", detail: "Lead progression, application starts, user adoption of Salesforce journeys." },
        { label: "Performance data", detail: "Application-to-approval time, conversion, defect and incident rates." },
        { label: "Organisation data", detail: "Market, dealer/user role, product and supplier ownership." },
        { label: "Governance data", detail: "Data quality rules, access, release readiness, cross-market dependencies." },
      ],
      challenges: [
        "Systemic workflow and data-quality barriers sat underneath slow approvals.",
        "Cross-market dependencies meant a local field change could break another market’s journey.",
        "Users could not complete finance journeys if customer 360 data was incomplete or duplicated.",
      ],
      impact:
        "Application-to-approval time reduced by 30% by prioritising workflow, data quality and platform enhancements from customer and service evidence.",
      frontend: [
        "Salesforce Lightning Customer 360 and lead/application consoles",
        "Market-specific acquisition and account-management screens",
        "Role-based training and in-app guidance",
      ],
      backend: [
        "Salesforce CRM data model and automation",
        "Lead-to-opportunity-to-finance integrations",
        "Middleware / APIs to credit and finance systems",
        "Data-quality monitoring and master-data services",
        "Analytics on adoption, defects and cycle time",
      ],
    },
    {
      name: "Customer Service and Dealer Performance Intelligence",
      workArea: "Operations, service and adoption",
      purpose:
        "Monitor adoption, defects, incidents and service outcomes after launch so dealer and service performance, not only go-live, drives the next backlog.",
      primaryUsers: [
        "Dealer and service users",
        "Customer operations",
        "Product and technology leaders",
        "Regional market leads",
      ],
      whyDataWasComplex:
        "Service performance is a mix of case data, incidents, user adoption and first-time resolution. Across 900+ users, a defect in one market looked like a training issue in another unless the measures were shared.",
      dataTypes: [
        { label: "Engagement data", detail: "Console usage, knowledge use, case handling patterns." },
        { label: "Performance data", detail: "First-time resolution, incident volume, delivery velocity, budget variance." },
        { label: "Organisation data", detail: "Dealer, market, service queue and supplier." },
        { label: "Governance data", detail: "Release, hypercare, access and sustainable ownership." },
      ],
      challenges: [
        "Post-launch incidents and defects were not automatically becoming product backlog.",
        "First-time resolution suffered when data and capability barriers stayed in the workflow.",
        "Budget and velocity needed the same product-health evidence as service quality.",
      ],
      impact:
        "First-time resolution improved by 25%, delivery velocity by 40%, and budget variance stayed below 5%, with the product transitioned to sustainable ownership.",
      frontend: [
        "Salesforce Service console",
        "Dealer performance and case dashboards",
        "User guidance and role-based learning",
      ],
      backend: [
        "Salesforce case, incident and knowledge objects",
        "Integration to operations and dealer systems",
        "Quality, schedule and adoption metrics store",
        "Defect/incident analytics feeding the roadmap",
      ],
    },
  ],
  merck: [
    {
      name: "Mobile Sales Force Effectiveness and Field Insights Product",
      workArea: "Adviser-style engagement (field force) and product performance",
      purpose:
        "Give commercial, operations and quality leaders a governed view of field activity, coverage and effectiveness so investment and enhancement decisions are based on field evidence, not anecdote.",
      primaryUsers: [
        "Field sales and medical-adjacent commercial teams",
        "Sales operations and commercial excellence",
        "Product, Technology and Data",
        "Quality and regional leaders",
      ],
      whyDataWasComplex:
        "Field insights combine activity, territory, product and quality constraints. Mobile capture in the field is incomplete unless definitions, privacy and validation rules are designed into the product. Global and local teams needed comparable measures without breaking regulated operating practice.",
      dataTypes: [
        { label: "Engagement data", detail: "Calls, coverage, content use, mobile adoption." },
        { label: "Performance data", detail: "Field effectiveness, on-time delivery of enhancements, system availability." },
        { label: "Organisation data", detail: "Territory, region, product, supplier and capacity." },
        { label: "Governance data", detail: "Validation, privacy, security, quality and operational acceptance." },
      ],
      challenges: [
        "Field activity data was inconsistent across regions and devices.",
        "Commercial value, compliance and continuity competed for the same capacity.",
        "Availability issues quietly eroded field trust after release.",
      ],
      impact:
        "90% on-time delivery and 35% improvement in system availability through staged releases, supplier governance and evidence-led investment across a USD $300M regulated portfolio.",
      frontend: [
        "Field mobile CRM on iOS and Android",
        "Sales operations and coaching dashboards",
        "Regional performance views",
      ],
      backend: [
        "Salesforce / Veeva-class life-sciences CRM",
        "Territory alignment and activity services",
        "Mobile sync, identity and access",
        "Validated data stores, quality and audit trails",
        "Analytics on adoption, incidents and availability",
      ],
    },
    {
      name: "Compliant Email Reach, Consent and HCP Engagement Product",
      workArea: "Governance, consent and controlled engagement",
      purpose:
        "Make healthcare-professional engagement usable for commercial teams only where consent, content approval and privacy evidence exist — so reach is measurable without breaking regulated communications.",
      primaryUsers: [
        "Commercial and engagement teams",
        "Privacy, Quality and Compliance",
        "Content and operations teams",
        "Data and Technology",
      ],
      whyDataWasComplex:
        "HCP email is not a marketing blast. Consent, channel preference, approved content, identity and audit have to travel together. A high open rate is a failure if the consent record is wrong. Privacy, validation and quality were product constraints, not end-of-cycle checks.",
      dataTypes: [
        { label: "Engagement data", detail: "Reach, send, open, bounce, suppression, preference changes." },
        { label: "Performance data", detail: "Compliant send success, incident rate, enhancement throughput." },
        { label: "Organisation data", detail: "Brand, market, agency/supplier and content ownership." },
        { label: "Governance data", detail: "Consent, privacy, retention, validation, security and audit." },
      ],
      challenges: [
        "Consent and preference data were fragmented from the engagement channel.",
        "Suppliers needed the same control evidence as internal teams.",
        "Incidents in communications required rapid, documented corrective action.",
      ],
      impact:
        "Regulated communications coordinated with data, validation, privacy, security and quality, feeding incident insights and enhancement backlogs rather than unmanaged local lists.",
      frontend: [
        "Compliant email / approved-content engagement UI",
        "Consent and preference management screens",
        "Quality and incident review views",
      ],
      backend: [
        "Consent and preference store",
        "Approved content and audit services",
        "Identity, HCP master data and suppression lists",
        "Privacy, retention and access controls",
        "Incident, validation and supplier-performance evidence",
      ],
    },
  ],
};
