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
    <section className="dark:bg-black">
      <Header />
      <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 my-10 dark:bg-gray-700">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
            About Us
          </h1>
          <AnimateHeight
            duration={500}
            height={height}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-gray-700 text-lg leading-relaxed dark:text-gray-300">
              <p>
                Welcome to <b>Marketplace</b> – your go-to marketplace for all
                things tech and beauty! Our mission is simple: to provide a
                seamless shopping experience that brings quality products
                straight to your doorstep. Whether you're looking for the latest
                iPhone, must-have makeup essentials, or anything in between,
                we’ve got you covered.
              </p>
              <p>
                At <b>Marketplace</b>, we believe in offering a diverse
                selection of high-quality products at competitive prices. We
                partner with trusted brands to ensure that each item you
                purchase meets your expectations. Customer satisfaction is at
                the heart of everything we do, and we work tirelessly to deliver
                exceptional service, fast shipping, and a secure shopping
                environment.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">
                Why Shop With Us?
              </h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <b>🌟 Wide Selection:</b> Browse our extensive range of
                  products from top categories like electronics, beauty, and
                  more.
                </li>
                <li>
                  <b>🛍 Easy Navigation:</b> Our user-friendly platform ensures
                  you can find exactly what you need, quickly and easily.
                </li>
                <li>
                  <b>💬 Customer Care:</b> We pride ourselves on our excellent
                  customer service, always ready to assist you with any
                  inquiries or concerns.
                </li>
                <li>
                  <b>🔒 Secure Shopping:</b> Your privacy and security are our
                  top priority. Enjoy peace of mind while shopping with us.
                </li>
              </ul>
              <p>
                Thank you for choosing <b>Marketplace</b>. We look forward to
                becoming your trusted marketplace for all your tech and beauty
                needs!
              </p>
            </div>
          </AnimateHeight>
          <div className="flex justify-center sm:justify-start mt-6">
            <button
              onClick={toggleHeight}
              className="px-6 py-3 bg-black text-white rounded-lg shadow-md transition text-lg"
            >
              {height === 200 ? "Read More" : "Read Less"}
            </button>
          </div>
        </div>
      </main>
      <FooterPage />
    </section>
  );
}
