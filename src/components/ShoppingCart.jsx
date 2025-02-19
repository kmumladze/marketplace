import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

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
    <div className="flex flex-col p-4">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((product, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-600 rounded-lg justify-between"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <img className="w-14" src={product.thumbnail} alt="" />
                  <p className="font-bold">{product.title}</p>
                </div>
                <p className="font-bold font-mono w-16 text-center mx-4">
                  ${product.price}
                </p>
              </div>

              <div className="flex items-center gap-1 bg-stone-200 rounded-xl p-2">
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
      <p className="text-right mt-2">
        Cart Total: <strong>{formattedPrice}</strong>
      </p>
    </div>
  );
}
