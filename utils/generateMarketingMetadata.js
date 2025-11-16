// utils/generateMarketingMetadata.js
import { Metadata } from 'next'

export function generateMarketingMetadata(product, companyName = 'Your Company Name', baseUrl = 'https://yourwebsite.com') {
  return {
    title: `${product.title} | ${companyName}`,
    description: product.hero.subheadline,
    keywords: [
      product.title.toLowerCase(),
      'marketing services Kenya',
      'business growth',
      'East Africa marketing',
      'Nairobi marketing agency',
      ...product.features.slice(0, 5)
    ].join(', '),
    openGraph: {
      title: product.hero.headline,
      description: product.hero.subheadline,
      images: [
        {
          url: product.image,
          width: 800,
          height: 500,
          alt: `${product.title} - ${product.hero.headline}`,
        }
      ],
      type: 'website',
      url: `${baseUrl}${product.url}`,
      locale: 'en_KE',
      siteName: companyName,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.hero.headline,
      description: product.hero.subheadline,
      images: [product.image],
      creator: '@yourhandle', // Add your Twitter handle
    },
    alternates: {
      canonical: `${baseUrl}${product.url}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Additional metadata
    authors: [{ name: companyName }],
    category: 'Marketing Services',
    // Structured data for rich results
    other: {
      'og:phone_number': '+254-XXX-XXXXXX', // Add your phone
      'og:email': 'info@yourcompany.com', // Add your email
      'og:locality': 'Nairobi',
      'og:region': 'KE',
      'og:country-name': 'Kenya',
    }
  }
}

// Example usage in a page:
// export async function generateMetadata() {
//   return generateMarketingMetadata(marketingProducts[0])
// }