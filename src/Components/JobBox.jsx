import React from "react";
import ListBox from "./Listbox";
import { jobList } from "../data";
import JobCard from "./JobCard";

const JobBox = () => {
  const sortFilters = ["Newest", "Oldest", "A-Z", "Z-A"];

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-0">
        <p className="font-medium dark:text-white">
          Showing <span className="font-bold">1</span> to{" "}
          <span className="font-bold">9</span> of{" "}
          <span className="font-bold">{jobList.length}</span> jobs
        </p>
        <ListBox selectItems={sortFilters} />
      </div>
      <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-3 my-5">
        {jobList.map((e) => (
          <JobCard e={e} />
        ))}
      </div>
    </div>
  );
};

export default JobBox;
