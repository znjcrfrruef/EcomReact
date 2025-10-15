import React, { useState } from "react";
import { motion } from "framer-motion";
import StoreItems from "../Data/StoreItems.json";
import { StoreItem } from "./StoreItem";

export const Store = () => {
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");

  const filteredItems = filterEnabled
    ? StoreItems.filter((item) => item.price < priceFilter)
    : StoreItems;

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-blue-600">Store</span> 🛍️
        </h1>
        <p className="mt-2 text-gray-500">
          Discover our curated selection of modern products for your lifestyle.
        </p>
      </motion.div>

      {/* Filter bar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <input
          type="number"
          placeholder="Price < ...$"
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-60"
        />
        <button
          onClick={() => setFilterEnabled(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-transform hover:scale-105"
        >
          Filter
        </button>
        <button
          onClick={() => {
            setFilterEnabled(false);
            setPriceFilter("");
          }}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          Reset
        </button>
      </div>

      {/* Items grid */}
      {filteredItems.length > 0 ? (
        <motion.div
          layout
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredItems.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 text-3xl font-semibold mt-20"
        >
          No Products Found 😢
        </motion.div>
      )}
    </section>
  );
};
