"use client";

import { Sparkles } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="flex flex-col items-end leading-none gap-0">
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
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["About", "Services", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/30 hover:text-white/70 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <a
            href="https://www.instagram.com/glammedbydt_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-pink-400 transition-colors text-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            @glammedbydt_
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-3 text-white/20 text-xs">
          <span>© {new Date().getFullYear()} GlammedByDT. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <span className="text-pink-400">♥</span> for Diya Tamakuwala
          </span>
        </div>
      </div>
    </footer>
  );
}
