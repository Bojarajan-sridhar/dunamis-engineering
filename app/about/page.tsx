import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { companyData } from "@/data/company";
import SectionHeading from "@/components/SectionHeading";
import WhyDunamis from "@/components/WhyDunamis";
import DunamisPillars from "@/components/DunamisPillars";
import CTA from "@/components/CTA";
import { Factory, ShieldCheck, Target, Compass, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Engineering Capabilities & Infrastructure",
  description:
    "Learn about Dunamis Engineering and Construction Pvt Ltd: 70,000+ sq.ft. open yard, 5,000 sq.ft. covered workshop in Sriperumbudur, and our commitment to structural precision.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 space-y-16 sm:space-y-24 bg-pearl text-slate-900">
      {/* Page Header */}
      <section className="relative py-12 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent uppercase tracking-widest font-bold">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>ABOUT DUNAMIS</span>
            </div>
            <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight leading-[1.08] break-words">
              <span className="text-[#0B1A30]">BUILT FOR PRECISION.</span> <br />
              <span className="text-brand-accent">ENGINEERED FOR PERFORMANCE.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              {companyData.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Infrastructure Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B1A30] font-sans tracking-tight break-words">
              Our Journey &amp; Engineering Credo
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {companyData.aboutText.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="p-4 sm:p-6 bg-white border border-slate-200/90 rounded-xl space-y-2.5 sm:space-y-3 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-accent font-bold">
                Registered Office &amp; Works
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 font-semibold">Registered Office:</strong>{" "}
                {companyData.addresses.registeredOffice.full}
              </p>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 font-semibold">Fabrication Unit:</strong>{" "}
                {companyData.addresses.fabricationUnit.full}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[280px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src="/images/about/aboutus.jpg"
                alt="Dunamis Construction Team and Site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter contrast-105 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-white/95 border border-slate-200 rounded-xl shadow-lg backdrop-blur-md">
                <span className="text-xs font-mono text-brand-accent font-bold uppercase block">
                  INDUSTRIAL PRECISION
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Executing heavy PEB &amp; civil projects across Tamil Nadu.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PURPOSE & DIRECTION"
          title="MISSION & VISION"
          description="Guiding our teams toward technical excellence, zero-harm safety, and steadfast reliability."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src="/images/about/vision.jpg"
                alt="Dunamis Engineering Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 border border-slate-200 rounded-md font-mono text-xs font-bold text-brand-accent uppercase shadow-sm">
                FORWARD VISION
              </div>
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-2xl font-black uppercase text-[#0B1A30] font-sans">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src="/images/about/mission.jpg"
                alt="Dunamis Engineering Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 border border-slate-200 rounded-md font-mono text-xs font-bold text-brand-accent uppercase shadow-sm">
                ENGINEERING PURPOSE
              </div>
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-2xl font-black uppercase text-[#0B1A30] font-sans">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {companyData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication Infrastructure Specs */}
      <section className="bg-white border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="FACILITY & ASSETS"
            title="KILOY FABRICATION YARD & WORKSHOP"
            description="Our primary heavy industrial fabrication center located right in the Sriperumbudur industrial corridor."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-pearl border border-slate-200/90 p-6 rounded-xl space-y-2 shadow-sm">
              <span className="font-mono text-3xl font-black text-[#0B1A30]">70,000+</span>
              <h4 className="text-xs uppercase font-mono text-brand-accent font-bold">
                Sq. Ft. Heavy Open Yard
              </h4>
              <p className="text-xs text-slate-600">
                Spacious staging yard for heavy lattice trusses, crane gantry beams, and large-scale assembly.
              </p>
            </div>

            <div className="bg-pearl border border-slate-200/90 p-6 rounded-xl space-y-2 shadow-sm">
              <span className="font-mono text-3xl font-black text-[#0B1A30]">5,000+</span>
              <h4 className="text-xs uppercase font-mono text-brand-accent font-bold">
                Sq. Ft. Covered Shop
              </h4>
              <p className="text-xs text-slate-600">
                Dedicated weather-protected indoor fabrication shop for CNC cutting, submerged arc welding, and finishing.
              </p>
            </div>

            <div className="bg-pearl border border-slate-200/90 p-6 rounded-xl space-y-2 shadow-sm">
              <span className="font-mono text-3xl font-black text-[#0B1A30]">100%</span>
              <h4 className="text-xs uppercase font-mono text-brand-accent font-bold">
                Inspection &amp; QA/QC
              </h4>
              <p className="text-xs text-slate-600">
                Ultrasonic testing, radiographic dye penetrant, and dimensional tolerance checks for all welded connections.
              </p>
            </div>

            <div className="bg-pearl border border-slate-200/90 p-6 rounded-xl space-y-2 shadow-sm">
              <span className="font-mono text-3xl font-black text-[#0B1A30]">24/7</span>
              <h4 className="text-xs uppercase font-mono text-brand-accent font-bold">
                Operational Support
              </h4>
              <p className="text-xs text-slate-600">
                Rapid mobilization teams ready for emergency plant shutdowns, critical shifts, and expedited projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dunamis Pillars - Authentic Team & Leadership */}
      <DunamisPillars />

      {/* Why Dunamis Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CORE STRENGTHS"
          title="THE DUNAMIS ADVANTAGE"
          description="Factual capabilities that set Dunamis apart as a serious, safety-first B2B engineering partner."
        />
        <WhyDunamis />
      </section>

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
}
