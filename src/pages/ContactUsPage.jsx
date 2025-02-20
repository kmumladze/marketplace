import Header from "../components/Header";
import FooterPage from "./FooterPage";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Email, call, or fill out the form below to reach us.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                Customer Support
              </h2>
              <p className="text-gray-600 mt-2">
                Available 24/7 for any inquiries.
              </p>
              <p className="text-gray-800 mt-2 font-semibold">
                info@yourmarketplace.com
              </p>
              <p className="text-gray-800 font-semibold">+123 456 789</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                Get in Touch
              </h2>
              <div className="mt-4">
                <input
                  className="w-full p-3 border rounded-md mb-4"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  className="w-full p-3 border rounded-md mb-4"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <input
                  className="w-full p-3 border rounded-md mb-4"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="w-full p-3 border rounded-md mb-4"
                  rows="4"
                  placeholder="How can we help?"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
