import React from "react";
import heroImg from "../assets/hero.png";
import SearchBox from "./SearchBox";
import { jobTitles } from "../data";

const Banner = () => {
  return (
    <div className="container mx-auto p-5 h-auto">
      <div className="flex justify-between items-end">
        <div className="mb-5 md:mb-10">
          <p className="text-slate-700 dark:text-white text-xl md:text-3xl lg:text-6xl font-bold">
            Find Your Dream Job With Ease
          </p>
        </div>
        <div className="w-2/3 md:w-1/3 lg:w-2/3 xl:w-1/3 h-full">
          <img src={heroImg} alt="hero_img" className="object-contain" />
        </div>
      </div>
      <SearchBox />
      <div className="flex flex-wrap mt-5">
        {
          jobTitles.map((({id, title}) => (
            <div key={id} className="p-1 bg-[#1d4fd826] text-blue-600 text-xs rounded-full mr-3 md:mx-6 my-2 cursor-pointer">{title}</div>
          )))
        }
      </div>
    </div>
  );
};

export default Banner;
