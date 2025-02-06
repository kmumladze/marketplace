import { useState, useEffect } from "react";

export default function UserInfo({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const resData = await response.json();
        console.log(resData);
        setUser(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col items-center justify-around">
        <strong>Author: </strong>
        <div className="flex gap-2">
          <img
            className="w-6 bg-slate-300 rounded-full"
            src={user.image}
            alt="user image"
          />
          <h1>
            <strong>
              {user.firstName} {user.lastName}
            </strong>
          </h1>
          <p>Age: {user.age}</p>
        </div>
      </div>
    </>
  );
}
