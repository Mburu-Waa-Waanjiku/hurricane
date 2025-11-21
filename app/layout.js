import { Inter } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";
import { StateProvider } from '../utils/StateContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://hurricaneteck.co.ke'),
  title: {
    default: "Hurricane Teck - Web Design, Marketing & Software Solutions Kenya",
    template: "%s | Hurricane Teck"
  },
  description: "Leading web design, digital marketing, and software development company in Kenya. CRM, WhatsApp Bulk SMS, Virtual Tours, and Marketing Services in Nairobi.",
  keywords: [
    "web design Kenya",
    "digital marketing Nairobi",
    "CRM software Kenya",
    "WhatsApp bulk SMS",
    "virtual tours real estate",
    "website developers Ruiru",
    "marketing services Kenya",
    "business websites"
  ],
  authors: [{ name: "Hurricane Teck" }],
  creator: "Hurricane Teck",
  publisher: "Hurricane Teck",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://hurricaneteck.co.ke",
    siteName: "Hurricane Teck",
    title: "Hurricane Teck - Web Design, Marketing & Software Solutions Kenya",
    description: "Leading web design, digital marketing, and software development company in Kenya.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image to public folder
        width: 1200,
        height: 630,
        alt: "Hurricane Teck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hurricane Teck - Web Design, Marketing & Software Solutions Kenya",
    description: "Leading web design, digital marketing, and software development company in Kenya.",
    images: ["/og-image.jpg"],
    creator: "@hurricaneteck", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Get from Google Search Console
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },
  alternates: {
    canonical: "https://hurricaneteck.co.ke",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ehyifMyuzZjrrJmMdqaTCAsoDerpHiSeejh92XkAQPI" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-SQ0XFL28NX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SQ0XFL28NX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVDVF2MM');
            `,
          }}
        />

        {/* Meta Pixel (Facebook Pixel) */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u6u1ee9g2m");
            `,
          }}
        />

        {/* Structured Data removed - handled in individual pages */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVDVF2MM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <StateProvider>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}