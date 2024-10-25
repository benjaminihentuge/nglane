"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';

interface CartSidebarProps {
  onClose: () => void; // Ensure the onClose function is defined as a prop
}

const CartSidebar: React.FC<CartSidebarProps> = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  // Calculate the subtotal of the cart items
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle checkout action
  const handleCheckout = () => {
    onClose(); // Close the sidebar
    // Use next tick to allow the UI to update
    setTimeout(() => {
      router.push('/checkout'); // Redirect to the /checkout page
    }, 100);
  };

  return (
    <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-lg z-50 flex flex-col">
      <div className="flex-1 p-6 overflow-y-auto">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 mb-4" aria-label="Close cart">
          Close
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover mr-2" 
                    onError={(e) => (e.currentTarget.src = '/assets/shein1.jpg')} // Fallback image
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-500 hover:text-red-700" 
                  aria-label={`Remove ${item.name} from cart`}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-6 bg-gray-100 border-t">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
          </div>

          <button 
            onClick={handleCheckout} 
            className="w-full bg-black text-white py-2 mb-4" 
            aria-label="Proceed to checkout">
            Continue to Checkout
          </button>

          <button 
            onClick={clearCart} 
            className="w-full bg-gray-500 text-white py-2" 
            aria-label="Clear cart">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
