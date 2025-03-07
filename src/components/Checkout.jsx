import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

import FooterPage from "../pages/FooterPage";
import Header from "./Header";
import { Link } from "react-router";

export default function Checkout() {
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
  const grandTotal = totalPrice + 5;
  const formattedGrandTotal = `$${grandTotal.toFixed(2)}`;

  return (
    <section className="dark:bg-black dark:text-white">
      <Header />
      <main>
        <div className="flex flex-col md:flex-row items-center md:justify-around gap-8 p-8">
          <div className="flex flex-col w-full md:w-3/5">
            <h1 className="font-bold text-3xl mb-6">Checkout</h1>

            <div className="hidden md:flex justify-between pb-2 font-bold border-b">
              <p>Products</p>
              <div className="flex gap-8">
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>

            <div className="flex flex-col p-6">
              {cart.length === 0 ? (
                <p>No items in cart</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex flex-col gap-4 md:flex-row items-center justify-between border-b pb-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          className="w-20"
                          src={product.thumbnail}
                          alt={product.title}
                        />
                        <p className="font-bold">{product.title}</p>
                      </div>

                      <div className="flex justify-around gap-4">
                        <p className="font-bold text-lg">${product.price}</p>

                        <div className="flex items-center border border-black px-4 py-2 rounded-lg">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                          >
                            -
                          </button>
                          <span className="mx-3">{product.quantity}</span>
                          <button onClick={() => updateQuantity(product.id, 1)}>
                            +
                          </button>
                        </div>

                        <p className="font-bold text-lg">
                          ${product.price * product.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="border w-full md:w-2/5 md:h-2/5 flex flex-col gap-6 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between border-b pb-2">
              <p className="font-bold text-lg">Subtotal:</p>
              <p className="font-bold">{formattedPrice}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Enter Discount Code</p>
              <div className="flex border rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="w-full px-3 py-2 outline-none"
                  placeholder="FLAT50"
                />
                <button className="bg-black text-white px-4 py-2 dark:bg-gray-800 dark:text-white">
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-between border-b pb-2">
              <p>Delivery Charge</p>
              <p>$5.00</p>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <p>Grand Total</p>
              <p>{formattedGrandTotal}</p>
            </div>

            <Link to="/shipping">
              <button className="bg-black text-white rounded-xl py-3 px-8 w-full text-lg dark:bg-gray-900">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
      <FooterPage />
    </section>
  );
}
