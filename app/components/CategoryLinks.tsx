"use client"; // Ensure this is a client-side component
import React from 'react';

const CategoryLinks = () => {
  return (
    <div className="hidden md:flex bg-gray-100 p-4 text-sm text-gray-600 justify-center space-x-10 border-b border-gray-300 fixed top-20 left-0 right-0 z-30">
      <a href="/shop/new-arrivals" className="hover:underline">New Arrivals</a>
      <a href="/shop/best-sellers" className="hover:underline">Best Sellers</a>
      <a href="/shop/dresses" className="hover:underline">Dresses</a>
      <a href="/shop/shirts" className="hover:underline">Shirts</a>
      <a href="/shop/pants" className="hover:underline">Pants</a>
      <a href="/shop/sales" className="hover:underline">Sales</a>
    </div>
  );
};

export default CategoryLinks;
