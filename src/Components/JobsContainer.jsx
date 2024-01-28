import React from "react";
import FilterBox from "./FilterBox";
import JobBox from "./JobBox";

const JobsContainer = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex w-full gap-5">
        <FilterBox />
        <JobBox />
      </div>
    </div>
  );
};

export default JobsContainer;
