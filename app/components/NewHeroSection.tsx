import Image from "next/image";
import React from "react";

const NewHeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-[#ffc99c] overflow-hidden">
      <div className="h-screen  w-full">
        <Image
          src="/mountain/YellowMountain.png"
          fill
          priority
          className="object-cover"
          alt="mountain"
        />
      </div>
      {/* <div className="absolute z-10 w-full top-70 left-1/2 -translate-x-1/2">
        <h1 className="text-7xl text-center text-black">
          From Himalayan Tradition to Global Pet
        </h1>
      </div> */}
    </section>
  );
};

export default NewHeroSection;
