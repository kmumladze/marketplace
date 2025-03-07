import { useState } from "react";
import loginImg from "../assets/login.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router";
import { Link } from "react-router";

import Swal from "sweetalert2";

export default function LogInPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function ProceedLogin(e) {
    e.preventDefault();

    if (!validate()) return;
    console.log("proceeding with login...");

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const res = await response.json();

      if (!res.accessToken || !res.refreshToken) {
        throw new Error("Invalid credentials");
      }
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: `due to:  ${err.message}`,
        footer: '<a href="#">Why do I have this issue?</a>',
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
    <div className="flex flex-col md:flex-row items-center justify-center h-screen m-4">
      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <div className="flex items-center justify-center p-3 m-4 border-2 rounded-xl cursor-pointer overflow-hidden w-1/3 dark:border-gray-800">
          <h3 className="text-medium md:text-xl font-semibold dark:text-black">
            <span className="text-3xl from-content2-foreground">M</span>
            arketplace
          </h3>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-8 flex flex-col">
        <h1 className="font-mono font-bold text-2xl">Welcome 👋 </h1>
        <p className="text-[#A4A1AA] font-mono text-sm mb-6">
          Please login here
        </p>

        <div>
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
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white"
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
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:placeholderbg-gray-200"
                type="password"
                placeholder="Create your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="/forgotpassword" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              className="mt-3 text-white bg-black font-mono text-base p-4 rounded-xl w-full transition"
              type="submit"
            >
              Log In
            </button>
          </form>
          <Link to="/signup">
            <p className="text-sm text-gray text-right mt-2 underline">
              Create New Account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
