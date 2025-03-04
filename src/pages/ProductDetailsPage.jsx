import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Header from "../components/Header.jsx";
import Reviews from "../components/Reviews.jsx";
import { CartContext } from "../providers/CartProvider.js";
import FooterPage from "./FooterPage.jsx";
import { Spinner } from "@heroui/react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import UpperFooter from "../components/UpperFooter.jsx";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [isAddedCart, setIsAddedCart] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // console.log(cart);

  useEffect(() => {
    async function fetchProductsDetails() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const productData = await response.json();
        setProduct(productData);

        // const allProductsResponse = await fetch(
        //   `https://dummyjson.com/products`
        // );
        // const allProductsData = await allProductsResponse.json();

        // const related = allProductsData.products.filter(
        //   (item) =>
        //     item.category === productData.category && item.id !== productData.id
        // );

        const categoryProducts = await fetch(
          `https://dummyjson.com/products/category/${productData.category}`
        );

        const allProductsData = await categoryProducts.json();

        const related = allProductsData.products.filter(
          (item) => item.id !== productData.id
        );

        console.log(related);

        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProductsDetails();
  }, [productId]);
  // console.log("this is", product);

  if (product === null) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center w-full">
          <Spinner />
          loading...
        </div>
      </>
    );
  }

  const variant = "underlined";

  console.log(relatedProducts);

  return (
    <>
      <Header />

      <main className="flex justify-center flex-col items-center min-h-screen w-full">
        <div className="max-w-7xl flex flex-col items-center w-full md:flex-row justify-center gap-8">
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

          <div className="flex flex-col gap-6 p-8 bg-white max-w-xl">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h1 className="font-extrabold text-3xl text-gray-900">
                  {product.title}
                </h1>
                <p className="text-gray-500 text-lg">{product.category}</p>
              </div>

              <div className="flex gap-4 text-gray-600 items-center text-lg">
                <h3 className="flex items-center font-medium">
                  {"⭐".repeat(product.rating)} {product.rating}
                </h3>
                <p className="text-gray-500">
                  ({product.reviews.length} reviews)
                </p>
              </div>

              <p className="font-mono text-2xl font-bold text-gray-800">
                $ {product.price}
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg">Color</h2>
              <div className="flex gap-3">
                {[
                  "#d11111",
                  "#3257a8",
                  "#d17e11",
                  "#030303",
                  "#6aa63a",
                  "#cbd111",
                ].map((color, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Size</h2>
              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <div
                    key={size}
                    className="w-12 h-12 border-2 border-gray-700 rounded-lg flex justify-center items-center text-lg font-medium cursor-pointer hover:bg-gray-700 hover:text-white transition-all"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-red-500 text-md font-semibold">
              Only {product.stock} Stocks Left!
            </p>

            <button
              className={`mt-4 w-full rounded-md px-4 py-3 bg-black text-white border-none text-sm disabled:cursor-not-allowed border-2 cursor-pointer hover:bg-black hover:text-white transition ${
                isAddedCart ? "bg-gray-500 text-black" : ""
              }`}
              disabled={isAddedCart}
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
                <p className="w-full m-1 md:m-4"> {product.description}</p>
              </Tab>
              <Tab key="Additional Information" title="Additional Information">
                <div className="flex flex-col gap-2 m-4">
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
              </Tab>
              <Tab key="Reviews" title="Reviews">
                <Reviews
                  productId={product.id}
                  review={"⭐".repeat(product.rating)}
                  rating={product.rating}
                  reviewQuantity={product.reviews.length}
                />
              </Tab>
            </Tabs>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Related Products</h1>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1">
                    <div className="flex flex-col items-start w-56 cursor-pointer relative gap-2 bg-stone-100 p-4">
                      <img src={item.thumbnail} alt="" />
                    </div>

                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-sm">
                      {item.description.slice(0, 25)}...
                    </p>
                    <p className="text-gray-700">$ {item.price}</p>
                  </div>
                ))
              ) : (
                <p>No related products found</p>
              )}{" "}
            </div>
          </div>
        </div>
      </main>
      <UpperFooter />

      <FooterPage />
    </>
  );
}
