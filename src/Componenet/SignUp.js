import React, { useState } from "react";
import { motion } from "framer-motion";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    terms: false,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.first ||
      !formData.last ||
      !formData.username ||
      !formData.city ||
      !formData.state ||
      !formData.zip ||
      !formData.terms
    ) {
      setValidated(false);
      alert("Please fill all required fields correctly!");
      return;
    }
    setValidated(true);
    alert("✅ Form submitted successfully!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <motion.div
        className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              First Name
            </label>
            <input
              name="first"
              type="text"
              value={formData.first}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              name="last"
              type="text"
              value={formData.last}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="bg-gray-100 text-gray-600 px-3">@</span>
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="username"
                className="w-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">City</label>
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* State + Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                State
              </label>
              <input
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                placeholder="Your state"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                ZIP
              </label>
              <input
                name="zip"
                type="text"
                value={formData.zip}
                onChange={handleChange}
                placeholder="ZIP code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </span>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Sign Up
          </motion.button>

          {validated && (
            <motion.p
              className="text-green-600 font-medium text-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🎉 Account created successfully!
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};
