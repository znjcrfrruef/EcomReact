import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import StoreItems from "../Data/StoreItems.json";
import { useShoppingContext } from "./ShoppingCartContext";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = StoreItems.find((p) => p.id === parseInt(id));
  const { increaseCartQuantite, AjoutFavorit } = useShoppingContext();

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl text-gray-600">
        Product not found 😔
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-5xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <motion.img
            src={product.imgUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.button
            onClick={() => AjoutFavorit(product.id)}
            className="absolute top-4 right-4 bg-white shadow-lg rounded-full p-2 text-red-500 hover:bg-red-100 transition-all"
            whileTap={{ scale: 0.9 }}
          >
            ❤️
          </motion.button>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>
            <p className="text-blue-600 text-2xl font-semibold mb-5">
              ${product.price}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Experience the perfect balance between elegance and functionality
              with our premium {product.name}. Designed with high-quality
              materials and crafted for comfort, this product is ideal for daily
              use and special occasions alike.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => increaseCartQuantite(product.id)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Add to Cart 🛒
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => AjoutFavorit(product.id)}
              className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Add to Favorites ❤️
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
