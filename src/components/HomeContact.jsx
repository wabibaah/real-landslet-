import React from "react";

function HomeContact() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Advertise your properties on
            </h2>
            <a
              href="https://landslet-city-estate-test.vercel.app/"
              className="text-base text-blue-400 hover:text-blue-500"
            >
              https://landslet-city-estate-test.vercel.app
            </a>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Duration</h6>
              <p className="text-sm text-gray-900">1. Sell or buy on our platform</p>
              <p className="text-sm text-gray-900">2. Rent on our platform</p>
              <p className="text-sm text-gray-900">3. Lease on our platform</p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Properties</h6>
              <p className="text-sm text-gray-900">1. Lands</p>
              <p className="text-sm text-gray-900">2. Houses</p>
              <p className="text-sm text-gray-900">3. Rooms</p>
              <p className="text-sm text-gray-900">4. Hostels</p>
              <p className="text-sm text-gray-900">5. Air BnB</p>
              <p className="text-sm text-gray-900 ml-3 mr-3">
                <a
                  href="https://landslet-city-estate-test.vercel.app/sign-up"
                  className="text-blue-400 hover:text-blue-500"
                >
                  Sign up now
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">
            Send us a message
          </h2>

          <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
            Ask us everything and we would love to hear from you
          </p>

          <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="#"
              class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="mt-2">121 Street, NY</span>
            </a>

            <a
              href="#"
              class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <span class="mt-2">+2499999666600</span>
            </a>

            <a
              href="#"
              class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>

              <span class="mt-2">example@example.com</span>
            </a>
          </div>

          <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
              <div class="w-full mx-2">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Name
                </label>

                <input
                  placeholder="Name"
                  class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                />
              </div>

              <div class="w-full mx-2 mt-4 md:mt-0">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  E-mail
                </label>

                <input
                  placeholder="Email"
                  class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                />
              </div>
            </div>

            <div class="w-full mt-4">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Message
              </label>

              <textarea
                class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Include your phone number in your message"
              ></textarea>
            </div>

            <div class="flex justify-center mt-6">
              <button class="px-4 py-2 text-white transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500 ">
                Send Us Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
