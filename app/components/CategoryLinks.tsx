"use client"; // Ensure this is a client-side component
import React, { Component } from 'react';

class CategoryLinks extends Component {
  render() {
    return (
      <div className="hidden md:flex bg-gray-100 p-4 text-sm text-gray-600 justify-center space-x-10 border-b border-gray-300 fixed top-20 left-0 right-0 z-30">
        <a href="/new-arrivals" className="hover:underline">New Arrivals</a>
        <a href="/best-sellers" className="hover:underline">Best Sellers</a>
        <a href="/dresses" className="hover:underline">Dresses</a>
        <a href="/shirts" className="hover:underline">Shirts</a>
        <a href="/pants" className="hover:underline">Pants</a>
        <a href="/sales" className="hover:underline">Sales</a>
      </div>
    );
  }
}

export default CategoryLinks;
