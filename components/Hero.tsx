import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] 2xl:min-h-[780px] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-900">
      {/* Background Image - Full-width 1983x793 Industrial Hero Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero/hero-peb.jpg"
          alt="Dunamis Engineering PEB Industrial Structure"
          fill
          priority
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover object-[70%_center] sm:object-[78%_center] lg:object-right xl:object-[right_center]"
        />

        {/* Desktop: Subtle readability gradient localized exclusively on the LEFT side */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent w-3/5 lg:w-[48%] pointer-events-none" />

        {/* Mobile: Gentle top/bottom gradient to ensure content legibility without dimming the building */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white/30 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6 bg-white/60 sm:bg-transparent backdrop-blur-[1px] sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border border-white/50 sm:border-0">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/95 border border-slate-200/80 rounded-full font-mono text-xs shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-slate-900">
              DUNAMIS ENGINEERING
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium hidden xs:inline">TAMIL NADU, INDIA</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight uppercase font-sans leading-[1.02] text-[#0C1E36] drop-shadow-sm break-words">
              ENGINEERING <br />
              WHAT&apos;S <span className="text-brand-accent">NEXT.</span>
            </h1>

            {/* Subheading with signature Dunamis Crimson red vertical bar */}
            <div className="border-l-4 border-brand-accent pl-4 py-0.5">
              <p className="text-lg sm:text-xl lg:text-2xl text-[#0C1E36] font-bold tracking-tight leading-snug">
                Industrial Fabrication. <br className="hidden sm:inline" />
                Construction &amp; Turnkey Engineering Solutions.
              </p>
            </div>
          </div>

          {/* Subtext description */}
          <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed font-normal">
            Delivering high-precision PEB structures, 70,000+ sq.ft. heavy fabrication capacity,
            process piping, and industrial turnkeys across South India. Built for precision. Engineered for performance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 shadow-md shadow-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/40 group text-center"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-white/95 hover:bg-white text-[#0C1E36] border-2 border-[#0C1E36] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-200 shadow-sm hover:shadow-md group text-center"
            >
              <span>View Verified Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
