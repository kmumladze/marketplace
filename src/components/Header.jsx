import marketplaceLogo from "../assets/marketplace.svg";
import messageLogo from "../assets/message.svg";
import heartLogo from "../assets/heart.svg";
import cartLogo from "../assets/cart.svg";
import logIn from "../assets/login.svg";
import { Link, NavLink } from "react-router";

export default function Header({ setSearch, search }) {
  return (
    <header className="flex flex-col md:flex-row gap-4 justify-between md:justify-around items-center my-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-blue-100 rounded-xl" : "text-gray-700"
        }
      >
        <div className="flex items-center gap-3 border-4 border-blue-500 hover:border-blue-700 p-5 rounded-xl cursor-pointer">
          <img
            className="max-w-8"
            src={marketplaceLogo}
            alt="marketplace logo"
          />
          <h3 className="font-mono text-xl font-bold text-stone">
            Marketplace
          </h3>
        </div>
      </NavLink>
      <Link to="/blog">
        <h3 className="font-bold text-blue-500 text-xl">Blog</h3>
      </Link>

      <input
        type="text"
        placeholder="Search"
        className="bg-stone-200 h-20 rounded-xl p-4 mt-4 md:mt-0"
        onChange={(element) => setSearch(element.target.value)}
        value={search}
      />
      <div className="flex justify-center items-center gap-3 w-9 mt-4 md:mt-0">
        <img className="cursor-pointer" src={messageLogo} alt="" />
        <img
          className="cursor-pointer
          hover:bg-red-500
          rounded-xl"
          src={heartLogo}
          alt="heart logo"
        />
        <img className="cursor-pointer" src={cartLogo} alt="" />
      </div>
      <div className="flex gap-2 border-4 rounded-xl p-4 border-blue-400 cursor-pointer hover:bg-blue-300 mt-4 md:mt-0">
        <img className="w-5" src={logIn} alt="log in logo" />
        <h3>Log In</h3>
      </div>
    </header>
  );
}
