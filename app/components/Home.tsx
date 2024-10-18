// app/components/Home.tsx
"use client"; // Add this line at the top

import React from 'react';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';







const Home = () => {
  console.log("Home Component Rendered");
  return (
    <>
      <HeroSection />
      <CategorySection />
      

      
      


    
    </>
  );
};

export default Home;
