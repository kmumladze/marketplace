import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";
import { Link } from "react-router";

export default function ShoppingCart() {
  const { cart, setCart } = useContext(CartContext);

  function updateQuantity(productId, amount) {
    const productIdx = cart.findIndex((product) => product.id === productId);
    const cloneCart = [...cart];

    cloneCart[productIdx].quantity += amount;

    if (cloneCart[productIdx].quantity === 0) {
      cloneCart.splice(productIdx, 1);
    }
    setCart(cloneCart);
  }

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const formattedPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="flex flex-col p-4 md:p-8 max-w-2xl mx-auto w-full">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">No items in cart</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((product, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg justify-between"
            >
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <img
                    className="w-16 md:w-20"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <p className="font-semibold text-gray-900 dark:text-white dark:font-bold">
                    {product.title}
                  </p>
                </div>
                <p className="font-bold font-mono text-lg text-gray-800">
                  ${product.price}
                </p>
              </div>

              <div className="flex items-center gap-1 bg-stone-200 rounded-xl px-3 py-2 dark:bg-gray-400 dark:text-black">
                <button
                  className="bg-transparent border-none rounded-md cursor-pointer"
                  onClick={() => updateQuantity(product.id, -1)}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  className="bg-transparent border-none rounded-md cursor-pointer"
                  onClick={() => updateQuantity(product.id, 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center m-4">
        <p className="font-bold text-lg dark:text-white">Subtotal:</p>
        <p className="dark:text-white">
          <strong>{formattedPrice}</strong>
        </p>
      </div>

      <div className="flex flex-col gap-4 m-10">
        <button className="border-1 border-black p-4 rounded-lg">
          View Cart
        </button>
        <Link to="/checkout" className="w-full">
          <button className="bg-black text-stone-50 p-4 rounded-lg w-full">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
