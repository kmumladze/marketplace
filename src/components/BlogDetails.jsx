import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

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
    <div className="flex flex-col justify-center items-center p-4 m-4 gap-4">
      <h1 className="font-bold text-2xl">{blog.title}</h1>
      <p>
        <strong>Author</strong> {blog.userId}
      </p>
      <p>{blog.body}</p>
    </div>
  );
}
