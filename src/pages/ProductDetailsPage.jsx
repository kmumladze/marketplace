import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header.jsx";
import Reviews from "../components/Reviews.jsx";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductsDetails() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProductsDetails();
  }, [productId]);

  if (product === null) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-6 bg-stone-50 min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-56 bg-stone-100 rounded-xl"
            src={product.thumbnail}
            alt="Product photo"
          />
          <Reviews
            productId={product.id}
            review={"⭐".repeat(product.rating)}
            rating={product.rating}
            reviewQuantity={product.reviews.length}
          />
        </div>
        <div className="flex flex-col gap-4 w-auto overflow-hidden bg-stone-100 p-6">
          <h1 className="font-bold text-2xl">{product.title}</h1>
          <div className="flex gap-4 text-green-600">
            <h3>
              {"⭐".repeat(product.rating)} ({product.rating})
            </h3>
            <p>{product.reviews.length} reviews</p>
          </div>
          <p>
            <b>Price: </b>$ {product.price}
          </p>
          <p>
            <b>Category:</b> {product.category}
          </p>
          <p>
            <b>Brand: </b>
            {product.brand}
          </p>
          <p className="text-red-600 text-sm">
            Only {product.stock} Stocks Left!
          </p>
          <p className="w-96">
            <b>Description:</b> {product.description}
          </p>
        </div>
      </div>
    </>
  );
}
