import React from 'react';
import StreetViewTour from '../../../components/virtualtours/StreetViewTour';
import ProjectInfo from '../../../components/virtualtours/ProjectInfo';

// This would typically come from a database or CMS
const tourData = {
  slug: 'shamba-tour',
  projectName: 'Baraka Garden Sagana Phase 1',
  projectDescription: 'Experience our beautiful 3-acre shamba in Sagana that is righh next to tarmac and waiting fory to  invest in.',
  company: {
    name: 'Winsper lands Investments',
    logo: 'https://winsperinvestments.co.ke/Winsper-Lands-Investments-Limited-logo.png',
    website: 'https://winsperinvestments.co.ke'
  },
  location: {
    address: 'Mombasa County, Kenya',
    coordinates: { lat: -4.0435, lng: 39.6682 }
  },
  tour: {
    totalScenes: 7,
    featured: true,
    createdAt: '2025-10-15'
  },
  scenes: {
    scene0: {
      title: "Tour our Shamba",
      //image: "https://i.imgur.com/6ixGNNW.jpeg",
      image: "/tours/Untitled.png",
      links: [
        { to: "scene1", yaw: 1.09, pitch: 0.06 },
        { to: "scene2", yaw: 1.4, pitch: 0.075 },
        { to: "scene3", yaw: 1.6, pitch: 0.075 },
        { to: "scene4", yaw: 3.05, pitch: 0.05 },
        { to: "scene5", yaw: 2.5, pitch: 0.1 },
        { to: "scene6", yaw: 2.93, pitch: 0.1 },
      ],
    },
    scene1: {
      title: "Scene 1",
      image: "https://i.imgur.com/IxapB9r.jpeg",
      links: [
        { to: "scene0", yaw: 2.6, pitch: 0.05 },
        { to: "scene2", yaw: 0.19, pitch: 0.05 },
      ],
    },
    scene2: {
      title: "Scene 2",
      image: "https://i.imgur.com/suiH4Ig.jpeg",
      links: [
        { to: "scene0", yaw: 3, pitch: 0.075 },
        { to: "scene5", yaw: 2, pitch: 0.08 },
        { to: "scene6", yaw: 2.385, pitch: 0.08 },
      ],
    },
    scene3: {
      title: "Scene 3",
      image: "https://i.imgur.com/bo8DpCJ.jpeg",
      links: [
        { to: "scene0", yaw: 1.6, pitch: 0.12 },
        { to: "scene5", yaw: 0.5, pitch: 0.14 },
        { to: "scene6", yaw: 0.8, pitch: 0.145 },
        { to: "scene4", yaw: 1.1, pitch: 0.12 },
        { to: "scene1", yaw: 1.93, pitch: 0.1 },
        { to: "scene2", yaw: 2.35, pitch: 0.05 },
      ],
    },
    scene4: {
      title: "Road Side View",
      image: "https://i.imgur.com/91PfcYD.jpeg",
      links: [
        { to: "scene6", yaw: -1.5, pitch: 0.02 },
        { to: "scene0", yaw: 1.07, pitch: 0.019 },
        { to: "scene1", yaw: 1.777, pitch: 0.0285 },
        { to: "scene2", yaw: 2.24, pitch: 0.05 },
        { to: "scene3", yaw: 2.5, pitch: 0.06 },
        { to: "scene5", yaw: 3.5, pitch: 0.038 },
      ],
    },
    scene5: {
      title: "Tarmak View 1",
      image: "https://i.imgur.com/6lIA3SA.jpeg",
      links: [
        { to: "scene3", yaw: 2, pitch: 0.045 },
        { to: "scene6", yaw: 0.05, pitch: 0.05 },
        { to: "scene4", yaw: 0.5, pitch: 0.05 },
      ],
    },
    scene6: {
      title: "Tarmak View 2",
      image: "https://i.imgur.com/4Fhx66r.jpeg",
      links: [
        { to: "scene4", yaw: 0.61, pitch: -0.04 },
        { to: "scene5", yaw: 3.145, pitch: 0 },
        { to: "scene0", yaw: 0.91, pitch: 0.01 },
        { to: "scene1", yaw: 1.615, pitch: 0.03 },
        { to: "scene2", yaw: 2.1, pitch: 0.029 },
        { to: "scene3", yaw: 2.335, pitch: 0.027 },
      ],
    },
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  // In production, fetch tourData based on params.slug
  return {
    title: `${tourData.projectName} - Virtual Tour | ${tourData.company.name}`,
    description: tourData.projectDescription,
    keywords: ['virtual tour', 'agricultural land', 'shamba', 'Kenya', tourData.company.name],
    openGraph: {
      title: `${tourData.projectName} - Virtual Tour`,
      description: tourData.projectDescription,
      images: ['/tours/scene1.jpg'],
      type: 'website',
      locale: 'en_KE',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tourData.projectName} - Virtual Tour`,
      description: tourData.projectDescription,
      images: ['/tours/scene1.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TourPage() {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VirtualLocation',
    name: tourData.projectName,
    description: tourData.projectDescription,
    provider: {
      '@type': 'Organization',
      name: tourData.company.name,
      logo: tourData.company.logo,
      url: tourData.company.website,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mombasa',
      addressRegion: 'Mombasa County',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: tourData.location.coordinates.lat,
      longitude: tourData.location.coordinates.lng,
    },
    image: '/tours/scene1.jpg',
    datePublished: tourData.tour.createdAt,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main Tour Container */}
      <div className="relative w-full h-screen">
        {/* Project Info Overlay */}
        <ProjectInfo
          projectName={tourData.projectName}
          projectDescription={tourData.projectDescription}
          companyName={tourData.company.name}
          companyLogo={tourData.company.logo}
        />

        {/* Virtual Tour Component */}
        <StreetViewTour scenes={tourData.scenes} />
      </div>
    </>
  );
}