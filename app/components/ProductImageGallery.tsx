import React from "react";

interface ProductImageGalleryProps {
  images: string[]; // An array of image URLs
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  return (
    <div className="p-4 mt-36 w-full bg-slate-100">
      {/* Show only the first image on small screens */}
      <div className="border rounded overflow-hidden block sm:hidden">
        <img
          src={images[0]} // Only display the first image on small screens
          alt="Product image"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Show multiple images on medium and larger screens */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {images.slice(0, 6).map((image, index) => (
          <div key={index} className="border rounded overflow-hidden">
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
