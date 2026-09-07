import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import CTA from "@/components/CTA";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  PackageCheck,
  Building,
  Phone,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | Capabilities`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Related services
  const otherServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 space-y-20 bg-pearl text-slate-900">
      {/* Hero Header */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-900 transition-colors">
              SERVICES
            </Link>
            <span>/</span>
            <span className="text-brand-accent uppercase font-bold">
              {service.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
                <span className="w-8 h-0.5 bg-brand-accent" />
                <span>CAPABILITY SPECIFICATION #{service.number}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0B1A30] font-sans tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                <span>Request Technical Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Scope */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Hero Image */}
            <div className="relative h-[360px] sm:h-[460px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* In-depth Scope Description */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1A30] uppercase font-sans">
                Engineering Overview &amp; Execution
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0B1A30] uppercase font-sans tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span>Key Technical Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white border border-slate-200/90 rounded-xl shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0B1A30] uppercase font-sans tracking-tight flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-brand-accent" />
                <span>Scope of Fabrication &amp; Erection</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200/90 rounded-xl space-y-1 shadow-sm"
                  >
                    <span className="text-xs font-mono text-brand-accent font-bold block">
                      SPEC 0{idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-800">{cap}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Handover */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0B1A30] uppercase font-sans tracking-tight flex items-center gap-2">
                <Building className="w-5 h-5 text-brand-accent" />
                <span>Deliverables &amp; QA Certifications</span>
              </h3>
              <ul className="space-y-2.5">
                {service.deliverables.map((del, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 p-3.5 bg-white border border-slate-200/90 rounded-lg text-sm text-slate-700 font-mono shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0"></span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Inquiry Card */}
            <div className="p-6 bg-brand-navy-dark text-white rounded-2xl space-y-4 shadow-xl">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-wider font-bold">
                DIRECT ESTIMATION
              </span>
              <h3 className="text-xl font-bold text-white font-sans uppercase">
                Need an Estimate for {service.title}?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our technical operations team for drawing reviews and pricing.
              </p>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold uppercase tracking-wider rounded-xl text-xs transition-colors shadow-md"
              >
                <span>Submit Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Industrial Applications Card */}
            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl space-y-4 shadow-sm">
              <h3 className="text-sm font-mono text-[#0B1A30] uppercase tracking-wider font-bold">
                Typical Applications
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {service.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-brand-accent font-bold">✓</span>
                    <span className="font-medium">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Capabilities */}
            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl space-y-4 shadow-sm">
              <h3 className="text-sm font-mono text-[#0B1A30] uppercase tracking-wider font-bold">
                Other Capabilities
              </h3>
              <div className="space-y-2">
                {otherServices.map((other) => (
                  <Link
                    key={other.id}
                    href={`/services/${other.slug}`}
                    className="flex items-center justify-between p-3 bg-pearl border border-slate-200/90 hover:border-brand-accent rounded-xl text-xs text-slate-700 hover:text-slate-900 transition-all group shadow-sm"
                  >
                    <span className="font-semibold group-hover:text-brand-accent">{other.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
