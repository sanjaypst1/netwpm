export type EvidenceStatus =
  | "confirmed"
  | "transferable"
  | "adjacent"
  | "illustrative"
  | "portfolio-demo"
  | "requires-confirmation"
  | "target-role";

export type Industry =
  | "Financial services"
  | "Wealth"
  | "Digital banking"
  | "Customer platform"
  | "Regulated products";

export type CaseStudyTag =
  | Industry
  | "Discovery"
  | "Data and analytics"
  | "Governance"
  | "Adoption"
  | "Operational improvement";

export interface Metric {
  id: string;
  name: string;
  value: string;
  unit?: string;
  context: string;
  employer: string;
  source: string;
  status: EvidenceStatus;
  methodology: string;
  limitation: string;
}

export interface Technology {
  name: string;
  category: string;
  evidenceStatus: EvidenceStatus;
  source: string;
  candidateConfirmationRequired: boolean;
  notes: string;
}

export interface ProductAsset {
  name: string;
  description: string;
  consumers: string[];
  decisionsEnabled: string[];
  status: EvidenceStatus;
}

export interface OwnedProduct {
  name: string;
  workArea: string;
  purpose: string;
  primaryUsers: string[];
  whyDataWasComplex: string;
  dataTypes: { label: string; detail: string }[];
  challenges: string[];
  impact: string;
  frontend: string[];
  backend: string[];
}

export interface Challenge {
  title: string;
  challenge: string;
  action: string;
  outcome: string;
  learning: string;
  status: EvidenceStatus;
}

export interface DataProductDefinition {
  consumers: string[];
  decisionsSupported: string[];
  dataDomains: string[];
  inputs: string[];
  outputs: string[];
  ownership: string;
  qualityExpectations: string;
  freshnessExpectations: string;
  accessConsiderations: string;
  privacyConsiderations: string;
  riskAndCompliance: string;
  adoptionStrategy: string;
  productHealthMeasures: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  organisation: string;
  role: string;
  dates: string;
  industry: Industry;
  tags: CaseStudyTag[];
  portfolioSize: string;
  productEnvironment: string;
  regulatoryContext: string;
  anonymisationStatement: string;
  context: string;
  problem: {
    customer: string;
    business: string;
    operational: string;
    data: string;
    whyItMattered: string;
  };
  users: { name: string; status: EvidenceStatus }[];
  discovery: string[];
  hypothesis: {
    weBelieve: string;
    forWhom: string;
    willResultIn: string;
    weWillKnow: string;
  };
  productStrategy: {
    vision: string;
    outcomes: string[];
    principles: string[];
    valueProposition: string;
    consumers: string[];
    decisionsEnabled: string[];
  };
  dataProduct: DataProductDefinition;
  assets: ProductAsset[];
  prioritisation: {
    criteria: string[];
    approach: string;
    note: string;
  };
  roadmap: { stage: string; intent: string }[];
  stakeholders: string[];
  challenges: Challenge[];
  actions: string[];
  metrics: string[];
  outcomes: {
    confirmed: string[];
    qualitative: string[];
    intended: string[];
    notAvailable: string[];
  };
  netwealthAlignment: string[];
  evidenceStatus: EvidenceStatus;
  sourceReference: string;
  limitations: string[];
}

export interface RoleAlignmentRow {
  requirement: string;
  group: string;
  classification:
    | "Directly demonstrated"
    | "Strong transferable evidence"
    | "Supported by adjacent experience"
    | "Portfolio demonstration"
    | "Candidate confirmation required";
  evidence: string;
  employer: string;
  artefact: string;
  gap: string;
}

export interface Artefact {
  slug: string;
  title: string;
  purpose: string;
  usedIn: string;
  status: EvidenceStatus;
  sections: { heading: string; body: string }[];
}
