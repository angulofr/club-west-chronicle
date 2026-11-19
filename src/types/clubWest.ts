export type EraId = 'founding' | 'water-crisis' | 'legal-battles' | 'redevelopment';

export type EventCategory =
  | 'Founding & Covenants'
  | 'Water & Operations'
  | 'HOA & Governance'
  | 'Litigation & Appeals'
  | 'Sales & Builders';

export interface TimelineEvent {
  id: string;
  dateLabel: string;
  sortOrder: number;
  era: EraId;
  category: EventCategory;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  keyFigures: string[];
  metrics?: { label: string; value: string }[];
  sourceIds: string[];
}

export interface OwnershipNode {
  id: string;
  step: number;
  period: string;
  owner: string;
  entityDetails: string;
  transactionPrice: string;
  landStatus: string;
  tone: 'emerald' | 'amber' | 'terracotta' | 'slate' | 'cobalt';
  highlights: string[];
}

export interface ProposalSpec {
  id: string;
  name: string;
  proponent: string;
  timeframe: string;
  status: string;
  totalAcres: number;
  homesCount: number;
  openSpaceAcres: number;
  developedAcres: number;
  grossDensityPerAcre: number;
  highlights: string[];
  accentColor: string;
}

export interface HoaDocument {
  id: string;
  year: string;
  title: string;
  authority: string;
  thresholdOrRule: string;
  significance: string;
  status: 'Active / Foundational' | 'Challenged / Invalidated' | 'Disputed Mechanism';
}

export interface LegalDocket {
  id: string;
  caseNumber: string;
  court: string;
  title: string;
  filedOrDecided: string;
  presidingJudges: string;
  outcome: string;
  coreIssues: string[];
  financialImpact?: string;
}

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  category: 'Original Developer & Design' | 'Course Owners & Investors' | 'HOA & Community' | 'Homebuilders & Brokers';
  description: string;
}

export interface SourceReference {
  id: string;
  title: string;
  publisher: string;
  url: string;
  note: string;
}
