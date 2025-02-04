import { useEffect } from "react";

import Header from "./components/Header.jsx";

export default function App() {
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const resData = await response.json();
      console.log(resData);
    }
    fetchProducts();
  }, []);
  return <Header />;
}
