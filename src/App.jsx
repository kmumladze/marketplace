import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import Categories from "./components/Categories.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const resData = await response.json();
        console.log(resData);
        setProducts(resData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  async function handleClick(category) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const resData = await response.json();
      console.log(resData);
      setProducts(resData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Categories getProductsByCategory={handleClick} />
      <Products products={filteredProducts} />
    </>
  );
}
