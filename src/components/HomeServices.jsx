import archito1 from "../assets/services/archito.jpeg";
import electrico from "../assets/services/electrico2.jpg";
import roofingo from "../assets/services/roofing.webp";

function HomeServices() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={archito1}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={electrico}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={roofingo}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:-mt-28 p-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
              WHAT WE OFFER
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              As a customer oriented company, we focus on activities that are highly cost effective
              and quality services to he target market delight and satisfaction.
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              We strive to follow international standards that are beneficial to our customers
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              Please don't hesitate to contact us for any of the following services. We have you in
              mind.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-teal-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 capitalize underline">
                  Building and construction
                </h6>
                <p className="text-sm text-gray-900 capitalize">1. Architectural design</p>
                <p className="text-sm text-gray-900 capitalize">2. Electrical engineering</p>
                <p className="text-sm text-gray-900 capitalize">3. Plumbing works</p>
                <p className="text-sm text-gray-900 capitalize">4. General painting</p>
                <p className="text-sm text-gray-900 capitalize">5. laying of tiles</p>
                <p className="text-sm text-gray-900 capitalize">6. carpentry works</p>
                <p className="text-sm text-gray-900 capitalize">7. roofing works</p>
                <p className="text-sm text-gray-900 capitalize">8. POP</p>
                <p className="text-sm text-gray-900 capitalize">9. skimming</p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-[#e63946]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 capitalize underline">Sale of land</h6>
                <p className="text-sm text-gray-900 mb-5">
                  Our beautiful lands are located at the following localities in the Ga South
                  Municipality
                </p>
                <p className="text-sm text-gray-900">1. Agbezo</p>
                <p className="text-sm text-gray-900">2. Akoteaku</p>
                <p className="text-sm text-gray-900">2. Obakra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
