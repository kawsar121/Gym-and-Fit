import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-100 px-2 lg:px-16 py-3.5 mt-2">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4 lg:gap-10">
          <Link to="/">
            <img
              src="/src/assets/Untitled3.png"
              alt="Logo"
              className="w-10 lg:w-14"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 border border-white bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
            <Link
              to="/"
              className="text-white text-sm hover:text-lime-500 transition"
            >
              Home
            </Link>
            <Link
              to="/location"
              className="text-gray-400 text-sm hover:text-white transition"
            >
              Our gym location
            </Link>

            <div className="flex items-center bg-white/10 rounded-full px-3 py-2 ml-4 border border-white/10">
              <input
                className="bg-transparent outline-none text-white px-2 text-xs w-24 focus:w-40 transition-all duration-300"
                placeholder="Search"
              />
              <Search size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/register"
            className="hidden lg:block bg-lime-500 px-16 py-4 rounded-full text-white font-bold text-sm shadow-lg hover:bg-lime-600 hover:scale-105 transition-all"
          >
            REGI
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white bg-gray-800 rounded-xl backdrop-blur-md border border-white/20"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 overflow-hidden bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link
                onClick={() => setIsOpen(false)}
                to="/"
                className="text-white text-lg font-medium border-b border-white/10 pb-2"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="/location"
                className="text-white text-lg font-medium border-b border-white/10 pb-2"
              >
                Our gym location
              </Link>

              <div className="flex items-center bg-white/10 rounded-2xl px-4 py-3">
                <input
                  className="bg-transparent outline-none text-white w-full"
                  placeholder="Search anything..."
                />
                <Search size={20} className="text-gray-400" />
              </div>

              <Link
                onClick={() => setIsOpen(false)}
                to="/register"
                className="bg-lime-500 w-full py-4 rounded-2xl text-white text-center font-bold text-lg shadow-lg"
              >
                REGISTER NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
