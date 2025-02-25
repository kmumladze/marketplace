import dealsofthemonth from "../assets/dealsofthemonth.jpg";
import { Link } from "react-router";

const countDown = [
  { label: "Days", value: 120 },
  { label: "Hours", value: 18 },
  { label: "Mins", value: 15 },
  { label: "Secs", value: 10 },
];

export default function DealsOfTheMonth() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-between p-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="font-mono font-bold text-3xl text-gray-800">
          Deals of the Month
        </h1>
        <p className="text-gray-600">
          Don't miss out on this month's hottest deals! Enjoy discounts on your
          favorite products—limited time only. Shop now and save big!
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          {countDown.map((item, index) => (
            <div
              key={index}
              className="border-2 p-4 rounded-xl text-center bg-white shadow-md w-20"
            >
              <span className="text-xl font-bold text-gray-700">
                {item.value}
              </span>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        <Link to="/products">
          <button className="bg-black text-white px-5 py-3 rounded-xl text-sm hover:bg-gray-800 transition duration-300">
            View All Products
          </button>
        </Link>
      </div>
      <img
        src={dealsofthemonth}
        alt="Deals of the Month"
        className="w-full md:w-1/2 rounded-xl mt-6 md:mt-0"
      />
    </div>
  );
}
