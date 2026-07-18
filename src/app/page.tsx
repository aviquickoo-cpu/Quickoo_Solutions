"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, Settings, Brain, Bot, CheckCircle2, Zap, Users, Award, TrendingUp } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import GlowCard from "@/components/ui/GlowCard";
import BrandLogo from "@/components/ui/BrandLogo";

/* ── Animated counter ───────────────────────────── */
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Typewriter text ────────────────────────────── */
function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setDeleting(false);
          setTextIdx((i) => (i + 1) % texts.length);
        }
      }
    }, deleting ? 45 : 95);
    return () => clearTimeout(timeout);
  }, [displayText, deleting, textIdx, texts]);

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
      {displayText}
      <span className="text-blue-400 animate-pulse ml-0.5">|</span>
    </span>
  );
}

/* ── Floating orb ───────────────────────────────── */
function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
    />
  );
}

/* ── Main page ───────────────────────────────────── */
type ProductCard = {
  name: string;
  category: string;
  color: string;
  desc: string;
  icon: string;
  status: string;
  link: string;
  logo?: string;
  logoAlt?: string;
};

const services = [
  { icon: Code,       title: "Website Building",      desc: "Responsive, fast, and SEO-optimized web platforms built with cutting-edge technologies.", color: "from-blue-500 to-cyan-400",    glow: "#3b82f6" },
  { icon: Smartphone, title: "App Building",           desc: "Native and cross-platform mobile experiences that users love to interact with.",          color: "from-violet-500 to-purple-400", glow: "#8b5cf6" },
  { icon: Palette,    title: "UI/UX Design",           desc: "User-centric designs that engage, delight, and convert visitors into customers.",         color: "from-pink-500 to-rose-400",    glow: "#ec4899" },
  { icon: Settings,   title: "Software Maintenance",   desc: "Reliable support, upgrades, and performance optimizations for your production systems.",   color: "from-amber-500 to-orange-400", glow: "#f59e0b" },
  { icon: Brain,      title: "AI Integration",         desc: "Smart AI features seamlessly embedded into your products for competitive edge.",           color: "from-emerald-500 to-teal-400", glow: "#10b981" },
  { icon: Bot,        title: "Custom AI Agents",       desc: "Autonomous AI agents and automated workflows fully tailored to your business needs.",      color: "from-indigo-500 to-blue-400",  glow: "#6366f1" },
];

const products: ProductCard[] = [
  { name: "Pan Bandhu",        category: "Utility",    color: "from-blue-600 to-cyan-500",     desc: "Comprehensive PAN card services and utility management platform.",        icon: "💳", status: "Live",        link: "https://www.panbandhu.co.in/", logo: "/brand-logos/PAN_Bandhu.png", logoAlt: "Pan Bandhu" },
  { name: "Quickoo Recharge",  category: "Utility",    color: "from-blue-500 to-cyan-500",     desc: "Fast & reliable mobile recharge and bill payment platform.",              icon: "⚡", status: "Live",        link: "https://www.quickoorecharge.co.in/", logo: "/brand-logos/Quickoo_Recharge.png", logoAlt: "Quickoo Recharge" },
  { name: "API Provider",      category: "API Tools",  color: "from-rose-500 to-red-500",       desc: "Robust API solutions for seamless integration into your business.",      icon: "🔌", status: "Live",        link: "/contact?subject=API Provider Inquiry" },
  { name: "Quickoo Mart",      category: "E-Commerce", color: "from-emerald-500 to-teal-500",   desc: "A curated e-commerce experience for everyday essentials.",                icon: "🛍️", status: "Upcoming",    link: "#" },
  { name: "Quickoo Travel",    category: "Booking",    color: "from-orange-500 to-pink-500",    desc: "Seamless travel booking for flights, hotels, and curated experiences.",   icon: "✈️", status: "Ongoing",     link: "#" },
  { name: "Quickoo Assistant", category: "AI Tool",    color: "from-indigo-500 to-purple-500",  desc: "AI-powered personal assistant for productivity & smart automation.",       icon: "🤖", status: "Coming Soon", link: "#" },
];

const stats = [
  { label: "Projects Delivered", value: 200, suffix: "+" },
  { label: "Happy Customers",    value: 2000,suffix: "+" },
  { label: "Team Members",       value: 30,  suffix: "+" },
  { label: "Satisfaction Rate",  value: 99,  suffix: "%" },
];

const process = [
  { step: "01", title: "Discovery",  desc: "Deep-dive into your goals, users, and business strategy.",         icon: "🔍" },
  { step: "02", title: "Design",     desc: "Wireframes, interactive prototypes, and pixel-perfect UI/UX.",     icon: "🎨" },
  { step: "03", title: "Develop",    desc: "Scalable, reviewed, production-ready code shipped fast.",           icon: "⚙️" },
  { step: "04", title: "Launch",     desc: "Deployment, performance monitoring, and ongoing support.",         icon: "🚀" },
];

