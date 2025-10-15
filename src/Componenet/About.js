import React from "react";
import { motion } from "framer-motion";
import aboutImg from './about.jpg';
export const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 text-gray-800 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-blue-600">Us</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Welcome to <span className="font-semibold text-blue-600">Our Store</span> —
          a place where creativity meets quality. We started with a simple idea:
          to bring <span className="font-medium">unique, beautifully crafted products</span> 
          into people’s homes and lives. Every product you see here is carefully chosen 
          or designed to add warmth, functionality, and joy to your everyday moments.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-10 mt-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="space-y-4 text-left md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900">
              🌿 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make elegant design accessible to everyone.  
              We believe in sustainability, honesty, and long-term value — not trends that fade.
              Every item reflects our commitment to craftsmanship and customer satisfaction.
            </p>
          </div>

          <motion.img
            src={aboutImg}
            alt="About Us"
            className="rounded-2xl shadow-lg w-full object-cover h-80"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">✨ Our Promise</h3>
          <p className="text-gray-600 leading-relaxed">
            We promise to stay true to our values — authenticity, quality, and care.  
            Whether it’s a handcrafted piece or a digital creation, we’re here to ensure
            you have an experience that feels personal and inspiring.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};
