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
          fill // Updated from layout="fill"
          style={{ objectFit: 'cover' }} // Updated from objectFit="cover"
          className="absolute inset-0 z-10" // Ensure the image stays behind the text
        />
        <div className="text-center relative z-20"> {/* Ensure text appears above the image */}
          <h1 className="text-4xl font-bold tracking-widest">Discover Cozy Styles</h1> {/* Updated text */}
          <p className="mt-4">Find comfort and fashion in our latest collection</p> {/* Updated text */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-blue-500 text-white px-10 py-2 rounded-md shadow-lg hover:bg-blue-700">
              Shop Men
            </button> {/* Updated button styling */}
            <button className="bg-red-500 text-white px-10 py-2 rounded-md shadow-lg hover:bg-red-700">
             Shop Women
            </button> {/* Updated button styling */}
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
