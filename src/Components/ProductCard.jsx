import React from "react";
import cards from "../data/cards.json";
const ProductCard = () => {
  return (
    <div className="p-6 rounded-2xl max-w-7xl mx-auto">
      <div className="ml-10 mt-5">
        <h1 className="text-3xl md:text-4xl font-bold text-black/75 font-satoshi">
          Our Products
        </h1>
      
      <p className="font-medium text-lg md:text-2xl mt-3 font-satoshi">
        Fuel Your Workouts with Protein-Packed Nutrition
      </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
        {cards.map((item) => (
          <div key={item.id} className="w-full flex justify-center">
            <div className="w-full max-w-75 h-115 bg-black rounded-[45px] p-4 shadow-2xl hover:scale-105 transition duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-full h-60 rounded-[35px] overflow-hidden bg-gray-900">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5 px-2">
                  <h2 className="text-white font-satoshis text-lg font-light leading-tight line-clamp-2 h-12">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="px-2 pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-2xl font-semibold font-tilt">₹399.00</p>
                    <div className="flex gap-1 mt-1">
                      <span className="text-green-500 text-sm">★</span>
                      <span className="text-green-500 text-sm">★</span>
                      <span className="text-green-500 text-sm">★</span>
                      <span className="text-green-500 text-sm">★</span>
                      <span className="text-gray-600 text-sm">★</span>
                    </div>
                  </div>

                  <button className="bg-[#5FB539] hover:bg-green-600 w-12 h-12 rounded-2xl flex items-center justify-center transition-all shrink-0">
                    <span className="text-white text-3xl font-light">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCard;
