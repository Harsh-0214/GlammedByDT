"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

// Placeholder gallery items – will be replaced with real Instagram photos
const placeholders = [
  { id: 1, emoji: "💅", label: "French Ombre", color: "from-pink-900/60 to-rose-900/40", size: "large" },
  { id: 2, emoji: "✨", label: "Chrome Set", color: "from-purple-900/60 to-pink-900/40", size: "small" },
  { id: 3, emoji: "🦋", label: "Butterfly Art", color: "from-pink-800/60 to-purple-800/40", size: "small" },
  { id: 4, emoji: "🌸", label: "Floral Design", color: "from-rose-900/60 to-pink-900/40", size: "small" },
  { id: 5, emoji: "💎", label: "Crystal Gems", color: "from-indigo-900/60 to-pink-900/40", size: "small" },
  { id: 6, emoji: "🌟", label: "Glitter Tips", color: "from-pink-900/60 to-fuchsia-900/40", size: "large" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(155,89,182,0.06),transparent)]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium tracking-wide uppercase">
              Gallery
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-gradient">Work</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Each set tells a story. Browse some of my favourite creations and get
            inspired for your next appointment.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-500
                ${item.size === "large" ? "row-span-2" : ""}
              `}
            >
              <div
                className={`w-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center cursor-pointer
                  ${item.size === "large" ? "h-80 md:h-[28rem]" : "h-40 md:h-52"}
                `}
              >
                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors duration-300">
                  {item.label}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-60 transition-all duration-300 scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/glammedbydt_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-pink-500/50 text-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
          >
            <InstagramIcon className="w-5 h-5 text-pink-400" />
            <span className="font-medium">See More on Instagram</span>
            <span className="text-pink-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
