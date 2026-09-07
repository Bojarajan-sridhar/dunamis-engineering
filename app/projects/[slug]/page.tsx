import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import {
  MapPin,
  Maximize2,
  Calendar,
  Building,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Projects Showcase`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 space-y-16 sm:space-y-20 bg-pearl text-slate-900">
      {/* Hero Header */}
      <section className="relative py-12 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-slate-900 transition-colors">
              PROJECTS
            </Link>
            <span>/</span>
            <span className="text-brand-accent uppercase font-bold">
              {project.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
                <span className="w-8 h-0.5 bg-brand-accent" />
                <span>{project.category}</span>
                {project.area && (
                  <>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{project.area}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0B1A30] font-sans tracking-tight break-words">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md text-center"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Details & Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Media & Narrative */}
          <div className="lg:col-span-8 space-y-10">
            {/* Primary Big Photo */}
            <div className="relative h-[380px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* Scope Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1A30] uppercase font-sans">
                Project Scope &amp; Technical Execution
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {project.scope}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Fabricated at our specialized fabrication works in Kiloy Village, Sriperumbudur and transported to site for precision assembly using certified crane rigging, torque-controlled fasteners, and strict non-destructive testing procedures.
              </p>
            </div>

            {/* Additional Project Photos */}
            {project.gallery.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B1A30] uppercase font-sans tracking-tight">
                  Project Imagery &amp; Site Progress
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative h-64 rounded-xl overflow-hidden border border-slate-200/90 bg-slate-100 group shadow-sm"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} - View ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 font-mono text-[11px] text-slate-700 bg-white/90 border border-slate-200 px-2.5 py-1 rounded-md shadow-sm">
                        SITE VIEW #{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Specifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Specs Card */}
            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl space-y-5 shadow-sm">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-wider font-bold">
                PROJECT DATA SHEET
              </span>
              <h3 className="text-lg font-bold text-[#0B1A30] font-sans uppercase">
                Technical Specifications
              </h3>

              <div className="space-y-3 divide-y divide-slate-200 text-sm">
                {project.specs.map((spec, idx) => (
                  <div key={idx} className="pt-3 first:pt-0 flex flex-col space-y-0.5">
                    <span className="text-xs font-mono text-slate-500 uppercase">
                      {spec.label}
                    </span>
                    <span className="font-bold text-[#0B1A30]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {project.relatedServices.length > 0 && (
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    Utilized Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.relatedServices.map((svc, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-pearl border border-slate-200/90 rounded-lg font-mono text-xs text-slate-700 shadow-sm"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Inquire Card */}
            <div className="p-6 bg-brand-navy-dark text-white rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white font-sans uppercase">
                Planning a Similar Build?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our estimation engineers for site feasibility, layout recommendations, and commercial estimates.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold uppercase tracking-wider rounded-xl text-xs transition-colors shadow-md"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-[#0B1A30] uppercase font-sans mb-8">
          Other Featured Undertakings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <ProjectCard key={rel.id} project={rel} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
