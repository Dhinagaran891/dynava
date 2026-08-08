import { EcosystemLayer } from "./types";

export const ecosystemLayers: EcosystemLayer[] = [
  {
    id: "foundation",

    title: "Foundation Intelligence",

    shortTitle: "Foundation",

    description:
      "Enterprise-grade foundation models provide reasoning, language understanding, prediction and intelligent automation.",

    businessValue:
      "Choose the right model based on capability, latency, privacy and operational cost.",

    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Open-source LLMs",
    ],

    position: "top",
  },

  {
    id: "knowledge",

    title: "Knowledge Systems",

    shortTitle: "Knowledge",

    description:
      "Enterprise knowledge is securely connected through retrieval, semantic search and contextual AI.",

    businessValue:
      "Ground every response using trusted organisational knowledge.",

    technologies: [
      "Azure AI Search",
      "Pinecone",
      "pgvector",
      "Retrieval-Augmented Generation (RAG)",
    ],

    position: "topLeft",
  },

  {
    id: "orchestration",

    title: "AI Orchestration",

    shortTitle: "Orchestration",

    description:
      "Workflow orchestration coordinates AI models, agents and enterprise processes.",

    businessValue:
      "Transform isolated AI capabilities into reliable business workflows.",

    technologies: [
      "LangGraph",
      "LangChain",
      "MCP",
    ],

    position: "topRight",
  },

  {
    id: "data",

    title: "Data Platforms",

    shortTitle: "Data",

    description:
      "Reliable enterprise data creates the foundation for trustworthy AI systems.",

    businessValue:
      "Improve governance, analytics and AI accuracy through structured data.",

    technologies: [
      "PostgreSQL",
      "Snowflake",
      "BigQuery",
    ],

    position: "bottomLeft",
  },

  {
    id: "cloud",

    title: "Cloud Infrastructure",

    shortTitle: "Cloud",

    description:
      "Enterprise cloud infrastructure enables secure, scalable deployment.",

    businessValue:
      "Deploy AI reliably across enterprise environments.",

    technologies: [
      "Microsoft Azure",
      "Amazon Web Services",
      "Google Cloud",
    ],

    position: "bottomRight",
  },

  {
    id: "governance",

    title: "Security & Governance",

    shortTitle: "Governance",

    description:
      "Responsible AI requires governance, monitoring and enterprise-grade security.",

    businessValue:
      "Maintain trust, compliance and operational resilience.",

    technologies: [
      "Monitoring",
      "Identity",
      "Compliance",
      "Evaluation",
    ],

    position: "bottom",
  },
];