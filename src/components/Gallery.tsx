"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Sparkles } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

const cards = [
  { id: 1,  label: "French Ombre",     tag: "Ombre",      bg: "from-pink-950 via-rose-900 to-pink-950",           emoji: "💅" },
  { id: 2,  label: "Chrome Set",       tag: "Chrome",     bg: "from-slate-900 via-purple-950 to-pink-950",         emoji: "✨" },
  { id: 3,  label: "Butterfly Art",    tag: "Nail Art",   bg: "from-pink-900 via-fuchsia-950 to-purple-950",       emoji: "🦋" },
  { id: 4,  label: "Floral Design",    tag: "Nail Art",   bg: "from-rose-950 via-pink-900 to-rose-950",            emoji: "🌸" },
  { id: 5,  label: "Crystal Gems",     tag: "3D Art",     bg: "from-indigo-950 via-purple-900 to-pink-950",        emoji: "💎" },
  { id: 6,  label: "Glitter Tips",     tag: "Glitter",    bg: "from-pink-950 via-fuchsia-900 to-pink-950",         emoji: "🌟" },
  { id: 7,  label: "Nude & Gold",      tag: "Minimalist", bg: "from-amber-950 via-yellow-950 to-pink-950",         emoji: "👑" },
  { id: 8,  label: "Black Lace",       tag: "Nail Art",   bg: "from-zinc-950 via-slate-900 to-purple-950",         emoji: "🖤" },
  { id: 9,  label: "Pastel Dream",     tag: "Pastel",     bg: "from-pink-900 via-rose-800 to-fuchsia-950",         emoji: "🎀" },
  { id: 10, label: "Marble Effect",    tag: "Abstract",   bg: "from-slate-900 via-zinc-800 to-pink-950",           emoji: "🌀" },
];

const row1 = cards.slice(0, 5);
const row2 = cards.slice(5, 10);

const CARD_GAP = 14;

function useCardSize() {
  const [size, setSize] = useState({ w: 260, h: 320 });
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 480) setSize({ w: 200, h: 280 });
      else if (w < 768) setSize({ w: 230, h: 300 });
      else setSize({ w: 260, h: 320 });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

function CarouselRow({
  items,
  inView,
  rowOffset = 0,
  cardW,
  cardH,
}: {
  items: typeof cards;
  inView: boolean;
  rowOffset?: number;
  cardW: number;
  cardH: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 380, damping: 38 });
  const [isDragging, setIsDragging] = useState(false);

  const getConstraints = useCallback(() => {
    if (!trackRef.current) return { left: 0, right: 0 };
    const totalWidth = items.length * (cardW + CARD_GAP) - CARD_GAP;
    const visibleWidth = trackRef.current.offsetWidth;
    return { left: -(totalWidth - visibleWidth), right: 0 };
  }, [items.length, cardW]);

  return (
    <div
      ref={trackRef}
      className="relative overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ touchAction: "pan-y" }}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#080608] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#080608] to-transparent" />

      <motion.div
        drag="x"
        dragConstraints={getConstraints()}
        dragElastic={0.07}
        style={{ x: springX }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onPointerUp={() => {
          const currentX = x.get();
          const snapped = Math.round(currentX / (cardW + CARD_GAP)) * (cardW + CARD_GAP);
          const constraints = getConstraints();
          const clamped = Math.max(constraints.left, Math.min(0, snapped));
          animate(x, clamped, { type: "spring", stiffness: 380, damping: 38 });
        }}
        className="flex gap-[14px] pl-6 pr-6 select-none"
      >
        {items.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: rowOffset + i * 0.06, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/5 group"
            style={{ width: cardW, height: cardH }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bg}`} />

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: "radial-gradient(ellipse at center, rgba(240,53,107,0.13), transparent 70%)",
                transition: "opacity 300ms ease-out",
              }}
            />

            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="self-start px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                <span className="text-white/60 text-xs tracking-widest uppercase">{card.tag}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span
                  className="text-5xl"
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
                    className="text-white/90 font-medium"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.1rem" }}
                  >
                    {card.label}
                  </p>
                  <p className="text-white/30 text-[10px] mt-0.5 tracking-widest uppercase">
                    Replace with your photo
                  </p>
                </div>
              </div>
            </div>

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
  );
}

export default function Gallery() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });
  const { w: CARD_W, h: CARD_H } = useCardSize();

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(155,89,182,0.05),transparent)]" />

      {/* Header */}
      <div ref={headerRef} className="max-w-6xl mx-auto px-6 mb-10">
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

      {/* Two-row carousel */}
      <div className="flex flex-col gap-3">
        <CarouselRow items={row1} inView={inView} rowOffset={0} cardW={CARD_W} cardH={CARD_H} />
        <CarouselRow items={row2} inView={inView} rowOffset={0.15} cardW={CARD_W} cardH={CARD_H} />
      </div>

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
