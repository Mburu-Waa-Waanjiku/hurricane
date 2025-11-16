import { FaWhatsapp } from "react-icons/fa";
import VirtualTourHomepage from "../../../components/virtualtours/VirtualTourHomepage";

export const metadata = {
  title: "Virtual Tours for Real Estate & Businesses | Hurricane Teck Kenya",
  description:
    "Hurricane Teck offers immersive 360° Virtual Tours for real estate, apartments, land, and businesses in Kenya and abroad. Showcase your property online like never before.",
  keywords: [
    "Virtual Tours Kenya",
    "360 Virtual Tours",
    "Real Estate Marketing",
    "Virtual Tour Company Kenya",
    "Land Sales Kenya",
    "Apartment Virtual Tour",
    "Property Showcasing",
    "Hurricane Teck",
    "Virtual Tours Ruiru",
  ],
  openGraph: {
    title: "Virtual Tours for Real Estate & Businesses | Hurricane Teck Kenya",
    description:
      "Experience stunning 360° virtual tours by Hurricane Teck — your trusted digital partner for real estate and business visualization.",
    url: "https://hurricaneteck.co.ke",
    siteName: "Hurricane Teck",
    images: [
      {
        url: "https://hurricaneteck.co.ke/h.png",
        width: 1200,
        height: 630,
        alt: "Virtual Tours by Hurricane Teck",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  alternates: {
    canonical: "https://hurricaneteck.co.ke",
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hurricane Teck",
    image: "https://hurricaneteck.co.ke/h.png",
    "@id": "https://hurricaneteck.co.ke",
    url: "https://hurricaneteck.co.ke",
    telephone: "+254704065652",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruiru",
      addressLocality: "Kiambu County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.1495,
      longitude: 36.9583,
    },
    sameAs: [
      "https://www.instagram.com/hurricaneteck",
      "https://www.facebook.com/hurricaneteck",
      "https://wa.me/254704065652",
    ],
    description:
      "Hurricane Teck provides professional 360° virtual tour services in Kenya, ideal for real estate, property developers, and businesses seeking immersive visual experiences.",
    serviceType: "Virtual Tours, Real Estate Virtual Tours, 360 Photography",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VirtualTourHomepage />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254704065652"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 border-[2px] border-green-600 right-6 bg-white/20 hover:bg-white/30 text-green-600 rounded-full shadow-lg flex items-center justify-center w-14 h-14 z-50 transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl"/>
      </a>
    </div>
  );
}
