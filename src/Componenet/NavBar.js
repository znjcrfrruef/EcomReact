import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Heart, List, X } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { useShoppingContext } from "./ShoppingCartContext";

export const NavBar = () => {
  const { openCart, cartQuantity, openFavorit, favoritQuantity } =
    useShoppingContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Store", path: "/Store" },
    { name: "About", path: "/About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          🛍️ <span>MyShop</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative text-gray-700 font-medium transition-colors hover:text-blue-600
                ${isActive ? "text-blue-600" : ""}`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Favorite */}
          <button
            onClick={openFavorit}
            className="relative p-2 rounded-full hover:bg-red-50 transition-transform hover:scale-110"
          >
            <Heart size={26} className="text-red-500" />
            {favoritQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favoritQuantity}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative p-2 rounded-full hover:bg-blue-50 transition-transform hover:scale-110"
          >
            <ShoppingCart size={26} className="text-blue-600" />
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartQuantity}
              </span>
            )}
          </button>

          {/* Sign Up */}
          <Link
            to="/SignUp"
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-transform hover:scale-105 shadow-sm"
          >
            Sign Up
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-gray-700 font-medium hover:text-blue-600 transition
                    ${isActive ? "text-blue-600" : ""}`
                  }
                >
                  {name}
                </NavLink>
              ))}

              <Link
                to="/SignUp"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-full font-medium transition"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
