"use client";

import React, { useState } from "react";
import { useCart } from './CartContext';
import CartSidebar from './CartSidebar'; // Import CartSidebar

interface ProductDetailsProps {
  name: string;
  price: number;
  salePrice: number | null;
  description: string;
  colors: string[];
  sizes: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  salePrice,
  description,
  colors,
  sizes,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar visibility

  const toggleCart = () => setIsCartOpen(!isCartOpen); // Function to toggle cart visibility

  const handleAddToCart = () => {
    addToCart({
      id: name.toLowerCase().replace(/\s+/g, '-'), // Unique ID based on name
      name,
      price: salePrice ?? price,
      image: '', // Replace with actual image if available
      quantity: 1,
    });
    toggleCart(); // Open cart sidebar after adding item
  };

  return (
    <div className="space-y-6 bg-slate-100 mt-32 text-black w-full">
      <h1 className="text-4xl font-bold">{name}</h1>

      {/* Price Display Logic */}
      <div className="text-xl">
        {salePrice !== null ? (
          <>
            <span className="line-through text-gray-500 font-semibold">
              {`$${price.toFixed(2)}`}
            </span>
            <span className="text-red-500 font-bold ml-4">
              {`$${salePrice.toFixed(2)}`}
            </span>
          </>
        ) : (
          <span className="text-gray-700">{`$${price.toFixed(2)}`}</span>
        )}
      </div>

      <p>{description}</p>

      {/* Colors */}
      <div>
        <h2 className="text-lg font-semibold">Colors</h2>
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={`w-8 h-8 rounded-full border ${
                selectedColor === color ? "border-black" : ""
              }`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex space-x-2">
          {sizes.map((size, index) => (
            <button
              key={index}
              className={`w-10 h-10 border rounded-full flex items-center justify-center text-gray-700 font-semibold ${
                selectedSize === size ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <button
        className="bg-gray-700 hover:bg-gray-800 w-full text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleAddToCart} // Call handleAddToCart on click
      >
        Add to Cart
      </button>

      {isCartOpen && <CartSidebar onClose={toggleCart} />} {/* Cart sidebar */}
    </div>
  );
};

export default ProductDetails;
