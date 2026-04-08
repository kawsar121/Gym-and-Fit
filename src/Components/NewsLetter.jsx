import React from 'react';
import { motion } from 'framer-motion';
const NewsLetter = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 my-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-black rounded-[50px] py-16 px-6 lg:px-20 text-center overflow-hidden"
        >
          {/* Background Decorative Elements (Halka dot pattern) */}
          <div className="absolute top-10 left-10 opacity-20 hidden md:block">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 bg-gray-500 rounded-full"></div>)}
            </div>
          </div>

          <h4 className="text-gray-400 text-lg mb-2">Join our community</h4>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Subscribe to our <span className="relative">newsletter
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 12 100 5" stroke="#5FB539" strokeWidth="3" fill="transparent" />
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, 
            You'll Receive Expert Training Tips, Nutrition Guides, Exclusive Discounts, And The Latest News.
          </p>

          {/* Search/Input Box */}
          <div className="max-w-xl mx-auto relative flex items-center bg-transparent border border-gray-600 rounded-full p-2">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="bg-transparent flex-1 px-6 py-2 text-white outline-none placeholder:text-gray-600"
            />
            <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-[#5FB539] hover:text-white transition-all duration-300">
              SUBSCRIBE
            </button>
          </div>
        </motion.div>
      </div>
    );
};

export default NewsLetter;