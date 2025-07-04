import ContactInfo from '../components/ContactInfo';
import ClientContainer from '../components/ClientContainer';
import { ThemeToggle } from '../components/ThemeToggle';

export const metadata = {
  title: `Unlock Your Brand's Potential: Web Design, Digital Marketing, Graphic Design, Branding & Merchandising, SEO & Print Services - Hurricane Teck & Marketing Solutions, Nairobi, Kenya`,
  description: `Hurricane Teck & Marketing Solutions, Nairobi's trusted partner since Oct 2022, helps businesses thrive. We offer digital marketing consulting, marketing strategies, and branding solutions including printing services (roll-up/teardrop banners, backdrops, business cards, flyers, branded merchandise). We specialize in web design, social media marketing, SEO (Search Engine Optimization), and graphic design for both digital and print needs. Unlock your brand's potential with us!`,
  alternates: {
    canonical: 'https://www.hurricaneteck.co.ke'
  },
  icons: {
    icon: '/h.png',
    shortcut: '/h.png',
    apple: '/h.png',
  }
};

export function generateJsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Hurricane Teck",
      "alternateName": ["Hurricane Teck", "HurricaneTeck"],
      "url": process.env.NEXT_PUBLIC_APP_URL,
      "description": 'At Hurricane Teck, we specialize in creating custom websites, developing native mobile apps, and providing innovative SaaS products. As a leading web design and online marketing agency in Nairobi, Kenya, we help businesses grow with responsive web solutions, effective digital marketing strategies, and powerful software tools designed to enhance performance and drive success. Partner with us to elevate your online presence and achieve your business goals.'
    })
  };
}

export default function Home() {
  return (
    <div className="flex flex-col p-0 relative">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <ClientContainer/>
      <ContactInfo/>
    </div>
  );
}
