"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const dismiss = () => {
      setFading(true);
      setTimeout(() => setGone(true), 550);
    };

    if (document.readyState === "complete") {
      const t = setTimeout(dismiss, 350);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", () => setTimeout(dismiss, 200), { once: true });
    // Hard cap — never block more than 2s on slow connections
    const cap = setTimeout(dismiss, 2000);
    return () => clearTimeout(cap);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080608",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 550ms cubic-bezier(0.23, 1, 0.32, 1)",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Logo */}
      <div style={{
        position: "relative",
        width: 88,
        height: 88,
        borderRadius: "50%",
        overflow: "hidden",
        marginBottom: "1.1rem",
        boxShadow: "0 0 36px rgba(240,53,107,0.35), 0 0 72px rgba(240,53,107,0.12)",
      }}>
        <Image src="/logo.jpeg" alt="" fill className="object-cover" priority />
      </div>

      {/* Brand lockup */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", lineHeight: 1, marginBottom: "2rem" }}>
        <span style={{
          fontFamily: "var(--font-logo)",
          fontSize: "2.8rem",
          letterSpacing: "0.05em",
          color: "white",
          textShadow: "0 0 24px rgba(240,53,107,0.5)",
        }}>
          GLAMMED
        </span>
        <span className="text-gradient" style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "0.82rem",
          letterSpacing: "0.28em",
          marginTop: "-2px",
        }}>
          by DT
        </span>
      </div>

      {/* Loading bar */}
      <div style={{ width: 110, height: 1, background: "rgba(255,255,255,0.08)", borderRadius: 1, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #f0356b, #ff6fa8, #f0356b)",
          backgroundSize: "200% 100%",
          borderRadius: 1,
          animation: "loading-bar 1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        }} />
      </div>
    </div>
  );
}
