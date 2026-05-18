"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MAX_SHIFT = 40;

type QuickToPair = {
  x: (value: number) => void;
  y: (value: number) => void;
};

export function useParallax(
  getCurrentIndex: () => number,
  sectionCount: number,
) {
  const quickTos = useRef<QuickToPair[]>([]);

  // Register background elements
  const register = (bgElements: HTMLDivElement[]) => {
    quickTos.current = bgElements.map((bg) => ({
      x: gsap.quickTo(bg, "x", {
        duration: 1.6,
        ease: "power3.out",
      }),

      y: gsap.quickTo(bg, "y", {
        duration: 1.6,
        ease: "power3.out",
      }),
    }));
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const idx = getCurrentIndex();

      if (idx >= sectionCount || !quickTos.current[idx]) return;

      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      quickTos.current[idx].x(nx * -MAX_SHIFT);
      quickTos.current[idx].y(ny * -MAX_SHIFT);
    };

    const onMouseLeave = () => {
      const idx = getCurrentIndex();

      if (!quickTos.current[idx]) return;

      quickTos.current[idx].x(0);
      quickTos.current[idx].y(0);
    };

    window.addEventListener("mousemove", onMouseMove);

    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);

      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [getCurrentIndex, sectionCount]);

  return { register };
}
