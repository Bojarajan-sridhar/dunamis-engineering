import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Ruler, HardHat, Users } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TimelineProcess from "@/components/TimelineProcess";
import WhyDunamis from "@/components/WhyDunamis";
import DunamisPillars from "@/components/DunamisPillars";
import ClientGrid from "@/components/ClientGrid";
import CTA from "@/components/CTA";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  // Featured projects for the homepage editorial grid
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 bg-pearl text-slate-900">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Banner with Technical Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src="/images/about/aboutus.jpg"
                alt="Dunamis Engineering Fabrication Yard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter contrast-105 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Engineering Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-white/95 border border-slate-200 rounded-xl shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-wider block">
                      KILOY VILLAGE INDUSTRIAL YARD
                    </span>
                    <span className="text-xs text-slate-600 font-sans font-medium">
                      70,000 Sq.Ft. Open Yard + 5,000 Sq.Ft. Covered Workshop
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle architectural background decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-100/50 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent uppercase tracking-widest font-bold">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase font-sans leading-[1.08]">
              <span className="text-[#0B1A30]">BUILT FOR PRECISION.</span> <br />
              <span className="text-brand-accent">ENGINEERED FOR PERFORMANCE.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {companyData.aboutText[0]}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {companyData.aboutText[1]}
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Advanced PEB Framing & Erection",
                "Certified Welding & Ultrasonic QC",
                "High-Tolerance Equipment Parts",
                "Turnkey NFPA Fire & HVAC",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs font-mono text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-accent hover:text-slate-900 group border-b-2 border-brand-accent pb-1 transition-colors"
              >
                <span>Learn More About Dunamis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#pillars-section"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-brand-accent border border-slate-200 text-xs font-mono font-bold text-slate-700 transition-colors shadow-sm"
              >
                <Users className="w-3.5 h-3.5 text-brand-accent" />
                <span>Meet The Pillars</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CORE CAPABILITIES"
          title="OUR CAPABILITIES"
          description="From massive pre-engineered warehouses to heavy equipment fabrication and NFPA turnkey systems, Dunamis delivers comprehensive engineering solutions."
          actionHref="/services"
          actionText="View All Capabilities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-300 hover:border-brand-accent text-slate-900 font-bold text-sm uppercase tracking-wider rounded-lg transition-all group hover:bg-slate-50 shadow-sm"
          >
            <span>Explore All 10 Capabilities</span>
            <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS EDITORIAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PROVEN TRACK RECORD"
          title="PROJECTS THAT SPEAK FOR THEMSELVES"
          description="Inspect verified structural installations, PEB sheds, and equipment fabrications executed for Tier-1 automotive and industrial clients."
          actionHref="/projects"
          actionText="View All Projects"
        />

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={idx === 0 || idx === 3}
            />
          ))}
        </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="HOW WE DELIVER"
            title="THE ENGINEERING PROCESS"
            description="A disciplined, six-stage turnkey workflow guaranteeing structural safety, strict adherence to tolerances, and on-time commissioning."
            align="center"
          />
          <TimelineProcess />
        </div>
      </section>

      {/* 6. WHY DUNAMIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="COMPETITIVE ADVANTAGE"
          title="WHY DUNAMIS"
          description="Built on engineering integrity, robust fabrication capacity, and continuous adherence to quality benchmarks."
        />
        <WhyDunamis />
      </section>

      {/* 7. THE DUNAMIS PILLARS - AUTHENTIC TEAM & WORKFORCE */}
      <DunamisPillars />

      {/* 8. CLIENT TRUST */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="PARTNERSHIPS"
            title="TRUSTED BY INDUSTRY"
            description="Supplying structural steel and fabrication services to leading industrial enterprises across Tamil Nadu."
            align="center"
          />
          <ClientGrid />
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <CTA />
    </div>
  );
}
