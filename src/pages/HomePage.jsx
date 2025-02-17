import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@heroui/pagination";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import Categories from "../components/Categories.jsx";

const LIMIT = 8;
const TOTAL_ITEMS = 194;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / LIMIT);

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const currentSkip = (currentPage - 1) * LIMIT;

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentSkip}`
        );
        const resData = await response.json();
        setProducts(resData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProducts();
  }, [currentPage]);

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
      <Pagination
        className="bg-gray-200 flex justify-center dark:bg-gray-900 py-10 w-full rounded-lg shadow-md items-center gap-2"
        page={currentPage}
        total={TOTAL_PAGES}
        onChange={setCurrentPage}
      />
    </main>
  );
}
