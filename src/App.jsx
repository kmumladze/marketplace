import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const resData = await response.json();
        console.log(resData);
        const first15 = resData.products.slice(0, 8);
        setProducts(first15);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <Products products={products} />
    </>
  );
}
