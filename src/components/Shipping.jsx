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
    <section className="dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex flex-col p-6 w-full">
        <div className="flex flex-col md:flex-row w-full justify-around items-center">
          <div className="w-full md:w-1/2 max-w-3xl flex flex-col gap-4">
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

            <div className="flex flex-col items-center overflow-hidden md:flex-row gap-4">
              {[
                {
                  name: "Robert Fox",
                  address: "4517 Washington Ave. Manchester, Kentucky 39495",
                  selected: false,
                },
                {
                  name: "John Willions",
                  address: "3891 Ranchview Dr. Richardson, California 62639",
                  selected: false,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col bg-gray-100 rounded-lg p-6 shadow-sm w-full md:w-1/2 border dark:bg-gray-500 ${
                    item.selected ? "border-black" : "border-transparent"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg dark:text-black">
                      {item.name}
                    </h3>
                    <input
                      type="checkbox"
                      // checked={item.selected}
                      className="w-5 h-5 accent-black"
                      required
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-800">
                    {item.address}
                  </p>
                  <div className="flex gap-4 mt-4 overflow-hidden">
                    <button className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                      <FaRegEdit />
                      Edit
                    </button>
                    <button className="flex items-center gap-2 bg-red-200 text-red-700 px-4 py-2 rounded-lg hover:bg-red-400 transition">
                      <RiDeleteBin6Line />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/payment">
              <div className="text-left mt-4">
                <button className="bg-black text-white px-10 py-3 rounded-lg text-sm hover:bg-gray-800 transition">
                  Deliver Here
                </button>
              </div>
            </Link>
          </div>

          <div className="border w-full md:w-1/4 md:h-2/5 m-4 flex flex-col gap-6 p-6 rounded-lg shadow-lg">
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
        </div>

        <div className="w-full md:w-1/2 md:p-8 md:m-14 flex flex-col gap-4 text-sm">
          <h1 className="font-mono font-bold text-2xl">Add a new address</h1>

          <div>
            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-sm md:text-base dark:text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Mobile Number"
                  className="text-gray-700 text-sm md:text-base dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  id="Mobile Number"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="mobile"
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-sm">
                  Flat, House no., Building, Company, Apartment
                </label>
                <input
                  id="address"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  type="text"
                  required
                />
              </div>
              <label for="country">Country</label>
              <select
                id="country"
                name="country"
                className="p-4 rounded-lg bg-transparent border"
              >
                <option value="Georgia">Georgia</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="Spain">Spain</option>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="Poland">Poland</option>
                <option value="Japan">Japan</option>
              </select>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pin code"
                  className="text-gray-700 text-sm md:text-base dark:text-white"
                >
                  Pin Code
                </label>
                <input
                  id="pin code"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="number"
                  placeholder="Enter Pin Code"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  Use as my default address
                </label>
              </div>

              <Link to="/payment">
                <button
                  className="mt-3 text-white bg-black font-mono text-base p-4 rounded-xl w-full transition"
                  type="submit"
                >
                  Add New Address
                </button>
              </Link>
            </form>
          </div>
        </div>
      </main>
      <FooterPage />
    </section>
  );
}
