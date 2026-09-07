"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData, galleryCategories, GalleryCategory } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
  };

  return (
    <div className="pt-24 pb-20 space-y-20 bg-pearl text-slate-900">
      {/* Page Header */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-brand-accent" />
              <span>FIELD EXECUTION ARCHIVE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight leading-[1.08]">
              <span className="text-[#0B1A30]">PROJECT &amp; SITE</span> <br />
              <span className="text-brand-accent">GALLERY.</span>
            </h1>
            <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              Inspect authentic on-site imagery from our fabrication yards, crane erection maneuvers, heavy structural frames, and turnkey facility completions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section with Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-brand-accent text-white shadow-md"
                  : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer transition-all duration-300 hover:border-brand-accent hover:shadow-xl hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Vignette for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 bg-white/95 border border-slate-200 rounded-md font-mono text-[10px] font-bold text-slate-800 uppercase tracking-wider backdrop-blur-md shadow-sm">
                  {item.category}
                </span>

                <div className="w-7 h-7 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-700 backdrop-blur-md group-hover:bg-brand-accent group-hover:text-white transition-colors shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Info Content */}
              <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1">
                <h3 className="text-sm font-bold text-white font-sans uppercase tracking-tight group-hover:text-brand-accent transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-mono line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightweight Zero-Dependency Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* CTA */}
      <CTA />
    </div>
  );
}
