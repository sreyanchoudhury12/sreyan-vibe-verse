
import React from "react";

/**
 * Simple logo with stylized text for "Sreyan's web" to fit inside a circular area.
 */
const SreyanLogo: React.FC = () => (
  <div className="flex items-center justify-center h-full w-full">
    <span className="text-xs md:text-sm font-semibold tracking-tight text-cyan-950 drop-shadow-[0_1px_4px_rgba(255,255,255,0.47)] select-none text-center leading-tight">
      Sreyan&apos;s<br />web
    </span>
  </div>
);

export default SreyanLogo;
