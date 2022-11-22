import homeAbout from "../assets/services/img-11.jpg";

function HomeAbout() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-left text-center">
              ABOUT
              <br className="block" />
              Landslet City{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-[#e63946]">Estates</span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Landslet city estate was established in 2020 as an estate developing entity. We are
              located on the ... at.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-[#e63946]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 capitalize underline">our values</h6>
                <p className="text-sm text-gray-900">1. Customer satisfaction and delight</p>
                <p className="text-sm text-gray-900">2. We value diversity</p>
                <p className="text-sm text-gray-900">
                  3. We treat our customer with dignity and respect
                </p>
                <p className="text-sm text-gray-900">
                  4. We are responsible for our actions and undertake to deliver on our commitments
                </p>
                <p className="text-sm text-gray-900">
                  5. Our customers will be better off for doing business with us
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-teal-500">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 capitalize underline">our vision</h6>
                <p className="text-sm text-gray-900">
                  1. Our vision is to make our customers build their dream projects with ease
                  because we take the burden to promote quality services
                </p>
                <p className="text-sm text-gray-900">
                  2. Our vision is to make our customers build their dream projects with ease
                  because we take the burden to promote quality services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={homeAbout}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
