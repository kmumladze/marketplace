import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import UserInfo from "./UserInfo.jsx";
import Header from "./Header.jsx";
import { Link } from "react-router";
import Blogcomments from "./BlogComments.jsx";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const resData = await response.json();
        console.log(resData);
        setBlog(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center min-h-screen bg-blue-200 dark:bg-black">
        <div className="flex flex-col p-6 gap-4 bg-stone-200 rounded-xl w-1/2 justify-center items-center dark:bg-gray-500">
          <h1 className="font-bold text-2xl">{blog.title}</h1>
          <Link to={`/users/${blog.userId}`}>
            <UserInfo userId={blog.userId} />
          </Link>
          <p>{blog.body}</p>
          <div className="flex gap-6 justify-end">
            <p className="text-green-500">
              Likes: {blog.reactions?.likes || 0}
            </p>
            <p className="text-red-500">
              Dislikes: {blog.reactions?.dislikes || 0}
            </p>
          </div>
        </div>
        <Blogcomments />
      </main>
    </>
  );
}
