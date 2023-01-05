import React from "react";
import Bannerimg from "../../../assets/Banner/shakil2b.jpg";
const Banner = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex gap-5">
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-full"
            src={Bannerimg}
            alt="Catalogue"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-5">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl  text-gray-800 uppercase font-bold dark:text-white lg:text-3xl">
              Building cars for every lifestyle..... <br />
              Search Now Buy Sell Replace
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Building cars for every lifestyle. Enhance the look of your
              existing car or build a new one with options to fit your
              individuality. We can get you equipped for the ultimate outdoor
              adventure, protected for rugged work, or styled with a fresh look
              – ranging from full-build custom packages to specific part
              upgrades.
            </p>

            <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-800 focus:outline-none focus:bg-blue-500">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
