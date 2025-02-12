import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { AiFillLike } from "react-icons/ai";

export default function Blogcomments() {
  const { id } = useParams();
  const [blogComments, setBlogComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogComments() {
      try {
        const response = await fetch(
          `https://dummyjson.com/comments/post/${id}`
        );
        const resData = await response.json();
        // console.log(resData);
        setBlogComments(resData.comments);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    }
    fetchBlogComments();
  }, [id]);

  return (
    <div className="mt-6 bg-stone-200 dark:bg-gray-500 p-4 rounded-lg w-1/2">
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <>
          <h3 className="font-bold text-lg mb-2 flex gap-2 items-center">
            Comments:
            <span className="bg-red-500 text-white dark:text-black w-2 h-2 px-5 py-4 flex items-center justify-center rounded-2xl text-sm">
              {blogComments.length}
            </span>
          </h3>
          {blogComments.length > 0 ? (
            <ul className="space-y-3">
              {blogComments.map((comment) => (
                <li
                  key={comment.id}
                  className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg"
                >
                  <p className="font-semibold">{comment.user.fullName}</p>
                  <p>{comment.body}</p>
                  <div className="flex justify-end items-center">
                    <AiFillLike className="text-red-500" />{" "}
                    <p className="text-red-500 text-sm">{comment.likes}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
        </>
      )}
    </div>
  );
}
