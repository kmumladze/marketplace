import { useEffect, useState } from "react";

import Header from "../components/Header.jsx";
import BlogCard from "../components/BlogCard.jsx";

export default function BlogPage() {
  const [curPage, setCurPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  const [isFollowed, setIsFollowed] = useState(false);

  const loadMoreOnClick = () => {
    setCurPage((prev) => prev + 1);
  };

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts?limit=10&skip=${(curPage - 1) * 10}`
        );
        const resData = await response.json();
        console.log(resData);
        setBlogs([...blogs, ...resData.posts]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBlogs();
  }, [curPage]);

  console.log(blogs);

  return (
    <div className="dark:bg-gray-900">
      <Header />

      <div className="flex justify-center">
        <div className="grid grid-cols-3 m-4 gap-5 dark:bg-gray-900 dark:text-white">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}

          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 text-stone-950 p-4 m-4 rounded-xl hover:text-white hover:transition-colors"
              onClick={loadMoreOnClick}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
