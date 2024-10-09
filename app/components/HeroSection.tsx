"use client"; // This line must be added
import Image from 'next/image'; // Import the Image component from Next.js
import clothesImage from '../../assets/clothes2.jpg'; // Adjust the import if needed
import { Component } from 'react';

class HeroSection extends Component {
  componentDidMount() {
    console.log("HeroSection mounted");
  }

  render() {
    return (
      <section className="relative bg-cover bg-center min-h-[100vh] w-full flex items-center justify-center text-white">
        <Image
          src={clothesImage}
          alt="Clothes"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-10" // Ensure the image stays behind the text
        />
        <div className="text-center relative z-20"> {/* Ensure text appears above the image */}
          <h1 className="text-4xl font-bold tracking-widest">Your Cozy Era</h1>
          <p className="mt-4">Get the best cozy fits with new arrivals</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-white text-black px-10 py-2 rounded-md shadow-lg hover:bg-gray-300">
              Shop Men
            </button>
            <button className="bg-white text-black px-10 py-2 rounded-md shadow-lg hover:bg-gray-300">
              Shop Women
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
