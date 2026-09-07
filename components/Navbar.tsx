"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0C1E36]/95 backdrop-blur-md border-b border-[#162D4A] shadow-lg py-2.5"
          : "bg-[#0C1E36]/90 backdrop-blur-sm border-b border-[#162D4A]/60 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Premium White Insignia Badge on Executive Navy */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all hover:shadow-md hover:scale-[1.01]"
            aria-label="Dunamis Engineering - Return to Homepage"
          >
            <Image
              src="/images/logo.png"
              alt="Dunamis Engineering and Construction Pvt Ltd"
              width={220}
              height={42}
              className="h-7 sm:h-8.5 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm tracking-wide transition-all rounded-md ${
                    isActive
                      ? "text-white font-bold bg-white/15 border-b-2 border-brand-accent shadow-sm"
                      : "text-slate-200 hover:text-white hover:bg-white/10 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm tracking-wide rounded-md uppercase transition-all duration-200 shadow-md shadow-brand-accent/25 hover:shadow-lg hover:shadow-brand-accent/30 group"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Controls: Quote Button & Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-xs font-bold uppercase bg-brand-accent text-white rounded tracking-wider shadow-sm transition-transform active:scale-95"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 w-full bg-[#0C1E36] border-b border-[#162D4A] shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 visible max-h-[420px] pointer-events-auto"
            : "opacity-0 invisible max-h-0 pointer-events-none overflow-hidden"
        }`}
      >
        <nav className="flex flex-col py-2 px-4 sm:px-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-2 text-base tracking-wide transition-colors border-b border-white/5 last:border-b-0 bg-transparent ${
                  isActive
                    ? "text-brand-accent font-bold"
                    : "text-slate-200 hover:text-brand-accent font-medium"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
