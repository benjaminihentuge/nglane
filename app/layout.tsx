"use client"; // Add this line at the top
import { CartProvider } from './components/CartContext';
import React from 'react';
import TopBar from './components/TopBar';  
import Navbar from './components/Navbar';  
import CategoryLinks from './components/CategoryLinks';  
import Footer from './components/Footer';
import '../styles/globals.css';

interface LayoutProps {
  children: React.ReactNode; // Define the type of children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  console.log("Layout Rendered");
  return (
    <html lang="en">
      <body>
      <CartProvider>
        <TopBar />
        <Navbar />
        <CategoryLinks />
        <main>{children}</main> {/* Render the children here */}
        <Footer />
      </CartProvider>
      </body>
    </html>
  );
};

export default Layout;
