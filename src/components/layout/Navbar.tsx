"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-200 ${
          scrolled ? "shadow-md border-slate-200" : "border-slate-200"
        }`}
      >
        <div className="max-w-content mx-auto px-4 md:px-6 flex items-center justify-between h-[72px]">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-bold text-brand-green-800 tracking-[-0.02em] focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
          >
            Edward &amp; Associates
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center gap-1 font-body text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm px-1 py-2 ${
                        pathname.startsWith("/services")
                          ? "text-brand-gold-600"
                          : "text-slate-600 hover:text-brand-green-800"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm font-body transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-inset ${
                              pathname === child.href
                                ? "text-brand-gold-600 bg-brand-gold-50"
                                : "text-slate-600 hover:text-brand-green-800 hover:bg-slate-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm px-1 py-2 ${
                    pathname === link.href
                      ? "text-brand-gold-600"
                      : "text-slate-600 hover:text-brand-green-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <Button href="/contact" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg
              className="w-6 h-6 text-slate-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
