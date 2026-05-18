"use client";

import { useEffect } from "react";

/**
 * Scrolls the window to the top on every mount.
 * Use this in any page component to ensure the user
 * always starts at the top when navigating to that page.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
}
