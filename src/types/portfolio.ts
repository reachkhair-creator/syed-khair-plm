export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  productLines?: string[];
  keyClients?: string[];
}

export interface ExpertisePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  toolsAndHandlers: string[];
  outcome: string;
  operationalImpact: string;
  level: number; // Percentage or scale 1-100
  sampleCodeSnippet?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  metricHighlight: { value: string; label: string };
  architectureDiagram?: string;
  detailedNotes?: string[];
}

export interface ManufacturingStage {
  step: number;
  title: string;
  system: string;
  description: string;
  keyOutputs: string[];
  governanceRule: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; context?: string }[];
}

export interface MaturityCriterion {
  id: string;
  pillar: string;
  question: string;
  options: { label: string; points: number; hint: string }[];
}

export interface ProfessionalStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  executiveSummary: string;
  corePillars: {
    name: string;
    description: string;
    keyFeatures: string[];
    benefit: string;
  }[];
  architectureHighlights: {
    label: string;
    systemOrTool: string;
    details: string;
    codeSnippet?: string;
  }[];
  businessImpactMetrics: {
    metric: string;
    label: string;
    impact: string;
  }[];
  methodologyOrRoadmap?: {
    phase: string;
    focus: string;
    deliverables: string[];
  }[];
}