const techStack = ["React", "Next.js", "React Native", "Node.js", "Python", "TensorFlow", "PostgreSQL", "AWS"];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen relative z-10 overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_100%)]" />

        {/* Animated orbs */}
        <FloatingOrb className="top-16 left-8 w-72 h-72 bg-blue-600/20"   delay={0} />
        <FloatingOrb className="bottom-16 right-8 w-96 h-96 bg-violet-600/15" delay={2.5} />
        <FloatingOrb className="top-1/3 right-1/4 w-48 h-48 bg-cyan-500/10" delay={1.5} />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-20 mx-auto px-4 text-center pt-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/25 rounded-full px-5 py-2 text-sm text-blue-300 font-medium mb-10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
          >
            <span className="block text-white mb-2">We Build</span>
            <span className="animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
              Digital Excellence
            </span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-2xl md:text-3xl font-semibold mb-6 h-10"
          >
            <TypewriterText texts={["Web Platforms", "Mobile Apps", "AI Solutions", "Custom Software", "Stunning UI/UX"]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            End-to-end software, apps, and AI solutions built to scale your business and
            transform your ideas into remarkable digital products.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-50 group-hover:opacity-90 transition-all duration-300" />
              <div className="relative px-9 py-4 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 group-hover:bg-blue-700 transition-colors">
                Get a Quote
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.span>
              </div>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm border border-white/15 hover:border-white/30"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold text-white">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-16 flex flex-col items-center gap-2 text-slate-600 text-xs"
          >
            <span className="tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2.5 rounded-full bg-blue-400/70" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TECH MARQUEE STRIP
      ═══════════════════════════════════════════ */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden relative">
        <div className="flex gap-16 items-center animate-[marquee_25s_linear_infinite]" style={{ width: "max-content" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-slate-600 font-semibold text-sm tracking-widest uppercase whitespace-nowrap flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-blue-500/60 inline-block" />
              {tech}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE ARE
      ═══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                A Studio Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  the Digital Age
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Quickoo Solutions is a modern software agency blending creative design with robust
                engineering and cutting-edge AI to deliver premium digital products — from intuitive
                websites to complex AI agents.
              </p>
              <div className="space-y-4">
                {[
                  "Premium UI/UX crafted with every project",
                  "Agile, transparent, and on-time delivery",
                  "Post-launch support & maintenance included",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                    </div>
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right – 2x2 feature mini cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Zap,       label: "Fast Delivery",   desc: "Sprint-based, on-schedule",    color: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/20" },
                { icon: Award,     label: "Quality First",   desc: "Reviewed & rigorously tested", color: "text-blue-400",    bg: "bg-blue-500/10",    border: "border-blue-500/20"  },
                { icon: Users,     label: "Dedicated Team",  desc: "Experts assigned to you",      color: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/20"},
                { icon: TrendingUp,label: "Scalable",        desc: "Built to grow with you",       color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20"},
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`p-5 rounded-2xl ${item.bg} border ${item.border} backdrop-blur-sm`}
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-3`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                  <div className="font-bold text-white text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════ */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Our Expertise</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive technology services covering the entire product lifecycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <GlowCard glowColor={svc.glow} className="h-full">
                  <div className="p-8 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} bg-opacity-10 flex items-center justify-center text-white mb-6 shadow-lg`}
                    >
                      <svc.icon size={26} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                    <p className="text-slate-400 leading-relaxed flex-1 text-sm">{svc.desc}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        Learn More <ArrowRight size={14} />
                      </div>
                      <Link href={`/contact?subject=Inquiry about ${svc.title}`} className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold hover:bg-blue-500/30 transition-colors z-20 relative" onClick={(e) => e.stopPropagation()}>
                        Inquire
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-sm font-medium"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">Products</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Proprietary digital solutions designed to simplify everyday life.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-white bg-white/5 px-6 py-3 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-sm font-medium"
            >
              Explore All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <TiltCard className="h-full">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 min-h-[280px] flex flex-col justify-between hover:bg-white/[0.07] transition-all duration-300">
                    {/* Glow blob */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${product.color} opacity-[0.12] blur-[60px] group-hover:opacity-[0.25] transition-all duration-700 rounded-full`} />
                    {/* Bottom line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className="flex flex-col gap-4 mb-5">
                        {product.logo ? (
                          <BrandLogo
                            src={product.logo}
                            alt={product.logoAlt ?? product.name}
                            wrapperClassName="w-[160px] h-11"
                          />
                        ) : (
                          <motion.span
                            whileHover={{ rotate: [0, -15, 15, 0] }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl block"
                          >
                            {product.icon}
                          </motion.span>
                        )}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            {product.category}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                            product.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 
                            product.status === 'Upcoming' || product.status === 'Coming Soon' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/20' :
                            'bg-blue-500/20 text-blue-400 border border-blue-500/20'
                          }`}>
                            {product.status}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{product.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{product.desc}</p>
                    </div>

                    <div className="relative z-10 mt-8 flex items-center justify-between">
                      {product.link !== '#' ? (
                        <Link href={product.link} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-4 transition-all duration-300">
                          Visit Site <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-4 transition-all duration-300">
                          Learn More <ArrowRight size={14} />
                        </div>
                      )}
                      
                      <Link href={`/contact?subject=Inquiry about ${product.name}`} className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors z-20 relative" onClick={(e) => e.stopPropagation()}>
                        Inquire
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW WE WORK
      ═══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">How We Work</h2>
            <p className="text-slate-400 text-lg">A streamlined approach to bring your vision to life.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting animated line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="h-full origin-left bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-blue-500/30"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {process.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-5 group-hover:border-blue-500/40 group-hover:bg-white/10 transition-all shadow-lg"
                  >
                    {p.icon}
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-[10px] font-black flex items-center justify-center shadow-lg">
                      {idx + 1}
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated rotating rings */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/15 to-indigo-900/20" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-violet-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-cyan-500/10 rounded-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-6 block">Ready to Start?</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Build Your Next{" "}
              <span className="animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                Digital Product
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with Quickoo Solutions for guaranteed excellence in software, design, and AI.
              Let&apos;s turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Primary CTA */}
              <Link href="/contact" className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-lg group-hover:bg-blue-50 transition-colors">
                  Start a Project
                </div>
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 rounded-full bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-all border border-white/15 hover:border-white/30"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
