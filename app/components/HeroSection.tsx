"use client";
import Image from 'next/image';
import leftImage from '../../assets/linenTwoPiece1.jpg';   // Image for the left side
import rightImage from '../../assets/linenShirt2.jpg';  // Image for the right side (only for large screens)
import { Component } from 'react';

class HeroSection extends Component {
  componentDidMount() {
    console.log("HeroSection mounted");
  }

  render() {
    return (
      <section className="relative bg-white bg-cover bg-center min-h-[100vh] w-full flex items-center justify-center text-white">
        <div className="relative w-full h-full flex">
          {/* Left Image - Always visible */}
          <div className="relative w-full md:w-1/2 h-[100vh] md:h-[100vh]">
            <Image
              src={leftImage}
              alt="Clothes left"
              fill
              style={{ objectFit: 'contain' }}
              priority={true}
              className="absolute inset-0"
            />
          </div>

          {/* Right Image - Only visible on larger screens */}
          <div className="hidden md:block relative w-1/2 h-[50vh] md:h-[100vh]">
            <Image
              src={rightImage}
              alt="Clothes right"
              fill
              style={{ objectFit: 'contain' }}
              priority={true}
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Text and Buttons */}
        <div className="text-center absolute z-20 px-4"> {/* Text positioned absolutely on top of images */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-black">Friends & Family</h1>
          <p className="mt-4 text-lg md:text-xl">25% Off Sitewide</p>
          <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-black text-white px-10 py-2 rounded-md shadow-lg hover:bg-gray-700">
              Shop Women
            </button>
            <button className="bg-black text-white px-10 py-2 rounded-md shadow-lg hover:bg-gray-700">
              Shop Men
            </button>
          </div>
          <p className="mt-4 text-sm md:text-base">Exclusions Apply</p>
        </div>
      </section>
    );
  }
}

export default HeroSection;
