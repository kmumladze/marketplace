import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Avatar } from "@heroui/react";

export default function UserDetailsPage() {
  const { userId } = useParams();
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
      <Header />
      <main className="min-h-screen dark:bg-gray-500 dark:text-white">
        <div className="flex flex-col justify-evenly items-center md:flex-row p-6 dark:bg-gray-500">
          <Avatar
            isBordered
            src={user.image}
            className="w-1/4 h-1/4 dart:bg-opacity-20"
          />

          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl mt-10">
              {user.firstName} {user.lastName}
            </h1>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Birthday:</strong> {user.birthDate}
            </p>
            <p>
              <strong>Address: </strong>
              {user.address.city}, {user.address.address}
            </p>
            <p>
              <strong>Country: </strong>
              {user.address.country}
            </p>
            <p>
              <strong>Work: </strong>
              {user.company.name}
              <strong> department:</strong> {user.company.department}
              <strong> role:</strong> {user.company.title}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
