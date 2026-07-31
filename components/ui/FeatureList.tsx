/**
 * FeatureList
 *
 * Reusable editorial list component.
 *
 * Used in:
 * - Why Dynava
 * - Process
 * - AI Readiness
 * - Future service pages
 */

import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Dot } from "lucide-react";

interface FeatureItem {
  title: string;
  description?: string;
}

interface FeatureListProps {
  items: FeatureItem[];
  variant?: "check" | "arrow" | "dot";
  size?: "sm" | "md";
  className?: string;
}

const FeatureList = ({
  items,
  variant = "check",
  size = "md",
  className,
}: FeatureListProps) => {
  return (
    <ul className={cn("space-y-6", className)}>
      {items.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FeatureList;