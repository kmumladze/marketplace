import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

import FooterPage from "../pages/FooterPage";
import Header from "./Header";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlinePayments } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";

export default function Payment() {
  const { cart, setCart } = useContext(CartContext);

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
      <main className="flex justify-around w-full">
        <div className="min-h-screen flex flex-col p-6 w-1/2">
          <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-8 flex-1">
              <div className="w-full max-w-3xl flex flex-col gap-8">
                <h1 className="font-bold text-3xl">Payment Method</h1>
                <div className="relative mt-10">
                  <div className="bg-gray-300 h-px w-full"></div>
                  <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2">
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-lg mt-4 bg-black text-slate-200">
                        <TiHomeOutline />
                      </div>
                      <p className="text-sm mt-2">Address</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-lg mt-4 text-slate-200 bg-black">
                        <MdOutlinePayments />
                      </div>
                      <p className="text-sm mt-2">Payment Method</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-lg mt-4 text-black bg-slate-200">
                        <VscPreview />
                      </div>
                      <p className="text-sm mt-2">Review</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 w-full md:w-2/3 flex flex-col gap-4">
                <h2 className="font-bold text-lg mb-4">
                  Select a payment method
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <input type="radio" className="accent-black" />
                  <label className="font-bold">Debit/Credit Card</label>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Card Number</label>
                    <input
                      className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      placeholder="xxxx xxxx xxxx xxxx"
                      type="tel"
                      maxLength="19"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Card Name</label>
                    <input
                      className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium">Expiry Date</label>
                      <input
                        className="border  border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="MM/YY"
                        type="text"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium">CVV</label>
                      <input
                        className="border w-full border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="***"
                        type="number"
                        max="999"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-black text-white py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition">
                  Add Card
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 gap-4 flex flex-col">
            <div className="flex gap-2 border-t p-4">
              <input type="radio" className="accent-black" />
              <label htmlFor="google pay">
                <strong>Google Pay </strong>
              </label>
            </div>

            <div className="flex gap-2 border-b border-t p-4">
              <input type="radio" className="accent-black" />
              <label htmlFor="paypal">
                <strong>Paypal</strong>
              </label>
            </div>

            <div className="flex gap-2 border-b p-4">
              <input type="radio" className="accent-black" />
              <label htmlFor="cash delivery">
                <strong>Cash on Delevery</strong>
              </label>
            </div>
            <button className="mt-6 w-1/2 bg-black text-white py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition">
              Continue
            </button>
          </div>
        </div>

        <div className="border w-1/4 h-2/5 flex flex-col gap-6 p-6 rounded-lg shadow-lg mt-10">
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
              <button className="bg-black text-white px-4 py-2">Apply</button>
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
        </div>
      </main>
      <FooterPage />
    </>
  );
}
