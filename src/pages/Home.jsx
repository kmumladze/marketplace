import womensCollection from "../assets/womensCollection.jpg";
import { Link } from "react-router";

export default function Home() {
  return (
    <main className="flex justify-center items-center m-2">
      <div
        className="w-full md:w-5/6 h-screen bg-cover bg-center flex items-centerr"
        style={{ backgroundImage: `url(${womensCollection})` }}
      >
        <div className="w-1/2 pl-10 text-black items-start flex flex-col justify-center ml-10">
          <h3 className="font-medium text-lg">Classic Exclusive</h3>
          <h1 className="font-bold text-4xl">Women's Collection</h1>
          <p className="text-sm mt-2">UPTO 40% OFF</p>

          <Link to="/products">
            <button className="bg-black text-white px-6 py-2 text-sm rounded-full mt-4 hover:shadow-lg hover:scale-100">
              Shop Now &nbsp;→
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
