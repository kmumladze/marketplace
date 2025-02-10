import blueImg from "../assets/blue.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router";

export default function LogInPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${blueImg})` }}
    >
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <NavLink to="/">
          <div className="flex items-center gap-3 mb-6 border-2 border-blue-500 hover:border-blue-700 p-4 rounded-xl cursor-pointer">
            <HiOutlineShoppingBag size={32} className="text-blue-500" />
            <h3 className="font-mono text-2xl text-gray-800 dark:text-white">
              Marketplace
            </h3>
          </div>
        </NavLink>
        <p className="text-sm text-gray-400 text-center mb-4">
          Welcome to Marketplace - Let's create an account
        </p>

        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700">Name</label>
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700">Password</label>
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Create your password"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" required />
            <p className="text-sm text-gray-600">
              I agree to the <strong>Privacy & Policy</strong>
            </p>
          </div>

          <button
            className="mt-4 bg-blue-500 text-white font-mono text-lg py-2 rounded-xl w-full hover:bg-blue-700 transition"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
