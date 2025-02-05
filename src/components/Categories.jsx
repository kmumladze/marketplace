import { useEffect, useState } from "react";

export default function Categories({ getProductsByCategory }) {
  const [productsByCategory, setProductsByCategory] = useState([]);

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
    <main className="bg-blue-100 flex justify-around">
      <div className="flex flex-wrap gap-4 justify-center my-4">
        {productsByCategory.map((category, index) => (
          <div
            key={index}
            className="flex bg-blue-300 p-4 rounded-md w-40 cursor-pointer hover:opacity-55"
            onClick={() => getProductsByCategory(category)}
          >
            <h1 className="text-lg font-semibold">{category}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
