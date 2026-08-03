import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Quickoo Solutions team. We are hiring frontend developers, backend engineers, UI/UX designers, AI integration specialists, and more. Apply now and build your career at a growing software agency in West Bengal, India.",
  alternates: {
    canonical: "https://www.quickoosolutions.com/careers",
  },
  openGraph: {
    title: "Careers at Quickoo Solutions",
    description:
      "We are looking for passionate engineers, designers, and innovators to join our team. Apply now and grow your career at a modern software agency.",
    url: "https://www.quickoosolutions.com/careers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Quickoo Solutions",
      },
    ],
  },
  twitter: {
    title: "Careers at Quickoo Solutions",
    description:
      "Passionate about tech? Join our team of engineers, designers, and innovators.",
    images: ["/og-image.png"],
  },
};

export default function Careers() {
  return <CareersContent />;
}
