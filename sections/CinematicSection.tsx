"use client";

import React, { forwardRef } from "react";
type ItemType = {
  id: string | number;
  img: string;
  subtitle: string;
  title: string;
  desc: string;
  video?: string;
};
type CinematicSectionProps = {
  item: ItemType;
};
export const CinematicSection = forwardRef<
  HTMLDivElement,
  CinematicSectionProps
>(function CinematicSection({ item }, bgRef) {
  const splitText = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-3">
        <span className="char inline-block">{word}</span>
      </span>
    ));

  return (
    <section
      className="cinematic-layer fixed inset-0 w-full h-full flex items-center justify-center"
      style={{ willChange: "clip-path" }}
    >
      <div className="absolute -inset-[5%] overflow-hidden">
        {item.video ? (
          <video
            ref={bgRef as React.Ref<HTMLVideoElement>}
            className="bg-img absolute inset-0 h-full w-full object-cover will-change-transform"
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div
            ref={bgRef as React.Ref<HTMLDivElement>}
            className="bg-img absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${item.img})`,
              // backgroundPosition: "bottom",
            }}
          />
        )}

        {/* <div className="absolute inset-0 bg-black/45" /> */}
      </div>
      {!item.video && (
        <div className="relative z-10 flex flex-col items-center px-6 text-center pointer-events-none">
          <span className="char mb-8 block text-xs uppercase tracking-[0.6em] text-zinc-400">
            {item.subtitle}
          </span>

          <h2 className="max-w-6xl text-3xl font-black uppercase leading-[0.9] tracking-[0.06em] md:text-3xl lg:text-[4rem]">
            {splitText(item.title)}
          </h2>
        </div>
      )}
    </section>
  );
});

CinematicSection.displayName = "CinematicSection";
