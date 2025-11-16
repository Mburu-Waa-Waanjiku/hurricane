export default async function sitemap() {
  // Base URL of your site
  const baseUrl = "https://hurricaneteck.co.ke";

  // Static pages
  const staticPages = [
    "",
    "/virtual-tours",
    "/virtual-tours/winsper-lands-sagana-phase-1",
    "/shop",
    "/blogs/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    "/blogs/rent-an-online-store",
    "/blogs/top-3-best-website-developer-companies-in-ruiru-2025",
  ];

  // Software pages
  const softwarePages = [
    "/software/crm",
    "/software/whatsapp-bulk",
    "/software/business-websites",
    "/software/virtual-tours",
  ];

  // Marketing products pages
  const marketingProductPages = [
    "/marketing-products/sales-training",
    "/marketing-products/campaign-strategy",
    "/marketing-products/product-development",
    "/marketing-products/advertising",
    "/marketing-products/campaign-management",
    "/marketing-products/satellite-sales",
    "/marketing-products/marketing-training",
  ];

  // Combine all pages
  const allPages = [...staticPages, ...softwarePages, ...marketingProductPages];

  // ✅ Create routes array correctly
  const routes = allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // ✅ Return in Next.js sitemap format
  return routes;
}