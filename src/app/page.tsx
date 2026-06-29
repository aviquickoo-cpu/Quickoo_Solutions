"use client";

import Link from "next/link";
import { ArrowRight, Code, Smartphone, Palette, Settings, Brain, Bot, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-screen relative z-10">

      {/* ── Hero ── */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-20 mx-auto px-4 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-xl">
              <span className="block text-white mb-2">Creative Digital</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Solutions for Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow">
              End-to-end software, mobile apps, and AI solutions built to scale your business and transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
              <CheckCircle2 size={16} className="text-emerald-400" /> Trusted by modern businesses
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 relative border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who We Are
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Quickoo Solutions is a modern software agency and digital solutions provider.
              We blend creative design with robust engineering and cutting-edge AI to deliver premium
              digital products. From intuitive websites to complex customized AI agents, we are your
              partner in technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Highlight ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive technology services covering the entire product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code,     title: "Website Building",  desc: "Responsive, fast, and SEO-optimized web platforms." },
              { icon: Smartphone, title: "App Building",    desc: "Native and cross-platform mobile experiences." },
              { icon: Palette,  title: "UI/UX Design",      desc: "User-centric designs that engage and convert." },
              { icon: Settings, title: "Software Maintenance", desc: "Reliable support and upgrades for your systems." },
              { icon: Brain,    title: "AI Integration",    desc: "Smart AI features embedded into your products." },
              { icon: Bot,      title: "Custom AI Agents",  desc: "Automated AI workflows tailored to your needs." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/40 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products Preview ── */}
      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                Discover our suite of proprietary digital solutions designed to simplify everyday tasks.
              </p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-white bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm">
              Explore Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Quickoo Recharge",   category: "Utility",    color: "from-blue-500 to-cyan-500" },
              { name: "Quickoo Mart",       category: "E-Commerce", color: "from-emerald-500 to-teal-500" },
              { name: "Quickoo Assistant",  category: "AI Tool",    color: "from-indigo-500 to-purple-500" },
              { name: "Quickoo Travel",     category: "Booking",    color: "from-orange-500 to-pink-500" },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.color} opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity z-0`} />
                <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[250px] border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">{product.category}</span>
                    <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-4 transition-all mt-8">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-slate-400 text-lg">A streamlined approach to bring your ideas to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and strategy." },
              { step: "02", title: "Design",    desc: "Crafting intuitive and stunning UI/UX." },
              { step: "03", title: "Develop",   desc: "Building scalable and robust solutions." },
            ].map((process, idx) => (
              <div key={idx} className="relative p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{process.step}</div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10 mt-8">{process.title}</h3>
                <p className="text-slate-400 relative z-10">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-[1px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Next Digital Product?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Let&apos;s create your software, website, app, or AI solution together. Partner with Quickoo Solutions for guaranteed excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-blue-950 font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
