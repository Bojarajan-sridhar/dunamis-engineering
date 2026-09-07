import React from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectsFilter from "@/components/ProjectsFilter";
import CTA from "@/components/CTA";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Featured Engineering & Construction Projects",
  description:
    "Explore Dunamis Engineering project portfolio: Sriperumbudur PEB Sheds, KIA Motors Press Work, KEC Pipe Rack Structure, Gudiyatham Shed, and French Village Court.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 space-y-16 sm:space-y-24 bg-pearl text-slate-900">
      {/* Header */}
      <section className="relative py-12 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>TRACK RECORD &amp; EXECUTION</span>
            </div>
            <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight leading-[1.08] break-words">
              <span className="text-[#0B1A30]">PROJECTS THAT SPEAK</span> <br />
              <span className="text-brand-accent">FOR THEMSELVES.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              A showcase of completed industrial installations, wide-span warehouse sheds, heavy mechanical assemblies, and architectural civil works executed across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase with Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PORTFOLIO"
          title="VERIFIED PROJECT ARCHIVE"
          description="Filter by discipline to examine individual project scopes, structural metrics, and execution details."
        />
        <ProjectsFilter projects={projectsData} />
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
