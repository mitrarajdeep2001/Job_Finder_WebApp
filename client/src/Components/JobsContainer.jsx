import React from "react";
import FilterBox from "./FilterBox";
import JobBox from "./JobBox";

const JobsContainer = ({jobs}) => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex w-full gap-5">
        <FilterBox />
        <JobBox jobList={jobs}/>
      </div>
    </div>
  );
};

export default JobsContainer;
