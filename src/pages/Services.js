import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/contact-service/services') // Confirm this URL matches your backend endpoint
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        // fallback static services
        setServices([
          { id: 1, title: 'Web Development', description: 'Responsive and modern websites' },
          { id: 2, title: 'Mobile Apps', description: 'Cross-platform mobile applications' },
          { id: 3, title: 'Cloud Integration', description: 'Seamless cloud service integration' },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Services</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} title={service.title} description={service.description} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
