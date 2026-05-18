"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/Button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image?: string;
  imgBgColor?: string; // ← add this
}

const ProductCard = ({ name, price, image, imgBgColor }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center rounded-3xl p-4 
        w-full sm:w-72 md:w-80 lg:w-96 xl:w-[420px]
        border-1 border-[#FCF7EE]  transition-all duration-300 hover:border-[#fcdfa8] "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-full rounded-2xl flex items-center justify-center overflow-hidden mb-5"
        style={{
          aspectRatio: "1 / 1",
          backgroundColor: imgBgColor ?? "#FFF8E1", // ← used here
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            width={420}
            height={420}
            className="object-contain w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-[#F5EDCC] opacity-60" />
        )}
      </div>
      <h3 className="text-[#0D0F2B] font-light text-xl md:text-xl mb-2 tracking-tight">
        {name}
      </h3>
      <p className="text-[#0D0F2B] font-bold text-2xl md:text-3xl mb-5">
        {price}
      </p>
      <Button
        label="SHOP NOW"
        className="justify-center text-[#FB923C] border-[#FB923C] rounded-full px-8 py-3 text-[10px] tracking-[0.2em] uppercase shadow-xl shadow-primary/20"
      />
    </div>
  );
};

export default ProductCard;
