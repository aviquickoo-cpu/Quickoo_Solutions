import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Scene3D from "@/components/ui/Scene3D";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quickoo Solutions | End-to-end digital solutions",
  description: "Creative software, apps, and AI solutions for modern businesses. Quickoo Solutions offers website building, app building, software maintenance, UI/UX design, and AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-500/30`}>
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
