import { FaRegHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../providers/CartProvider.js";
import FooterPage from "../pages/FooterPage.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAddedCart, setIsAddedCart] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start w-56 cursor-pointer relative gap-2 bg-stone-100 p-4 dark:bg-gray-800">
        <div
          className="w-full h-56 bg-cover bg-center rounded-xl dark:bg-gray-800"
          style={{ backgroundImage: `url(${product.thumbnail})` }}
        ></div>
        <button
          className={`mt-3 rounded-md px-3 py-2 bg-white text-black border-none text-sm disabled:cursor-not-allowed border-2 cursor-pointer hover:bg-stone-400 hover:text-black transition w-full dark:bg-gray-700 dark:text-white ${
            isAddedCart ? "bg-stone-400 text-black" : ""
          }`}
          disabled={isAddedCart}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
            setIsAddedCart(true);
            setTimeout(() => setIsAddedCart(false), 1000);
          }}
        >
          {isAddedCart ? "Added" : "Add to Cart"}
        </button>
      </div>
      <div className="w-full flex flex-col gap-1">
        <h1 className="font-bold text-sm">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="font-light font-mono text-sm">${product.price}</p>
      </div>
    </>
  );
}
