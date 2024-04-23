import React from "react";
import ListBox from "./Listbox";
import JobCard from "./JobCard";

const JobBox = ({currentPage, totalJobs, jobList}) => {
  const sortFilters = ["Newest", "Oldest", "A-Z", "Z-A"];

  // Calculate the start and end indices based on the current page and jobs per page
  const startIndex = (currentPage - 1) * jobList.length + 1;
  const endIndex = Math.min(currentPage * jobList.length, totalJobs);

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-0">
        <p className="font-medium dark:text-white">
          Showing <span className="font-bold">{startIndex}</span> to{" "}
          <span className="font-bold">{endIndex}</span> of{" "}
          <span className="font-bold">{totalJobs}</span> jobs
        </p>
        <ListBox selectItems={sortFilters} />
      </div>
      <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-3 my-5">
        {jobList.map((e) => (
          <JobCard key={e._id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default JobBox;
