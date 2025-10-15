import React from "react";
import { motion } from "framer-motion";
import StoreItems from "../Data/StoreItems.json";
import { useShoppingContext } from "./ShoppingCartContext";

export const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingContext();
  const item = StoreItems.find((item) => item.id === id);
  if (!item) return null;

  return (
    <motion.div
      className="flex items-center justify-between bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Info */}
      <div className="flex-1 ml-4">
        <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
        <p className="text-sm text-gray-500">
          {item.price}$ × {quantity}
        </p>
        <p className="text-blue-600 font-medium">{item.price * quantity}$</p>
      </div>

      {/* Remove button */}
      <button
        onClick={() => removeFromCart(id)}
        className="text-red-500 hover:text-red-700 font-semibold text-sm transition"
      >
        Remove
      </button>
    </motion.div>
  );
};
