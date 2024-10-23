"use client";

import React from 'react';
import { useCart } from './CartContext';

interface CartSidebarProps {
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="fixed top-[87px] right-0 w-[400px] h-[calc(100vh-87px)] bg-white shadow-lg z-50 p-6">
      <button 
        onClick={onClose} 
        className="text-gray-500 hover:text-gray-800 mb-4"
        aria-label="Close cart"
      >
        Close
      </button>

      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover mr-2" 
                    onError={(e) => e.currentTarget.src = "/assets/shein1.jpg"} // Handle missing images
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price.toFixed(2)}</p> {/* Ensuring price has two decimal points */}
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button 
            onClick={clearCart} 
            className="w-full bg-black text-white py-2 mt-4"
            aria-label="Clear cart"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
