"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface CartSidebarProps {
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    onClose();
    setTimeout(() => router.push("/checkout"), 100);
  };

  // Prevent page scroll when sidebar is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Render loading state while cart data is being prepared
  if (!cart) return <div>Loading...</div>;

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 right-0 w-[400px] h-screen bg-white shadow-lg z-50 flex flex-col"
    >
      <div className="p-6 border-b flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800"
          aria-label="Close cart"
        >
          Close
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
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
                    onError={(e) => (e.currentTarget.src = "/assets/shein1.jpg")}
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 border rounded-full hover:bg-gray-200"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        <MinusIcon className="w-4 h-4 text-gray-700" />
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 border rounded-full hover:bg-gray-200"
                        aria-label="Increase quantity"
                      >
                        <PlusIcon className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                  <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-700" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-6 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
