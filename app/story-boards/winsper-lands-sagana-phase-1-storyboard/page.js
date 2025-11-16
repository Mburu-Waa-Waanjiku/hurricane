import StoryBoard from "../../../components/storyboards/StoryBoard";

export const metadata = {
  title: "Client Journey Storyboard | YourBrand",
  description:
    "A visual zig-zag journey showing how clients move from idea to success through interactive story cards and flowing arrows.",
  keywords: [
    "client journey",
    "storyboard",
    "business flow",
    "interactive map",
    "Next.js storyboard",
  ],
  openGraph: {
    title: "Client Journey Storyboard | YourBrand",
    description:
      "A dynamic storyboard showing client success paths in a visual zig-zag flow.",
    url: "https://yourwebsite.com/storyboard",
    siteName: "YourBrand",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Client Journey Storyboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Journey Storyboard | YourBrand",
    description:
      "Follow the client journey through a visual, step-by-step storyboard flow.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/storyboard",
  },
};

export default function StoryboardPage() {
  const steps = [
    {
      id: 1,
      title: "Starting Point",
      description:
        "We begin in Nairobi — where ideas and vision take shape.",
      images: ["/images/start1.jpg", "/images/start2.jpg"],
    },
    {
      id: 2,
      title: "Checkpoint",
      description:
        "Midway through, we analyze data and refine our approach.",
      images: ["/images/check1.jpg", "/images/check2.jpg"],
    },
    {
      id: 3,
      title: "Destination",
      description:
        "Arriving at success — measurable results and happy clients.",
      images: ["/images/dest1.jpg"],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Client Journey Storyboard",
    description:
      "A visual zig-zag storyboard mapping each stage of a client journey.",
    itemListElement: steps.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.title,
      description: step.description,
      image: step.images?.[0]
        ? `https://yourwebsite.com${step.images[0]}`
        : undefined,
    })),
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />
      <StoryBoard steps={steps} themeColor="#10b981" />
    </main>
  );
}
