"use client";

/* Decorative SVG floral elements scattered across the page background.
   Purely visual — pointer-events disabled, z-index 0. */

const Rose = ({ opacity = 0.12, size = 120 }: { opacity?: number; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* Outer petals */}
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#f0356b" transform="rotate(0 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#d42d5e" transform="rotate(45 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#f0356b" transform="rotate(90 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#d42d5e" transform="rotate(135 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#f0356b" transform="rotate(180 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#d42d5e" transform="rotate(225 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#f0356b" transform="rotate(270 60 60)" />
    <ellipse cx="60" cy="30" rx="14" ry="26" fill="#d42d5e" transform="rotate(315 60 60)" />
    {/* Inner petals */}
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#ff6fa8" transform="rotate(22.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#e8457a" transform="rotate(67.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#ff6fa8" transform="rotate(112.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#e8457a" transform="rotate(157.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#ff6fa8" transform="rotate(202.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#e8457a" transform="rotate(247.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#ff6fa8" transform="rotate(292.5 60 60)" />
    <ellipse cx="60" cy="38" rx="9" ry="18" fill="#e8457a" transform="rotate(337.5 60 60)" />
    {/* Centre */}
    <circle cx="60" cy="60" r="10" fill="#ffb3d1" />
    <circle cx="60" cy="60" r="6" fill="#fff0f5" />
  </svg>
);

const Cherry = ({ opacity = 0.1, size = 80 }: { opacity?: number; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* 5-petal cherry blossom */}
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="22"
        rx="11"
        ry="20"
        fill={i % 2 === 0 ? "#ffb3d1" : "#ff91bb"}
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="8" fill="#ffe0ec" />
    {/* Stamens */}
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <line
        key={i}
        x1="50"
        y1="50"
        x2={50 + 10 * Math.cos((a * Math.PI) / 180)}
        y2={50 + 10 * Math.sin((a * Math.PI) / 180)}
        stroke="#f0356b"
        strokeWidth="1"
      />
    ))}
  </svg>
);

const Leaf = ({ opacity = 0.08, size = 60 }: { opacity?: number; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <path
      d="M30 5 C50 10 55 35 30 55 C5 35 10 10 30 5Z"
      fill="#2d1a24"
      stroke="#f0356b"
      strokeWidth="0.5"
    />
    <line x1="30" y1="8" x2="30" y2="52" stroke="#f0356b" strokeWidth="0.4" />
    <line x1="30" y1="20" x2="18" y2="30" stroke="#f0356b" strokeWidth="0.3" />
    <line x1="30" y1="20" x2="42" y2="30" stroke="#f0356b" strokeWidth="0.3" />
    <line x1="30" y1="32" x2="20" y2="40" stroke="#f0356b" strokeWidth="0.3" />
    <line x1="30" y1="32" x2="40" y2="40" stroke="#f0356b" strokeWidth="0.3" />
  </svg>
);

const florals: Array<{
  Component: typeof Rose | typeof Cherry | typeof Leaf;
  top: string;
  left: string;
  size: number;
  opacity: number;
  rotate: number;
  animDelay: string;
  animClass: string;
}> = [
  // Top area
  { Component: Rose,   top: "2%",  left: "3%",  size: 180, opacity: 0.07, rotate: -20, animDelay: "0s",   animClass: "anim-float-slow" },
  { Component: Cherry, top: "5%",  left: "75%", size: 120, opacity: 0.10, rotate: 15,  animDelay: "1s",   animClass: "anim-float" },
  { Component: Cherry, top: "8%",  left: "88%", size: 80,  opacity: 0.07, rotate: -5,  animDelay: "2s",   animClass: "anim-float-slow" },
  { Component: Leaf,   top: "12%", left: "92%", size: 70,  opacity: 0.09, rotate: 40,  animDelay: "0.5s", animClass: "anim-float" },

  // Mid-left
  { Component: Rose,   top: "30%", left: "-2%", size: 140, opacity: 0.06, rotate: 10,  animDelay: "1.5s", animClass: "anim-float-slow" },
  { Component: Cherry, top: "40%", left: "5%",  size: 90,  opacity: 0.09, rotate: -30, animDelay: "0.8s", animClass: "anim-float" },
  { Component: Leaf,   top: "45%", left: "0%",  size: 65,  opacity: 0.08, rotate: 60,  animDelay: "2.5s", animClass: "anim-float-slow" },

  // Mid-right
  { Component: Rose,   top: "38%", left: "94%", size: 160, opacity: 0.07, rotate: -15, animDelay: "2s",   animClass: "anim-float-slow" },
  { Component: Cherry, top: "52%", left: "90%", size: 100, opacity: 0.09, rotate: 20,  animDelay: "1.2s", animClass: "anim-float" },
  { Component: Leaf,   top: "60%", left: "96%", size: 55,  opacity: 0.07, rotate: -45, animDelay: "0.3s", animClass: "anim-float-slow" },

  // Lower area
  { Component: Cherry, top: "70%", left: "2%",  size: 110, opacity: 0.08, rotate: 5,   animDelay: "1.8s", animClass: "anim-float" },
  { Component: Rose,   top: "78%", left: "85%", size: 150, opacity: 0.06, rotate: 25,  animDelay: "0.6s", animClass: "anim-float-slow" },
  { Component: Leaf,   top: "82%", left: "10%", size: 70,  opacity: 0.08, rotate: -20, animDelay: "1.4s", animClass: "anim-float" },
  { Component: Cherry, top: "88%", left: "60%", size: 85,  opacity: 0.07, rotate: -10, animDelay: "2.2s", animClass: "anim-float-slow" },
  { Component: Rose,   top: "92%", left: "20%", size: 130, opacity: 0.06, rotate: 30,  animDelay: "0.9s", animClass: "anim-float" },

  // Scattered small accents
  { Component: Cherry, top: "22%", left: "50%", size: 60,  opacity: 0.05, rotate: -35, animDelay: "3s",   animClass: "anim-float" },
  { Component: Leaf,   top: "65%", left: "45%", size: 50,  opacity: 0.05, rotate: 55,  animDelay: "1.7s", animClass: "anim-float-slow" },
];

export default function FloralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(8,6,8,0.7)_100%)]" />

      {florals.map((f, i) => (
        <div
          key={i}
          className={f.animClass}
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            transform: `rotate(${f.rotate}deg)`,
            animationDelay: f.animDelay,
            willChange: "transform",
          }}
        >
          <f.Component size={f.size} opacity={f.opacity} />
        </div>
      ))}
    </div>
  );
}
