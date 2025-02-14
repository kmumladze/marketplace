import { useEffect, useState } from "react";

import Header from "../components/Header.jsx";
import { Link } from "react-router";

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
    <>
      <Header />

      <div className="flex flex-col gap-5 dark:bg-gray-900 dark:text-white">
        {blogs.map((blog, index) => (
          <div
            className="flex flex-col gap-4 border-4 p-4 rounded-lg m-5"
            key={index}
          >
            <h1 className="text-bold text-2xl">{blog.title}</h1>
            <p>{blog.body.slice(0, 150)}...</p>
            <div className="flex gap-6 flex-col">
              <p>Blog review: {blog.views || "No views available"}</p>
              {/* <p>Author: {blog.userId || "No user info"}</p> */}
              <div>
                <Link to={`/blog/${blog.id}`}>
                  <button className="bg-blue-500 text-stone-950 p-4 rounded-xl hover:text-white hover:transition-colors">
                    Read Blog
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex gap-6 justify-end">
              <p className="text-green-500">
                Likes: {blog.reactions?.likes || 0}
              </p>
              <p className="text-red-500">
                Dislikes: {blog.reactions?.dislikes || 0}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-stone-950 px-6 py-4 m-4 rounded-xl hover:text-white hover:transition-colors"
            onClick={loadMoreOnClick}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}
