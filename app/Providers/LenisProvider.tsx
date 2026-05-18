"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  Suspense,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Create a context for the Lenis instance
const LenisContext = createContext<Lenis | null>(null);

// Custom hook to access the Lenis instance
export const useLenis = () => {
  return useContext(LenisContext);
};

interface LenisProviderProps {
  children: React.ReactNode;
}

/**
 * Internal component to handle scroll reset on route changes.
 * This is separated to be wrapped in <Suspense> as it uses useSearchParams.
 */
function LenisScrollHandler({ lenis }: { lenis: Lenis | null }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();

  useEffect(() => {
    // Next.js + Lenis can preserve scroll between routes; force an explicit reset.
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    // Fallback for the brief moment before Lenis is ready.
    if (!lenis) {
      if (!hash) window.scrollTo(0, 0);
      return;
    }

    const target: string | number = hash || 0;

    // Defer one frame so the new route's layout/content is in the DOM.
    const raf = window.requestAnimationFrame(() => {
      lenis.scrollTo(target, { immediate: true, force: true });
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname, searchKey, lenis]);

  return null;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // ignore
    }

    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    // Modern mobile browser fix
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    // Fix for the 100vh mobile jump
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);

    // Integrate Lenis with GSAP ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(ticker);
      window.removeEventListener("resize", updateVh);
      try {
        window.history.scrollRestoration = previousScrollRestoration;
      } catch {
        // ignore
      }
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <Suspense fallback={null}>
        <LenisScrollHandler lenis={lenis} />
      </Suspense>
      {children}
    </LenisContext.Provider>
  );
}
