import { useEffect, useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CATEGORY_IMAGE_MAP = {
  beauty: "/beauty.jpg",
  fragrances: "/fragrances.jpg",
  furniture: "/furniture.jpg",
  groceries: "/groceries.jpg",
  "home-decoration": "/home-decoration.jpg",
  "kitchen-accessories": "/kitchen-accessories.jpg",
  laptops: "/laptops.jpg",
  "mens-shirts": "/mens-shirts.jpg",
  "mens-shoes": "/mens-shoes.jpg",
  "mens-watches": "/mens-watches.jpg",
  "mobile-accessories": "/mobile-accessoriesjpg",
  motorcycle: "/motorcycle.jpg",
  "skin-care": "/skin-care.jpg",
  smartphones: "/smartphones",
  "sports-accessories": "/sports-accessories.jpg",
  sunglasses: "/sunglasses.jpg",
  tablets: "/tablets.jpg",
  tops: "/tops.jpg",
  vehicle: "/vehicle.jpg",
  "womens-bags": "/womens-bags.jpg",
  "womens-dresses": "/womens-dresses.jpg",
  "womens-jewellery": "/womens-jewellery.jpg",
  "womens-shoes": "/womens-shoes.jpg",
  "womens-watches": "/womens-watches.jpg",
};

export default function Categories({ getProductsByCategory }) {
  const [productsByCategory, setProductsByCategory] = useState([]);

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

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 min-h-screen">
      {/* <Swiper slidesPerView={"auto"} spaceBetween={10} className="px-4"> */}
      {productsByCategory.map((category, index) => (
        // <SwiperSlide key={index} className="w-auto">
        <div
          className="flex items-center justify-center h-40 md:h-48 bg-cover bg-center rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform inset-0 bg-black bg-opacity-40"
          key={index}
          // onClick={() => {
          //   getProductsByCategory(category);
          // }}
          style={{ backgroundImage: `url(${CATEGORY_IMAGE_MAP[category]})` }}
        >
          <div className="bg-slate-300 rounded-xl px-2 mt-20">
            <h1 className="text-black text-medium font-semibold capitalize p-2">
              {category}
            </h1>
          </div>
        </div>
        // </SwiperSlide>
      ))}
      {/* </Swiper> */}
    </main>
  );
}
