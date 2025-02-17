import { useEffect, useState } from "react";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Link } from "react-router";

export default function Categories({ getProductsByCategory }) {
  const [productsByCategory, setProductsByCategory] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["4xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        );
        const resData = await response.json();
        setProductsByCategory(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <main className="bg-gray-100 flex justify-around items-center dark:bg-gray-900">
      {/*  */}
      <div className="flex flex-wrap gap-3 my-3">
        {sizes.map((size) => (
          <Button
            className="font-mono text-xl justify-center items-center bg-gray-300 p-6 rounded-md cursor-pointer hover:opacity-55 dark:bg-gray-500 dark:text-white"
            key={size}
            onPress={() => handleOpen(size)}
          >
            Categories
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 my-3 ">
        <Link to="/blog">
          <h3 className="font-mono text-md justify-center items-center bg-gray-300 p-2 rounded-md cursor-pointer hover:opacity-55 dark:bg-gray-500 dark:text-white">
            Blog
          </h3>
        </Link>
      </div>
      <Drawer isOpen={isOpen} size={size} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Categories
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-wrap gap-4 justify-center my-4 ">
                  {productsByCategory.map((category, index) => (
                    <div
                      key={index}
                      className="font-mono text-xs flex justify-center items-center bg-gray-300 p-4 rounded-md w-40 cursor-pointer hover:opacity-55 dark:bg-gray-500 dark:text-white"
                      onClick={() => {
                        onClose();
                        getProductsByCategory(category);
                      }}
                    >
                      <h1 className="text-base font-mono text-center">
                        {category}
                      </h1>
                    </div>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>

      {/*  */}
    </main>
  );
}
