"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Star } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,45,120,0.06),transparent)]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Image placeholder with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gradient-border">
              <Image
                src="/11.jpeg"
                alt="GlammedByDT nail art"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-black border border-pink-500/30 rounded-2xl px-5 py-4 shadow-2xl shadow-pink-500/10"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Passion Driven</div>
                  <div className="text-white/40 text-xs">Every Set a Masterpiece</div>
                </div>
              </div>
            </motion.div>

            {/* Stars badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-pink-500/90 rounded-xl px-3 py-2 shadow-lg"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-white" fill="white" />
                ))}
              </div>
              <div className="text-white/90 text-xs mt-0.5 font-medium">5.0 Rating</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 text-sm font-medium tracking-wide uppercase">
                About Me
              </span>
            </div>

            <h2
              className="text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 300, letterSpacing: "-0.01em" }}
            >
              Art You Can Wear on{" "}
              <em className="text-gradient not-italic" style={{ fontWeight: 600 }}>Your Fingertips</em>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-6">
              Hi, I&apos;m DT — a passionate nail technician dedicated to creating
              stunning, long-lasting nail art that expresses your unique personality.
              From minimalist chic to bold statement sets, I bring your vision to life
              with precision and love.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-10">
              Every client walks out feeling confident, glamorous, and ready to
              show off their set. Follow my work on Instagram for daily inspo and
              see why clients keep coming back for more.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { icon: "✨", label: "Nail Art", sub: "Custom designs" },
                { icon: "💎", label: "Extensions", sub: "Acrylic & gel" },
                { icon: "🌸", label: "Nail Care", sub: "Manicures" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-pink-500/30 transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white text-sm font-semibold">{item.label}</div>
                  <div className="text-white/30 text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
