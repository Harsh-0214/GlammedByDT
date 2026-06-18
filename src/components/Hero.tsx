"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.75, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-6 pt-24">
      {/* Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(240,53,107,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_75%,rgba(155,89,182,0.09),transparent)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-[20%] w-80 h-80 rounded-full bg-pink-500/[0.08] blur-[100px] anim-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/[0.08] blur-[80px] anim-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Logo mark */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-6"
        >
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden ring-2 ring-pink-500/50 shadow-2xl shadow-pink-500/20 anim-float-slow">
            <Image
              src="/logo.jpeg"
              alt="GlammedByDT"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Bebas Neue heading matching the logo */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 inline-flex flex-col items-end"
        >
          <span
            className="text-white leading-none"
            style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(5rem, 16vw, 12rem)", letterSpacing: "0.05em" }}
          >
            GLAMMED
          </span>
          <span
            className="shimmer-text italic leading-none"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.22em", fontSize: "clamp(1.1rem, 3vw, 2.4rem)", marginTop: "-0.15em" }}
          >
            by DT
          </span>
        </motion.h1>

        {/* Cormorant italic subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/40 italic mb-6"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.2vw, 1.5rem)", fontWeight: 300 }}
        >
          Nail Artistry &amp; Glam
        </motion.p>

        {/* Decorative rule */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-8"
          aria-hidden="true"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-500/40" />
          <span className="text-pink-400/50">✦</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-500/40" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/40 text-base max-w-sm mx-auto leading-loose mb-8 sm:mb-12"
        >
          Premium nail artistry that turns your fingertips into masterpieces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-press px-9 py-4 rounded-full bg-pink-500 text-white font-medium text-sm uppercase glow-pink"
            style={{ letterSpacing: "0.12em", minHeight: "44px" }}
          >
            Book Appointment
          </a>
          <a
            href="https://www.instagram.com/glammedbydt_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press flex items-center gap-2.5 px-9 py-4 rounded-full border border-white/10 text-white/60 text-sm uppercase"
            style={{ letterSpacing: "0.12em", minHeight: "44px", transition: "color 150ms ease-out, border-color 150ms ease-out" }}
          >
            <InstagramIcon className="w-4 h-4" aria-hidden="true" />
            Instagram
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-14"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "100%", label: "Handcrafted" },
            { value: "5★",   label: "Rated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-gradient"
                style={{ fontFamily: "var(--font-logo)", fontSize: "2.2rem", letterSpacing: "0.04em" }}
              >
                {stat.value}
              </div>
              <div className="text-white/30 text-[10px] mt-1 tracking-[0.18em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}
