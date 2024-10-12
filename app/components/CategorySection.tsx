"use client";

import Image from "next/image";
import React from "react";

// Import your images
import Shirt from '../../assets/1st_shirt.jpg';
import Kaftan from '../../assets/kaftan2.jpg';
import Twopiece from '../../assets/vintage2piece.jpg';
import Pants from '../../assets/pants.jpg';
import Dress from '../../assets/dress.jpg';
import Asoebe from '../../assets/linenTwoPiece1.jpg';

// Define categories with images and links
const categories = [
  {
    name: "SHIRTS",
    imgSrc: Shirt,
    link: "/shop/shirts", // Example link, update as needed
  },
  {
    name: "KAFTAN",
    imgSrc: Kaftan,
    link: "/shop/kaftan", // Example link, update as needed
  },
  {
    name: "2 PIECE",
    imgSrc: Twopiece,
    link: "/shop/2piece", // Example link, update as needed
  },
  {
    name: "PANTS",
    imgSrc: Pants,
    link: "/shop/pants", // Example link, update as needed
  },
  {
    name: "DRESS",
    imgSrc: Dress,
    link: "/shop/dress", // Example link, update as needed
  },
  {
    name: "ASOEBE",
    imgSrc: Asoebe,
    link: "/shop/asoebe", // Example link, update as needed
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-100 border-b border-gray-500">
      <h2 className="text-2xl font-semibold text-center text-black mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 px-4 md:px-12 lg:px-10">
        {categories.map((category, index) => (
          <a href={category.link} key={index} className="group">
            <div className="relative w-full h-64 overflow-hidden rounded-md">
              <Image
                src={category.imgSrc}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 16vw"
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="mt-2 text-black font-medium block text-center">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
