import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-10 pt-10 md:pt-16">
        <hr className="text-gray-600 mb-20"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* About */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-black">About</h3>
          <p className="text-black text-sm leading-relaxed">
            At MuscleForge, we believe in the power of dedication and hard work.
            Our mission is to provide you with the tools, resources, and
            community you need to build the body of your dreams.
          </p>
          <div className="flex gap-4">
            <span className="text-black text-sm font-semibold italic border-t border-black pb-1">
              Social Media: Fb In Tw
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-black">Quick Links</h3>
          <ul className="space-y-3 text-black text-sm">
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Our gym location
            </li>
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Our Service */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-black">Our Service</h3>
          <ul className="space-y-3 text-black text-sm">
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Indoor gym
            </li>
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Outdoor gym
            </li>
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              On ground gym
            </li>
            <li className="hover:text-[#5FB539] cursor-pointer transition">
              Yoga class
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-black">Contact Info</h3>
          <ul className="space-y-4 text-black text-sm">
            <li>
              <span className="font-bold text-black">Mail:</span>{" "}
              info@example.com
            </li>
            <li>
              <span className="font-bold text-black">Call:</span> +91 9876543210
            </li>
            <li>
              <span className="font-bold text-black">Location:</span> New York,
              235 Lane, 10001
            </li>
            <li>
              <span className="font-bold text-black">Time:</span> Workout Hours:
              5AM - 8PM
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-5 md:mt-20  pt-8  border-gray-100 ">
        <hr className="w-full max-w-100 md:max-w-xl mx-auto border-gray-300 mb-5"/>
        <p className="text-center text-black text-xs">websitename.com©2026 all right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;
