"use client";

import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for internal navigation
import React from "react";
import { StaticImageData } from 'next/image'; // Importing StaticImageData

// Define the props for the category section
type CategorySectionProps = {
  categories: { name: string; imgSrc: StaticImageData; link: string }[];
};

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-gray-100 border-b border-gray-500">
      <h2 className="text-2xl font-semibold text-center text-black mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 px-4 md:px-12 lg:px-10">
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className="group">
            <div className="relative w-full h-64 overflow-hidden rounded-md">
              <Image
                src={category.imgSrc}
                alt={`${category.name} category`} // More descriptive alt text
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 16vw"
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="mt-2 text-black font-medium block text-center">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
