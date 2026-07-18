"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";

const navLinks = [
  { name: "Home",       path: "/" },
  { name: "About",      path: "/about" },
  { name: "Services",   path: "/services" },
  { name: "Products",   path: "/products" },
  { name: "Careers",    path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <BrandLogo
              src="/brand-logos/Quickoo_Solutions.png"
              alt="Quickoo Solutions"
              wrapperClassName="w-[160px] h-10 sm:w-[190px] sm:h-12 group-hover:scale-[1.02] transition-transform"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/918617651623"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium p-2 rounded-lg ${
                  pathname === link.path
                    ? "bg-blue-600/10 text-blue-400"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/918617651623"
                className="flex items-center justify-center gap-2 bg-emerald-600/20 text-emerald-400 py-3 rounded-lg font-medium"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
