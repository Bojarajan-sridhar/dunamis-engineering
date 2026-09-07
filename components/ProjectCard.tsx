import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-xl bg-slate-900 border border-slate-200 transition-all duration-300 hover:border-brand-accent hover:shadow-2xl hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:row-span-2 min-h-[440px] lg:min-h-[520px]" : "min-h-[340px]"
      }`}
    >
      {/* Background Project Image with High-Contrast Editorial Hover */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 66vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105 brightness-95"
      />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-85 transition-opacity" />

      {/* Top Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="px-3 py-1 bg-white/95 border border-slate-200 rounded-md font-mono text-[11px] font-bold text-brand-accent uppercase tracking-wider shadow-sm backdrop-blur-md">
          {project.category}
        </span>

        <div className="w-8 h-8 rounded-full bg-white/95 border border-slate-200 flex items-center justify-center text-slate-800 backdrop-blur-md group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Info Content */}
      <div className="relative z-10 p-6 sm:p-8 space-y-2.5">
        {project.area && (
          <div className="flex items-center gap-2 text-xs font-mono text-red-300 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
            <span>{project.area}</span>
          </div>
        )}

        <h3
          className={`font-black text-white font-sans tracking-tight uppercase group-hover:text-red-300 transition-colors ${
            featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-200/90 line-clamp-2 leading-relaxed max-w-xl">
          {project.scope}
        </p>

        {project.location && (
          <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-300 font-mono">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>{project.location}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
