"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "", Videosrc: "/video/yak-grazing-1.mp4", alt: "Video Src" },
  {
    src: "",
    Videosrc: "/mountain/Trying the Hardest Cheese in the World_Full-HD.mp4",
    alt: "Woman visual",
  },
  {
    src: "",
    Videosrc: "/video/dog-stealing-chew-1.mp4",
    alt: "Orchid visual",
  },
];
const imageHeadlines: [string, string][] = [
  ["Botanical", "Origins"],
  ["Precision", "Formulation"],
  ["Beauty in", "Motion"],
];
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function ImageOverLapping() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const distance = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = clamp(-rect.top / distance, 0, 1);
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const segment = (start: number, end: number) =>
    clamp((progress - start) / (end - start), 0, 1);

  const secondReveal = segment(0.16, 0.5);
  const thirdReveal = segment(0.56, 0.92);
  const activeIndex = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;

  return (
    <section ref={sectionRef} className="relative h-[320vh] w-full ">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="pointer-events-none absolute top-0 left-0 w-full z-30 overflow-hidden"
            style={{
              height: "100%", // ← was "40%", now full height so no hard line
              opacity: 1 - secondReveal,
              // Fade the entire overlay out via mask so grain never has a hard edge
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 30%, transparent 55%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 30%, transparent 55%)",
            }}
          >
            {/* Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #EE7C26 0%, transparent 55%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.75]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat",
                backgroundSize: "128px 128px",
              }}
            />
          </div>
          <div className="absolute inset-0">
            {images[0].Videosrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={images[0].Videosrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>

          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(${(1 - secondReveal) * 100}% 0 0 0)` }}
          >
            {images[1].Videosrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={images[1].Videosrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>

          <div
            className="absolute inset-0 z-20"
            style={{ clipPath: `inset(${(1 - thirdReveal) * 100}% 0 0 0)` }}
          >
            {images[2].Videosrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={images[2].Videosrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
          {/* <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
            {images.map((image, index) => (
              <span
                key={image.alt}
                className={`h-3 w-1.5 rounded-sm transition-all duration-300 ${
                  index === activeIndex ? "bg-[#e58ba0]" : "bg-[#f7c8d3]"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
