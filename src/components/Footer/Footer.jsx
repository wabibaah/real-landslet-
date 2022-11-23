import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mx-auto">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
          <h1
            className="lg:text-2xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            Subscribe to <span className="text-teal-400">our promotions</span> weekly
          </h1>
          <div>
            <input
              type="email"
              placeholder="Enter email"
              className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
              className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
            >
              Subscribe
            </button>
          </div>
        </div>
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2022 Apply. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
