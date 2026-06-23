"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";

const ALL_PHOTOS = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  img: `/${i + 1}.jpeg`,
}));

const row1 = ALL_PHOTOS.slice(0, 29);
const row2 = ALL_PHOTOS.slice(29, 57);

const CARD_GAP = 14;

function useCardSize() {
  const [size, setSize] = useState({ w: 220, h: 280 });
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 480) setSize({ w: 160, h: 220 });
      else if (w < 768) setSize({ w: 190, h: 250 });
      else setSize({ w: 220, h: 280 });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: typeof ALL_PHOTOS;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 sm:left-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-[90vw] h-[85vh] max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photos[index].img}
          alt={`Photo ${photos[index].id}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </motion.div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
        {index + 1} / {photos.length}
      </div>

      {/* Next */}
      <button
        className="absolute right-3 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

function CarouselRow({
  items,
  inView,
  rowOffset = 0,
  cardW,
  cardH,
  onCardClick,
}: {
  items: typeof ALL_PHOTOS;
  inView: boolean;
  rowOffset?: number;
  cardW: number;
  cardH: number;
  onCardClick: (id: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 380, damping: 38 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

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
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#080608] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#080608] to-transparent" />

      <motion.div
        drag="x"
        dragConstraints={getConstraints()}
        dragElastic={0.07}
        style={{ x: springX }}
        onDragStart={(_, info) => {
          setIsDragging(true);
          dragStartX.current = info.point.x;
        }}
        onDragEnd={() => {
          setIsDragging(false);
          const currentX = x.get();
          const snapped = Math.round(currentX / (cardW + CARD_GAP)) * (cardW + CARD_GAP);
          const constraints = getConstraints();
          const clamped = Math.max(constraints.left, Math.min(0, snapped));
          animate(x, clamped, { type: "spring", stiffness: 380, damping: 38 });
        }}
        className="flex gap-[14px] pl-6 pr-6 select-none"
      >
        {items.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: rowOffset + i * 0.03, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/5 group cursor-pointer"
            style={{ width: cardW, height: cardH }}
            onClick={() => {
              if (!isDragging) onCardClick(photo.id - 1);
            }}
          >
            <Image
              src={photo.img}
              alt={`Nail set ${photo.id}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={`${cardW}px`}
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length)),
  []);
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % ALL_PHOTOS.length)),
  []);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(155,89,182,0.05),transparent)]" />

      <div ref={headerRef} className="w-full px-6 sm:px-10 lg:px-16 mb-10">
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
            Drag to explore · Tap any photo to view it full size.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-3">
        <CarouselRow items={row1} inView={inView} rowOffset={0}    cardW={CARD_W} cardH={CARD_H} onCardClick={openLightbox} />
        <CarouselRow items={row2} inView={inView} rowOffset={0.15} cardW={CARD_W} cardH={CARD_H} onCardClick={(i) => openLightbox(i + 29)} />
      </div>

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

      {lightboxIndex !== null && (
        <Lightbox
          photos={ALL_PHOTOS}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  );
}
