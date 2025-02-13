import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

export default function ShoppingCart() {
  const { cart } = useContext(CartContext);

  console.log(cart);

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
              className="flex gap-2 p-3 bg-gray-100 dark:bg-gray-600 rounded-lg justify-between"
            >
              <p className="font-bold">{cart.title}</p>
              <p className="font-bold font-mono">${cart.price}</p>
            </li>
          ))}
        </ul>
      )}
      <p>{formattedPrice}</p>
    </div>
  );
}
