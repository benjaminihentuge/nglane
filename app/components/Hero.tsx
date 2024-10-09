import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-blue-500 text-white text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Welcome to NGLane</h2>
      <p className="text-lg mb-8">Discover our mission to provide quality products.</p>
      <button className="bg-white text-blue-500 px-4 py-2 rounded">Shop Now</button>
    </section>
  );
};

export default Hero;
