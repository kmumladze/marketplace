import { useState, useEffect } from "react";

import dealsofthemonth from "../assets/dealsofthemonth.jpg";
import { Link } from "react-router";

export default function DealsOfTheMonth() {
  const [time, setTime] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(countdown());
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const countdown = () => {
    const currentDate = new Date();
    const futureDate = new Date("07/17/2025");
    const diff = futureDate - currentDate;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 66 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return [
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Mins", value: minutes },
        { label: "Secs", value: seconds },
      ];
    }

    return [
      { label: "Days", value: 0 },
      { label: "Hours", value: 0 },
      { label: "Mins", value: 0 },
      { label: "Secs", value: 0 },
    ];
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-between p-6 bg-gray-100 rounded-xl shadow-lg dark:bg-gray-900">
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="font-mono font-bold text-3xl text-gray-800 dark:text-white">
          Deals of the Month
        </h1>
        <p className="text-gray-600 dark:text-white">
          Don't miss out on this month's hottest deals! Enjoy discounts on your
          favorite products—limited time only. Shop now and save big!
        </p>
        {/* <h1>{timeRemaining}</h1> */}
        <div className="flex gap-4 justify-center md:justify-start">
          {time.map((item, index) => (
            <div
              key={index}
              className="border-2 p-4 rounded-xl text-center bg-white shadow-md w-full md:w-20"
            >
              <span className="text-xl font-bold text-gray-700">
                {item.value}
              </span>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        <Link to="/products">
          <button className="bg-black text-white px-5 py-3 rounded-xl text-sm hover:bg-gray-800 transition duration-300 dark:text-black dark:bg-white">
            View All Products &nbsp;→
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
