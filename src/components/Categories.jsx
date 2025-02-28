import { useEffect, useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log(swiper);

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
    <div className="flex flex-col m-4 w-full max-w-6xl mx-auto">
      <div className="flex justify-between">
        <h1 className="font-mono font-bold text-2xl mb-4 self-start md:self-start dark:text-white">
          Shop by Categories
        </h1>
        <div className="flex gap-4 mb-4">
          <button className="bg-black text-white p-3 rounded-md" ref={prevRef}>
            {" "}
            ← Prev
          </button>
          <button
            className="bg-stone-200 text-black p-3 rounded-md"
            ref={nextRef}
          >
            {" "}
            Next →
          </button>
        </div>
      </div>

      <main className="w-full flex justify-center">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            // nextEl: <div>hah</div>,
            enabled: true,
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {productsByCategory.map((category, index) => (
            <SwiperSlide key={index} className="w-60 md:w-72">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  getProductsByCategory(category);
                }}
                style={{
                  backgroundImage: `url(${CATEGORY_IMAGE_MAP[category]})`,
                }}
              >
                <div className="bg-slate-300 rounded-xl p-4 mt-40 mx-7 text-center">
                  <h1 className="text-black text-medium font-semibold capitalize p-2">
                    {category}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}
