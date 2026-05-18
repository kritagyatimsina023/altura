"use client";

import React, { forwardRef, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AlturaYak from "./AlturaYak";
gsap.registerPlugin(ScrollTrigger);
type AlturaDetailProps = {};

const AlturaDetail = forwardRef<HTMLElement, AlturaDetailProps>(
  (props, ref) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const imgDivRef = useRef<HTMLDivElement | null>(null);

    const ingredientsRef = useRef<HTMLDivElement | null>(null);

    const imgRef = useRef<HTMLImageElement | null>(null);

    // Text refs
    const sectionLabelRef = useRef<HTMLDivElement | null>(null);

    const headingRef = useRef<HTMLHeadingElement | null>(null);

    const subheadingRef = useRef<HTMLSpanElement | null>(null);

    const paragraphRef = useRef<HTMLParagraphElement | null>(null);

    const statsRef = useRef<HTMLDivElement | null>(null);

    const footerTextRef = useRef<HTMLSpanElement | null>(null);

    const [naturalCount, setNaturalCount] = useState<number>(0);

    const [preservativesCount, setPreservativesCount] = useState<number>(0);

    const [yearsCount, setYearsCount] = useState<number>(0);

    const title = "What Makes Every Chew Special";

    const description = `
    Each Altura chew is made entirely by hand —
    built around centuries of Himalayan tradition,
    pure ingredients, and the patience to let
    nature do the work. These are the details
    that make the difference between a treat
    and a true experience.
  `;

    const startCountingAnimations = () => {
      const naturalObj = { value: 0 };

      const yearsObj = { value: 0 };

      gsap.to(naturalObj, {
        value: 100,
        duration: 2,
        ease: "power2.out",

        onUpdate: () => {
          setNaturalCount(Math.floor(naturalObj.value));
        },

        onComplete: () => {
          setNaturalCount(100);
        },
      });

      setPreservativesCount(0);

      gsap.to(yearsObj, {
        value: 60,
        duration: 2,
        ease: "power2.out",

        onUpdate: () => {
          setYearsCount(Math.floor(yearsObj.value));
        },

        onComplete: () => {
          setYearsCount(60);
        },
      });
    };

    // useGSAP(() => {
    //   Your GSAP animations here
    // }, []);

    return (
      <section ref={ref}>
        <div
          ref={sectionRef}
          className="
          relative z-30 min-h-screen
          bg-[var(--color-primary)]
          [font-family:'Cormorant_Garamond',Georgia,serif]
        "
        >
          {/* Noise Texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")
            `,
            }}
          />

          {/* Future Detail Layout */}

          {/* <div className="detail-grid">
          ...
        </div> */}

          <AlturaYak />
        </div>
      </section>
    );
  },
);

AlturaDetail.displayName = "AlturaDetail";

export default AlturaDetail;
