import { useState } from "react";
import blueImg from "../assets/bluecover.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router";

import Swal from "sweetalert2";

export default function LogInPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function ProceedLogin(e) {
    e.preventDefault();
    if (validate()) {
      console.log("proceeding with login...");

      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);

          const token = res.accessToken;

          localStorage.setItem("token", token);

          navigate("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: `due to:  ${err.message}`,
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
    }
  }

  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      console.warn("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      console.warn("Please Enter Password");
    }
    return result;
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6 md:p-12"
      style={{ backgroundImage: `url(${blueImg})` }}
    >
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg w-full max-w-md md:max-w-md">
        <NavLink to="/">
          <div className="flex items-center gap-3 mb-6 md:mb-6 border-2 border-blue-500 hover:border-blue-700 p-4 md:p-4 rounded-xl cursor-pointer">
            <HiOutlineShoppingBag size={32} className="text-blue-500" />
            <h3 className="font-mono text-2xl text-gray-800 dark:text-white">
              Marketplace
            </h3>
          </div>
        </NavLink>
        <p className="text-xs md:text-sm  text-gray-400 text-center mb-4">
          Welcome to Marketplace - Let's create an account
        </p>

        <form onSubmit={ProceedLogin} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-gray-700 text-sm md:text-base"
            >
              Name
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="name"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-gray-700 text-sm md:text-base"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Create your password"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" required />
            <p className="text-xs md:text-sm text-gray-600">
              I agree to the <strong>Privacy & Policy</strong>
            </p>
          </div>

          <button
            className="mt-3 md:mt-4 bg-blue-600 text-white font-mono text-base md:text-lg py-2 rounded-xl w-full hover:bg-blue-700 transition"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
