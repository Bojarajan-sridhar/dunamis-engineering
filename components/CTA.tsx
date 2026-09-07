import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

interface CTAProps {
  headline?: string;
  subheadline?: string;
}

export default function CTA({
  headline = "READY TO ENGINEER YOUR NEXT FACILITY?",
  subheadline = "Partner with Dunamis for precision PEB fabrication, 70,000+ sq.ft. heavy open yard capacity, and zero-compromise structural safety.",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-dark py-14 sm:py-20 border-y border-slate-800">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-10 pointer-events-none" />

      {/* Decorative Brand Accent Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[11px] sm:text-xs text-red-300">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              <span>COMMITTED TO INDUSTRIAL EXCELLENCE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase font-sans tracking-tight break-words">
              {headline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-brand-accent/30 group text-center"
            >
              <span>Request an Estimate</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`tel:${companyData.contact.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-colors shadow-sm text-center"
            >
              <PhoneCall className="w-4 h-4 text-brand-accent" />
              <span>{companyData.contact.primaryPhoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
