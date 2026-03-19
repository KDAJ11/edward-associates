import { Metadata } from "next";
import { BUSINESS } from "./constants";

const SITE_URL = BUSINESS.url;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Edward & Associates | Toronto Tax & Accounting Services",
    template: "%s | Edward & Associates",
  },
  description:
    "Expert personal and corporate tax preparation in Toronto. 15+ years experience, 1000+ clients, 4.9★ Google rating. Located at 398 Bloor Street West.",
  verification: {
    google: process.env.GSC_VERIFICATION || undefined,
  },
};
