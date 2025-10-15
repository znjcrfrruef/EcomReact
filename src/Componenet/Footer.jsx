import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Good Vibes Store</h2>
          <p className="text-gray-200 mb-4">
            Bringing warmth and elegance to your home with unique decoration
            pieces crafted to inspire ✨
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-yellow-400 text-xl transition-all"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 text-xl transition-all"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 text-xl transition-all"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 text-xl transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <FaEnvelope /> info@goodvibes.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone /> +213 555 123 456
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> Algiers, Algeria
            </li>
          </ul>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.153427876664!2d3.0599726!3d36.7537689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2c77b4a0ab9%3A0x40a1b5ab8127a0b7!2sAlger%20Centre!5e0!3m2!1sen!2sdz!4v1674411191048!5m2!1sen!2sdz"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-950 py-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Good Vibes Store. All Rights Reserved.
      </div>
    </footer>
  );
};
