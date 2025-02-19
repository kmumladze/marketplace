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

export default function Products({ products, setSort }) {
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
    <main className="bg-gray-300 flex flex-col justify-around items-center min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="flex justify-around w-full items-center">
        <h1 className="font-bold text-2xl">Products For You!</h1>
        <div className="flex justify-center m-5">
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize" variant="bordered">
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
              <DropdownItem key="Reset">Reset</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-5">
        {products.length === 0 && (
          <div className="flex flex-col justify-center items-center">
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
