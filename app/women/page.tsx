"use client";

import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';

// Import your images for the women’s page
import leftImageWomen from '../../assets/linenTwoPiece1.jpg'; // Example left image for women
import rightImageWomen from '../../assets/linenShirt2.jpg'; // Example right image for women

// Import category images
import Shirt from '../../assets/1st_shirt.jpg'; // Ensure you have correct images for women
import Kaftan from '../../assets/kaftan2.jpg';
import Twopiece from '../../assets/vintage2piece.jpg';
import Pants from '../../assets/pants.jpg';
import Dress from '../../assets/dress.jpg';
import Asoebe from '../../assets/linenTwoPiece1.jpg';

// Define categories for women
const categories = [
  { name: "SHIRTS", imgSrc: Shirt, link: "/shop/women/shirts" },
  { name: "KAFTAN", imgSrc: Kaftan, link: "/shop/women/kaftan" },
  { name: "2 PIECE", imgSrc: Twopiece, link: "/shop/women/2piece" },
  { name: "PANTS", imgSrc: Pants, link: "/shop/women/pants" },
  { name: "DRESS", imgSrc: Dress, link: "/shop/women/dress" },
  { name: "ASOEBI", imgSrc: Asoebe, link: "/shop/women/asoebi" },
];

const WomenPage = () => {
  return (
    <>
      <HeroSection
        leftImage={leftImageWomen}
        rightImage={rightImageWomen}
        heading="Shop Women"
        subheading="Discover New Arrivals"
        button1Text="Shop Tops"
        button2Text="Shop Bottoms"
      />
      <CategorySection categories={categories} />
    </>
  );
};

export default WomenPage;
