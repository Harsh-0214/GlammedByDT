"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, MessageCircle, MapPin, Clock } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,45,120,0.1),transparent)]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium tracking-wide uppercase">
              Contact
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 300, letterSpacing: "-0.01em" }}>
            Ready to Get{" "}
            <span className="text-gradient">Glammed?</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Reach out to book your next appointment. DMs are always open — let&apos;s
            create something beautiful together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {[
              {
                icon: InstagramIcon,
                title: "Instagram",
                value: "@glammedbydt_",
                sub: "DM to book or enquire",
                href: "https://www.instagram.com/glammedbydt_",
                cta: "Open Instagram",
              },
              {
                icon: MessageCircle,
                title: "Quick Booking",
                value: "Slide into my DMs",
                sub: "Fast response guaranteed",
                href: "https://www.instagram.com/glammedbydt_",
                cta: "Message Now",
              },
              {
                icon: Clock,
                title: "Availability",
                value: "Flexible scheduling",
                sub: "Weekdays & weekends",
                href: null,
                cta: null,
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Based in Toronto",
                sub: "Home studio — clean & cozy",
                href: null,
                cta: null,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-pink-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                  <div className="text-white/30 text-xs mt-0.5">{item.sub}</div>
                </div>
                {item.href && item.cta && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 text-xs font-medium hover:text-pink-300 transition-colors whitespace-nowrap"
                  >
                    {item.cta} →
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="h-full p-8 rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent flex flex-col justify-center items-center text-center">
              {/* Decorative sparkles */}
              <div className="text-5xl mb-6">💅✨</div>

              <h3 className="text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.1 }}>
                Your Dream Nails
                <br />
                <em className="text-gradient not-italic" style={{ fontWeight: 600 }}>Await</em>
              </h3>

              <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
                Don&apos;t wait — slots fill up fast. Send a DM on Instagram with your
                inspo pics and we&apos;ll find the perfect time for you.
              </p>

              <a
                href="https://www.instagram.com/glammedbydt_"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-pink-500 text-white font-semibold glow-pink mb-4"
                style={{ transition: "background-color 150ms ease-out, box-shadow 150ms ease-out", minHeight: "44px" }}
              >
                <InstagramIcon className="w-5 h-5" />
                Book via Instagram
              </a>

              <p className="text-white/20 text-xs">
                @glammedbydt_ · Usually responds within 24hrs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
