"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLenis } from "../Providers/LenisProvider";

type SectionData = {
  id: string | number;
};
type Timeline = gsap.core.Timeline;
type HTMLElementOrNull = HTMLElement | null;

type TransitionType = {
  name: string;
  enter: (tl: Timeline, sec: HTMLElement) => void;

  exit: (tl: Timeline, sec: HTMLElement) => void;
};

const TRANSITIONS: TransitionType[] = [
  {
    name: "wipe-up",

    enter: (tl, sec) => {
      tl.fromTo(
        sec,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.inOut",
        },
      );
    },
    exit: (tl, sec) => {
      tl.fromTo(
        sec,
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.0,
          ease: "power3.inOut",
        },
      );
    },
  },

  {
    name: "slash",

    enter: (tl, sec) => {
      tl.fromTo(
        sec,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.15,
          ease: "power4.inOut",
        },
      );
    },

    exit: (tl, sec) => {
      tl.fromTo(
        sec,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 1.0,
          ease: "power4.inOut",
        },
      );
    },
  },

  {
    name: "split",

    enter: (tl, sec) => {
      tl.fromTo(
        sec,
        {
          clipPath: "inset(0% 50% 0% 50%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "expo.out",
        },
      );
    },

    exit: (tl, sec) => {
      tl.fromTo(
        sec,
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 50% 0% 50%)",
          duration: 0.95,
          ease: "expo.in",
        },
      );
    },
  },

  // {
  //   name: "shutter",

  //   enter: (tl, sec) => {
  //     tl.fromTo(
  //       sec,
  //       {
  //         clipPath: "inset(0% 0% 100% 0%)",
  //       },
  //       {
  //         clipPath: "inset(0% 0% 0% 0%)",
  //         duration: 1.1,
  //         ease: "power3.inOut",
  //       },
  //     );
  //   },

  //   exit: (tl, sec) => {
  //     tl.fromTo(
  //       sec,
  //       {
  //         clipPath: "inset(0% 0% 0% 0%)",
  //       },
  //       {
  //         clipPath: "inset(100% 0% 0% 0%)",
  //         duration: 1.0,
  //         ease: "power3.inOut",
  //       },
  //     );
  //   },
  // },
];

function getChars(sec: HTMLElement) {
  return sec.querySelectorAll(".char");
}
function animateTextIn(
  tl: Timeline,
  sec: HTMLElement,
  offset: number | string = 0,
) {
  tl.fromTo(
    getChars(sec),
    {
      y: 24,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.022,
      duration: 0.65,
      ease: "power3.out",
    },
    offset,
  );
}

function animateTextOut(tl: Timeline, sec: HTMLElement) {
  tl.to(getChars(sec), {
    y: -16,
    opacity: 0,
    stagger: 0.012,
    duration: 0.4,
    ease: "power2.in",
  });
}

function resetText(sec: HTMLElement) {
  gsap.set(getChars(sec), {
    y: 24,
    opacity: 0,
  });
}

