import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { HeroUIProvider } from "@heroui/react";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import { CartContext } from "./providers/CartProvider.js";
import { UsersContext } from "./providers/UsersProvider.js";

createRoot(document.getElementById("root")).render(<Main />);

function Main() {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://dummyjson.com/users?limit=0");
        const resData = await response.json();
        setUsers(resData.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <StrictMode>
      <HeroUIProvider>
        <UsersContext.Provider
          value={{
            users,
            setUsers,
          }}
        >
          <CartContext.Provider
            value={{
              cart,
              setCart,
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="products/:productId"
                  element={<ProductDetailsPage />}
                />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:id" element={<BlogDetails />} />
                <Route path="users/:userId" element={<UserDetailsPage />} />
                <Route path="login" element={<LogInPage />} />
              </Routes>
            </BrowserRouter>
          </CartContext.Provider>
        </UsersContext.Provider>
      </HeroUIProvider>
    </StrictMode>
  );
}
