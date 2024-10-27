"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define a product type
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Define the Cart context type
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  totalItemCount: number; // Add totalItemCount to context
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

// Cart Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  // Calculate the total item count
  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, setCart, totalItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
