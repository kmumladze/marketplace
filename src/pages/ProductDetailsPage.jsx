import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Header from "../components/Header.jsx";
import Reviews from "../components/Reviews.jsx";
import { CartContext } from "../providers/CartProvider.js";
import FooterPage from "./FooterPage.jsx";
import { Spinner } from "@heroui/react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [isAddedCart, setIsAddedCart] = useState(false);

  // console.log(cart);

  useEffect(() => {
    async function fetchProductsDetails() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProductsDetails();
  }, [productId]);

  if (product === null) {
    return (
      <>
        <Header />
        <div>
          {" "}
          <Spinner />
          loading...
        </div>
      </>
    );
  }

  const variant = "underlined";
  return (
    <>
      <Header />

      <main>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col w-full md:w-1/3 gap-3">
            <div>
              <img
                className="bg-gray-200 flex justify-center items-center w-full"
                src={product.thumbnail}
                alt=""
              />
            </div>
            <div className="flex gap-3">
              <div className="bg-gray-200 flex justify-center items-center w-full">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="bg-gray-200 flex justify-center items-center w-full">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="bg-gray-200 flex justify-center items-center w-full">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="bg-gray-200 flex justify-center items-center w-full">
                <img src={product.thumbnail} alt="" />
              </div>{" "}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">{product.title}</h1>
                <p>{product.category}</p>
              </div>

              <div className="flex gap-4 text-gray-600">
                <h3>
                  {"⭐".repeat(product.rating)} {product.rating}
                </h3>
                <p>({product.reviews.length} reviews)</p>
              </div>
              <p className="font-mono">$ {product.price}</p>
              <p className="w-96 text-sm">{product.description}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Color</h1>
              <div className="flex gap-2">
                <div className="bg-[#d11111] w-10 h-10 rounded-lg"></div>
                <div className="bg-[#3257a8] w-10 h-10 rounded-lg"></div>
                <div className="bg-[#d17e11] w-10 h-10 rounded-lg"></div>
                <div className="bg-[#030303] w-10 h-10 rounded-lg"></div>
                <div className="bg-[#6aa63a] w-10 h-10 rounded-lg"></div>
                <div className="bg-[#cbd111] w-10 h-10 rounded-lg"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Size</h1>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 border-2 border-black rounded-lg text-lg
             flex justify-center items-center hover:bg-black hover:text-white cursor-pointer transition-all"
                >
                  S
                </div>
                <div className="w-10 h-10 border-2 border-black rounded-lg flex justify-center items-center hover:bg-black hover:text-white cursor-pointer transition-all">
                  M
                </div>
                <div className="w-10 h-10 border-2 border-black rounded-lg flex justify-center items-center hover:bg-black hover:text-white cursor-pointer transition-all">
                  L
                </div>
                <div className="w-10 h-10 border-2 border-black rounded-lg flex justify-center items-center hover:bg-black hover:text-white cursor-pointer transition-all">
                  XL
                </div>
                <div className="w-10 h-10 border-2 border-black rounded-lg flex justify-center items-center hover:bg-black hover:text-white cursor-pointer transition-all">
                  XXL
                </div>
              </div>
            </div>

            <p className="text-red-600 text-sm">
              Only {product.stock} Stocks Left!
            </p>

            <button
              className={`mt-3 rounded-md px-3 py-2 bg-black text-white border-none text-sm disabled:cursor-not-allowed border-2 cursor-pointer hover:bg-black hover:text-white transition w-full ${
                isAddedCart ? "bg-gray-500 text-black" : ""
              }`}
              onClick={() => {
                addToCart(product);
                setIsAddedCart(true);
                setTimeout(() => setIsAddedCart(false), 1000);
              }}
            >
              {isAddedCart ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          <div className="w-full md:w-2/3">
            <Tabs key={variant} aria-label={variant} variant={variant}>
              <Tab key="Descriptions" title="Descriptions">
                <Card>
                  <CardBody>{product.description}</CardBody>
                </Card>
              </Tab>
              <Tab key="Additional Information" title="Additional Information">
                <Card>
                  <CardBody>
                    <div className="flex flex-col gap-2">
                      <p>
                        <b>Category: </b>
                        {product.category}
                      </p>
                      <p>
                        <b>Brand: </b> {product.brand}
                      </p>
                      <p>
                        <b>Shipping: </b> {product.shippingInformation}
                      </p>
                      <p>
                        <b>Return: </b> {product.returnPolicy}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="Reviews" title="Reviews">
                <Card>
                  <CardBody>
                    <Reviews
                      productId={product.id}
                      review={"⭐".repeat(product.rating)}
                      rating={product.rating}
                      reviewQuantity={product.reviews.length}
                    />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </main>

      <FooterPage />
    </>
  );
}
