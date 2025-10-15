import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Blogscomponent from "../../../components/blogs/Blogscompnent"

// Page Metadata (Next.js 15)
export const metadata = {
  title: "Top 3 Web Developers in Ruiru Town | Find Local Web Design Experts",
  description:
    "Discover the 3 best web developers in Ruiru Town. Compare services, prices, and portfolios to find the ideal web designer or developer near you in Ruiru, Kiambu County.",
  keywords: [
    "web developers in Ruiru",
    "Ruiru web design",
    "Ruiru website developer",
    "web design company Ruiru",
    "Ruiru Town Kiambu County web developers",
  ],
  openGraph: {
    title: "Top 3 Web Developers in Ruiru Town | Ruiru Web Design Experts",
    description:
      "A complete guide to finding trusted web developers in Ruiru, Kenya. Includes top local firms, pricing tips, and SEO advice.",
    url: "https://hurricaneteck.co.ke/blogs/top-3-best-website-developer-companies-in-ruiru-2025",
    type: "article",
    siteName: "Hurricane Teck",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://hurricaneteck.co.ke/blogs/top-3-best-website-developer-companies-in-ruiru-2025",
  },
};

const developers = [
  {
    name: "Hurricane Teck",
    summary:
      "Custom web development, digital marketing agency and branding services.",
    strengths: "Best at designing beautyful websites and smooth animations; More business focused with Web design as a service to businesses as part of digital marketing and branding services.",
    website: "https://www.modotech.co.ke",
    location: "Ruiru Town, Kiambu County",
  },
  {
    name: "Zurihub Technology",
    summary:
      "Web design & development; software & custom systems (ERP, CRM, POS).",
    strengths:
      "Strong portfolio; Ruiru-based; good for businesses needing custom systems.",
    website: "https://www.zurihub.co.ke",
    location: "Kamakis, Ruiru Town, Kiambu County",
  },
  {
    name: "Techkraze Interactive",
    summary:
      "Web design & development, SEO optimization, hosting & maintenance; mobile apps too.",
    strengths:
      "All-round package: SEO + site + support; located in Ruiru (Sunrise Estate).",
    website: "https://www.businesslist.co.ke/company/147452/techkraze-interactive",
    location: "Sunrise Estate, Ruiru Town, Kiambu County",
  },
];

export default function RuiruWebDevelopersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Web Developers in Ruiru Town",
    itemListElement: developers.map((dev, i) => ({
      "@type": "LocalBusiness",
      position: i + 1,
      name: dev.name,
      description: dev.summary,
      url: dev.website,
      address: {
        "@type": "PostalAddress",
        streetAddress: dev.location,
        addressLocality: "Ruiru",
        addressRegion: "Kiambu County",
        addressCountry: "KE",
      },
    })),
  };

  return (
    <main>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Blogscomponent/>
    </main>
  );
}