import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

export default function ShoppingCart() {
  const { cart, updateItemQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const formattedPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="flex flex-col p-4">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((cart, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-600 rounded-lg justify-between"
            >
              <p className="font-bold">{cart.title}</p>
              <p className="font-bold font-mono">${cart.price}</p>

              <div className="flex items-center gap-1 bg-stone-200 rounded-xl p-2">
                <button
                  className="bg-transparent border-none rounded-md cursor-pointer"
                  onClick={() => updateItemQuantity(cart.id, -1)}
                >
                  -
                </button>
                <span>{cart.quantity}</span>
                <button
                  className="bg-transparent border-none rounded-md cursor-pointer"
                  onClick={() => updateItemQuantity(cart.id, 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="text-right mt-2">
        Cart Total: <strong>{formattedPrice}</strong>
      </p>
    </div>
  );
}
