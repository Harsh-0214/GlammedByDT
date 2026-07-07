"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const lengths = [
  { name: "Short", price: "$45" },
  { name: "Medium", price: "$50" },
  { name: "Long", price: "$55" },
  { name: "XL", price: "$60" },
];

const addOns = [
  { name: "French", price: "+$1.50" },
  { name: "Ombre + Encapsulation", price: "+$2.00" },
  { name: "Airbrush", price: "+$1.50" },
  { name: "Drawn Flower", price: "+$1–3" },
  { name: "Sculpted Flower", price: "+$3–5" },
  { name: "Glitter", price: "+$1.00" },
  { name: "Cat Eye", price: "+$1.50" },
  { name: "V Cut", price: "+$1.50" },
  { name: "Rhinestone", price: "+$0.25" },
  { name: "Charm", price: "+$3.00" },
  { name: "Chrome (whole nail)", price: "+$1.50" },
  { name: "Chrome Design", price: "+$2.50" },
  { name: "Marble", price: "+$1.50" },
  { name: "Gold Flake", price: "+$1.50" },
];

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-500/20" />
      <span className="text-pink-500/40 text-xs">✦</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-500/20" />
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-16 md:py-32 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(240,53,107,0.05),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/[0.05] blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-pink-400 text-xs font-medium tracking-[0.2em] uppercase">
              Services & Pricing
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" aria-hidden="true" />
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Choose Your{" "}
            <span className="text-gradient">Glam</span>
          </h2>
          <p className="text-white/35 text-sm max-w-xs mx-auto leading-relaxed" style={{ letterSpacing: "0.02em" }}>
            Every set is crafted with precision, artistry, and care.
          </p>
        </motion.div>

        {/* ── Overlay ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <div className="gradient-border rounded-2xl p-6 md:p-8">
            {/* Section label */}
            <div className="flex items-baseline justify-between mb-6">
              <h3
                className="text-white/90"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 300, letterSpacing: "0.03em" }}
              >
                Overlay
              </h3>
              <span className="text-white/25 text-xs tracking-widest uppercase">per nail length</span>
            </div>

            {/* Length cards */}
            <div className="grid grid-cols-4 gap-3">
              {lengths.map((len, i) => (
                <motion.div
                  key={len.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.07, ease: EASE }}
                  className="rounded-xl bg-white/[0.03] border border-white/6 py-5 px-2 flex flex-col items-center gap-2 hover:border-pink-500/30 hover:bg-pink-500/[0.04]"
                  style={{ transition: "border-color 200ms ease-out, background-color 200ms ease-out" }}
                >
                  <span
                    className="text-white/40 text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {len.name}
                  </span>
                  <span
                    className="text-gradient leading-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 400 }}
                  >
                    {len.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider />

        {/* ── Removals ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <div className="rounded-2xl border border-white/6 bg-white/[0.015] p-6 md:p-8">
            <h3
              className="text-white/90 mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 300, letterSpacing: "0.03em" }}
            >
              Removals
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "My Work", price: "$15" },
                { label: "Foreign Nails", price: "$20" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/6 bg-white/[0.02] px-5 py-4 flex items-center justify-between hover:border-pink-500/25"
                  style={{ transition: "border-color 200ms ease-out" }}
                >
                  <span className="text-white/50 text-sm">{item.label}</span>
                  <span
                    className="text-pink-400 font-semibold"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400 }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider />

        {/* ── Add-Ons ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
        >
          <div className="rounded-2xl border border-white/6 bg-white/[0.015] p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-6">
              <h3
                className="text-white/90"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 300, letterSpacing: "0.03em" }}
              >
                Add-Ons
              </h3>
              <span className="text-white/25 text-xs tracking-widest uppercase">per nail</span>
            </div>

            <div className="flex flex-col divide-y divide-white/[0.04]">
              {addOns.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.035, ease: EASE }}
                  className="flex items-center justify-between py-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-pink-500/40 group-hover:bg-pink-400/80 flex-shrink-0"
                      style={{ transition: "background-color 150ms ease-out" }}
                    />
                    <span className="text-white/55 text-sm group-hover:text-white/80"
                      style={{ transition: "color 150ms ease-out" }}
                    >
                      {item.name}
                    </span>
                  </div>
                  <span
                    className="text-pink-400/80 group-hover:text-pink-400 font-medium tabular-nums"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", transition: "color 150ms ease-out" }}
                  >
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider />

        {/* ── Policies ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <div className="rounded-2xl border border-white/6 bg-white/[0.015] p-6 md:p-8">
            <h3
              className="text-white/90 mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 300, letterSpacing: "0.03em" }}
            >
              Good to Know
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Squeeze-In Fee", value: "+$10" },
                { label: "Refills", value: "$5 off your total" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-white/6 bg-white/[0.02] px-5 py-4 flex items-center justify-between hover:border-pink-500/25"
                  style={{ transition: "border-color 200ms ease-out" }}
                >
                  <span className="text-white/55 text-sm">{p.label}</span>
                  <span
                    className="text-pink-400/90 font-medium"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400 }}
                  >
                    {p.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider />

        {/* ── Policy ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        >
          <div className="rounded-2xl border border-white/6 bg-white/[0.015] p-6 md:p-8">
            <h3
              className="text-white/90 mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 300, letterSpacing: "0.03em" }}
            >
              Policy
            </h3>
            <div className="flex flex-col gap-5">
              {[
                {
                  label: "Extensions",
                  text: "A $10 deposit is required upon booking. If it isn't sent within 24 hours, I'll unfortunately no longer hold your appointment. The remaining balance can be paid in exact cash or e-transfer.",
                },
                {
                  label: "Cancellations",
                  text: "Please cancel at least 48 hours before your appointment — no fee either way.",
                },
                {
                  label: "Running Late",
                  text: "Let me know if you're running behind. If you arrive more than 25 minutes late, the appointment will be cancelled — no fee.",
                },
              ].map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-white/6 bg-white/[0.02] px-5 py-4 hover:border-pink-500/25"
                  style={{ transition: "border-color 200ms ease-out" }}
                >
                  <span className="text-pink-400/90 text-sm font-semibold tracking-wide uppercase">
                    {p.label}
                  </span>
                  <p className="text-white/50 text-sm leading-relaxed mt-2">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-center text-white/25 text-xs mt-10 tracking-wide"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem" }}
        >
          Prices may vary with design complexity — DM for a custom quote
        </motion.p>
      </div>
    </section>
  );
}
