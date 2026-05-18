import React from "react";
import ProductCard from "../../cards/ProductCard";

export const ProductCardData = [
  {
    id: 1,
    name: "Flavoured Bars",
    price: "$19.99",
    image: "/product/product-C.webp",
    imgBgColor: "#FFFAE5",
  },
  {
    id: 2,
    name: "Puffed Crunchy Snacks",
    price: "$14.99",
    image: "/product/product-B.webp",
    imgBgColor: "#F0F9FF",
  },
  {
    id: 3,
    name: "Natural Chew Bars and Nuggets",
    price: "$9.99",
    image: "/product/product-A.webp",
    imgBgColor: "#FDF2F8",
  },
];

const OurProducts = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6">
      <h1 className="text-black font-bold text-6xl py-3">Our Products</h1>
      <div className="flex flex-wrap gap-8 justify-between">
        {ProductCardData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
