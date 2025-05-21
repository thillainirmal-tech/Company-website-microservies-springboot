import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
      <div className="text-lg text-gray-700 leading-relaxed space-y-4">
        <p>
          Welcome to <span className="font-semibold text-blue-600">Our Company</span>! We are dedicated to delivering high-quality digital solutions to businesses of all sizes. With a passion for innovation and a focus on customer satisfaction, our team thrives on turning ideas into reality.
        </p>
        <p>
          Our mission is to create robust and scalable applications using modern technologies like React, Spring Boot, and microservices architecture. We help companies grow by building secure, efficient, and user-friendly software.
        </p>
        <p>
          Founded by experienced engineers, we take pride in our attention to detail, agile process, and collaborative approach. Let’s build the future together.
        </p>
      </div>
    </div>
  );
};

export default About;
