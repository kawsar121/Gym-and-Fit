import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const TrainingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-4 lg:p-10 max-w-7xl mx-auto">
      <div className="ml-5 my-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black/75">
          Train Like a Champion
        </h1>

        <p className="font-medium text-lg md:text-2xl mt-3">
          Unleash Your Power with Expert Boxing Training
        </p>
      </div>
      <div
        className=" bg-black rounded-[40px] p-8 lg:p-12 flex flex-col lg:grid lg:grid-cols-12 gap-10 overflow-hidden"
        data-aos="fade-up"
      >
       
        <div className="lg:col-span-4" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="https://yi-files.yellowimages.com/products/2058000/2058811/3150407-cover.jpg" 
            alt="Trainer"
            className="w-full h-full object-cover rounded-[30px] min-h-100"
          />
        </div>

        
        <div className="lg:col-span-4 space-y-8 text-white">
          <h2 className="text-xl font-bold mb-6">Training Focus Areas:</h2>

          <div data-aos="fade-right" data-aos-delay="300">
            <h3 className="font-semibold text-lg">Strength & Conditioning</h3>
            <p className="text-gray-400 text-sm mt-1">
              Develop knockout power with a mix of strength training and
              explosive movements.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="400">
            <h3 className="font-semibold text-lg">Speed & Agility</h3>
            <p className="text-gray-400 text-sm mt-1">
              Sharpen your reflexes and footwork with dynamic drills that
              improve speed and coordination.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="500">
            <h3 className="font-semibold text-lg">Endurance Training</h3>
            <p className="text-gray-400 text-sm mt-1">
              Boost your stamina with high-intensity circuits that keep you
              fighting strong till the final round.
            </p>
          </div>
        </div>

        
        <div className="lg:col-span-4 space-y-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-6">Why Train With Us:</h2>
            <div data-aos="fade-left" data-aos-delay="300" className="mb-6">
              <h3 className="font-semibold text-lg">Expert Coaches</h3>
              <p className="text-gray-400 text-sm mt-1">
                Our experienced boxing trainers have worked with amateur and
                professional athletes.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="400">
              <h3 className="font-semibold text-lg">Flexible Programs</h3>
              <p className="text-gray-400 text-sm mt-1">
                Whether you're a beginner or seasoned boxer, we offer flexible
                programs that fit your schedule.
              </p>
            </div>
          </div>

        
          <div className="flex items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5FB539] text-black font-bold px-10 py-4 rounded-2xl flex-1 text-lg"
            >
              Punch Now
            </motion.button>
            <button className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center group hover:border-[#5FB539] transition-colors">
              <Play className="text-[#5FB539] fill-[#5FB539] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrainingSection;
