"use client";
import { useCallback, useRef } from "react";
import { DATA } from "../../../constants/data";
import { useScrollController } from "../../../hooks/useScrollController";
import AlturaEmotional from "./AlturaEmotional";
import AlturaYak from "../../../sections/AlturaYak";
import { CinematicSection } from "../../../sections/CinematicSection";
import Navbar from "../../layouts/Navbar";
import ProgressBar from "../../ProgressBar";
import { useParallax } from "../../../hooks/useParallex";
import WhyChooseAltura from "../../../sections/Facts";
import EmotionalDog from "../../../sections/EmotionalDog";
import ProcessSection from "../../../sections/ProcessSection";
import CTAsection from "../../../sections/CTAsection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useScrollToTop } from "../../../hooks/UseScrollToTop";
import Footer from "../../layouts/Footer";
import NewHeroSection from "./NewHeroSection";
import ImageOverLapping from "./ImageOverLapping";
import OurProducts from "./OurProducts";
gsap.registerPlugin(ScrollTrigger);
const CINEMATIC_HEIGHT_VH = DATA.length * 100;

export default function HomeScene() {
  useScrollToTop();
  // const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  // const indexRef = useRef<number>(0);
  // const cinematicRef = useRef<HTMLDivElement>(null);
  // // ────────────────────────────────────────────────────────────────

  // const setCurrentIndex = useCallback((i: number) => {
  //   indexRef.current = i;
  // }, []);
  // const getCurrentIndex = useCallback(() => indexRef.current, []);
  // const { register } = useParallax(getCurrentIndex, DATA.length);

  // const setBgRef = useCallback(
  //   (el: HTMLDivElement | null, i: number) => {
  //     bgRefs.current[i] = el;
  //     if (bgRefs.current.filter(Boolean).length === DATA.length) {
  //       register(bgRefs.current as HTMLDivElement[]);
  //     }
  //   },
  //   [register],
  // );

  // const { isCinematic } = useScrollController(
  //   DATA,
  //   setCurrentIndex,
  //   cinematicRef,
  // );

  return (
    <main>
      <Navbar />
      {/* <div
        style={{
          transition: "opacity 0.4s ease",
          opacity: isCinematic ? 1 : 0,
          pointerEvents: isCinematic ? "auto" : "none",
        }}
      >
        <ProgressBar data={DATA} />
      </div> */}
      <div>
        <NewHeroSection />
      </div>
      <div style={{ isolation: "isolate" }}>
        {/* <div
          style={{
            position: "relative",
            zIndex: 1,
            height: `${CINEMATIC_HEIGHT_VH}vh`,
          }}
        >
          <div
            ref={cinematicRef}
            className="relative w-full bg-black"
            style={{
              position: "sticky",
              top: 0,
            }}
          >
            {DATA.map((item, i) => (
              <CinematicSection
                key={item.id}
                item={item}
                ref={(el) => setBgRef(el, i)}
              />
            ))}
          </div>
        </div> */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <AlturaEmotional />
          <ImageOverLapping />
          {/* <WhyChooseAltura />
          <AlturaYak />
          <EmotionalDog /> */}
          <OurProducts />
          <ProcessSection />
          {/* <ProductCard /> */}
          <CTAsection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
