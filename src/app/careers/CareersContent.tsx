"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Lightbulb, TrendingUp, Send, Paperclip } from "lucide-react";
import { useState } from "react";

export default function CareersContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    position: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your resume.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("name", formData.name);
      uploadData.append("email", formData.email);
      uploadData.append("number", formData.number);
      uploadData.append("position", formData.position);
      
      const res = await fetch("/api/apply", {
        method: "POST",
        body: uploadData,
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }
      
      const text = `*New Job Application*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.number}\n*Position:* ${formData.position}\n\n_I have submitted my application online and my PDF resume has been sent directly to your email (quickoosolutions@gmail.com)._`;
      const whatsappUrl = `https://wa.me/918617651623?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      alert("An error occurred while uploading your resume. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Briefcase size={32} aria-hidden="true" />
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
                  <perk.icon size={28} aria-hidden="true" />
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
              We are a rapidly growing company. Even if you don&apos;t see an exact match, we&apos;d love to hear from you for future roles.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-left max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-blue-400" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Future Opportunities</h3>
              <p className="text-slate-400 max-w-lg mx-auto">
                We are actively accepting resumes for upcoming projects. Fill out the form below to apply.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="career-name" className="text-sm font-medium text-slate-300">Full Name</label>
                  <input
                    required
                    type="text"
                    id="career-name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="career-email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    required
                    type="email"
                    id="career-email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="career-number" className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input
                    required
                    type="tel"
                    id="career-number"
                    name="number"
                    autoComplete="tel"
                    value={formData.number}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="career-position" className="text-sm font-medium text-slate-300">Interested Position</label>
                  <select
                    required
                    id="career-position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none [&>option]:bg-slate-900"
                  >
                    <option value="" disabled>Select a position</option>
                    <option value="IT">IT</option>
                    <option value="Non IT">Non IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="AI Integration Specialist">AI Integration Specialist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="career-resume" className="text-sm font-medium text-slate-300">
                  Upload Resume <span className="text-red-400" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <div className="relative">
                  <input
                    required
                    type="file"
                    id="career-resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-describedby="resume-hint"
                  />
                  <div className="bg-white/5 border border-dashed border-white/20 hover:border-blue-500/50 rounded-xl px-4 py-6 flex flex-col items-center justify-center gap-2 transition-colors">
                    <Paperclip className="text-slate-400" size={24} aria-hidden="true" />
                    <p className="text-slate-300 text-sm font-medium">
                      {file ? file.name : "Click to select your resume (PDF, DOC)"}
                    </p>
                    <p id="resume-hint" className="text-slate-500 text-xs">Note: Your resume will be securely uploaded and a link will be sent.</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} aria-hidden="true" />
                {isSubmitting ? "Uploading & Redirecting..." : "Submit via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
