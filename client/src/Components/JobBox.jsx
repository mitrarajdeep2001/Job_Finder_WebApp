import React, { useState } from "react";
import ListBox from "./Listbox";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";

const JobBox = ({ currentPage, totalJobs, jobList, jobType, exp }) => {
  const sortFilters = ["Newest", "Oldest"];
  const [filter, setFilter] = useState(sortFilters[0]);
  const searchInput = useSelector((state) => state.search);

  // Calculate the start and end indices based on the current page and jobs per page
  const startIndex = (currentPage - 1) * jobList.length + 1;
  const endIndex = Math.min(currentPage * jobList.length, totalJobs);

  const filteredList = jobList
    .filter((job) => {
      // Check if any job type is selected
      const isJobTypeSelected = Object.values(jobType).some((value) => value);

      // Check if any experience range is selected
      const isExpSelected = Object.values(exp).some((value) => value);

      // Check if the job's type matches any selected job type
      const jobTypeMatch =
        !isJobTypeSelected ||
        Object.entries(jobType).some(
          ([type, isSelected]) => isSelected && job.jobType === type
        );

      // Check if the job's experience matches any selected experience range
      const expMatch =
        !isExpSelected ||
        Object.entries(exp).some(
          ([range, isSelected]) =>
            isSelected &&
            job.yearOfExp >= Number(range.split("-")[0]) &&
            job.yearOfExp < Number(range.split("-")[1])
        );

      // Check if job matches the search input (keyword or location)
      const keywordMatch =
        job.jobTitle.toLowerCase().includes(searchInput.keyword.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchInput.keyword.toLowerCase());

      const locationMatch =
        job.location.toLowerCase().includes(searchInput.location.toLowerCase());

      return jobTypeMatch && expMatch && keywordMatch && locationMatch;
    })
    .sort((a, b) => {
      if (filter === "Newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-0">
        <p className="font-medium dark:text-white">
          Showing{" "}
          <span className="font-bold">{totalJobs === 0 ? 0 : startIndex}</span>{" "}
          to <span className="font-bold">{endIndex}</span> of{" "}
          <span className="font-bold">{totalJobs}</span> jobs
        </p>
        <ListBox
          filter={filter}
          setFilter={setFilter}
          selectItems={sortFilters}
        />
      </div>
      <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-3 my-5">
        {filteredList.map((e) => (
          <JobCard key={e._id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default JobBox;
