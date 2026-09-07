import React from "react";
import {
  Users,
  Clock,
  Building2,
  ShieldCheck,
  Target,
  Lightbulb,
} from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Specialized & Licensed Experts",
    description:
      "Our skilled engineers and certified fabrication specialists ensure total compliance with Indian and international industrial standards and statutory safety regulations.",
  },
  {
    icon: Clock,
    title: "24/7 Service Support",
    description:
      "We are available round the clock to meet urgent maintenance, critical shutdown activities, and fast-track industrial project deadlines.",
  },
  {
    icon: Building2,
    title: "Proven Industry Experience",
    description:
      "Extensive technical capability executed across automotive plants, chemical process facilities, commercial buildings, and infrastructure projects.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Assurance",
    description:
      "Strict quality control processes, ultrasonic weld testing, dimension checks, and material certifications at every stage of execution.",
  },
  {
    icon: Target,
    title: "Customer-Centric Approach",
    description:
      "Our solutions are not just about structural steel — they are about creating meaningful, durable, and cost-efficient industrial assets that empower client growth.",
  },
  {
    icon: Lightbulb,
    title: "Agility and Innovation",
    description:
      "We stay ahead of modern construction methods, adopting advanced PEB software, CNC fabrication techniques, and thermal panel integration.",
  },
];

export default function WhyDunamis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {strengths.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="group relative bg-white border border-slate-200 p-5 sm:p-8 rounded-xl transition-all duration-300 hover:border-brand-accent hover:shadow-xl hover:-translate-y-1 shadow-sm"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-brand-accent mb-4 sm:mb-6 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shadow-sm">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0B1A30] uppercase font-sans tracking-tight mb-3 group-hover:text-brand-accent transition-colors">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>

            {/* Corner accent border */}
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-xl">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-slate-200 group-hover:bg-brand-accent transition-colors" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
