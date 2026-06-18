"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const COLORS = ["#ff2d78", "#ff6fa8", "#ffffff", "#ffb3d1", "#ff91bb"];

function SparkleIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      style={{ filter: `drop-shadow(0 0 3px ${color})`, willChange: "transform" }}
    >
      <path d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z" />
    </svg>
  );
}

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate once — CSS animation handles the sparkle loop, no JS interval needed
    setSparkles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        delay: Math.random() * 4,
        duration: Math.random() * 2 + 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {sparkles.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            willChange: "opacity, transform",
          }}
        >
          <SparkleIcon size={s.size} color={s.color} />
        </div>
      ))}
    </div>
  );
}
