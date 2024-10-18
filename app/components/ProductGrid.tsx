"use client";
import React from "react";
import ProductCard from "./ProductCard"; // ProductCard component
import { products } from "../../data/products"; // Product data

interface ProductGridProps {
  selectedCategory: string; // Prop for category selection
}

const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory }) => {
  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-1">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center">No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductGrid;
