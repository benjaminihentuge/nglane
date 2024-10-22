"use client"; // This line must be added
import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  ShoppingCartIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-gray-200 p-4 shadow-md flex items-center justify-between text-black fixed top-8 left-0 right-0 z-50 border-b border-gray-500">

        {/* Hamburger Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links - Visible on larger screens */}
        <ul className="hidden sm:flex space-x-4">
          <li><a href="/women" className="hover:underline">Women</a></li>
          <li><a href="/" className="hover:underline">Men</a></li> {/* Updated to link to home */}
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>

        {/* Logo in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-widest">
          NGLANE
        </div>

        {/* Right-side icons */}
        <div className="flex space-x-5 items-center">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          {/* User Icon - only visible on larger screens */}
          <UserIcon className="hidden sm:block h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          <ShoppingCartIcon className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ top: '95px' }} className="fixed left-0 w-2/3 h-[calc(100vh-80px)] bg-gray-100 text-black z-50 p-6 space-y-4">
          {/* Men and Women Links */}
          <ul className="space-y-2">
            <li><a href="/women" className="hover:underline">Women</a></li>
            <li><a href="/" className="hover:underline">Men</a></li> {/* Updated to link to home */}
          </ul>

          {/* Category Links */}
          <ul className="space-y-4 pt-4 border-t border-gray-300">
            <li><a href="/new-arrivals" className="hover:underline">New Arrivals</a></li>
            <li><a href="/cult-favorites" className="hover:underline">Cult Favorites</a></li>
            <li><a href="/clothing" className="hover:underline">Clothing</a></li>
            <li><a href="/pants" className="hover:underline">Pants</a></li>
            <li><a href="/jeans" className="hover:underline">Jeans</a></li>
            <li><a href="/tees" className="hover:underline">Tees</a></li>
            <li><a href="/sweaters" className="hover:underline">Sweaters</a></li>
            <li><a href="/outerwear" className="hover:underline">Outerwear</a></li>
            <li><a href="/shoes-accessories" className="hover:underline">Shoes & Accessories</a></li>
            <li><a href="/sale" className="text-red-500 hover:underline">Sale</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
