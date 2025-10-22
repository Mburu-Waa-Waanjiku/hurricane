export default async function sitemap() {
  // Base URL of your site
  const baseUrl = "https://hurricaneteck.co.ke";

  // Static pages
  const staticPages = [
    "",
    "/virtual-tours",
    "/virtual-tours/winsper-lands-sagana-phase-1",
    "/shop",
    "/services/marketing",
    "/services/web-design",
    "/blogs/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    "/blogs/rent-an-online-store",
    "/blogs/top-3-best-website-developer-companies-in-ruiru-2025",
  ];

  // ✅ Create routes array correctly
  const routes = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // ✅ Return in Next.js sitemap format
  return routes;
}