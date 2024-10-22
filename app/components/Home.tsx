"use client"; // This line must be added
import React from 'react';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';

// Import your images for the men’s page
import leftImageMen from '../../assets/linenTwoPiece1.jpg'; // Left image
import rightImageMen from '../../assets/linenShirt2.jpg'; // Right image (use a different image if needed)

// Import category images
import Shirt from '../../assets/1st_shirt.jpg';
import Kaftan from '../../assets/kaftan2.jpg';
import Twopiece from '../../assets/vintage2piece.jpg';
import Pants from '../../assets/pants.jpg';
import Dress from '../../assets/dress.jpg';
import Asoebe from '../../assets/linenTwoPiece1.jpg';

// Define categories for men
const categories = [
  { name: "SHIRTS", imgSrc: Shirt, link: "/shop/men/shirts" },
  { name: "KAFTAN", imgSrc: Kaftan, link: "/shop/men/kaftan" },
  { name: "2 PIECE", imgSrc: Twopiece, link: "/shop/men/2piece" },
  { name: "PANTS", imgSrc: Pants, link: "/shop/men/pants" },
  { name: "DRESS", imgSrc: Dress, link: "/shop/men/dress" },
  { name: "ASOEBI", imgSrc: Asoebe, link: "/shop/men/asoebi" },
];

const Home = () => {
  return (
    <>
      <HeroSection
        leftImage={leftImageMen}
        rightImage={rightImageMen}
        heading="Shop Men"
        subheading="Discover New Arrivals"
        button1Text="Shop Shirts"
        button2Text="Shop Pants"
      />
      <CategorySection categories={categories} /> {/* Pass the categories array here */}
    </>
  );
};

export default Home;
