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
    <main className="bg-blue-100 flex justify-around dark:bg-gray-900">
      <div className="flex flex-wrap gap-4 justify-center my-4 ">
        {productsByCategory.map((category, index) => (
          <div
            key={index}
            className="font-mono text-xs flex justify-center items-center bg-blue-300 p-4 rounded-md w-40 cursor-pointer hover:opacity-55 dark:bg-gray-500 dark:text-white"
            onClick={() => getProductsByCategory(category)}
          >
            <h1 className="text-base font-mono text-center">{category}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
