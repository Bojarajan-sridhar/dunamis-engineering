import React from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { companyData } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Factory,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & RFQ Estimation",
  description:
    "Get in touch with Dunamis Engineering & Construction. Reach our Registered Office in Poonamallee, Chennai or Fabrication Works in Kiloy Village, Sriperumbudur.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 space-y-24 bg-pearl text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>ESTIMATION &amp; INQUIRIES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight leading-[1.08]">
              <span className="text-[#0B1A30]">HAVE AN ENGINEERING</span> <br />
              <span className="text-brand-accent">PROJECT IN MIND?</span>
            </h1>
            <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              Connect directly with our engineering operations, estimation engineers, and fabrication heads in Chennai and Sriperumbudur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Form + Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Factual Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone & Email Card */}
            <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-wider font-bold block">
                DIRECT CONTACT CHANNELS
              </span>

              <div className="space-y-3">
                <a
                  href={`tel:${companyData.contact.primaryPhone}`}
                  className="flex items-center gap-3 p-4 bg-pearl border border-slate-200/90 hover:border-brand-accent rounded-xl transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block font-medium">
                      Primary Line / Direct Call
                    </span>
                    <span className="text-base font-bold text-[#0B1A30] font-mono">
                      {companyData.contact.primaryPhoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-3 p-4 bg-pearl border border-slate-200/90 hover:border-brand-accent rounded-xl transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block font-medium">
                      Engineering &amp; Tender Email
                    </span>
                    <span className="text-sm font-bold text-[#0B1A30] font-mono">
                      {companyData.contact.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Key Personnel Cards */}
            <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0B1A30] uppercase tracking-wider font-bold">
                <UserCheck className="w-4 h-4 text-brand-accent" />
                <span>KEY TECHNICAL PERSONNEL</span>
              </div>

              <div className="space-y-3 text-xs">
                {companyData.contact.keyPersonnel.map((person, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-pearl border border-slate-200/90 rounded-xl flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <span className="font-bold text-[#0B1A30] block text-sm">
                        {person.role}
                      </span>
                      <span className="text-slate-500 font-mono text-xs">
                        {person.phoneDisplay}
                      </span>
                    </div>
                    <a
                      href={`tel:${person.phone}`}
                      className="px-3.5 py-1.5 bg-white border border-slate-200/90 hover:bg-brand-accent hover:text-white hover:border-brand-accent text-slate-700 rounded-lg font-mono font-semibold transition-colors shadow-sm"
                    >
                      Call Line
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Registered Office & Works Card */}
            <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl space-y-5 shadow-sm">
              {/* Registered Office */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0B1A30] font-bold uppercase">
                  <Building className="w-4 h-4 text-brand-accent" />
                  <span>{companyData.addresses.registeredOffice.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {companyData.addresses.registeredOffice.full}
                </p>
              </div>

              {/* Fabrication Unit */}
              <div className="space-y-1.5 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0B1A30] font-bold uppercase">
                  <Factory className="w-4 h-4 text-brand-accent" />
                  <span>{companyData.addresses.fabricationUnit.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {companyData.addresses.fabricationUnit.full}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Interactive Facility Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="LOCATION SURVEY"
          title="FABRICATION WORKS LOCATION"
          description="Kiloy Village, Sriperumbudur Taluk, Kanchipuram District — Situated right in Tamil Nadu's prime automotive & industrial belt."
        />

        <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl relative">
          <iframe
            src={companyData.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dunamis Engineering Fabrication Yard Google Map"
          />
        </div>
      </section>
    </div>
  );
}
