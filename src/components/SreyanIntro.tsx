
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
    }, 2500); // 2.5s intro
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div
      className={`fixed z-50 inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-600 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="text-[2.2rem] md:text-[3.5rem] font-bold text-white mb-2 tracking-tight animate-[glow_1.5s_ease-in-out_infinite_alternate] relative">
          <span className="relative z-10 drop-shadow-glow">Welcome to Sreyan&#39;s Web</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-blue-400 to-cyan-400 blur-lg opacity-80 animate-pulse" />
        </div>
        {/* Animated instagram-inspired subtitle */}
        <div
          className="mt-2 text-base md:text-lg text-slate-200 font-medium animate-fade-in"
          style={{ animationDelay: "0.9s", animationFillMode: "both" }}
        >
          which is inspired by <span className="text-pink-400 font-semibold">instagram</span>
        </div>
        <style>
          {`
          @keyframes glow {
            0% { text-shadow: 0 0 16px #0ff, 0 0 32px #f0f, 0 0 48px #0ff; }
            100% { text-shadow: 0 0 8px #f0f, 0 0 16px #0ff, 0 0 24px #f0f; }
          }
          .drop-shadow-glow {
            filter: drop-shadow(0 0 18px #f0f) drop-shadow(0 0 32px #0ff);
          }
        `}
        </style>
        <div className="mt-4 animate-fade-in">
          <svg width="50" height="50" className="mx-auto">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="5"
              strokeDasharray="62.8"
              strokeDashoffset="20"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="62.8;0;62.8"
                dur="1.7s"
                repeatCount="indefinite"
              />
            </circle>
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#f0f" />
                <stop offset="100%" stopColor="#0ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SreyanIntro;
