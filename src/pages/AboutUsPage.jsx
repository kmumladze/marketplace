import { useState } from "react";
import aboutUsImage from "../assets/aboutUs.png";
import Header from "../components/Header";
import FooterPage from "./FooterPage";
import AnimateHeight from "react-animate-height";

export default function AboutUsPage() {
  const [height, setHeight] = useState(200);

  function toggleHeight() {
    setHeight(height === 200 ? "auto" : 200);
  }

  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gray-100">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <AnimateHeight duration={500} height={height}>
            <p className="text-lg text-gray-600 mb-6 flex flex-col gap-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              dignissimos soluta, harum cumque necessitatibus fugit obcaecati
              quaerat maiores quidem! Minima nam, deserunt architecto
              praesentium deleniti rerum repellendus quasi! Pariatur, fugiat?
            </p>
          </AnimateHeight>
          <button
            onClick={toggleHeight}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition w-40"
          >
            {height === 200 ? "Read More" : "Read Less"}
          </button>
        </div>
        <img
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg mt-8 md:mt-0"
          src={aboutUsImage}
          alt="About Us"
        />
      </div>
      <FooterPage />
    </main>
  );
}
