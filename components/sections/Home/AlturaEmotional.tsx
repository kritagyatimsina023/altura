"use client";

import { forwardRef, useRef } from "react";

import Link from "next/link";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

// import Button from "../components/common/Button";
import SectionHeading from "../../Ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger, SplitText);

type AlturaEmotionalProps = {};

const AlturaEmotional = forwardRef<HTMLElement, AlturaEmotionalProps>(
  (props, ref) => {
    const detailRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
      // gsap.fromTo(
      //   sectionRef.current,
      //   { yPercent: 6 },
      //   {
      //     yPercent: 0,
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "top bottom", // section bottom edge enters viewport
      //       end: "top top", // section top reaches viewport top
      //       scrub: 1.2, // increase for lazier/more dramatic feel
      //     },
      //   },
      // );

      const headingOneRef = SplitText.create(".heading-One", {
        type: "words",
      });
      const headingTwoRef = SplitText.create(".heading-Two", {
        type: "words",
      });
      const paraSplit = SplitText.create(".para", {
        type: "words",
      });

      gsap.from(headingOneRef.words, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: detailRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(headingTwoRef.words, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.05,
        delay: 0.15,
        scrollTrigger: {
          trigger: detailRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
      gsap.fromTo(
        paraSplit.words,
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0,
          scrollTrigger: {
            trigger: ".para-div",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      return () => {
        headingOneRef.revert();
        headingTwoRef.revert();
        paraSplit.revert();
      };
    }, []);

    return (
      <section
        ref={(el) => {
          sectionRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref)
            (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        }}
        className="relative z-50 h-screen"
        style={{ willChange: "transform" }}
      >
        <div
          ref={detailRef}
          className="
        bg-[#EE7C26] relative z-30
        flex flex-col items-center justify-center text-center
        gap-4 sm:gap-5 md:gap-6
        px-5 sm:px-8 md:px-12 lg:px-16
        py-24 sm:py-32 md:py-20 lg:py-15 h-screen
        overflow-hidden
      "
        >
          <div
            className="pointer-events-none absolute inset-0 z-40 opacity-[0.75]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
          <div className="relative z-50 flex flex-col items-center gap-3">
            <SectionHeading className="text-[#050517]">
              The Origin Story
            </SectionHeading>
          </div>
          <div className="relative z-50">
            <p
              className="
            text-[#050517] leading-relaxed text-center
            max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl
            text-sm sm:text-base md:text-md font-medium font-serif
          "
            >
              <span className="text-6xl">A</span>
              ltura Dog Chew specializes in the production of 100% natural and
              organic dog chews. From the milk of yaks, the local communities of
              Himalayas produced yak milk cheese known as Churpi, a natural
              product slowly hardened through traditional smoke drying methods.
              Originally made for preservation and local use, this simple
              Himalayan cheese has evolved into a globally recognized natural
              dog chew, valued for its durability and purity.
              <br />
              <br /> Altura Dog Chew, part of Laxmi Group with over 60 years of
              dairy expertise through Sujal Dairy, transforms this traditional
              Himalayan process into export quality dog chews for international
              markets and combines authentic local knowledge with modern
              processing, ensuring every chew meets international safety and
              quality standards.. Today, Altura Dog Chew supplies trusted
              products to global distributors, pet brands, and wholesalers
              across international markets, bringing a piece of the Himalayas to
              dogs around the world.
            </p>
          </div>
        </div>
      </section>
    );
  },
);

AlturaEmotional.displayName = "AlturaEmotional";

export default AlturaEmotional;
