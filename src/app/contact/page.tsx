"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [inquiryType, setInquiryType] = useState<"service" | "product">("service");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      inquiryType,
      selection: formData.get("selection"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("idle");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("idle");
      alert("An error occurred. Please try again later.");
    }
  };

  const servicesList = [
    "Website Building", "App Building", "Software Maintenance", 
    "UI/UX Design", "A to Z Software Solution", "AI Integration", 
    "Customized AI Agent Building"
  ];
  
  const productsList = [
    "Quickoo Recharge", "Quickoo Mart", "Quickoo Assistant", "Quickoo Travel"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 text-center relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-slate-400">
              Let's build something amazing together. Reach out to discuss your software, app, or AI project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Office Address</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Plot No. 836, Ground Floor, Satmile Mill Bazar,<br />
                        Satmile, Contai, Purba Medinipur,<br />
                        West Bengal, 721452
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">WhatsApp & Phone</h4>
                      <p className="text-slate-400 text-sm flex flex-col gap-1 mt-1">
                        <a href="tel:03369029890" className="hover:text-white transition-colors">Tel: 033 690 29890</a>
                        <a href="https://wa.me/918617651623" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">WhatsApp: 8617651623</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Addresses</h4>
                      <p className="text-slate-400 text-sm flex flex-col gap-1 mt-1">
                        <a href="mailto:admin@quickoo.co.in" className="hover:text-white transition-colors">admin@quickoo.co.in</a>
                        <a href="mailto:support@quickoo.co.in" className="hover:text-white transition-colors">support@quickoo.co.in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900/80 border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h3>
              
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center relative z-10"
                >
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-emerald-200/80">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-emerald-400 text-sm font-semibold hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm text-slate-400 font-medium">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        name="name"
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm text-slate-400 font-medium">Email Address</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        name="email"
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-400 font-medium">What are you looking for?</label>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <button
                        type="button"
                        onClick={() => setInquiryType("service")}
                        className={`py-3 rounded-xl border text-sm font-semibold transition-all ${inquiryType === "service" ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-950 border-white/10 text-slate-400 hover:bg-slate-900"}`}
                      >
                        Services
                      </button>
                      <button
                        type="button"
                        onClick={() => setInquiryType("product")}
                        className={`py-3 rounded-xl border text-sm font-semibold transition-all ${inquiryType === "product" ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-950 border-white/10 text-slate-400 hover:bg-slate-900"}`}
                      >
                        Products
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="selection" className="text-sm text-slate-400 font-medium">
                      Select a {inquiryType === "service" ? "Service" : "Product"}
                    </label>
                    <select
                      required
                      defaultValue=""
                      id="selection"
                      name="selection"
                      className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choose an option...</option>
                      {(inquiryType === "service" ? servicesList : productsList).map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-slate-400 font-medium">Project Details</label>
                    <textarea 
                      required
                      id="message"
                      name="message"
                      rows={5}
                      className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={formStatus === "submitting"}
                    type="submit" 
                    className="mt-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {formStatus === "submitting" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
