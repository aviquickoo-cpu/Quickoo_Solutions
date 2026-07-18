"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink, ShieldCheck, Cpu, CreditCard, Plug2 } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import BrandLogo from "@/components/ui/BrandLogo";

type ProductCard = {
  name: string;
  category: string;
  description: string;
  valueProp: string;
  status: string;
  statusColor: string;
  icon: ComponentType<{ size?: number }>;
  gradient: string;
  link: string;
  logo?: string;
  logoAlt?: string;
};

const products: ProductCard[] = [
  {
    name: "Pan Bandhu",
    category: "Utility Platform",
    description: "Comprehensive PAN card services and utility management platform designed to make compliance and processing seamless.",
    valueProp: "Your trusted partner for all PAN and utility services.",
    status: "Live",
    statusColor: "bg-emerald-500",
    icon: CreditCard,
    gradient: "from-blue-600 to-cyan-500",
    link: "https://www.panbandhu.co.in/",
    logo: "/brand-logos/PAN_Bandhu.png",
    logoAlt: "Pan Bandhu"
  },
  {
    name: "Quickoo Recharge",
    category: "Utility Platform",
    description: "A fast, secure, and reliable platform for mobile and DTH recharges. Experience seamless transactions with bank-grade security and instant confirmation.",
    valueProp: "Simplify digital payments and recharges instantly.",
    status: "Live",
    statusColor: "bg-emerald-500",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://www.quickoorecharge.co.in/",
    logo: "/brand-logos/Quickoo_Recharge.png",
    logoAlt: "Quickoo Recharge"
  },
  {
    name: "API Provider",
    category: "API Solutions",
    description: "Robust API solutions for seamless integration into your business. Empower your digital infrastructure with reliable endpoints.",
    valueProp: "Connect and scale with our enterprise-grade APIs.",
    status: "Live",
    statusColor: "bg-emerald-500",
    icon: Plug2,
    gradient: "from-rose-500 to-red-500",
    link: "/contact?subject=API Provider Inquiry"
  },
  {
    name: "Quickoo Mart",
    category: "E-Commerce",
    description: "A comprehensive digital marketplace connecting buyers and sellers with an intuitive UI, fast delivery systems, and secure payment gateways.",
    valueProp: "A modern shopping experience for the digital age.",
    status: "Upcoming",
    statusColor: "bg-amber-500",
    icon: Star,
    gradient: "from-emerald-500 to-teal-400",
    link: "#"
  },
  {
    name: "Quickoo Travel",
    category: "Booking Engine",
    description: "An end-to-end travel booking solution for flights, hotels, and holidays. Designed for speed, reliability, and the best user experience.",
    valueProp: "Your gateway to seamless travel planning and bookings.",
    status: "Ongoing",
    statusColor: "bg-blue-500",
    icon: ExternalLink,
    gradient: "from-orange-500 to-pink-500",
    link: "#"
  },
  {
    name: "Quickoo Assistant",
    category: "AI Tool",
    description: "An advanced, customizable AI virtual assistant built to automate repetitive tasks, manage schedules, and provide intelligent data insights.",
    valueProp: "Supercharge your productivity with artificial intelligence.",
    status: "Coming Soon",
    statusColor: "bg-purple-500",
    icon: Cpu,
    gradient: "from-indigo-600 to-purple-500",
    link: "#"
  },
];

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Our Products</h1>
            <p className="text-xl text-slate-400 leading-relaxed mx-auto max-w-3xl">
              Quickoo Solutions is a product-driven business. We build proprietary digital platforms 
              that showcase our technical expertise, innovation, and commitment to creating software 
              that impacts everyday lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 group flex flex-col h-full"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-[120%] h-48 bg-gradient-to-br ${product.gradient} opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none`} />
                
                <div className="relative z-10 p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    {product.logo ? (
                      <BrandLogo
                        src={product.logo}
                        alt={product.logoAlt ?? product.name}
                        wrapperClassName="w-[180px] h-12"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md border border-white/20">
                        <product.icon size={28} />
                      </div>
                    )}
                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${product.statusColor}`}>
                      {product.status}
                    </div>
                  </div>
                  
                  <span className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider block">{product.category}</span>
                  <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
                  
                  <p className="text-slate-300 mb-8 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-sm">
                    <p className="text-slate-300 font-medium italic">&quot;{product.valueProp}&quot;</p>
                  </div>
                  
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    {product.link !== '#' && !product.link.startsWith('/') && (
                      <Link
                        href={product.link}
                        target="_blank"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all border border-blue-600 group/btn"
                      >
                        Visit Site 
                        <ExternalLink size={18} className="ml-2" />
                      </Link>
                    )}
                    <Link
                      href={`/contact?subject=Inquiry about ${product.name}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10 group/btn2"
                    >
                      Inquire 
                      <ArrowRight size={18} className="ml-2 group-hover/btn2:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Product?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Our products demonstrate our capability to build complex, scalable solutions. 
            We can build the same level of quality for your custom business idea.
          </p>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Custom Development
          </Link>
        </div>
      </section>
    </div>
  );
}