export function useScrollController(
  data: SectionData[],
  setCurrentIndex: (index: number) => void,
  cinematicEl: React.RefObject<HTMLDivElement | null>,
) {
  const state = useRef({
    current: 0,
    isAnimating: false,
    wheelBuffer: 0,
    mode: "cinematic" as "cinematic" | "normal",
    transitionIndex: 0,
  });
  const [isCinematic, setIsCinematic] = useState(true);

  useEffect(() => {
    const s = state.current;
    const THRESHOLD = 60;

    const getSections = (): NodeListOf<HTMLElement> => {
      return document.querySelectorAll(".cinematic-layer");
    };

    const getSection = (i: number): HTMLElement => {
      return getSections()[i];
    };

    // Stack Sections
    const stackSections = (current: number, next: number) => {
      getSections().forEach((sec, i) => {
        if (i === current) {
          gsap.set(sec, {
            zIndex: 20,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
          });
        } else if (i === next) {
          gsap.set(sec, {
            zIndex: 10,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
          });
        } else {
          gsap.set(sec, {
            zIndex: 0,
            opacity: 0,
            clipPath: "inset(0% 0% 0% 0%)",
          });
        }
      });
    };

    // Navigate
    const goTo = (next: number) => {
      if (s.isAnimating) return;

      if (next < 0 || next >= data.length) return;

      s.isAnimating = true;

      const current = s.current;

      const variant = TRANSITIONS[s.transitionIndex % TRANSITIONS.length];
      s.transitionIndex++;

      const secCurrent = getSection(current);

      const secNext = getSection(next);

      stackSections(current, next);

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(secCurrent, {
            zIndex: 0,
            opacity: 0,
            clipPath: "inset(0% 0% 0% 0%)",
          });

          resetText(secCurrent);

          s.current = next;

          s.isAnimating = false;

          setCurrentIndex(next);

          document
            .querySelectorAll<HTMLElement>(".prog-index")
            .forEach((el, i) => {
              el.dataset.active = i === next ? "true" : "false";
            });
        },
      });

      animateTextOut(tl, secCurrent);

      variant.exit(tl, secCurrent);

      animateTextIn(tl, secNext, "-=0.3");

      const bgNext = secNext.querySelector<HTMLElement>(".bg-img");

      if (bgNext) {
        gsap.set(bgNext, {
          scale: 1,
          filter: "blur(0px)",
        });
      }
    };

    getSections().forEach((sec, i) => {
      const bg = sec.querySelector<HTMLElement>(".bg-img");

      if (i === 0) {
        gsap.set(sec, {
          zIndex: 20,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        });

        if (bg) {
          gsap.set(bg, {
            scale: 1,
            filter: "blur(0px)",
          });
        }
      } else {
        gsap.set(sec, {
          zIndex: 0,
          opacity: 0,
        });

        if (bg) {
          gsap.set(bg, {
            scale: 1,
            filter: "blur(0px)",
          });
        }

        resetText(sec);
      }
    });

    let isScrollTransitioning = false;

    const enterNormalScroll = () => {
      if (isScrollTransitioning) return;
      isScrollTransitioning = true;
      s.mode = "normal";
      setIsCinematic(false);

      setTimeout(() => {
        isScrollTransitioning = false;
      }, 800);
    };

    const reclaimCinematic = () => {
      if (s.mode === "cinematic" || isScrollTransitioning) return;
      isScrollTransitioning = true;
      s.mode = "cinematic";
      setIsCinematic(true);
      const sections =
        document.querySelectorAll<HTMLElement>(".cinematic-layer");
      const lastIndex = data.length - 1;

      sections.forEach((sec, i) => {
        gsap.set(sec, {
          zIndex: 0,
          opacity: 0,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        resetText(sec);
      });

      const lastSec = sections[lastIndex];
      if (lastSec) {
        gsap.set(lastSec, {
          zIndex: 20,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        const bg = lastSec.querySelector<HTMLElement>(".bg-img");
        if (bg) gsap.set(bg, { scale: 1, filter: "blur(0px)" });
      }

      s.current = lastIndex;
      s.isAnimating = false;
      s.transitionIndex = 0;

      document.querySelectorAll<HTMLElement>(".prog-index").forEach((el, i) => {
        el.dataset.active = i === lastIndex ? "true" : "false";
      });

      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        if (lastSec) {
          gsap.fromTo(
            lastSec.querySelectorAll(".char"),
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.5,
              ease: "power3.out",
            },
          );
        }
        isScrollTransitioning = false;
      }, 400);
    };

    // Entrance animation
    const tl0 = gsap.timeline();

    const firstBg = getSection(0).querySelector<HTMLElement>(".bg-img");

    if (firstBg) {
      tl0.fromTo(
        firstBg,
        {
          scale: 1.06,
          filter: "blur(8px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "power3.out",
        },
      );
    }

    animateTextIn(tl0, getSection(0), 0.35);

    gsap.set(getSection(0), {
      opacity: 1,
    });

    const onWheel = (e: WheelEvent) => {
      if (s.mode === "normal") {
        return;
      }

      e.preventDefault();
      if (s.isAnimating) return;

      s.wheelBuffer += e.deltaY;
      if (Math.abs(s.wheelBuffer) >= THRESHOLD) {
        const dir = s.wheelBuffer > 0 ? 1 : -1;
        s.wheelBuffer = 0;

        if (dir > 0 && s.current === data.length - 1) {
          enterNormalScroll();
          return;
        }
        if (dir < 0 && s.current === 0) return;

        goTo(s.current + dir);
      }
    };

    let touchY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (s.mode === "normal") return;
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 40 || s.isAnimating) return;
      const dir = dy > 0 ? 1 : -1;
      if (dir > 0 && s.current === data.length - 1) {
        enterNormalScroll();
        return;
      }
      goTo(s.current + dir);
    };

    const onKey = (e: KeyboardEvent) => {
      if (s.isAnimating) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();

        goTo(s.current + 1);
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();

        goTo(s.current - 1);
      }
    };

    const onScroll = () => {
      if (
        s.mode === "normal" &&
        !isScrollTransitioning &&
        window.scrollY === 0
      ) {
        reclaimCinematic();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [data, setCurrentIndex]);
  return { isCinematic };
}
