import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Header from "../components/Header.jsx";
import Reviews from "../components/Reviews.jsx";
import { CartContext } from "../providers/CartProvider.js";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  // console.log(cart);

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
    return (
      <>
        <Header />
        <div>loading...</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-stone-50 min-h-screen dark:bg-gray-900 dark:text-white">
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-56 bg-stone-100 rounded-xl dark:bg-opacity-25"
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 w-auto overflow-hidden bg-stone-100 p-6 dark:bg-gray-900 dark:text-white dark:border-4">
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
            <p className="w-96 text-sm">{product.description}</p>
            <div className="flex gap-10 text-sm">
              <div className="flex flex-col gap-2">
                <b>Category:</b>
                <b>Brand:</b>
                <b>Shipping:</b>
                <b>Return:</b>
              </div>

              <div className="flex flex-col gap-2">
                <p>{product.category}</p>
                <p> {product.brand}</p>
                <p> {product.shippingInformation}</p>
                <p> {product.returnPolicy}</p>
              </div>
            </div>

            <p className="text-red-600 text-sm">
              Only {product.stock} Stocks Left!
            </p>

            <button
              className="bg-blue-500 rounded-xl p-2 hover:text-stone-50 cursor-pointer w-1/2 m-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
