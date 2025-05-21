import React from 'react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        Welcome to Our Company
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Delivering innovative software solutions to empower your business.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
