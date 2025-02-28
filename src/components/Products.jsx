import { useState, useEffect } from "react";

// import { Pagination } from "@heroui/pagination";
import { Pagination } from "@heroui/react";

import { Link } from "react-router";
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

  return (
    <>
      <Header />
      <main
        id="products"
        className="flex flex-col items-center min-h-screen dark:bg-gray-900 dark:text-white w-full"
      >
        <div className="flex flex-col md:flex-row justify-between p-16 w-full items-center gap-4 md:gap-8">
          {/* <h1 className="font-bold text-2xl text-center md:text-left">
            Products For You!
          </h1> */}

          <input
            type="text"
            placeholder="Search products..."
            className="w-2/3 md:w-72 px-4 py-2 bg-gray-200 text-black focus:outline-none shaddow-md"
            onChange={(element) => setSearch(element.target.value)}
            value={search}
          />

          <div className="flex justify-center w-full md:w-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                  variant="bordered"
                >
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Single selection example"
                selectedKeys={selectedKeys}
                selectionMode="single"
                variant="flat"
                onSelectionChange={handleSortChange}
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 w-full place-items-center">
          {products.products.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full col-span-2 md:col-span-4 min-h-[200px]">
              <p>No exact matches found</p>
              <p>Try searching for something else instead? </p>
            </div>
          ) : (
            products.products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))
          )}
        </div>
      </main>

      <Pagination
        className="flex justify-center dark:bg-gray-900 py-10 w-full rounded-lg shadow-md items-center gap-2"
        showControls
        page={currentPage}
        total={Math.ceil((products.total || 1) / LIMIT)}
        onChange={setCurrentPage}
      />

      <UpperFooter />
      <FooterPage />
    </>
  );
}
