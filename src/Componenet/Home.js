import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background image */}
      <img
        src={require("./home.jpg")}
        alt="Home background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />  
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Feel the <span className="text-blue-400">Good Vibes</span> 🥳
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover products that make your space more beautiful, functional, and full of joy.
        </p>

        <div className="mt-8">
          <Link
            to="/Store"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold text-white text-lg transition-transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </motion.div>

      {/* Bottom wave shape */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L60,197.3C120,171,240,117,360,106.7C480,96,600,128,720,165.3C840,203,960,245,1080,250.7C1200,256,1320,224,1380,208L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
};
