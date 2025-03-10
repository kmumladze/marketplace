import { useContext } from "react";

import { CartContext } from "../providers/CartProvider";

import FooterPage from "../pages/FooterPage";
import Header from "./Header";

import { TiHomeOutline } from "react-icons/ti";
import { MdOutlinePayments } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router";

export default function Shipping() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const formattedPrice = `$${totalPrice.toFixed(2)}`;
  const grandTotal = totalPrice + 5;
  const formattedGrandTotal = `$${grandTotal.toFixed(2)}`;
  return (
    <section className="dark:bg-black dark:text-white min-h-screen">
      <Header />
      <main className="flex ">
        <div className="flex flex-col w-full items-center">
          <div className="w-full max-w-3xl flex flex-col gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="font-bold text-3xl">Shipping Address</h1>

            <div className="relative mt-8">
              <div className="bg-gray-300 h-px w-full relative"></div>

              <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="text-slate-200 bg-black p-3 rounded-lg mt-4">
                    <TiHomeOutline />
                  </div>
                  <p className="text-sm mt-2">Address</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-slate-200 text-black p-3 rounded-lg mt-4">
                    <MdOutlinePayments />
                  </div>
                  <p className="text-sm mt-2">Payment Method</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-slate-200 text-black p-3 rounded-lg mt-4">
                    <VscPreview />
                  </div>
                  <p className="text-sm mt-2">Review</p>
                </div>
              </div>
            </div>

            <div className="bg-white py-6 mt-4 rounded-lg dark:bg-transparent">
              <h2 className="font-bold text-xl mb-2">
                Select a delivery address
              </h2>
              <p className="text-gray-600 dark:text-white">
                Is the address you'd like to use displayed below? If so, click
                the corresponding "Deliver to this address" button. Or you can
                enter a new delivery address.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "Robert Fox",
                  address: "4517 Washington Ave. Manchester, Kentucky 39495",
                },
                {
                  name: "John Willions",
                  address: "3891 Ranchview Dr. Richardson, California 62639",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <input
                      type="radio"
                      name="selectedAddress"
                      className="w-5 h-5 accent-black"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {item.address}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                      <FaRegEdit /> Edit
                    </button>
                    <button className="flex items-center gap-2 bg-red-200 text-red-700 px-4 py-2 rounded-lg hover:bg-red-400 transition">
                      <RiDeleteBin6Line /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/payment">
              <div className="text-left mt-4">
                <button className="bg-black text-white px-10 py-3 rounded-lg text-sm hover:bg-gray-800 transition dark:bg-gray-900">
                  Deliver Here
                </button>
              </div>
            </Link>
          </div>

          {/*  */}
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="font-mono font-bold text-2xl mb-4">
              Add a new address
            </h1>
            <form className="flex flex-col gap-4">
              {[
                { label: "Name", id: "name", type: "text" },
                { label: "Mobile Number", id: "mobile", type: "tel" },
                { label: "Address", id: "address", type: "text" },
                { label: "Pin Code", id: "pin", type: "number" },
              ].map((field, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.id}
                    className="text-gray-700 dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>
              ))}
              <label className="text-gray-700 dark:text-white">Country</label>
              <select className="p-4 rounded-lg bg-transparent border">
                {[
                  "Georgia",
                  "UK",
                  "USA",
                  "Spain",
                  "Italy",
                  "France",
                  "Poland",
                  "Japan",
                ].map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Use as my default address
              </label>
              <Link to="/payment">
                <button
                  type="submit"
                  className="mt-3 bg-black text-white font-mono text-base p-4 rounded-xl w-full transition dark:bg-gray-900"
                >
                  Add New Address
                </button>
              </Link>
            </form>
          </div>
        </div>

        {/*  */}
        <div className="border w-full md:w-1/2 md:h-1/2 flex flex-col gap-6 p-6 rounded-lg shadow-lg m-10">
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
        {/*  */}
      </main>
      <FooterPage />
    </section>
  );
}
