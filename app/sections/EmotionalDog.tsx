"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "../components/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EmotionalDog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!blurRef || !sectionRef) return;
      gsap.set(blurRef.current, { yPercent: 140 });
      const tlTwo = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          markers: true,
        },
      });
      tlTwo.to(blurRef.current, { yPercent: 0, ease: "none" });

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.85 },
        {
          opacity: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1.5,
          },
        },
      );
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: sectionRef.current,
      //     start: "top 75%",
      //     toggleActions: "play reverse play reverse",
      //   },
      // });
      // tl.fromTo(
      //   tagRef.current,
      //   { y: 30, opacity: 0 },
      //   { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      // );

      // tl.fromTo(
      //   headingRef.current,
      //   { y: 80, opacity: 0 },
      //   { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
      //   "-=0.3",
      // );
      // tl.fromTo(
      //   line1Ref.current,
      //   {
      //     "--reveal-p": "0%",
      //     opacity: 0,
      //     maskImage:
      //       "linear-gradient(to right, white var(--reveal-p), transparent calc(var(--reveal-p) + 20%))",
      //     WebkitMaskImage:
      //       "linear-gradient(to right, white var(--reveal-p), transparent calc(var(--reveal-p) + 20%))",
      //   },
      //   {
      //     "--reveal-p": "100%",
      //     opacity: 1,
      //     duration: 1.1,
      //     ease: "power2.inOut",
      //   },
      //   "-=0.5",
      // );

      // tl.fromTo(
      //   line2Ref.current,
      //   {
      //     "--reveal-p": "0%",
      //     opacity: 0,
      //     maskImage:
      //       "linear-gradient(to right, white var(--reveal-p), transparent calc(var(--reveal-p) + 20%))",
      //     WebkitMaskImage:
      //       "linear-gradient(to right, white var(--reveal-p), transparent calc(var(--reveal-p) + 20%))",
      //   },
      //   {
      //     "--reveal-p": "100%",
      //     opacity: 1,
      //     duration: 1.1,
      //     ease: "power2.inOut",
      //   },
      //   "-=0.6",
      // );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Dog/EmotionalDog.webp"
          alt="Emotional bond between human and dog"
          fill
          priority
          className="object-cover"
          //   sizes="100vw"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-black" />
      </div>

      <div
        ref={blurRef}
        className="absolute z-10 inset-0 h-[100dvh] backdrop-blur-sm w-full flex flex-col items-center justify-center text-center  gap-6 lg:gap-10"
      >
        <span
          ref={tagRef}
          className="text-[0.6rem] font-bold uppercase tracking-[0.4em]"
          style={{ color: "rgba(251,146,60,0.9)" }}
        >
          Built Through Trust
        </span>

        <div className="overflow-hidden">
          <div ref={headingRef}>
            <SectionHeading className="text-white">
              The Strongest Products
              <br />
              Create Emotional Bonds
            </SectionHeading>
            {/* <h2
              className="m-0 text-white font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
            >
              The Strongest Products
              <br />
              Create Emotional Bonds
            </h2> */}
          </div>
        </div>
        <div className="w-full max-w-2xl flex flex-col gap-3">
          <p
            ref={line1Ref}
            className="m-0 text-zinc-200 font-medium leading-relaxed will-change-transform"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
          >
            Behind every great pet brand is a product dogs truly enjoy and
            owners genuinely trust.
          </p>
          <p
            ref={line2Ref}
            className="m-0 text-zinc-300 font-medium leading-relaxed will-change-transform"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
          >
            Altura combines Himalayan tradition, natural ingredients, and
            lasting quality to create chews that build loyalty beyond the shelf.
          </p>
        </div>
      </div>
      {/* <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center gap-6 lg:gap-10">
        <span
          ref={tagRef}
          className="text-[0.6rem] font-bold uppercase tracking-[0.4em]"
          style={{ color: "rgba(251,146,60,0.9)" }}
        >
          Built Through Trust
        </span>

        <div className="overflow-hidden">
          <div ref={headingRef}>
            <h2
              className="m-0 text-white font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
            >
              The Strongest Products
              <br />
              Create Emotional Bonds
            </h2>
          </div>
        </div>

        <div className="w-full max-w-2xl flex flex-col gap-3">
          <p
            ref={line1Ref}
            className="m-0 text-zinc-200 font-medium leading-relaxed will-change-transform"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
          >
            Behind every great pet brand is a product dogs truly enjoy and
            owners genuinely trust.
          </p>

          <p
            ref={line2Ref}
            className="m-0 text-zinc-300 font-medium leading-relaxed will-change-transform"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
          >
            Altura combines Himalayan tradition, natural ingredients, and
            lasting quality to create chews that build loyalty beyond the shelf.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default EmotionalDog;
