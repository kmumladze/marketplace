import { Link } from "react-router";
import { MdOutlinePhonePaused } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaCcVisa } from "react-icons/fa6";
import { SiApplepay } from "react-icons/si";
import { GrPaypal } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function FooterPage() {
  return (
    <>
      <footer className="bg-black border-t border-gray-500 text-white py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-2xl">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Marketplace</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MdOutlinePhonePaused size={24} />
                <p>(011) 555-2133</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineEmail size={24} />
                <p>marketplace@example.com</p>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline size={32} />
                <p>Via Ascanio Sforza, 7, 20136 Milano MI, Italy</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aboutus" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <p className="hover:text-gray-300">My Account</p>
              </li>
              <li>
                <p className="hover:text-gray-300">Log In</p>
              </li>
              <li>
                <p className="hover:text-gray-300">My Cart</p>
              </li>
              <li>
                <p className="hover:text-gray-300">My Wishlist</p>
              </li>
              <li>
                <p className="hover:text-gray-300">Checkout</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <Link to="/contactUs" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <p className="hover:text-gray-300">Delivery Information</p>
              </li>
              <li>
                <Link to="/FaQ" className="hover:text-gray-300">
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <Link to="/contactUs" className="hover:text-gray-300">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates and offers.
            </p>
            <form>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="outline-none text-white bg-gray-800 border border-gray-50  p-2 rounded-lg"
                />
                <button className="bg-slate-500 px-4 py-2 rounded-md text-white hover:bg-gray-800">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-center text-gray-400 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <FaCcVisa className="text-blue-700 text-3xl" />
            <SiApplepay className="text-stone-300 text-3xl" />
            <GrPaypal className="text-blue-500 text-xl" />
          </div>
          <p>© {new Date().getFullYear()} Marketplace. All rights reserved.</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
