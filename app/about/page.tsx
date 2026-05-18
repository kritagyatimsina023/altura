import React from "react";
import Image from "next/image";
import Grainy from "@/components/Ui/Grainy";
import AboutSection from "@/components/sections/about/AboutSection";

const AboutPage = () => {
  return (
    <main className="bg-[#EE7C26] text-[#0D0F2B] overflow-x-hidden">
      <AboutSection />
    </main>
  );
};

export default AboutPage;
