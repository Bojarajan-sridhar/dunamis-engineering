import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actionHref?: string;
  actionText?: string;
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  actionHref,
  actionText,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-8 sm:mb-12 md:mb-16 flex flex-col ${
        isCentered ? "items-center text-center" : "items-start text-left"
      } ${actionHref ? "md:flex-row md:items-end md:justify-between" : ""}`}
    >
      <div className={`max-w-3xl ${isCentered ? "mx-auto" : ""}`}>
        {tag && (
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 sm:w-6 h-0.5 bg-brand-accent"></span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-brand-accent uppercase">
              {tag}
            </span>
          </div>
        )}
        <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B1A30] uppercase font-sans break-words">
          {title}
        </h2>
        {description && (
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {actionHref && actionText && (
        <div className="mt-6 md:mt-0">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-accent hover:text-slate-900 group border-b border-brand-accent/40 pb-1 hover:border-slate-900 transition-colors"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
