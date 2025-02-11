import { useEffect, useState } from "react";

import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import Categories from "../components/Categories.jsx";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const resData = await response.json();
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
      setProducts(resData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <main className="dark:bg-gray-900">
      <Header search={search} setSearch={setSearch} cart={cart} />
      <Categories getProductsByCategory={handleClick} />
      <Products products={filteredProducts} addToCart={addToCart} />
    </main>
  );
}
