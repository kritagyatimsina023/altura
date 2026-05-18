"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../components/common/Button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image?: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center rounded-3xl bg-[#FFFBEE] p-4 w-72 border-1 border-[#FCF7EE]  transition-all duration-300 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        className="w-full rounded-2xl bg-[#FFF8E1] flex items-center justify-center overflow-hidden mb-5"
        style={{ aspectRatio: "1 / 1" }}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            width={260}
            height={260}
            className="object-contain w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
        ) : (
          // Placeholder when no image
          <div className="w-32 h-32 rounded-full bg-[#F5EDCC] opacity-60" />
        )}
      </div>

      {/* Name */}
      <h3 className="text-[#0D0F2B] font-bold text-xl mb-2 tracking-tight">
        {name}
      </h3>

      {/* Price */}
      <p className="text-[#0D0F2B] font-bold text-2xl mb-5">{price}</p>

      {/* Button — bone shape appears on hover */}
      <div
        className="transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 1,
        }}
      >
        <Button label="SHOP NOW" className="text-[#FB923C] bg-[#FB923C]" />
      </div>
    </div>
  );
};

export default ProductCard;
