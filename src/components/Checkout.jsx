import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

import FooterPage from "../pages/FooterPage";
import Header from "./Header";

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
    <>
      <Header />
      <main className="flex justify-around gap-4">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Checkout</h1>

          <div className="flex flex-col w-full">
            <div className="flex justify-around py-2 font-bold border-b-1">
              <p>Product</p>
              <div className="flex gap-2">
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>

            <div className="flex flex-col p-4 md:p-6 max-w-2xl mx-auto">
              {cart.length === 0 ? (
                <p>No items in cart</p>
              ) : (
                <ul className="space-y-3">
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex flex-col md:flex-row items-center gap-4 p-3 dark:bg-gray-600 rounded-lg justify-between border-b-1"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        <div className="flex items-center">
                          <img
                            className="w-14 md:w-16"
                            src={product.thumbnail}
                            alt=""
                          />
                          <p className="font-bold md:ml-2">{product.title}</p>
                        </div>
                        <p className="font-bold font-mono w-16 text-center mx-4">
                          ${product.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 rounded-xl py-2 px-4 border-1 border-black">
                        <button
                          className="bg-transparent cursor-pointer"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="bg-transparent cursor-pointer"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      <p className="font-bold font-mono w-16 text-center mx-4">
                        ${product.price}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="border-1 w-full md:w-1/3 flex flex-col gap-4 p-8">
          <div className="flex justify-between items-center m-4 border-b-1">
            <p className="font-bold text-lg">Subtotal:</p>
            <p>
              <strong>{formattedPrice}</strong>
            </p>
          </div>
          <div className="flex flex-col px-4 gap-4">
            <p>Enter Discount Code</p>
            <input
              type="number"
              className="border-1 border-black rounded-lg p-2"
            />
          </div>
          <div className="flex justify-between border-b-1 px-4">
            <p>Delivery Charge</p>
            <p>$ 5</p>
          </div>

          <div className="flex justify-between px-4">
            <p>
              <b>Grand total</b>
            </p>
            <p>{formattedGrandTotal}</p>
          </div>

          <div className="flex justify-center mx-4">
            <button className="bg-black text-white rounded-lg py-4 px-12 w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
      <FooterPage />
    </>
  );
}
