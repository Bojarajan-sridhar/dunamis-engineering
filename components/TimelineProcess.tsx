import React from "react";
import {
  MessageSquare,
  Compass,
  Hammer,
  HardHat,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "CONSULTATION",
    subtitle: "Requirement & Site Survey",
    description:
      "Detailed structural appraisal, site feasibility studies, budgetary estimations, and engineering scope definition.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "ENGINEERING & PLANNING",
    subtitle: "3D CAD & Isometrics",
    description:
      "Architectural planning, structural calculation analysis, connection detailing, and fabrication shop drawings.",
    icon: Compass,
  },
  {
    number: "03",
    title: "FABRICATION",
    subtitle: "Covered Shop & Heavy Yard",
    description:
      "Precision metal cutting, submerged arc welding, plate assembly, and non-destructive testing at our Kiloy yard.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "EXECUTION",
    subtitle: "On-Site Erection",
    description:
      "Tandem crane lift maneuvers, bolt torque verification, laser-guided plumb alignment, and envelope fixing.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "QUALITY & SAFETY",
    subtitle: "Strict QA/QC Protocols",
    description:
      "Continuous weld inspection, ultrasonic checks, hydrostatic pressure testing, and Zero-Harm safety adherence.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "DELIVERY",
    subtitle: "Turnkey Handover",
    description:
      "As-built documentation, structural integrity warranties, statutory clearance liaison, and client handover.",
    icon: CheckCircle2,
  },
];

export default function TimelineProcess() {
  return (
    <div className="relative">
      {/* Desktop Horizontal Connecting Line */}
      <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-slate-200 z-0" />

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 relative z-10">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative flex flex-col bg-white border border-slate-200 p-6 rounded-xl transition-all duration-300 hover:border-brand-accent hover:shadow-xl hover:-translate-y-1 shadow-sm"
            >
              {/* Step Number & Icon Header */}
              <div className="flex items-center justify-between lg:flex-col lg:items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-brand-accent group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-slate-700 group-hover:text-brand-accent group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                  STEP {step.number}
                </span>
              </div>

              {/* Step Details */}
              <div className="space-y-2 mt-2">
                <h3 className="text-base font-black text-[#0B1A30] uppercase font-sans tracking-tight group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 font-semibold">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>

              {/* Subtle Step Bottom Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>PHASE 0{idx + 1}</span>
                <span className="text-slate-300 group-hover:text-brand-accent transition-colors">
                  ▶
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
