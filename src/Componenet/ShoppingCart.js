import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShoppingContext } from "./ShoppingCartContext";
import { CartItem } from "./CartItem";

export const ShoppingCart = ({ isOpen }) => {
  const { cartItem, closeCart, TotalePrice } = useShoppingContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Cart panel */}
          <motion.div
            className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800">🛒 Your Cart</h2>
              <button
                onClick={closeCart}
                className="text-gray-500 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {cartItem.length > 0 ? (
                cartItem.map((item) => <CartItem key={item.id} {...item} />)
              ) : (
                <p className="text-center text-gray-500 text-lg mt-10">
                  Your cart is empty 🛍️
                </p>
              )}
            </div>

            {/* Footer */}
            {cartItem.length > 0 && (
              <div className="border-t border-gray-200 p-5">
                <div className="flex justify-between text-lg font-medium mb-4">
                  <span>Total:</span>
                  <span className="text-blue-600 font-semibold">{TotalePrice()} $</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
