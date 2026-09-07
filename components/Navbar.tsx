"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0C1E36]/95 backdrop-blur-md border-b border-[#162D4A] shadow-lg py-2.5"
          : "bg-[#0C1E36]/90 backdrop-blur-sm border-b border-[#162D4A]/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Premium White Insignia Badge on Executive Navy */}
          <Link
            href="/"
            className="group flex items-center px-3.5 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all hover:shadow-md hover:scale-[1.01]"
            aria-label="Dunamis Engineering - Return to Homepage"
          >
            <Image
              src="/images/logo.png"
              alt="Dunamis Engineering and Construction Pvt Ltd"
              width={220}
              height={42}
              className="h-8 sm:h-8.5 w-auto object-contain"
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

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold uppercase bg-brand-accent text-white rounded tracking-wider mr-1 shadow-sm"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#0C1E36]/98 backdrop-blur-xl border-t border-[#162D4A] flex flex-col justify-between px-6 py-8 overflow-y-auto animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-3">
            <div className="mb-3 pb-3 border-b border-white/10">
              <div className="inline-block px-3 py-1.5 bg-white rounded-lg shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Dunamis Engineering and Construction Pvt Ltd"
                  width={190}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">
              Navigation Menu
            </span>
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg text-base font-semibold tracking-wide border-b border-white/10 transition-colors ${
                    isActive
                      ? "text-white bg-white/15 border-brand-accent"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Contact Quick Actions */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold uppercase tracking-wider rounded-lg text-sm shadow-lg shadow-brand-accent/30"
            >
              <span>Request Engineering Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
              <a
                href={`tel:${companyData.contact.primaryPhone}`}
                className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-brand-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>Call Us</span>
              </a>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-brand-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-accent" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
