"use client";

import React, { useState } from 'react';

const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Add filtering logic here if needed
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // Add filtering logic here if needed
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // Add filtering logic here if needed
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedColor('');
    setSelectedSize('');
  };

  return (
    <aside className="w-full min-h-screen sm:w-2/4 p-4">
      <h4 className="text-lg font-semibold mb-4">Filters</h4>
      <button 
        onClick={clearFilters} 
        className="mb-4 text-red-500 hover:underline"
      >
        Clear All Filters
      </button>

      {/* Category Filter */}
      <div className="mb-6">
        <h5 className="font-medium mb-2">Category</h5>
        <ul className="space-y-2">
          <li>
            <button 
              className={`text-left w-full ${selectedCategory === 'Everyone - All Gender Collection' ? 'font-bold' : ''}`} 
              onClick={() => handleCategorySelect('Everyone - All Gender Collection')}
            >
              Everyone - All Gender Collection
            </button>
          </li>
          <li>
            <button 
              className={`text-left w-full ${selectedCategory === 'Dress Shirts & Button Downs' ? 'font-bold' : ''}`} 
              onClick={() => handleCategorySelect('Dress Shirts & Button Downs')}
            >
              Dress Shirts & Button Downs
            </button>
          </li>
          {/* Add more categories here */}
        </ul>
      </div>

      {/* Color Filter */}
          <div className="mb-6 ">
      <h5 className="font-medium mb-2">Color</h5>
      <div className="flex gap-2 flex-wrap">
        {['black', 'white', 'green', 'blue', 'brown', 'orange'].map(color => (
          <button 
            key={color} 
            className={`w-8 h-8 rounded-full ${color === selectedColor ? 'border-2 border-gray-800' : ''} ${color === 'white' ? 'border-2 border-black' : ''}`} 
            style={{ backgroundColor: color }} // Set the background color directly
            onClick={() => handleColorSelect(color)}
          ></button>
        ))}
      </div>
    </div>


      {/* Size Filter */}
      <div className="mb-6">
        <h5 className="font-medium mb-2">Size</h5>
        <div className="grid grid-cols-3 gap-2">
          {['XS', 'S', 'M', 'L', 'XL'].map(size => (
            <button 
              key={size} 
              className={`border px-3 py-1 rounded ${selectedSize === size ? 'bg-gray-300 font-bold' : ''}`} 
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
