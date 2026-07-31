import {
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Truck,
  GraduationCap,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface Industry {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  href: string;
}

export const industries: Industry[] = [
  {
    title: "Healthcare",
    description:
      "Empowering healthcare organizations with AI-driven solutions that enhance patient care, streamline clinical workflows, and improve operational efficiency.",
    highlights: [
      "Diagnostics",
      "Automation",
      "Patient Experience",
    ],
    icon: HeartPulse,
    href: "/industries/healthcare",
  },
  {
    title: "Finance",
    description:
      "Helping financial institutions leverage AI for fraud detection, intelligent automation, risk management, and customer engagement.",
    highlights: [
      "Fraud Detection",
      "Risk Analysis",
      "Compliance",
    ],
    icon: Landmark,
    href: "/industries/finance",
  },
  {
    title: "Manufacturing",
    description:
      "Driving smarter manufacturing through predictive maintenance, quality assurance, and intelligent production optimization.",
    highlights: [
      "Predictive Maintenance",
      "Quality Control",
      "Production AI",
    ],
    icon: Factory,
    href: "/industries/manufacturing",
  },
  {
    title: "Retail",
    description:
      "Transforming retail experiences with personalized recommendations, inventory intelligence, and customer analytics.",
    highlights: [
      "Recommendations",
      "Inventory AI",
      "Customer Insights",
    ],
    icon: ShoppingBag,
    href: "/industries/retail",
  },
  {
    title: "Logistics",
    description:
      "Optimizing logistics operations using AI-powered route planning, demand forecasting, and supply chain intelligence.",
    highlights: [
      "Route Optimization",
      "Forecasting",
      "Supply Chain",
    ],
    icon: Truck,
    href: "/industries/logistics",
  },
  {
    title: "Education",
    description:
      "Enabling modern education with intelligent learning platforms, automation, and personalized student experiences.",
    highlights: [
      "Personalized Learning",
      "Automation",
      "Learning Analytics",
    ],
    icon: GraduationCap,
    href: "/industries/education",
  },
];