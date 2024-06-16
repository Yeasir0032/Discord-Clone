"use client";
export const LoginPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-2 sm:p-6">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white text-center">
              Welcome Back!
            </h1>
            <h2 className="text-sm text-center dark:text-gray-500">
              We are so excited to see you again.
            </h2>
            <form className="space-y-2" action="#">
              <div>
                <label
                  htmlFor="fname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email or Phone Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password<span className="text-red-700">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-indigo-700 rounded-sm px-1 py-1"
              >
                Sign up
              </button>
              <button
                id="googleLink"
                className="w-full text-black bg-white rounded-sm px-1 py-1"
              >
                Sign up using Google
              </button>
              <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                Already have an Account?{" "}
                <a
                  href="#"
                  className="text-sm font-extralight text-primary-600 hover:underline text-blue-400"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
