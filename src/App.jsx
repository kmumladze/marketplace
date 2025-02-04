import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const resData = await response.json();
      console.log(resData);
      setProducts(resData.products);
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
