import React from "react";
import Hero from "../Components/Hero";
import JobsContainer from "../Components/JobsContainer";
import { jobList } from "../data";
import Pagination from "@mui/material/Pagination";

const Home = () => {
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <Hero />
      <JobsContainer jobs={jobList} />
      <div className="flex justify-center">
        <Pagination
          count={jobList.length}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Home;
