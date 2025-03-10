import { useState, useEffect } from "react";

// import { Pagination } from "@heroui/pagination";
import { Pagination, Card, Spacer } from "@heroui/react";

import { Link, useSearchParams } from "react-router";
import ProductCard from "./ProductCard";
import {
  fetchProducts,
  LIMIT,
  EMPTY_PRODUCTS,
} from "../utils/fetchProducts.js";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import Header from "./Header.jsx";
import FooterPage from "../pages/FooterPage.jsx";
import UpperFooter from "./UpperFooter.jsx";

export default function Products() {
  const [products, setProducts] = useState(EMPTY_PRODUCTS);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState(null);
  // const [productsByCategory, setProductsByCategory] = useState([]);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("category"));

  const category = searchParams.get("category");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const result = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );

      const allItems = await result.json();
      setProducts(allItems);
    };
    fetchCategoryProducts();
  }, [category]);

  useEffect(() => {
    if (category) return;
    fetchProducts({ page: currentPage, search, sort }).then((prods) =>
      setProducts(prods)
    );
  }, [currentPage, sort, category]);

  useEffect(() => {
    if (category) return;
    setCurrentPage(1);
    fetchProducts({ search, sort, page: 1 }).then((prods) =>
      setProducts(prods)
    );
  }, [search, category]); //reset skip. always start with first page

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function handleSortClick(newSort) {
    setSort(newSort);
  }

  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Sort by ⇵"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  function handleSortChange(keys) {
    console.log(keys);
    setSelectedKeys(keys);
    if (keys.has("Price(Low to High)")) {
      handleSortClick("asc");
    } else if (keys.has("Price(High to Low)")) {
      handleSortClick("desc");
    } else {
      handleSortClick(null);
    }
  }

  if (!products) return <p>Loading...</p>;

  return (
    <section className="dark:bg-black">
      <Header />

      <main className="flex flex-col items-center mx-auto max-w-6xl w-full dark:bg-black dark:text-white">
        <div className="flex flex-col gap-4 md:flex-row justify-center items-center py-6 gap-x-4 w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="w-2/3 md:w-80 px-4 py-2 bg-gray-200 text-black focus:outline-none dark:bg-gray-600 dark:text-white"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Dropdown>
            <DropdownTrigger className="dark:text-white">
              <Button className="z-0 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={handleSortChange}
              className="dark:text-white"
            >
              <DropdownItem key="Price(Low to High)">
                Sort by price: low to high
              </DropdownItem>
              <DropdownItem key="Price(High to Low)">
                Sort by price: high to low
              </DropdownItem>
              <DropdownItem key="Sort by ⇵">Reset</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
          {products.products.length === 0
            ? new Array(8).fill(0).map((el) => (
                <Card className="w-[200px] space-y-5 p-4" radius="2xl">
                  <div className="h-40 bg-default-300" />
                  <div className="space-y-3">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                    <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                    <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                  </div>
                </Card>
              ))
            : products.products.map((product) => (
                <div key={product.id} className="rounded-lg p-4">
                  <Link to={`/products/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))}
        </div>

        <Pagination
          className="flex justify-center py-10"
          showControls
          page={currentPage}
          total={Math.ceil((products.total || 1) / LIMIT)}
          onChange={(page) => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentPage(page);
          }}
        />
      </main>
      <UpperFooter />
      <FooterPage />
    </section>
  );
}
