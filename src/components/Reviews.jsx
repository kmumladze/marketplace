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
        console.log(data);
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
      <main className="flex flex-col gap-4 border-4 p-4">
        <h3 className="font-bold flex justify-between border-4 p-4">
          Customer Reviews
          <div>
            <span className="text-gray-700">{review} </span>
            <span className="text-gray-500 text-sm">({rating}) </span>
            <span className="text-green-500 text-sm">
              {reviewQuantity} review
            </span>
          </div>
        </h3>
        <div className="flex gap-3 flex-wrap">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border mb-2 rounded py-4 px-6 flex flex-col"
            >
              <h4 className="font-bold">{review.reviewerName}</h4>
              <p>Rating: {"⭐".repeat(review.rating)}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
