"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    phase: "Source",
    title: "It starts with the Yak",
    body: "Fresh yak milk is sourced from trusted high-altitude Himalayan farms above 4,000m — where cold air and open pastures produce naturally richer, denser milk.",
    detail: "Yak & Cow Milk",
  },
  {
    number: "02",
    phase: "Collection",
    title: "Milk is carefully collected",
    body: "Each morning, local herders hand-collect the milk in clean vessels. Quality is checked on-site before transport begins — no shortcuts, no compromise.",
    detail: "Quality Checked",
  },
  {
    number: "03",
    phase: "Preparation",
    title: "Salt and lime are added",
    body: "Only three ingredients enter the vat: yak milk, Himalayan salt, and fresh lime juice. The lime begins separating the curds — no chemicals, no additives.",
    detail: "3 Ingredients Only",
  },
  {
    number: "04",
    phase: "Curdling",
    title: "The cheese begins to form",
    body: "Controlled low heat encourages the milk proteins to bind and curdle. The whey separates slowly, leaving behind a firm, nutrient-dense cheese base.",
    detail: "Controlled Heating",
  },
  // {
  //   number: "05",
  //   phase: "Compression",
  //   title: "The curds are pressed",
  //   body: "Warm curds are packed into moulds and compressed under weight for hours. This expels remaining moisture and creates the dense structure that makes the chew long-lasting.",
  //   detail: "Cold-Press Moulding",
  // },
  // {
  //   number: "06",
  //   phase: "Resting",
  //   title: "Blocks are rested and set",
  //   body: "Pressed blocks are left to rest at ambient temperature. The cheese firms up gradually — no forced drying, no heat — just time doing its work.",
  //   detail: "Natural Setting",
  // },
  // {
  //   number: "07",
  //   phase: "Cutting",
  //   title: "Blocks are cut to shape",
  //   body: "Once set, each block is hand-cut into precise chew sizes — small, medium, large, and XL — calibrated for different dog breeds and chewing strengths.",
  //   detail: "Size-Graded Cuts",
  // },
  // {
  //   number: "08",
  //   phase: "Drying",
  //   title: "Smoke-dried for weeks",
  //   body: "The cut pieces are traditionally smoke-dried over low heat for several weeks. This ancient preservation method hardens the chew to its legendary durability and depth of flavour.",
  //   detail: "Weeks of Smoke Drying",
  // },
  // {
  //   number: "09",
  //   phase: "Quality Control",
  //   title: "Every chew is inspected",
  //   body: "Each piece passes through manual quality checks: texture, colour, moisture content, and dimensions are verified before any chew is cleared for packing.",
  //   detail: "Export-Grade QC",
  // },
  // {
  //   number: "10",
  //   phase: "Dispatch",
  //   title: "Packed and shipped globally",
  //   body: "Chews are vacuum-sealed and packed to international standards, then shipped to distributors, pet brands, and wholesalers across global markets.",
  //   detail: "Global Distribution",
  // },
];

const PATH_D = `
  M 200 0
  C 320 100, 360 200, 320 300
  C 280 400, 80  450,  80 550
  C  80 650, 280 700, 320 800
  C 360 900, 320 1000, 200 1100
  C  80 1200,  80 1300, 120 1400
  C 160 1500, 340 1550, 340 1650
  C 340 1750, 160 1800,  80 1900
  C  40 1950,  60 2050, 160 2150
  C 260 2250, 360 2300, 340 2400
  C 320 2500, 120 2550,  80 2650
  C  40 2750,  80 2850, 200 2950
  C 320 3050, 360 3150, 320 3250
  C 280 3350,  80 3400,  80 3500
  C  80 3600, 280 3650, 320 3750
  C 360 3850, 280 3950, 200 4050
  C 120 4150,  80 4250, 200 4400
`;

