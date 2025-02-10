import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="users/:userId" element={<UserDetailsPage />} />
        <Route path="login" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
