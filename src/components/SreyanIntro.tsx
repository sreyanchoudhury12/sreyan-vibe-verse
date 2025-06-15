
import React, { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

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
        background: "radial-gradient(circle at 70% 10%, #f99e5b, transparent 55%), linear-gradient(120deg,#fdf497 0%,#fdf497 8%,#fd5949 45%,#d6249f 60%,#285AEB 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gradient-to-tl from-pink-500 via-purple-500 to-yellow-400 rounded-full p-5 shadow-2xl animate-scale-in mb-5">
          <Instagram size={52} className="text-white drop-shadow-glow" />
        </div>
        <span
          className="text-[2.6rem] md:text-[3.7rem] font-extrabold tracking-tight text-white drop-shadow-glow animate-fade-in"
          style={{
            letterSpacing: "-1.5px",
            textShadow: "0 0 20px #d6249f, 0 0 2px #fd5949"
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
