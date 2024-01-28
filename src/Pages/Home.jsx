import React from "react";
import Hero from "../Components/Hero";
import JobsContainer from "../Components/JobsContainer";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <Hero />
      <JobsContainer />
      <Pagination />
    </div>
  );
};

export default Home;
