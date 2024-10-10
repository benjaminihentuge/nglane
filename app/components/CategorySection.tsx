"use client"; // Add this line at the top


import React, { Component } from 'react';


class CategorySection extends Component {
  componentDidMount() {
    console.log("CategorySection mounted");
  }

  render() {
    return (
      <section className="py-12 bg-gray-100 border-b border-gray-300">
        <h2 className="text-2xl font-semibold text-center text-black mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="category bg-white p-4 shadow-md">
            <span>SHIRTS</span>
          </div>
          <div className="category bg-white p-4 shadow-md">
            <img src="/path-to-kaftan-placeholder.png" alt="Kaftan" className="w-full h-32 object-cover mb-2" />
            <span>KAFTAN</span>
          </div>
          <div className="category bg-white p-4 shadow-md">
            <img src="/path-to-2-piece-placeholder.png" alt="2 Piece" className="w-full h-32 object-cover mb-2" />
            <span>2 PIECE</span>
          </div>
          <div className="category bg-white p-4 shadow-md">
            <img src="/path-to-pants-placeholder.png" alt="Pants" className="w-full h-32 object-cover mb-2" />
            <span>PANTS</span>
          </div>
          <div className="category bg-white p-4 shadow-md">
            <img src="/path-to-dress-placeholder.png" alt="Dress" className="w-full h-32 object-cover mb-2" />
            <span>DRESS</span>
          </div>
          <div className="category bg-white p-4 shadow-md">
            <img src="/path-to-asoebe-placeholder.png" alt="Asoebe" className="w-full h-32 object-cover mb-2" />
            <span>ASOEBE</span>
          </div>
        </div>
      </section>
    );
  }
}

export default CategorySection;
