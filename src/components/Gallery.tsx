"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Sparkles } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

const cards = [
  { id: 1,  label: "French Ombre",     tag: "Ombre",     bg: "from-pink-950 via-rose-900 to-pink-950",           emoji: "💅" },
  { id: 2,  label: "Chrome Set",       tag: "Chrome",    bg: "from-slate-900 via-purple-950 to-pink-950",         emoji: "✨" },
  { id: 3,  label: "Butterfly Art",    tag: "Nail Art",  bg: "from-pink-900 via-fuchsia-950 to-purple-950",       emoji: "🦋" },
  { id: 4,  label: "Floral Design",    tag: "Nail Art",  bg: "from-rose-950 via-pink-900 to-rose-950",            emoji: "🌸" },
  { id: 5,  label: "Crystal Gems",     tag: "3D Art",    bg: "from-indigo-950 via-purple-900 to-pink-950",        emoji: "💎" },
  { id: 6,  label: "Glitter Tips",     tag: "Glitter",   bg: "from-pink-950 via-fuchsia-900 to-pink-950",         emoji: "🌟" },
  { id: 7,  label: "Nude & Gold",      tag: "Minimalist",bg: "from-amber-950 via-yellow-950 to-pink-950",         emoji: "👑" },
  { id: 8,  label: "Black Lace",       tag: "Nail Art",  bg: "from-zinc-950 via-slate-900 to-purple-950",         emoji: "🖤" },
  { id: 9,  label: "Pastel Dream",     tag: "Pastel",    bg: "from-pink-900 via-rose-800 to-fuchsia-950",         emoji: "🎀" },
  { id: 10, label: "Marble Effect",    tag: "Abstract",  bg: "from-slate-900 via-zinc-800 to-pink-950",           emoji: "🌀" },
];

const CARD_W = 280;
const CARD_GAP = 16;

export default function Gallery() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });

  const [isDragging, setIsDragging] = useState(false);

  function getConstraints() {
    if (!trackRef.current) return { left: 0, right: 0 };
    const totalWidth = cards.length * (CARD_W + CARD_GAP) - CARD_GAP;
    const visibleWidth = trackRef.current.offsetWidth;
    return { left: -(totalWidth - visibleWidth), right: 0 };
  }

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(155,89,182,0.05),transparent)]" />

      {/* Header — contained */}
      <div ref={headerRef} className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-pink-400 text-xs font-medium tracking-[0.2em] uppercase">Gallery</span>
            <Sparkles className="w-4 h-4 text-pink-400" aria-hidden="true" />
          </div>
          <h2
            className="text-white mb-3"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 300, letterSpacing: "-0.01em" }}
          >
            The <span className="text-gradient">Work</span>
          </h2>
          <p className="text-white/35 text-sm max-w-sm mx-auto">
            Drag to explore. Each set is handcrafted just for you.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed carousel track */}
      <div
        ref={trackRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
      >
        {/* Edge fade — left */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#080608] to-transparent" />
        {/* Edge fade — right */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#080608] to-transparent" />

        <motion.div
          drag="x"
          dragConstraints={getConstraints()}
          dragElastic={0.08}
          style={{ x: springX }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex gap-4 pl-6 pr-6 select-none"
          /* Snap to nearest card on release */
          onPointerUp={() => {
            const currentX = x.get();
            const snapped = Math.round(currentX / (CARD_W + CARD_GAP)) * (CARD_W + CARD_GAP);
            const constraints = getConstraints();
            const clamped = Math.max(constraints.left, Math.min(0, snapped));
            animate(x, clamped, { type: "spring", stiffness: 400, damping: 40 });
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/5 group"
              style={{ width: CARD_W, height: 380 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bg}`} />

              {/* Pink shimmer overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(240,53,107,0.12), transparent 70%)",
                  transition: "opacity 300ms ease-out",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Tag */}
                <div className="self-start px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                  <span className="text-white/60 text-xs tracking-widest uppercase">{card.tag}</span>
                </div>

                {/* Emoji — scales on hover */}
                <div className="flex flex-col items-center gap-3">
                  <span
                    className="text-6xl"
                    style={{
                      display: "block",
                      transition: "transform 300ms ease-out",
                      transform: isDragging ? "scale(1)" : undefined,
                    }}
                  >
                    {card.emoji}
                  </span>
                  <div className="text-center">
                    <p
                      className="text-white/90 font-medium text-base"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.2rem" }}
                    >
                      {card.label}
                    </p>
                    <p className="text-white/30 text-xs mt-1 tracking-widest uppercase">
                      Replace with your photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(240,53,107,0.3)",
                  transition: "opacity 250ms ease-out",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Drag hint dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-1.5 mt-8 px-6"
        aria-hidden="true"
      >
        {cards.map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-white/20"
          />
        ))}
      </motion.div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center mt-10 px-6"
      >
        <a
          href="https://www.instagram.com/glammedbydt_"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white/60 text-sm uppercase"
          style={{ letterSpacing: "0.1em", minHeight: "44px", transition: "color 150ms ease-out, border-color 150ms ease-out" }}
        >
          <InstagramIcon className="w-4 h-4 text-pink-400" aria-hidden="true" />
          See More on Instagram
          <span className="text-pink-400">→</span>
        </a>
      </motion.div>
    </section>
  );
}
