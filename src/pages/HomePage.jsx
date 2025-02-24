import { useEffect, useState } from "react";
import { Pagination } from "@heroui/pagination";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import Categories from "../components/Categories.jsx";
import FooterPage from "./FooterPage.jsx";
import {
  fetchProducts,
  LIMIT,
  EMPTY_PRODUCTS,
} from "../utils/fetchProducts.js";

export default function HomePage() {
  const [products, setProducts] = useState(EMPTY_PRODUCTS);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    fetchProducts({ page: currentPage, search, sort }).then((prods) =>
      setProducts(prods)
    );
  }, [currentPage, sort]);

  useEffect(() => {
    setCurrentPage(1);
    fetchProducts({ search, sort, page: 1 }).then((prods) =>
      setProducts(prods)
    );
  }, [search]); //reset skip. always start with first page

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

  function handleSortClick(newSort) {
    setSort(newSort);
  }

  return (
    <main className="dark:bg-gray-900">
      <Header search={search} setSearch={setSearch} cart={cart} />

      <Categories getProductsByCategory={handleClick} />
      <Products
        products={products.products}
        addToCart={addToCart}
        setSort={handleSortClick}
      />
      <Pagination
        className="bg-gray-300 flex justify-center dark:bg-gray-900 py-10 w-full rounded-lg shadow-md items-center gap-2"
        page={currentPage}
        total={Math.ceil(products.total / LIMIT)}
        onChange={setCurrentPage}
      />
      <FooterPage />
    </main>
  );
}
