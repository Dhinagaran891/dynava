"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui";

interface IndustryCardProps {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  href: string;
}

export default function IndustryCard({
  title,
  description,
  highlights,
  icon: Icon,
  href,
}: IndustryCardProps) {
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
          aria-label={`Explore ${title} solutions`}
        >
          {/* Icon */}
          <div className="mb-8">
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
                  h-8
                  w-8
                  text-slate-700
                  transition-colors
                  duration-300
                  group-hover:text-emerald-600
                "
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-slate-900">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 flex-1 leading-7 text-slate-600">
            {description}
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  duration-300
                  group-hover:border-emerald-200
                  group-hover:bg-emerald-50
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-slate-200 pt-6">
            <div
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-slate-900
                transition-colors
                duration-300
                group-hover:text-emerald-600
              "
            >
              <span>Explore {title}</span>

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
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}