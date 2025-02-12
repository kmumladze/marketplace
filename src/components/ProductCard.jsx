import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider.js";

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const addCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col items-start w-56 cursor-pointer dark:border-4 border-gray-800 rounded-lg overflow-hidden p-3">
      <img
        className="rounded-xl bg-opacity-25 dark:bg-opacity-25"
        src={product.thumbnail}
        alt="product image"
      />{" "}
      <div className="h-28">
        <h1 className="font-bold">{product.title}</h1>
        <p>{product.brand}</p>
        <p className="font-bold">{product.price} $</p>
      </div>
      <div className="flex gap-3 justify-around">
        <button
          className="bg-blue-500 rounded-xl px-2 hover:text-stone-50 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addCart();
          }}
        >
          <p>Add to Cart</p>
        </button>
        <button className="flex items-center gap-1 rounded-xl bg-red-500 px-2 py-2">
          <FaRegHeart size={25} />
          <p>Save</p>
        </button>
      </div>
    </div>
  );
}
