"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const services = [
  {
    emoji: "✨",
    name: "Custom Nail Art",
    description:
      "One-of-a-kind designs tailored to your style — florals, gems, chrome, ombre, and beyond.",
    price: "From $65",
    popular: true,
    gradient: "from-pink-500/20 to-purple-500/10",
  },
  {
    emoji: "💎",
    name: "Acrylic Extensions",
    description:
      "Strong, beautiful extensions with a flawless finish. Perfect length and shape every time.",
    price: "From $75",
    popular: false,
    gradient: "from-pink-500/10 to-pink-500/20",
  },
  {
    emoji: "🌸",
    name: "Gel Manicure",
    description:
      "Long-lasting gel polish that stays chip-free for weeks, with a glossy salon finish.",
    price: "From $45",
    popular: false,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    emoji: "🦋",
    name: "Nail Prep & Fill",
    description:
      "Maintain your set with a professional fill and clean-up. Keep those nails looking fresh.",
    price: "From $55",
    popular: false,
    gradient: "from-pink-500/15 to-rose-500/10",
  },
  {
    emoji: "👑",
    name: "Full Set with Design",
    description:
      "Complete transformation — full set of acrylics or gel with your choice of custom art.",
    price: "From $90",
    popular: false,
    gradient: "from-amber-500/10 to-pink-500/15",
  },
  {
    emoji: "🌟",
    name: "Spa Manicure",
    description:
      "The ultimate nail pampering experience with exfoliation, massage, and polish.",
    price: "From $55",
    popular: false,
    gradient: "from-pink-400/10 to-purple-400/10",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-16 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,45,120,0.05),transparent)]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium tracking-wide uppercase">
              Services
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 300, letterSpacing: "-0.01em" }}>
            Choose Your{" "}
            <span className="text-gradient">Glam</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Every service is delivered with care, precision, and that extra touch
            of luxury you deserve.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative group p-6 rounded-2xl border cursor-default
                ${service.popular
                  ? "border-pink-500/50 bg-gradient-to-br from-pink-500/15 to-purple-500/10"
                  : "border-white/5 bg-white/[0.02]"
                }`}
              style={{ transition: "border-color 200ms ease-out, background-color 200ms ease-out" }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-pink-500 text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-3xl mb-4">{service.emoji}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 font-bold">{service.price}</span>
                <a
                  href="#contact"
                  className="text-xs text-white/30 font-medium"
                  style={{ transition: "color 150ms ease-out" }}
                >
                  Book →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          Prices vary by design complexity. DM for a custom quote. 💕
        </motion.p>
      </div>
    </section>
  );
}
