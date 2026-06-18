"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const links = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      style={{ transition: "background-color 400ms ease-out, border-color 400ms ease-out" }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" aria-label="GlammedByDT — back to top">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-pink-500/40 group-hover:ring-pink-400/70 relative flex-shrink-0" style={{ transition: "box-shadow 200ms ease-out" }}>
            <Image
              src="/logo.jpeg"
              alt="GlammedByDT logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden sm:flex flex-col items-end leading-none gap-0">
            <span
              className="text-white"
              style={{ fontFamily: "var(--font-logo)", fontSize: "1.35rem", letterSpacing: "0.05em" }}
            >
              GLAMMED
            </span>
            <span
              className="text-gradient italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", marginTop: "-1px" }}
            >
              by DT
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 text-sm font-medium tracking-wide relative group"
              style={{ transition: "color 200ms ease-out" }}
            >
              {/* Hover only on pointer devices */}
              <span className="[@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white">
                {link.label}
              </span>
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-pink-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:w-full"
                style={{ transition: "width 250ms var(--ease-out)" }}
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href="#contact"
            className="btn-press px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-medium"
            style={{
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              transition: "background-color 150ms ease-out, box-shadow 150ms ease-out",
            }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle — aria-label for screen readers */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          style={{ minHeight: "44px", minWidth: "44px" }}
        >
          {open
            ? <X className="w-5 h-5" aria-hidden="true" />
            : <Menu className="w-5 h-5" aria-hidden="true" />
          }
        </button>
      </div>

      {/* Mobile Menu — ease-out enter, faster exit */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", transition: { duration: 0.28, ease: EASE } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.2, ease: EASE } }}
                  className="text-white/70 text-base font-medium"
                  style={{ transition: "color 150ms ease-out", minHeight: "44px", display: "flex", alignItems: "center" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-press mt-2 px-5 py-3 rounded-full bg-pink-500 text-white text-sm font-medium text-center"
                style={{ minHeight: "44px" }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
