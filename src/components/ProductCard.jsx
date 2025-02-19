import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider.js";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col items-start w-56 cursor-pointer relative gap-2">
      <div className="dark:border-4 border-gray-800 rounded-lg overflow-hidden p-3 shadow-2xl dark:shadow-slate-800 ">
        <button className="absolute top-3 right-3 size-25">
          <FaRegHeart className="hover:text-red-600" />
        </button>

        <img
          className="rounded-xl bg-opacity-25 dark:bg-opacity-25"
          src={product.thumbnail}
          alt="product image"
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-sm">{product.title}</h1>
          <div className="flex justify-between w-full">
            <p className="text-sm">{product.brand}</p>
            <p className="font-bold text-sm">{product.price} $</p>
          </div>

          <p>
            {"⭐".repeat(product.rating)} ({product.rating})
          </p>
        </div>

        <button
          className="rounded-3xl px-3 py-2 border-gray-400 text-gray-500 text-sm border-2 cursor-pointer hover:text-white hover:bg-blue-400 hover:border-blue-400 transition w-1/2"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
        >
          <p className="text-black dark:text-white">Add to Cart</p>
        </button>
      </div>
    </div>
  );
}
