import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Avatar } from "@heroui/react";
import FooterPage from "./FooterPage";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        // TODO: replace with Get current auth user
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
      <main className="min-h-screen flex flex-col gap-4 items-center">
        <h1 className="font-bold text-xl mt-7">My Profile</h1>
        <div className="flex w-full justify-center">
          <div className="flex items-center gap-4 max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
            <div>
              <Avatar isBordered src={user.image} className="w-16 h-16" />
            </div>
            <div>
              <h1 className="font-bold text-xl">
                {user.firstName} {user.lastName}
              </h1>
              <p>{user.company.title}</p>
              <p>
                {user.address.city}, {user.address.country},
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
          <p className="font-mono font-bold">Personal Information</p>
          <div className="flex flex-col md:flex-row w-full gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-gray-500">First Name</p>
                <p>{user.firstName}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Email Address</p>
                <p>{user.email}</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col">
                  <p className="text-gray-500">Last Name</p>
                  <p>{user.lastName}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500">Phone</p>
                  <p>{user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
          <p className="font-mono font-bold">Address</p>
          <div className="flex flex-col md:flex-row w-full gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-gray-500">Country</p>
                <p>{user.address.country}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Postal Code</p>
                <p>{user.address.postalCode}</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col">
                  <p className="text-gray-500">City/State</p>
                  <p>
                    {user.address.city}, {user.address.state}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500">State Code</p>
                  <p>{user.address.stateCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <main className="min-h-screen dark:bg-gray-500 dark:text-white">
        <div className="flex flex-col justify-evenly items-center md:flex-row p-6 dark:bg-gray-500">
         

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
      </main> */}
      <FooterPage />
    </>
  );
}
