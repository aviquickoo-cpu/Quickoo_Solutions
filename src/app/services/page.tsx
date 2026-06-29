"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Wrench, PenTool, LayoutTemplate, Brain, Cpu, MessageSquare } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Building",
    description: "Custom, responsive, and blazing fast websites tailored for your business needs. We build everything from landing pages to complex corporate portals.",
    benefit: "Enhance your online presence and capture more leads.",
    icon: Monitor,
  },
  {
    title: "App Building",
    description: "Native and cross-platform mobile applications for iOS and Android. High-performance apps that your users will love.",
    benefit: "Engage customers on the go with a seamless mobile experience.",
    icon: Smartphone,
  },
  {
    title: "Software Maintenance",
    description: "Ongoing support, bug fixes, security updates, and feature enhancements for your existing software infrastructure.",
    benefit: "Ensure maximum uptime and secure operations without hassle.",
    icon: Wrench,
  },
  {
    title: "UI/UX Design",
    description: "User-centric design processes that produce beautiful, intuitive, and highly functional digital interfaces.",
    benefit: "Increase user retention and satisfaction with stunning designs.",
    icon: PenTool,
  },
  {
    title: "A to Z Software Solution",
    description: "Full-cycle product development from idea to deployment. We handle architecture, backend, frontend, and infrastructure.",
    benefit: "A single partner to bring your entire digital vision to life.",
    icon: LayoutTemplate,
  },
  {
    title: "AI Integration",
    description: "Embed state-of-the-art AI capabilities into your existing products to automate tasks and provide intelligent insights.",
    benefit: "Stay ahead of the competition with smart, data-driven features.",
    icon: Brain,
  },
  {
    title: "Customized AI Agent Building",
    description: "Bespoke AI agents designed specifically for your workflows. Automate customer service, internal ops, or data analysis.",
    benefit: "Drastically reduce operational costs while scaling efficiently.",
    icon: Cpu,
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Quickoo Solutions provides both premium design and robust technical execution. 
              We are your full-cycle partner for digital product creation, from business websites and 
              mobile apps to custom AI agents and end-to-end software delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-blue-500/40 hover:bg-white/10 transition-all group relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/20 transition-all rounded-bl-full" />
                
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{service.description}</p>
                
                <div className="bg-blue-950/30 border border-blue-900/50 rounded-xl p-4 mb-8">
                  <p className="text-sm text-blue-200"><strong className="text-blue-400 font-semibold">Business Benefit:</strong> {service.benefit}</p>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors mt-auto"
                >
                  Discuss Your Project <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Our Development Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -translate-x-1/2" />
            
            {[
              { title: "Discovery and Consultation", desc: "We start by deeply understanding your business, goals, and technical requirements." },
              { title: "Planning and Strategy", desc: "Creating a comprehensive roadmap, technical architecture, and project timeline." },
              { title: "Design and UI/UX", desc: "Crafting wireframes and high-fidelity prototypes focused on user experience." },
              { title: "Development and Integration", desc: "Writing clean, scalable code and integrating necessary third-party or AI tools." },
              { title: "Testing and Deployment", desc: "Rigorous QA testing followed by a smooth, secure launch." },
              { title: "Maintenance and Support", desc: "Continuous monitoring, updates, and feature scaling post-launch." },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                  <div className={`w-full max-w-sm p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-400 font-bold z-10 hidden md:flex shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {idx + 1}
                </div>
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to elevate your digital presence?</h2>
            <p className="text-blue-100 text-lg max-w-2xl">
              From web apps to customized AI agents, we have the technical capability and creative vision to deliver.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3"
          >
            <MessageSquare size={20} />
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
