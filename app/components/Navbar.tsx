// app/components/Navbar.tsx
import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white p-4 shadow-md">
        <div className="text-lg font-bold">NGLANE</div>
        <ul className="flex space-x-4">
          <li><a href="/women" className="hover:underline">Women</a></li>
          <li><a href="/men" className="hover:underline">Men</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
        <div className="ml-auto">
          <a href="/cart" className="hover:text-gray-700">Cart</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
