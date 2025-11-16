import ShopPage from '../../components/Shop'; // Adjust path as needed

// Metadata for the shop page
export const metadata = {
  title: 'Shop - Branding Materials | Hurricane Teck Kenya',
  description: 'Buy professional branding materials in Kenya. Roll-up banners, teardrop banners, backdrops, business cards, flyers. Quality printing from KES 450. Fast delivery in Nairobi.',
  keywords: [
    'branding materials Kenya',
    'roll up banners Nairobi',
    'teardrop banners Kenya',
    'business cards printing Kenya',
    'backdrops Kenya',
    'flyers printing Nairobi',
    'printing services Kenya',
    'custom branding Kenya',
    'promotional materials Kenya',
    'event banners Nairobi'
  ],
  openGraph: {
    title: 'Shop Branding Materials - Hurricane Teck Kenya',
    description: 'Professional branding materials: Roll-up banners, teardrop banners, backdrops, business cards & more. Quality printing from KES 450.',
    url: 'https://hurricaneteck.co.ke/shop',
    siteName: 'Hurricane Teck',
    type: 'website',
    images: [
      {
        url: '/shop/og-shop-image.jpg', // Create this image: 1200x630px showing your products
        width: 1200,
        height: 630,
        alt: 'Hurricane Teck Branding Materials - Banners, Business Cards, Flyers',
      },
    ],
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Branding Materials - Hurricane Teck Kenya',
    description: 'Professional branding materials: Roll-up banners, teardrop banners, backdrops, business cards & more.',
    images: ['/shop/og-shop-image.jpg'],
    creator: '@hurricaneteck',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://hurricaneteck.co.ke/shop',
  },
  other: {
    'price-range': 'KES 450 - KES 20,000',
    'product-count': '7',
    'product-category': 'Branding Materials',
  },
};

export default function Page() {
  return <ShopPage />;
}