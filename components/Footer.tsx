import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 border-t border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Background Subtle Tech Lines */}
      <div className="absolute inset-0 tech-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-slate-800">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <Link href="/" className="inline-block transition-transform hover:opacity-95">
              <div className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-md inline-flex items-center justify-center border border-slate-200">
                <Image
                  src="/images/logo.png"
                  alt="Dunamis Engineering and Construction Pvt Ltd"
                  width={240}
                  height={46}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Delivering precision Pre-Engineered Buildings, heavy structural fabrication,
              industrial piping, and turnkey civil construction across South India. Engineered for
              performance, structural strength, and zero-compromise safety.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-2.5 sm:px-3 py-1.5 rounded">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
                <span>70,000+ Sq. Ft. Open Yard</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-2.5 sm:px-3 py-1.5 rounded">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
                <span>5,000+ Sq. Ft. Covered Shop</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-slate-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Company", href: "/about" },
                { name: "Our Capabilities", href: "/services" },
                { name: "Featured Projects", href: "/projects" },
                { name: "Project Gallery", href: "/gallery" },
                { name: "Careers @ Dunamis", href: "/careers" },
                { name: "Contact & RFQ", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-accent transition-colors"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-slate-800 pb-2 inline-block">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-accent transition-colors" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 & 5: Locations & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-slate-800 pb-2 inline-block">
              Operations &amp; Unit
            </h3>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-slate-200 block text-xs">Fabrication Unit:</span>
                <p className="text-slate-400 leading-snug">
                  {companyData.addresses.fabricationUnit.street}, {companyData.addresses.fabricationUnit.taluk},{" "}
                  {companyData.addresses.fabricationUnit.district} - {companyData.addresses.fabricationUnit.pincode}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="font-semibold text-slate-200 block text-xs">Direct Inquiries:</span>
                <a
                  href={`tel:${companyData.contact.primaryPhone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{companyData.contact.primaryPhoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors pt-1"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} Dunamis Construction and Engineering Private Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              RFQ &amp; Estimates
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
