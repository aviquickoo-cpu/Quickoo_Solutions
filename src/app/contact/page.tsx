import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Quickoo Solutions. Contact us for website development, app building, AI integration, or any of our digital services. Located in Contai, West Bengal. Available via WhatsApp, phone, and email.",
  alternates: {
    canonical: "https://www.quickoosolutions.com/contact",
  },
  openGraph: {
    title: "Contact Quickoo Solutions",
    description:
      "Ready to start your project? Reach out to discuss your software, app, or AI project. We are available via WhatsApp, phone, and email.",
    url: "https://www.quickoosolutions.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Quickoo Solutions",
      },
    ],
  },
  twitter: {
    title: "Contact Quickoo Solutions",
    description:
      "Ready to start your project? Reach out to discuss your software, app, or AI project.",
    images: ["/og-image.png"],
  },
};

export default function Contact() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
