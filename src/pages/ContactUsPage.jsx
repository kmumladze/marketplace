import Header from "../components/Header";
import FooterPage from "./FooterPage";

export default function ContactUsPage() {
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12 dark:bg-black">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 dark:bg-gray-700">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center dark:text-black">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 dark:text-white">
            Email, call, or fill out the form below to reach us.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Customer Support
              </h2>
              <p className="text-gray-600 mt-2 dark:text-stone-300">
                Available 24/7 for any inquiries.
              </p>
              <p className="text-gray-800 mt-2 font-semibold dark:text-gray-500">
                info@yourmarketplace.com
              </p>
              <p className="text-gray-800 font-semibold dark:text-gray-500">
                +123 456 789
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                Get in Touch
              </h2>
              <div className="mt-4">
                <input
                  className="w-full p-3 border rounded-md mb-4 dark:text-white"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  className="w-full p-3 border rounded-md mb-4 dark:text-white"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <input
                  className="w-full p-3 border rounded-md mb-4 dark:text-white"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="w-full p-3 border rounded-md mb-4 dark:text-white"
                  rows="4"
                  placeholder="How can we help?"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-md transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </section>
  );
}
