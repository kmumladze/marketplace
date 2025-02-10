import { useState } from "react";

import { Link, NavLink } from "react-router";

import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

export default function Header({ setSearch, search }) {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="flex flex-col md:flex-row gap-4 justify-between md:justify-around items-center dark:bg-gray-900 dark:text-white transition duration-300">
      <NavLink
        to="/"
        // className={({ isActive }) =>
        //   isActive ? "bg-blue-100 rounded-xl" : "text-gray-700"
        // }
      >
        <div className="flex items-center gap-3 mt-4 mb-6 border-2 border-blue-500 hover:border-blue-700 p-4 rounded-xl cursor-pointer dark:bg-gray-700">
          <HiOutlineShoppingBag size={32} className="text-blue-500" />
          <h3 className="font-mono text-2xl text-gray-800 dark:text-white">
            Marketplace
          </h3>
        </div>
      </NavLink>
      <Link to="/blog">
        <h3 className="font-bold text-blue-500 text-xl">Blog</h3>
      </Link>

      <input
        type="text"
        placeholder="Search..."
        className="w-80 px-4 py-2 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
        onChange={(element) => setSearch(element.target.value)}
        value={search}
      />
      {/*  */}
      <button
        className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        onClick={() => darkModeHandler()}
      >
        {
          dark && <IoSunnyOutline className="text-yellow-500 text-xl" /> // render sunny when dark is true
        }
        {
          !dark && (
            <FaRegMoon className="text-gray-800 dark:text-gray-300 text-xl" />
          ) // render moon when dark is false
        }
      </button>

      {/*  */}
      <div className="flex justify-center items-center gap-3 w-9 mt-4 md:mt-0">
        <button>
          <TiMessages size={32} />
        </button>
        <button>
          <FaRegHeart size={32} />
        </button>
        <button className="relative">
          <HiOutlineShoppingBag size={32} />
          {/* {cart.length > 0 && ( */}
          <span className="absolute right-0 bottom-0 bg-red-400 w-4 h-4 rounded-full flex justify-center items-center text-sm">
            {/* {cart.length} */} 0
          </span>
          {/* )} */}
        </button>
      </div>
      <Link to="/login">
        <div className="flex items-center gap-3 my-4 border-2 border-blue-500 hover:border-blue-700 p-4 rounded-xl cursor-pointer md:mt-0 dark:bg-gray-700">
          <FaRegUser />
          <h3>Log In</h3>
        </div>
      </Link>
    </header>
  );
}
