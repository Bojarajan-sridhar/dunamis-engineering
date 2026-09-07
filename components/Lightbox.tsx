"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image Viewer"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-brand-accent px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-md">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 hidden sm:inline">
            {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentItem.fullSrc || currentItem.src}
          alt={currentItem.title}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-brand-accent hover:border-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-brand-accent hover:border-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 text-center max-w-2xl mx-auto px-5 py-3 bg-slate-900/90 border border-slate-700 rounded-xl backdrop-blur-md shadow-2xl">
        <h3 className="text-sm sm:text-base font-bold text-white font-sans uppercase tracking-wide">
          {currentItem.title}
        </h3>
        <p className="text-xs text-slate-400 font-mono mt-0.5">
          {currentItem.subtitle} {currentItem.dimensions && `• ${currentItem.dimensions}`}
        </p>
      </div>

      {/* Backdrop Click */}
      <div className="absolute inset-0 z-0" onClick={onClose} />
    </div>
  );
}
