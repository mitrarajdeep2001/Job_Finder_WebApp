import React, { useState } from "react";
import FilterBox from "./FilterBox";
import JobBox from "./JobBox";

const JobsContainer = ({currentPage, totalJobs, jobs}) => {
  const [jobType, setJobType] = useState({"Full-Time": false, "Part-Time": false, Contract: false})
  const [exp, setExp] = useState({"0 - 1": false, "1 - 3": false, "3 - 6": false, "6 - 10": false, "10 - 20": false})
  return (
    <div className="container mx-auto px-5">
      <div className="flex w-full gap-5">
        <FilterBox jobType={jobType} setJobType={setJobType} exp={exp} setExp={setExp}/>
        <JobBox currentPage={currentPage} totalJobs={totalJobs} jobList={jobs} jobType={jobType} exp={exp}/>
      </div>
    </div>
  );
};

export default JobsContainer;
