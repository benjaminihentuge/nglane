import React from "react";
import ProductImageGallery from "../../../components/ProductImageGallery";
import ProductDetails from "../../../components/ProductDetails";
import ProductReviews from "../../../components/ProductReviews";
import { products } from "../../../../data/products"; // Adjust the import path as necessary
import { useCart } from "../../../components/CartContext"; // Import useCart
interface Review {
  name: string;
  rating: number;
  comment: string;
}

interface Product {
  name: string;
  price: number;
  salePrice: number | null;
  images: string[];
  colors: string[];
  reviews: Review[];
}

interface ProductPageProps {
  params: {
    category: string;
    product: string;
  };
}

const fetchProductData = (category: string, productName: string): Product | undefined => {
  const product = products.find(
    (p) => p.category === category && p.name.toLowerCase().replace(/\s+/g, '-') === productName
  );

  if (product) {
    return {
      ...product,
      images: product.images ?? [product.image],
      reviews: [
        { name: "John Doe", rating: 5, comment: "Great quality and fit!" },
        { name: "Jane Doe", rating: 4, comment: "Comfortable, but runs a bit large." },
      ],
    };
  }
  return undefined;
};

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { category, product } = params;
  const productData = fetchProductData(category, product);

  if (!productData) {
    return (
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-semibold text-center text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center">
      {/* Container for Large Screens */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl w-full px-4 py-10">
        {/* Product Image Gallery for Large Screens */}
        <div className="md:col-span-2">
          <ProductImageGallery images={productData.images} />
        </div>

        {/* Product Details Section for Large Screens */}
        <div className="bg-slate-100 p-6 flex flex-col justify-between">
          <ProductDetails
            name={productData.name}
            price={productData.salePrice ?? productData.price}
            salePrice={productData.salePrice}
            description={`A stylish ${productData.name} made for every occasion.`}
            colors={productData.colors}
            sizes={["S", "M", "L", "XL"]}
          />
        </div>
      </div>

      {/* Container for Small Screens */}
      <div className="md:hidden w-full px-4 py-10 flex flex-col items-center">

        {/* Product Image Gallery for Small Screens */}
        
        <div className="w-full ">
          <ProductImageGallery images={productData.images} />
        </div>

        {/* Product Details Section for Small Screens */}
        <div className="bg-slate-100 w-full p-4 mt-1 flex flex-col justify-between">
          <ProductDetails
            name={productData.name}
            price={productData.salePrice ?? productData.price}
            salePrice={productData.salePrice}
            description={`A stylish ${productData.name} made for every occasion.`}
            colors={productData.colors}
            sizes={["S", "M", "L", "XL"]}
          />
        </div>
      </div>

      {/* Reviews Section (Same for Both) */}
      <div className="max-w-7xl w-full mt-10 px-4">
        <ProductReviews reviews={productData.reviews} />
      </div>
    </div>
  );
};

export default ProductPage;
