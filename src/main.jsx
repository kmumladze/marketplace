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
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import FaQsPage from "./pages/FaQsPage.jsx";
import Home from "./pages/Home.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import EnterOTP from "./components/EnterOTP.jsx";
import SignUp from "./components/SignUp.jsx";
import Products from "./components/Products.jsx";
import Checkout from "./components/Checkout.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from "./components/Payment.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(<Main />);

function Main() {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  // console.log(cart);

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

  const addToCart = (product) => {
    const isProduct = cart.find((pro) => pro.id === product.id) !== undefined;

    if (isProduct) {
      const productIdx = cart.findIndex((prod) => prod.id === product.id);
      const cloneCart = [...cart];

      cloneCart[productIdx].quantity += 1;

      setCart(cloneCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

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
              addToCart,
            }}
          >
            <BrowserRouter>
              <ScrollToTop>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="home" element={<Home />} />
                  <Route
                    path="products/:productId"
                    element={<ProductDetailsPage />}
                  />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="blog/:id" element={<BlogDetails />} />
                  <Route path="products" element={<Products />} />
                  <Route path="users/:userId" element={<UserDetailsPage />} />
                  <Route path="login" element={<LogInPage />} />
                  <Route path="aboutus" element={<AboutUsPage />} />
                  <Route path="contactus" element={<ContactUsPage />} />
                  <Route path="FaQ" element={<FaQsPage />} />
                  <Route path="forgotpassword" element={<ForgotPassword />} />
                  <Route path="enterOTP" element={<EnterOTP />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="shipping" element={<Shipping />} />
                  <Route path="payment" element={<Payment />} />
                </Routes>
              </ScrollToTop>
            </BrowserRouter>
          </CartContext.Provider>
        </UsersContext.Provider>
      </HeroUIProvider>
    </StrictMode>
  );
}
