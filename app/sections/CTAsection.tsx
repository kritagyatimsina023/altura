"use client";

import React, { useRef } from "react";
import Button from "../components/Button";
import Footer from "./Footer";

const CTAsection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative w-full h-fit overflow-hidden py-0 bg-white">
      <div className="relative flex flex-col items-center justify-center text-center overflow-hidden h-screen">
        <video
          ref={videoRef}
          src="/video/dog-btn-click-1 (1).mp4"
          muted
          playsInline
          className="pointer-events-none absolute bottom-0 left-[40%] -translate-x-1/2 size-[90%] object-cover object-bottom"
        />
        <div className="relative z-10 space-y-12 ">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-none">
              Bring Home a Taste <br />
              <span className="italic text-font-color">of the Himalayas</span>
            </h2>
            <p className="text-lg text-font-subheading  md:text-2xl font-light tracking-wide uppercase opacity-60">
              Pure. Natural. Loved by dogs.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              label="Shop Now"
              icon="lucide:shopping-cart"
              variant="solid"
              className="rounded-full px-12 py-3 text-sm md:text-base tracking-[0.2em] font-black uppercase shadow-2xl shadow-primary/40"
              onMouseEnter={handleVideoPlay}
              onClick={handleVideoPlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
