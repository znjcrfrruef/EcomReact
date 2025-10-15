import React from "react";
import { motion } from "framer-motion";
import { useShoppingContext } from "./ShoppingCartContext";
import { Heart, ShoppingCart, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemsQuantite,
    increaseCartQuantite,
    decreaseCartQuantite,
    removeFromCart,
    AjoutFavorit,
  } = useShoppingContext();

  const quantity = getItemsQuantite(id);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
      
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate(`/product/${id}`)}      
        />
        <button
          onClick={() => AjoutFavorit(id)}
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-md rounded-full p-2 hover:bg-red-100 transition"
        >
          <Heart size={22} className="text-red-500" />
        </button>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <span className="text-blue-600 font-semibold text-lg">${price}</span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantite(id)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseCartQuantite(id)}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity} in cart</span>
              <button
                onClick={() => increaseCartQuantite(id)}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
            >
              <Trash size={18} /> Remove
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
