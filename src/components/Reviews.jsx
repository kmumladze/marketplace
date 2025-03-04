import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function Reviews({ productId, review, rating, reviewQuantity }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchReviews();
  }, [productId]);

  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <>
      <main className="flex flex-col gap-4 justify-center m-4">
        <h1 className="font-extrabold">Customer Reviews</h1>
        <div className="flex flex-col md:flex-row gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <h3 className="text-sm font-bold">{review.reviewerName}</h3>
                <p>({"⭐".repeat(review.rating)})</p>
              </div>
              <p className="font-bold">{review.comment}</p>
              <div className="italic opacity-45">
                <p className="text-sm text-gray-400">
                  Review by{" "}
                  <span className="text-black">{review.reviewerEmail} </span>
                  Posted on:{" "}
                  <span className="text-black">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
