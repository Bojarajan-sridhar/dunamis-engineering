import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { servicesData } from "@/data/services";
import { Wrench, CheckCircle2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services & Capabilities",
  description:
    "Explore Dunamis Engineering capabilities: PEB fabrication, heavy structural steel, equipment machining, pipeline works, NFPA fire fighting, and industrial HVAC.",
};

const ancillaryCapabilities = [
  "Bin & Heavy Pallet Fabrication",
  "Crane Service & Reconditioning",
  "Machine Loading, Unloading & Plant Shifting",
  "Industrial Shutdown Activities",
  "Heavy Trolley Fabrication",
  "Sand Blasting & Industrial Painting",
  "Epoxy Floor Coating & Screeding",
  "ACP Sheet Fixing & Cladding Works",
  "Interior & Commercial Civil Works",
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 space-y-24 bg-pearl text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>CAPABILITIES &amp; SPECIALIZATIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight leading-[1.08]">
              <span className="text-[#0B1A30]">INDUSTRIAL ENGINEERING</span> <br />
              <span className="text-brand-accent">CAPABILITIES.</span>
            </h1>
            <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              From heavy structural fabrication in our 70,000 sq.ft. yard to on-site PEB erection and turnkey MEP installations, Dunamis delivers complete engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Primary Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PRIMARY DOMAINS"
          title="TURNKEY INDUSTRIAL CAPABILITIES"
          description="Click any capability to inspect detailed technical specifications, project scopes, and engineering deliverables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Ancillary Industrial Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>ADDITIONAL INDUSTRIAL SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1A30] uppercase font-sans">
              Specialized Plant &amp; Maintenance Works
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In addition to our primary structural and PEB divisions, Dunamis provides end-to-end plant maintenance, shutdown support, and equipment handling services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ancillaryCapabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-accent/60 hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-200 text-xs font-mono text-slate-500">
            <span>READY FOR FIELD MOBILIZATION</span>
            <Link
              href="/contact"
              className="text-brand-accent hover:text-brand-accent-hover font-bold hover:underline"
            >
              Discuss Plant Requirements →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
