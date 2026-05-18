"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "home_scroll_y";

export function useScrollRestoration(cinematicHeight: number) {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Restore on mount
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const y = parseInt(saved, 10);
      // Small timeout so the DOM is fully painted before we scroll
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "instant" });
      });
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // Save on unmount (navigate away)
  useEffect(() => {
    return () => {
      sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
    };
  }, [pathname]);
}
