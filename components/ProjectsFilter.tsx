"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectItem } from "@/data/projects";

interface ProjectsFilterProps {
  projects: ProjectItem[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const categories = [
    "All",
    "PEB Fabrication",
    "Heavy Structural",
    "Equipment Fabrication",
    "Pipeline & Racks",
    "Construction Works",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={idx === 0 && activeCategory === "All"}
          />
        ))}
      </div>
    </div>
  );
}
