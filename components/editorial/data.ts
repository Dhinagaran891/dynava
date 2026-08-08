import type { EditorialStage } from "./types";

export const editorialStages: EditorialStage[] = [
  {
    id: 1,
    slug: "understanding",

    eyebrow: "UNDERSTANDING",

    lineOne: "Intelligence Begins",
    lineTwo: "with Understanding.",

    description:
      "Every successful transformation starts by understanding your business, your people and your data—not by choosing technology.",

    timeline: "UNDERSTANDING",
  },

  {
    id: 2,
    slug: "opportunity",

    eyebrow: "OPPORTUNITY",

    lineOne: "Every Business",
    lineTwo: "Has Hidden Potential.",

    description:
      "We uncover opportunities hidden inside your organisation, enabling confident decisions backed by intelligence.",

    timeline: "OPPORTUNITY",
  },

  {
    id: 3,
    slug: "transformation",

    eyebrow: "TRANSFORMATION",

    lineOne: "Technology",
    lineTwo: "With Purpose.",

    description:
      "AI should solve real business problems—not exist for its own sake. Every solution is built around measurable outcomes.",

    timeline: "TRANSFORMATION",
  },

  {
    id: 4,
    slug: "value",

    eyebrow: "VALUE",

    lineOne: "Innovation",
    lineTwo: "That Delivers.",

    description:
      "The outcome is sustainable growth, operational excellence and a stronger competitive position.",

    timeline: "VALUE",

    cta: {
      label: "Begin AI Readiness Assessment",
      href: "#assessment",
    },
  },
];