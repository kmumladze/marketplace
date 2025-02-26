import signup from "../assets/signup.png";

export default function SignUp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen m-4">
      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div className="flex items-center justify-center p-3 m-4 border-2 rounded-xl cursor-pointer overflow-hidden w-1/3">
          <h3 className="text-xl font-semibold dark:text-white">
            <span className="text-3xl from-content2-foreground">M</span>
            arketplace
          </h3>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-8 flex flex-col text-sm">
        <h1 className="font-mono font-bold text-2xl">Create New Account </h1>
        <p className="text-[#A4A1AA] font-mono text-sm mb-6">
          Please enter details
        </p>

        <div>
          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-gray-700 text-sm md:text-base"
              >
                First Name
              </label>
              <input
                id="name"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastname"
                className="text-gray-700 text-sm md:text-base"
              >
                Last Name
              </label>
              <input
                id="lastname"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="text"
                placeholder="Enter your last name"
                required
              />
            </div>

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

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-gray-700 text-sm md:text-base"
              >
                Password
              </label>
              <input
                id="password"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="password"
                placeholder="Create your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" />I agree to the{" "}
                <span className="font-bold">Terms & Conditions</span>
              </label>
            </div>

            <button
              className="mt-3 text-white bg-black font-mono text-base p-4 rounded-xl w-full transition"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
