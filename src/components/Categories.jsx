import { useEffect, useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

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

export default function Categories() {
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
    <div className="flex flex-col m-4 w-full max-w-screen-2xl mx-auto">
      <div className="flex justify-between m-4 md:flex-row flex-col">
        <h1 className="font-mono font-bold text-2xl mb-4 self-start md:self-start dark:text-white">
          Shop by Categories
        </h1>
        <div className="flex gap-4 mb-4 w-full md:w-auto">
          <button
            className="bg-neutral-950 text-white p-3 rounded-md"
            ref={prevRef}
          >
            ← Prev
          </button>
          <button
            className="bg-stone-200 text-black p-3 rounded-md"
            ref={nextRef}
          >
            Next →
          </button>
        </div>
      </div>

      <main className="w-full flex justify-center p-2 overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            480: { slidesPerView: 3, spaceBetween: 16 },
            640: { slidesPerView: 4, spaceBetween: 16 },
          }}
          navigation={{
            enabled: true,
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full px-4"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {productsByCategory.map((category, index) => (
            <SwiperSlide key={index} className="w-full ">
              <Link to={`/products?category=${category}`}>
                <div
                  className="w-full h-64 bg-cover bg-center rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  style={{
                    backgroundImage: `url(${CATEGORY_IMAGE_MAP[category]})`,
                  }}
                >
                  <div className="backdrop-blur-2xl rounded-xl p-4 mt-40 mx-7 text-center">
                    <h1 className="text-black text-medium font-semibold capitalize p-2">
                      {category}
                    </h1>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}
