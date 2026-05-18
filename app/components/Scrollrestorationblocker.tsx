"use client";

import { useEffect } from "react";

/**
 * Drop this inside your root layout (as a Client Component).
 * It disables Next.js's automatic scroll-to-top on navigation,
 * giving useScrollRestoration full control.
 *
 * Usage in layout.tsx:
 *   import ScrollRestorationBlocker from "./components/ScrollRestorationBlocker";
 *   ...
 *   <body>
 *     <ScrollRestorationBlocker />
 *     {children}
 *   </body>
 */
export default function ScrollRestorationBlocker() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
