import ContactToptoren from '../../../components/ContactToptoren';
import ToptorenBrandedWaterPage from '../../../components/Toptoren';
import ClientContainer from '../../../components/ClientContainer';
import { ThemeToggle } from '../../../components/ThemeToggle';
import Image from 'next/image';

export const metadata = {
  title: 'Toptoren Consultancy: Your Partner for Branded Bottled Water (Corporate, Events, Weddings, Hotels & More) + KRA Returns, Licensing & Business Advisory in Kenya',
  description: `Toptoren Consultancy specializes in crafting bespoke branded bottled water for every occasion – from corporate functions and grand weddings to respectful funerals, vibrant clubs, discerning hotels, and adventurous tour companies. We don't just supply water; we build your brand. Additionally, we provide critical business services such as KRA returns filing, water business licensing, water label supply, EGMS management, water security bond processing, SKU/barcode & brand/product submission, tax planning, and excise license application, ensuring your operations are compliant and efficient.`,
  icons: {
    icon: '/Toptoren.png',
    shortcut: '/Toptoren.png',
    apple: '/Toptoren.png',
  }
};

export function generateJsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Toptoren Consultancy: Your Partner for Branded Bottled Water (Corporate, Events, Weddings, Hotels & More) + KRA Returns, Licensing & Business Advisory in Kenya",
      "alternateName": [`Toptoren Consultancy `],
      "url": process.env.NEXT_PUBLIC_APP_URL,
      "description": `Toptoren Consultancy specializes in crafting bespoke branded bottled water for every occasion – from corporate functions and grand weddings to respectful funerals, vibrant clubs, discerning hotels, and adventurous tour companies. We don't just supply water; we build your brand. Additionally, we provide critical business services such as KRA returns filing, water business licensing, water label supply, EGMS management, water security bond processing, SKU/barcode & brand/product submission, tax planning, and excise license application, ensuring your operations are compliant and efficient.`
    })
  };
}

export default function Home() {
  return (
    <div className="flex flex-col p-0 relative">
      <ToptorenBrandedWaterPage/>
      <ContactToptoren/>
    </div>
  );
}