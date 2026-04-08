import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <img src={item.icon} alt="" className="w-12 mb-4" />
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-gray-500">{item.description}</p>
    </div>
    );
};

export default Card;