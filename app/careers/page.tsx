import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { careersData } from "@/data/careers";
import {
  Briefcase,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Build Your Future With Dunamis",
  description:
    "Join Dunamis Engineering and Construction: Open opportunities for Civil Engineers, Electrical Supervisors, Electricians, and Instrument Technicians in Chennai and Sriperumbudur.",
};

export default function CareersPage() {
  return (
    <div className="pt-24 pb-20 space-y-24 bg-pearl text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>CAREERS @ DUNAMIS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight leading-[1.08]">
              <span className="text-[#0B1A30]">BUILD YOUR FUTURE</span> <br />
              <span className="text-brand-accent">WITH DUNAMIS.</span>
            </h1>
            <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              {careersData.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>OUR PEOPLE &amp; CULTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#0B1A30] font-sans">
              Engineering with Impact &amp; Purpose
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {careersData.description}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Whether you are an experienced structural supervisor, a licensed wireman, or a graduate civil engineer, Dunamis offers hands-on exposure to major industrial plants, heavy PEB installations, and rigorous safety practices.
            </p>

            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl space-y-3 shadow-sm">
              <span className="text-xs font-mono uppercase text-brand-accent font-bold block">
                DIRECT APPLICATION INSTRUCTIONS
              </span>
              <p className="text-sm text-slate-600">
                Please email your updated curriculum vitae directly to:
              </p>
              <a
                href={`mailto:${careersData.applicationEmail}?subject=Application%20for%20Engineering%20Position`}
                className="inline-flex items-center gap-2 text-base font-mono font-bold text-slate-900 hover:text-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>{careersData.applicationEmail}</span>
              </a>
              <p className="text-xs text-slate-500 font-mono">
                Our recruitment team will review and respond promptly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src="/images/career/career.jpg"
                alt="Careers at Dunamis Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CURRENT OPENINGS"
          title="OPEN ENGINEERING ROLES"
          description="Explore current vacancies across our fabrication facility in Kiloy Village and regional project sites."
        />

        <div className="space-y-6">
          {careersData.roles.map((role) => {
            const mailtoSubject = encodeURIComponent(
              `Application for ${role.title} - [Your Name]`
            );
            const mailtoBody = encodeURIComponent(
              `Dear HR Team at Dunamis,\n\nI wish to apply for the position of ${role.title} at Dunamis Engineering.\n\nName:\nContact Number:\nTotal Experience:\nCurrent Location:\n\nAttached is my CV/Resume for your review.\n`
            );

            return (
              <div
                key={role.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-300 hover:border-brand-accent/60 hover:shadow-xl hover:-translate-y-1 shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-pearl border border-slate-200/90 rounded-md font-mono text-xs text-brand-accent font-bold shadow-sm">
                        {role.department}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {role.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-[#0B1A30] uppercase font-sans tracking-tight">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-700">
                    <div className="flex items-center gap-1.5 bg-pearl px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                      <span className="font-semibold">{role.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-pearl px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-brand-accent" />
                      <span className="font-semibold">{role.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {role.overview}
                </p>

                {/* Responsibilities & Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase text-[#0B1A30] font-bold tracking-wider">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-accent font-bold mt-0.5">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase text-[#0B1A30] font-bold tracking-wider">
                      Required Qualifications &amp; Skills
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs font-mono text-slate-500">
                    Send resume to: <span className="text-slate-800 font-bold">{careersData.applicationEmail}</span>
                  </p>
                  <a
                    href={`mailto:${careersData.applicationEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold uppercase text-xs tracking-wider rounded-xl transition-all shadow-md group"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
