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
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Slider } from "@heroui/react";

export default function Products() {
  const [products, setProducts] = useState(EMPTY_PRODUCTS);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState([]);

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

  //
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        );
        const resData = await response.json();
        console.log(resData);

        setProductsByCategory(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCategories();
  }, []);

  async function handleClick(event) {
    console.log("this", event.target.checked);
    console.log(event.target.id);
    if (event.target.checked) {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${event.target.id}`
        );
        const resData = await response.json();
        setProducts(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      fetchProducts({ page: currentPage, search, sort }).then((prods) =>
        setProducts(prods)
      );
    }
  }

  //

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
      <main className="flex w-full px-8 md:px-16">
        <aside className="w-1/4 hidden md:block">
          <Breadcrumbs>
            <BreadcrumbItem>Shop</BreadcrumbItem>
            <BreadcrumbItem>All Products</BreadcrumbItem>
          </Breadcrumbs>
          <Accordion>
            <AccordionItem
              className="font-bold"
              key="1"
              title="Product Categories"
            >
              {" "}
              {productsByCategory.map((category, index) => (
                <div key={index}>
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      onChange={handleClick}
                      id={category}
                    />
                    <label
                      className="cursor-pointer font-light"
                      htmlFor={category}
                    >
                      {category}
                    </label>
                  </div>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="2"
              title="Filter by Price"
            >
              <Slider
                className="max-w-md"
                defaultValue={[100, 500]}
                formatOptions={{ style: "currency", currency: "USD" }}
                label="Price Range"
                maxValue={1000}
                minValue={0}
                step={50}
              />
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="3"
              title="Filter by Color"
            ></AccordionItem>
            <AccordionItem
              className="font-bold"
              key="4"
              title="Filter by Size"
            ></AccordionItem>
          </Accordion>
        </aside>

        <section className="w-full md:w-3/4 min-h-screen">
          <div className="flex justify-between items-center py-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-2/3 md:w-80 px-4 py-2 bg-gray-200 text-black focus:outline-none"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button className="px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                selectionMode="single"
                selectedKeys={selectedKeys}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.products.length === 0 ? (
              <div className="col-span-2 md:col-span-4 text-center">
                No products found
              </div>
            ) : (
              products.products.map((product) => (
                <div key={product.id} className="rounded-lg p-4">
                  <Link to={`/products/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))
            )}
          </div>

          <Pagination
            className="flex justify-center py-10"
            showControls
            page={currentPage}
            total={Math.ceil((products.total || 1) / LIMIT)}
            onChange={setCurrentPage}
          />
        </section>
      </main>

      <UpperFooter />
      <FooterPage />
    </>
  );
}
