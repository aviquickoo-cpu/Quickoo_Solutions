"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Lightbulb, TrendingUp, Send } from "lucide-react";

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Join Quickoo Solutions</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Build your career at a growing, professional software agency. We are always looking for passionate talent to join our team of engineers, designers, and innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Life at Quickoo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                desc: "We prioritize internal mobility and fast-tracked career growth. Learn new technologies and scale your skills.",
              },
              {
                icon: Lightbulb,
                title: "Learning & Innovation",
                desc: "Work on cutting-edge AI integrations, modern web frameworks, and complex products that push boundaries.",
              },
              {
                icon: Heart,
                title: "Supportive Culture",
                desc: "An ambitious yet supportive work environment where your ideas are valued and your well-being matters.",
              },
            ].map((perk, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:border-blue-500/30 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                  <perk.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-slate-400">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Current Openings</h2>
            <p className="text-slate-400">
              We are a rapidly growing company. Even if you don't see an exact match, we'd love to hear from you for future roles.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 text-center">
            <div className="w-20 h-20 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Future Opportunities</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              We are actively accepting resumes for Frontend Developers, Backend Engineers, and UI/UX Designers for upcoming projects.
            </p>
            <a
              href="mailto:admin@quickoo.co.in"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Send size={18} />
              Submit Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
