import { BlueprintStage } from "./types";

export const blueprintStages: BlueprintStage[] = [
  {
    id: "discover",
    code: "BP-01",
    title: "Discover",
    tagline: "Understanding before building.",
    overview:
      "We begin by understanding your organisation, business objectives, stakeholders, current systems and opportunities before recommending technology.",
    outcomes: [
      "AI Readiness Assessment",
      "Business Opportunity Mapping",
      "Stakeholder Alignment",
      "Success Metrics Framework",
    ],
  },
  {
    id: "architect",
    code: "BP-02",
    title: "Architect",
    tagline: "Designing intelligent systems.",
    overview:
      "We architect enterprise intelligence tailored to your business goals, technical landscape and future growth.",
    outcomes: [
      "Enterprise AI Architecture",
      "Solution Blueprint",
      "Technology Roadmap",
      "Data Strategy",
    ],
  },
  {
    id: "transform",
    code: "BP-03",
    title: "Transform",
    tagline: "Turning strategy into measurable impact.",
    overview:
      "Our team develops, integrates and deploys AI solutions that improve efficiency, productivity and business performance.",
    outcomes: [
      "AI Solution Delivery",
      "Workflow Automation",
      "System Integration",
      "Business Validation",
    ],
  },
  {
    id: "evolve",
    code: "BP-04",
    title: "Evolve",
    tagline: "Growing with your enterprise.",
    overview:
      "We continuously monitor, optimise and expand your AI capabilities to ensure long-term business value.",
    outcomes: [
      "Continuous Optimisation",
      "Performance Monitoring",
      "Governance",
      "Innovation Roadmap",
    ],
  },
];