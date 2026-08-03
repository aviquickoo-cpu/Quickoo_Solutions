import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Quickoo Solutions offers website building, mobile app development, UI/UX design, software maintenance, AI integration, and custom AI agent building. Full-cycle digital product development for businesses across India.",
  alternates: {
    canonical: "https://www.quickoosolutions.com/services",
  },
  openGraph: {
    title: "Our Services | Quickoo Solutions",
    description:
      "Full-cycle digital product development — from websites and mobile apps to custom AI agents. Your one-stop partner for software, design, and AI.",
    url: "https://www.quickoosolutions.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quickoo Solutions Services",
      },
    ],
  },
  twitter: {
    title: "Our Services | Quickoo Solutions",
    description:
      "Full-cycle digital product development — websites, mobile apps, AI integration, and custom AI agents.",
    images: ["/og-image.png"],
  },
};

export default function Services() {
  return <ServicesContent />;
}
