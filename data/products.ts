export const products = [
  { 
    id: 1, 
    name: "Shirt 1", 
    category: "shirts", 
    price: 19.99, 
    salePrice: 14.99, // Sale price added
    image: "/assets/product_shirt.jpg", // Main image for ProductCard
    images: [ // Array of images for ProductImageGallery
      "/assets/product_shirt.jpg",
      "/assets/product_shirt.jpg",
      "/assets/product_shirt.jpg",
      "/assets/product_shirt.jpg",
      "/assets/product_shirt.jpg",
      "/assets/product_shirt.jpg",
    ],
    colors: ["#B0E0E6", "#FFFFFF", "#000000"], // Example colors
  },
  { 
    id: 2, 
    name: "Shirt 2", 
    category: "shirts", 
    price: 24.99, 
    salePrice: 19.99, // Sale price added
    image: "/assets/product_shirt2.jpg", // Main image for ProductCard
    images: [ // Array of images for ProductImageGallery
      "/assets/product_shirt2.jpg",
      "/assets/product_shirt2.jpg",
      "/assets/product_shirt2.jpg",
      "/assets/product_shirt2.jpg",
      "/assets/product_shirt2.jpg",
      "/assets/product_shirt2.jpg",
    ],
    colors: ["#B0E0E6", "#FFFFFF", "#000000"], // Example colors
  },
  { 
    id: 3, 
    name: "Shirt 3", 
    category: "shirts", 
    price: 29.99, 
    salePrice: null, // No sale for this product
    image: "/assets/product_shirt3.jpg", // Main image for ProductCard
    images: [ // Array of images for ProductImageGallery
      "/assets/product_shirt3.jpg",
      "/assets/product_shirt3.jpg",
      "/assets/product_shirt3.jpg",
      "/assets/product_shirt3.jpg",
      "/assets/product_shirt3.jpg",
      "/assets/product_shirt3.jpg",
    ],
    colors: ["#B0E0E6", "#FFFFFF", "#000000"], // Example colors
  },
  { 
    id: 4, 
    name: "Shirt 4", 
    category: "shirts", 
    price: 30.99, 
    salePrice: null, // No sale for this product
    image: "/assets/shein1.jpg", // Main image for ProductCard
    images: [ // Array of images for ProductImageGallery
      "/assets/shein1.jpg",
      "/assets/shein2.jpg",
      "/assets/shein3.jpg",
      "/assets/shein4.jpg",
      "/assets/shein5.jpg",
      "/assets/shein1.jpg",
    ],
    colors: ["#B0E0E6", "#FFFFFF", "#000000"], // Example colors
  },
  // Add more products here as needed
];