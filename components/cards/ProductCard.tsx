"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/Button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image?: string;
  imgBgColor?: string;
  description?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  imgBgColor,
  description,
}: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  const index = String(id).padStart(2, "0");

  return (
    <div
      className="flex flex-col w-full sm:w-72 md:w-80 lg:w-96 xl:w-[420px] bg-transparent  p-5 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Index number */}
      <span className="font-mono text-[#0D0F2B] text-4xl mb-3 tracking-tight">
        {index}.
      </span>
      <div
        className="w-full border  border-[#0D0F2B] p-2 mb-5 overflow-hidden"
        style={{ aspectRatio: "4 / 4.2" }}
      >
        <div
          className="w-full h-full  overflow-hidden"
          style={{ backgroundColor: imgBgColor ?? "#E8E4DC" }}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              width={420}
              height={315}
              className="object-cover  w-full h-full transition-transform duration-700 ease-out"
              style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
            />
          ) : (
            <div className="w-full h-full bg-[#DDD9CF]" />
          )}
        </div>
      </div>

      {/* Name row — circle icon + name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-7 h-7 rounded-full border border-[#0D0F2B] shrink-0" />
        <span className="font-mono text-[#0D0F2B] text-sm uppercase tracking-widest">
          {name}
        </span>
      </div>

      {/* Price + divider */}
      <div className="mb-4">
        <p className="font-mono font-bold text-[#0D0F2B] text-3xl mb-2">
          {price}
        </p>
        <div className="w-full h-px bg-[#0D0F2B]" />
      </div>

      {/* Description */}
      {description && (
        <p className="font-mono text-[#0D0F2B] text-sm leading-relaxed">
          {description}
        </p>
      )}
      {/* <Button label="shop now" className="border-none" /> */}
    </div>
  );
};

export default ProductCard;
