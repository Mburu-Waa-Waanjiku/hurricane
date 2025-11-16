// SEO-Optimized Product Data with detailed descriptions and categories

export const products = [
  { 
    id: 'prod_narrow_base',
    name: 'Narrow Base Roll-up Banner', 
    category: 'Roll-up Banners',
    images: [
      '/shop/D7wq20oW0AAnAqA.jpg', 
      '/shop/e423804a28cfa1e38064c5f15e55dbdc.jpg', 
      '/shop/narrow_base_stand_2.png', 
      '/shop/Portable-Roll-Up-Hardware.jpg'
    ],
    priceBase: 5000,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Professional narrow base roll-up banner stand (80x200cm) perfect for trade shows, exhibitions, retail displays, and corporate events in Nairobi and across Kenya. Features easy 30-second setup, lightweight aluminum frame, and includes carrying case. High-quality print on durable weather-resistant material. Ideal for businesses, events, conferences, and marketing campaigns.',
    categorySpecificAttributes: { 
      color: ['Silver', 'Black'], 
      size: ['80x200cm'],
      material: ['Aluminum Frame', 'PVC Banner'],
      weight: '2.5kg'
    },
    inventory: { stock: 10 },
    features: [
      'Easy 30-second setup',
      'Portable with carrying case',
      'High-quality printing',
      'Weather-resistant material',
      'Reusable design'
    ],
    useCases: ['Trade Shows', 'Retail Displays', 'Corporate Events', 'Exhibitions']
  },
  { 
    id: 'prod_wide_base',
    name: 'Wide Base Roll-up Banner', 
    category: 'Roll-up Banners',
    images: [
      '/shop/Deluxe_Roll_Up_Banner_05474513202210.jpg', 
      '/shop/narrow-base-banners-5.jpg', 
      '/shop/Broadbase_rollup_banner.jpg'
    ],
    priceBase: 6500,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Premium wide base roll-up banner stand (85x200cm) with enhanced stability for high-traffic areas. Perfect for retail stores, shopping malls, conferences, and outdoor events in Kenya. Features professional-grade aluminum construction, extra-wide base for stability, and premium printing. Includes padded carrying bag for transport and storage. Trusted by leading Kenyan businesses for professional brand presentation.',
    categorySpecificAttributes: { 
      color: ['Silver', 'Chrome'], 
      size: ['85x200cm'],
      material: ['Premium Aluminum', 'Canvas Banner'],
      weight: '3.5kg'
    },
    inventory: { stock: 50 },
    features: [
      'Extra-wide stable base',
      'Premium aluminum construction',
      'Professional-grade printing',
      'Padded carrying bag included',
      'Suitable for outdoor use'
    ],
    useCases: ['Shopping Malls', 'Retail Stores', 'Conferences', 'Product Launches']
  },
  { 
    id: 'prod_large_wide_base',
    name: 'Large Wide Base Banner', 
    category: 'Roll-up Banners',
    images: [
      '/shop/Media-Banner-3x2m-1.png', 
      '/shop/Wide-Premium-Roller-Banner-Print-Example-2.jpg'
    ],
    priceBase: 19999,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Extra-large premium roll-up banner stand (3x2m) for maximum brand visibility at major events, exhibitions, and conferences across Kenya. Industrial-grade construction with reinforced frame, superior stability, and professional photo-quality printing. Perfect for corporate events, trade shows, product launches, and large-scale marketing campaigns in Nairobi, Mombasa, and nationwide. Makes a powerful visual impact for your brand.',
    categorySpecificAttributes: { 
      color: ['Silver', 'Black'], 
      size: ['3x2m'],
      material: ['Industrial Aluminum', 'Premium Canvas'],
      weight: '8kg'
    },
    inventory: { stock: 30 },
    features: [
      'Extra-large 3x2m display',
      'Industrial-grade construction',
      'Photo-quality printing',
      'Maximum brand visibility',
      'Heavy-duty carrying case'
    ],
    useCases: ['Major Events', 'Trade Shows', 'Corporate Functions', 'Product Launches']
  },
  { 
    id: 'prod_teardrop_banner',
    name: 'Teardrop Banner', 
    category: 'Outdoor Banners',
    images: [
      '/shop/teardrop-banner-printing-3.webp', 
      '/shop/teardrop-banners.jpg'
    ],
    priceBase: 9000,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Eye-catching teardrop banner flag (2.5m height) designed for outdoor advertising, events, and storefront displays in Kenya. Features wind-resistant design, fiberglass pole, ground spike base, and vibrant double-sided printing. Perfect for attracting attention at outdoor events, retail locations, real estate sites, and roadside advertising in Nairobi and across Kenya. Weather-resistant and durable for long-term outdoor use.',
    categorySpecificAttributes: { 
      color: ['Full Color Print'], 
      size: ['2.5m height'],
      material: ['Polyester Fabric', 'Fiberglass Pole'],
      weight: '4kg'
    },
    inventory: { stock: 20 },
    features: [
      'Wind-resistant design',
      'Double-sided printing',
      'Weather-resistant fabric',
      'Includes ground spike',
      'Easy assembly'
    ],
    useCases: ['Outdoor Events', 'Retail Storefronts', 'Real Estate', 'Roadside Advertising']
  },
  { 
    id: 'prod_flyers',
    name: 'Flyers & Leaflets', 
    category: 'Print Materials',
    images: [
      '/shop/1ed8e69a93bfa77ba2989cc64309a114.jpg', 
      '/shop/A6-flyer-printing.jpg'
    ],
    priceBase: 4500,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Professional full-color flyers and leaflets printing in Kenya. Available in A4, A5, and A6 sizes with glossy or matte finish. Perfect for marketing campaigns, event promotions, product launches, restaurant menus, and direct mail in Nairobi. High-quality offset printing with vibrant colors and sharp text. Bulk printing discounts available. Fast turnaround time - order today, collect tomorrow.',
    categorySpecificAttributes: { 
      color: ['Full Color (CMYK)'], 
      size: ['A4', 'A5', 'A6'],
      material: ['Glossy Paper', 'Matte Paper'],
      weight: ['130gsm', '170gsm', '250gsm']
    },
    inventory: { stock: 999 }, // High stock for print orders
    features: [
      'Full-color printing',
      'Multiple sizes available',
      'Glossy or matte finish',
      'Bulk discounts',
      'Fast 24-hour turnaround'
    ],
    useCases: ['Marketing Campaigns', 'Event Promotions', 'Menus', 'Direct Mail'],
    pricing: {
      note: 'Price shown is starting price for 1000 flyers. Contact for custom quantities.'
    }
  },
  { 
    id: 'prod_backdrop',
    name: 'Event Backdrop', 
    category: 'Display Materials',
    images: [
      '/shop/H05c4ffbb7dca4e119995c37e9e984864r.jpg', 
      '/shop/H194e3b7f3d7245469f8d5b632f61fe8cM.jpg'
    ],
    priceBase: 19999,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Premium event backdrop stands (3x2.5m) for professional photo booths, stage backgrounds, and corporate events in Kenya. Features telescopic frame for adjustable sizing, high-resolution fabric printing, and easy tool-free assembly. Perfect for weddings, corporate events, product launches, conferences, and brand activations in Nairobi. Portable design with carrying bag for easy transport. Creates stunning professional photo opportunities.',
    categorySpecificAttributes: { 
      color: ['Full Color Custom Print'], 
      size: ['3x2.5m', 'Adjustable'],
      material: ['Fabric Banner', 'Aluminum Frame'],
      weight: '6kg'
    },
    inventory: { stock: 20 },
    features: [
      'Adjustable telescopic frame',
      'High-resolution printing',
      'Tool-free assembly',
      'Professional photo quality',
      'Portable with carrying bag'
    ],
    useCases: ['Weddings', 'Corporate Events', 'Photo Booths', 'Product Launches', 'Conferences']
  },
  { 
    id: 'prod_business_card',
    name: 'Business Cards', 
    category: 'Print Materials',
    images: [
      '/shop/bc1.jpg', 
      '/shop/bc2.jpg', 
      '/shop/bc3.jpg', 
      '/shop/bc4.jpg', 
      '/shop/bc5.jpg'
    ],
    priceBase: 450,
    discounts: { seasonal: { percentage: 0 } },
    description: 'Professional business cards printing in Nairobi, Kenya. Premium 350gsm cardstock with glossy, matte, or textured finish. Full-color double-sided printing with sharp text and vibrant logos. Perfect for entrepreneurs, corporates, startups, and professionals. Multiple design templates available or bring your own design. Minimum order 100 cards. Fast same-day printing available. Make a lasting first impression with quality business cards.',
    categorySpecificAttributes: { 
      color: ['Full Color Double-sided'], 
      size: ['85x55mm (Standard)', '90x50mm'],
      material: ['Premium Cardstock'],
      weight: ['350gsm'],
      finish: ['Glossy', 'Matte', 'Textured']
    },
    inventory: { stock: 999 },
    features: [
      'Premium 350gsm cardstock',
      'Double-sided printing',
      'Multiple finishes available',
      'Free design templates',
      'Same-day printing available'
    ],
    useCases: ['Networking', 'Corporate Branding', 'Professional Services', 'Entrepreneurs'],
    pricing: {
      note: 'Price shown is for 100 cards. Bulk discounts available for 500+ cards.'
    }
  },
];

// Export categories for filtering
export const CATEGORIES = {
  ALL: 'All Products',
  BANNERS: 'Roll-up Banners',
  OUTDOOR: 'Outdoor Banners',
  PRINT: 'Print Materials',
  DISPLAYS: 'Display Materials'
};

// Export for easy category filtering
export const getCategoryCounts = () => {
  return products.reduce((acc, product) => {
    const cat = product.category || 'Uncategorized';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
};