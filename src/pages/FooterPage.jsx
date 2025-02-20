import { Link } from "react-router";

export default function FooterPage() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">MyMarket</h2>
          <p className="text-gray-400 mt-2">
            Your go-to marketplace for the best deals.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="aboutus">
                <p className="hover:text-gray-300">About Us</p>
              </Link>
            </li>

            <li>
              <a href="/" className="hover:text-gray-300">
                Shop
              </a>
            </li>

            <li>
              <Link to="contactUs">
                <p className="hover:text-gray-300">Contact</p>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Help Center
              </a>
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
            <div className="flex items-center bg-gray-800 p-2 rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-transparent flex-1 outline-none px-2 text-white"
              />
              <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} MyMarket. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
