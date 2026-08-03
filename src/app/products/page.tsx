import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Quickoo Solutions' proprietary digital products — Pan Bandhu (PAN card services), Quickoo Recharge (mobile & DTH recharge), API Provider, Quickoo Mart, Quickoo Travel, and Quickoo Assistant (AI tool).",
  alternates: {
    canonical: "https://www.quickoosolutions.com/products",
  },
  openGraph: {
    title: "Our Products | Quickoo Solutions",
    description:
      "Proprietary digital platforms built by Quickoo Solutions: Pan Bandhu, Quickoo Recharge, Quickoo Mart, and AI-powered tools that impact everyday lives.",
    url: "https://www.quickoosolutions.com/products",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quickoo Solutions Products",
      },
    ],
  },
  twitter: {
    title: "Our Products | Quickoo Solutions",
    description:
      "Proprietary digital platforms: Pan Bandhu, Quickoo Recharge, Quickoo Mart, and AI-powered tools.",
    images: ["/og-image.png"],
  },
};

export default function Products() {
  return <ProductsContent />;
}
