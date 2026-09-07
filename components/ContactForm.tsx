"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Copy, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: servicesData[0]?.title || "PEB Fabrication & Erection",
    location: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare mailto link
    const subject = encodeURIComponent(
      `[Dunamis RFQ] Inquiry from ${formData.name} - ${formData.company || "Project Inquiry"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company || "N/A"}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location || "N/A"}\n\nProject Requirements / Scope:\n${formData.message}\n`
    );

    // Open user's email client
    window.location.href = `mailto:${companyData.contact.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const copyInquiry = () => {
    const text = `Inquiry to Dunamis Engineering:\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location}\nDetails:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-white border border-slate-200 p-4 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl relative">
      <div className="mb-5 sm:mb-6">
        <h3 className="text-lg sm:text-2xl font-black text-[#0B1A30] font-sans uppercase tracking-tight">
          Request an Engineering Proposal
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Submit your project specifications. Our structural estimators will respond promptly with a technical review.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto text-brand-accent">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 uppercase">Inquiry Prepared!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your email client has been opened with your inquiry details addressed to{" "}
            <span className="text-brand-accent font-mono font-bold">{companyData.contact.email}</span>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={copyInquiry}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-mono transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? "Copied to Clipboard!" : "Copy Inquiry Text"}</span>
            </button>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent text-white rounded-lg text-xs font-bold uppercase transition-colors shadow-sm"
            >
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Larsen & Toubro / Tier-1 Vendor"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
                Phone / Mobile *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
                Capability / Service Needed
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 transition-colors"
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="General Engineering & Fabrication">
                  General Engineering &amp; Fabrication
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
                Project Site Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Sriperumbudur, Oragadam, Chennai"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-700 font-semibold mb-1.5">
              Project Details &amp; Technical Scope *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe built-up area (sq.ft.), structural specifications, height clearances, or specific fabrication requirements..."
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-brand-accent/25 group"
          >
            <span>Dispatch Inquiry to Dunamis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  );
}
