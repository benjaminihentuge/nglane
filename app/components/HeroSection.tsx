import Image from 'next/image';
import { Component } from 'react';
import clothes2 from './assets/clothes2.jpg'; // Correct import

class HeroSection extends Component {
  render() {
    return (
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center text-white"
      >
        <div className="text-center">
          <Image
            src={clothes2}
            alt="Company Logo"
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
          />
          <h1 className="text-4xl font-bold">Your Cozy Era</h1>
          <p className="mt-4">Get the best cozy fits with new arrivals</p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-gray-300">
            Shop Now
          </button>
        </div>
      </section>
    );
  }
}

export default HeroSection;
