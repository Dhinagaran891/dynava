"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

import { Card } from "@/components/ui";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function SolutionCard({
  title,
  description,
  icon: Icon,
  href,
}: SolutionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group h-full"
    >
      <Card
        clickable
        className="h-full overflow-hidden p-0 transition-all duration-300"
      >
        <Link
          href={href}
          className="flex h-full flex-col p-8"
          aria-label={`Learn more about ${title}`}
        >
          {/* Icon */}
          <div className="mb-6">
            <div
              className="
                inline-flex
                rounded-2xl
                bg-gradient-to-br
                from-blue-50
                via-white
                to-emerald-50
                p-4
                transition-all
                duration-300
                group-hover:scale-105
              "
            >
              <Icon
                className="
                  h-7
                  w-7
                  text-slate-700
                  transition-all
                  duration-300
                  group-hover:text-emerald-600
                "
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            {title}
          </h3>

          {/* Description */}
          <p className="flex-1 leading-7 text-slate-600">
            {description}
          </p>

          {/* CTA */}
          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              font-semibold
              text-emerald-600
            "
          >
            <span>Learn More</span>

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}