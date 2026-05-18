import React from "react";
import ProductCard from "../../cards/ProductCard";
import { ProductCardData } from "@/constants/data";

// export const ProductCardData = [
//   {
//     id: 1,
//     name: "Flavoured Bars",
//     price: "$19.99",
//     image: "/product/product-C.webp",
//     imgBgColor: "#FFFAE5",
//   },
//   {
//     id: 2,
//     name: "Puffed Crunchy Snacks",
//     price: "$14.99",
//     image: "/product/product-B.webp",
//     imgBgColor: "#F0F9FF",
//   },
//   {
//     id: 3,
//     name: "Natural Chew Bars and Nuggets",
//     price: "$9.99",
//     image: "/product/product-A.webp",
//     imgBgColor: "#FDF2F8",
//   },
// ];

const OurProducts = () => {
  return (
    <section className="min-h-screen relative bg-[#EE7C26] flex flex-col items-center justify-center py-20 px-6">
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.75]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      <div className="relative z-40">
        <h1 className="text-black font-bold text-6xl py-3">Our Products</h1>
        <div className="flex flex-wrap gap-8 justify-between">
          {ProductCardData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
