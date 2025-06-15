import React from "react";
import { Instagram } from "lucide-react";
import SreyanLogo from "./SreyanLogo";
const profilePic = "/lovable-uploads/07577f95-6c87-426a-bc48-6a6de3d436c0.png"; // Updated to use uploaded image
const logoImgUrl = "/lovable-uploads/fe4ad9c2-c9e6-4af3-87f2-135c480d0f2d.png";
const bgBanner = "/lovable-uploads/1c081b80-47c3-4fda-918d-cabde9096118.png";
const SreyanHero: React.FC = () => {
  return <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-8 py-8 md:py-20 bg-gradient-to-br from-black via-zinc-900 to-gray-900 overflow-hidden">
      {/* Background banner image */}
      <img src={bgBanner} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none opacity-60" style={{
      minHeight: "100%",
      minWidth: "100%"
    }} draggable={false} />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Main content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:space-y-7 z-10">
        <img src={profilePic} alt="Sreyan Avatar" className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-pink-500 shadow-xl mb-3 animate-scale-in" />
        <h1 className="text-white font-extrabold text-4xl md:text-5xl tracking-tight animate-fade-in">
          Hi, I'm <span className="text-pink-500">Sreyan</span>
        </h1>
        <p className="text-slate-200/90 max-w-lg text-lg md:text-xl mt-2 animate-fade-in">
          Welcome to my web playground. Enjoy flashy visuals, smooth animations, and a taste of what modern social apps feel like!
        </p>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=GBNrdJnDicIxcZuo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 hover:from-cyan-400 hover:to-pink-500 text-white rounded-xl shadow-lg text-lg md:text-xl font-semibold hover:scale-105 transition-all duration-200 animate-fade-in">
          <Instagram className="w-6 h-6 opacity-80" />
          See my portfolio
        </a>
        <div className="mt-10 md:mt-8">
          {/* TikTok-style sample card */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-6 backdrop-blur-sm shadow-2xl hover:scale-105 transition group animate-fade-in">
            <div className="flex items-center gap-3">
              <img src={profilePic} alt="Avatar" className="w-14 h-14 rounded-full border-2 border-cyan-400" />
              <div>
                <div className="font-semibold text-white">Sreyan</div>
                <div className="text-sm text-gray-200/70">@sreyan</div>
              </div>
            </div>
            <div className="mt-4 text-white text-base">Just built this site with animated intro for learning purposes! 🚀✨</div>
            <div className="mt-3 flex items-center gap-4">
              <button className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-medium transition">
                Like
              </button>
              <button className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-black font-medium transition">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edge floating shape now with uploaded image as logo */}
      <div className="absolute top-6 right-4 md:right-24 w-24 h-24 bg-gradient-to-br from-fuchsia-400/80 to-cyan-300/40 blur-2xl rounded-full opacity-60 pointer-events-none flex items-center justify-center animate-fade-in">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/30 shadow-lg overflow-hidden">
          <img src={logoImgUrl} alt="Sreyan logo" className="object-contain w-12 h-12 select-none" draggable={false} />
        </div>
      </div>
    </div>;
};
export default SreyanHero;
