import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ShieldCheck, Factory, Ruler } from "lucide-react";
import { companyData } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14 overflow-hidden bg-slate-900">
      {/* Background Image - The Authentic Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/slider-1.jpg"
          alt="Dunamis Engineering Industrial Site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-105 brightness-100"
        />
        {/* Subtle, natural vignette localized behind text area - NO heavy blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent sm:w-4/5 lg:w-3/5" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center py-6 sm:py-10 lg:py-12">
        <div className="max-w-3xl space-y-5 sm:space-y-7">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 bg-black/40 border border-white/25 rounded-full font-mono text-[11px] sm:text-xs text-white shadow-lg backdrop-blur-md">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-bold tracking-widest uppercase text-white">
              DUNAMIS ENGINEERING
            </span>
            <span className="text-white/50">|</span>
            <span className="text-slate-200 hidden sm:inline font-medium">TAMIL NADU, INDIA</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase font-sans leading-[1.02] sm:leading-[0.95] drop-shadow-lg break-words">
              ENGINEERING <br />
              <span className="text-white">
                WHAT&apos;S NEXT.
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium tracking-wide pt-2 sm:pt-3 border-l-4 border-brand-accent pl-3.5 sm:pl-4 drop-shadow-md">
              Industrial Fabrication. <br className="hidden sm:inline" />
              Construction &amp; Turnkey Engineering Solutions.
            </p>
          </div>

          {/* Subtext description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-xl leading-relaxed drop-shadow">
            Delivering high-precision PEB structures, 70,000+ sq.ft. heavy fabrication capacity,
            process piping, and industrial turnkeys across South India. Built for precision. Engineered for performance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 shadow-xl shadow-brand-accent/40 hover:shadow-brand-accent/60 group"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-black/40 hover:bg-black/60 text-white border border-white/30 hover:border-white/60 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 backdrop-blur-md shadow-md"
            >
              <span>View Verified Projects</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar / Factual Metrics - Pure White Elevated Floating Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3.5 sm:p-6 bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 shadow-sm">
              <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-black text-slate-900 font-mono">
                70,000+
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-sans tracking-wide font-medium block leading-tight mt-0.5">
                Sq. Ft. Heavy Open Yard
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 shadow-sm">
              <Ruler className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-black text-slate-900 font-mono">
                5,000+
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-sans tracking-wide font-medium block leading-tight mt-0.5">
                Sq. Ft. Covered Shop
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-black text-slate-900 font-mono">
                75+
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-sans tracking-wide font-medium block leading-tight mt-0.5">
                Completed Projects
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 font-bold shadow-sm">
              ✓
            </div>
            <div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-black text-slate-900 font-mono">
                100%
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-sans tracking-wide font-medium block leading-tight mt-0.5">
                Safety &amp; QA Compliance
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#about-section"
            className="flex flex-col items-center text-slate-300 hover:text-white transition-colors font-mono text-[11px] uppercase tracking-widest"
            aria-label="Scroll down to About Section"
          >
            <span>Explore Dunamis</span>
            <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-brand-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
