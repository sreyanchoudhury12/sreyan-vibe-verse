
import React, { useState } from "react";
import SreyanIntro from "@/components/SreyanIntro";
import SreyanHero from "@/components/SreyanHero";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {!showContent && <SreyanIntro onFinish={() => setShowContent(true)} />}
      <main
        className={`relative transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <SreyanHero />
      </main>
    </div>
  );
};

export default Index;
