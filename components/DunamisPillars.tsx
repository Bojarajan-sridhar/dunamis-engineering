import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ShieldCheck, Award, Truck, HardHat, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function DunamisPillars() {
  const pillars = [
    {
      icon: HardHat,
      title: "Direct Technical Leadership",
      description:
        "Every project is actively guided on-site by experienced engineering directors and certified project managers.",
    },
    {
      icon: Award,
      title: "Certified Craftsmen & Machinists",
      description:
        "Skilled structural welders, lathe operators, precision machinists, and heavy crane riggers trained to IS & AWS standards.",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Compromise Safety Culture",
      description:
        "Mandatory PPE, daily toolbox briefings, certified lifting tackle, and strict adherence to industrial safety norms.",
    },
    {
      icon: Truck,
      title: "Rapid Field Mobilization",
      description:
        "Strategically located in Sriperumbudur's prime corridor for rapid deployment of erection squads across Tamil Nadu.",
    },
  ];

  return (
    <section id="pillars-section" className="py-14 sm:py-20 bg-[#F4F6FA] border-y border-slate-200 tech-grid-bg relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <SectionHeading
          tag="OUR GREATEST STRENGTH"
          title="MEET THE DUNAMIS PILLARS"
          description="Behind every heavy structural frame, high-tonnage PEB shed, and turnkey mechanical assembly stands our dedicated workforce of engineers, fabricators, and supervisors."
          align="center"
        />

        {/* Featured Photographic Showcase */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl group flex flex-col md:block">
          {/* Main Photo Container - wide landscape aspect ratio to show the entire 15+ team members without cropping */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9] max-h-[620px] bg-slate-100">
            <Image
              src="/images/about/dunamis-pillars.jpg"
              alt="The Dunamis Pillars - Dedicated Workforce and Leadership at Kiloy Village Works"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Subtle Vignette for Badge Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 opacity-75 group-hover:opacity-65 transition-opacity" />

            {/* Top Left Tag: Facility Location */}
            <div className="absolute top-2.5 sm:top-5 left-2.5 sm:left-5 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 bg-white/95 border border-slate-200 rounded-lg backdrop-blur-md shadow-md max-w-[85%] truncate">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-900 uppercase tracking-wider truncate">
                Kiloy Village Fabrication Facility
              </span>
            </div>

            {/* Top Right Tag: Corporate Identity */}
            <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border border-slate-700 text-white rounded-lg backdrop-blur-md text-xs font-mono shadow-md">
              <span className="text-brand-accent font-bold">DEC</span>
              <span className="text-slate-300">Certified Workforce</span>
            </div>
          </div>

          {/* Bottom Info Banner - clean integration below photo on mobile (<md), floating overlay on desktop (md:) */}
          <div className="p-4 sm:p-6 bg-white border-t border-slate-200 md:border-t-0 md:absolute md:bottom-6 md:left-6 md:right-6 md:z-10 md:bg-white/95 md:border md:border-slate-200 md:rounded-2xl md:shadow-xl md:backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                    THE DRIVING FORCE BEHIND DUNAMIS
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#0B1A30] font-sans uppercase tracking-tight">
                  Committed Craftsmen, Riggers, Machinists &amp; Site Engineers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans">
                  Stationed at No.146/1B, Kiloy Village, Sriperumbudur Taluk, Kanchipuram District — executing turnkey industrial solutions.
                </p>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 pt-1 md:pt-0">
                <Link
                  href="/about"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-900 hover:bg-brand-accent text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm text-center"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/careers"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md text-center"
                >
                  <span>Join Our Crew</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-accent/60 transition-all space-y-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-[#0B1A30] uppercase font-sans tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
