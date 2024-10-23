"use client";

import React, { useState, useEffect } from "react";
import FilterSidebar from "../../../components/FilterSidebar"; // Import the FilterSidebar
import { useParams, useRouter } from "next/navigation"; // Import useRouter for redirection
import ProductGrid from "../../../components/ProductGrid"; // Adjust the path if necessary
import { useCart } from "../../../components/CartContext"; // Import useCart
const CategoryPage: React.FC = () => {
  const params = useParams(); // Access dynamic route params
  const router = useRouter(); // For redirection
  const category = params?.category; // Get the category from the URL

  // Simple validation for the category
  const validCategories = ['shirts', 'kaftan', '2piece', 'pants', 'dress', 'asoebi']; // Include all categories
  const isValidCategory = validCategories.includes(category as string);
  
  // Loading state (example if fetching data)
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  useEffect(() => {
    // Simulate loading time (remove in production)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Redirect if the category is invalid (optional)
  useEffect(() => {
    if (!isValidCategory) {
      console.warn("Invalid category detected, redirecting...");
      router.push("/"); // Redirect if invalid
    }
  }, [isValidCategory, router]);

  return (
    <div className="flex w-full min-h-screen bg-white text-black">
      {/* Button to toggle the filter sidebar on small screens */}
      <div className="fixed top-20 left-0 z-10 p-4 md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-gray-200 rounded-lg text-black"
        >
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter sidebar for small screens */}
      <div
        className={`fixed bottom-0 left-0 w-full h-[75vh] bg-white z-50 md:hidden flex flex-col transition-transform duration-300 ${
          isSidebarOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transform: isSidebarOpen ? "translateY(0)" : "translateY(100%)" }} // Explicit control over the animation
      >
        {/* Close button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-2xl text-black absolute top-4 right-4"
        >
          &times;
        </button>

        {/* Sidebar content with scroll */}
        <div className="flex-1 p-4 overflow-y-auto">
          <FilterSidebar />
        </div>

        {/* Fixed buttons at the bottom */}
        <div className="p-4 border-t border-gray-200 bg-white flex justify-between">
          <button
            onClick={() => console.log("Clear Filters")}
            className="p-2 bg-red-500 text-white rounded-lg flex-1 mr-2"
          >
            Clear
          </button>
          <button
            onClick={() => console.log("View All Products")}
            className="p-2 bg-blue-500 text-white rounded-lg flex-1 ml-2"
          >
            View All Products
          </button>
        </div>
      </div>

      <div className="container min-h-screen mx-auto mt-24 flex py-10">
        {/* Sidebar for larger screens */}
        <div className="hidden md:block w-1/4 p-1 border-r border-gray-200">
          <FilterSidebar />
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4 p-1 bg-white min-h-screen mx-auto py-10">
          {loading ? (
            <h1 className="text-3xl font-semibold text-center">Loading...</h1>
          ) : isValidCategory ? (
            <>
              <h1 className="text-3xl font-semibold text-center capitalize mb-6">
                {category} Products
              </h1>
              <ProductGrid selectedCategory={category as string} />
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-center text-red-500 mb-4">
                Category not found
              </h1>
              <button 
                onClick={() => router.push("/")} 
                className="p-2 bg-blue-500 text-white rounded">
                Go to Shop
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
