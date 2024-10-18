"use client";

import React from "react";
import FilterSidebar from "../../components/FilterSidebar"; // Import the FilterSidebar
import { useParams } from "next/navigation";
import ProductGrid from "../../components/ProductGrid"; // Adjust the path if necessary

const CategoryPage: React.FC = () => {
  const params = useParams(); // Access dynamic route params
  const category = params?.category; // Get the category from the URL

  // Simple validation for the category
  const validCategories = ['shirts', 'kaftan', '2piece', 'pants', 'dress', 'asoebe']; // Include all categories
  const isValidCategory = validCategories.includes(category as string);

  return (
    <div className="flex w-full min-h-screen bg-white text-black"> {/* Ensure full height and background */}
      <div className="container min-h-screen mx-auto mt-24 flex py-10">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 p-1 border-r border-gray-200"> {/* Only show on medium screens and up */}
          <FilterSidebar />
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4 p-1 bg-white min-h-screen mx-auto py-10">
          {isValidCategory ? (
            <>
              <h1 className="text-3xl font-semibold text-center capitalize mb-6">
                {category} Products
              </h1>
              {/* Pass the selected category to ProductGrid */}
              <ProductGrid selectedCategory={category as string} />
            </>
          ) : (
            <h1 className="text-3xl font-semibold text-center text-red-500">
              Category not found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
