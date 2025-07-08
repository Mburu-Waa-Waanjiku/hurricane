export const products = [
  { 
    id: 'prod_branding_pkg',
    name: 'Package Branding', 
    images: ['/pk1.jpg', '/pk2.jpg', '/pk3.jpg', '/pk4.jpg'],
    priceBase: 15000, // Example base price
    discounts: { seasonal: { percentage: 15 } }, // Example discount
    description: 'Comprehensive branding solutions for your packaging.',
    categorySpecificAttributes: { color: [], size: [] }, // Example attributes
    inventory: { stock: 10 }, // Example inventory
  },
  { 
    id: 'prod_biz_cards',
    name: 'Business Cards (x100)', 
    images: ['/bc1.jpg', '/bc2.jpg', '/bc3.jpg', '/bc4.jpg', '/bc5.jpg'],
    priceBase: 1200,
    description: 'Professionally designed and printed business cards.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 50 },
  },
  { 
    id: 'prod_flyers_a5',
    name: 'Flyers (A5 x500)', 
    images: ['/fl1.jpg', '/fl2.jpg', '/fl3.jpg', '/fl4.jpg', '/fl5.jpg'],
    priceBase: 5500,
    description: 'High-quality flyers for marketing and events.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 30 },
  },
  { 
    id: 'prod_banner_gen',
    name: 'Banners (Vinyl 2x1m)', 
    images: ['/bn1.jpg', '/bn2.jpg', '/bn3.jpg', '/bn4.jpg', '/bn5.jpg'],
    priceBase: 3000,
    description: 'Versatile banners for indoor and outdoor use.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 15 },
  },
  { 
    id: 'prod_merch_mugs',
    name: 'Merchandising (Mugs x10)', 
    images: ['/merch-placeholder.jpg'], // Placeholder
    priceBase: 2500,
    description: 'Custom merchandising items for your brand.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 20 },
  },
  { 
    id: 'prod_banner_tear',
    name: 'Teardrop Banners (Medium)', 
    images: ['/teardrop-placeholder.jpg'], // Placeholder
    priceBase: 8000,
    description: 'Eye-catching teardrop banners for events and promotions.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 5 },
  },
  { 
    id: 'prod_banner_rollup_w',
    name: 'Wide Base Rollup Banners', 
    images: ['/rollup-wide-placeholder.jpg'], // Placeholder
    priceBase: 9500,
    description: 'Stable and large rollup banners with a wide base.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 8 },
  },
  { 
    id: 'prod_banner_rollup_t',
    name: 'Thin Base Rollup Banners', 
    images: ['/rollup-thin-placeholder.jpg'], // Placeholder
    priceBase: 7000,
    description: 'Portable and sleek rollup banners with a thin base.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 12 },
  },
  { 
    id: 'prod_wheel_covers',
    name: 'Wheel Covers (Set of 4)', 
    images: ['/wheelcover-placeholder.jpg'], // Placeholder
    priceBase: 6000,
    description: 'Custom printed wheel covers for vehicles.',
    categorySpecificAttributes: { color: [], size: [] },
    inventory: { stock: 2 }, // Example out of stock
  },
]; 