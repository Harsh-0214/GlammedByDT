"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Soft radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(240,53,107,0.16),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_75%,rgba(155,89,182,0.09),transparent)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full bg-pink-500/8 blur-[100px] float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/8 blur-[80px] float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/25 bg-pink-500/8 text-pink-300 text-sm tracking-widest uppercase mb-10"
          style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
        >
          <Sparkles className="w-3 h-3" />
          Nail Artistry &amp; Glam
          <Sparkles className="w-3 h-3" />
        </motion.div>

        {/* Main heading — Cormorant Garamond */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display leading-[0.88] mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 13vw, 9rem)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          <span className="text-white italic">Glammed</span>
          <br />
          <span className="shimmer-text font-display" style={{ fontStyle: "normal", fontWeight: 600 }}>
            By DT
          </span>
        </motion.h1>

        {/* Decorative rule */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-500/50" />
          <span className="text-pink-400/60 text-lg">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/45 text-base md:text-lg max-w-md mx-auto leading-loose mb-12 tracking-wide"
        >
          Premium nail artistry that turns your fingertips into masterpieces.
          Because every detail deserves to sparkle.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-9 py-4 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/40 glow-pink"
            style={{ letterSpacing: "0.12em" }}
          >
            Book Appointment
          </a>
          <a
            href="https://www.instagram.com/glammedbydt_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-9 py-4 rounded-full border border-white/10 hover:border-pink-500/40 text-white/60 hover:text-white text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/[0.03]"
            style={{ letterSpacing: "0.12em" }}
          >
            <InstagramIcon className="w-4 h-4" />
            Instagram
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex items-center justify-center gap-14"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "100%", label: "Handcrafted" },
            { value: "5★",   label: "Rated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-gradient font-display"
                style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600 }}
              >
                {stat.value}
              </div>
              <div className="text-white/35 text-[10px] mt-1 tracking-[0.18em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}
