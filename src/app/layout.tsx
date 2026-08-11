import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Scene3D from "@/components/ui/Scene3D";
import MouseShadow from "@/components/ui/MouseShadow";

const siteUrl = "https://www.quickoosolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quickoo Solutions | End-to-End Digital Solutions",
    template: "%s | Quickoo Solutions",
  },
  description:
    "Quickoo Solutions is a modern software agency offering website building, mobile app development, UI/UX design, AI integration, custom AI agents, and software maintenance for businesses across India.",
  keywords: [
    "software agency India",
    "website building",
    "app development",
    "AI integration",
    "custom AI agents",
    "UI/UX design",
    "software maintenance",
    "Next.js development",
    "React Native apps",
    "Quickoo Solutions",
    "digital solutions West Bengal",
    "full-stack development",
    "mobile app development India",
  ],
  authors: [{ name: "Quickoo Solutions", url: siteUrl }],
  creator: "Quickoo Solutions",
  publisher: "Quickoo Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Quickoo Solutions",
    title: "Quickoo Solutions | End-to-End Digital Solutions",
    description:
      "Modern software agency specialising in web, mobile, AI integration, and full-cycle product development. Trusted by businesses across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quickoo Solutions – End-to-End Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quickoo Solutions | End-to-End Digital Solutions",
    description:
      "Modern software agency specialising in web, mobile, AI integration, and full-cycle product development. Trusted by businesses across India.",
    images: ["/og-image.png"],
    creator: "@quickoosolutions",
    site: "@quickoosolutions",
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-google-site-verification-token",
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// Organization JSON-LD structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quickoo Solutions",
  url: siteUrl,
  logo: `${siteUrl}/brand-logos/Quickoo_Solutions.png`,
  description:
    "Quickoo Solutions is a modern software agency offering website building, mobile app development, UI/UX design, AI integration, and custom AI agents.",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 836, Ground Floor, Satmile Mill Bazar, Satmile",
    addressLocality: "Contai",
    addressRegion: "West Bengal",
    postalCode: "721452",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8617651623",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
  ],
  email: "quickoosolutions@gmail.com",
  sameAs: [
    "https://www.linkedin.com/company/quickoo-solutions/",
    "https://instagram.com/quickoorecharge_official",
    "https://facebook.com/people/Quickoo-Recharge/61573972837193",
  ],
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software & Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom AI Agents" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Maintenance" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-500/30">
        <MouseShadow />
        <Scene3D />
        <Header />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
