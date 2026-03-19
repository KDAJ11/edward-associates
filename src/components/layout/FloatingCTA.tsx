"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function FloatingCTA() {
  const pathname = usePathname();

  // Hide on contact page
  if (pathname === "/contact") return null;

  return (
    <div className="floating-cta fixed bottom-4 right-4 z-40 md:hidden">
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        className="inline-flex items-center gap-2 bg-brand-gold-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-brand-gold-500 transition-all duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2"
        aria-label="Book consultation — call Edward and Associates"
      >
        <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
        Book Consultation
      </a>
    </div>
  );
}
