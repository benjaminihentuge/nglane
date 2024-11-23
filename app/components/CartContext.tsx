"use client";

import React, { 
  createContext, 
  useState, 
  useContext, 
  ReactNode, 
  useEffect 
} from 'react';

// Define a product type
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;  // Path to image stored in public/assets
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
  totalItemCount: number;
}

// Create context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap the application
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Store the cart in localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Add product to the cart
  const addToCart = (product: Product) => {
    console.log('Adding product to cart:', product); // Debugging
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update product quantity in the cart
  const updateQuantity = (id: string, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(newQuantity, 1) } 
          : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  // Calculate total number of items in the cart
  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        setCart, 
        totalItemCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

