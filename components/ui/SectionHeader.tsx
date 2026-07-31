import clsx from "clsx";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mx-auto mb-16 max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="inline-flex bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}