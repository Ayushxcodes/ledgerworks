"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu as MenuIcon,
  X as CloseIcon,
  Calculator,
  FileText,
  Users,
  Info,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function NavbarMain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          className={cn(
            "relative flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300",
            "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800",
            scrolled
              ? "shadow-lg shadow-black/5 dark:shadow-black/20 py-2.5"
              : "shadow-md shadow-black/5"
          )}
        >
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="LedgerWorks Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
              LedgerWorks
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Home Link */}
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/"
                  ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/cloud" || pathname === "/tax"
                    ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-neutral-500",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-black/10">
                    <Link
                      href="/cloud"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:scale-105 transition-transform">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                          Cloud Accounting
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          Real-time GAAP bookkeeping & tech automation
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/tax"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                          Tax Strategy
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          Proactive US federal & state tax planning
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Link */}
            <Link
              href="/solutions"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/solutions"
                  ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
              )}
            >
              Solutions
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/company" || pathname === "/team"
                    ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
                )}
              >
                <span>Company</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-neutral-500",
                    companyOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {companyOpen && (
                <div className="absolute top-full left-0 w-60 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-black/10">
                    <Link
                      href="/company"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:scale-105 transition-transform">
                        <Info className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                          About & FAQs
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          Our mission, values & approach
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/team"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:scale-105 transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                          Leadership & Team
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          Meet our CAs & CPA consultants
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Direct Link */}
            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/contact"
                  ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
              )}
            >
              Contact
            </Link>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            {/* Desktop Monochrome CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 pointer-events-auto">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="py-1">
                <div className="px-3 py-1.5 text-xs font-bold tracking-wider text-neutral-400 uppercase">
                  Services
                </div>
                <Link
                  href="/cloud"
                  className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Calculator className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span>Cloud Accounting</span>
                </Link>
                <Link
                  href="/tax"
                  className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <FileText className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span>Tax Strategy</span>
                </Link>
              </div>

              <Link
                href="/solutions"
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Solutions
              </Link>

              {/* Mobile Company Accordion */}
              <div className="py-1">
                <div className="px-3 py-1.5 text-xs font-bold tracking-wider text-neutral-400 uppercase">
                  Company
                </div>
                <Link
                  href="/company"
                  className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Info className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span>About & FAQs</span>
                </Link>
                <Link
                  href="/team"
                  className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Users className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span>Leadership & Team</span>
                </Link>
              </div>

              <Link
                href="/contact"
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Contact Us
              </Link>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
