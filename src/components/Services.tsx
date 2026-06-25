"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const lengths = [
  { name: "Short", price: "$45" },
  { name: "Medium", price: "$50" },
  { name: "Long", price: "$55" },
  { name: "XL", price: "$60" },
];

const addOns = [
  { name: "French", price: "+$1.50/nail" },
  { name: "Ombre + Encapsulation", price: "+$2.00/nail" },
  { name: "Airbrush", price: "+$1.50/nail" },
  { name: "Drawn Flower", price: "+$1–3/nail" },
  { name: "Sculpted Flower", price: "+$3–5/nail" },
  { name: "Glitter", price: "+$1.00/nail" },
  { name: "Cat Eye", price: "+$1.50/nail" },
  { name: "V Cut", price: "+$1.50/nail" },
  { name: "Rhinestone", price: "+$0.25 each" },
  { name: "Charm", price: "+$3.00 each" },
  { name: "Chrome (whole nail)", price: "+$1.50/nail" },
  { name: "Chrome Design", price: "+$2.50/nail" },
  { name: "Marble", price: "+$1.50/nail" },
  { name: "Gold Flake", price: "+$1.50/nail" },
];

const policies = [
  { label: "Squeeze-In Fee", value: "+$10" },
  { label: "Late Fee (after 15 min)", value: "+$15" },
  { label: "Refills", value: "$5 off your total" },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-16 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,45,120,0.05),transparent)]" />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
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
              Services & Pricing
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem,4.5vw,3.4rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Choose Your{" "}
            <span className="text-gradient">Glam</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Every service is delivered with care, precision, and that extra touch of luxury you deserve.
          </p>
        </motion.div>

        {/* Overlay + Lengths */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">✨</span>
              <h3 className="text-white font-semibold text-lg">Overlay</h3>
              <span className="ml-auto text-xs text-white/40">starting at $45</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {lengths.map((len) => (
                <div
                  key={len.name}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-4 text-center"
                >
                  <p className="text-white/60 text-xs mb-1">{len.name}</p>
                  <p className="text-pink-400 font-bold text-lg">{len.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Removals */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🪄</span>
              <h3 className="text-white font-semibold text-lg">Removals</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4 flex items-center justify-between">
                <p className="text-white/70 text-sm">My Work</p>
                <p className="text-pink-400 font-bold">$15</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4 flex items-center justify-between">
                <p className="text-white/70 text-sm">Foreign Nails</p>
                <p className="text-pink-400 font-bold">$20</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add-Ons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">💅</span>
              <h3 className="text-white font-semibold text-lg">Add-Ons</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {addOns.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-white/6 bg-white/[0.02] px-3 py-3 flex items-center justify-between gap-2"
                >
                  <p className="text-white/60 text-xs">{item.name}</p>
                  <p className="text-pink-400 font-semibold text-xs whitespace-nowrap">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Policies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">📋</span>
              <h3 className="text-white font-semibold text-lg">Policies & Fees</h3>
            </div>
            <div className="flex flex-col gap-2">
              {policies.map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3 flex items-center justify-between"
                >
                  <p className="text-white/60 text-sm">{p.label}</p>
                  <p className="text-pink-400 font-semibold text-sm">{p.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-white/30 text-sm"
        >
          Prices may vary based on design complexity. DM for a custom quote. 💕
        </motion.p>
      </div>
    </section>
  );
}
