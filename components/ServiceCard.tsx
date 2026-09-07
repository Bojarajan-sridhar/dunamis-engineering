import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-accent hover:shadow-xl hover:-translate-y-1"
    >
      {/* Top Image Banner with Zoom Effect */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110 filter contrast-105"
        />
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Number Badge */}
        <div className="absolute top-3 left-3 bg-white/95 border border-slate-200 px-3 py-1 rounded-md font-mono text-xs font-bold text-brand-accent shadow-sm backdrop-blur-sm">
          {service.number}
        </div>

        {/* Arrow Badge */}
        <div className="absolute top-3 right-3 w-9 h-9 bg-white/95 border border-slate-200 rounded-full flex items-center justify-center text-slate-700 backdrop-blur-sm group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1A30] group-hover:text-brand-accent transition-colors font-sans tracking-tight">
            {service.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom Technical Indicator */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
          <span className="text-[11px] uppercase tracking-wider font-medium text-slate-400">
            INDUSTRIAL SCOPE
          </span>
          <span className="text-brand-accent font-bold flex items-center gap-1 group-hover:underline">
            Explore Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
