import { useState } from "react";

import marketplaceLogo from "../assets/marketplace.svg";
import messageLogo from "../assets/message.svg";
import heartLogo from "../assets/heart.svg";
import cartLogo from "../assets/cart.svg";
import logIn from "../assets/login.svg";
import { Link, NavLink } from "react-router";

import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";

export default function Header({ setSearch, search }) {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="flex flex-col md:flex-row gap-4 justify-between md:justify-around items-center my-4 dark:bg-gray-900 dark:text-white transition duration-300">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-blue-100 rounded-xl" : "text-gray-700"
        }
      >
        <div className="flex items-center gap-3 border-4 border-blue-500 hover:border-blue-700 p-5 rounded-xl cursor-pointer dark:bg-gray-500">
          <img
            className="max-w-8"
            src={marketplaceLogo}
            alt="marketplace logo"
          />
          <h3 className="font-mono text-2xl font-bold text-gray-800 dark:text-white">
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
        <img className="cursor-pointer w-8" src={messageLogo} alt="" />
        <img
          className="cursor-pointer
          hover:bg-red-500
          rounded-xl w-8"
          src={heartLogo}
          alt="heart logo"
        />
        <img className="cursor-pointer w-8" src={cartLogo} alt="" />
      </div>
      <div className="flex gap-2 border-4 rounded-xl p-4 border-blue-400 cursor-pointer hover:bg-blue-300 mt-4 md:mt-0 dark:bg-gray-500">
        <img className="w-5" src={logIn} alt="log in logo" />
        <h3>Log In</h3>
      </div>
    </header>
  );
}
