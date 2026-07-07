"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Aaliyah M.",
    handle: "@aaliyah.marie",
    text: "DT is genuinely the best nail tech I've ever been to. My sets always last 3+ weeks and the designs are literally art. Will never go anywhere else 💕",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Jordan K.",
    handle: "@jordan.kaur",
    text: "Got the most stunning chrome ombre for my birthday and I got SO many compliments. She listened to exactly what I wanted and delivered 10x better!",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Priya T.",
    handle: "@priya.thind",
    text: "The attention to detail is unreal. Every nail is perfect, symmetrical, and the polish lasts forever. Booking her was the best decision ✨",
    rating: 5,
    avatar: "P",
  },
  {
    name: "Simone R.",
    handle: "@simone.rae",
    text: "I came in with a Pinterest pic thinking it was too complicated — she did it better than the original. Absolutely obsessed with my set every single time 🤩",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Fatima A.",
    handle: "@fatima.ahmed",
    text: "DT is so talented and makes you feel so comfortable the whole time. My nails have never looked this good. Already booked my next appointment!",
    rating: 5,
    avatar: "F",
  },
  {
    name: "Chloe W.",
    handle: "@chloe.wilson",
    text: "Been going to DT for over a year now and I will never switch. She's fast, precise, and the designs are always better than I imagined. 10/10 every time 💗",
    rating: 5,
    avatar: "C",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(255,45,120,0.05),transparent)]" />

      <div ref={ref} className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium tracking-wide uppercase">
              Reviews
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 300, letterSpacing: "-0.01em" }}>
            What Clients{" "}
            <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-pink-500/20 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-pink-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.handle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
