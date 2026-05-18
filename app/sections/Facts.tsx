"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Button from "../components/common/Button";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reasons = [
  {
    number: "01",
    stat: "4,000m",
    statLabel: "Above Sea Level",
    title: "Born where the air is thin.",
    body: "Yaks roam free across high-altitude Himalayan pastures — producing milk naturally denser in protein and calcium than anything found at lower elevations. That altitude is the first ingredient.",
  },
  {
    number: "02",
    stat: "60+",
    statLabel: "Years of Dairy Heritage",
    title: "Decades of mastery behind every chew.",
    body: "Altura is part of Laxmi Group's Sujal Dairy — over six decades of Himalayan dairy expertise. The same knowledge that perfected Churpi for local communities now powers export-quality dog chews for global markets.",
  },
  {
    number: "03",
    stat: "3",
    statLabel: "Ingredients. Nothing More.",
    title: "Yak milk. Salt. Lime juice.",
    body: "Smoke-dried for weeks using the same traditional method Himalayan communities have relied on for centuries. No chemicals. No fillers. No shortcuts. Just pure, long-lasting simplicity your customers can trust.",
  },
];

export default function WhyChooseAltura() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingWrapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // ── Heading: slide up from y:200, overflow hidden on wrapper ──
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            end: "top 40%",
            // toggleActions: "play reverse play reverse",
          },
        },
      );
    }

    // ── Reason rows: stagger in from x:80, each triggered individually ──
    rowRefs.current.forEach((row, i) => {
      if (!row) return;

      const statCol = row.querySelector(".stat-col");
      const textCol = row.querySelector(".text-col");
      const divider = row.querySelector(".row-divider");

      // Divider scales in from left
      gsap.fromTo(
        divider,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        statCol,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Text col slides in from right
      gsap.fromTo(
        textCol,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative  py-30 px-6 bg-[#EE7C26]"
    >
      <div className="mx-auto max-w-5xl">
        {/* ── Header ── */}
        <div
          className="pointer-events-none absolute inset-0  opacity-[0.65]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="relative z-10">
          <div className="mb-20 overflow-hidden" ref={headingWrapRef}>
            <h2
              ref={headingRef}
              className="m-0 text-center text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ color: "#1C140C" }}
            >
              Truths that set
              <br />
              <span className="font-bold" style={{ color: "black" }}>
                <span className="text-orange-400">Altura</span> apart.
              </span>
            </h2>
          </div>

          <div className="flex flex-col">
            {reasons.map((r, i) => (
              <div
                key={i}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="relative"
              >
                {/* Divider */}
                <div
                  className="row-divider mb-10 w-full"
                  style={{ height: "1px", background: "rgba(28,20,12,0.1)" }}
                />

                {/* Content grid */}
                <div className="grid grid-cols-1 gap-10 pb-16 lg:grid-cols-2 lg:gap-24">
                  {/* Stat column */}
                  <div className="stat-col flex flex-col gap-5">
                    {/* <span
                    className="text-[0.58rem] font-bold tracking-[0.25em] tabular-nums"
                    style={{ color: "orange" }}
                  >
                    {r.number}
                  </span> */}

                    <div>
                      <p
                        className="m-0 font-bold leading-none"
                        style={{
                          fontSize: "clamp(3.2rem,8vw,5.8rem)",
                          color: "#1C140C",
                          fontFamily: "var(--font-heading)",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {r.stat}
                      </p>
                      <p
                        className="m-0 mt-2 text-[0.58rem] uppercase tracking-[0.2em]"
                        style={{ color: "orange" }}
                      >
                        {r.statLabel}
                      </p>
                    </div>
                  </div>

                  {/* Text column */}
                  <div className="text-col flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3">
                      <h3
                        className="m-0 text-[1.15rem] font-semibold leading-snug"
                        style={{ color: "#1C140C" }}
                      >
                        {r.title}
                      </h3>
                    </div>

                    <p
                      className="m-0 text-[0.875rem] leading-[1.9]"
                      style={{ color: "rgba(28,20,12,0.48)", maxWidth: "52ch" }}
                    >
                      {r.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Closing line */}
            <div
              className="w-full"
              style={{ height: "1px", background: "rgba(28,20,12,0.1)" }}
            />
          </div>

          {/* ── CTA ── */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <p
              className="m-0 text-[0.8rem]"
              style={{ color: "rgba(28,20,12,0.38)" }}
            >
              Supplying trusted dog chews to global distributors and pet brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
