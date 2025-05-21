import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
