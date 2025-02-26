import { useState, useEffect, useContext, useRef } from "react";
import React from "react";

import { Link, NavLink } from "react-router-dom";

import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { CartContext } from "../providers/CartProvider.js";
import CartModal from "./CartModal.jsx";

export default function Header() {
  const modal = useRef();

  const { cart } = useContext(CartContext);

  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          return;
        }

        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`, // Pass JWT via Authorization header
          },
        });

        const userResponse = await response.json();

        if (userResponse.message === "Token Expired!") {
          const refreshToken = localStorage.getItem("refreshToken");

          if (!refreshToken) {
            setUser(null);
            return;
          }

          const refreshResponse = await fetch(
            "https://dummyjson.com/auth/refresh",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                refreshToken: refreshToken,
              }),
            }
          );
          const refreshTokenResponse = await refreshResponse.json();
          localStorage.setItem(
            "refreshToken",
            refreshTokenResponse.refreshToken
          );
          localStorage.setItem("accessToken", refreshTokenResponse.accessToken);

          const newUserResponse = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshTokenResponse.accessToken}`, // Pass JWT via Authorization header
            },
          });

          const newUser = await newUserResponse.json();

          setUser(newUser);
        } else {
          setUser(userResponse);
        }
      } catch (error) {
        console.log(error);

        console.error("Error fetching data:", error);
      }
    }
    fetchUser();
  }, []);

  const cartQuantity = cart.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity;
  }, 0);
  // console.log(cart);

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <div className="flex justify-between m-2">
        <button>Close</button>
        <button>Checkout</button>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="text-black py-4 w-full z-10 dark:text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6">
          <NavLink to="/">
            <div className="flex items-center gap-3 mt-4 mb-6 border-2 p-4 rounded-xl cursor-pointer">
              <h3 className="text-xl font-semibold dark:text-white">
                <span className="text-3xl from-content2-foreground">M</span>
                arketplace
              </h3>
            </div>
          </NavLink>

          <ul className="flex gap-5">
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>Shop</li>
            </Link>
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Blog</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
          </ul>

          <div className="flex md:justify-center items-center gap-3 w-9 mt-4 md:w-auto">
            <div className="flex gap-2 items-center">
              <button className="text-xl" onClick={() => darkModeHandler()}>
                {
                  dark && <IoSunnyOutline className="text-yellow-500" /> // render sunny when dark is true
                }
                {
                  !dark && (
                    <FaRegMoon className="text-gray-800 dark:text-gray-300" />
                  ) // render moon when dark is false
                }
              </button>
              {/* <button className="md:flex ">
              <TiMessages size={32} />
            </button> */}
              <button className="md:flex">
                <FaRegHeart size={24} />
              </button>
              <button className="relative" onClick={handleOpenCartClick}>
                <HiOutlineShoppingBag size={24} />
                {cartQuantity > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 w-5 h-5 flex items-center justify-center text-xs rounded-full">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>

            {user ? (
              <div className="flex items-center gap-3 p-4 border rounded-lg md:mt-0">
                <Link
                  to={`/users/${user.id}`}
                  className="flex items-center gap-2"
                >
                  <div className="flex gap-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={user.image}
                      alt="user image"
                    />
                    <h3>{user.username}</h3>
                  </div>
                </Link>
                <Link to="/login">
                  <button
                    className="text-red-500 text-sm"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <div className="flex items-center gap-3 p-2 border border-blue-500 rounded-lg hover:border-blue-700 cursor-pointer md:mt-0 dark:bg-gray-700">
                  <FaRegUser />
                  <h3>Log In</h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
