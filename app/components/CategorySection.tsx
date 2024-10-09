// app/components/CategorySection.tsx
import React, { Component } from 'react';

class CategorySection extends Component {
  render() {
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="category bg-white p-4 shadow-md">Jackets</div>
          <div className="category bg-white p-4 shadow-md">Kimonos</div>
          <div className="category bg-white p-4 shadow-md">Dresses</div>
          <div className="category bg-white p-4 shadow-md">Pants</div>
          <div className="category bg-white p-4 shadow-md">Accessories</div>
        </div>
      </section>
    );
  }
}

export default CategorySection;
