// app/components/ProductReviews.tsx

import React from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="space-y-4 bg-slate-100  text-black">
      <h2 className="text-2xl font-bold">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <div className="flex items-center">
              {"★".repeat(review.rating).padEnd(5, "☆")}
            </div>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductReviews;
