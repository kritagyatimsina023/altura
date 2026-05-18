"use client";
import React, { useRef } from "react";
import Button from "../components/common/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useResponsive } from "../hooks/useResponsive";

const dogStages = [
  {
    icon: "🐾",
    label: "Strong Chewers",
    desc: "Perfect for aggressive chewers who destroy toys quickly.",
  },
  {
    icon: "🐶",
    label: "Puppies",
    desc: "Gentle teething relief and comfort for growing dogs.",
  },
  {
    icon: "🦴",
    label: "Adult Dogs",
    desc: "Long lasting entertainment and daily dental support.",
  },
];

const title = `A Natural Chew Built for Every Dog Stage`;
const description = `From teething puppies to powerful adult chewers — Altura's Himalayan yak milk chew is crafted to last, nourish, and satisfy. One chew. Every stage. Pure Himalayan simplicity.`;

const Benefits = () => {
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const dogInfoRef = useRef<(HTMLDivElement | null)[]>([]);

  const dentalBenefitsRef = useRef<HTMLDivElement | null>(null);
  const imgDivRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const { isMobile, isTablet, isSmallerDevice } = useResponsive();
  useGSAP(() => {
    const descriptionSplit = SplitText.create(descRef.current, {
      type: "words",
    });
    gsap.set(titleRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      opacity: 0,
    });
    gsap.set(imgDivRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.set(dogInfoRef.current, {
      x: isMobile ? -300 : 700,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=10 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
    tl.from(paraRef.current, {
      yPercent: -140,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        titleRef.current,
        {
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: "power3.out",
          duration: 0.6,
          opacity: 1,
        },
        "+=0.1",
      )
      .from(
        descriptionSplit.words,
        {
          yPercent: -320,
          ease: "power2.out",
          duration: 1.5,
        },
        "<",
      )
      .to(
        imgDivRef.current,
        {
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: "power2.out",
          duration: 2.75,
        },
        "<",
      )
      .to(
        dogInfoRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(0.7)",
        },
        "<",
      )
      .fromTo(
        dentalBenefitsRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.75, ease: "power2.out" },
        "+=0.2",
      );
    gsap.to(imgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative z-30 bg-[#F8F3EC] py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-8 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <div className="overflow-hidden">
          <p
            ref={paraRef}
            className="font-['Jost']  text-[0.62rem] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
          >
            Designed for Every Life Stage
          </p>
        </div>
        <div ref={titleRef}>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,4rem)] font-light text-[#1C140C] leading-[1.1] mb-5 max-w-[720px]">
            {title}
          </h2>
        </div>
        <div className="w-12 h-px bg-[#C9A84C] opacity-50 mb-5" />
        <div className="overflow-hidden">
          <p
            ref={descRef}
            className="font-['Jost'] text-[0.88rem] leading-[1.85] text-[#7A6E5F] max-w-[560px] font-light"
          >
            {description}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div
          ref={imgDivRef}
          className="w-full md:w-[55%] relative overflow-hidden"
        >
          <img
            style={{ scale: "1.15" }}
            ref={imgRef}
            src="/Logo/Mountain/DogEnjoyTwo.png"
            alt="Dog enjoying Altura yak chew"
            className="w-full rounded-lg h-[380px] sm:h-[420px] md:h-[560px] object-cover rounded-lg brightness-[0.96]"
          />
          <div className="absolute top-0 left-0 bg-[rgba(28,20,12,0.82)] border border-[rgba(201,168,76,0.4)] backdrop-blur-md rounded-[4px] px-5 py-3">
            <p className="font-['Jost'] text-[0.55rem] tracking-[0.28em] uppercase text-[rgba(201,168,76,0.7)] mb-1">
              Only 4 Ingredients
            </p>
            <p className="font-['Cormorant_Garamond'] text-[0.9rem] text-[#F7F3EC] font-light">
              Yak Milk · Cow Milk · Salt · Lime
            </p>
          </div>
        </div>
        <div className="w-full md:w-[45%] flex flex-col items-start gap-8  overflow-hidden">
          <div className="flex flex-col gap-5 w-full overflow-hidden">
            {dogStages.map((stage, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 pb-5 ${
                  i < dogStages.length - 1
                    ? "border-b border-[rgba(201,168,76,0.12)]"
                    : ""
                }`}
              >
                <span className="text-[1.3rem] mt-[2px]">{stage.icon}</span>
                <div>
                  <p className="font-['Cormorant_Garamond'] text-[1.1rem] text-[#1C140C] mb-1 font-normal">
                    {stage.label}
                  </p>
                  <p className="font-['Jost'] text-[0.78rem] text-[#7A6E5F] leading-[1.75] font-light">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={dentalBenefitsRef}
            className="w-full bg-[rgba(201,168,76,0.07)] border border-[rgba(201,168,76,0.2)] rounded-lg px-5 py-4"
          >
            <p className="font-['Jost'] text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A84C] mb-1.5">
              Dental Benefit
            </p>
            <p className="text-[1rem] text-[#1C140C] font-light leading-[1.6]">
              Naturally reduces plaque and tartar through intense chewing — no
              additives needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
