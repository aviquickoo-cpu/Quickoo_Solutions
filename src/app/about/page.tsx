import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quickoo Solutions — a modern software agency founded by passionate engineers committed to building intuitive digital experiences, from websites and mobile apps to cutting-edge AI integrations.",
  alternates: {
    canonical: "https://www.quickoosolutions.com/about",
  },
  openGraph: {
    title: "About Quickoo Solutions",
    description:
      "A collective of dreamers, designers, and developers building digital experiences that inspire and perform. Discover our story, values, and why businesses choose us.",
    url: "https://www.quickoosolutions.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Quickoo Solutions",
      },
    ],
  },
  twitter: {
    title: "About Quickoo Solutions",
    description:
      "A collective of dreamers, designers, and developers building digital experiences that inspire and perform.",
    images: ["/og-image.png"],
  },
};

export default function About() {
  return <AboutContent />;
}
