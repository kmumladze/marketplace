import { useState } from "react";
import aboutUsImage from "../assets/aboutUs.png";
import aboutus from "../assets/aboutus2.png";
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
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gray-100 min-h-screen">
        <div className="max-w-xl text-center md:text-left mt-28">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <AnimateHeight duration={500} height={height}>
            <div className="flex flex-col gap-3">
              <p className="text-lg text-gray-600 mb-6 flex flex-col gap-3">
                Welcome to Marketplace – your go-to marketplace for all things
                tech and beauty! Our mission is simple: to provide a seamless
                shopping experience that brings quality products straight to
                your doorstep. Whether you're looking for the latest iPhone,
                must-have makeup essentials, or anything in between, we’ve got
                you covered.
              </p>
              <p>
                At Marketplace, we believe in offering a diverse selection of
                high-quality products at competitive prices. We partner with
                trusted brands to ensure that each item you purchase meets your
                expectations. Customer satisfaction is at the heart of
                everything we do, and we work tirelessly to deliver exceptional
                service, fast shipping, and a secure shopping environment.
              </p>
              <h1 className="font-2xl">
                <b>Why Shop With Us?</b>
              </h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <b>Wide Selection: </b>Browse our extensive range of products
                  from top categories like electronics, beauty, and more.
                </li>
                <li>
                  <b>Easy Navigation: </b>Our user-friendly platform ensures you
                  can find exactly what you need, quickly and easily.
                </li>
                <li>
                  <b>Customer Care:</b>We pride ourselves on our excellent
                  customer service, always ready to assist you with any
                  inquiries or concerns.
                </li>
                <li>
                  <b> Secure Shopping:</b>Your privacy and security are our top
                  priority. Enjoy peace of mind while shopping with us.
                </li>
              </ul>
              <p>
                Thank you for choosing Marketplace. We look forward to becoming
                your trusted marketplace for all your tech and beauty needs!
              </p>
            </div>
          </AnimateHeight>
          <button
            onClick={toggleHeight}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition w-40 mt-4"
          >
            {height === 200 ? "Read More" : "Read Less"}
          </button>
        </div>
        <div className="flex flex-col justify-center mt-24 gap-3">
          <img
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg mt-8 md:mt-0"
            src={aboutUsImage}
            alt="About Us"
          />
          <img
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg mt-8 md:mt-0"
            src={aboutus}
            alt="About Us"
          />
        </div>
      </div>
      <FooterPage />
    </main>
  );
}
