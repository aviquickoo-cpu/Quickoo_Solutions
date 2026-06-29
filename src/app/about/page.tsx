"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Zap, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
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
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-xl text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Quickoo</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We are a collective of dreamers, designers, and developers committed to building digital experiences that inspire and perform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 relative border-t border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative bg-slate-900 border border-white/10 shadow-2xl">
                {/* Fallback pattern since we don't have a team image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-emerald-900/40 backdrop-blur-sm flex items-center justify-center">
                  <Users size={120} className="text-white/20" />
                </div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">5+</p>
                <p className="text-sm font-semibold opacity-90">Years of Innovation</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  Quickoo Solutions started with a simple belief: technology should accelerate human potential, not complicate it. Founded by passionate engineers, we set out to bridge the gap between complex software engineering and intuitive user experiences.
                </p>
                <p>
                  Today, we've grown into a full-cycle software agency delivering everything from stunning corporate websites and robust mobile apps to cutting-edge AI integrations. Our proprietary products, like Quickoo Recharge and Quickoo Mart, stand as a testament to our commitment to solving real-world problems.
                </p>
                <p>
                  We don't just write code; we partner with businesses to architect their future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The principles that guide our decisions, our work, and our relationships.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Target, title: "Excellence", desc: "We never settle for 'good enough'. We push boundaries to deliver premium, reliable solutions." },
              { icon: Zap, title: "Agility", desc: "In a fast-paced digital world, we adapt quickly and deliver iteratively without compromising quality." },
              { icon: Users, title: "Collaboration", desc: "We view our clients as partners. Your success is our success, and we build together." },
              { icon: Award, title: "Integrity", desc: "Honest communication, transparent pricing, and taking responsibility for our code." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Why Partner With Us?</h2>
          
          <div className="space-y-6">
            {[
              "End-to-End Solutions: From UI/UX design to robust backend architecture.",
              "Future-Ready Tech: We integrate modern AI solutions so you stay ahead.",
              "Transparent Process: Clear timelines, constant communication, no hidden fees.",
              "Dedicated Support: We maintain and scale your products long after launch.",
            ].map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                <p className="text-lg text-slate-200">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-[1px]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to work with us?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Let's turn your ideas into a digital reality.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-blue-950 font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
