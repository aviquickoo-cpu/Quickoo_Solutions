import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                Q
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                Quickoo Solutions
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              End-to-end digital solutions built for growth. We specialize in creative software, modern web &amp; mobile apps, and custom AI integrations.
            </p>
            <div className="flex gap-4 mt-2">
              {["T", "L", "I"].map((initial, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-xs">
                  {initial}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home",       path: "/" },
                { name: "About",      path: "/about" },
                { name: "Services",   path: "/services" },
                { name: "Products",   path: "/products" },
                { name: "Careers",    path: "/careers" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {["Website Building", "App Building", "Software Maintenance", "UI/UX Design", "AI Integration"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="text-blue-500 shrink-0 mt-0.5" size={18} />
                <span>Plot No. 836, Ground Floor, Satmile Mill Bazar, Satmile, Contai, Purba Medinipur, West Bengal, 721452</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <a href="tel:03369029890" className="hover:text-white transition-colors">033 690 29890</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MessageCircle className="text-emerald-500 shrink-0" size={18} />
                <a href="https://wa.me/918617651623" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">8617651623</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="mailto:admin@quickoo.co.in" className="hover:text-white transition-colors">admin@quickoo.co.in</a>
                  <a href="mailto:support@quickoo.co.in" className="hover:text-white transition-colors">support@quickoo.co.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Quickoo Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
