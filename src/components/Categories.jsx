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

import { Card, CardHeader, CardFooter, Image } from "@heroui/react";
import { div } from "framer-motion/client";

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
    <main className="bg-blue-950 bg-opacity-15 flex justify-around items-center dark:bg-gray-900">
      {/*  */}
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-44 mb-10 z-0">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-4.jpeg"
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-3.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-2.jpeg"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://heroui.com/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://heroui.com/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night&#39;s sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/*  */}

      <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
          Explore
        </h2>

        <div className="flex flex-wrap gap-3 my-3">
          {sizes.map((size) => (
            <Button
              className="flex flex-col items-center bg-stone-200 dark:bg-gray-700 p-6 rounded-xl shadow-lg w-72 text-medium hover:bg-gray-300 hover:transition-background"
              key={size}
              onPress={() => handleOpen(size)}
            >
              Categories
            </Button>
          ))}
        </div>

        <div className="w-full border-t border-gray-300 dark:border-gray-600 my-4"></div>

        <div className="w-full">
          <Link to="/blog">
            <h3 className="flex flex-col items-center bg-stone-200 dark:bg-gray-700 dark:text-white p-2 rounded-xl shadow-lg w-72 hover:bg-gray-300 hover:transition-background">
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
                        <a href="#products">
                          <h1 className="text-base font-mono text-center">
                            {category}
                          </h1>
                        </a>
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
      </div>

      {/*  */}
    </main>
  );
}
