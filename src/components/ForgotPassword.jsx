import { Link } from "react-router";
import forgotpassword from "../assets/forgotpassword.png";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen m-4 gap-10">
      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${forgotpassword})` }}
      >
        <div className="flex items-center justify-center p-3 m-4 border-2 rounded-xl cursor-pointer overflow-hidden w-1/3">
          <h3 className="text-medium md:text-xl font-semibold dark:text-white">
            <span className="text-3xl from-content2-foreground">M</span>
            arketplace
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Link to="/login">
          <p>← Back</p>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Forgot Password</h1>
          <p className="text-sm text-stone-400 w-full md:w-2/3">
            Enter your registered email address. we’ll send you a code to reset
            your password
          </p>
        </div>

        <form>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>
            <input
              id="name"
              className="border border-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="email"
              placeholder="marketplace@example.com"
              required
            />
          </div>

          <Link to="/enterOTP">
            <button
              className="mt-3 text-white bg-black font-mono text-base p-4 rounded-xl w-full transition"
              type="submit"
            >
              Send OTP
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
