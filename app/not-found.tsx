import React from "react";
import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 bg-pearl tech-grid-bg">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-slate-200/90 p-8 sm:p-10 rounded-2xl shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mx-auto shadow-sm">
          <HardHat className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest">
            ERROR 404 // SITE COORDINATE NOT FOUND
          </span>
          <h1 className="text-3xl font-black uppercase text-[#0B1A30] font-sans">
            Page Under Construction
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The requested engineering page or specification does not exist or has been relocated within our directory.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold uppercase text-xs tracking-wider rounded-xl transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Dunamis Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
