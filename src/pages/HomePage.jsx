import { useState } from "react";
import Header from "../components/Header.jsx";
import Categories from "../components/Categories.jsx";
import FooterPage from "./FooterPage.jsx";
import Home from "./Home.jsx";
import DealsOfTheMonth from "../components/DealsOfTheMonth.jsx";
import InstagramStories from "../components/InstagramStories.jsx";
import UpperFooter from "../components/UpperFooter.jsx";

export default function HomePage() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  // async function handleClick() {
  //   try {
  //     const response = await fetch(
  //       navigate(`https://dummyjson.com/products/category/${category}`)
  //     );
  //     const resData = await response.json();
  //     setProduct(resData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  return (
    <main className="dark:bg-black">
      <Header cart={cart} />

      <Home />
      <Categories />

      <DealsOfTheMonth />
      <InstagramStories />
      <UpperFooter />
      <FooterPage />
    </main>
  );
}
