"use client";

import React from "react";

const AlturaYak = () => {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 h-screen">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
      >
        <source
          src="/mountain/Trying the Hardest Cheese in the World_Full-HD.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default AlturaYak;
