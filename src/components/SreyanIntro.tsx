
import React, { useEffect, useState } from "react";

interface SreyanIntroProps {
  onFinish: () => void;
}

const SreyanIntro: React.FC<SreyanIntroProps> = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 600); // wait for fade out
    }, 2500);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center transition-opacity duration-600 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        background:
          "radial-gradient(circle at 70% 10%, #f99e5b, transparent 55%), linear-gradient(120deg,#fdf497 0%,#fdf497 8%,#fd5949 45%,#d6249f 60%,#285AEB 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Instagram-inspired gradient ring SVG */}
        <div className="mb-5 animate-scale-in">
          <svg width="72" height="72" viewBox="0 0 72 72" className="mx-auto">
            <defs>
              <linearGradient id="ig-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="20%" stopColor="#fd5949" />
                <stop offset="70%" stopColor="#d6249f" />
                <stop offset="100%" stopColor="#285AEB" />
              </linearGradient>
            </defs>
            <circle
              cx="36"
              cy="36"
              r="30"
              fill="none"
              stroke="url(#ig-ring)"
              strokeWidth="7"
              strokeDasharray="188.4"
              strokeDashoffset="50"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="188.4;0;188.4"
                dur="1.7s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        <span
          className="text-[2.6rem] md:text-[3.7rem] font-extrabold tracking-tight text-white drop-shadow-glow animate-fade-in"
          style={{
            letterSpacing: "-1.5px",
            textShadow: "0 0 20px #d6249f, 0 0 2px #fd5949",
          }}
        >
          Sreyan&#39;s Web
        </span>
      </div>
      <style>
        {`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px #fd5949) drop-shadow(0 0 20px #d6249f);
        }
        `}
      </style>
    </div>
  );
};

export default SreyanIntro;

