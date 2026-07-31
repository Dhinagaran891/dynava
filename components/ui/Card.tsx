import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  clickable?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  clickable = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500",
        hover &&
          "hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/40",
        clickable && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}