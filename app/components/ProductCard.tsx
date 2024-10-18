"use client";

import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number | null; // Allow salePrice to be null
  image: string;
  colors: string[]; // New property for available colors
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      {/* Image displayed inside the card container */}
      <div className=" p-1 shadow-sm w-full mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product details outside of the card container */}
      <div className="text-center">
        <h3 className="text-lg font-bold mb-1">{product.name}</h3>

        {product.salePrice ? (
          <p className="text-red-500 text-sm">
            ${product.salePrice.toFixed(2)}{" "}
            <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
          </p>
        ) : (
          <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>
        )}

        {/* Colors section with swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex mt-2 justify-center">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border border-gray-300 mx-1"
                style={{ backgroundColor: color }}
                title={color} // Show color name on hover
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
