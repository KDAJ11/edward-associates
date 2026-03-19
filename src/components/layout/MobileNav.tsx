"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Focus trap and escape key
  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-nav fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-nav fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 rounded-sm"
          >
            <X className="w-6 h-6 text-slate-800" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <nav className="px-4 pb-8" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      className="w-full flex items-center justify-between py-3 px-3 text-left font-body font-medium text-slate-700 hover:text-brand-green-800 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-md"
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
                      <ul className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block py-2 px-3 text-sm font-body rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 ${
                                pathname === child.href
                                  ? "text-brand-gold-600 bg-brand-gold-50"
                                  : "text-slate-600 hover:text-brand-green-800 hover:bg-slate-50"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block py-3 px-3 font-body font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 ${
                      pathname === link.href
                        ? "text-brand-gold-600 bg-brand-gold-50"
                        : "text-slate-700 hover:text-brand-green-800 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 space-y-4 px-3">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-green-800 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-sm"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <Button href="/contact" size="md" className="w-full">
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
