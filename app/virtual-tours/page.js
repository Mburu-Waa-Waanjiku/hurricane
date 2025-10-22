import VirtualTourHomepage from "../../components/virtualtours/VirtualTourHomepage";

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
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 z-50 transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-7 h-7 fill-current"
        >
          <path d="M380.9 97.1C339-1.3 206.3-31.7 119.4 55.1c-52.8 52.8-68.1 128.3-44 196.2L64 384l134.7-35.3c65.3 34.7 144.8 23.4 197.6-29.4 86.9-86.9 56.4-219.6-15.4-222.2zM224 400c-22.9 0-45.4-5.1-66-14.8l-7.9-3.7-79.7 20.9 21.4-77.6-3.7-7.9C75.1 285.4 70 262.9 70 240c0-84.1 68.9-153 153-153 40.9 0 79.4 15.9 108.3 44.7C360.1 160.6 376 199.1 376 240c0 84.1-68.9 153-152 153z" />
        </svg>
      </a>
    </div>
  );
}
