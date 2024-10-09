// app/layout.tsx
"use client"; // Add this line at the top

import React from 'react';
import TopBar from './components/TopBar';  // Import TopBar component
import Navbar from './components/Navbar';  // Import Navbar component
import CategoryLinks from './components/CategoryLinks';  // Import CategoryLinks component

import Footer from './components/Footer';

const Layout = ({ children }) => {
  console.log("Layout Rendered");
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        <CategoryLinks />
        <main>{children}</main> {/* Render the children here */}
        <Footer />
      </body>
    </html>
    );
};

export default Layout;
