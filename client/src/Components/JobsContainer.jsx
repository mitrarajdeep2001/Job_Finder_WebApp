import React from "react";
import FilterBox from "./FilterBox";
import JobBox from "./JobBox";

const JobsContainer = ({currentPage, totalJobs, jobs}) => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex w-full gap-5">
        <FilterBox />
        <JobBox currentPage={currentPage} totalJobs={totalJobs} jobList={jobs}/>
      </div>
    </div>
  );
};

export default JobsContainer;
