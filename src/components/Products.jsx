import { Link } from "react-router";
import ProductCard from "./ProductCard";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function Products({ products, setSort, setSearch, search }) {
  // console.log(products);

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
      setSort("asc");
    } else if (keys.has("Price(High to Low)")) {
      setSort("desc");
    } else {
      setSort(null);
    }
  }

  return (
    <main
      id="products"
      className="bg-gray-300 flex flex-col items-center min-h-screen dark:bg-gray-900 dark:text-white w-full"
    >
      <div className="flex flex-col md:flex-row justify-between p-16 w-full items-center gap-4 md:gap-8">
        <h1 className="font-bold text-2xl text-center md:text-left">
          Products For You!
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          className="w-2/3 md:w-72 px-4 py-2 bg-gray-200 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 shaddow-md"
          onChange={(element) => setSearch(element.target.value)}
          value={search}
        />

        <div className="flex justify-center w-full md:w-auto">
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="capitalize border border-gray-400 px-6 py-2 rounded-lg bg-gray-200 shadow-md hover:bg-gray-200 transition"
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full place-items-center">
        {products.length === 0 && (
          <div className="flex flex-col justify-center items-center w-full col-span-2 md:col-span-4 min-h-[200px]">
            <p>No exact matches found</p>
            <p>Try searching for something else instead? </p>
          </div>
        )}
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