const ProcessCard = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const section = sectionRef.current;
      const svgEl = svgRef.current;
      const firstCard = cardRefs.current[0];
      const lastCard = cardRefs.current[steps.length - 1];

      if (!path || !section || !svgEl || !firstCard || !lastCard) return;

      const sectionH = section.offsetHeight;

      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: firstCard,
          start: "top center",
          endTrigger: lastCard,
          end: "center center",
          scrub: 0.5,
        },
      });

      // ── Heading reveal ──
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // ── Cards ──
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const xFrom = i % 2 === 0 ? -120 : 120;
        gsap.fromTo(
          card,
          { x: xFrom, opacity: 0, scale: 0.97 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 55%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // ── Connectors ──
      connectorRefs.current.forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full relative bg-white py-28 px-6">
      {/* SVG: absolutely positioned, full section height */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] h-full">
          <svg
            ref={svgRef}
            width="400"
            height="100%"
            viewBox="0 0 400 4400"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "400px", height: "100%", display: "block" }}
          >
            <path
              d={PATH_D}
              stroke="rgba(251,146,60,0.12)"
              strokeWidth={4}
              strokeLinecap="round"
            />

            <path
              ref={pathRef}
              d={PATH_D}
              stroke="rgb(251,146,60)"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-8xl relative z-10">
        {/* Header */}
        <div className="overflow-hidden mb-20">
          <div
            ref={headingRef}
            className="flex flex-col items-center text-center gap-4"
          >
            <span
              className="text-[0.58rem] font-bold uppercase tracking-[0.35em]"
              style={{ color: "rgb(251,146,60)" }}
            >
              From Yak Milk to Dog Chew
            </span>
            <SectionHeading>
              How Altura Dog Chew
              <br />
              <span style={{ color: "rgb(251,146,60)" }}>is made.</span>
            </SectionHeading>
            {/* <h2
              className="m-0 font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", color: "#1C140C" }}
            >
              How Altura Dog Chew
              <br />
              <span style={{ color: "rgb(251,146,60)" }}>is made.</span>
            </h2> */}
            <p
              className="m-0 max-w-lg text-[0.875rem] leading-[1.85]"
              style={{ color: "rgba(28,20,12,0.48)" }}
            >
              Every Altura chew follows a careful, traditional method to ensure
              safety, durability, and purity — step by step.
            </p>
          </div>
        </div>

        {/* Step Cards */}
        <div className="relative flex gap-20 flex-col items-center">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <React.Fragment key={i}>
                <div
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className={`relative w-full max-w-xl flex gap-5 p-6 rounded-2xl ${
                    isLeft ? "self-start" : "self-end"
                  }`}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(28,20,12,0.08)",
                    boxShadow: "0 4px 24px rgba(28,20,12,0.07)",
                  }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[0.6rem] font-bold"
                      style={{
                        background: "rgba(251,146,60,0.1)",
                        border: "1px solid rgba(251,146,60,0.4)",
                        color: "rgb(251,146,60)",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-0">
                    <span
                      className="text-[0.5rem] uppercase tracking-[0.3em] font-bold"
                      style={{ color: "rgb(251,146,60)" }}
                    >
                      {step.phase}
                    </span>
                    <h3
                      className="m-0 font-semibold leading-snug"
                      style={{
                        fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                        color: "#1C140C",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="m-0 text-[0.8rem] leading-[1.85]"
                      style={{ color: "rgba(28,20,12,0.5)" }}
                    >
                      {step.body}
                    </p>
                    <div className="mt-1 self-start">
                      <span
                        className="text-[0.55rem] font-bold uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(251,146,60,0.08)",
                          border: "1px solid rgba(251,146,60,0.25)",
                          color: "rgb(251,146,60)",
                        }}
                      >
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div
                    ref={(el) => {
                      connectorRefs.current[i] = el;
                    }}
                    className="w-px my-1"
                    style={{
                      height: "36px",
                      background:
                        "linear-gradient(to bottom, rgba(251,146,60,0.5), rgba(251,146,60,0.1))",
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessCard;
