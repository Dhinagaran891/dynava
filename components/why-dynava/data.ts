import {
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";

import { Principle, Quote } from "./types";

export const principles: Principle[] = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "Business-first strategy",
    description:
      "Every engagement begins by understanding measurable business outcomes before selecting technology.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Enterprise-ready architecture",
    description:
      "Built for scalability, governance and seamless integration into enterprise ecosystems.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Secure, transparent and human-centric AI solutions designed for long-term trust.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Rapid delivery",
    description:
      "Move from strategy to production quickly without compromising quality or reliability.",
  },
  {
    id: 5,
    icon: Handshake,
    title: "Long-term partnership",
    description:
      "We continuously optimize, monitor and evolve AI systems as your business grows.",
  },
];

export const quote: Quote = {
  text: "We don't implement AI because it's possible. We implement it where it creates measurable business value.",
};