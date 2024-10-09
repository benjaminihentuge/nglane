import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <Link href="/">
          <h1 className="text-2xl font-bold">NGLane</h1>
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/products" className="hover:text-gray-400">Products</Link>
      </nav>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded"
        />
      </div>
    </header>
  );
};

export default Header;
